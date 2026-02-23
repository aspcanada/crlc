import { land } from "@/data/home";

export function LandSection() {
  return (
    <section id="land" className="border-t border-zinc-200 px-4 py-12 dark:border-zinc-800 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-10">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          {land.title}
        </h2>
        <p className="whitespace-pre-line text-zinc-700 dark:text-zinc-300">
          {land.description}
        </p>
      </div>
    </section>
  );
}
