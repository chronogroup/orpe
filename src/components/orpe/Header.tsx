"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { ContactAddress } from "./ContactAddress";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Header becomes visible when hero is not intersecting (scrolled past)
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    const heroElement = document.getElementById("hero");
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  const navigationItems = [
    { label: "About", sectionId: "about" },
    { label: "Tokenomics", sectionId: "tokenomics" },
    { label: "Community", sectionId: "community" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}>
      <div className="bg-gradient-to-br from-zinc-900 via-orange-500/10 to-zinc-900 backdrop-blur-sm border-b border-orange-500/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20">
          <div className="flex items-center justify-between h-16">
            <Logo />

            {/* Contract Address */}
            <div className="hidden md:block">
              <ContactAddress />
            </div>

            <Navigation items={navigationItems} />
          </div>
        </div>
      </div>
    </header>
  );
}
