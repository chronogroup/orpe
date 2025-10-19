"use client";

import { useState, useEffect } from "react";
import { Preloader } from "./Preloader";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Wait for 2.5 seconds, then start exit animation
    const loadTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    // Remove preloader completely after exit animation (2.5s + 300ms animation)
    const removeTimer = setTimeout(() => {
      setShowPreloader(false);
    }, 2800);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {/* Preloader - display none after initial load */}
      <div style={{ display: showPreloader ? "block" : "none" }}>
        <Preloader isExiting={isExiting} />
      </div>

      {/* Main content - hidden for first 2.5 seconds */}
      <div style={{ display: showPreloader ? "none" : "block" }}>
        {children}
      </div>
    </>
  );
}
