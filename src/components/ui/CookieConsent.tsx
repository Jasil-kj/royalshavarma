"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show if the user hasn't explicitly accepted or declined yet
    const consent = localStorage.getItem("royal_shawarma_cookie_consent");
    if (!consent) {
      // Add a slight delay before showing the banner so it's not too aggressive
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem("royal_shawarma_cookie_consent", accepted ? "accepted" : "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[100] md:bottom-6 md:left-6 md:right-auto max-w-sm"
        >
          <div className="bg-surface-container-high/95 backdrop-blur-md border border-outline-variant shadow-2xl rounded-t-2xl md:rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full text-primary shrink-0 hidden sm:block">
                <span className="material-symbols-outlined">cookie</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-sm text-headline-sm mb-2 text-on-surface">We value your privacy</h3>
                <p className="text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleConsent(true)}
                    className="flex-1 bg-primary text-on-primary py-2.5 px-4 rounded-lg font-label-md hover:bg-primary/90 transition-colors"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleConsent(false)}
                    className="flex-1 border border-outline text-on-surface py-2.5 px-4 rounded-lg font-label-md hover:bg-surface-container-highest transition-colors"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
