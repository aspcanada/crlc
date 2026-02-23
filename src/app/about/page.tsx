import type { Metadata } from "next";
import { LandSection } from "@/components/home/LandSection";
import { EducatorsSection } from "@/components/home/EducatorsSection";
import { HostFamilySection } from "@/components/home/HostFamilySection";

export const metadata: Metadata = {
  title: "About — CRLC",
  description:
    "Meet our educators, explore 46 forested acres in Black Creek, and hear from the founding family of Cottonwood Rose Learning Community.",
};

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      {/* Page hero */}
      <div className="bg-emerald-800 px-4 py-16 text-center text-white sm:px-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-200">
          Our Community
        </p>
        <h1 className="text-4xl font-bold sm:text-5xl">About CRLC</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-100">
          46 forested acres, a passionate team, and a community of families growing
          something beautiful together in Black Creek, BC.
        </p>
        <nav
          aria-label="On-page sections"
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {[
            { href: "#land", label: "The Land" },
            { href: "#educators", label: "The Team" },
            { href: "#founders", label: "The Founders" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      <LandSection />
      <EducatorsSection />
      <HostFamilySection />
    </div>
  );
}
