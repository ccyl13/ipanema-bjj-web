import Image from "next/image";
import { Droplet, Dumbbell, Zap } from "lucide-react";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { recovery } from "@/lib/content";

const featureIcons = [Droplet, Dumbbell, Zap];

export function Recovery() {
  const item = recovery.items[0];

  return (
    <section className="relative overflow-hidden bg-ink-2 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute top-1/2 left-0 h-[420px] w-[420px] -translate-y-1/2 -translate-x-1/3 rounded-full bg-gradient-to-br from-teal to-lime blur-[140px]" />
        <div className="absolute top-1/2 right-0 h-[420px] w-[420px] -translate-y-1/2 translate-x-1/3 rounded-full bg-gradient-to-br from-lime to-teal blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-teal uppercase">
            {recovery.kicker}
          </p>
          <p className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            {recovery.heading}
          </p>
          <p className="mt-4 text-white/60">{recovery.intro}</p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-12 grid items-center gap-10 overflow-hidden rounded-2xl border border-teal/30 bg-gradient-to-br from-teal/10 via-ink to-ink lg:grid-cols-2 lg:gap-0"
        >
          <div className="p-8 sm:p-10 lg:order-2 lg:p-12">
            <TiltCard
              maxTilt={4}
              className="relative mx-auto aspect-[2/3] w-full max-w-xs overflow-hidden rounded-2xl border border-line bg-ink shadow-[0_0_40px_-12px_var(--color-teal)]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 384px, 80vw"
                className="object-contain p-6"
              />
            </TiltCard>
          </div>

          <div className="p-8 sm:p-10 lg:order-1 lg:pr-0 lg:pl-12">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              {item.text}
            </p>

            <ul className="mt-7 flex flex-col gap-4">
              {recovery.features.map((feature, i) => {
                const Icon = featureIcons[i] ?? Zap;
                return (
                  <li key={feature} className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-lime/20 text-teal">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <span className="text-sm font-medium text-white/80">
                      {feature}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
