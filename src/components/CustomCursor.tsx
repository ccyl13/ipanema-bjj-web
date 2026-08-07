"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const POINTER_QUERY = "(pointer: fine)";

// useSyncExternalStore reads the matchMedia state directly on both the
// server (always "false", so SSR renders nothing) and the client's first
// paint, so there's no synchronous setState-in-effect and no hydration
// mismatch, the standard React pattern for subscribing to a browser API.
function subscribePointerFine(callback: () => void) {
  const mq = window.matchMedia(POINTER_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}
function getPointerFineSnapshot() {
  return window.matchMedia(POINTER_QUERY).matches;
}
function getPointerFineServerSnapshot() {
  return false;
}

// A soft, ambient glow that drifts a beat behind the real pointer. The
// native cursor is never hidden (precision stays untouched, no discomfort
// clicking small targets); this just adds a bit of light on dark sections,
// warming up slightly over anything clickable. Desktop-with-a-mouse only.
export function CustomCursor() {
  const enabled = useSyncExternalStore(
    subscribePointerFine,
    getPointerFineSnapshot,
    getPointerFineServerSnapshot
  );
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const glowX = useSpring(x, { stiffness: 90, damping: 22, mass: 0.6 });
  const glowY = useSpring(y, { stiffness: 90, damping: 22, mass: 0.6 });

  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
        setVisible(true);
      });
    };

    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(
        "a, button, [data-cursor-hover]"
      );
      setHovering(!!target);
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 rounded-full"
      style={{
        x: glowX,
        y: glowY,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, var(--color-teal) 0%, var(--color-lime) 45%, transparent 72%)",
        mixBlendMode: "screen",
        filter: "blur(8px)",
      }}
      animate={{
        width: hovering ? 260 : 190,
        height: hovering ? 260 : 190,
        opacity: visible ? (hovering ? 0.22 : 0.13) : 0,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    />
  );
}
