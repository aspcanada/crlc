import { Hero } from "@/components/home/Hero";
import { ProgramSection } from "@/components/home/ProgramSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { EducatorsSection } from "@/components/home/EducatorsSection";
import { LandSection } from "@/components/home/LandSection";
import { HostFamilySection } from "@/components/home/HostFamilySection";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      <Hero />
      <ProgramSection />
      <PartnersSection />
      <EducatorsSection />
      <LandSection />
      <HostFamilySection />
      <ContactCTA />
    </div>
  );
}
