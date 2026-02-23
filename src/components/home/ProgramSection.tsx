import { program } from "@/data/home";

export function ProgramSection() {
  return (
    <section id="program" className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          {program.title}
        </h2>
        <div className="space-y-4 whitespace-pre-line text-zinc-700 dark:text-zinc-300">
          <p>{program.description}</p>
          <p className="font-medium">{program.volunteerNote}</p>
          <p>{program.fees}</p>
        </div>
      </div>
    </section>
  );
}
