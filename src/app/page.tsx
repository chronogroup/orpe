"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/orpe/Header";
import { HeroSection } from "@/components/orpe/HeroSection";
import { LoreCarousel } from "@/components/orpe/LoreCarousel";
import { OrpenomicsCard } from "@/components/orpe/TokenomicsCard";
import { CommunityStats } from "@/components/orpe/CommunityStats";
import { SocialButtons } from "@/components/orpe/SocialButtons";
import { MemeStudio } from "@/components/orpe/MemeStudio";
import { Footer } from "@/components/orpe/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Header />

      <main>
        {/* Hero Section */}
        <Section id="hero" variant="hero">
          <HeroSection />
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

        {/* Orpenomics Section */}
        <Section id="orpenomics" variant="gradient">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-2xl lg:text-5xl font-pixel-large text-orange-500 mb-4">
                Orpenomics
              </h2>
              <p className="text-xl text-gray-300">Simple. Fair. Orange.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Total Supply Card */}
              <OrpenomicsCard
                title="Total Supply"
                value={1000000000}
                description="ORPE Tokens"
                icon="1B"
                variant="default"
                verificationLink="#solscan"
                verificationLabel="View on Solscan"
              />

              {/* Liquidity Card */}
              <OrpenomicsCard
                title="Liquidity"
                value={100}
                description="Locked Forever"
                icon="✅"
                variant="teal"
                verificationLink="#unicrypt"
                verificationLabel="Verify Lock"
              />

              {/* Team Wallet Card */}
              <OrpenomicsCard
                title="Team Wallet"
                value={0}
                description="Community Owned"
                icon="0%"
                variant="gray"
                verificationLink="#wallet"
                verificationLabel="Check Wallet"
              />

              {/* Governance Card */}
              <OrpenomicsCard
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

              <div className="max-w-3xl mx-auto space-y-8">
                <SocialButtons />
                <CommunityStats holders={12500} telegramMembers={8200} />
              </div>
            </Container>
          </div>
        </Section>

        {/* Meme Studio Section */}
        <Section id="meme-studio">
          <MemeStudio />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
