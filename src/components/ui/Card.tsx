import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-2xl p-8 text-center transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-zinc-900 border-2 border-orange-500/30",
        teal: "bg-zinc-900 border-2 border-teal-500/30",
        gray: "bg-zinc-900 border-2 border-gray-600",
        purple: "bg-zinc-900 border-2 border-purple-500/30",
        stats: "bg-orange-500/10 border border-orange-500/20",
        orpenomics:
          "bg-zinc-900 border-2 border-orange-500/30 hover:border-orange-500/60 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:-translate-y-1 hover:rotate-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card, cardVariants };
