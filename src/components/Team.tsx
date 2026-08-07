import Image from "next/image";
import { Reveal } from "./Reveal";
import { team } from "@/lib/content";

export function Team() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-xs font-bold tracking-[0.3em] text-teal uppercase">
            Equipo
          </h2>
          <p className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            {team.heading}
          </p>
          <p className="mt-4 text-white/60">{team.intro}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line sm:aspect-[21/9]">
            <Image
              src={team.image}
              alt="Equipo de instructores y alumnos de Ipanema BJJ Gijón"
              fill
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
