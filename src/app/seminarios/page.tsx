import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Waves } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { seminarios } from "@/lib/content";

export const metadata: Metadata = {
  title: "Seminarios y campamentos",
  description:
    "Campamentos BJJ + Surf de Ipanema BJJ Gijón: formación técnica, entrenamiento en la naturaleza y comunidad.",
};

export default function SeminariosPage() {
  return (
    <>
      <PageHeader
        kicker="Seminarios"
        title={seminarios.heading}
        intro={seminarios.intro}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl border border-line">
            <Image
              src="/images/entrenamiento-rolling.jpg"
              alt="Entrenamiento de Jiu-Jitsu en Ipanema BJJ Gijón"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {seminarios.campDays.map((item, i) => (
              <Reveal
                key={item.day}
                delay={i * 0.1}
                className="rounded-2xl border border-line bg-ink-2 p-7"
              >
                <span className="text-xs font-bold tracking-[0.3em] text-teal uppercase">
                  {`Día ${i + 1}`}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {item.day}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 max-w-2xl">
            <p className="text-xs font-bold tracking-[0.3em] text-teal uppercase">
              Próximamente
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Próximos campamentos
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {seminarios.upcoming.map((event, i) => (
              <Reveal
                key={event.title}
                delay={i * 0.1}
                className="flex flex-col gap-4 rounded-2xl border border-line bg-ink-2 p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-lime/20 text-teal">
                  <Waves className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    {event.description}
                  </p>
                </div>
                <Link
                  href="/#contacto"
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-teal hover:text-teal"
                >
                  Pre-inscribirme
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
