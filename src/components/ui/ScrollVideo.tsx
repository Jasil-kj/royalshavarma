"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useSpring, useMotionValueEvent } from "framer-motion";

interface ScrollVideoProps {
  src: string;
}

export default function ScrollVideo({ src }: ScrollVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);

  // Track the scroll progress through the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply a spring to the scroll progress to give it a buttery smooth (140fps) feel
  // even if the user is using a jerky mouse wheel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (videoRef.current) {
      // Ensure the video metadata is loaded so we know the exact duration
      videoRef.current.onloadedmetadata = () => {
        setDuration(videoRef.current?.duration || 0);
      };
      // Force load for some browsers
      videoRef.current.load();
    }
  }, [src]);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (videoRef.current && duration > 0) {
      let newTime = latest * duration;
      
      if (newTime < 0) newTime = 0;
      if (newTime > duration) newTime = duration;

      // Update the video playback position inside a requestAnimationFrame
      // to keep it perfectly synced with the browser's render cycle
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = newTime;
        }
      });
    }
  });

  return (
    // Render only on desktop (hidden md:block).
    // Height is 300vh so it takes a full continuous scroll to scrub through the video.
    <section ref={containerRef} className="hidden md:block relative h-[300vh] w-full bg-black z-10">
      {/* Sticky container that locks the video to the viewport while scrolling */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        />
        {/* Gradient overlays to blend the video edges into the website seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none z-10"></div>
      </div>
    </section>
  );
}
