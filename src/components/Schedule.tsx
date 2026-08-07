import { Reveal } from "./Reveal";
import { schedule } from "@/lib/content";

export function Schedule() {
  return (
    <section id="horarios" className="bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-xs font-bold tracking-[0.3em] text-teal uppercase">
            {schedule.heading}
          </h2>
          <p className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Encuentra tu clase
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-10">
          <div className="scrollbar-thin overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-ink">
                  <th className="px-5 py-4 text-left font-semibold text-white/50">
                    Horario
                  </th>
                  {schedule.days.map((day) => (
                    <th
                      key={day}
                      className="px-5 py-4 text-left font-semibold text-teal"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.rows.map((row, i) => (
                  <tr
                    key={row.time}
                    className={i % 2 === 0 ? "bg-ink-2" : "bg-ink"}
                  >
                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-white">
                      {row.time}
                    </td>
                    {row.cells.map((cell, j) => (
                      <td key={j} className="px-5 py-4 text-white/70">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 bottom-0 w-10 rounded-r-2xl bg-gradient-to-l from-ink-2 to-transparent sm:hidden"
          />
          <p className="mt-2 text-xs text-white/40 sm:hidden">
            Desliza para ver toda la semana →
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-sm text-white/50">
            {schedule.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
