interface Feature {
  title: string;
  text: string;
}

interface FeaturesGridProps {
  features: Feature[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export default function FeaturesGrid({
  features,
  eyebrow = "Features",
  title = "Everything you need to train smarter.",
  subtitle = "Built on a foundation of sports science and behavioral psychology.",
}: FeaturesGridProps) {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/[0.4]">
            {eyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base text-[var(--foreground)]/[0.5]">{subtitle}</p>
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
  );
}
