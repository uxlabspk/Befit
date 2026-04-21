interface Step {
  number: string;
  title: string;
  text: string;
}

interface HowItWorksProps {
  steps: Step[];
  eyebrow?: string;
  title?: string;
}

export default function HowItWorks({
  steps,
  eyebrow = "How it works",
  title = "Three steps to consistent progress.",
}: HowItWorksProps) {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="mb-20">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/[0.4]">
            {eyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
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
  );
}
