import type { Metadata } from "next";
import Link from "next/link";
import { Check, Layers, Plane, Ticket } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { Magnetic } from "@/components/Magnetic";
import { bonos, contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Bonos",
  description:
    "Bonos de clases sueltas y Bono Nómada para practicantes de paso por Gijón, en Ipanema BJJ Gijón.",
};

const icons = [Ticket, Layers, Plane];

export default function BonosPage() {
  return (
    <>
      <PageHeader kicker="Bonos" title={bonos.heading} intro={bonos.intro} />

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute top-0 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-br from-teal to-lime blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-3 sm:items-center">
            {bonos.plans.map((plan, i) => {
              const Icon = icons[i] ?? Ticket;
              return (
                <Reveal key={plan.name} delay={i * 0.1} className="h-full">
                  <TiltCard
                    maxTilt={plan.highlight ? 4 : 3}
                    className={`group relative h-full rounded-3xl p-[1px] transition-transform duration-300 sm:hover:-translate-y-1.5 ${
                      plan.highlight
                        ? "bg-gradient-to-br from-teal via-lime to-teal shadow-[0_0_50px_-12px_var(--color-teal)]"
                        : "bg-line"
                    }`}
                  >
                    <div
                      className={`flex h-full flex-col rounded-[calc(1.5rem-1px)] p-8 ${
                        plan.highlight
                          ? "bg-ink-2"
                          : "bg-ink-2/80 transition-colors group-hover:bg-ink-2"
                      }`}
                    >
                      {plan.highlight && (
                        <span className="mb-5 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-teal to-lime px-3.5 py-1 text-xs font-bold tracking-wide text-ink uppercase">
                          Para visitantes
                        </span>
                      )}

                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                          plan.highlight
                            ? "bg-gradient-to-br from-teal to-lime text-ink"
                            : "bg-gradient-to-br from-teal/20 to-lime/20 text-teal"
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>

                      <h3 className="mt-5 text-xl font-semibold text-white">
                        {plan.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {plan.description}
                      </p>

                      <div className="mt-6 flex items-baseline gap-2">
                        <span className="text-gradient text-5xl font-bold">
                          {plan.price}
                        </span>
                      </div>
                      <p className="mt-1 text-xs font-semibold tracking-[0.15em] text-white/45 uppercase">
                        {plan.priceNote}
                      </p>

                      <ul className="mt-7 flex flex-col gap-3">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2.5 text-sm text-white/75"
                          >
                            <Check
                              className="h-4 w-4 shrink-0 text-lime"
                              strokeWidth={2.5}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Magnetic className="mt-8">
                        <Link
                          href={contact.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03] ${
                            plan.highlight
                              ? "bg-gradient-to-r from-teal to-lime text-ink shadow-[0_0_30px_-8px_var(--color-teal)]"
                              : "border border-white/25 text-white hover:border-teal hover:text-teal"
                          }`}
                        >
                          Quiero este bono
                        </Link>
                      </Magnetic>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>

          <Reveal
            delay={0.3}
            className="mt-14 rounded-2xl border border-line bg-ink-2 px-8 py-7 text-center"
          >
            <p className="mx-auto max-w-2xl text-sm text-white/60">
              {bonos.note}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
