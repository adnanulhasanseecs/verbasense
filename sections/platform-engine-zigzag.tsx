"use client";

import { FadeInSection } from "@/components/cjis/fade-in-section";
import { Heading } from "@/components/cjis/heading";
import { SectionHeader } from "@/components/cjis/section-header";
import { Section } from "@/components/cjis/section";
import { vipHomeZigzagFeatures } from "@/lib/constants";
import Image from "next/image";

export function PlatformEngineZigzagSection() {
  return (
    <Section id="workflow" surface="muted" className="pb-10 md:pb-14">
      <FadeInSection>
        <SectionHeader
          eyebrow="Workflow"
          title="How intelligence moves from capture to decisions"
          titleId="vip-zigzag-heading"
          description="End-to-end workflow from multi-modal inputs to governed outputs your teams can review, search, and act on."
          className="max-w-3xl"
        />
      </FadeInSection>
      <div className="mt-14 flex flex-col gap-16 md:gap-24">
        {vipHomeZigzagFeatures.map((f, i) => {
          const textBlock = (
            <div className="flex max-w-2xl flex-col justify-center">
              <Heading
                level={3}
                id={`vip-feature-${f.id}`}
                className="text-xl sm:text-2xl"
              >
                {f.title}
              </Heading>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                {f.description.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          );

          const imageBlock = (
            <div className="flex w-full justify-center">
              {f.image ? (
                <div className="w-[80%] max-w-[min(100%,448px)] rounded-2xl bg-muted/50 p-2 shadow-gold-image ring-1 ring-brand-gold/15 sm:p-3">
                  <Image
                    src={f.image}
                    alt={`Illustration: ${f.title}`}
                    width={1600}
                    height={1200}
                    unoptimized
                    loading="lazy"
                    className="block h-auto w-full rounded-lg object-contain"
                    sizes="(max-width: 1024px) 80vw, 400px"
                    quality={95}
                  />
                </div>
              ) : (
                <div className="w-[80%] max-w-[min(100%,448px)] rounded-2xl bg-muted/50 p-2 shadow-gold-image ring-1 ring-brand-gold/15 sm:p-3">
                  <div className="flex min-h-[180px] items-center justify-center rounded-lg bg-gradient-to-br from-muted to-brand-navy/10">
                    <span className="px-4 text-center text-sm font-medium text-muted-foreground">
                      Feature visual forthcoming
                    </span>
                  </div>
                </div>
              )}
            </div>
          );

          return (
            <FadeInSection key={f.id}>
              <article className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
                {i % 2 === 0 ? (
                  <>
                    <div className="lg:order-1">{textBlock}</div>
                    <div className="lg:order-2">{imageBlock}</div>
                  </>
                ) : (
                  <>
                    <div className="lg:order-2">{textBlock}</div>
                    <div className="lg:order-1">{imageBlock}</div>
                  </>
                )}
              </article>
            </FadeInSection>
          );
        })}
      </div>
    </Section>
  );
}
