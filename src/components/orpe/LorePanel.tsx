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
  return (
    <div
      className={cn(
        "lore-panel flex-shrink-0 bg-zinc-900 rounded-2xl border border-orange-500/20 overflow-hidden",
        "w-[90vw] sm:w-[70vw] lg:w-[600px]",
        "mx-2 sm:mx-3 lg:mx-4",
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
          <h3 className="text-xl lg:text-2xl font-press-start text-orange-500 mb-4">
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
