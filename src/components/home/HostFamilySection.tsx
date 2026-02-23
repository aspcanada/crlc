import Image from "next/image";
import { hostFamily } from "@/data/home";

export function HostFamilySection() {
  const paragraphs = hostFamily.message.trim().split("\n\n");

  return (
    <section id="founders" className="bg-white px-4 py-20 dark:bg-zinc-950 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div className="space-y-5">
            <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
              From the Founders
            </div>
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
              {hostFamily.title}
            </h2>
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className={`text-zinc-600 dark:text-zinc-400 ${i === 0 ? "text-lg font-medium text-zinc-800 dark:text-zinc-200" : ""}`}
              >
                {para.trim()}
              </p>
            ))}
          </div>

          {/* Photo collage */}
          <div className="grid grid-cols-2 gap-3">
            {/* Main wide family photo */}
            <div className="relative col-span-2 h-64 overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/community.jpg"
                alt="The Cottonwood Rose host family and community"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden />
            </div>
            {/* Smaller accent photos */}
            <div className="relative h-40 overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/program.jpg"
                alt="The dome classroom at Cottonwood Rose"
                fill
                className="object-cover object-center"
                sizes="25vw"
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/land-3.jpg"
                alt="The land at Cottonwood Rose"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
