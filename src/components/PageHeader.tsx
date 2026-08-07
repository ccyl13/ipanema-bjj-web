import { Reveal } from "./Reveal";

export function PageHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-line bg-ink-2 pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] text-teal uppercase">
            {kicker}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mx-auto mt-5 max-w-2xl text-white/65">{intro}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
