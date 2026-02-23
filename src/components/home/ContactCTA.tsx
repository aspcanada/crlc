import Link from "next/link";

export function ContactCTA() {
  return (
    <section
      id="contact-cta"
      className="border-t border-zinc-200 bg-emerald-600 px-4 py-16 dark:bg-emerald-700 sm:px-6"
    >
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h2 className="text-3xl font-bold text-white">
          Ready to see what it&apos;s all about?
        </h2>
        <p className="text-lg text-white/95">
          Contact us! Email John at{" "}
          <a
            href="mailto:cottonwoodrosesociety@gmail.com"
            className="font-medium text-white underline underline-offset-2 hover:no-underline"
          >
            cottonwoodrosesociety@gmail.com
          </a>
        </p>
        <p className="text-white/90">
          Come for a tour of the land, get involved as a learning mentor or just
          say hi—we&apos;d love to hear from you.
        </p>
        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
