import { FadeInSection } from "@/components/cjis/fade-in-section";
import { Heading } from "@/components/cjis/heading";
import { SectionHeader } from "@/components/cjis/section-header";
import { Section } from "@/components/cjis/section";
import { vipHomeZigzagFeatures } from "@/lib/constants";
import Image from "next/image";

export function PlatformEngineZigzagSection() {
  return (
    <Section id="engine-features" surface="muted">
      <FadeInSection>
        <SectionHeader
          eyebrow="Capabilities"
          title="Engine in depth"
          titleId="vip-zigzag-heading"
          description="How VerbaSense processes critical conversations end to end—from capture through structured outputs."
          className="max-w-3xl"
        />
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
                <div className="w-[80%] max-w-[min(100%,448px)] rounded-2xl bg-muted/50 p-2 shadow-gold-image ring-1 ring-brand-gold/15 sm:p-3">
                  {f.image ? (
                    <Image
                      src={f.image}
                      alt={`Illustration: ${f.title}`}
                      width={1600}
                      height={1200}
                      unoptimized
                      className="block h-auto w-full rounded-lg object-contain"
                      sizes="(max-width: 1024px) 80vw, 400px"
                      quality={95}
                    />
                  ) : (
                    <div className="flex min-h-[180px] items-center justify-center rounded-lg bg-gradient-to-br from-muted to-brand-navy/10">
                      <span className="px-4 text-center text-sm font-medium text-muted-foreground">
                        Feature visual forthcoming
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );

            return (
              <article
                key={f.id}
                className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14"
              >
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
            );
          })}
        </div>
      </FadeInSection>
    </Section>
  );
}
