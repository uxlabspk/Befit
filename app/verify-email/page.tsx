"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function VerifyEmail() {
  const searchParams = useSearchParams();
  const token = useMemo(() => searchParams.get("token") ?? "", [searchParams]);
  const initialEmail = useMemo(() => searchParams.get("email") ?? "", [searchParams]);
  const [email, setEmail] = useState(initialEmail);
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [loadingResend, setLoadingResend] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleVerifyNow() {
    if (!token) {
      setError("Verification token is missing.");
      return;
    }

    setLoadingVerify(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`/api/auth/verify-email?token=${encodeURIComponent(token)}`);
      const data = await response.json();

      if (!response.ok) {
        setError(data.message ?? "Unable to verify email.");
        return;
      }

      setSuccess(data.message ?? "Email verified successfully. You can now sign in.");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoadingVerify(false);
    }
  }

  async function handleResend() {
    if (!email) {
      setError("Please provide your email address.");
      return;
    }

    setLoadingResend(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/auth/resend-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.message ?? "Unable to resend verification email.");
        return;
      }

      setSuccess(data.message ?? "Verification email sent.");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoadingResend(false);
    }
  }

  return (
    <main className="min-h-screen animate-fade-in bg-white">
      {/* Full-screen auth container */}
      <div className="flex min-h-screen items-center justify-center">
        {/* Right side - Form */}
        <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2 lg:px-12">
          <div className="w-full max-w-md animate-fade-up">
            {/* Mobile logo */}
            <div className="mb-8 lg:hidden">
              <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
                BE-FIT
              </Link>
            </div>

            {/* Icon */}
            <div className="mb-6 flex animate-fade-up justify-center stagger-1">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <svg className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <div className="mb-8 animate-fade-up text-center stagger-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Check your email</h2>
              <p className="mt-3 text-sm text-gray-600">
                We&apos;ve sent a verification link to
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                {email || "your email address"}
              </p>
            </div>

            <div className="space-y-6 animate-fade-up stagger-3">
              <div>
                <label htmlFor="verify-email-input" className="mb-2 block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="verify-email-input"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="block w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                  placeholder="you@example.com"
                />
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium text-gray-900">Didn&apos;t receive the email?</p>
                    <p className="mt-1">Check your spam folder or click below to resend.</p>
                  </div>
                </div>
              </div>

              {error ? (
                <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
              ) : null}

              {success ? (
                <p className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">{success}</p>
              ) : null}

              <button
                type="button"
                onClick={handleVerifyNow}
                disabled={loadingVerify || !token}
                className="flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loadingVerify ? "Verifying..." : "Verify email now"}
              </button>

              <button
                type="button"
                onClick={handleResend}
                disabled={loadingResend}
                className="flex w-full justify-center rounded-md bg-gray-950 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                {loadingResend ? "Sending..." : "Resend verification email"}
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already verified?{" "}
                  <Link href="/login" className="font-semibold text-gray-900 transition hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
