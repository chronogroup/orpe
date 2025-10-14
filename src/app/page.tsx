"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/orpe/Header";
import { LoreCarousel } from "@/components/orpe/LoreCarousel";
import { TokenomicsCard } from "@/components/orpe/TokenomicsCard";
import { CommunityStats } from "@/components/orpe/CommunityStats";
import { MemeGallery } from "@/components/orpe/MemeGallery";
import { SocialButtons } from "@/components/orpe/SocialButtons";
import { Footer } from "@/components/orpe/Footer";
import { HeroContactAddress } from "@/components/orpe/HeroContactAddress";
import { site } from "@/config/site";
import { Twitter, Send, TrendingUp, ArrowRight } from "lucide-react";

// Analytics type
type GtagWindow = Window &
  typeof globalThis & {
    gtag: (
      command: string,
      action: string,
      params: Record<string, string>
    ) => void;
  };

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Header />

      <main>
        {/* Hero Section */}
        <Section id="hero" variant="hero">
          <Container>
            <div className="text-center max-w-full overflow-hidden">
              {/* Hero Image */}
              <div className="mb-8">
                <Image
                  className="w-48 h-48 mx-auto rounded-full shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] border-4 border-orange-500 object-cover"
                  src="/Hero image.png"
                  alt="ORPE Hero - Orange Pepe leading the community"
                  width={192}
                  height={192}
                />
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl pixel-text-orange mb-6 px-4 text-center break-words">
                Orange Pepe
              </h1>

              {/* Tagline */}
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                <span className="text-gray-300">Orange is the new </span>
                <span className="text-teal-500">green</span>
                <span className="text-gray-300"> 🐸</span>
              </p>

              {/* Primary CTA */}
              <div className="flex justify-center mb-8">
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
                  className="hero-buy-btn group relative inline-flex items-center justify-center px-12 py-6 text-xl md:text-2xl font-bold text-zinc-900 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl shadow-lg hover:shadow-orange-500/50 focus:outline-none focus:ring-4 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-200 w-full sm:w-auto max-w-md">
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
              <div className="hero-secondary-actions flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
                {/* Contract Address */}
                <div className="w-full sm:w-auto">
                  <HeroContactAddress />
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 flex-wrap justify-center">
                  <a
                    href={site.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (typeof window !== "undefined" && "gtag" in window) {
                        (window as GtagWindow).gtag(
                          "event",
                          "hero_social_click",
                          {
                            href: site.socials.twitter,
                            platform: "twitter",
                          }
                        );
                      }
                    }}
                    className="hero-social-btn inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm border border-orange-500/30 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-zinc-900 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-200"
                    aria-label="Open Twitter in a new tab">
                    <Twitter size={18} />
                    <span className="text-sm font-medium">Twitter</span>
                  </a>

                  <a
                    href={site.socials.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (typeof window !== "undefined" && "gtag" in window) {
                        (window as GtagWindow).gtag(
                          "event",
                          "hero_social_click",
                          {
                            href: site.socials.telegram,
                            platform: "telegram",
                          }
                        );
                      }
                    }}
                    className="hero-social-btn inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm border border-orange-500/30 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-zinc-900 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-200"
                    aria-label="Open Telegram in a new tab">
                    <Send size={18} />
                    <span className="text-sm font-medium">Telegram</span>
                  </a>

                  <a
                    href={site.socials.dexscreener}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (typeof window !== "undefined" && "gtag" in window) {
                        (window as GtagWindow).gtag(
                          "event",
                          "hero_social_click",
                          {
                            href: site.socials.dexscreener,
                            platform: "dexscreener",
                          }
                        );
                      }
                    }}
                    className="hero-social-btn inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm border border-orange-500/30 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-zinc-900 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-200"
                    aria-label="Open Dexscreener in a new tab">
                    <TrendingUp size={18} />
                    <span className="text-sm font-medium">Dexscreener</span>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* ORPE Lore Carousel */}
        <Section id="lore" className="py-20 lg:py-32">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-5xl font-pixel-large text-orange-500 mb-4">
                The Lore of ORPE
              </h2>
              <p className="text-xl text-gray-300">Discover the origin story</p>
            </div>
            <LoreCarousel />
          </Container>
        </Section>

        {/* Tokenomics Section */}
        <Section id="tokenomics" variant="gradient">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-2xl lg:text-5xl font-pixel-large text-orange-500 mb-4">
                Tokenomics
              </h2>
              <p className="text-xl text-gray-300">Simple. Fair. Orange.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Total Supply Card */}
              <TokenomicsCard
                title="Total Supply"
                value={1000000000}
                description="ORPE Tokens"
                icon="1B"
                variant="default"
                verificationLink="#solscan"
                verificationLabel="View on Solscan"
              />

              {/* Liquidity Card */}
              <TokenomicsCard
                title="Liquidity"
                value={100}
                description="Locked Forever"
                icon="✅"
                variant="teal"
                verificationLink="#unicrypt"
                verificationLabel="Verify Lock"
              />

              {/* Team Wallet Card */}
              <TokenomicsCard
                title="Team Wallet"
                value={0}
                description="Community Owned"
                icon="0%"
                variant="gray"
                verificationLink="#wallet"
                verificationLabel="Check Wallet"
              />

              {/* Governance Card */}
              <TokenomicsCard
                title="Governance"
                value={100}
                description="100% Holder-Led, No Dev Control"
                icon="🗳️"
                variant="purple"
                verificationLink="#governance"
                verificationLabel="View Governance"
              />
            </div>
          </Container>
        </Section>

        {/* Community Section */}
        <Section id="community">
          <div className="relative">
            {/* Radial Gradient Background */}
            <div className="absolute inset-0 community-radial-bg pointer-events-none" />

            <Container>
              <div className="text-center mb-16">
                <h2 className="text-2xl lg:text-5xl font-pixel-large text-orange-500 mb-4">
                  Join the Community
                </h2>
                <p className="text-xl text-gray-300">
                  Connect with fellow orange enthusiasts
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Social Buttons & Stats */}
                <div className="space-y-8">
                  <SocialButtons />
                  <CommunityStats holders={12500} telegramMembers={8200} />
                </div>

                {/* Right Column - Meme Gallery */}
                <MemeGallery />
              </div>
            </Container>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
