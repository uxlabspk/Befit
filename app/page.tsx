import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  StatsBar,
  HowItWorks,
  FeaturesGrid,
  ProgramCards,
  Champions,
  Testimonials,
  PricingCards,
  CTASection,
} from "@/components/sections";

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
      <StatsBar
        stats={[
          { value: "500+", label: "Active members" },
          { value: "24/7", label: "AI coaching" },
          { value: "3", label: "Training paths" },
          { value: "98%", label: "Goal adherence" },
        ]}
      />

      {/* How It Works */}
      <HowItWorks steps={steps} />

      {/* Features Grid */}
      <FeaturesGrid features={features} />

      {/* Training Programs */}
      <ProgramCards programs={programs} />

      {/* Champions */}
      <Champions champions={champions} />

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />

      {/* Pricing */}
      <PricingCards plans={pricingPlans} />

      {/* CTA Section */}
      <CTASection
        title="Start building discipline today."
        subtitle="Join hundreds of athletes who turned consistency into their competitive advantage."
        buttons={[{ label: "Get started", href: "/pricing" }]}
        variant="dark"
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
