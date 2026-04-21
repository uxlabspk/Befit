interface Program {
  name: string;
  code: string;
  description: string;
  details: string[];
}

interface ProgramCardsProps {
  programs: Program[];
  eyebrow?: string;
  title?: string;
}

export default function ProgramCards({
  programs,
  eyebrow = "Training programs",
  title = "Choose your training path.",
}: ProgramCardsProps) {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="mb-20">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/[0.4]">
            {eyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
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
                className="mt-auto inline-flex w-full items-center justify-center rounded-md border border-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors duration-200 hover:bg-[var(--foreground)]/[0.05] hover:text-[var(--foreground)]/[0.9]"
              >
                View details
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
