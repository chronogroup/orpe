import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  "rounded-full flex items-center justify-center",
  {
    variants: {
      variant: {
        orange: "bg-orange-500 text-zinc-900",
        teal: "bg-teal-500 text-zinc-900",
        gray: "bg-gray-600 text-white",
        gradient:
          "bg-gradient-to-r from-orange-500 to-orange-400 text-zinc-900",
      },
      size: {
        sm: "w-8 h-8 text-sm",
        default: "w-16 h-16 text-2xl",
        lg: "w-20 h-20 text-3xl",
      },
    },
    defaultVariants: {
      variant: "orange",
      size: "default",
    },
  }
);

export interface IconButtonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconButtonVariants> {
  children: React.ReactNode;
}

const IconButton = React.forwardRef<HTMLDivElement, IconButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(iconButtonVariants({ variant, size, className }))}
        {...props}>
        {children}
      </div>
    );
  }
);
IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };
