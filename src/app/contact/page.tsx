"use client";

import RevealText from "@/components/ui/RevealText";
import GlassPanel from "@/components/ui/GlassPanel";
import MagneticButton from "@/components/ui/MagneticButton";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
export default function ContactPage() {
  return (
    <div className="pt-[120px] pb-stack-xl min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="px-margin-safe max-w-[1440px] mx-auto mb-stack-xl text-center relative z-10">
        <span className="text-primary font-label-caps text-label-caps mb-4 block"><RevealText text="GET IN TOUCH" /></span>
        <h1 className="font-display-lg text-display-lg md:text-[80px] mb-6"><RevealText text="Visit Us." delay={0.2} /></h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
          We look forward to hosting you for an unforgettable culinary experience. Reach out for reservations, catering inquiries, or simply to say hello.
        </p>
      </div>

      <div className="px-margin-safe max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col gap-6">
          <GlassPanel className="p-8 md:p-10" delay={0.2}>
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2 text-primary">Location</h3>
                <p className="text-on-surface-variant font-body-lg">
                  Yanbu, Saudi Arabia
                </p>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel className="p-8 md:p-10" delay={0.3}>
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2 text-primary">Opening Hours</h3>
                <p className="text-on-surface-variant text-lg mb-1">Monday - Sunday</p>
                <p className="text-primary font-bold text-xl">5:00 PM - 1:00 AM</p>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel className="p-8 md:p-10" delay={0.4}>
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">call</span>
              </div>
              <div className="w-full">
                <h3 className="font-headline-md text-headline-md mb-2 text-primary">Contact & Reservations</h3>
                <p className="text-on-surface-variant text-lg mb-6">
                  Call us directly or send a message on WhatsApp for quick responses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+966505974935" className="flex-1 bg-surface-container-lowest border border-white/10 hover:border-primary/50 text-white text-center py-3 rounded-lg font-bold transition-colors">
                    +966-505974935
                  </a>
                  <a href="https://wa.me/966505974935" target="_blank" rel="noreferrer" className="flex-1 bg-[#25D366]/20 border border-[#25D366]/50 hover:bg-[#25D366]/30 text-[#25D366] text-center py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-xl">chat</span> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </GlassPanel>

          <div className="flex gap-4 mt-4">
            <MagneticButton intensity={0.3}>
              <a href="#" className="w-14 h-14 rounded-full bg-surface-container border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all">
                <InstagramIcon />
              </a>
            </MagneticButton>
            <MagneticButton intensity={0.3}>
              <a href="#" className="w-14 h-14 rounded-full bg-surface-container border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all">
                <FacebookIcon />
              </a>
            </MagneticButton>
          </div>
        </div>

        <div className="h-[350px] lg:h-[450px] w-full rounded-2xl overflow-hidden relative border border-white/10">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sYanbu%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(100%)" }}
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 z-0"
          ></iframe>
          {/* Overlay to give it a darker tint */}
          <div className="absolute inset-0 bg-background/20 pointer-events-none z-10"></div>
        </div>
      </div>
    </div>
  );
}
