interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  eyebrow?: string;
  title?: string;
}

export default function Testimonials({
  testimonials,
  eyebrow = "Testimonials",
  title = "What members say.",
}: TestimonialsProps) {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="mb-20">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/[0.4]">
            {eyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(({ quote, author, role }, i) => (
            <blockquote
              key={author}
              className={`animate-fade-up stagger-${i + 1} rounded-lg border border-[var(--border)] bg-white p-10 transition-all duration-350 hover:-translate-y-0.5 hover:shadow-md`}
            >
              <p className="mt-2 text-base leading-7 text-[var(--foreground)]/[0.7]">&ldquo;{quote}&rdquo;</p>
              <footer className="mt-8 border-t border-[var(--border)] pt-6">
                <div className="text-sm font-semibold">{author}</div>
                <div className="mt-1 text-xs text-[var(--foreground)]/[0.5]">{role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
