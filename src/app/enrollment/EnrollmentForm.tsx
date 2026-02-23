"use client";

import { useActionState } from "react";
import { submitEnrollment, type EnrollmentState } from "./actions";

const initial: EnrollmentState = { status: "idle" };

const inputClass =
  "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-500";

const labelClass = "block text-sm font-medium text-zinc-700 dark:text-zinc-300";

export function EnrollmentForm() {
  const [state, action, pending] = useActionState(submitEnrollment, initial);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-900 dark:bg-emerald-950/30">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50">
          <svg className="h-7 w-7 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
          We&apos;ve got your inquiry!
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Thank you for your interest in CRLC. We&apos;ll be in touch soon with next steps.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {state.status === "error" && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400"
        >
          {state.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="parentName" className={labelClass}>
            Parent / Guardian Name <span className="text-red-500" aria-hidden>*</span>
          </label>
          <input
            id="parentName"
            name="parentName"
            type="text"
            autoComplete="name"
            required
            placeholder="Your full name"
            className={inputClass}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-red-500" aria-hidden>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="phone" className={labelClass}>
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Optional"
          className={inputClass}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="children" className={labelClass}>
          Child(ren) — Name(s) &amp; Grade(s) <span className="text-red-500" aria-hidden>*</span>
        </label>
        <input
          id="children"
          name="children"
          type="text"
          required
          placeholder="e.g. Sam (Grade 3), Lily (Kindergarten)"
          className={inputClass}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="notes" className={labelClass}>
          Questions or notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Anything you'd like us to know..."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-emerald-500 dark:hover:bg-emerald-600"
      >
        {pending ? "Sending…" : "Send Enrollment Inquiry"}
      </button>

      <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
        We review applications in the spring and will invite your family to an Open House before confirming placement.
      </p>
    </form>
  );
}
