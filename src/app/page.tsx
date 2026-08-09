import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Recovery } from "@/components/Recovery";
import { Programs } from "@/components/Programs";
import { Achievements } from "@/components/Achievements";
import { Team } from "@/components/Team";
import { Schedule } from "@/components/Schedule";
import { LocationSection } from "@/components/LocationSection";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Recovery />
      <Programs />
      <Achievements />
      <Team />
      <Schedule />
      <LocationSection />
      <CTA />
    </>
  );
}
