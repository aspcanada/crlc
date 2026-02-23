import { educators } from "@/data/home";

export function EducatorsSection() {
  return (
    <section id="educators" className="border-t border-zinc-200 px-4 py-12 dark:border-zinc-800 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-8">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          The Educator Team
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Bios from left to right
        </p>
        <ul className="grid gap-6 sm:grid-cols-2">
          {educators.map((edu) => (
            <li key={edu.name} className="rounded-lg border border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-700 dark:bg-zinc-900/50">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                {edu.name}
              </h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                {edu.bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
