import type { Metadata } from "next";
import { redirect } from "next/navigation";
import MemberShell from "@/components/member/MemberShell";
import { memberPanelClassName } from "@/components/member/memberUi";
import { verifySession } from "@/lib/auth";
import { formatDate, formatLabel, getMemberOverview } from "@/lib/member";
import SettingsForm from "./SettingsForm";

export const metadata: Metadata = {
  title: "BE-FIT | Settings",
  description: "Edit live profile, track, and security settings for your BE-FIT member account.",
};

export default async function SettingsPage() {
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
      title="Settings"
      subtitle="Edit your live member profile, adjust training preferences, and update security details."
      activeRoute="settings"
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
          <div className="xl:col-span-8">
            <SettingsForm
              member={{
                user: {
                  fullName: member.user.fullName,
                  phone: member.user.phone,
                  avatarUrl: member.derived.avatarUrl,
                },
                profile: member.profile
                  ? {
                      address: member.profile.address,
                      city: member.profile.city,
                      country: member.profile.country,
                      currentProgramTrack: member.profile.currentProgramTrack,
                      membershipTier: member.profile.membershipTier,
                    }
                  : null,
                derived: {
                  programTrack: member.derived.programTrack,
                  membershipTier: member.derived.membershipTier,
                },
              }}
            />
          </div>

          <aside className="space-y-6 xl:col-span-4">
            <section className={memberPanelClassName}>
              <h2 className="text-lg font-bold tracking-tighter">Live snapshot</h2>
              <div className="mt-5 space-y-4 text-sm">
                <Row label="Member" value={member.user.fullName ?? member.user.email} />
                <Row label="Email" value={member.user.email} />
                <Row label="Track" value={formatLabel(member.derived.programTrack)} />
                <Row label="Tier" value={formatLabel(member.derived.membershipTier)} />
                <Row label="Joined" value={formatDate(member.user.createdAt)} />
                <Row label="Subscription" value={formatLabel(member.subscription?.status ?? null)} />
              </div>
            </section>

            <section className={memberPanelClassName}>
              <h2 className="text-lg font-bold tracking-tighter">What you can edit</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--foreground)]/[0.6]">
                <li>Identity and contact fields used across the member area.</li>
                <li>Address and location details stored in your live profile record.</li>
                <li>Training track and password with the current password check.</li>
              </ul>
            </section>
          </aside>
        </div>
      </section>
    </MemberShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-3 last:border-b-0 last:pb-0">
      <span className="text-[var(--foreground)]/[0.6]">{label}</span>
      <span className="font-medium text-[var(--foreground)]">{value}</span>
    </div>
  );
}
