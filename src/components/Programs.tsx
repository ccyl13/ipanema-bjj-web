import { Reveal } from "./Reveal";
import { programs } from "@/lib/content";

export function Programs() {
  return (
    <section id="programas" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-xs font-bold tracking-[0.3em] text-teal uppercase">
            Programas
          </h2>
          <p className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Un programa para cada objetivo
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {programs.map((program, i) => (
            <Reveal key={program.slug} delay={i * 0.07}>
              <div className="group grid grid-cols-[3.5rem_1fr] items-center gap-x-5 gap-y-3 rounded-xl px-3 py-9 -mx-3 transition-colors hover:bg-ink-2 sm:grid-cols-[5rem_1fr] sm:gap-x-8 sm:py-10">
                <span
                  aria-hidden
                  className="number-outline font-sans text-5xl leading-none font-bold transition-transform duration-300 group-hover:translate-x-1 sm:text-6xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-lime sm:text-3xl">
                    {program.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-white/65">
                    {program.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {program.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="rounded-full border border-line bg-ink px-3 py-1 text-xs font-semibold tracking-wide text-white/60 uppercase"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
