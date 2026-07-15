"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function RevealText({ text, className = "", delay = 0 }: RevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <span ref={ref} className={`inline-block overflow-hidden py-4 -my-4 px-2 -mx-2 ${className}`}>
      <motion.span
        className="inline-block origin-bottom"
        initial={{ y: "100%", rotate: 2, opacity: 0 }}
        animate={isInView ? { y: 0, rotate: 0, opacity: 1 } : { y: "100%", rotate: 2, opacity: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.33, 1, 0.68, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}
