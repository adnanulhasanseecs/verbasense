import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionSurface = "default" | "muted" | "elevated";

const surfaceClass: Record<SectionSurface, string> = {
  default: "",
  muted:
    "isolate bg-muted before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(rgb(15_23_42_/0.06)_1px,transparent_1px)] before:bg-[length:22px_22px] before:opacity-60 dark:before:bg-[radial-gradient(rgb(255_255_255_/0.06)_1px,transparent_1px)] dark:before:opacity-40",
  elevated:
    "border-y border-border bg-card shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.65)] dark:shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.04)]",
};

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  /** Alternating landing rhythm: page bg → muted gray → white card band. */
  surface?: SectionSurface;
};

/** Consistent vertical rhythm and max-width for landing sections. */
export function Section({
  id,
  children,
  className,
  containerClassName,
  surface = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28",
        surfaceClass[surface],
        className,
      )}
    >
      <div
        className={cn(
          "relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
