"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { ContactAddress } from "./ContactAddress";
import { Button } from "@/components/ui/Button";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Container - Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Middle Container - CA (Desktop only) */}
            <div className="hidden lg:flex items-center">
              <ContactAddress />
            </div>

            {/* Right Container - Navigation Menu */}
            <div className="flex-shrink-0">
              <Navigation items={navigationItems} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
