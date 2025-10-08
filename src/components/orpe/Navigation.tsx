"use client";

import React from "react";
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
  const scrollToSection = (sectionId: string) => {
    const headerHeight = getHeaderHeight();
    smoothScrollToSection(sectionId, headerHeight);
  };

  return (
    <nav className={`flex items-center space-x-8 ${className}`}>
      {items.map((item) => (
        <button
          key={item.sectionId}
          onClick={() => scrollToSection(item.sectionId)}
          className="nav-link text-white hover:text-orange-500 transition-all duration-300 focus:outline-none focus:text-orange-500 relative group">
          {item.label}
        </button>
      ))}
      <Button variant="default" size="sm">
        Buy ORPE
      </Button>
    </nav>
  );
}
