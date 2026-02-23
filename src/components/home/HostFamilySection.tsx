import { hostFamily } from "@/data/home";

export function HostFamilySection() {
  return (
    <section className="border-t border-zinc-200 px-4 py-12 dark:border-zinc-800 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          {hostFamily.title}
        </h2>
        <p className="whitespace-pre-line text-zinc-700 dark:text-zinc-300">
          {hostFamily.message}
        </p>
      </div>
    </section>
  );
}
