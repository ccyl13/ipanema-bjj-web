import Link from "next/link";
import { Logo } from "@/components/Logo";
import { WaveDivider } from "@/components/WaveDivider";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-ink px-5 py-24 text-center">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-br from-teal to-lime blur-[140px]" />
      </div>

      <div className="relative">
        <Logo className="justify-center" />
        <p className="mt-10 font-script text-7xl text-gradient sm:text-8xl">
          Wipeout
        </p>
        <h1 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
          Esta ola no existe (error 404)
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/60">
          La página que buscas se ha caído de la tabla. Vuelve al tatami.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-lime px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
        >
          Volver al inicio
        </Link>
      </div>

      <WaveDivider className="absolute right-0 bottom-0 left-0 h-16 w-full text-ink-2 sm:h-24" />
    </section>
  );
}
