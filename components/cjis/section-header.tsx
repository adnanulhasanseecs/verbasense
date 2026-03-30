import { Heading } from "@/components/cjis/heading";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  /** Short label above the title (Inter, uppercase). */
  eyebrow?: string;
  title: string;
  titleId: string;
  description?: ReactNode;
  className?: string;
  /** Extra classes on the H2 (e.g. max width). */
  titleClassName?: string;
};

/** Consistent section intros: optional eyebrow, Playfair title, Inter description. */
export function SectionHeader({
  eyebrow,
  title,
  titleId,
  description,
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <header className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand-gold">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        level={2}
        id={titleId}
        className={cn(eyebrow ? "mt-3" : undefined, titleClassName)}
      >
        {title}
      </Heading>
      {description ? (
        <div className="mt-3 text-base leading-relaxed text-muted-foreground">
          {description}
        </div>
      ) : null}
    </header>
  );
}
