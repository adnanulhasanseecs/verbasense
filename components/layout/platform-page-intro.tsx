import { Heading } from "@/components/cjis/heading";
import { Section } from "@/components/cjis/section";
import type { ReactNode } from "react";

type PlatformPageIntroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
};

/** Title band after optional sub-hero image on /platforms/* pages. */
export function PlatformPageIntro({
  eyebrow,
  title,
  intro,
  children = null,
}: PlatformPageIntroProps) {
  return (
    <>
      <Section className="border-b border-border pb-12 pt-12" surface="elevated">
        <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand-gold">
          {eyebrow}
        </p>
        <Heading level={1} className="mt-3">
          {title}
        </Heading>
        <p className="mt-4 max-w-3xl text-muted-foreground">{intro}</p>
      </Section>
      {children}
    </>
  );
}
