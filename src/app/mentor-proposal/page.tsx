import type { Metadata } from "next";
import { MentorForm } from "./MentorForm";

export const metadata: Metadata = {
  title: "Mentor Proposal — CRLC",
  description:
    "Share your skills, passions, and trades with kids at the Cottonwood Rose Learning Community. Submit a mentor proposal for our mentorship block.",
};

const highlights = [
  {
    icon: "🕛",
    text: "Mentorship blocks run Tue / Wed / Thu: morning 11:30–12:30 and afternoon 1:00–2:15",
  },
  {
    icon: "🌱",
    text: "Three cohorts: Seeds (K–2), Sprouts (Gr 3–5), Saplings (Gr 6–8) — we’ll match you to a block",
  },
  {
    icon: "💸",
    text: "We offer up to $100 per session to support your time",
  },
  {
    icon: "🙌",
    text: "Parent volunteers assist with day-of supervision and logistics",
  },
  {
    icon: "🏕️",
    text: "Domes, forest, garden, workshop, and open field — your choice of space",
  },
  {
    icon: "✅",
    text: "Ideally 4–8 sessions over successive weeks; one-offs welcome too",
  },
];

export default function MentorProposalPage() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      {/* Hero */}
      <div className="bg-amber-800 px-4 py-16 text-center text-white sm:px-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-200">
          Community Mentorships
        </p>
        <h1 className="text-4xl font-bold sm:text-5xl">
          Inspire, connect&nbsp;&amp; share!
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100">
          Mentorships bring your passion to the kids — and they&apos;re a big part of
          the magic at Cottonwood Rose.
        </p>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        {/* Intro */}
        <div className="mb-10 space-y-4 text-zinc-700 dark:text-zinc-300">
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
            We&apos;d love to hear from you.
          </p>
          <p>
            Our mentorship blocks invite community members to share their skills,
            passions, and trades with students in hands-on, land-based sessions.
            We welcome proposals that engage children through creativity, nature
            connection, craft, science, or cultural practice.
          </p>
          <p>
            So far this year, our mentors have taken kids from the garden to the
            workshop and back again — planting and harvesting with a regenerative
            farmer, building and crafting with a shop teacher, making seasonal
            tools by hand, gathering wild herbs for medicine making, and exploring
            sound and energy with a vibrational healing guide. This spring we&apos;re
            also running a full day of Drum Making with Sarah and Indigenous guests.
          </p>
          <p>
            Selected mentors receive orientation and scheduling support before
            their sessions begin.
          </p>
        </div>

        {/* Schedule at a glance - from Spring 2026 DRAFT */}
        <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50/50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
          <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Mentorship blocks at a glance (Spring 2026)
          </h2>
          <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
            Morning block 11:30–12:30 · Lunch 12:30–1:30 · Afternoon block 1:00–2:15. We follow the SD‑71 calendar for Pro-D days, stats and holidays.
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Tuesday</strong> — AM: Saplings &amp; Seeds (e.g. Drum Making). PM: Sprouts.</li>
            <li><strong>Wednesday</strong> — PM: Sprouts mentorship; Seeds with Hand-in-Hand mentor.</li>
            <li><strong>Thursday</strong> — AM: Sprouts (1.5 hrs); Seeds with Hand-in-Hand. PM: Saplings; Seeds.</li>
          </ul>
          <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
            Exact cohort and time depend on the term and mentor; we&apos;ll work with you to find the right slot.
          </p>
        </div>

        {/* Highlight cards */}
        <ul className="mb-12 grid gap-3 sm:grid-cols-2">
          {highlights.map(({ icon, text }) => (
            <li
              key={text}
              className="flex items-start gap-3 rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
            >
              <span className="mt-0.5 shrink-0 text-base" aria-hidden>
                {icon}
              </span>
              {text}
            </li>
          ))}
        </ul>

        {/* Form */}
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Mentor Proposal Form
          </h2>
          <MentorForm />
        </div>
      </div>
    </div>
  );
}
