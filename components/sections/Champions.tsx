interface Champion {
  name: string;
  level: string;
  tag: string;
}

interface ChampionsProps {
  champions: Champion[];
  eyebrow?: string;
  title?: string;
}

export default function Champions({
  champions,
  eyebrow = "Hall of champions",
  title = "Real members. Real results.",
}: ChampionsProps) {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/[0.4]">
            {eyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
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
  );
}
