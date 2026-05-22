"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { memberPanelClassName } from "@/components/member/memberUi";

function formatLabel(value: string | null | undefined): string {
  if (!value) return "—";

  return value
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

type SettingsFormProps = {
  member: {
    user: {
      fullName: string | null;
      phone: string | null;
      avatarUrl: string | null;
    };
    profile: {
      address: string | null;
      city: string | null;
      country: string | null;
      currentProgramTrack: string | null;
      membershipTier: string | null;
    } | null;
    derived: {
      programTrack: string | null;
      membershipTier: string | null;
    };
  };
};

export default function SettingsForm({ member }: SettingsFormProps) {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: member.user.fullName ?? "",
    phone: member.user.phone ?? "",
    avatarUrl: member.user.avatarUrl ?? "",
    address: member.profile?.address ?? "",
    city: member.profile?.city ?? "",
    country: member.profile?.country ?? "",
    currentProgramTrack: member.profile?.currentProgramTrack ?? "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const membershipLabel = useMemo(
    () => formatLabel(member.profile?.membershipTier ?? member.derived.membershipTier ?? null),
    [member.profile?.membershipTier, member.derived.membershipTier],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/users/me", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message ?? "Unable to save settings.");
        return;
      }

      setMessage(data.message ?? "Settings saved.");
      setForm((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
      router.refresh();
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 xl:grid-cols-3">
      <div className="space-y-6 xl:col-span-2">
        <section className={memberPanelClassName}>
          <div className="mb-6">
            <h2 className="text-lg font-semibold tracking-tight">Account details</h2>
            <p className="mt-1 text-sm text-[var(--foreground)]/60">Update the data shown across your BE-FIT member pages.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" value={form.fullName} onChange={(value) => setForm({ ...form, fullName: value })} required />
            <Field label="Phone" value={form.phone} onChange={(value) => setForm({ ...form, phone: value })} />
            <Field label="Avatar URL" value={form.avatarUrl} onChange={(value) => setForm({ ...form, avatarUrl: value })} className="sm:col-span-2" />
            <Field label="Address" value={form.address} onChange={(value) => setForm({ ...form, address: value })} className="sm:col-span-2" />
            <Field label="City" value={form.city} onChange={(value) => setForm({ ...form, city: value })} />
            <Field label="Country" value={form.country} onChange={(value) => setForm({ ...form, country: value })} />
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-[var(--foreground)]/70">Training track</label>
              <select
                value={form.currentProgramTrack}
                onChange={(event) => setForm({ ...form, currentProgramTrack: event.target.value })}
                className="w-full rounded-md border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--foreground)]"
              >
                <option value="">Keep current track</option>
                <option value="GYM">Gym</option>
                <option value="LOCAL_HOME">Local Home</option>
              </select>
            </div>
          </div>
        </section>

        <section className={memberPanelClassName}>
          <div className="mb-6">
            <h2 className="text-lg font-semibold tracking-tight">Security</h2>
            <p className="mt-1 text-sm text-[var(--foreground)]/60">Change your password without leaving the member area.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Current password" type="password" value={form.currentPassword} onChange={(value) => setForm({ ...form, currentPassword: value })} />
            <Field label="New password" type="password" value={form.newPassword} onChange={(value) => setForm({ ...form, newPassword: value })} />
            <Field label="Confirm password" type="password" value={form.confirmPassword} onChange={(value) => setForm({ ...form, confirmPassword: value })} />
          </div>
        </section>

        {message ? (
          <div className="rounded-md border border-[var(--border)] bg-[var(--muted)] px-4 py-3 text-sm text-[var(--foreground)]/70">
            {message}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-md bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--foreground)]/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save settings"}
        </button>
      </div>

      <aside className="space-y-6">
        <section className={memberPanelClassName}>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/40">Current status</h3>
          <div className="mt-5 space-y-4 text-sm">
            <Row label="Membership tier" value={membershipLabel} />
            <Row label="Track" value={formatLabel(member.profile?.currentProgramTrack ?? member.derived.programTrack ?? null)} />
            <Row label="Avatar" value={member.user.avatarUrl ? "Configured" : "Not set"} />
          </div>
        </section>

        <section className={memberPanelClassName}>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/40">Notes</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--foreground)]/60">
            <li>Membership tier stays read-only because it is controlled by admin flow.</li>
            <li>Track changes and profile edits save directly to the live member record.</li>
            <li>Password updates require your current password.</li>
          </ul>
        </section>
      </aside>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-medium text-[var(--foreground)]/70">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="w-full rounded-md border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--foreground)]"
      />
    </label>
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
