import Link from "next/link";
import Image from "next/image";
import { hero } from "@/data/home";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Children exploring in nature at Cottonwood Rose"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay: darker at bottom for text legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-zinc-900/50 to-zinc-900/80"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-end px-4 pb-20 pt-32 text-center sm:px-6">
        {/* Badge */}
        <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-widest text-white/90 backdrop-blur-sm">
          Black Creek · Comox Valley · BC
        </span>

        <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
          {hero.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
          {hero.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/enrollment"
            className="rounded-full bg-emerald-500 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Apply for Enrollment
          </Link>
          <Link
            href="/contact"
            className="rounded-full border-2 border-white/70 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Visit the Land
          </Link>
        </div>

        <p className="mt-10 text-sm text-white/70">
          {hero.noteForFamilies}{" "}
          <a
            href="mailto:cottonwoodrosesociety@gmail.com"
            className="font-medium text-emerald-300 hover:text-white"
          >
            Reach out to us
          </a>{" "}
          or check the{" "}
          <Link href="/resources" className="font-medium text-emerald-300 hover:text-white">
            parent resource page
          </Link>
          .
        </p>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce text-white/60">
          <svg className="h-6 w-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
