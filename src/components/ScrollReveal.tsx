"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const MotionTag = motion.create(as as any);

  return (
    <MotionTag
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: delay,
      }}
      style={{ willChange: "transform, opacity" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
