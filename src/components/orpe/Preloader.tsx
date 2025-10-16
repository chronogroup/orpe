"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

interface PreloaderProps {
  isExiting: boolean;
}

export function Preloader({ isExiting }: PreloaderProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Generate particle properties once on mount - 48 particles in a halo
  const particles = useMemo(() => {
    const particleCount = 48;
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      // Evenly distribute particles around the circle
      angle: (360 / particleCount) * i,
      // Two-ring halo: inner and outer
      radius: i % 2 === 0 ? 90 : 120,
      // Randomize flicker delay for shimmer effect
      flickerDelay: Math.random() * 3,
      // Slight jitter for organic feel
      jitter: 1 + Math.random() * 2,
    }));
  }, []);

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
      {/* Centered container for logo + halo */}
      <div className="relative grid place-items-center preloader-contain w-[300px] h-[300px]">
        {/* Orbiting particle halo - only render client-side */}
        {isMounted && (
          <div
            className="absolute inset-0 grid place-items-center"
            style={{ transformOrigin: "center center" }}
            aria-hidden="true">
            {/* Rotating halo ring */}
            <div
              className="absolute w-full h-full animate-[orbit_8s_linear_infinite]"
              style={{ transformOrigin: "center center" }}>
              {particles.map((particle) => (
                <div
                  key={particle.id}
                  className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full animate-[flicker_2s_ease-in-out_infinite]"
                  style={
                    {
                      "--angle": `${particle.angle}deg`,
                      "--r": `${particle.radius}px`,
                      "--jitter": `${particle.jitter}px`,
                      "--flicker-delay": `${particle.flickerDelay}s`,
                      transform: `translate(-50%, -50%) rotate(var(--angle)) translateX(var(--r)) translateY(var(--jitter))`,
                      background:
                        "linear-gradient(135deg, #f97316 0%, #ffc04d 100%)",
                      boxShadow: "0 0 4px rgba(249, 115, 22, 0.6)",
                      animationDelay: `var(--flicker-delay)`,
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>
          </div>
        )}

        {/* ORPE Logo - centered */}
        <div className="relative z-10 logo-glow">
          <Image
            src="/orpe logo.svg"
            alt="ORPE Logo"
            width={120}
            height={120}
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* Loading text for screen readers */}
      <span className="sr-only">
        {isExiting ? "Loading complete" : "Loading ORPE..."}
      </span>
    </div>
  );
}
