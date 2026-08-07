import { MapPin, ExternalLink, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { location, contact } from "@/lib/content";

export function LocationSection() {
  const embedSrc =
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Ipanema BJJ, " + contact.address) +
    "&output=embed";

  return (
    <section id="ubicacion" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold tracking-[0.3em] text-teal uppercase">
              {location.heading}
            </h2>
            <p className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Te esperamos en el tatami
            </p>
            <p className="mt-4 flex items-center gap-2 text-white/60">
              <MapPin className="h-4 w-4 shrink-0 text-lime" />
              {location.intro}
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-white/50">
              <Star className="h-4 w-4 fill-lime text-lime" />
              {location.rating.value} en Google
            </p>
          </div>
          <a
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-teal hover:text-teal"
          >
            Abrir en Maps <ExternalLink className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-10 overflow-hidden rounded-2xl border border-line"
        >
          <iframe
            title="Ubicación de Ipanema BJJ Gijón en Google Maps"
            src={embedSrc}
            className="h-[420px] w-full grayscale invert-[0.92] contrast-[0.9]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
