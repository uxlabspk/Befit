import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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

export default function Programs() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navigation />

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

      <Footer />
    </main>
  );
}
