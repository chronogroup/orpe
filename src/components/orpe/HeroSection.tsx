"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { HeroContactAddress } from "@/components/orpe/HeroContactAddress";
import { site } from "@/config/site";
import { Send, TrendingUp, ArrowRight } from "lucide-react";
import {
  useHeroReveal,
  useReducedMotion,
  useGreenTint,
  useSparkleOnce,
} from "@/lib/motion";

// Analytics type
type GtagWindow = Window &
  typeof globalThis & {
    gtag: (
      command: string,
      action: string,
      params: Record<string, string>
    ) => void;
  };

export function HeroSection() {
  const { ref, isVisible } = useHeroReveal();
  const reducedMotion = useReducedMotion();
  const showGreenTint = useGreenTint(isVisible);
  const [titleHovered, setTitleHovered] = useState(false);

  // Sparkle hooks for each social button
  const twitterSparkle = useSparkleOnce("twitter");
  const telegramSparkle = useSparkleOnce("telegram");
  const dexscreenerSparkle = useSparkleOnce("dexscreener");

  return (
    <div ref={ref} className="relative">
      {/* Background gradient drift layer */}
      {!reducedMotion && <div className="gradient-drift" />}

      <Container>
        <div className="text-center max-w-full overflow-hidden">
          {/* Hero Avatar with halo and coin specs */}
          <div className="mb-8 relative inline-block">
            <div
              className={`avatar-halo ${
                isVisible ? "hero-reveal-avatar" : ""
              }`}>
              <Image
                className="w-48 h-48 mx-auto rounded-full shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] border-4 border-orange-500 object-cover"
                src="/Hero image.png"
                alt="ORPE Hero - Orange Pepe leading the community"
                width={192}
                height={192}
                priority
              />
            </div>

            {/* Coin specs - drifting particles */}
            {!reducedMotion && (
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                viewBox="0 0 192 192"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle
                  className="coin-spec"
                  cx="38"
                  cy="140"
                  r="2"
                  fill="#f97316"
                  opacity="0.3"
                />
                <circle
                  className="coin-spec"
                  cx="77"
                  cy="140"
                  r="2"
                  fill="#f97316"
                  opacity="0.3"
                />
                <circle
                  className="coin-spec"
                  cx="115"
                  cy="140"
                  r="2"
                  fill="#f97316"
                  opacity="0.3"
                />
                <circle
                  className="coin-spec"
                  cx="154"
                  cy="140"
                  r="2"
                  fill="#f97316"
                  opacity="0.3"
                />
              </svg>
            )}
          </div>

          {/* Title - word stagger */}
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl pixel-text-orange mb-6 px-4 text-center break-words ${
              !reducedMotion ? "hero-title-hover" : ""
            }`}
            onMouseEnter={() => setTitleHovered(true)}
            onMouseLeave={() => setTitleHovered(false)}>
            <span className={isVisible ? "hero-reveal-word-1" : ""}>
              Orange
            </span>{" "}
            <span className={isVisible ? "hero-reveal-word-2" : ""}>Pepe</span>
          </h1>

          {/* Tagline with green tint effect */}
          <p
            className={`text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto ${
              isVisible ? "hero-reveal-tagline" : ""
            }`}>
            <span className="text-gray-300">Orange is the new </span>
            <span
              className={`transition-colors duration-300 ${
                showGreenTint ? "text-green-400" : "text-teal-500"
              }`}>
              green
            </span>
            <span className="text-gray-300"> 🐸</span>
          </p>

          {/* Primary CTA */}
          <div
            className={`flex justify-center mb-8 ${
              isVisible ? "hero-reveal-cta" : ""
            }`}>
            <a
              href={site.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== "undefined" && "gtag" in window) {
                  (window as GtagWindow).gtag("event", "hero_buy_click", {
                    href: site.buyUrl,
                    platform: "raydium",
                  });
                }
              }}
              className={`group relative inline-flex items-center justify-center px-12 py-6 text-xl md:text-2xl font-bold text-zinc-900 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl shadow-lg hover:shadow-orange-500/50 focus:outline-none focus:ring-4 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-zinc-900 w-auto ${
                !reducedMotion
                  ? "social-btn-glow transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  : "transition-colors duration-200"
              }`}>
              <span className="relative z-10 flex items-center">
                BUY ORPE
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  size={24}
                />
              </span>
            </a>
          </div>

          {/* Secondary Actions */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap px-4 py-2 ${
              isVisible ? "hero-reveal-secondary" : ""
            }`}>
            {/* Contract Address */}
            <div className="w-full sm:w-auto">
              <HeroContactAddress />
            </div>

            {/* Social Links with sparkle + underline sweep */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {/* Twitter */}
              <a
                href={site.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={twitterSparkle.handleMouseEnter}
                onMouseLeave={twitterSparkle.handleMouseLeave}
                onClick={() => {
                  if (typeof window !== "undefined" && "gtag" in window) {
                    (window as GtagWindow).gtag("event", "hero_social_click", {
                      href: site.socials.twitter,
                      platform: "twitter",
                    });
                  }
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm border border-orange-500/30 rounded-lg text-orange-500 hover:bg-black hover:text-white hover:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-200 ${
                  !reducedMotion ? "social-btn-sparkle" : ""
                } ${twitterSparkle.shouldSparkle ? "sparkle-active" : ""}`}
                aria-label="Open Twitter in a new tab">
                <svg
                  className="w-[18px] h-[18px]"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Twitter</span>
              </a>

              {/* Telegram */}
              <a
                href={site.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={telegramSparkle.handleMouseEnter}
                onMouseLeave={telegramSparkle.handleMouseLeave}
                onClick={() => {
                  if (typeof window !== "undefined" && "gtag" in window) {
                    (window as GtagWindow).gtag("event", "hero_social_click", {
                      href: site.socials.telegram,
                      platform: "telegram",
                    });
                  }
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm border border-orange-500/30 rounded-lg text-orange-500 hover:bg-[#0088CC] hover:text-white hover:border-[#0088CC] focus:outline-none focus:ring-2 focus:ring-[#0088CC] focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-200 ${
                  !reducedMotion ? "social-btn-sparkle" : ""
                } ${telegramSparkle.shouldSparkle ? "sparkle-active" : ""}`}
                aria-label="Open Telegram in a new tab">
                <Send size={18} />
                <span>Telegram</span>
              </a>

              {/* Dexscreener */}
              <a
                href={site.socials.dexscreener}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={dexscreenerSparkle.handleMouseEnter}
                onMouseLeave={dexscreenerSparkle.handleMouseLeave}
                onClick={() => {
                  if (typeof window !== "undefined" && "gtag" in window) {
                    (window as GtagWindow).gtag("event", "hero_social_click", {
                      href: site.socials.dexscreener,
                      platform: "dexscreener",
                    });
                  }
                }}
                className={`group/dex inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm border border-orange-500/30 rounded-lg text-orange-500 hover:bg-white hover:text-black hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-200 ${
                  !reducedMotion ? "social-btn-sparkle" : ""
                } ${dexscreenerSparkle.shouldSparkle ? "sparkle-active" : ""}`}
                aria-label="Open Dexscreener in a new tab">
                <div className="relative w-5 h-5">
                  <img
                    src="/dex-screener-logo.svg"
                    alt="Dexscreener"
                    className="w-5 h-5 transition-all duration-200 group-hover/dex:opacity-0"
                  />
                  <img
                    src="/dex-screener-logo-black.svg"
                    alt="Dexscreener"
                    className="absolute top-0 left-0 w-5 h-5 transition-all duration-200 opacity-0 group-hover/dex:opacity-100"
                  />
                </div>
                <span className="text-sm font-medium">Dexscreener</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
