import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import MemberShell from "@/components/member/MemberShell";
import {
  memberLabelClassName,
  memberMutedCardClassName,
  memberPanelClassName,
  memberSectionHeadingClassName,
  memberValueClassName,
} from "@/components/member/memberUi";
import { verifySession } from "@/lib/auth";
import {
  formatDate,
  formatDateTime,
  formatLabel,
  getMemberOverview,
} from "@/lib/member";

export const metadata: Metadata = {
  title: "BE-FIT | Dashboard",
  description:
    "Live dashboard for member points, progress, coaching, and activity.",
};

function StatCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <article className={memberPanelClassName}>
      <p className={memberLabelClassName}>{label}</p>
      <p className={`mt-2 ${memberValueClassName}`}>{value}</p>
      <p className="mt-1 text-sm text-[var(--foreground)]/[0.6] leading-relaxed">{detail}</p>
    </article>
  );
}

export default async function DashboardPage() {
  const session = await verifySession();
  if (!session) redirect("/login");

  const member = await getMemberOverview(session.userId);
  if (!member) redirect("/login");

  const currentMonth = new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(new Date());

  const levelName = member.level?.name ?? "Starter";
  const progressLabel = member.level
    ? member.level.maxPoints
      ? `${Math.round(member.derived.progressPercent)}% to next level`
      : "Top tier unlocked"
    : "Start logging to unlock levels";

  return (
    <MemberShell
      title="Dashboard"
      subtitle="Your live training overview — points, subscriptions, activity, and coaching in one place."
      activeRoute="dashboard"
      user={{
        fullName: member.user.fullName,
        email: member.user.email,
        avatarUrl: member.derived.avatarUrl,
        role: member.user.role,
      }}
      stats={{
        points: member.points?.totalPoints ?? 0,
        levelName,
        programTrack: member.derived.programTrack,
        membershipTier: member.derived.membershipTier,
        remainingCalls: member.derived.remainingCalls,
        progressLabel,
        progressPercent: member.derived.progressPercent,
        monthLabel: currentMonth,
      }}
    >
      <div className="px-6 py-8 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-12">
          {/* ── Left column ── */}
          <div className="space-y-6 xl:col-span-8">
            {/* Stat cards */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                label="Total points"
                value={String(member.points?.totalPoints ?? 0)}
                detail={progressLabel}
              />
              <StatCard
                label="Current level"
                value={levelName}
                detail={
                  member.level?.unlockAnimalAvatar
                    ? "Avatar unlocked"
                    : "Leveling in progress"
                }
              />
              <StatCard
                label="Subscription"
                value={formatLabel(member.subscription?.status ?? null)}
                detail={
                  member.subscription?.endsAt
                    ? `Renews ${formatDate(member.subscription.endsAt)}`
                    : "No active subscription"
                }
              />
              <StatCard
                label="Coaching calls"
                value={`${member.derived.remainingCalls}`}
                detail="Calls remaining in wallet"
              />
            </div>

            {/* Progress panel */}
            <article className={memberPanelClassName}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className={memberLabelClassName}>Training progress</p>
                  <h2 className="mt-2 text-lg font-bold tracking-tighter">
                    {formatLabel(member.derived.programTrack)}
                  </h2>
                  <p className="mt-0.5 text-sm text-[var(--foreground)]/[0.6]">
                    {member.derived.membershipTier
                      ? `${formatLabel(member.derived.membershipTier)} member`
                      : "No membership tier set"}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center rounded-full border border-[var(--border)] px-3 py-1 text-sm font-medium text-[var(--foreground)]/[0.6]">
                  {currentMonth}
                </span>
              </div>

              <div className="mt-5 h-1.5 rounded-full bg-[var(--muted)]">
                <div
                  className="h-1.5 rounded-full bg-[var(--foreground)] transition-all"
                  style={{ width: `${Math.min(member.derived.progressPercent, 100)}%` }}
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className={memberMutedCardClassName}>
                  <p className={memberLabelClassName}>Progress</p>
                  <p className="mt-1.5 text-sm font-semibold">{progressLabel}</p>
                </div>
                <div className={memberMutedCardClassName}>
                  <p className={memberLabelClassName}>Last login</p>
                  <p className="mt-1.5 text-sm font-semibold">
                    {formatDateTime(member.user.lastLoginAt)}
                  </p>
                </div>
                <div className={memberMutedCardClassName}>
                  <p className={memberLabelClassName}>Member since</p>
                  <p className="mt-1.5 text-sm font-semibold">
                    {formatDate(member.user.createdAt)}
                  </p>
                </div>
              </div>
            </article>

            {/* Food & water logs */}
            <div className="grid gap-6 lg:grid-cols-2">
              <section className={memberPanelClassName}>
                <h2 className={memberSectionHeadingClassName}>Recent food logs</h2>
                <div className="mt-4 space-y-3">
                  {member.foodLogs.length ? (
                    member.foodLogs.map((log) => (
                      <div
                        key={log.id}
                        className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-3 last:border-0 last:pb-0"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium">{log.foodName}</p>
                          <p className="text-sm text-[var(--foreground)]/[0.6]">
                            {log.servingNote ?? formatDateTime(log.loggedAt)}
                          </p>
                        </div>
                        <div className="shrink-0 text-right text-sm text-[var(--foreground)]/[0.6]">
                          <p>{log.calories} cal</p>
                          <p>+{log.pointsAwarded} pts</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-[var(--foreground)]/40">No food logs yet.</p>
                  )}
                </div>
              </section>

              <section className={memberPanelClassName}>
                <h2 className={memberSectionHeadingClassName}>Recent water logs</h2>
                <div className="mt-4 space-y-3">
                  {member.waterLogs.length ? (
                    member.waterLogs.map((log) => (
                      <div
                        key={log.id}
                        className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-3 last:border-0 last:pb-0"
                      >
                        <div>
                          <p className="text-sm font-medium">{log.milliliters} ml</p>
                          <p className="text-sm text-[var(--foreground)]/[0.6]">
                            {formatDateTime(log.loggedAt)}
                          </p>
                        </div>
                        <div className="shrink-0 text-right text-sm text-[var(--foreground)]/[0.6]">
                          <p>Hydration</p>
                          <p>+{log.pointsAwarded} pts</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-[var(--foreground)]/40">No water logs yet.</p>
                  )}
                </div>
              </section>
            </div>

            {/* Leaderboard */}
            <section className={memberPanelClassName}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className={memberSectionHeadingClassName}>Leaderboard</h2>
                  <p className="mt-0.5 text-sm text-[var(--foreground)]/[0.6]">
                    {member.derived.programTrack
                      ? `${formatLabel(member.derived.programTrack)} track · ${currentMonth}`
                      : "Track not set yet"}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {member.leaderboard.length ? (
                  member.leaderboard.map((entry) => (
                    <div
                      key={`${entry.rank}-${entry.user.fullName ?? "member"}`}
                      className="flex items-center justify-between rounded-lg border border-[var(--border)] px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--muted)] text-xs font-semibold">
                          #{entry.rank}
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {entry.user.fullName ?? "Member"}
                          </p>
                          <p className="text-sm text-[var(--foreground)]/[0.6]">
                            {entry.levelTier?.name ?? "Level pending"}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold">{entry.totalPoints} pts</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-[var(--foreground)]/40">
                    No leaderboard data for your current track.
                  </p>
                )}
              </div>
            </section>
          </div>

          {/* ── Right sidebar ── */}
          <aside className="space-y-6 xl:col-span-4">
            {/* Quick actions */}
            <section className={memberPanelClassName}>
              <h2 className={memberSectionHeadingClassName}>Quick actions</h2>
              <div className="mt-4 space-y-2">
                <Link
                  href="/profile"
                  className="flex items-center justify-between rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--foreground)] hover:bg-[var(--muted)]"
                >
                  Open profile
                  <span className="text-[var(--foreground)]/30">→</span>
                </Link>
                <Link
                  href="/settings"
                  className="flex items-center justify-between rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--foreground)] hover:bg-[var(--muted)]"
                >
                  Update settings
                  <span className="text-[var(--foreground)]/30">→</span>
                </Link>
              </div>
            </section>

            {/* Upcoming coaching */}
            <section className={memberPanelClassName}>
              <h2 className={memberSectionHeadingClassName}>Upcoming coaching</h2>
              <div className="mt-4 space-y-3">
                {member.bookings.length ? (
                  member.bookings.map((booking) => (
                    <div key={booking.id} className={memberMutedCardClassName}>
                      <p className="text-sm font-semibold">
                        {formatDateTime(booking.slot.startsAt)}
                      </p>
                      <p className="mt-1 text-sm text-[var(--foreground)]/[0.6]">
                        {booking.slot.isActive ? "Confirmed" : "Inactive"} · {booking.status}
                      </p>
                      <p className="mt-1.5 text-sm text-[var(--foreground)]/[0.4]">
                        Coach: {booking.coach?.fullName ?? "Unassigned"}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-[var(--foreground)]/40">No coaching bookings yet.</p>
                )}
              </div>
            </section>

            {/* Notifications */}
            <section className={memberPanelClassName}>
              <h2 className={memberSectionHeadingClassName}>Notifications</h2>
              <div className="mt-4 space-y-3">
                {member.notifications.length ? (
                  member.notifications.map((item) => (
                    <div
                      key={item.id}
                      className="border-b border-[var(--border)] pb-3 last:border-0 last:pb-0"
                    >
                      <p className="text-sm font-medium">{item.notification.title}</p>
                      <p className="mt-0.5 text-sm text-[var(--foreground)]/[0.6]">
                        {item.notification.body}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-[var(--foreground)]/40">No recent notifications.</p>
                )}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </MemberShell>
  );
}
