import Image from "next/image";
import { clsx } from "clsx";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-[0_0_18px_-4px_var(--color-teal)]">
        <Image
          src="/images/logo.png"
          alt=""
          fill
          sizes="36px"
          className="rounded-full object-cover"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-script text-2xl leading-[1.15] text-white">
          Ipanema
        </span>
        <span className="text-[10px] font-semibold tracking-[0.3em] text-teal uppercase">
          BJJ Gijón
        </span>
      </span>
    </span>
  );
}
