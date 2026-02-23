import { Hero } from "@/components/home/Hero";
import { ProgramSection } from "@/components/home/ProgramSection";
import { PhotoMosaic } from "@/components/home/PhotoMosaic";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      <Hero />
      <ProgramSection />
      <PhotoMosaic />
      <PartnersSection />
      <ContactCTA />
    </div>
  );
}
