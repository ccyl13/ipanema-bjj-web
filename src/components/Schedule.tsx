"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { schedule, scheduleLegend, type ClassTag } from "@/lib/content";

const tagStyles: Record<ClassTag, string> = {
  AL: "bg-teal/15 text-teal",
  K: "bg-lime/15 text-lime",
  W: "bg-pink-400/15 text-pink-400",
  F: "bg-wood/20 text-wood",
  A: "bg-orange-400/15 text-orange-400",
  PRIVATE: "bg-white/10 text-white/70",
  OPEN: "border border-dashed border-white/25 text-white/50",
};

const dayShort: Record<string, string> = {
  Lunes: "LUN",
  Martes: "MAR",
  Miércoles: "MIÉ",
  Jueves: "JUE",
  Viernes: "VIE",
  Sábado: "SÁB",
};

export function Schedule() {
  const [active, setActive] = useState(0);
  const day = schedule.days[active];

  return (
    <section id="horarios" className="bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-xs font-bold tracking-[0.3em] text-teal uppercase">
            {schedule.heading}
          </h2>
          <p className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Encuentra tu clase
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div
            role="tablist"
            aria-label="Días de la semana"
            className="flex gap-2 overflow-x-auto pb-1"
          >
            {schedule.days.map((d, i) => (
              <button
                key={d.day}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors ${
                  i === active
                    ? "bg-gradient-to-r from-teal to-lime text-ink"
                    : "bg-ink text-white/60 hover:text-white"
                }`}
              >
                <span className="sm:hidden">{dayShort[d.day]}</span>
                <span className="hidden sm:inline">{d.day}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 min-h-[120px] overflow-hidden rounded-2xl border border-line">
            <AnimatePresence mode="wait">
              <motion.ul
                key={day.day}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="divide-y divide-line"
              >
                {day.classes.map((c) => (
                  <li
                    key={c.time + c.name}
                    className="flex flex-wrap items-center justify-between gap-3 bg-ink-2 px-5 py-4 odd:bg-ink"
                  >
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="w-[110px] shrink-0 font-semibold text-white">
                        {c.time}
                      </span>
                      <span className="text-white/75">{c.name}</span>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide ${tagStyles[c.tag]}`}
                    >
                      {scheduleLegend.find((l) => l.tag === c.tag)?.label}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {scheduleLegend.map((l) => (
            <span
              key={l.tag}
              className="flex items-center gap-1.5 text-xs text-white/45"
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${tagStyles[l.tag].split(" ")[0]}`}
              />
              {l.label}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-sm text-white/40">
            {schedule.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
