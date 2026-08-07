import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { tienda } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tienda",
  description:
    "Kimonos y rashguards del equipo Ipanema BJJ Gijón. Primera clase con gi incluido.",
};

export default function TiendaPage() {
  return (
    <>
      <PageHeader
        kicker="Tienda"
        title={tienda.heading}
        intro={tienda.intro}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {tienda.products.map((product, i) => (
              <Reveal
                key={product.name}
                delay={i * 0.1}
                className="group overflow-hidden rounded-2xl border border-line bg-ink-2"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    {product.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="mt-10 flex flex-col items-center gap-5 rounded-2xl border border-teal/30 bg-gradient-to-br from-teal/10 to-lime/10 px-8 py-10 text-center"
          >
            <ShoppingBag className="h-8 w-8 text-teal" />
            <p className="max-w-xl text-white/80">{tienda.note}</p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-lime px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Reservar mi gi
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
