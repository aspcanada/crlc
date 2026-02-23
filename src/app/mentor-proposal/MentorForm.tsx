"use client";

import { useActionState } from "react";
import { submitMentorProposal, type MentorState } from "./actions";

const initial: MentorState = { status: "idle" };

const inputClass =
  "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-500";

const labelClass = "block text-sm font-medium text-zinc-700 dark:text-zinc-300";

const checkboxClass =
  "h-4 w-4 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500 dark:border-zinc-600";

const ageGroups = [
  { id: "k2", label: "K–2 (12:00–1:30 pm)" },
  { id: "35", label: "Grades 3–5 (1:30–2:45 pm)" },
  { id: "68", label: "Grades 6–8 (1:30–2:45 pm)" },
];

export function MentorForm() {
  const [state, action, pending] = useActionState(submitMentorProposal, initial);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-900 dark:bg-emerald-950/30">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50">
          <svg className="h-7 w-7 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
          Thank you for offering your magic!
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          A member of our PAC will follow up with you within a week or two to talk through next steps.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-6">
      {state.status === "error" && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400"
        >
          {state.message}
        </div>
      )}

      {/* Name + Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className={labelClass}>
            Your Name <span className="text-red-500" aria-hidden>*</span>
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required placeholder="Full name" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-red-500" aria-hidden>*</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className={inputClass} />
        </div>
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <label htmlFor="phone" className={labelClass}>
          Phone Number
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" className={inputClass} />
      </div>

      {/* Skills / what you bring */}
      <div className="space-y-1.5">
        <label htmlFor="skills" className={labelClass}>
          Skills, passions or trades you&apos;d like to share
        </label>
        <input
          id="skills"
          name="skills"
          type="text"
          placeholder="e.g. woodworking, herbalism, music, farming, science…"
          className={inputClass}
        />
      </div>

      {/* Proposal description */}
      <div className="space-y-1.5">
        <label htmlFor="proposal" className={labelClass}>
          Describe your proposed session(s) <span className="text-red-500" aria-hidden>*</span>
        </label>
        <textarea
          id="proposal"
          name="proposal"
          rows={5}
          required
          placeholder="What would you do with the kids? What materials or space would you need? Any ideas for how it could evolve over multiple sessions?"
          className={inputClass}
        />
      </div>

      {/* Age groups */}
      <fieldset className="space-y-2">
        <legend className={labelClass}>
          Age group(s) you&apos;re comfortable with
        </legend>
        <div className="space-y-2 pt-1">
          {ageGroups.map(({ id, label }) => (
            <label key={id} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <input type="checkbox" name="ageGroups" value={id} className={checkboxClass} />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Number of sessions */}
      <div className="space-y-1.5">
        <label htmlFor="sessions" className={labelClass}>
          How many sessions are you proposing?
        </label>
        <select id="sessions" name="sessions" className={inputClass}>
          <option value="">Select…</option>
          <option value="1">1 session (one-off)</option>
          <option value="2-3">2–3 sessions</option>
          <option value="4-8">4–8 sessions (series)</option>
          <option value="ongoing">Ongoing / open to discussing</option>
        </select>
      </div>

      {/* Availability */}
      <div className="space-y-1.5">
        <label htmlFor="availability" className={labelClass}>
          Preferred days / dates
        </label>
        <input
          id="availability"
          name="availability"
          type="text"
          placeholder="e.g. Tuesdays in March, or flexible Tue/Wed/Thu"
          className={inputClass}
        />
        <p className="text-xs text-zinc-400 dark:text-zinc-500">
          Sessions run Tue / Wed / Thu during the school year.
        </p>
      </div>

      {/* Referrals */}
      <div className="space-y-1.5">
        <label htmlFor="referral" className={labelClass}>
          Anyone else we should reach out to?
        </label>
        <textarea
          id="referral"
          name="referral"
          rows={3}
          placeholder="Know someone with a great skill or passion to share? Leave their name and contact info here."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-emerald-500 dark:hover:bg-emerald-600"
      >
        {pending ? "Sending…" : "Submit Mentor Proposal"}
      </button>

      <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
        A PAC member will follow up within 1–2 weeks. We&apos;re also happy to spitball on the possibilities with you.
      </p>
    </form>
  );
}
