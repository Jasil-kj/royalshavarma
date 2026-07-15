"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  speed?: number;
}

export default function ParallaxImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  speed = 0.5,
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  // We multiply speed by 10 to adjust the intensity of the parallax effect
  const yOffset = useTransform(y, (value) => `calc(${value} * ${speed})`);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y: yOffset }}
        className="absolute inset-0 w-full h-[140%] -top-[20%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${imageClassName}`}
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized={src.startsWith('http')}
        />
      </motion.div>
    </div>
  );
}
