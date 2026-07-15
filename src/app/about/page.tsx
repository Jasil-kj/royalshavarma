"use client";

import RevealText from "@/components/ui/RevealText";
import GlassPanel from "@/components/ui/GlassPanel";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-[120px] pb-stack-xl min-h-screen">
      <div className="px-margin-safe max-w-4xl mx-auto mb-stack-xl text-center">
        <span className="text-primary font-label-caps text-label-caps mb-4 block"><RevealText text="OUR STORY" /></span>
        <h1 className="font-display-lg text-display-lg md:text-[80px] mb-8 leading-tight">
          <RevealText text="Preserving Heritage," delay={0.2} />
          <br />
          <span className="text-primary italic"><RevealText text="Perfecting Flavor." delay={0.4} /></span>
        </h1>
      </div>

      <div className="px-margin-safe max-w-[1440px] mx-auto mb-stack-xl relative">
        <div className="aspect-video w-full rounded-[2rem] overflow-hidden relative">
          <img 
            src="/our-story.png" 
            alt="Master Chef Cooking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent"></div>
        </div>

        {/* Floating Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto -mt-16 md:-mt-24 relative z-10">
          {[
            { label: "Fresh Ingredients", value: 100, suffix: "%" },
            { label: "Halal", value: 100, suffix: "%" },
            { label: "Secret Spices", value: 12, suffix: "+" },
            { label: "Passion & Love", value: 100, suffix: "%" }
          ].map((stat, i) => (
            <GlassPanel key={stat.label} delay={i * 0.1} className="p-6 text-center shadow-2xl">
              <div className="font-headline-xl text-3xl md:text-5xl text-primary font-bold mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-label-caps text-[10px] text-on-surface-variant tracking-widest">{stat.label}</div>
            </GlassPanel>
          ))}
        </div>
      </div>

      <div className="px-margin-safe max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="font-headline-md text-headline-md mb-6 text-primary">The Royal Commitment</h3>
          <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
            Royal Shawarma isn&apos;t just a restaurant; it&apos;s a dedication to the craft of authentic Middle Eastern street food. We believe that true luxury lies in the quality of ingredients and the meticulous care taken in preparation.
          </p>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            Every morning, our kitchen comes alive with the aroma of freshly toasted spices. We never compromise. From our A-grade premium meats to our crisp, farm-fresh vegetables, every element is chosen to elevate your dining experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary text-3xl shrink-0">verified</span>
            <div>
              <h4 className="font-bold text-xl mb-2 text-on-background">Authentic Recipes</h4>
              <p className="text-on-surface-variant">Generations-old marinades and techniques imported directly from the Levant.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary text-3xl shrink-0">local_fire_department</span>
            <div>
              <h4 className="font-bold text-xl mb-2 text-on-background">Daily Preparation</h4>
              <p className="text-on-surface-variant">Nothing is frozen. Everything is roasted, chopped, and assembled fresh daily.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary text-3xl shrink-0">cleaning_services</span>
            <div>
              <h4 className="font-bold text-xl mb-2 text-on-background">Immaculate Kitchens</h4>
              <p className="text-on-surface-variant">We operate with transparent, open kitchens maintaining the highest hygiene standards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
