import Link from "next/link";
import Image from "next/image";

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

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest bg-[url('/brand-pattern.svg')] bg-[length:400px_400px] border-t border-black/10 py-stack-xl relative z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-safe max-w-[1440px] mx-auto relative z-10">
        <div className="md:col-span-2 pr-8">
          <Link href="/#hero" className="relative block h-16 w-40 md:h-24 md:w-56 mb-6">
            <Image src="/logo.jpeg" alt="Royal Shawarma Logo" fill className="rounded-lg object-contain mix-blend-multiply" />
          </Link>
          <p className="text-on-surface-variant max-w-sm font-body-lg text-lg leading-relaxed">
            Crafting the finest Middle Eastern culinary experiences in Saudi Arabia. Quality is our only ingredient.
          </p>
          <div className="flex gap-6 mt-8">
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-300 flex items-center gap-2" href="https://www.instagram.com/royalshawarmahub.ksa?igsh=MWZ4OWd6cGxmdmxzcQ==" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-300 flex items-center gap-2" href="#">
              <FacebookIcon />
            </a>
          </div>
        </div>
        
        <div>
          <h5 className="font-label-caps text-label-caps text-primary mb-6 tracking-widest">LOCATION</h5>
          <p className="text-on-surface-variant mb-2">Yanbu, Saudi Arabia</p>
          
          <h5 className="font-label-caps text-label-caps text-primary mt-8 mb-4 tracking-widest">HOURS</h5>
          <p className="text-on-surface-variant mb-1">Mon - Sun</p>
          <p className="text-primary font-bold">5:00 PM - 1:00 AM</p>
        </div>
        
        <div>
          <h5 className="font-label-caps text-label-caps text-primary mb-6 tracking-widest">CONTACT</h5>
          <Link className="text-on-surface-variant hover:text-primary transition-colors block mb-4" href="/contact">Get in Touch</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors block mb-4" href="/menu">View Menu</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors block mb-4" href="/about">Our Story</Link>
          
          <div className="mt-8">
            <p className="text-on-surface-variant font-label-caps text-label-caps opacity-50 mb-1">RESERVATIONS</p>
            <p className="text-primary text-xl font-bold tracking-wider">+966-505974935</p>
          </div>
        </div>
      </div>
      
      <div className="px-margin-safe max-w-[1440px] mx-auto mt-stack-xl pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-caps text-[10px] opacity-40 tracking-widest uppercase">
          © {new Date().getFullYear()} Royal Shawarma. Crafted in Saudi Arabia.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="font-label-caps text-[10px] opacity-40 hover:opacity-100 hover:text-primary transition-all tracking-widest">PRIVACY POLICY</Link>
          <Link href="#" className="font-label-caps text-[10px] opacity-40 hover:opacity-100 hover:text-primary transition-all tracking-widest">TERMS OF SERVICE</Link>
        </div>
      </div>
    </footer>
  );
}
