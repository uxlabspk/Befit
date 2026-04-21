interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

interface PricingCardsProps {
  plans: PricingPlan[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export default function PricingCards({
  plans,
  eyebrow = "Pricing",
  title = "Select your plan.",
  subtitle = "Transparent pricing. No hidden fees. Cancel anytime.",
}: PricingCardsProps) {
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

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map(({ name, price, period, description, features: planFeatures, cta, highlighted }, i) => (
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
                className="mt-10 inline-flex w-full items-center justify-center rounded-md border border-[var(--foreground)]/[0.2] px-6 py-3 text-sm font-semibold text-[var(--foreground)]/[0.8] transition-colors duration-200 hover:bg-[var(--foreground)]/[0.05] hover:text-[var(--foreground)]"
              >
                {cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
