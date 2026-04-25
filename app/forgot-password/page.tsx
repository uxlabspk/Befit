"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message ?? "Unable to send reset email.");
        return;
      }

      setSuccess(data.message ?? "Please check your email for reset instructions.");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
            </div>

            <div className="mb-8 animate-fade-up text-center stagger-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Reset password</h2>
              <p className="mt-3 text-sm text-gray-600">
                Enter your email address and we&apos;ll send you a link to reset your password.
              </p>
            </div>

            <form className="space-y-6 animate-fade-up stagger-3" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {error ? (
                <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
              ) : null}

              {success ? (
                <p className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">{success}</p>
              ) : null}

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full justify-center rounded-md bg-gray-950 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {loading ? "Sending..." : "Send reset link"}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <Link href="/login" className="inline-flex items-center text-sm font-medium text-gray-600 transition hover:text-gray-900">
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to login
              </Link>
            </div>

            <div className="mt-12 animate-fade-up rounded-lg border border-gray-200 bg-gray-50 p-6 stagger-4">
              <div className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm text-gray-600">
                  <p className="font-medium text-gray-900">Having trouble?</p>
                  <p className="mt-1">
                    If you don&apos;t receive an email within a few minutes, check your spam folder.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="mt-8 rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-sm font-semibold text-gray-900">What happens next?</h3>
              <ol className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                    1
                  </span>
                  <span>We'll send a secure reset link to your email</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                    2
                  </span>
                  <span>Click the link to create a new password</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                    3
                  </span>
                  <span>Sign in with your new password and continue training</span>
                </li>
              </ol>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
