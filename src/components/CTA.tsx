import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { finalCta } from "@/lib/content";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink-2 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-teal to-lime blur-[140px]" />
      </div>

      <Reveal className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          {finalCta.heading}
        </h2>
        <p className="mt-4 text-white/70">{finalCta.subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={finalCta.primary.href}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-lime px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_30px_-6px_var(--color-teal)] transition-transform hover:scale-[1.03]"
          >
            {finalCta.primary.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={finalCta.secondary.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-teal hover:text-teal"
          >
            {finalCta.secondary.label}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
