interface CTAButton {
  label: string;
  href: string;
}

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttons: CTAButton[];
  variant?: "dark" | "light";
}

export default function CTASection({
  title,
  subtitle,
  buttons,
  variant = "dark",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section className={`border-b border-[var(--border)] ${isDark ? "bg-[var(--foreground)] text-white" : "bg-[var(--muted)]"}`}>
      <div className="mx-auto max-w-7xl px-6 py-28 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">{title}</h2>
          <p className={`mx-auto mt-8 max-w-xl text-base ${isDark ? "text-white/[0.8]" : "text-[var(--foreground)]/[0.5]"}`}>
            {subtitle}
          </p>
          <div className="mt-12 flex items-center justify-center gap-6">
            {buttons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                className={`w-64 rounded-md px-6 py-3 text-sm font-medium transition ${
                  isDark
                    ? "border border-white/[0.3] text-white/[0.7] hover:border-white/[0.5] hover:text-white"
                    : "border border-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors duration-200 hover:bg-[var(--foreground)]/[0.05] hover:text-[var(--foreground)]/[0.9]"
                }`}
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
