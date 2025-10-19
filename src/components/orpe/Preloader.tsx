"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface PreloaderProps {
  isExiting: boolean;
}

export function Preloader({ isExiting }: PreloaderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0b0f0f] pointer-events-none ${
        isExiting ? "animate-[preloaderFadeOut_300ms_ease-out_forwards]" : ""
      }`}
      role="status"
      aria-live="polite"
      aria-busy={!isExiting}>
      {/* Full screen container for lily pad + logo */}
      <div className="relative grid place-items-center preloader-contain w-full h-full min-h-screen">
        {/* Lily pad ripple animation - only render client-side */}
        {isMounted && (
          <div
            className="absolute inset-0 grid place-items-center"
            aria-hidden="true">
            {/* Ripple rings container - behind everything */}
            <div className="absolute inset-0 ripple-container">
              {/* 4 ripple rings with staggered delays - only visible when animating */}
              <div
                className="ripple-ring ripple-ring-1"
                style={{ "--delay": "0s" } as React.CSSProperties}
              />
              <div
                className="ripple-ring ripple-ring-2"
                style={{ "--delay": "2s" } as React.CSSProperties}
              />
              <div
                className="ripple-ring ripple-ring-3"
                style={{ "--delay": "4s" } as React.CSSProperties}
              />
              <div
                className="ripple-ring ripple-ring-4"
                style={{ "--delay": "6s" } as React.CSSProperties}
              />
            </div>

            {/* Bright orange glow - prominent like in the image */}
            <svg
              className="absolute w-full h-full pointer-events-none"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg">
              {/* Intense orange radial glow */}
              <defs>
                <radialGradient id="brightOrangeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="1.0" />
                  <stop offset="30%" stopColor="#f97316" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#f97316" stopOpacity="0.6" />
                  <stop offset="85%" stopColor="#f97316" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Bright glow circle with pulse animation */}
              <circle
                cx="200"
                cy="200"
                r="94"
                fill="url(#brightOrangeGlow)"
                className="lily-glow-pulse"
              />

              {/* Green lily pad (315 degrees) - solid fill, no edges */}
              <path
                d="M 200 200 L 256.6 143.4 A 80 80 0 1 1 200 120"
                fill="#2E7D32"
                opacity="1"
                stroke="none"
                strokeWidth="0"
                vectorEffect="non-scaling-stroke"
                shapeRendering="geometricPrecision"
              />

              {/* Simple lily pad leaf veins */}
              <g opacity="0.5">
                {/* Main center vein - doesn't reach edges */}
                <line
                  x1="200"
                  y1="140"
                  x2="200"
                  y2="260"
                  stroke="#1B5E20"
                  strokeWidth="2"
                />

                {/* Primary radial veins from center */}
                <line
                  x1="200"
                  y1="200"
                  x2="170"
                  y2="170"
                  stroke="#1B5E20"
                  strokeWidth="1.5"
                />
                <line
                  x1="200"
                  y1="200"
                  x2="170"
                  y2="230"
                  stroke="#1B5E20"
                  strokeWidth="1.5"
                />
                <line
                  x1="200"
                  y1="200"
                  x2="230"
                  y2="230"
                  stroke="#1B5E20"
                  strokeWidth="1.5"
                />

                {/* Additional diagonal veins */}
                <line
                  x1="200"
                  y1="200"
                  x2="155"
                  y2="185"
                  stroke="#1B5E20"
                  strokeWidth="1"
                />
                <line
                  x1="200"
                  y1="200"
                  x2="155"
                  y2="215"
                  stroke="#1B5E20"
                  strokeWidth="1"
                />
                <line
                  x1="200"
                  y1="200"
                  x2="245"
                  y2="215"
                  stroke="#1B5E20"
                  strokeWidth="1"
                />

                {/* Horizontal veins */}
                <line
                  x1="200"
                  y1="200"
                  x2="185"
                  y2="155"
                  stroke="#1B5E20"
                  strokeWidth="1"
                />
                <line
                  x1="200"
                  y1="200"
                  x2="185"
                  y2="245"
                  stroke="#1B5E20"
                  strokeWidth="1"
                />
                <line
                  x1="200"
                  y1="200"
                  x2="215"
                  y2="245"
                  stroke="#1B5E20"
                  strokeWidth="1"
                />
              </g>

              {/* Removed inner accent ring to avoid edge border artifacts */}
            </svg>

            {/* Centered ORPE logo inside lily pad */}
            <div className="absolute inset-0 grid place-items-center z-20 select-none pointer-events-none">
              <Image
                src="/orpe%20logo.svg"
                alt="ORPE Logo"
                width={96}
                height={96}
                className="w-[80px] h-[80px] md:w-[96px] md:h-[96px]"
                priority
              />
            </div>
          </div>
        )}
      </div>

      {/* Loading text for screen readers */}
      <span className="sr-only">
        {isExiting ? "Loading complete" : "Loading ORPE..."}
      </span>
    </div>
  );
}
