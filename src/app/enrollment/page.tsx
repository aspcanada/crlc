import type { Metadata } from "next";
import Link from "next/link";

const ENROLLMENT_FORM_URL =
  "https://docs.google.com/forms/d/1U9fKJprO_Smh11k_NXuLpMhPVlM5To5vKtjExpE4OFk/edit";

export const metadata: Metadata = {
  title: "Enrollment — CRLC",
  description:
    "Apply to join the Cottonwood Rose Learning Community. Best fit model, open house for families.",
};

export default function EnrollmentPage() {
  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-2xl space-y-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Join the adventure!
        </h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300">
          Hello!
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          If your family is interested in joining our program we invite you to
          fill out our enrollment application. We operate on a best fit model
          that takes into consideration the balance of each cohort as well as our
          volunteer requirements.
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          Applications are reviewed in the spring to determine available
          placements. Before confirming enrolment, we will host an Open House
          where families can visit the land, meet our educators, and learn about
          our approach.
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          This event helps ensure a good fit for both the child and the
          community.
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Please apply only in the year your child will be of school age.
        </p>
        <div className="pt-4">
          <a
            href={ENROLLMENT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-500 dark:hover:bg-emerald-600"
          >
            Enrollment Application
          </a>
        </div>
        <p className="pt-4">
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
