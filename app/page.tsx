import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
    <main className="min-h-screen bg-white text-[var(--foreground)]">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="top" className="border-b border-[var(--border)] pt-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-28 lg:grid-cols-2 lg:px-8 lg:py-36">
          <div className="flex flex-col justify-center">
            <div className="mb-8 animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/[0.5]">
              Intelligent fitness platform
            </div>
            <h1 className="max-w-xl animate-fade-up text-5xl font-bold leading-none tracking-tighter sm:text-6xl lg:text-7xl stagger-1">
              Push your
              <br className="hidden lg:inline-block" />
              limits. Track
              <br className="hidden lg:inline-block" />
              your gains.
            </h1>
            <p className="mt-8 max-w-xl animate-fade-up text-base leading-7 text-[var(--foreground)]/[0.6] stagger-2">
              A high-performance training ecosystem with intelligent plans, calorie tracking,
              competition loops, and a premium experience designed to keep you consistent.
            </p>
            <div className="mt-12 flex animate-fade-up items-center gap-6 stagger-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-md bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--foreground)]/[0.9] hover:shadow-lg"
              >
                <span className="text-white">Start Training</span>
              </a>
              <a
                href="#features"
                className="group inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[var(--foreground)]/[0.6] hover:text-[var(--foreground)] transition"
              >
                Learn more
                <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="flex animate-slide-right items-end justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="rounded-lg border border-[var(--border)] bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
                <div className="mb-6 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-[var(--foreground)]/[0.4]">
                  <span>Daily overview</span>
                  <span className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[0.65rem]">
                    Live
                  </span>
                </div>

                <div className="mb-8">
                  <div className="animate-count-up text-4xl font-bold text-[var(--foreground)]">1,284</div>
                  <div className="text-sm text-[var(--foreground)]/[0.5]">calories burned today</div>
                </div>

                <div className="mb-8 flex items-end gap-2">
                  {[40, 55, 45, 70, 62, 85, 78].map((h, i) => (
                    <div
                      key={i}
                      className="animate-bar-grow flex-1 rounded-sm bg-[var(--foreground)]"
                      style={{ height: `${h}px`, animationDelay: `${i * 0.08}s` }}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-[var(--border)] pt-5 text-[var(--foreground)]/[0.5] text-sm">
                  <div>
                    <div className="mb-1 text-xs">Session</div>
                    <div className="font-semibold">Push day</div>
                  </div>
                  <div>
                    <div className="mb-1 text-xs">Focus</div>
                    <div className="font-semibold">Peak zone</div>
                  </div>
                  <div>
                    <div className="mb-1 text-xs">Streak</div>
                    <div className="font-semibold">12 days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 lg:grid-cols-4 lg:px-8">
          {[
            { value: "500+", label: "Active members" },
            { value: "24/7", label: "AI coaching" },
            { value: "3", label: "Training paths" },
            { value: "98%", label: "Goal adherence" },
          ].map((stat, i) => (
            <div key={stat.label} className={`animate-fade-up stagger-${i + 1}`}>
              <div className="block text-3xl font-bold tracking-tighter">{stat.value}</div>
              <div className="mt-2 block text-sm text-[var(--foreground)]/[0.6]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="programs" className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mb-20">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/[0.4]">
              How it works
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
              Three steps to consistent progress.
            </h2>
          </div>

          <div className="grid gap-16 md:grid-cols-3">
            {steps.map(({ number, title, text }, i) => (
              <div 
                key={number} 
                className={`animate-fade-up border-t-2 border-[var(--foreground)] pt-6 stagger-${i + 1} transition-transform duration-300 hover:-translate-y-0.5`}
              >
                <div className="mb-5 text-xs font-mono font-semibold text-[var(--foreground)]/[0.4]">{number}</div>
                <h3 className="mb-3 text-xl font-bold tracking-tighter">{title}</h3>
                <p className="text-base leading-7 text-[var(--foreground)]/[0.6]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/[0.4]">
              Features
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
              Everything you need to train smarter.
            </h2>
            <p className="mt-4 text-base text-[var(--foreground)]/[0.5]">
              Built on a foundation of sports science and behavioral psychology.
            </p>
          </div>

          <div className="mt-20 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, text }, i) => (
              <div 
                key={title} 
                className={`animate-fade-up border-t border-[var(--border)] pt-8 stagger-${i + 1} transition-transform duration-300 hover:-translate-y-0.5`}
              >
                <h3 className="mb-4 text-lg font-bold tracking-tighter">{title}</h3>
                <p className="text-base leading-7 text-[var(--foreground)]/[0.6]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="border-b border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mb-20">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/[0.4]">
              Training programs
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
              Choose your training path.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {programs.map(({ name, code, description, details }, i) => (
              <article
                key={code}
                className={`animate-fade-up stagger-${i + 1} flex flex-col rounded-lg border border-[var(--border)] bg-white p-10 transition-all duration-350 hover:-translate-y-0.5 hover:border-[var(--foreground)]/[0.1] hover:shadow-md`}
              >
                <div className="mb-3 text-xs font-mono text-[var(--foreground)]/[0.3]">{code}</div>
                <h3 className="mb-4 text-xl font-bold tracking-tighter">{name}</h3>
                <p className="mb-10 text-base leading-7 text-[var(--foreground)]/[0.6]">{description}</p>
                <ul className="mb-10 space-y-4 text-sm text-[var(--foreground)]/[0.5]">
                  {details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--foreground)]" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <a
                  href="#pricing"
                  className="w-full mt-auto inline-flex items-center justify-center rounded-md border border-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors duration-200 hover:bg-[var(--foreground)]/[0.05] hover:text-[var(--foreground)]/[0.9]"
                >
                  View details
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Champions */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/[0.4]">
              Hall of champions
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
              Real members. Real results.
            </h2>
          </div>

          <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {champions.map(({ name, level, tag }, i) => (
              <article 
                key={name} 
                className={`animate-fade-up stagger-${i + 1} text-center transition-transform duration-350 hover:-translate-y-0.5`}
              >
                <div className="mx-auto mb-6 grid h-36 w-36 place-items-center rounded-full border-[1px] border-[var(--border)] bg-[var(--muted)] transition-all duration-300 hover:border-[var(--foreground)]/[0.2] hover:shadow-sm">
                  <span className="text-2xl font-bold text-[var(--foreground)]/[0.6]">{name.charAt(0)}</span>
                </div>
                <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]/[0.4]">
                  {tag}
                </div>
                <h3 className="text-lg font-bold tracking-tighter">{name}</h3>
                <p className="mt-1.5 text-sm text-[var(--foreground)]/[0.5]">{level}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mb-20">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/[0.4]">
              Testimonials
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
              What members say.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map(({ quote, author, role }, i) => (
              <blockquote
                key={author}
                className={`animate-fade-up stagger-${i + 1} rounded-lg border border-[var(--border)] bg-white p-10 transition-all duration-350 hover:-translate-y-0.5 hover:shadow-md`}
              >
                <p className="mt-2 text-base leading-7 text-[var(--foreground)]/[0.7]">&ldquo;{quote}&rdquo;</p>
                <footer className="mt-8 border-t border-[var(--border)] pt-6">
                  <div className="text-sm font-semibold">{author}</div>
                  <div className="mt-1 text-xs text-[var(--foreground)]/[0.5]">{role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/[0.4]">
              Pricing
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
              Select your plan.
            </h2>
            <p className="mt-4 text-base text-[var(--foreground)]/[0.5]">
              Transparent pricing. No hidden fees. Cancel anytime.
            </p>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {pricingPlans.map(({ name, price, period, description, features: planFeatures, cta, highlighted }, i) => (
              <article
                key={name}
                className={`animate-fade-up stagger-${i + 1} rounded-lg border border-[var(--border)] p-10 transition-all duration-350 hover:-translate-y-0.5 ${
                  highlighted
                    ? "border-[var(--foreground)] bg-[var(--muted)] shadow-sm"
                    : "bg-white hover:border-[var(--foreground)]/[0.1] hover:shadow-md"
                }`}
              >
                <h3 className="text-lg font-semibold tracking-tighter text-[var(--foreground)]">{name}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tighter text-[var(--foreground)]">{price}</span>
                  <span className="mt-0.5 text-sm text-[var(--foreground)]/[0.5]">{period}</span>
                </div>
                <p className="mt-4 text-base text-[var(--foreground)]/[0.6]">{description}</p>
                <ul className="mt-10 space-y-4 text-sm text-[var(--foreground)]/[0.5]">
                  {planFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--foreground)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-10 inline-flex w-full items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors duration-200 border border-[var(--foreground)]/[0.2] text-[var(--foreground)]/[0.8] hover:bg-[var(--foreground)]/[0.05] hover:text-[var(--foreground)]`}
                >
                  {cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-[var(--border)] bg-[var(--foreground)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
              Start building discipline today.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base text-white/[0.8]">
              Join hundreds of athletes who turned consistency into their competitive advantage.
            </p>
            <div className="mt-12 flex items-center justify-center gap-6">
              <a
                href="/pricing"
                className="w-64 border border-white/[0.3] rounded-md px-6 py-3 text-sm font-medium text-white/[0.7] transition hover:text-white hover:border-white/[0.5]"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
