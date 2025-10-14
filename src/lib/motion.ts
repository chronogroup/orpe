"use client";

import { useState, useEffect, useRef } from "react";

// Motion constants
export const MOTION = {
  // Durations (ms)
  HOVER_DURATION: 200,
  ENTER_DURATION: 500,
  STAGGER_DELAY: 100,
  COPY_FLASH_DURATION: 700,
  ERROR_DURATION: 1200,

  // Easing
  SPRING_EASING: "cubic-bezier(0.22, 1, 0.36, 1)",

  // Animation timings
  HALO_GLOW_DURATION: 3500,
  HALO_SWAY_DURATION: 6000,
  COIN_DRIFT_DURATION: 12000,
  GRADIENT_DRIFT_DURATION: 14000,
  UNDERLINE_SWEEP_DURATION: 250,
  SPARKLE_SWEEP_DURATION: 250,
} as const;

/**
 * Hook to detect if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
    // Legacy browsers
    else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook to orchestrate hero entrance reveal with IntersectionObserver
 * Runs once when element enters viewport
 */
export function useHeroReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasRevealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRevealed) {
          setIsVisible(true);
          setHasRevealed(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasRevealed]);

  return { ref, isVisible, hasRevealed };
}

/**
 * Hook for one-time sparkle effect on social buttons
 * Tracks which buttons have been hovered per session
 */
export function useSparkleOnce(id: string) {
  const [hasSparkled, setHasSparkled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check sessionStorage to persist across component remounts
    const key = `sparkle-${id}`;
    const stored = sessionStorage.getItem(key);
    if (stored === "true") {
      setHasSparkled(true);
    }
  }, [id]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!hasSparkled) {
      setHasSparkled(true);
      sessionStorage.setItem(`sparkle-${id}`, "true");
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return {
    hasSparkled,
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    shouldSparkle: isHovered && !hasSparkled,
  };
}

/**
 * Hook for one-time tagline "green" tint effect
 */
export function useGreenTint(isVisible: boolean) {
  const [showTint, setShowTint] = useState(false);
  const [hasTinted, setHasTinted] = useState(false);

  useEffect(() => {
    if (isVisible && !hasTinted) {
      // Delay to match tagline reveal
      const timer = setTimeout(() => {
        setShowTint(true);
        setHasTinted(true);
        // Remove tint after 300ms
        setTimeout(() => setShowTint(false), 300);
      }, MOTION.ENTER_DURATION + MOTION.STAGGER_DELAY * 2);

      return () => clearTimeout(timer);
    }
  }, [isVisible, hasTinted]);

  return showTint;
}
