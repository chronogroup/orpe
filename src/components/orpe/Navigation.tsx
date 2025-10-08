"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
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
      {items.map((item) => (
        <button
          key={item.sectionId}
          onClick={() => scrollToSection(item.sectionId)}
          onMouseEnter={() => handleFirstHover(item.sectionId)}
          className={`nav-link focus:outline-none focus:text-orange-500 relative group cursor-pointer ${
            activeSection === item.sectionId
              ? "text-orange-500"
              : "text-white hover:text-orange-500"
          } ${!hoveredItems.has(item.sectionId) ? "first-hover" : ""}`}>
          {item.label}
        </button>
      ))}
      <Button variant="default" size="sm">
        Buy ORPE
      </Button>
    </nav>
  );
}
