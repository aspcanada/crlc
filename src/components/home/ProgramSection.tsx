import Image from "next/image";
import Link from "next/link";
import { program } from "@/data/home";

const stats = [
  { value: "K–9", label: "All ages" },
  { value: "3", label: "Days/week" },
  { value: "46", label: "Forested acres" },
];

export function ProgramSection() {
  return (
    <section id="program" className="bg-white px-4 py-20 dark:bg-zinc-950 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image column */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/program.jpg"
                alt="The dome classroom at Cottonwood Rose"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-4 flex gap-4 rounded-2xl bg-white px-5 py-4 shadow-xl dark:bg-zinc-900 sm:right-0">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {s.value}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Text column */}
          <div className="space-y-6 pt-6">
            <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
              Our Program
            </div>
            <h2 className="text-4xl font-bold leading-tight text-zinc-900 dark:text-zinc-50">
              {program.title}
            </h2>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
              {program.description.trim().split("\n\n").map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
            </div>
            <blockquote className="border-l-4 border-emerald-400 pl-4 text-sm italic text-zinc-600 dark:text-zinc-400">
              {program.volunteerNote}
            </blockquote>

            {/* Request-info CTA instead of explicit fees */}
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/30">
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                Curious about program fees and funding?
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                We operate on a sliding-scale model with provincial funding support. Reach out and we&apos;ll walk you through the details.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                Request fee information
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
