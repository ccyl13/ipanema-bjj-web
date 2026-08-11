"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ImageCrossfadeProps = {
  images: string[];
  alt: string;
  intervalMs?: number;
  className?: string;
};

// Carrusel simple que va enseñando cada imagen del array con un fundido
// cruzado (crossfade) y un degradado sutil por encima para que se integre
// con el resto de la sección. Pensado para bloques con position: relative
// y altura ya definida por el contenedor padre.
export function ImageCrossfade({
  images,
  alt,
  intervalMs = 4500,
  className = "",
}: ImageCrossfadeProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={i === 0}
          className={`object-cover object-top transition-opacity duration-[1600ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
    </div>
  );
}
