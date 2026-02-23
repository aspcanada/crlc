import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — CRLC",
  description:
    "Get in touch with the Cottonwood Rose Learning Community. Book a tour, ask about enrollment, or just say hello.",
};

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      {/* Hero */}
      <div className="bg-zinc-800 px-4 py-16 text-center text-white sm:px-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-zinc-400">
          Get in Touch
        </p>
        <h1 className="text-4xl font-bold sm:text-5xl">Say Hello</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-300">
          Come for a tour of the land, ask about enrollment, or just reach out —
          we&apos;d love to hear from you.
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5">

          {/* Contact details */}
          <aside className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Contact
              </h2>
              <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a
                    href="mailto:cottonwoodrosesociety@gmail.com"
                    className="break-all text-emerald-700 hover:underline dark:text-emerald-400"
                  >
                    cottonwoodrosesociety@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>
                    2850 MacAulay Rd.<br />
                    Black Creek, BC<br />
                    Vancouver Island
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Program days
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Tuesday, Wednesday &amp; Thursday<br />
                during the school year.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/30">
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                <span className="font-semibold">Curious about fees?</span> We operate on a sliding-scale model — just mention it in your message and we&apos;ll walk you through the details.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Send us a message
            </h2>
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}
