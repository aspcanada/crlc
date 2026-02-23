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
    text: "Sessions run Tue / Wed / Thu between 12:00 and 2:45 pm",
  },
  {
    icon: "👶",
    text: "12:00–1:30 pm is our K–2 cohort; 1:30–2:45 pm is Grades 3–8 together",
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
            Our Mentorship Block invites community members to share their skills,
            passions, and trades with students in hands-on, land-based sessions.
            We welcome proposals that engage children through creativity, nature
            connection, craft, science, or cultural practice.
          </p>
          <p>
            So far this year, our mentors have taken kids from the garden to the
            workshop and back again — planting and harvesting with a regenerative
            farmer, building and crafting with a shop teacher, making seasonal
            tools by hand, gathering wild herbs for medicine making, and exploring
            sound and energy with a vibrational healing guide.
          </p>
          <p>
            Selected mentors receive orientation and scheduling support before
            their sessions begin.
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
