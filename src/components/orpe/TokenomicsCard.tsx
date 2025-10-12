"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { IconButton } from "@/components/ui/IconButton";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

interface TokenomicsCardProps {
  title: string;
  value: number;
  description: string;
  icon: string;
  variant: "default" | "teal" | "gray" | "purple";
  verificationLink?: string;
  verificationLabel?: string;
  className?: string;
}

export function TokenomicsCard({
  title,
  value,
  description,
  icon,
  variant,
  verificationLink = "#",
  verificationLabel = "Verify",
  className,
}: TokenomicsCardProps) {
  const { count, elementRef } = useCountUp(value, {
    duration: 2000,
    startOnView: true,
  });

  const formatValue = (num: number) => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(0)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(0)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toString();
  };

  const getVariantColor = (variant: string) => {
    switch (variant) {
      case "teal":
        return "text-teal-500";
      case "gray":
        return "text-gray-400";
      case "purple":
        return "text-purple-500";
      default:
        return "text-orange-500";
    }
  };

  return (
    <div
      ref={elementRef}
      className={cn("fade-in-up card-hover-tilt h-full", className)}>
      <Card
        variant="tokenomics"
        className="h-full flex flex-col justify-between">
        <div className="flex flex-col items-center text-center">
          <IconButton
            variant={variant === "purple" ? "gray" : variant}
            size="default"
            className="mx-auto mb-6">
            {icon}
          </IconButton>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p
            className={cn("text-3xl font-bold mb-2", getVariantColor(variant))}>
            {formatValue(count)}
          </p>
          <p className="text-gray-400 mb-4">{description}</p>
        </div>

        <div className="mt-auto">
          {verificationLink && (
            <a
              href={verificationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 bg-zinc-800 border border-gray-600 rounded-lg hover:bg-zinc-700 hover:text-white hover:border-gray-500 transition-all duration-200 hover:scale-105">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              {verificationLabel}
            </a>
          )}
        </div>
      </Card>
    </div>
  );
}
