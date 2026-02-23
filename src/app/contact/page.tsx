import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — CRLC",
  description:
    "Get in touch with the Cottonwood Rose Learning Community. Tours, mentor inquiries, general contact.",
};

export default function ContactPage() {
  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-2xl space-y-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Say Hi
        </h1>
        <p className="text-zinc-700 dark:text-zinc-300">
          Email John at{" "}
          <a
            href="mailto:cottonwoodrosesociety@gmail.com"
            className="font-medium text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400"
          >
            cottonwoodrosesociety@gmail.com
          </a>
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          Come for a tour of the land, get involved as a learning mentor or just
          say hi—we&apos;d love to hear from you.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          2850 MacAulay Rd. Black Creek, Vancouver Island, BC
        </p>
      </div>
    </div>
  );
}
