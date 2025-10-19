import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";

const logoVariants = cva("flex items-center space-x-3", {
  variants: {
    size: {
      sm: "space-x-2",
      default: "space-x-3",
      lg: "space-x-4",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const iconVariants = cva("flex items-center justify-center", {
  variants: {
    size: {
      sm: "w-8 h-8",
      default: "w-10 h-10",
      lg: "w-12 h-12",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const textVariants = cva("text-orange-500 font-press-start", {
  variants: {
    size: {
      sm: "text-base",
      default: "text-lg",
      lg: "text-xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface LogoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof logoVariants> {
  size?: "sm" | "default" | "lg";
  showText?: boolean;
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, size = "default", showText = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(logoVariants({ size, className }))}
        {...props}>
        <div className={cn(iconVariants({ size }))}>
          <Image
            src="/orpe logo.svg"
            alt="ORPE Logo"
            width={size === "sm" ? 32 : size === "lg" ? 48 : 40}
            height={size === "sm" ? 32 : size === "lg" ? 48 : 40}
            className="object-contain"
            priority
          />
        </div>
        {showText && <span className={cn(textVariants({ size }))}>ORPE</span>}
      </div>
    );
  }
);
Logo.displayName = "Logo";

export { Logo, logoVariants, iconVariants, textVariants };
