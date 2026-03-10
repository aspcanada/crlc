import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Enrollment — CRLC",
  description:
    "Apply to join the Cottonwood Rose Learning Community. We operate on a best-fit model and host an Open House before confirming placements.",
};

export default function EnrollmentPage() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      {/* Hero */}
      <div className="relative h-72 overflow-hidden sm:h-96">
        <Image
          src="/images/enrollment-hero.jpg"
          alt="Families at Cottonwood Rose Learning Community"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/30 to-transparent"
          aria-hidden
        />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 text-center sm:px-10">
          <p className="mb-2 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            Join the Community
          </p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Enrollment Inquiry
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        <div className="mb-10 space-y-4 text-zinc-700 dark:text-zinc-300">
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
            Ready to explore if CRLC is a fit for your family?
          </p>
          <p>
            If your family is interested in joining our program we invite you to
            fill out our enrollment application. We operate on a best fit model
            that takes into consideration the balance of each cohort as well as
            our volunteer requirements.
          </p>
          <p>
            Applications are reviewed in the spring to determine available
            placements. Before confirming enrolment, we will host an Open House
            where families can visit the land, meet our educators, and learn
            about our approach.
          </p>
          <p>
            This event helps ensure a good fit for both the child and the
            community.
          </p>
          <p>
            <em>
              Please apply only in the year your child will be of school age.
            </em>
          </p>
        </div>

        <div className="text-center">
          <a
            href="https://docs.google.com/forms/d/1U9fKJprO_Smh11k_NXuLpMhPVlM5To5vKtjExpE4OFk/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:outline-white"
          >
            Enrollment Application
          </a>
        </div>
      </div>
    </div>
  );
}
