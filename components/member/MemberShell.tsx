import Link from "next/link";
import type { ReactNode } from "react";
import { formatLabel, getInitials } from "@/lib/member";
import { memberMutedCardClassName, memberPanelClassName } from "./memberUi";

type MemberShellProps = {
  title: string;
  subtitle: string;
  activeRoute: "dashboard" | "profile" | "settings";
  user: {
    fullName: string | null;
    email: string;
    avatarUrl: string | null;
    role: string;
  };
  stats: {
    points: number;
    levelName: string;
    programTrack: string | null;
    membershipTier: string | null;
    remainingCalls: number;
    progressLabel: string;
    progressPercent: number;
    monthLabel: string;
  };
  children: ReactNode;
};

const navItems = [
  { key: "dashboard", label: "Dashboard", href: "/dashboard" },
  { key: "profile", label: "Profile", href: "/profile" },
  { key: "settings", label: "Settings", href: "/settings" },
] as const;

export default function MemberShell({ title, subtitle, activeRoute, user, stats, children }: MemberShellProps) {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto flex max-w-[1600px] gap-0 lg:gap-8">
        <aside className="hidden min-h-screen w-80 shrink-0 border-r border-[var(--border)] bg-white/95 px-6 py-8 lg:sticky lg:top-0 lg:block">
          <div className="flex h-full flex-col">
            <div>
              <Link href="/" className="text-lg font-bold tracking-tighter">
                BE-FIT
              </Link>
              <div className="mt-1 text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/40">
                Member area
              </div>
            </div>

            <div className={memberPanelClassName + " mt-8"}>
              <div className="flex items-center gap-3">
                {user.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt={user.fullName ?? user.email}
                    className="h-12 w-12 rounded-full border border-[var(--border)] object-cover"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--muted)] text-sm font-semibold">
                    {getInitials(user.fullName)}
                  </div>
                )}
                <div>
                  <div className="text-sm font-semibold">{user.fullName ?? user.email}</div>
                  <div className="text-xs text-[var(--foreground)]/50">{user.role}</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className={memberMutedCardClassName}>
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/40">Points</div>
                  <div className="mt-2 text-xl font-bold">{stats.points}</div>
                </div>
                <div className={memberMutedCardClassName}>
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/40">Level</div>
                  <div className="mt-2 text-xl font-bold">{stats.levelName}</div>
                </div>
              </div>
            </div>

            <nav className="mt-8 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition ${
                    item.key === activeRoute
                      ? "border-[var(--foreground)] bg-[var(--foreground)] text-white"
                      : "border-[var(--border)] bg-white text-[var(--foreground)]/70 hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 space-y-4">
              <div className={memberPanelClassName}>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/40">
                  Progress
                </div>
                <div className="mt-3 text-sm font-medium">{stats.progressLabel}</div>
                <div className="mt-4 h-2 rounded-full bg-[var(--muted)]">
                  <div className="h-2 rounded-full bg-[var(--foreground)]" style={{ width: `${stats.progressPercent}%` }} />
                </div>
                <div className="mt-3 text-xs text-[var(--foreground)]/50">{stats.monthLabel}</div>
              </div>

              <div className={memberPanelClassName}>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/40">
                  Member snapshot
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <Row label="Track" value={formatLabel(stats.programTrack)} />
                  <Row label="Tier" value={formatLabel(stats.membershipTier)} />
                  <Row label="Calls" value={`${stats.remainingCalls} left`} />
                </div>
              </div>
            </div>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <div className="border-b border-[var(--border)] bg-white/90 px-6 py-5 backdrop-blur-sm lg:hidden">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-lg font-bold tracking-tighter">BE-FIT</div>
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/40">Member area</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold">{user.fullName ?? user.email}</div>
                <div className="text-xs text-[var(--foreground)]/50">{user.role}</div>
              </div>
            </div>
            <nav className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${
                    item.key === activeRoute
                      ? "border-[var(--foreground)] bg-[var(--foreground)] text-white"
                      : "border-[var(--border)] bg-white text-[var(--foreground)]/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-b border-[var(--border)]">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
              <div className="max-w-3xl">
                <div className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/40">
                  BE-FIT member panel
                </div>
                <h1 className="mt-4 animate-fade-up text-4xl font-bold tracking-tighter sm:text-5xl">
                  {title}
                </h1>
                <p className="mt-4 max-w-2xl animate-fade-up text-base leading-7 text-[var(--foreground)]/60">
                  {subtitle}
                </p>
              </div>
            </div>
          </div>

          {children}
        </section>
      </div>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-3 last:border-b-0 last:pb-0">
      <span className="text-[var(--foreground)]/50">{label}</span>
      <span className="font-medium text-[var(--foreground)]">{value}</span>
    </div>
  );
}
