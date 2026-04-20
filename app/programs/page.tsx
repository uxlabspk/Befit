const programs = [
  {
    name: "Gym Training",
    code: "GYM-001",
    description: "Equipment-based programming with progressive overload, periodized splits, and video form guides.",
    details: [
      "Structured progressive overload",
      "Exercise video library",
      "Periodized training blocks",
      "Machine and free-weight tracks",
    ],
    fullDescription: "Our Gym Training program is designed for athletes who have access to a full gym facility. Built on sports science principles, this program uses progressive overload and periodization to maximize your strength and hypertrophy gains. Each training block lasts 4-6 weeks, with built-in deload periods to prevent overtraining.",
    idealFor: "Intermediate to advanced lifters with gym access",
    equipment: "Full gym access required",
  },
  {
    name: "Home Workout",
    code: "HOME-002",
    description: "Bodyweight-first methodology with minimal equipment. Adaptive progressions for every level.",
    details: [
      "Zero-equipment baseline",
      "Household item substitutions",
      "Weekly difficulty scaling",
      "Habit and streak tracking",
    ],
    fullDescription: "The Home Workout program proves you don't need a gym to build an impressive physique. Starting with bodyweight fundamentals, the program gradually introduces progressions that challenge you at every level. Using household items as equipment substitutes, you'll build functional strength that translates to real-world performance.",
    idealFor: "Beginners to intermediate, busy professionals",
    equipment: "Minimal - resistance bands recommended",
  },
  {
    name: "Hybrid Path",
    code: "HYB-003",
    description: "Blended programming combining gym sessions on high days with home recovery and mobility work.",
    details: [
      "Flexible gym-home split",
      "Recovery-day programming",
      "Travel-friendly routines",
      "Auto-scheduling system",
    ],
    fullDescription: "The Hybrid Path offers the best of both worlds. Train with intensity at the gym on your high-energy days, then switch to home-based recovery, mobility, and light conditioning work on other days. Our auto-scheduling system adapts to your weekly availability, ensuring optimal training frequency regardless of your schedule.",
    idealFor: "All levels, flexible schedule preference",
    equipment: "Gym access 2-3x per week, minimal home equipment",
  },
];

const navLinks = ["Programs", "Features", "Pricing", "About"];

export default function Programs() {
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
              Training programs
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-none tracking-tighter sm:text-5xl lg:text-6xl">
              Choose your training path.
            </h1>
            <p className="mt-6 text-lg text-[var(--foreground)]/[0.5]">
              Three evidence-based approaches designed to fit your lifestyle, equipment access, and goals. Every program adapts to your progress.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Detail */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <div className="space-y-28">
            {programs.map(({ name, code, description, details, fullDescription, idealFor, equipment }, index) => (
              <article
                key={code}
                className={`grid gap-14 lg:grid-cols-2 lg:gap-20 ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-5 text-xs font-mono text-[var(--foreground)]/[0.3]">{code}</div>
                  <h2 className="mb-5 text-3xl font-bold tracking-tighter sm:text-4xl">{name}</h2>
                  <p className="mb-8 text-base leading-7 text-[var(--foreground)]/[0.6]">{fullDescription}</p>
                  <div className="space-y-6 rounded-lg border border-[var(--border)] bg-[var(--muted)] p-8">
                    <div>
                      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]/[0.4]">
                        Ideal for
                      </div>
                      <div className="mt-1 text-sm font-medium text-[var(--foreground)]/[0.5]">{idealFor}</div>
                    </div>
                    <div className="mt-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]/[0.4]">
                        Equipment
                      </div>
                      <div className="mt-1 text-sm font-medium text-[var(--foreground)]/[0.5]">{equipment}</div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-10">
                    <h3 className="mb-7 text-lg font-semibold tracking-tighter">Program includes:</h3>
                    <ul className="mb-9 space-y-5 text-sm text-[var(--foreground)]/[0.5]">
                      {details.map((detail) => (
                        <li key={detail} className="flex items-start gap-4">
                          <span className="mt-0.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--foreground)]" />
                          <span className="text-sm text-[var(--foreground)]/[0.6]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/pricing"
                      className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors duration-200 hover:bg-[var(--foreground)]/[0.05] hover:text-[var(--foreground)]/[0.9]"
                    >
                      Get started with {name}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Not sure which program is right for you?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
            Take our 2-minute assessment to get a personalized recommendation based on your goals, experience, and available equipment.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="/signup"
              className="inline-flex items-center justify-center rounded-md bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Take the assessment
            </a>
            <a
              href="/features"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-600 transition hover:text-gray-900"
            >
              Learn more about features &rarr;
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
