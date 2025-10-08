"use client";

import { useState, useEffect } from "react";
import { site } from "@/config/site";

export function ContactAddress() {
  const [copied, setCopied] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Subtle pulse animation on first mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(site.contract);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCopy();
    }
  };

  return (
    <div className="bg-zinc-900 rounded-lg px-3 py-2">
      <button
        onClick={handleCopy}
        onKeyDown={handleKeyDown}
        className={`text-orange-500 text-sm font-mono transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded ${
          !hasAnimated ? "animate-pulse" : ""
        }`}
        aria-label={`Copy contract address: ${site.contract}`}
        aria-live="polite">
        {copied ? (
          <span className="text-green-400">Copied!</span>
        ) : (
          <span>
            CA: {site.contract.slice(0, 6)}...{site.contract.slice(-4)}
          </span>
        )}
      </button>
    </div>
  );
}
