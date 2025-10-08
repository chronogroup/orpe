import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const containerVariants = cva("max-w-7xl mx-auto px-5 sm:px-8 lg:px-20", {
  variants: {
    variant: {
      default: "",
      narrow: "max-w-4xl",
      wide: "max-w-8xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ variant, className }))}
        {...props}>
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";

export { Container, containerVariants };
