const steps = [
  {
    number: "01",
    title: "Set your goal",
    text: "Choose your path - gym, home, or hybrid. Define your target, timeline, and intensity level.",
  },
  {
    number: "02",
    title: "Train with AI guidance",
    text: "Follow personalized plans that adapt in real time. Get cues on form, tempo, and recovery.",
  },
  {
    number: "03",
    title: "Track and compete",
    text: "Log workouts, monitor macros, and climb the leaderboard. Every session builds momentum.",
  },
];

const features = [
  {
    title: "Personalized Plans",
    text: "Smart workout splits, tailored recovery protocols, and goal frameworks that evolve as you progress.",
  },
  {
    title: "AI Coaching",
    text: "Real-time suggestions for reps, pacing, nutrition timing, and consistency metrics.",
  },
  {
    title: "Live Leaderboard",
    text: "Compete with peers through point-based challenges. Earn streaks and unlock tiers.",
  },
  {
    title: "Recovery Systems",
    text: "Sleep optimization, mobility routines, and load management tools for sustainable performance.",
  },
  {
    title: "Community Access",
    text: "Private challenges, coach-led groups, and a curated feed built to maintain discipline.",
  },
  {
    title: "Nutrition Tracking",
    text: "Rapid calorie logging, macro targeting, and meal guidance calibrated to your training load.",
  },
];

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
  },
];

const champions = [
  {
    name: "Alex Titan",
    level: "Level 42",
    tag: "Champion of March",
  },
  {
    name: "Sarah Phoenix",
    level: "Level 38",
    tag: "Rising Star",
  },
  {
    name: "Marcus Vane",
    level: "Level 35",
    tag: "Endurance King",
  },
  {
    name: "Amina R.",
    level: "Level 31",
    tag: "Most Improved",
  },
];

const testimonials = [
  {
    quote: "The AI coaching replaced my need for a personal trainer. Every adjustment feels intentional.",
    author: "Zaid K.",
    role: "Gym member, 8 months",
  },
  {
    quote: "Finally a platform that treats recovery as seriously as the workout itself. My joints thank me.",
    author: "Lina M.",
    role: "Home workout, 5 months",
  },
  {
    quote: "The leaderboard changed how I train. Competition with strangers made me consistent for the first time.",
    author: "Omar F.",
    role: "Hybrid path, 3 months",
  },
];

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
  },
];

const navLinks = ["Programs", "Features", "Pricing", "About"];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-lg font-bold tracking-tight">
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
      <section id="top" className="border-b border-gray-100 pt-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-6 animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
              Intelligent fitness platform
            </div>
            <h1 className="max-w-xl animate-fade-up text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl stagger-1">
              Push your
              <br />
              limits. Track
              <br />
              your gains.
            </h1>
            <p className="mt-8 max-w-md animate-fade-up text-base leading-7 text-gray-500 stagger-2">
              A high-performance training ecosystem with intelligent plans, calorie tracking,
              competition loops, and a premium experience designed to keep you consistent.
            </p>
            <div className="mt-10 flex animate-fade-up items-center gap-4 stagger-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-md bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 hover:shadow-lg"
              >
                <span className="text-white">Start training</span>
              </a>
              <a
                href="#features"
                className="group inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-600 transition hover:text-gray-900"
              >
                Learn more
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          <div className="flex animate-slide-right items-end justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                <div className="mb-4 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-gray-400">
                  <span>Daily overview</span>
                  <span className="rounded-full border border-gray-200 px-2 py-0.5 text-[0.65rem]">
                    Live
                  </span>
                </div>

                <div className="mb-6">
                  <div className="animate-count-up text-4xl font-bold">1,284</div>
                  <div className="text-sm text-gray-500">calories burned today</div>
                </div>

                <div className="mb-6 flex items-end gap-1">
                  {[40, 55, 45, 70, 62, 85, 78].map((h, i) => (
                    <div
                      key={i}
                      className="animate-bar-grow flex-1 rounded-sm bg-gray-900"
                      style={{ height: `${h}px`, animationDelay: `${i * 0.08}s` }}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 border-t border-gray-100 pt-4 text-sm">
                  <div>
                    <div className="text-xs text-gray-400">Session</div>
                    <div className="mt-1 font-semibold">Push day</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Focus</div>
                    <div className="mt-1 font-semibold">Peak zone</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Streak</div>
                    <div className="mt-1 font-semibold">12 days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 lg:grid-cols-4 lg:px-8">
          {[
            { value: "500+", label: "Active members" },
            { value: "24/7", label: "AI coaching" },
            { value: "3", label: "Training paths" },
            { value: "98%", label: "Goal adherence" },
          ].map((stat, i) => (
            <div key={stat.label} className={`animate-fade-up text-center lg:text-left stagger-${i + 1}`}>
              <div className="text-3xl font-bold tracking-tight transition-transform duration-200 hover:scale-105">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="programs" className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
              How it works
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Three steps to consistent progress.
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {steps.map(({ number, title, text }, i) => (
              <div key={number} className={`animate-fade-up border-t-2 border-gray-900 pt-6 stagger-${i + 1} transition-transform duration-200 hover:-translate-y-1`}>
                <div className="mb-4 text-xs font-mono font-semibold text-gray-400">{number}</div>
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="text-sm leading-7 text-gray-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
              Features
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to train smarter.
            </h2>
            <p className="mt-4 text-base text-gray-500">
              Built on a foundation of sports science and behavioral psychology.
            </p>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, text }, i) => (
              <div key={title} className={`animate-fade-up border-t border-gray-100 pt-6 stagger-${i + 1} transition-transform duration-200 hover:-translate-y-1`}>
                <h3 className="mb-3 text-lg font-bold">{title}</h3>
                <p className="text-sm leading-7 text-gray-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
              Training programs
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Choose your training path.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {programs.map(({ name, code, description, details }, i) => (
              <article
                key={code}
                className={`animate-fade-up stagger-${i + 1} flex flex-col rounded-lg border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg`}
              >
                <div className="mb-2 text-xs font-mono text-gray-400">{code}</div>
                <h3 className="mb-3 text-xl font-bold">{name}</h3>
                <p className="mb-8 text-sm leading-7 text-gray-500">{description}</p>
                <ul className="mb-8 space-y-3 text-sm text-gray-600">
                  {details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-900" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <a
                  href="#pricing"
                  className=""
                >
                  <span className="w-full mt-auto inline-flex items-center justify-center rounded-md border border-gray-950 px-5 py-2.5 text-sm font-semibold text-gray-950 transition hover:bg-gray-950 hover:text-white">
                    View details
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Champions */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
              Hall of champions
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Real members. Real results.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {champions.map(({ name, level, tag }, i) => (
              <article key={name} className={`animate-fade-up stagger-${i + 1} text-center transition-transform duration-200 hover:-translate-y-1`}>
                <div className="mx-auto mb-5 grid h-32 w-32 place-items-center rounded-full border-2 border-gray-200 bg-gray-50 transition-all duration-200 hover:border-gray-300 hover:shadow-md">
                  <span className="text-2xl font-bold text-gray-300">{name.charAt(0)}</span>
                </div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {tag}
                </div>
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="mt-1 text-sm text-gray-500">{level}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
              Testimonials
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What members say.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map(({ quote, author, role }, i) => (
              <blockquote
                key={author}
                className={`animate-fade-up stagger-${i + 1} rounded-lg border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <p className="text-sm leading-7 text-gray-700">&ldquo;{quote}&rdquo;</p>
                <footer className="mt-6 border-t border-gray-100 pt-4">
                  <div className="text-sm font-semibold">{author}</div>
                  <div className="text-xs text-gray-500">{role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
              Pricing
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Select your plan.
            </h2>
            <p className="mt-4 text-base text-gray-500">
              Transparent pricing. No hidden fees. Cancel anytime.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map(({ name, price, period, description, features: planFeatures, cta, highlighted }, i) => (
              <article
                key={name}
                className={`animate-fade-up stagger-${i + 1} rounded-lg border p-8 transition-all duration-300 hover:-translate-y-1 ${
                  highlighted
                    ? "border-2 border-gray-900 bg-gray-50 shadow-md"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                }`}
              >
                {highlighted && (
                  <div className="mb-4 inline-block rounded bg-gray-900 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-white">
                    Recommended
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-900">{price}</span>
                  <span className="text-sm text-gray-500">{period}</span>
                </div>
                <p className="mt-3 text-sm text-gray-600">{description}</p>
                <ul className="mt-8 space-y-3 text-sm text-gray-600">
                  {planFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-900" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-200 ${
                    highlighted
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                  }`}
                >
                  {cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-gray-100 bg-gray-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Start building discipline today.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base text-gray-400">
              Join hundreds of athletes who turned consistency into their competitive advantage.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="#pricing"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition-all duration-200 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
              >
                <span className="text-gray-950">Get started</span>
              </a>
              <a
                href="#contact"
                className="border rounded-md px-6 py-3 text-sm font-medium text-gray-300 transition hover:text-white"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#top" className="text-lg font-bold">
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
                <li><a href="#features" className="transition hover:text-gray-900">Features</a></li>
                <li><a href="#pricing" className="transition hover:text-gray-900">Pricing</a></li>
                <li><a href="#programs" className="transition hover:text-gray-900">Programs</a></li>
                <li><a href="#" className="transition hover:text-gray-900">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Company
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li><a href="#" className="transition hover:text-gray-900">About</a></li>
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
