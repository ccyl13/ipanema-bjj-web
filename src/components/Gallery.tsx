"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { gallery } from "@/lib/content";

const AUTO_ADVANCE_MS = 4500;

export function Gallery() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (next: number) => {
      setDirection(
        next > index || (index === gallery.length - 1 && next === 0) ? 1 : -1
      );
      setIndex(((next % gallery.length) + gallery.length) % gallery.length);
    },
    [index]
  );

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % gallery.length);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  const current = gallery[index];

  return (
    <section id="instalaciones" className="bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold tracking-[0.3em] text-teal uppercase">
              Instalaciones
            </h2>
            <p className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Un espacio pensado para entrenar en serio
            </p>
            <p className="mt-3 text-white/60">
              Tatami amplio, vestuarios, duchas y una nevera con bebidas
              frías y barritas de proteína para cuando terminas la clase.
            </p>
          </div>
          <p className="text-sm text-white/50">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(gallery.length).padStart(2, "0")}
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="group relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-ink sm:aspect-[21/9]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={current.src}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) go(index + 1);
                else if (info.offset.x > 80) go(index - 1);
              }}
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                priority={index === 0}
                sizes="(min-width: 640px) 90vw, 100vw"
                className="pointer-events-none object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          <p className="pointer-events-none absolute bottom-5 left-5 text-lg font-semibold text-white sm:text-xl">
            {current.caption}
          </p>

          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => go(index - 1)}
            className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/50 text-white opacity-70 backdrop-blur-sm transition-opacity hover:opacity-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Foto siguiente"
            onClick={() => go(index + 1)}
            className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/50 text-white opacity-70 backdrop-blur-sm transition-opacity hover:opacity-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute right-0 bottom-0 left-0 flex h-1 bg-black/30">
            {gallery.map((item, i) => (
              <button
                key={item.src}
                type="button"
                aria-label={`Ir a la foto ${i + 1}: ${item.caption}`}
                onClick={() => go(i)}
                className="relative h-full flex-1 overflow-hidden"
              >
                {i === index && (
                  <motion.span
                    key={paused ? "paused" : current.src}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: paused ? 0 : 1 }}
                    transition={{
                      duration: paused ? 0 : AUTO_ADVANCE_MS / 1000,
                      ease: "linear",
                    }}
                    style={{ originX: 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-teal to-lime"
                  />
                )}
                {i < index && (
                  <span className="absolute inset-0 bg-teal/60" />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {gallery.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => go(i)}
              aria-label={item.caption}
              aria-current={i === index}
              className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition-opacity ${
                i === index
                  ? "border-teal opacity-100"
                  : "border-line opacity-50 hover:opacity-80"
              }`}
            >
              <Image
                src={item.src}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
