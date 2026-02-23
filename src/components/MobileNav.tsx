"use client";

import Link from "next/link";
import { useState } from "react";

const aboutLinks = [
  { href: "/about#land", label: "The Land" },
  { href: "/about#educators", label: "The Team" },
  { href: "/about#founders", label: "The Founders" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/enrollment", label: "Enrollment" },
  { href: "/mentor-proposal", label: "Mentor Proposal" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  function close() {
    setOpen(false);
    setAboutOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-600 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-zinc-400 dark:hover:bg-zinc-800"
        aria-expanded={open}
        aria-controls="mobile-menu"
        id="mobile-menu-button"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div
        id="mobile-menu"
        role="region"
        aria-labelledby="mobile-menu-button"
        className={`absolute right-4 top-16 z-50 w-60 rounded-lg border border-zinc-200 bg-white py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-900 ${open ? "block" : "hidden"}`}
      >
        {/* Home */}
        <Link
          href="/"
          onClick={close}
          className="block px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          Home
        </Link>

        {/* About accordion */}
        <button
          type="button"
          onClick={() => setAboutOpen(!aboutOpen)}
          className="flex w-full items-center justify-between px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
          aria-expanded={aboutOpen}
        >
          About
          <svg
            className={`h-4 w-4 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {aboutOpen && (
          <div className="border-l-2 border-emerald-200 ml-4 mb-1 dark:border-emerald-800">
            <Link
              href="/about"
              onClick={close}
              className="block px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              About CRLC
            </Link>
            {aboutLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={close}
                className="block px-4 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
              >
                {label}
              </Link>
            ))}
          </div>
        )}

        {/* Other nav links */}
        {navLinks
          .filter((l) => l.href !== "/")
          .map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              className="block px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              {label}
            </Link>
          ))}

        {/* Parent Login button */}
        <Link
          href="/resources"
          onClick={close}
          className="mx-2 mt-2 block rounded-full bg-emerald-600 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-emerald-700"
        >
          Parent Login
        </Link>
      </div>
    </div>
  );
}
