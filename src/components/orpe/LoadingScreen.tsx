"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function LoadingScreen() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Fade in immediately on mount
    const fadeInTimer = setTimeout(() => {
      setOpacity(1);
    }, 50);

    // Start fade out after 2.5 seconds
    const fadeOutTimer = setTimeout(() => {
      setOpacity(0);
    }, 2500);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 transition-opacity duration-500 w-full h-full min-h-screen"
      style={{ opacity }}>
      {/* Full-screen Loading with ORPE Logo */}
      <div className="flex items-center justify-center w-full h-full bg-zinc-900">
        <Image
          src="/orpe logo.svg"
          alt="ORPE Logo"
          width={200}
          height={200}
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
