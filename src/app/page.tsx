import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/orpe/Header";
import { LoreCarousel } from "@/components/orpe/LoreCarousel";
import { TokenomicsCard } from "@/components/orpe/TokenomicsCard";
import { CommunityStats } from "@/components/orpe/CommunityStats";
import { MemeGallery } from "@/components/orpe/MemeGallery";
import { SocialButtons } from "@/components/orpe/SocialButtons";
import { Footer } from "@/components/orpe/Footer";

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
                verificationLink="#etherscan"
                verificationLabel="View on Etherscan"
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
