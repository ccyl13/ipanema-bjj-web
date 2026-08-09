import Image from "next/image";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { recovery } from "@/lib/content";

export function Recovery() {
  return (
    <section className="bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-teal uppercase">
            {recovery.kicker}
          </p>
          <p className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            {recovery.heading}
          </p>
          <p className="mt-4 text-white/60">{recovery.intro}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {recovery.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <TiltCard
                maxTilt={3}
                className="overflow-hidden rounded-2xl border border-line bg-ink"
              >
                <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 640px) 320px, 80vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {item.text}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
