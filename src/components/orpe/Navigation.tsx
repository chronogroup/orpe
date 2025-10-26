"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ContactAddress } from "./ContactAddress";
import { smoothScrollToSection, getHeaderHeight } from "@/lib/scroll";

interface NavigationItem {
  label: string;
  sectionId: string;
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
}

export function Navigation({ items, className = "" }: NavigationProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [hoveredItems, setHoveredItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -80px 0px", // Account for header height
      }
    );

    // Observe all sections
    items.forEach((item) => {
      const element = document.getElementById(item.sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  const scrollToSection = (sectionId: string) => {
    const headerHeight = getHeaderHeight();
    smoothScrollToSection(sectionId, headerHeight);
  };

  const handleFirstHover = (sectionId: string) => {
    if (!hoveredItems.has(sectionId)) {
      setHoveredItems((prev) => new Set(prev).add(sectionId));
    }
  };

  return (
    <nav className={`flex items-center space-x-8 ${className}`}>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-6">
        <button
          onClick={() => scrollToSection("community")}
          onMouseEnter={() => handleFirstHover("community")}
          className={`nav-link focus:outline-none focus:text-orange-500 relative group cursor-pointer ${
            activeSection === "community"
              ? "text-orange-500"
              : "text-white hover:text-orange-500"
          } ${!hoveredItems.has("community") ? "first-hover" : ""}`}>
          Community
        </button>
        <button
          onClick={() => scrollToSection("orpenomics")}
          onMouseEnter={() => handleFirstHover("orpenomics")}
          className={`nav-link focus:outline-none focus:text-orange-500 relative group cursor-pointer ${
            activeSection === "orpenomics"
              ? "text-orange-500"
              : "text-white hover:text-orange-500"
          } ${!hoveredItems.has("orpenomics") ? "first-hover" : ""}`}>
          Orpenomics
        </button>
        <button
          onClick={() => scrollToSection("meme-studio")}
          onMouseEnter={() => handleFirstHover("meme-studio")}
          className={`nav-link focus:outline-none focus:text-orange-500 relative group cursor-pointer ${
            activeSection === "meme-studio"
              ? "text-orange-500"
              : "text-white hover:text-orange-500"
          } ${!hoveredItems.has("meme-studio") ? "first-hover" : ""}`}>
          Meme Studio
        </button>
        <Button variant="default" size="sm">
          Buy ORPE
        </Button>
      </div>

      {/* Tablet Navigation */}
      <div className="hidden md:flex lg:hidden items-center space-x-4">
        <ContactAddress />
        <Button variant="default" size="sm">
          Buy ORPE
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center">
        <ContactAddress />
      </div>
    </nav>
  );
}
