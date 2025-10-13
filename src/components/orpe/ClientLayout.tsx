"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "./LoadingScreen";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className={isLoading ? "hidden" : "block"}>{children}</div>
    </>
  );
}
