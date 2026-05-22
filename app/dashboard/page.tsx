import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import MemberShell from "@/components/member/MemberShell";
import { memberMutedCardClassName, memberPanelClassName } from "@/components/member/memberUi";
import { verifySession } from "@/lib/auth";
import { formatDate, formatDateTime, formatLabel, getMemberOverview } from "@/lib/member";

export const metadata: Metadata = {
  title: "BE-FIT | Dashboard",
  description: "Live dashboard for member points, progress, coaching, and activity.",
};

function Card({
  title,
  value,
  detail,
}: {
  title: string;
  value: string;
  detail: string;
}) {
  return (
    <article className="rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm">
      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/40">
        {title}
      </div>
      <div className="mt-3 text-3xl font-bold tracking-tight">{value}</div>
      <div className="mt-2 text-sm text-[var(--foreground)]/60">{detail}</div>
    </article>
  );
}

export default async function DashboardPage() {
  const session = await verifySession();

  if (!session) {
    redirect("/login");
  }

  const member = await getMemberOverview(session.userId);

  if (!member) {
    redirect("/login");
  }

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
      subtitle="Your live training overview combines points, subscriptions, activity, and coaching in one place."
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
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-12">
          <div className="space-y-6 xl:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <Card title="Total points" value={String(member.points?.totalPoints ?? 0)} detail={progressLabel} />
              <Card title="Current level" value={levelName} detail={member.level?.unlockAnimalAvatar ? "Avatar unlocked" : "Leveling in progress"} />
              <Card title="Subscription" value={formatLabel(member.subscription?.status ?? null)} detail={member.subscription?.endsAt ? `Renews / ends ${formatDate(member.subscription.endsAt)}` : "No active subscription on file"} />
              <Card title="Counselling" value={`${member.derived.remainingCalls} calls left`} detail="From your live coaching wallet" />
            </div>

            <article className={memberPanelClassName}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/40">
                    Progress
                  </div>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight">{formatLabel(member.derived.programTrack)}</h2>
                  <p className="mt-1 text-sm text-[var(--foreground)]/60">
                    {member.derived.membershipTier ? `${formatLabel(member.derived.membershipTier)} member` : "No membership tier set"}
                  </p>
                </div>

                <div className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)]/70">
                  {currentMonth}
                </div>
              </div>

              <div className="mt-6 h-2 rounded-full bg-[var(--muted)]">
                <div
                  className="h-2 rounded-full bg-[var(--foreground)]"
                  style={{ width: `${member.derived.progressPercent}%` }}
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className={memberMutedCardClassName}>
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/40">Progress</div>
                  <div className="mt-2 text-sm font-semibold">{progressLabel}</div>
                </div>
                <div className={memberMutedCardClassName}>
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/40">Last login</div>
                  <div className="mt-2 text-sm font-semibold">{formatDateTime(member.user.lastLoginAt)}</div>
                </div>
                <div className={memberMutedCardClassName}>
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/40">Joined</div>
                  <div className="mt-2 text-sm font-semibold">{formatDate(member.user.createdAt)}</div>
                </div>
              </div>
            </article>

            <div className="grid gap-6 lg:grid-cols-2">
              <section className={memberPanelClassName}>
                <h2 className="text-lg font-semibold tracking-tight">Recent food logs</h2>
                <div className="mt-5 space-y-4">
                  {member.foodLogs.length ? member.foodLogs.map((log) => (
                    <div key={log.id} className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-3 last:border-b-0 last:pb-0">
                      <div>
                        <div className="font-medium">{log.foodName}</div>
                        <div className="text-sm text-[var(--foreground)]/50">{log.servingNote ?? formatDateTime(log.loggedAt)}</div>
                      </div>
                      <div className="text-right text-sm text-[var(--foreground)]/70">
                        <div>{log.calories} cal</div>
                        <div>+{log.pointsAwarded} pts</div>
                      </div>
                    </div>
                  )) : (
                    <div className="text-sm text-[var(--foreground)]/50">No food logs yet.</div>
                  )}
                </div>
              </section>

              <section className={memberPanelClassName}>
                <h2 className="text-lg font-semibold tracking-tight">Recent water logs</h2>
                <div className="mt-5 space-y-4">
                  {member.waterLogs.length ? member.waterLogs.map((log) => (
                    <div key={log.id} className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-3 last:border-b-0 last:pb-0">
                      <div>
                        <div className="font-medium">{log.milliliters} ml</div>
                        <div className="text-sm text-[var(--foreground)]/50">{formatDateTime(log.loggedAt)}</div>
                      </div>
                      <div className="text-right text-sm text-[var(--foreground)]/70">
                        <div>Hydration logged</div>
                        <div>+{log.pointsAwarded} pts</div>
                      </div>
                    </div>
                  )) : (
                    <div className="text-sm text-[var(--foreground)]/50">No water logs yet.</div>
                  )}
                </div>
              </section>
            </div>
          </div>

          <aside className="space-y-6 xl:col-span-4">
            <section className={memberPanelClassName}>
              <h2 className="text-lg font-semibold tracking-tight">Quick actions</h2>
              <div className="mt-5 space-y-3">
                <Link href="/profile" className="block rounded-md border border-[var(--border)] px-4 py-3 text-sm font-medium transition hover:border-[var(--foreground)]">
                  Open profile
                </Link>
                <Link href="/settings" className="block rounded-md border border-[var(--border)] px-4 py-3 text-sm font-medium transition hover:border-[var(--foreground)]">
                  Update settings
                </Link>
              </div>
            </section>

            <section className={memberPanelClassName}>
              <h2 className="text-lg font-semibold tracking-tight">Upcoming coaching</h2>
              <div className="mt-5 space-y-4">
                {member.bookings.length ? member.bookings.map((booking) => (
                  <div key={booking.id} className={memberMutedCardClassName}>
                    <div className="text-sm font-semibold">{formatDateTime(booking.slot.startsAt)}</div>
                    <div className="mt-1 text-sm text-[var(--foreground)]/60">
                      {booking.slot.isActive ? "Confirmed slot" : "Inactive slot"} • {booking.status}
                    </div>
                    <div className="mt-2 text-xs text-[var(--foreground)]/50">
                      Coach: {booking.coach?.fullName ?? "Unassigned"}
                    </div>
                  </div>
                )) : (
                  <div className="text-sm text-[var(--foreground)]/50">No coaching bookings yet.</div>
                )}
              </div>
            </section>

            <section className={memberPanelClassName}>
              <h2 className="text-lg font-semibold tracking-tight">Notifications</h2>
              <div className="mt-5 space-y-4">
                {member.notifications.length ? member.notifications.map((item) => (
                  <div key={item.id} className="border-b border-[var(--border)] pb-3 last:border-b-0 last:pb-0">
                    <div className="text-sm font-medium">{item.notification.title}</div>
                    <div className="mt-1 text-sm text-[var(--foreground)]/50">{item.notification.body}</div>
                  </div>
                )) : (
                  <div className="text-sm text-[var(--foreground)]/50">No recent notifications.</div>
                )}
              </div>
            </section>
          </aside>
        </div>

        <section className={`mt-6 ${memberPanelClassName}`}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Leaderboard preview</h2>
              <p className="mt-1 text-sm text-[var(--foreground)]/60">
                {member.derived.programTrack ? `${formatLabel(member.derived.programTrack)} track • ${currentMonth}` : "Track not set yet"}
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {member.leaderboard.length ? member.leaderboard.map((entry) => (
              <div key={`${entry.rank}-${entry.user.fullName ?? "member"}`} className="flex items-center justify-between rounded-md border border-[var(--border)] px-4 py-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--muted)] text-sm font-semibold">
                    #{entry.rank}
                  </div>
                  <div>
                    <div className="font-medium">{entry.user.fullName ?? "Member"}</div>
                    <div className="text-xs text-[var(--foreground)]/50">{entry.levelTier?.name ?? "Level pending"}</div>
                  </div>
                </div>
                <div className="text-sm font-medium">{entry.totalPoints} pts</div>
              </div>
            )) : (
              <div className="text-sm text-[var(--foreground)]/50">No leaderboard rows available for your current track.</div>
            )}
          </div>
        </section>
      </section>
    </MemberShell>
  );
}
