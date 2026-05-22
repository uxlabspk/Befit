import Link from "next/link";
import type { ReactNode } from "react";
import { formatLabel, getInitials } from "@/lib/member";
import {
  memberLabelClassName,
  memberMutedCardClassName,
  memberPanelClassName,
  memberSectionHeadingClassName,
  memberValueClassName,
} from "./memberUi";

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

export default function MemberShell({
  title,
  subtitle,
  activeRoute,
  user,
  stats,
  children,
}: MemberShellProps) {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto flex max-w-[1600px]">
        {/* ── Sidebar ── */}
        <aside className="hidden min-h-screen w-72 shrink-0 border-r border-[var(--border)] bg-white lg:sticky lg:top-0 lg:flex lg:flex-col">
          <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-5 py-7">
            {/* Brand */}
            <div>
              <Link href="/" className="text-base font-bold tracking-tight">
                BE-FIT
              </Link>
              <p className={`mt-0.5 ${memberLabelClassName}`}>Member area</p>
            </div>

            {/* User card */}
            <div className={memberPanelClassName}>
              <div className="flex items-center gap-3">
                {user.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt={user.fullName ?? user.email}
                    className="h-10 w-10 rounded-full border border-[var(--border)] object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--muted)] text-xs font-semibold">
                    {getInitials(user.fullName)}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">
                    {user.fullName ?? user.email}
                  </p>
                  <p className="text-xs text-[var(--foreground)]/50 capitalize">
                    {user.role.toLowerCase()}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className={memberMutedCardClassName}>
                  <p className={memberLabelClassName}>Points</p>
                  <p className={`mt-1.5 ${memberValueClassName}`}>{stats.points}</p>
                </div>
                <div className={memberMutedCardClassName}>
                  <p className={memberLabelClassName}>Level</p>
                  <p className={`mt-1.5 text-lg font-bold tracking-tight`}>{stats.levelName}</p>
                </div>
              </div>
            </div>

            {/* Nav */}
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`flex items-center rounded-lg border px-3.5 py-2.5 text-sm font-medium transition-colors ${
                    item.key === activeRoute
                      ? "border-[var(--foreground)] bg-[var(--foreground)] text-white"
                      : "border-transparent text-[var(--foreground)]/60 hover:border-[var(--border)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Progress */}
            <div className={memberPanelClassName}>
              <p className={memberLabelClassName}>Progress</p>
              <p className="mt-2 text-sm font-medium">{stats.progressLabel}</p>
              <div className="mt-3 h-1.5 rounded-full bg-[var(--muted)]">
                <div
                  className="h-1.5 rounded-full bg-[var(--foreground)] transition-all"
                  style={{ width: `${Math.min(stats.progressPercent, 100)}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-[var(--foreground)]/40">{stats.monthLabel}</p>
            </div>

            {/* Snapshot */}
            <div className={memberPanelClassName}>
              <p className={memberLabelClassName}>Snapshot</p>
              <div className="mt-3 space-y-2.5 text-sm">
                <Row label="Track" value={formatLabel(stats.programTrack)} />
                <Row label="Tier" value={formatLabel(stats.membershipTier)} />
                <Row label="Calls" value={`${stats.remainingCalls} left`} />
              </div>
            </div>
          </div>
        </aside>

        {/* ── Main content ── */}
        <section className="min-w-0 flex-1">
          {/* Mobile top bar */}
          <div className="border-b border-[var(--border)] bg-white px-5 py-4 lg:hidden">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold tracking-tight">BE-FIT</p>
                <p className={memberLabelClassName}>Member area</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">{user.fullName ?? user.email}</p>
                <p className="text-xs text-[var(--foreground)]/50 capitalize">{user.role.toLowerCase()}</p>
              </div>
            </div>
            <nav className="mt-3 flex gap-2 overflow-x-auto pb-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    item.key === activeRoute
                      ? "border-[var(--foreground)] bg-[var(--foreground)] text-white"
                      : "border-[var(--border)] text-[var(--foreground)]/60"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Page header */}
          <div className="border-b border-[var(--border)] bg-white px-6 py-8 lg:px-8">
            <p className={memberLabelClassName}>BE-FIT member panel</p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-[var(--foreground)]/55">
              {subtitle}
            </p>
          </div>

          {children}
        </section>
      </div>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-[var(--foreground)]/50">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
