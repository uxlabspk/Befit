const navLinks = ["Programs", "Features", "Pricing", "About"];

export default function Navigation() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-white/[0.95] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="block text-lg font-bold tracking-tighter">
          BE-FIT
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--foreground)]/[0.6]">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-[var(--foreground)] after:transition-all after:duration-200 hover:text-[var(--foreground)] hover:after:w-full transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-sm font-medium">
          <a href="/login" className="rounded px-4 py-2 text-[var(--foreground)]/[0.6] transition hover:text-[var(--foreground)]">
            Login
          </a>
          <a
            href="/signup"
            className="rounded-md bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--foreground)]/[0.9]"
          >
            <span className="text-white">Join Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
