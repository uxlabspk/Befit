import type { Metadata } from "next";
import { redirect } from "next/navigation";
import MemberShell from "@/components/member/MemberShell";
import { verifySession } from "@/lib/auth";
import { formatDate, formatDateTime, formatLabel, getInitials, getMemberOverview } from "@/lib/member";
import { memberMutedCardClassName, memberPanelClassName } from "@/components/member/memberUi";

export const metadata: Metadata = {
  title: "BE-FIT | Profile",
  description: "Live profile view for member identity, program details, and activity history.",
};

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm">
      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/40">
        {label}
      </div>
      <div className="mt-3 text-3xl font-bold tracking-tighter">{value}</div>
    </div>
  );
}

export default async function ProfilePage() {
  const session = await verifySession();

  if (!session) {
    redirect("/login");
  }

  const member = await getMemberOverview(session.userId);

  if (!member) {
    redirect("/login");
  }

  return (
    <MemberShell
      title="Profile"
      subtitle="Your live profile combines identity, program details, performance stats, and recent history."
      activeRoute="profile"
      user={{
        fullName: member.user.fullName,
        email: member.user.email,
        avatarUrl: member.derived.avatarUrl,
        role: member.user.role,
      }}
      stats={{
        points: member.points?.totalPoints ?? 0,
        levelName: member.level?.name ?? "Starter",
        programTrack: member.derived.programTrack,
        membershipTier: member.derived.membershipTier,
        remainingCalls: member.derived.remainingCalls,
        progressLabel: member.level
          ? member.level.maxPoints
            ? `${Math.round(member.derived.progressPercent)}% to next level`
            : "Top tier unlocked"
          : "Start logging to unlock levels",
        progressPercent: member.derived.progressPercent,
        monthLabel: new Intl.DateTimeFormat("en", { month: "long", year: "numeric" }).format(new Date()),
      }}
    >
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-12">
          <div className="space-y-6 xl:col-span-5">
            <article className={memberPanelClassName}>
              <div className="flex items-center gap-5">
                {member.derived.avatarUrl ? (
                  <img
                    src={member.derived.avatarUrl}
                    alt={member.user.fullName ?? member.user.email}
                    className="h-20 w-20 rounded-full border border-[var(--border)] object-cover"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--muted)] text-2xl font-semibold">
                    {getInitials(member.user.fullName)}
                  </div>
                )}

                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/40">
                    Account
                  </div>
                  <h1 className="mt-2 text-3xl font-bold tracking-tighter">{member.user.fullName ?? "Member"}</h1>
                  <p className="mt-1 text-sm text-[var(--foreground)]/[0.6]">{member.user.email}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className={memberMutedCardClassName}>
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/40">Role</div>
                  <div className="mt-2 text-sm font-semibold">{member.user.role}</div>
                </div>
                <div className={memberMutedCardClassName}>
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/40">Verified</div>
                  <div className="mt-2 text-sm font-semibold">{member.user.emailVerifiedAt ? "Yes" : "Pending"}</div>
                </div>
                <div className={memberMutedCardClassName}>
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/40">Joined</div>
                  <div className="mt-2 text-sm font-semibold">{formatDate(member.user.createdAt)}</div>
                </div>
                <div className={memberMutedCardClassName}>
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/40">Last login</div>
                  <div className="mt-2 text-sm font-semibold">{formatDateTime(member.user.lastLoginAt)}</div>
                </div>
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-3">
              <Stat label="Points" value={String(member.points?.totalPoints ?? 0)} />
              <Stat label="Calls left" value={String(member.derived.remainingCalls)} />
              <Stat label="Water logs" value={String(member.waterLogs.length)} />
            </div>
          </div>

          <div className="space-y-6 xl:col-span-7">
            <section className={memberPanelClassName}>
              <h2 className="text-lg font-bold tracking-tighter">Program details</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Info label="Current track" value={formatLabel(member.derived.programTrack)} />
                <Info label="Membership tier" value={formatLabel(member.derived.membershipTier)} />
                <Info label="Current level" value={member.level?.name ?? "Starter"} />
                <Info label="Subscription status" value={formatLabel(member.subscription?.status ?? null)} />
                <Info label="Subscription ends" value={formatDate(member.subscription?.endsAt ?? null)} />
                <Info label="Phone" value={member.user.phone ?? "—"} />
              </div>
            </section>

            <section className={memberPanelClassName}>
              <h2 className="text-lg font-bold tracking-tighter">Profile information</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Info label="Address" value={member.profile?.address ?? "—"} />
                <Info label="City" value={member.profile?.city ?? "—"} />
                <Info label="Country" value={member.profile?.country ?? "—"} />
                <Info label="Training path" value={formatLabel(member.profile?.currentProgramTrack ?? null)} />
                <Info label="Avatar source" value={member.derived.avatarUrl ? "Configured" : "Unset"} />
                <Info label="Last points update" value={formatDateTime(member.points?.lastAwardedAt ?? null)} />
              </div>
            </section>

            <section className={memberPanelClassName}>
              <h2 className="text-lg font-bold tracking-tighter">Recent activity</h2>
              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/40">Food logs</h3>
                  <div className="mt-4 space-y-3">
                    {member.foodLogs.length ? member.foodLogs.map((log) => (
                      <div key={log.id} className="rounded-md border border-[var(--border)] px-4 py-3">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="font-medium">{log.foodName}</div>
                            <div className="text-sm text-[var(--foreground)]/[0.6]">{formatDateTime(log.loggedAt)}</div>
                          </div>
                          <div className="text-right text-sm text-[var(--foreground)]/[0.6]">
                            <div>{log.calories} cal</div>
                            <div>+{log.pointsAwarded} pts</div>
                          </div>
                        </div>
                      </div>
                    )) : (
                      <div className="text-sm text-[var(--foreground)]/[0.6]">No food logs yet.</div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/40">Bookings</h3>
                  <div className="mt-4 space-y-3">
                    {member.bookings.length ? member.bookings.map((booking) => (
                      <div key={booking.id} className="rounded-md border border-[var(--border)] px-4 py-3">
                        <div className="font-medium">{formatDateTime(booking.slot.startsAt)}</div>
                        <div className="mt-1 text-sm text-[var(--foreground)]/[0.6]">
                          {booking.status} • Coach {booking.coach?.fullName ?? "unassigned"}
                        </div>
                      </div>
                    )) : (
                      <div className="text-sm text-[var(--foreground)]/[0.6]">No bookings yet.</div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </MemberShell>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className={memberMutedCardClassName}>
      <div className="text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/40">{label}</div>
      <div className="mt-2 text-sm font-semibold">{value}</div>
    </div>
  );
}
