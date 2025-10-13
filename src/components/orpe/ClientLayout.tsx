"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "./LoadingScreen";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 4.5 seconds (4s display + 0.5s fade out)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div
        className={`transition-all duration-1000 ease-out ${
          isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}>
        {children}
      </div>
    </>
  );
}
