"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { hero } from "@/lib/content";
import { WaveDivider } from "./WaveDivider";
import { Magnetic } from "./Magnetic";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <Image
          src={hero.image}
          alt="Instructor de Ipanema BJJ Gijón durante una clase"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/40" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-20 pb-24 sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-6xl leading-[1.15] text-white sm:text-7xl md:text-8xl"
        >
          <span className="font-script text-gradient">{hero.title}</span>{" "}
          <span className="font-semibold">{hero.titleSuffix}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg text-white/80"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <Link
              href={hero.ctaPrimary.href}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-lime px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_30px_-6px_var(--color-teal)] transition-transform hover:scale-[1.03]"
            >
              {hero.ctaPrimary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href={hero.ctaSecondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-teal hover:text-teal"
            >
              {hero.ctaSecondary.label}
            </Link>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-white/50" />
        </motion.div>
      </motion.div>

      <WaveDivider className="absolute right-0 bottom-0 left-0 h-16 w-full text-ink sm:h-24" />
    </section>
  );
}
