import Image from "next/image";
import { Trophy } from "lucide-react";
import { Reveal } from "./Reveal";
import { WaveDivider } from "./WaveDivider";
import { achievements } from "@/lib/content";

export function Achievements() {
  return (
    <section id="palmares" className="relative bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line">
            <Image
              src={achievements.image}
              alt="Pared de medallas y trofeos de Ipanema BJJ Gijón"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <p className="text-xs font-bold tracking-[0.3em] text-teal uppercase">
            {achievements.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            {achievements.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            {achievements.intro}
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {achievements.highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-line bg-ink px-4 py-3.5 text-sm font-medium text-white/85"
              >
                <Trophy className="h-4 w-4 shrink-0 text-lime" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <WaveDivider className="absolute right-0 bottom-0 left-0 h-14 w-full text-ink sm:h-20" />
    </section>
  );
}
