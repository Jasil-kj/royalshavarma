"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-xl shadow-sm py-4 border-b border-black/5"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-safe max-w-[1440px] mx-auto">
        <Link href="/#hero" onClick={() => setMobileMenuOpen(false)} className="z-50 flex items-center relative h-12 w-32 md:h-16 md:w-40">
          <Image src="/logo.jpeg" alt="Royal Shawarma Logo" fill className="rounded-md object-contain mix-blend-multiply" />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`font-label-caps text-label-caps transition-colors duration-300 ${
                pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path))
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-background/70 hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        


        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
          <span className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-lg transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        <div className="flex flex-col items-center gap-6 px-margin-safe">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`font-label-caps text-lg transition-colors duration-300 ${
                pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path))
                  ? "text-primary font-bold"
                  : "text-on-background/70"
              }`}
            >
              {link.name}
            </Link>
          ))}

        </div>
      </div>
    </nav>
  );
}
