const pricingPlans = [
  {
    name: "Starter",
    price: "PKR 500",
    period: "/ month",
    description: "Essential tools to begin your training with structure.",
    features: [
      "Basic workout plans",
      "Calorie tracking",
      "Progress logging",
      "Community access",
    ],
    cta: "Start free trial",
    highlighted: false,
    bestFor: "Beginners starting their fitness journey",
  },
  {
    name: "Pro",
    price: "PKR 1,000",
    period: "/ month",
    description: "Full AI coaching, advanced analytics, and competitive features.",
    features: [
      "AI-powered coaching",
      "Advanced analytics dashboard",
      "Leaderboard and challenges",
      "Recovery and sleep tracking",
      "Nutrition macro planning",
      "Priority support",
    ],
    cta: "Get started",
    highlighted: true,
    bestFor: "Serious athletes seeking performance optimization",
  },
  {
    name: "Elite",
    price: "PKR 2,500",
    period: "/ month",
    description: "Coach-led programming with direct access and custom periodization.",
    features: [
      "1-on-1 coach sessions",
      "Custom periodization",
      "Bi-weekly form reviews",
      "Advanced nutrition plans",
      "Exclusive content library",
      "All Pro features",
    ],
    cta: "Contact sales",
    highlighted: false,
    bestFor: "Competitive athletes and fitness professionals",
  },
];

const faqs = [
  {
    question: "Can I switch plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! All new users get a 14-day free trial with full access to Pro features. No credit card required.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, JazzCash, Easypaisa, and bank transfers for annual subscriptions.",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Absolutely. You can cancel anytime from your account settings. You'll retain access until the end of your billing period.",
  },
  {
    question: "Do you offer team or gym discounts?",
    answer: "Yes, we offer bulk pricing for gyms, teams, and corporate wellness programs. Contact our sales team for custom quotes.",
  },
];

const navLinks = ["Programs", "Features", "Pricing", "About"];

export default function Pricing() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-white/[0.95] backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="block text-lg font-bold tracking-tighter">
            BE-FIT
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--foreground)]/[0.6]">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`/${link.toLowerCase()}`} 
                className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-[var(--foreground)] after:transition-all after:duration-200 hover:text-[var(--foreground)] hover:after:w-full transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-sm font-medium">
            <a href="/login" className="rounded px-4 py-2 text-[var(--foreground)]/[0.6] transition hover:text-[var(--foreground)]">
              Login
            </a>
            <a
              href="/signup"
              className="rounded-md bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--foreground)]/[0.9]"
            >
              Join now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-[var(--border)] pt-24">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/[0.4]">
              Pricing
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-none tracking-tighter sm:text-5xl lg:text-6xl">
              Select your plan.
            </h1>
            <p className="mt-6 text-lg text-[var(--foreground)]/[0.5]">
              Transparent pricing. No hidden fees. Cancel anytime. Start with a 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {pricingPlans.map(({ name, price, period, description, features: planFeatures, cta, highlighted, bestFor }) => (
              <article
                key={name}
                className={`rounded-lg border border-[var(--border)] p-10 transition-all duration-350 hover:-translate-y-0.5 ${
                  highlighted
                    ? "border-[var(--foreground)] bg-[var(--muted)] shadow-md"
                    : "bg-white hover:border-[var(--foreground)]/[0.1] hover:shadow-md"
                }`}
              >
                {highlighted && (
                  <div className="mb-5 inline-flex items-center rounded-[var(--foreground)] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold tracking-tighter text-[var(--foreground)]">{name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tighter text-[var(--foreground)]">{price}</span>
                  <span className="mt-0.5 text-sm text-[var(--foreground)]/[0.5]">{period}</span>
                </div>
                <p className="mt-5 text-base text-[var(--foreground)]/[0.6]">{description}</p>
                <p className="mt-3 text-xs font-medium text-[var(--foreground)]/[0.5]">{bestFor}</p>
                 
                <ul className="mt-10 space-y-5 text-sm text-[var(--foreground)]/[0.5]">
                  {planFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-4">
                      <span className="mt-0.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--foreground)]" />
                      <span className="text-sm text-[var(--foreground)]/[0.6]">{feature}</span>
                    </li>
                  ))}
                </ul>
                 
                <a
                  href="/signup"
                  className={`mt-12 inline-flex w-full items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors duration-200 ${
                    highlighted
                      ? "bg-[var(--foreground)] text-white hover:bg-[var(--foreground)]/[0.9]"
                      : "border border-[var(--foreground)]/[0.2] text-[var(--foreground)]/[0.8] hover:bg-[var(--foreground)]/[0.05] hover:text-[var(--foreground)]"
                  }`}
                >
                  {cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tighter">
              Compare plans in detail
            </h2>
            <div className="overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--background)]">
              <table className="w-full text-base">
                <thead className="border-b border-[var(--border)] bg-[var(--muted)]">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-[var(--foreground)]">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold text-[var(--foreground)]">Starter</th>
                    <th className="px-6 py-4 text-center font-semibold text-[var(--foreground)]">Pro</th>
                    <th className="px-6 py-4 text-center font-semibold text-[var(--foreground)]">Elite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {[
                    { feature: "Workout Plans", starter: "Basic", pro: "AI-Powered", elite: "Custom" },
                    { feature: "Calorie Tracking", starter: "✓", pro: "✓", elite: "✓" },
                    { feature: "Progress Analytics", starter: "Basic", pro: "Advanced", elite: "Advanced" },
                    { feature: "AI Coaching", starter: "—", pro: "✓", elite: "✓" },
                    { feature: "Leaderboard Access", starter: "—", pro: "✓", elite: "✓" },
                    { feature: "Recovery Tracking", starter: "—", pro: "✓", elite: "✓" },
                    { feature: "Nutrition Planning", starter: "—", pro: "Macro", elite: "Custom" },
                    { feature: "1-on-1 Coaching", starter: "—", pro: "—", elite: "✓" },
                    { feature: "Form Reviews", starter: "—", pro: "—", elite: "Bi-weekly" },
                    { feature: "Support", starter: "Community", pro: "Priority", elite: "Dedicated" },
                  ].map((row) => (
                    <tr key={row.feature} className="hover:bg-[var(--muted)]">
                      <td className="px-6 py-4 font-medium text-[var(--foreground)]/[0.7]">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-[var(--foreground)]/[0.6]">{row.starter}</td>
                      <td className="px-6 py-4 text-center text-[var(--foreground)]/[0.6]">{row.pro}</td>
                      <td className="px-6 py-4 text-center text-[var(--foreground)]/[0.6]">{row.elite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tighter">
              Frequently asked questions
            </h2>
            <div className="space-y-8">
              {faqs.map(({ question, answer }) => (
                <div key={question} className="rounded-lg border border-[var(--border)] bg-white p-8">
                  <h3 className="mb-3 text-lg font-semibold text-[var(--foreground)]">{question}</h3>
                  <p className="text-base leading-7 text-[var(--foreground)]/[0.6]">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] bg-[var(--foreground)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Still have questions?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/[0.8]">
            Our team is here to help you choose the perfect plan for your fitness goals.
          </p>
          <div className="mt-12 flex items-center justify-center gap-6">
            <a
              href="/signup"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.9] hover:shadow-md"
            >
              Start free trial
            </a>
            <a
              href="/about"
              className="border border-white/[0.3] rounded-md px-6 py-3 text-sm font-medium text-white/[0.7] transition hover:text-white hover:border-white/[0.5]"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="/" className="text-lg font-bold">
                BE-FIT
              </a>
              <p className="mt-4 max-w-xs text-sm leading-7 text-gray-500">
                The advanced training platform for athletes who value consistency, data, and
                intelligent progression.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Product
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li><a href="/features" className="transition hover:text-gray-900">Features</a></li>
                <li><a href="/pricing" className="transition hover:text-gray-900">Pricing</a></li>
                <li><a href="/programs" className="transition hover:text-gray-900">Programs</a></li>
                <li><a href="#" className="transition hover:text-gray-900">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Company
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li><a href="/about" className="transition hover:text-gray-900">About</a></li>
                <li><a href="#" className="transition hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="transition hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="transition hover:text-gray-900">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Socials
              </h3>
              <div className="mt-4 flex gap-4">
                <a href="#" className="text-gray-600 transition hover:text-gray-900" aria-label="Instagram">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 transition hover:text-gray-900" aria-label="X (Twitter)">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 transition hover:text-gray-900" aria-label="YouTube">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 transition hover:text-gray-900" aria-label="TikTok">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.43v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.94 2.94 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.33 6.33 0 0 0 10.86-4.46V9.35a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.78z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 text-xs text-gray-400 sm:flex-row">
            <span>&copy; 2026 BE-FIT. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="transition hover:text-gray-600">Privacy</a>
              <a href="#" className="transition hover:text-gray-600">Terms</a>
              <a href="#" className="transition hover:text-gray-600">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
