import Image from "next/image";
import { educators } from "@/data/home";

export function EducatorsSection() {
  return (
    <section
      id="educators"
      className="bg-white px-4 py-20 dark:bg-zinc-950 sm:px-6"
    >
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="text-center">
          <div className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
            The People
          </div>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            The Educator Team
          </h2>
        </div>

        {/* Group photo */}
        <div className="relative h-72 overflow-hidden rounded-3xl shadow-xl sm:h-96">
          <Image
            src="/images/educator-1.jpg"
            alt="The CRLC educator team"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" aria-hidden />
          <p className="absolute bottom-4 left-6 text-sm font-medium text-white/80">
            Our team (left to right: Amy, Allie, Jay, Megan)
          </p>
        </div>

        {/* Bio cards */}
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {educators.map((edu) => (
            <li
              key={edu.name}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-900"
            >
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50">
                {edu.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {edu.bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
