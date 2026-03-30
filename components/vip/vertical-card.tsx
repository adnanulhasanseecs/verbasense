"use client";

import { Heading } from "@/components/cjis/heading";
import { buttonVariants } from "@/components/ui/button";
import { verticalCardHeroImage } from "@/lib/brand-assets";
import { cn } from "@/lib/utils";
import Link from "next/link";

export type VerticalId = keyof typeof verticalCardHeroImage;

type VerticalCardProps = {
  title: string;
  description: string;
  href: string;
  verticalId: VerticalId;
  className?: string;
};

/** Enterprise vertical teaser: hero art crop, copy, and Learn more CTA. */
export function VerticalCard({
  title,
  description,
  href,
  verticalId,
  className,
}: VerticalCardProps) {
  const src = verticalCardHeroImage[verticalId];
  return (
    <article
      className={cn(
        "shadow-gold-soft flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:brightness-[1.01] dark:hover:brightness-[1.03] md:p-8",
        className,
      )}
    >
      <div className="mb-4 overflow-hidden rounded-xl border border-border/50 bg-muted/30 ring-1 ring-border/40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          width={640}
          height={360}
          loading="lazy"
          decoding="async"
          className="aspect-[21/9] h-auto w-full object-cover object-top"
        />
      </div>
      <Heading level={3} className="text-lg md:text-xl">
        {title}
      </Heading>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <Link
        href={href}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "mt-6 inline-flex w-full justify-center rounded-2xl sm:w-auto",
        )}
      >
        Learn more
      </Link>
    </article>
  );
}
