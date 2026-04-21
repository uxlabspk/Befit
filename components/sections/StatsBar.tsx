interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
  muted?: boolean;
}

export default function StatsBar({ stats, muted = true }: StatsBarProps) {
  return (
    <section className={muted ? "border-b border-[var(--border)] bg-[var(--muted)]" : "border-b border-[var(--border)]"}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <div key={stat.label} className={`animate-fade-up stagger-${i + 1}`}>
            <div className="block text-3xl font-bold tracking-tighter">{stat.value}</div>
            <div className="mt-2 block text-sm text-[var(--foreground)]/[0.6]">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
