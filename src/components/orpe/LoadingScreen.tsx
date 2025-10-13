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

    // Start fade out after 4 seconds
    const fadeOutTimer = setTimeout(() => {
      setOpacity(0);
    }, 4000);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 transition-opacity duration-500"
      style={{ opacity }}>
      {/* Loading Image with Gradient Fade on Edges */}
      <div className="relative">
        {/* Radial gradient overlay for seamless edge fading */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(24, 24, 27, 0.3) 60%, rgba(24, 24, 27, 0.7) 80%, rgb(24, 24, 27) 100%)",
          }}
        />

        {/* Loading GIF */}
        <div className="relative">
          <Image
            src="/loading image.gif"
            alt="Loading..."
            width={400}
            height={400}
            priority
            unoptimized
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
