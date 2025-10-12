"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { LorePanel } from "./LorePanel";
import { loreStories } from "@/config/site";

export function LoreCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInViewport, setIsInViewport] = useState(true);

  const panelWidth = 600; // Desktop width
  const gap = 32; // Gap between panels
  const totalWidth = (panelWidth + gap) * loreStories.length;
  const scrollSpeed = 0.5; // pixels per frame (60fps = 30px/second)

  // Intersection Observer to pause when not in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    if (isPaused || isDragging || !isInViewport) return;

    const animate = () => {
      setScrollPosition((prev) => {
        const newPosition = prev + scrollSpeed;
        // Reset when we've scrolled through one complete set
        return newPosition >= totalWidth ? 0 : newPosition;
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, isDragging, isInViewport, scrollSpeed, totalWidth]);

  // Handle drag start
  const handleDragStart = useCallback((clientX: number) => {
    setIsDragging(true);
    setDragStart(clientX);
    setDragOffset(0);
    setIsPaused(true);
  }, []);

  // Handle drag move
  const handleDragMove = useCallback(
    (clientX: number) => {
      if (!isDragging) return;

      const deltaX = clientX - dragStart;
      setDragOffset(deltaX);
    },
    [isDragging, dragStart]
  );

  // Handle drag end
  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;

    setIsDragging(false);
    setScrollPosition((prev) => {
      const newPosition = prev + dragOffset;
      // Keep position within bounds
      return Math.max(0, Math.min(newPosition, totalWidth));
    });
    setDragOffset(0);
    setIsPaused(false);
  }, [isDragging, dragOffset, totalWidth]);

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    handleDragEnd();
  };

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeaveCarousel = () => {
    if (!isDragging) {
      setIsPaused(false);
    }
  };

  // Create duplicated panels for infinite effect
  const createPanels = (offset: number) => {
    return loreStories.map((story, index) => (
      <LorePanel
        key={`${offset}-${index}`}
        title={story.title}
        lore={story.lore}
        imageSrc={story.image}
        imageAlt={story.alt}
        index={index}
      />
    ));
  };

  const currentTransform = scrollPosition + dragOffset;

  return (
    <div
      ref={containerRef}
      className="lore-carousel-container relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeaveCarousel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      <div
        className="flex"
        style={{
          transform: `translate3d(-${currentTransform}px, 0, 0)`,
          width: `${totalWidth * 2}px`, // Double width for seamless loop
        }}>
        {/* First set of panels */}
        {createPanels(0)}

        {/* Second set of panels for infinite effect */}
        {createPanels(loreStories.length)}
      </div>
    </div>
  );
}
