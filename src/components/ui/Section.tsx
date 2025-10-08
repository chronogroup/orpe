import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("py-20 lg:py-32", {
  variants: {
    variant: {
      default: "bg-zinc-900",
      gradient: "bg-gradient-to-b from-zinc-900 to-orange-500/5",
      hero: "relative bg-gradient-to-br from-zinc-900 via-orange-500/10 to-zinc-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  children: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ variant, className }))}
        {...props}>
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section, sectionVariants };
