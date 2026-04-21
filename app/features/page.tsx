import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CTASection } from "@/components/sections";

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

export default function Features() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b border-[var(--border)] pt-24">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/[0.4]">
              Features
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-none tracking-tighter sm:text-5xl lg:text-6xl">
              Everything you need to train smarter.
            </h1>
            <p className="mt-6 text-lg text-[var(--foreground)]/[0.5]">
              Built on a foundation of sports science and behavioral psychology. Every feature is designed to keep you consistent, motivated, and progressing.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <div className="space-y-28">
            {features.map(({ title, text, icon, details }, index) => (
              <div
                key={title}
                className={`grid gap-14 lg:grid-cols-2 lg:gap-20 ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-8 text-[var(--foreground)]">{icon}</div>
                  <h2 className="mb-5 text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
                  <p className="mb-10 text-base leading-7 text-[var(--foreground)]/[0.6]">{text}</p>
                  <ul className="space-y-5">
                    {details.map((detail) => (
                      <li key={detail} className="flex items-start gap-4">
                        <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--foreground)]" />
                        <span className="text-sm text-[var(--foreground)]/[0.6]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="w-full max-w-md rounded-lg border border-[var(--border)] bg-[var(--background)] p-10">
                    <div className="mb-8 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-[var(--foreground)]/[0.4]">
                      <span>{title} preview</span>
                      <span className="rounded-full text-white font-bold border border-[var(--border)] bg-[var(--foreground)] px-2.5 py-0.5 text-[0.65rem]">
                        Active
                      </span>
                    </div>
                    {title === "Personalized Plans" && (
                      <div className="space-y-5">
                        <div className="rounded-lg border border-[var(--border)] bg-white p-6">
                          <div className="text-sm font-semibold text-[var(--foreground)]/[0.5]">Current Program</div>
                          <div className="mt-2 text-xs text-[var(--foreground)]/[0.4]">Push/Pull/Legs - Week 3 of 6</div>
                          <div className="mt-4 h-2.5 w-full rounded-full bg-[var(--muted)]">
                            <div className="h-2.5 w-1/2 rounded-full bg-[var(--foreground)]" />
                          </div>
                        </div>
                        <div className="rounded-lg border border-[var(--border)] bg-white p-6">
                          <div className="text-sm font-semibold text-[var(--foreground)]/[0.5]">Next Session</div>
                          <div className="mt-2 text-xs text-[var(--foreground)]/[0.4]">Pull Day - Tomorrow, 6:00 AM</div>
                        </div>
                      </div>
                    )}
                    {title === "AI Coaching" && (
                      <div className="space-y-4">
                        <div className="rounded-lg border border-[var(--border)] bg-white p-5">
                          <div className="text-xs font-semibold text-[var(--foreground)]/[0.4]">AI Suggestion</div>
                          <div className="mt-3 text-xs text-[var(--foreground)]/[0.6]">
                            "Increase weight by 2.5kg on bench press. Your last 3 sessions show consistent form."
                          </div>
                        </div>
                        <div className="rounded-lg border border-[var(--border)] bg-white p-5">
                          <div className="text-xs font-semibold text-[var(--foreground)]/[0.4]">Consistency Score</div>
                          <div className="mt-2 text-3xl font-bold text-[var(--foreground)]">94%</div>
                          <div className="text-xs text-[var(--foreground)]/[0.5]">Last 30 days</div>
                        </div>
                      </div>
                    )}
                    {title === "Live Leaderboard" && (
                      <div className="space-y-4">
                        {[
                          { rank: 1, name: "Alex T.", points: "12,450" },
                          { rank: 2, name: "Sarah P.", points: "11,890" },
                          { rank: 3, name: "You", points: "11,230", highlighted: true },
                        ].map((user) => (
                          <div
                            key={user.rank}
                            className={`rounded-lg border p-5 ${
                              user.highlighted 
                                ? "border-[var(--foreground)] bg-[var(--muted)] text-[var(--foreground)]" 
                                : "border-[var(--border)] bg-white text-[var(--foreground)]/[0.8]"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-[var(--foreground)]/[0.5]">#{user.rank}</span>
                                <span className="text-xs font-semibold text-[var(--foreground)]">{user.name}</span>
                              </div>
                              <span className="text-xs font-medium text-[var(--foreground)]/[0.6]">{user.points} pts</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {title === "Recovery Systems" && (
                      <div className="space-y-5">
                        <div className="rounded-lg border border-[var(--border)] bg-white p-6">
                          <div className="text-sm font-semibold text-[var(--foreground)]/[0.5]">Sleep Quality</div>
                          <div className="mt-3 text-2xl font-bold text-[var(--foreground)]">7.5 hrs</div>
                          <div className="mt-1 text-xs text-[var(--foreground)]/[0.5]">Above average ✓</div>
                        </div>
                        <div className="rounded-lg border border-[var(--border)] bg-white p-6">
                          <div className="text-sm font-semibold text-[var(--foreground)]/[0.5]">Today's Mobility</div>
                          <div className="mt-2 text-xs text-[var(--foreground)]/[0.4]">Hip flexors & thoracic spine - 15 min</div>
                        </div>
                      </div>
                    )}
                    {title === "Community Access" && (
                      <div className="space-y-4">
                        <div className="rounded-lg border border-[var(--border)] bg-white p-5">
                          <div className="text-xs font-semibold text-[var(--foreground)]/[0.4]">Your Group</div>
                          <div className="mt-3 text-xs text-[var(--foreground)]/[0.6]">
                            "Morning Warriors - 15 members active"
                          </div>
                        </div>
                        <div className="rounded-lg border border-[var(--border)] bg-white p-5">
                          <div className="text-xs font-semibold text-[var(--foreground)]/[0.4]">Current Challenge</div>
                          <div className="mt-1 text-xs text-[var(--foreground)]/[0.6]">
                            "30-Day Consistency Streak - Day 18/30"
                          </div>
                        </div>
                      </div>
                    )}
                    {title === "Nutrition Tracking" && (
                      <div className="space-y-5">
                        <div className="rounded-lg border border-[var(--border)] bg-white p-6">
                          <div className="text-sm font-semibold text-[var(--foreground)]/[0.5]">Today's Macros</div>
                          <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                            <div>
                              <div className="text-xs text-[var(--foreground)]/[0.4]">Protein</div>
                              <div className="text-sm font-bold text-[var(--foreground)]">145g</div>
                            </div>
                            <div>
                              <div className="text-xs text-[var(--foreground)]/[0.4]">Carbs</div>
                              <div className="text-sm font-bold text-[var(--foreground)]">210g</div>
                            </div>
                            <div>
                              <div className="text-xs text-[var(--foreground)]/[0.4]">Fats</div>
                              <div className="text-sm font-bold text-[var(--foreground)]">65g</div>
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
      <CTASection
        title="Ready to experience all these features?"
        subtitle="Start your free trial today and unlock the full power of intelligent fitness tracking."
        buttons={[
          { label: "Start free trial", href: "/signup" },
        ]}        
      />

      <Footer />
    </main>
  );
}
