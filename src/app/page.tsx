"use client";

import ShaderCanvas from "@/components/ShaderCanvas";
import MagneticButton from "@/components/ui/MagneticButton";
import RevealText from "@/components/ui/RevealText";
import GlassPanel from "@/components/ui/GlassPanel";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollVideo from "@/components/ui/ScrollVideo";

import { useRef, useEffect, useState } from "react";
import { useScroll, useSpring, useMotionValueEvent } from "framer-motion";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // If user refreshes the page and is already scrolled down, skip the lock
    if (window.scrollY > 10) {
      setHasPlayed(true);
    }
  }, []);

  useEffect(() => {
    if (!hasPlayed) {
      // Lock scroll while the hero video hasn't finished
      document.body.style.overflow = 'hidden';
      
      const startVideo = () => {
        if (!isPlaying && videoRef.current) {
          setIsPlaying(true);
          const playPromise = videoRef.current.play();
          
          // Handle cases where the browser blocks the video from playing
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              setHasPlayed(true);
              setIsPlaying(false);
            });
          }

          videoRef.current.onended = () => {
            setHasPlayed(true);
            setIsPlaying(false);
          };
        }
      };

      const handleWheel = (e: WheelEvent) => {
        if (e.deltaY > 0) startVideo(); // User scrolled down
      };
      
      let touchStartY = 0;
      const handleTouchStart = (e: TouchEvent) => { 
        touchStartY = e.touches[0].clientY; 
      };
      
      const handleTouchMove = (e: TouchEvent) => {
        const touchEndY = e.touches[0].clientY;
        if (touchStartY - touchEndY > 20) {
          startVideo(); // User swiped up (attempting to scroll down)
        }
      };

      window.addEventListener('wheel', handleWheel);
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [hasPlayed, isPlaying]);

  return (
    <>
      {/* Hero Section */}
      <header id="hero" className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-black z-0">
          <video 
            ref={videoRef}
            muted 
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-90"
          >
            <source src="/mobile-scroll-video.mp4" media="(max-width: 767px)" type="video/mp4" />
            <source src="/desktop-scroll-video.mp4" media="(min-width: 768px)" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
        
        <div className={`relative z-10 text-center px-margin-safe max-w-4xl flex flex-col items-center justify-center h-full mx-auto transition-all duration-1000 ${hasPlayed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
          <h1 className="font-display-lg text-display-lg md:text-[100px] text-on-background mb-stack-sm leading-tight">
            <RevealText text="Every Bite is " delay={0.2} />
            <span className="text-primary inline-block">
              <RevealText text="Royal." delay={0.4} />
            </span>
          </h1>
          <div className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-md opacity-90 overflow-hidden">
            <RevealText 
              text="Authentic Middle Eastern flavors crafted fresh every day in the heart of Saudi Arabia. Experience the gold standard of shawarma." 
              delay={0.6}
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-gutter justify-center items-center mt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-both">
            <MagneticButton>
              <Link href="/menu" className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label-caps text-label-caps font-bold tracking-widest hover:scale-105 transition-transform block">
                EXPLORE MENU
              </Link>
            </MagneticButton>
            <MagneticButton intensity={0.1}>
              <Link href="/contact" className="border border-primary text-primary px-10 py-4 rounded-lg font-label-caps text-label-caps font-bold tracking-widest hover:bg-primary/10 transition-colors block">
                OUR LOCATIONS
              </Link>
            </MagneticButton>
          </div>
        </div>
        
          <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20 transition-opacity duration-1000 ${!hasPlayed && !isPlaying ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}>
            <span className="font-label-caps text-label-caps">SCROLL TO DISCOVER</span>
            <span className="material-symbols-outlined">expand_more</span>
          </div>
      </header>



      {/* Halal Guarantee Banner */}
      <div className="w-full border-b border-t border-outline-variant bg-surface-container-lowest py-8 z-20 relative">
        <div className="px-margin-safe max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 text-center">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
            <span className="font-headline-md text-headline-sm">100% Halal</span>
          </div>
          <div className="w-1.5 h-1.5 bg-primary/40 rounded-full hidden md:block"></div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">restaurant</span>
            <span className="font-headline-md text-headline-sm">Premium Quality Meats</span>
          </div>
          <div className="w-1.5 h-1.5 bg-primary/40 rounded-full hidden md:block"></div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">local_fire_department</span>
            <span className="font-headline-md text-headline-sm">Freshly Roasted Daily</span>
          </div>
        </div>
      </div>
      {/* Brand Story Section */}
      <ScrollReveal as="section" className="py-stack-xl px-margin-safe max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center overflow-hidden">
        <div className="md:col-span-5">
          <span className="text-primary font-label-caps text-label-caps mb-4 block"><RevealText text="CRAFTED WITH PASSION" /></span>
          <h2 className="font-headline-xl text-headline-xl mb-stack-md leading-tight">
            A Journey from the Levant to the Kingdom.
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
            <p>Royal Shawarma was born from a singular obsession: to bring the uncompromising quality of authentic Middle Eastern street food to the culinary landscape of Saudi Arabia.</p>
            <p>We source our spices directly from traditional markets, blend them by hand, and slow-roast our premium meats to succulent perfection. This is not just fast food; it is a heritage preserved in every wrap.</p>
          </div>
          <Link href="/about" className="inline-block mt-stack-md border-b border-primary text-primary pb-1 font-label-caps text-label-caps hover:text-on-background hover:border-on-background transition-colors">
            LEARN MORE ABOUT US
          </Link>
        </div>
        <div className="md:col-span-7 relative flex justify-center items-center">
          <div className="w-full max-w-lg aspect-[4/3] rounded-xl overflow-hidden bg-surface-container shadow-2xl">
            <Image className="object-cover" src="/our-story.png" alt="Royal Shawarma Hub Story" fill sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <GlassPanel className="absolute -bottom-8 -left-8 p-6 hidden md:block max-w-[280px]" delay={0.2}>
            <p className="font-headline-md text-headline-md italic">"Crafted with fire. Wrapped with flavor. Served with pride."</p>
          </GlassPanel>
        </div>
      </ScrollReveal>

      {/* Signature Items Section */}
      <ScrollReveal as="section" className="py-stack-xl bg-surface-container-lowest overflow-hidden">
        <div className="px-margin-safe max-w-[1440px] mx-auto mb-stack-lg flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="text-primary font-label-caps text-label-caps mb-4 block">THE COLLECTION</span>
            <h2 className="font-headline-xl text-headline-xl">Signature Creations</h2>
          </div>
          <Link href="/menu" className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 hover:text-on-background hover:border-on-background transition-colors">
            VIEW FULL MENU
          </Link>
        </div>
        
        <div className="flex overflow-x-auto gap-gutter px-margin-safe hide-scrollbar pb-10">
          <div className="min-w-[320px] md:min-w-[450px] group">
            <div className="aspect-square bg-surface-container rounded-2xl overflow-hidden mb-stack-sm relative">
              <Image className="object-cover group-hover:scale-110 transition-transform duration-700" src="/royal-chicken-shawarma.png" alt="Royal Chicken Shawarma" fill sizes="(max-width: 768px) 100vw, 33vw" />

            </div>
            <h3 className="font-headline-md text-headline-md mb-2">Royal Chicken Shawarma</h3>
            <p className="text-on-surface-variant mb-4">Freshly Grilled. Perfectly Wrapped. Truly Royal.</p>
          </div>
          
          <div className="min-w-[320px] md:min-w-[450px] group">
            <div className="aspect-square bg-surface-container rounded-2xl overflow-hidden mb-stack-sm relative">
              <Image className="object-cover group-hover:scale-110 transition-transform duration-700" src="/royal-beef-shawarma.jpeg" alt="Royal Beef Shawarma" fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <h3 className="font-headline-md text-headline-md mb-2">Royal Beef Shawarma</h3>
            <p className="text-on-surface-variant mb-4">Bold Flavor. Premium Beef. A Truly Royal Shawarma Experience.</p>
          </div>
          
          <div className="min-w-[320px] md:min-w-[450px] group">
            <div className="aspect-square bg-surface-container rounded-2xl overflow-hidden mb-stack-sm relative">
              <Image className="object-cover group-hover:scale-110 transition-transform duration-700" src="/jumbo.png" alt="Jumbo Shawarma" fill sizes="(max-width: 768px) 100vw, 33vw" />

            </div>
            <h3 className="font-headline-md text-headline-md mb-2">Jumbo Shawarma</h3>
            <p className="text-on-surface-variant mb-4">An oversized delight with extra fillings, cheese, and special sauces.</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Why Choose Us */}
      <ScrollReveal as="section" className="py-stack-xl px-margin-safe max-w-[1440px] mx-auto">
        <div className="text-center mb-stack-xl">
          <h2 className="font-headline-xl text-headline-xl mb-4"><RevealText text="The Royal Standards" /></h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-lg">Elevating the everyday meal into a curated experience of flavor and quality.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <GlassPanel className="p-10 h-full">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">workspace_premium</span>
            <h4 className="font-headline-md text-headline-md mb-4">A-Grade Sourcing</h4>
            <p className="text-on-surface-variant">We only use hormone-free chicken and premium beef cuts, delivered fresh every morning from local sustainable farms.</p>
          </GlassPanel>
          <GlassPanel className="p-10 h-full" delay={0.2}>
            <span className="material-symbols-outlined text-primary text-4xl mb-6">auto_awesome</span>
            <h4 className="font-headline-md text-headline-md mb-4">Spice Mastery</h4>
            <p className="text-on-surface-variant">Our secret 14-spice blend is toasted and ground in-house, ensuring a depth of flavor that is uniquely ours.</p>
          </GlassPanel>
          <GlassPanel className="p-10 h-full" delay={0.4}>
            <span className="material-symbols-outlined text-primary text-4xl mb-6">restaurant</span>
            <h4 className="font-headline-md text-headline-md mb-4">Culinary Craft</h4>
            <p className="text-on-surface-variant">Every wrap is assembled with precision, balancing texture and taste to provide a perfect bite every single time.</p>
          </GlassPanel>
        </div>
      </ScrollReveal>

      {/* Featured Combo */}
      <ScrollReveal as="section" className="py-stack-xl px-margin-safe">
        <div className="relative rounded-3xl md:rounded-[2rem] overflow-hidden bg-surface-container aspect-square md:aspect-auto md:min-h-[500px] flex items-center shadow-2xl max-w-5xl mx-auto">
          <div className="absolute inset-0 z-0 group">
            <Image className="object-cover transition-transform duration-1000 group-hover:scale-105" src="/royal-shawarma-combo.png" alt="Royal Shawarma Combo" fill sizes="(max-width: 1024px) 100vw, 1024px" />

          </div>

        </div>
      </ScrollReveal>



      {/* Testimonials Section */}
      <ScrollReveal as="section" className="py-stack-xl px-margin-safe bg-surface-container relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter items-center relative z-10">
          <div>
            <span className="text-primary font-label-caps text-label-caps mb-4 block"><RevealText text="VOICES" /></span>
            <h2 className="font-headline-xl text-headline-xl"><RevealText text="What Our Guests Say" /></h2>
            <div className="mt-8 flex gap-2">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <GlassPanel className="p-8">
              <p className="font-body-lg italic mb-6">"An absolute revelation. The depth of flavor in the spices is something you simply don't find elsewhere in the city. The service is as premium as the food."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <p className="font-bold">Rahul Menon</p>
                  <p className="text-label-caps text-[10px] opacity-60 tracking-widest mt-1">FOOD CRITIC</p>
                </div>
              </div>
            </GlassPanel>
            <GlassPanel className="p-8" delay={0.2}>
              <p className="font-body-lg italic mb-6">"Finally, a shawarma place that treats the dish like the art form it is. The atmosphere is gorgeous and the Truffle Beef Bowl is addictive."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <p className="font-bold">Saira George</p>
                  <p className="text-label-caps text-[10px] opacity-60 tracking-widest mt-1">LIFESTYLE BLOGGER</p>
                </div>
              </div>
            </GlassPanel>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
