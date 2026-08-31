import { Reveal } from "./Reveal";
import { schedule, scheduleLegend, type ClassTag } from "@/lib/content";

const TIME_SLOTS = [
  "08:00–09:30",
  "11:00–12:30",
  "14:15–15:30",
  "17:30–18:30",
  "19:00–20:30",
  "20:30–22:00",
  "22:00–22:30",
];

// Background tint + left accent per class type, so the whole week reads as
// a colour pattern at a glance instead of a wall of identical grey cells.
const tagCellStyles: Record<ClassTag, string> = {
  AL: "bg-teal/10 border-l-teal text-teal",
  K: "bg-lime/10 border-l-lime text-lime",
  W: "bg-pink-400/10 border-l-pink-400 text-pink-400",
  F: "bg-wood/10 border-l-wood text-wood",
  LL: "bg-orange-400/10 border-l-orange-400 text-orange-400",
  OPEN: "bg-white/[0.03] border-l-white/15 text-white/40",
};

// Solid, full-opacity dots for the legend — the cell tints above are
// deliberately faint (they're backgrounds), but a 10%-opacity dot at 10px
// reads as barely-there, so the legend gets its own vivid palette.
const tagDotStyles: Record<ClassTag, string> = {
  AL: "bg-teal",
  K: "bg-lime",
  W: "bg-pink-400",
  F: "bg-wood",
  LL: "bg-orange-400",
  OPEN: "border-2 border-white/40",
};

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

        <Reveal
          delay={0.1}
          className="scrollbar-thin mt-10 overflow-x-auto rounded-2xl border border-line"
        >
          <table className="w-full min-w-[880px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 min-w-[110px] bg-ink px-4 py-4 text-left text-xs font-semibold tracking-wide text-white/50 uppercase">
                  Hora
                </th>
                {schedule.days.map(({ day }) => (
                  <th
                    key={day}
                    className="min-w-[130px] bg-ink px-3 py-4 text-left text-sm font-semibold text-teal"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TIME_SLOTS.map((time, i) => (
                <tr key={time} className={i % 2 === 0 ? "bg-ink-2" : "bg-ink"}>
                  <td
                    className={`sticky left-0 z-10 px-4 py-3.5 font-semibold whitespace-nowrap text-white ${i % 2 === 0 ? "bg-ink-2" : "bg-ink"}`}
                  >
                    {time}
                  </td>
                  {schedule.days.map(({ day, classes }) => {
                    const cls = classes.find((c) => c.time === time);
                    return (
                      <td key={day} className="p-0 align-top">
                        {cls ? (
                          <div
                            className={`h-full border-l-2 px-3 py-3.5 ${tagCellStyles[cls.tag]}`}
                            title={
                              scheduleLegend.find((l) => l.tag === cls.tag)
                                ?.label
                            }
                          >
                            <p className="font-medium text-white">
                              {cls.name}
                            </p>
                          </div>
                        ) : (
                          <div className="h-full border-l-2 border-l-transparent px-3 py-3.5 text-white/15">
                            —
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal delay={0.15} className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {scheduleLegend.map((l) => (
            <span
              key={l.tag}
              className="flex items-center gap-1.5 text-xs text-white/45"
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${tagDotStyles[l.tag]}`}
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
