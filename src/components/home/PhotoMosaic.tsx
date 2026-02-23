import Image from "next/image";

const photos = [
  { src: "/images/land-1.jpg", alt: "Learning in the forest" },
  { src: "/images/land-2.jpg", alt: "Outdoor classroom at Cottonwood Rose" },
  { src: "/images/land-3.jpg", alt: "Nature exploration on the land" },
];

export function PhotoMosaic() {
  return (
    <section aria-label="Photo gallery" className="overflow-hidden bg-zinc-900">
      <div className="grid h-64 grid-cols-3 gap-0.5 sm:h-80 md:h-96">
        {photos.map((photo, i) => (
          <div key={photo.src} className={`relative overflow-hidden ${i === 1 ? "scale-105" : ""}`}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="33vw"
            />
            <div className="absolute inset-0 bg-zinc-900/10 hover:bg-transparent transition-colors duration-300" aria-hidden />
          </div>
        ))}
      </div>
    </section>
  );
}
