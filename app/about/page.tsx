const teamMembers = [
  {
    name: "Ahmed Hassan",
    role: "Founder & CEO",
    bio: "Former competitive athlete turned tech entrepreneur. Passionate about making elite fitness accessible to everyone.",
  },
  {
    name: "Dr. Sara Malik",
    role: "Head of Sports Science",
    bio: "PhD in Exercise Physiology. Leads our research-backed approach to training program design and recovery protocols.",
  },
  {
    name: "Bilal Khan",
    role: "Lead Developer",
    bio: "Full-stack engineer with a focus on AI/ML. Built the adaptive coaching algorithms that power personalized training.",
  },
  {
    name: "Ayesha Rahman",
    role: "Head of Community",
    bio: "Certified fitness coach and community builder. Ensures every member feels supported and motivated.",
  },
];

const values = [
  {
    title: "Science-First",
    description: "Every feature is backed by peer-reviewed research and validated by sports scientists.",
  },
  {
    title: "Accessibility",
    description: "Premium fitness coaching shouldn't be limited to those who can afford expensive personal trainers.",
  },
  {
    title: "Consistency Over Intensity",
    description: "We believe sustainable progress comes from showing up daily, not from occasional heroic efforts.",
  },
  {
    title: "Data-Driven",
    description: "Track everything, guess nothing. Let data guide your training decisions and reveal patterns.",
  },
  {
    title: "Community Powered",
    description: "Fitness is better together. Our community keeps you accountable and motivated.",
  },
  {
    title: "Continuous Evolution",
    description: "Your body adapts, so should your training. We constantly evolve to match your progress.",
  },
];

const milestones = [
  { year: "2023", event: "BE-FIT founded with a vision to democratize fitness coaching" },
  { year: "2024", event: "Launched AI coaching system with 500+ beta users" },
  { year: "2025", event: "Reached 10,000 active members across Pakistan" },
  { year: "2026", event: "Introduced Elite coaching tier with 1-on-1 sessions" },
];

const navLinks = ["Programs", "Features", "Pricing", "About"];

export default function About() {
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
              About us
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Building the future of intelligent fitness.
            </h1>
            <p className="mt-6 text-lg text-gray-500">
              We're on a mission to make world-class fitness coaching accessible to everyone, powered by science, technology, and community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold tracking-tight">Our story</h2>
            <div className="space-y-6 text-base leading-8 text-gray-600">
              <p>
                BE-FIT was born from a simple frustration: personalized fitness coaching was either prohibitively expensive or completely inaccessible to most people. We knew there had to be a better way.
              </p>
              <p>
                Our founders combined decades of experience in competitive athletics, sports science, and technology to create a platform that delivers elite-level coaching through intelligent algorithms and community-driven accountability.
              </p>
              <p>
                Today, BE-FIT serves thousands of athletes across Pakistan, from beginners taking their first steps into fitness to competitive athletes pushing their limits. Our AI coaching system continuously learns from millions of training sessions to provide increasingly personalized guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Our journey</h2>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                      {year}
                    </div>
                  </div>
                  <div className="flex-grow border-l-2 border-gray-200 pl-6 pt-2">
                    <p className="text-base text-gray-700">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">What we believe</h2>
            <p className="text-base text-gray-500">
              Our core values guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ title, description }) => (
              <div
                key={title}
                className="rounded-lg border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="text-sm leading-7 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Meet the team</h2>
            <p className="text-base text-gray-500">
              The passionate people behind BE-FIT's mission to transform fitness.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map(({ name, role, bio }) => (
              <div key={name} className="text-center">
                <div className="mx-auto mb-5 grid h-32 w-32 place-items-center rounded-full border-2 border-gray-200 bg-white shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md">
                  <span className="text-2xl font-bold text-gray-300">{name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="mt-1 text-sm font-medium text-gray-500">{role}</p>
                <p className="mt-3 text-sm leading-7 text-gray-600">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 rounded-lg border border-gray-200 bg-gray-50 p-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "10,000+", label: "Active members" },
              { value: "500,000+", label: "Workouts completed" },
              { value: "98%", label: "Satisfaction rate" },
              { value: "24/7", label: "AI coaching available" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold tracking-tight">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-100 bg-gray-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Join the BE-FIT movement
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
            Be part of a community that's redefining what's possible through intelligent training and unwavering consistency.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="/signup"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-gray-100"
            >
              Get started today
            </a>
            <a
              href="/programs"
              className="rounded-md border border-gray-700 px-6 py-3 text-sm font-medium text-gray-300 transition hover:text-white"
            >
              Explore programs
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
