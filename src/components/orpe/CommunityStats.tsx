"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

interface CommunityStatsProps {
  holders: number;
  telegramMembers: number;
  className?: string;
}

export function CommunityStats({
  holders,
  telegramMembers,
  className,
}: CommunityStatsProps) {
  const { count: holdersCount, elementRef: holdersRef } = useCountUp(holders, {
    duration: 2000,
    startOnView: true,
  });

  const { count: telegramCount, elementRef: telegramRef } = useCountUp(
    telegramMembers,
    {
      duration: 2000,
      startOnView: true,
    }
  );

  const formatCount = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  return (
    <div ref={holdersRef} className={cn("fade-in-up", className)}>
      <Card variant="stats" className="h-full">
        <h3 className="text-2xl font-bold text-orange-500 mb-6">
          Community Stats
        </h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-3xl font-bold text-white">
              {formatCount(holdersCount)}
            </p>
            <p className="text-gray-400">Holders</p>
          </div>
          <div ref={telegramRef}>
            <p className="text-3xl font-bold text-white">
              {formatCount(telegramCount)}
            </p>
            <p className="text-gray-400">Telegram Members</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
