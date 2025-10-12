import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LorePanelProps {
  title: string;
  lore: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
  className?: string;
}

export function LorePanel({
  title,
  lore,
  imageSrc,
  imageAlt,
  index,
  className,
}: LorePanelProps) {
  // Progressive color transformation based on panel index
  const panelColors = [
    {
      border: "border-green-500/40",
      bg: "bg-gradient-to-br from-zinc-900 via-green-900/10 to-zinc-900",
    },
    {
      border: "border-green-500/50",
      bg: "bg-gradient-to-br from-green-900/10 via-orange-500/5 to-zinc-900",
    },
    {
      border: "border-orange-500/60",
      bg: "bg-gradient-to-br from-green-900/5 via-orange-500/10 to-zinc-900",
    },
    {
      border: "border-orange-500/70",
      bg: "bg-gradient-to-br from-zinc-900 via-orange-500/15 to-zinc-900",
    },
    {
      border: "border-orange-400/80",
      bg: "bg-gradient-to-br from-zinc-900 via-orange-400/20 to-zinc-900",
    },
    {
      border: "border-orange-500",
      bg: "bg-gradient-to-br from-orange-900/10 via-orange-500/20 to-zinc-900",
    },
  ] as const;

  // Title colors based on panel index
  const titleColors = [
    "text-green-400", // Green for apathy
    "text-green-400", // Green for ripple
    "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-400", // Gradient for birth
    "text-orange-400", // Orange for new green
    "text-orange-300", // Orange for coin rain
    "text-orange-300", // Orange for join
  ] as const;

  const currentColors = panelColors[index] || panelColors[0];
  const titleColor = titleColors[index] || titleColors[0];

  return (
    <div
      className={cn(
        "lore-panel flex-shrink-0 rounded-2xl border overflow-hidden relative",
        "w-[90vw] sm:w-[70vw] lg:w-[600px]",
        "mx-2 sm:mx-3 lg:mx-4",
        currentColors.bg,
        currentColors.border,
        className
      )}>
      <div className="flex flex-col lg:flex-row h-full">
        {/* Image */}
        <div className="relative w-full lg:w-1/2 h-48 lg:h-auto">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority={index < 3}
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 70vw, 600px"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
          <h3
            className={`text-xl lg:text-2xl font-press-start mb-4 ${titleColor}`}>
            {title}
          </h3>
          <p className="text-sm lg:text-base font-space-grotesk text-gray-300 leading-relaxed">
            {lore}
          </p>
        </div>
      </div>
    </div>
  );
}
