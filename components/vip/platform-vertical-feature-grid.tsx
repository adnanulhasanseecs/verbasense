import { FadeInSection } from "@/components/cjis/fade-in-section";
import { Heading } from "@/components/cjis/heading";
import { Section } from "@/components/cjis/section";
import type { PlatformVerticalFeatureSection } from "@/lib/platform-vertical-features";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

type PlatformVerticalFeatureGridProps = {
  content: PlatformVerticalFeatureSection;
  className?: string;
};

/**
 * 2×3 feature grid for vertical platform pages: hero/image strip, copy, three check bullets.
 */
export function PlatformVerticalFeatureGrid({
  content,
  className,
}: PlatformVerticalFeatureGridProps) {
  return (
    <Section surface="muted" className={cn("border-t border-border/80", className)}>
      <FadeInSection>
        <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand-gold">
          {content.eyebrow}
        </p>
        <Heading level={2} className="mt-3 max-w-3xl text-balance">
          {content.title}
        </Heading>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {content.subtitle}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.cards.map((card) => (
            <article
              key={card.id}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/90 shadow-gold-soft backdrop-blur-sm dark:bg-card/70"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted/40">
                <Image
                  src={card.imageSrc}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <Heading level={3} className="text-lg leading-snug">
                  {card.title}
                </Heading>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
                <ul className="mt-auto space-y-2 border-t border-border/60 pt-4">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm text-foreground/90"
                    >
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </FadeInSection>
    </Section>
  );
}
