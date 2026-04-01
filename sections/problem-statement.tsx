import { FadeInSection } from "@/components/cjis/fade-in-section";
import { Heading } from "@/components/cjis/heading";
import { Section } from "@/components/cjis/section";
import Image from "next/image";

export function ProblemStatementSection() {
  return (
    <Section id="problem" surface="muted" className="border-y border-border/70">
      <FadeInSection>
        <Heading level={2} className="relative z-10 max-w-3xl text-balance">
          Where operational risk emerges first
        </Heading>
        <div className="relative z-10 mt-8 mx-auto w-full max-w-5xl overflow-hidden rounded-2xl ring-1 ring-brand-gold/30 shadow-[0_0_0_1px_rgb(200_155_60_/0.15),0_0_32px_rgb(200_155_60_/0.18)]">
          <Image
            src="/brand/problem-statement-vip.webp"
            alt="Operational risk areas caused by missing structured capture and traceability"
            width={2200}
            height={1200}
            unoptimized
            className="aspect-[21/8] w-full object-cover object-center"
            sizes="(max-width: 1024px) 96vw, 1100px"
            priority={false}
          />
        </div>
      </FadeInSection>
    </Section>
  );
}
