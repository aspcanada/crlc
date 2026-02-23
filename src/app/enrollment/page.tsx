import type { Metadata } from "next";
import Image from "next/image";
import { EnrollmentForm } from "./EnrollmentForm";

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
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/30 to-transparent" aria-hidden />
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
            We operate on a best-fit model, taking into consideration the balance
            of each cohort and our volunteer requirements. Fill out this form and
            we&apos;ll reach out to get the conversation started.
          </p>
          <p>
            Applications are reviewed in the spring. Before confirming enrolment
            we&apos;ll invite your family to an Open House on the land—a chance to meet
            our educators and feel into the community for yourselves.
          </p>
        </div>

        <EnrollmentForm />
      </div>
    </div>
  );
}
