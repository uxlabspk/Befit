import Link from "next/link";

export default function VerifyEmail() {
  return (
    <main className="min-h-screen bg-white">
      {/* Full-screen auth container */}
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left side - Branding */}
        <div className="hidden flex-col justify-between bg-gray-950 p-12 text-white lg:flex lg:w-1/2">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              BE-FIT
            </Link>
          </div>

          <div className="max-w-md">
            <h1 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              Almost there! Let's secure your account.
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-400">
              Email verification ensures your account is secure and gives you access to all BE-FIT features.
            </p>

            <div className="mt-12 rounded-lg border border-gray-800 bg-gray-900/50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-800">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Security First</h3>
                  <p className="mt-1 text-xs text-gray-400">
                    We use industry-standard encryption to protect your data and privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-500">
            &copy; 2026 BE-FIT. All rights reserved.
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2 lg:px-12">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <div className="mb-8 lg:hidden">
              <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
                BE-FIT
              </Link>
            </div>

            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <svg className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Check your email</h2>
              <p className="mt-3 text-sm text-gray-600">
                We've sent a verification link to
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                john@example.com
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium text-gray-900">Didn't receive the email?</p>
                    <p className="mt-1">Check your spam folder or click below to resend.</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="flex w-full justify-center rounded-md bg-gray-950 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Resend verification email
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

            <div className="mt-12 rounded-lg border border-gray-200 p-6">
              <h3 className="mb-4 text-sm font-semibold text-gray-900">What's next?</h3>
              <ol className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                    1
                  </span>
                  <span>Click the verification link in your email</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                    2
                  </span>
                  <span>Complete your profile and set your fitness goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                    3
                  </span>
                  <span>Start your first AI-powered workout</span>
                </li>
              </ol>
            </div>

            <p className="mt-8 text-center text-xs text-gray-500">
              Need help?{" "}
              <Link href="/about" className="underline hover:text-gray-900">
                Contact support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
