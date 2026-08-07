import Image from "next/image";
import { Reveal } from "./Reveal";
import { manifesto, about } from "@/lib/content";

export function About() {
  return (
    <section id="sobre-nosotros" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-xs font-bold tracking-[0.3em] text-teal uppercase">
            {manifesto.heading}
          </h2>
          <p className="mt-5 font-script text-3xl leading-snug text-white sm:text-4xl">
            &ldquo;{manifesto.quote}&rdquo;
          </p>
        </Reveal>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              {about.images.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, 45vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-1 rounded-xl border border-line bg-ink-2 px-5 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
              <p className="font-script text-2xl text-lime">
                {about.name} &ldquo;{about.nickname}&rdquo;
              </p>
              <p className="text-xs font-semibold tracking-wider text-white/60 uppercase">
                {about.belt}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-bold tracking-[0.3em] text-teal uppercase">
              {about.kicker}
            </p>
            <h3 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
              {about.name}
            </h3>
            <div className="mt-6 space-y-4">
              {about.bio.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-white/70"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
