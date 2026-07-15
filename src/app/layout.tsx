import type { Metadata } from "next";
import { Playfair_Display, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://royalshawarma.com"),
  title: {
    default: "Royal Shawarma | The Gold Standard of Shawarma",
    template: "%s | Royal Shawarma"
  },
  description: "Experience the gold standard of shawarma in Saudi Arabia. Authentic Middle Eastern flavors crafted fresh every day with premium ingredients.",
  keywords: ["Shawarma", "Saudi Arabia", "Middle Eastern Food", "Authentic Shawarma", "Royal Shawarma", "Best Shawarma in Saudi Arabia"],
  authors: [{ name: "Royal Shawarma" }],
  creator: "Royal Shawarma",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://royalshawarma.com",
    title: "Royal Shawarma | The Gold Standard of Shawarma",
    description: "Authentic Middle Eastern flavors crafted fresh every day in the heart of Saudi Arabia.",
    siteName: "Royal Shawarma",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Royal Shawarma - Every Bite is Royal"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Shawarma | The Gold Standard of Shawarma",
    description: "Authentic Middle Eastern flavors crafted fresh every day in the heart of Saudi Arabia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${hanken.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body-md bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
          <Navbar />
          <main className="flex flex-col flex-1 w-full relative z-0">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
