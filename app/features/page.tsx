const features = [
  {
    title: "Personalized Plans",
    text: "Smart workout splits, tailored recovery protocols, and goal frameworks that evolve as you progress.",
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    details: [
      "Adaptive workout programming based on your performance",
      "Automatic progression and regression protocols",
      "Custom goal setting with milestone tracking",
      "Periodized training blocks updated monthly",
    ],
  },
  {
    title: "AI Coaching",
    text: "Real-time suggestions for reps, pacing, nutrition timing, and consistency metrics.",
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    details: [
      "Machine learning-powered form corrections",
      "Intelligent rest period recommendations",
      "Nutrition timing alerts based on training schedule",
      "Consistency pattern analysis and interventions",
    ],
  },
  {
    title: "Live Leaderboard",
    text: "Compete with peers through point-based challenges. Earn streaks and unlock tiers.",
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    details: [
      "Real-time ranking updates after every workout",
      "Weekly and monthly challenge competitions",
      "Streak tracking with milestone rewards",
      "Tier-based progression system (Bronze to Diamond)",
    ],
  },
  {
    title: "Recovery Systems",
    text: "Sleep optimization, mobility routines, and load management tools for sustainable performance.",
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    details: [
      "Sleep quality tracking with actionable insights",
      "Daily mobility routines tailored to your training",
      "Training load monitoring to prevent overtraining",
      "Deload week recommendations based on fatigue metrics",
    ],
  },
  {
    title: "Community Access",
    text: "Private challenges, coach-led groups, and a curated feed built to maintain discipline.",
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    details: [
      "Private accountability groups with 10-20 members",
      "Coach-led training camps and challenges",
      "Activity feed with progress celebrations",
      "Direct messaging with training partners",
    ],
  },
  {
    title: "Nutrition Tracking",
    text: "Rapid calorie logging, macro targeting, and meal guidance calibrated to your training load.",
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    details: [
      "Barcode scanning and photo-based food logging",
      "Dynamic macro adjustments based on training intensity",
      "Meal timing recommendations for optimal performance",
      "Hydration tracking with daily reminders",
    ],
  },
];

const navLinks = ["Programs", "Features", "Pricing", "About"];

export default function Features() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="text-lg font-bold tracking-tight">
            BE-FIT
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-500 md:flex">
            {navLinks.map((link) => (
              <a key={link} href={`/${link.toLowerCase()}`} className="relative transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gray-900 after:transition-all after:duration-200 hover:text-gray-900 hover:after:w-full">
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-sm font-medium">
            <a href="/login" className="rounded px-4 py-2 text-gray-600 transition hover:text-gray-900">
              Login
            </a>
            <a
              href="/signup"
              className="rounded-md bg-gray-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              <span className="text-white">Join now</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-gray-100 pt-20">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
              Features
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Everything you need to train smarter.
            </h1>
            <p className="mt-6 text-lg text-gray-500">
              Built on a foundation of sports science and behavioral psychology. Every feature is designed to keep you consistent, motivated, and progressing.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="space-y-24">
            {features.map(({ title, text, icon, details }, index) => (
              <div
                key={title}
                className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-6 text-gray-900">{icon}</div>
                  <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
                  <p className="mb-8 text-base leading-7 text-gray-600">{text}</p>
                  <ul className="space-y-4">
                    {details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gray-900" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="w-full max-w-md rounded-lg border border-gray-200 bg-gray-50 p-8">
                    <div className="mb-6 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-gray-400">
                      <span>{title} preview</span>
                      <span className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[0.65rem]">
                        Active
                      </span>
                    </div>
                    {title === "Personalized Plans" && (
                      <div className="space-y-4">
                        <div className="rounded bg-white p-4 shadow-sm">
                          <div className="text-sm font-semibold">Current Program</div>
                          <div className="mt-1 text-xs text-gray-500">Push/Pull/Legs - Week 3 of 6</div>
                          <div className="mt-3 h-2 w-full rounded-full bg-gray-200">
                            <div className="h-2 w-1/2 rounded-full bg-gray-900" />
                          </div>
                        </div>
                        <div className="rounded bg-white p-4 shadow-sm">
                          <div className="text-sm font-semibold">Next Session</div>
                          <div className="mt-1 text-xs text-gray-500">Pull Day - Tomorrow, 6:00 AM</div>
                        </div>
                      </div>
                    )}
                    {title === "AI Coaching" && (
                      <div className="space-y-3">
                        <div className="rounded bg-white p-3 shadow-sm">
                          <div className="text-xs font-semibold">AI Suggestion</div>
                          <div className="mt-2 text-xs text-gray-600">
                            "Increase weight by 2.5kg on bench press. Your last 3 sessions show consistent form."
                          </div>
                        </div>
                        <div className="rounded bg-white p-3 shadow-sm">
                          <div className="text-xs font-semibold">Consistency Score</div>
                          <div className="mt-2 text-2xl font-bold">94%</div>
                          <div className="text-xs text-gray-500">Last 30 days</div>
                        </div>
                      </div>
                    )}
                    {title === "Live Leaderboard" && (
                      <div className="space-y-3">
                        {[
                          { rank: 1, name: "Alex T.", points: "12,450" },
                          { rank: 2, name: "Sarah P.", points: "11,890" },
                          { rank: 3, name: "You", points: "11,230", highlighted: true },
                        ].map((user) => (
                          <div
                            key={user.rank}
                            className={`rounded p-3 shadow-sm ${
                              user.highlighted ? "bg-gray-900 text-white" : "bg-white"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold">#{user.rank}</span>
                                <span className="text-xs font-semibold">{user.name}</span>
                              </div>
                              <span className="text-xs font-medium">{user.points} pts</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {title === "Recovery Systems" && (
                      <div className="space-y-4">
                        <div className="rounded bg-white p-4 shadow-sm">
                          <div className="text-sm font-semibold">Sleep Quality</div>
                          <div className="mt-2 text-2xl font-bold">7.5 hrs</div>
                          <div className="mt-1 text-xs text-gray-500">Above average ✓</div>
                        </div>
                        <div className="rounded bg-white p-4 shadow-sm">
                          <div className="text-sm font-semibold">Today's Mobility</div>
                          <div className="mt-1 text-xs text-gray-500">Hip flexors & thoracic spine - 15 min</div>
                        </div>
                      </div>
                    )}
                    {title === "Community Access" && (
                      <div className="space-y-3">
                        <div className="rounded bg-white p-3 shadow-sm">
                          <div className="text-xs font-semibold">Your Group</div>
                          <div className="mt-2 text-xs text-gray-600">
                            "Morning Warriors - 15 members active"
                          </div>
                        </div>
                        <div className="rounded bg-white p-3 shadow-sm">
                          <div className="text-xs font-semibold">Current Challenge</div>
                          <div className="mt-1 text-xs text-gray-600">
                            "30-Day Consistency Streak - Day 18/30"
                          </div>
                        </div>
                      </div>
                    )}
                    {title === "Nutrition Tracking" && (
                      <div className="space-y-4">
                        <div className="rounded bg-white p-4 shadow-sm">
                          <div className="text-sm font-semibold">Today's Macros</div>
                          <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                            <div>
                              <div className="text-xs text-gray-500">Protein</div>
                              <div className="text-sm font-bold">145g</div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-500">Carbs</div>
                              <div className="text-sm font-bold">210g</div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-500">Fats</div>
                              <div className="text-sm font-bold">65g</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to experience all these features?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
            Start your free trial today and unlock the full power of intelligent fitness tracking.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="/signup"
              className="inline-flex items-center justify-center rounded-md bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Start free trial
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-600 transition hover:text-gray-900"
            >
              View pricing &rarr;
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
