"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { site } from "@/config/site";

// Analytics type
type GtagWindow = Window &
  typeof globalThis & {
    gtag: (
      command: string,
      action: string,
      params: Record<string, string>
    ) => void;
  };

export function HeroContactAddress() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const [flash, setFlash] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(site.contract);
      setCopied(true);
      setFlash(true);
      setError(false);

      setTimeout(() => {
        setCopied(false);
        setFlash(false);
      }, 900);

      // Analytics event
      if (typeof window !== "undefined" && "gtag" in window) {
        (window as GtagWindow).gtag("event", "hero_copy_contract", {
          contract_address: site.contract,
        });
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
      setError(true);
      setCopied(false);
      setFlash(false);
      setTimeout(() => setError(false), 1200);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCopy();
    }
  };

  // Middle truncate function
  const middleTruncate = (address: string, left = 8, right = 6): string => {
    if (address.length <= left + right) return address;
    return `${address.slice(0, left)}...${address.slice(-right)}`;
  };

  return (
    <button
      onClick={handleCopy}
      onKeyDown={handleKeyDown}
      className="hero-contact-btn contract-address-highlight inline-flex items-center px-4 py-2 bg-zinc-900/80 backdrop-blur-sm border border-orange-500/30 rounded-lg text-orange-500 text-sm font-mono hover:bg-zinc-900 hover:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-200 cursor-pointer"
      aria-label={`Copy contract address: ${site.contract}`}
      aria-live="polite">
      {error ? (
        <>
          <span className="text-red-400 font-medium text-xs sm:text-sm">
            Copy failed
          </span>
        </>
      ) : copied ? (
        <>
          <Check size={14} className="mr-2 text-green-400" />
          <span
            className={`text-green-400 font-medium ${
              flash ? "copy-flash" : ""
            }`}>
            Copied!
          </span>
        </>
      ) : (
        <>
          <span className="text-xs sm:text-sm">
            CA: {middleTruncate(site.contract)}
          </span>
          <Copy
            size={14}
            className="ml-2 transition-colors duration-200"
            aria-hidden="true"
          />
        </>
      )}
    </button>
  );
}
