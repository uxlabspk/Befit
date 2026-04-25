"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = useMemo(() => searchParams.get("token") ?? "", [searchParams]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!token) {
      setError("Reset token is missing or invalid.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password, confirmPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message ?? "Unable to reset password.");
        return;
      }

      setSuccess(data.message ?? "Password reset successful.");
      setTimeout(() => {
        router.push("/login");
      }, 1200);
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>

            <div className="mb-8 animate-fade-up text-center stagger-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">New password</h2>
              <p className="mt-3 text-sm text-gray-600">
                Create a new strong password for your account
              </p>
            </div>

            <form className="space-y-5 animate-fade-up stagger-3" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  New password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="new-password"
                    required
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm new password
                </label>
                <div className="mt-2">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    autoComplete="new-password"
                    required
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Password strength indicator */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-700">Password strength</span>
                  <span className="text-xs font-semibold text-green-600">Strong</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-3/4 rounded-full bg-green-500 transition-all" />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 text-green-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    8+ characters
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Uppercase letter
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Number
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Special character
                  </div>
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
                  disabled={loading || !token}
                  className="flex w-full justify-center rounded-md bg-gray-950 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {loading ? "Resetting..." : "Reset password"}
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
          </div>
        </div>
      </div>
    </main>
  );
}
