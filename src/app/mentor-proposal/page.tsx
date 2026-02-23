import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentor Proposal — CRLC",
  description:
    "Learn about becoming a learning mentor at the Cottonwood Rose Learning Community.",
};

export default function MentorProposalPage() {
  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-2xl space-y-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Mentor Proposal
        </h1>
        <p className="text-zinc-700 dark:text-zinc-300">
          Interested in contributing as a learning mentor? We welcome
          community members who want to share skills, stories, or time with our
          learners.
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          Reach out to{" "}
          <a
            href="mailto:cottonwoodrosesociety@gmail.com"
            className="font-medium text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400"
          >
            cottonwoodrosesociety@gmail.com
          </a>{" "}
          to discuss how you might get involved.
        </p>
        <p>
          <Link
            href="/"
            className="text-emerald-700 hover:underline dark:text-emerald-400"
          >
            Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
