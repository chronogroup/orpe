"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { ContactAddress } from "./ContactAddress";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Header becomes sticky immediately when scrolling starts
      setIsScrolled(window.scrollY > 0);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationItems = [
    { label: "Tokenomics", sectionId: "tokenomics" },
    { label: "Community", sectionId: "community" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-250 ease-in-out ${
          isScrolled
            ? "bg-gradient-to-br from-zinc-900 via-orange-500/10 to-zinc-900 backdrop-blur-sm border-b border-orange-500/20 shadow-lg"
            : "bg-transparent"
        }`}>
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
