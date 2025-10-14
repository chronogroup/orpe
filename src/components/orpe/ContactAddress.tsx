"use client";

import { useState, useEffect } from "react";
import { Copy } from "lucide-react";
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
    <div className="bg-zinc-900/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-orange-500/20">
      <button
        onClick={handleCopy}
        onKeyDown={handleKeyDown}
        className={`inline-flex items-center space-x-2 text-orange-500 text-xs font-mono transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded cursor-pointer hover:opacity-80 ${
          !hasAnimated ? "animate-pulse" : ""
        }`}
        aria-label={`Copy contract address: ${site.contract}`}
        aria-live="polite">
        {copied ? (
          <span className="text-green-400 text-xs">Copied!</span>
        ) : (
          <>
            <span className="text-xs">
              CA: {site.contract.slice(0, 6)}...{site.contract.slice(-4)}
            </span>
            <Copy
              size={12}
              className="transition-colors duration-200 hover:text-orange-400"
              aria-label="Copy contract address"
            />
          </>
        )}
      </button>
    </div>
  );
}
