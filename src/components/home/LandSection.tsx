import Image from "next/image";
import { land } from "@/data/home";

export function LandSection() {
  return (
    <section id="land" className="relative overflow-hidden">
      {/* Full-width atmospheric banner */}
      <div className="relative h-64 sm:h-80 md:h-96">
        <Image
          src="/images/land-3.jpg"
          alt="46 forested acres at Cottonwood Rose"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 via-zinc-900/40 to-transparent" aria-hidden />
        <div className="absolute inset-0 flex items-center px-6 sm:px-12">
          <div>
            <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm">
              Black Creek, BC
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              {land.title}
            </h2>
          </div>
        </div>
      </div>

      {/* Content below the banner */}
      <div className="bg-zinc-50 px-4 py-16 dark:bg-zinc-900 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-5">
              {land.description.trim().split("\n\n").map((para, i) => (
                <p key={i} className="text-zinc-600 leading-relaxed dark:text-zinc-400">
                  {para.trim()}
                </p>
              ))}
            </div>

            {/* Photo cards */}
            <div className="flex flex-col gap-4">
              <div className="relative h-52 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/land-1.jpg"
                  alt="Goats on the farm at Cottonwood Rose"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  Farm animals
                </div>
              </div>
              <div className="relative h-52 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/land-2.jpg"
                  alt="Forest trails and outdoor learning at Cottonwood Rose"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  46 forested acres
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
