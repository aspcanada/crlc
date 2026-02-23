import Image from "next/image";

const partnerCards = [
  {
    logo: "/images/partner-nides.png",
    logoAlt: "NIDES / Heartwood Learning Communities logo",
    name: "Heartwood Learning Communities",
    url: "https://www.navigatenides.com/index.php/heartwood/",
    invert: true,
    description:
      "Offered in partnership with NIDES, Heartwood provides BC-certified teachers who weave academic excellence into our nature-based program. They cover numeracy, literacy, social sciences and sciences—finessed through the lens of the land.",
  },
  {
    logo: "/images/partner-hihand.svg",
    logoAlt: "Hand in Hand Nature Education logo",
    name: "Hand in Hand Nature Education",
    url: "https://hand-in-handeducation.com/",
    invert: true,
    description:
      "Joyful, play-based learning in the outdoors. Experienced educators guide children through songs, stories, and hands-on discovery in forests, fields, and streams—building resilience, wonder, and a lifelong love of nature.",
  },
  {
    logo: "/images/partner-danu.png",
    logoAlt: "Danu Folk School logo",
    name: "Danu Folk School",
    url: undefined,
    invert: false,
    description:
      "Rich, hands-on, heart-centered learning rooted in nature exploration, craft, herbal wisdom, storytelling, and seasonal rhythms. They create warm, inclusive spaces where curiosity, belonging, and connection to land flourish.",
  },
];

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="bg-zinc-950 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="text-center">
          <div className="mb-3 inline-block rounded-full bg-emerald-900/50 px-3 py-1 text-sm font-semibold text-emerald-300">
            Working Together
          </div>
          <h2 className="text-4xl font-bold text-white">
            Program Partners
          </h2>
          <p className="mt-3 text-zinc-400">
            Three distinct partners bring academics, nature education, and cultural wisdom to every day.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {partnerCards.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-emerald-700"
            >
              <div className="mb-4 flex h-16 items-center">
                <Image
                  src={p.logo}
                  alt={p.logoAlt}
                  width={120}
                  height={48}
                  className={`h-10 w-auto object-contain ${p.invert ? "brightness-0 invert" : "rounded-md"}`}
                />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {p.name}
                  </a>
                ) : (
                  p.name
                )}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-zinc-400">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
