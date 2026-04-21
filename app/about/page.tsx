import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { StatsBar, CTASection } from "@/components/sections";

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

export default function About() {
  return (
    <main className="min-h-screen animate-fade-in bg-[var(--background)] text-[var(--foreground)]">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b border-[var(--border)] pt-24">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/[0.4]">
              About us
            </div>
            <h1 className="mt-4 animate-fade-up text-4xl font-bold leading-none tracking-tighter stagger-1 sm:text-5xl lg:text-6xl">
              Building the future of intelligent fitness.
            </h1>
            <p className="mt-6 animate-fade-up text-lg text-[var(--foreground)]/[0.5] stagger-2">
              We're on a mission to make world-class fitness coaching accessible to everyone, powered by science, technology, and community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-3xl animate-fade-up">
            <h2 className="mb-10 text-3xl font-bold tracking-tighter">Our story</h2>
            <div className="space-y-8 text-base leading-7 text-[var(--foreground)]/[0.6]">
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
      <section className="border-t border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tighter">Our journey</h2>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-10">
              {milestones.map(({ year, event }, index) => (
                <div
                  key={year}
                  className="flex animate-fade-up gap-8"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--foreground)] text-sm font-bold text-white">
                      {year}
                    </div>
                  </div>
                  <div className="flex-grow border-l-2 border-[var(--foreground)]/[0.1] pl-6 pt-2">
                    <p className="text-base text-[var(--foreground)]/[0.7]">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tighter">What we believe</h2>
            <p className="mt-4 text-base text-[var(--foreground)]/[0.5]">
              Our core values guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ title, description }, index) => (
              <div
                key={title}
                className="animate-fade-up rounded-lg border border-[var(--border)] bg-white p-10 transition-all duration-350 hover:-translate-y-0.5 hover:shadow-md"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <h3 className="mb-4 text-xl font-bold tracking-tighter">{title}</h3>
                <p className="text-base leading-7 text-[var(--foreground)]/[0.6]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tighter">Meet the team</h2>
            <p className="mt-4 text-base text-[var(--foreground)]/[0.5]">
              The passionate people behind BE-FIT's mission to transform fitness.
            </p>
          </div>

          <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map(({ name, role, bio }, index) => (
              <div key={name} className="animate-fade-up text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mx-auto mb-6 grid h-36 w-36 place-items-center rounded-full border-[1px] border-[var(--border)] bg-[var(--background)] shadow-sm transition-all duration-300 hover:border-[var(--foreground)]/[0.2] hover:shadow-sm">
                  <span className="text-2xl font-bold text-[var(--foreground)]/[0.6]">{name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-bold tracking-tighter">{name}</h3>
                <p className="mt-1.5 text-sm font-medium text-[var(--foreground)]/[0.5]">{role}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--foreground)]/[0.6]">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar
        stats={[
          { value: "10,000+", label: "Active members" },
          { value: "500,000+", label: "Workouts completed" },
          { value: "98%", label: "Satisfaction rate" },
          { value: "24/7", label: "AI coaching available" },
        ]}
        muted={false}
      />

      {/* CTA Section */}
      <CTASection
        title="Join the BE-FIT movement"
        subtitle="Be part of a community that's redefining what's possible through intelligent training and unwavering consistency."
        buttons={[
          { label: "Get started today", href: "/signup" },
        ]}
      />

      <Footer />
    </main>
  );
}
