import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconButton } from "@/components/ui/IconButton";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/orpe/Header";
import { LoreCarousel } from "@/components/orpe/LoreCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Header />

      <main>
        {/* Hero Section */}
        <Section id="hero" variant="hero">
          <Container>
            <div className="text-center">
              {/* Logo */}
              <div className="mb-8">
                <Image
                  className="w-48 h-48 mx-auto rounded-full shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] border-4 border-orange-500"
                  src="/orpe-logo.png"
                  alt="ORPE Logo"
                  width={192}
                  height={192}
                />
              </div>

              {/* Title */}
              <h1 className="text-6xl lg:text-8xl font-press-start text-orange-500 mb-6">
                ORPE
              </h1>

              {/* Subtitle */}
              <h2 className="text-2xl lg:text-4xl font-press-start text-white mb-4">
                Welcome to Orpe
              </h2>

              {/* Tagline */}
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                <span className="text-gray-300">Orange is the new </span>
                <span className="text-teal-500">green</span>
                <span className="text-gray-300"> 🍊🐸</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="default" size="lg">
                  Buy Orpe
                </Button>
                <Button variant="outline" size="lg">
                  View Chart
                </Button>
                <Button variant="gradient" size="lg">
                  Join the Cult
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* ORPE Lore Carousel */}
        <Section id="lore" className="py-20 lg:py-32">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-press-start text-orange-500 mb-4">
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
              <h2 className="text-4xl font-press-start text-orange-500 mb-4">
                Tokenomics
              </h2>
              <p className="text-xl text-gray-300">Simple. Fair. Orange.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Total Supply Card */}
              <Card variant="default">
                <IconButton
                  variant="orange"
                  size="default"
                  className="mx-auto mb-6">
                  1B
                </IconButton>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Total Supply
                </h3>
                <p className="text-3xl font-bold text-orange-500 mb-2">1B</p>
                <p className="text-gray-400">ORPE Tokens</p>
              </Card>

              {/* Liquidity Card */}
              <Card variant="teal">
                <IconButton
                  variant="teal"
                  size="default"
                  className="mx-auto mb-6">
                  ✅
                </IconButton>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Liquidity
                </h3>
                <p className="text-3xl font-bold text-teal-500 mb-2">✅</p>
                <p className="text-gray-400">Locked Forever</p>
              </Card>

              {/* Team Wallet Card */}
              <Card variant="gray">
                <IconButton
                  variant="gray"
                  size="default"
                  className="mx-auto mb-6">
                  0%
                </IconButton>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Team Wallet
                </h3>
                <p className="text-3xl font-bold text-gray-400 mb-2">0%</p>
                <p className="text-gray-400">Community Owned</p>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Community Section */}
        <Section id="community">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-press-start text-orange-500 mb-4">
                Join the Community
              </h2>
              <p className="text-xl text-gray-300">
                Connect with fellow orange enthusiasts
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Community Stats */}
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-white hover:text-orange-500 transition-colors cursor-pointer">
                    <div className="w-6 h-6 bg-white rounded"></div>
                    <span className="text-lg font-bold">Follow on X</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-white hover:text-orange-500 transition-colors cursor-pointer">
                    <div className="w-6 h-6 bg-white rounded"></div>
                    <span className="text-lg font-bold">Join Telegram</span>
                  </a>
                </div>

                <Card variant="stats">
                  <h3 className="text-2xl font-bold text-orange-500 mb-6">
                    Community Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-3xl font-bold text-white">12.5K</p>
                      <p className="text-gray-400">Holders</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white">8.2K</p>
                      <p className="text-gray-400">Telegram Members</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Meme Gallery */}
              <Card variant="default">
                <h3 className="text-2xl font-bold text-white text-center mb-8">
                  Meme Gallery
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    className="w-full h-32 rounded-xl border border-orange-500/20 object-cover"
                    src="/meme-1.svg"
                    alt="Orange is the new green meme"
                    width={250}
                    height={128}
                  />
                  <Image
                    className="w-full h-32 rounded-xl border border-orange-500/20 object-cover"
                    src="/meme-2.svg"
                    alt="HODL to the moon meme"
                    width={250}
                    height={128}
                  />
                  <Image
                    className="w-full h-32 rounded-xl border border-orange-500/20 object-cover"
                    src="/meme-3.svg"
                    alt="Orange not frog meme"
                    width={250}
                    height={128}
                  />
                  <Image
                    className="w-full h-32 rounded-xl border border-orange-500/20 object-cover"
                    src="/meme-4.svg"
                    alt="Community owned meme"
                    width={250}
                    height={128}
                  />
                </div>
              </Card>
            </div>
          </Container>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-orange-500/20 py-16">
        <Container>
          <div className="text-center space-y-8">
            {/* Contract Address */}
            <div className="bg-orange-500/10 rounded-2xl border border-orange-500/20 p-8 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-white mb-4">
                Contract Address
              </h3>
              <div className="bg-zinc-900 rounded-lg p-4">
                <p className="text-orange-500 font-mono text-sm break-all">
                  0x1234567890abcdef1234567890abcdef12345678
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="space-y-4">
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                For entertainment purposes only. Do not mortgage your house to
                buy oranges.
              </p>
              <p className="text-orange-500 font-press-start">
                Powered by degeneracy.
              </p>
            </div>

            {/* Copyright */}
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-zinc-900 text-sm font-bold">O</span>
              </div>
              <span className="text-orange-500 font-press-start">
                ORPE 2024
              </span>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
