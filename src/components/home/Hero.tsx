import Link from "next/link";
import { hero } from "@/data/home";

export function Hero() {
  return (
    <section className="bg-emerald-50/50 px-4 py-16 dark:bg-zinc-900/50 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          {hero.title}
        </h1>
        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          {hero.tagline}
        </p>
        <p className="font-medium text-emerald-800 dark:text-emerald-400">
          Right on!
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {hero.noteForFamilies}{" "}
          <a
            href="mailto:cottonwoodrosesociety@gmail.com"
            className="font-medium text-emerald-700 hover:underline dark:text-emerald-400"
          >
            We welcome you to reach out
          </a>{" "}
          to organize a visit to the land and try a day of programming to see if
          it&apos;s a fit for your family.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          {hero.intro} For registered families there is also a{" "}
          <Link
            href="/resources"
            className="font-medium text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400"
          >
            resource page linked here
          </Link>{" "}
          from which you can access all the most important program material.
        </p>
        <p className="font-medium text-zinc-700 dark:text-zinc-300">
          Onward!
        </p>
      </div>
    </section>
  );
}
