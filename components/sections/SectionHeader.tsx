interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  const containerClasses = centered ? "mx-auto max-w-2xl text-center" : "";

  return (
    <div className={containerClasses}>
      {eyebrow && (
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/[0.4]">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base text-[var(--foreground)]/[0.5]">{subtitle}</p>
      )}
    </div>
  );
}
