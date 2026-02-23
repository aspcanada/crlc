import Link from "next/link";

export function ContactCTA() {
  return (
    <section id="contact-cta" className="border-t border-zinc-200 bg-emerald-50/50 px-4 py-12 dark:border-zinc-800 dark:bg-zinc-900/50 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Contact us!
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          Email John at{" "}
          <a
            href="mailto:cottonwoodrosesociety@gmail.com"
            className="font-medium text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400"
          >
            cottonwoodrosesociety@gmail.com
          </a>
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          Come for a tour of the land, get involved as a learning mentor or just
          say hi, we'd love to hear from you.
        </p>
        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-500 dark:hover:bg-emerald-600"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
