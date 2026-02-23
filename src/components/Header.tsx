import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { AboutDropdown } from "./AboutDropdown";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/enrollment", label: "Enrollment" },
  { href: "/mentor-proposal", label: "Mentor Proposal" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="relative border-b border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-zinc-50"
        >
          CRLC
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex"
        >
          <Link
            href="/"
            className="rounded px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          >
            Home
          </Link>
          <AboutDropdown />
          {navLinks
            .filter((l) => l.href !== "/")
            .map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
              >
                {label}
              </Link>
            ))}
          <Link
            href="/resources"
            className="ml-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-500 dark:hover:bg-emerald-600"
          >
            Parent Login
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
