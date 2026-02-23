import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            Email:{" "}
            <a
              href="mailto:cottonwoodrosesociety@gmail.com"
              className="font-medium text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400"
            >
              cottonwoodrosesociety@gmail.com
            </a>
          </p>
          <p>2850 MacAulay Rd. Black Creek, Vancouver Island, BC</p>
          <p>
            <Link
              href="/resources"
              className="font-medium text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400"
            >
              Resources for registered families
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
