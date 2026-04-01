import { FadeInSection } from "@/components/cjis/fade-in-section";
import { Heading } from "@/components/cjis/heading";
import { Section } from "@/components/cjis/section";
import { PlatformFeatureGrid } from "@/components/vip/platform-feature-grid";
import { HardwareSection } from "@/sections/hardware";
import {
  architecturePipelineClosing,
  architecturePipelineIntro,
  platformEngineFeatures,
  verticalSolutions,
} from "@/lib/constants";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Platform",
  description:
    "VerbaSense Intelligence Platform: modular speech recognition, summarization, action extraction, document intelligence, and secure storage for enterprise and government.",
};

const modules = [
  {
    title: "Speech & diarization services",
    body:
      "Real-time and batch transcription with speaker attribution, tuned for formal speech, multilingual settings, and institution-specific vocabulary where configured.",
  },
  {
    title: "Intelligence & extraction layer",
    body:
      "Summaries, structured action extraction, and retrieval-oriented metadata aligned to vertical templates—for example, docket-oriented outputs in judicial deployments.",
  },
  {
    title: "Document intelligence",
    body:
      "Linked analysis of briefings, exhibits, and filings so spoken record and written record stay coherent in search and review workflows.",
  },
  {
    title: "Search & navigation",
    body:
      "Contextual search across time-aligned transcripts, extracted entities, and authorized document sets under role-based policy.",
  },
  {
    title: "Security, audit, and integration",
    body:
      "Tamper-evident activity logging, enterprise identity integration, and deployment patterns that keep sensitive workloads on-premise or in approved private cloud.",
  },
] as const;

export default function PlatformPage() {
  return (
    <>
      <Section className="border-b border-border pb-12 pt-12" surface="elevated">
        <Heading level={1}>Platform</Heading>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          VerbaSense VIP is a modular intelligence platform: the same core services
          support judicial programs (CourtSense), EnterpriseSense, and
          GovSense—with configuration and policy tailored to each environment.
        </p>
      </Section>
      <Section>
        <FadeInSection>
          <Heading level={2}>Core engine</Heading>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Shared capabilities delivered as services you can phase in by site,
            workload, and data classification.
          </p>
          <PlatformFeatureGrid
            features={platformEngineFeatures}
            className="mt-10"
          />
        </FadeInSection>
      </Section>
      <Section surface="muted">
        <FadeInSection>
          <Heading level={2}>Solutions on this platform</Heading>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Choose the page that matches your operating context and governance
            requirements.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {verticalSolutions.map((solution) => (
              <article
                key={solution.id}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <Heading level={3} className="text-lg">
                  {solution.title}
                </Heading>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {solution.description}
                </p>
                <Link
                  href={solution.href}
                  className="mt-5 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  View {solution.title}
                </Link>
              </article>
            ))}
          </div>
        </FadeInSection>
      </Section>
      <Section surface="muted">
        <FadeInSection>
          <Heading level={2}>Modular architecture</Heading>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Components are designed to be replaced or upgraded independently—speech
            models, extraction templates, and storage connectors—without forcing a
            full platform migration.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {modules.map((m) => (
              <article
                key={m.title}
                className="shadow-gold-soft rounded-2xl border border-border bg-card p-6"
              >
                <Heading level={3} className="text-lg">
                  {m.title}
                </Heading>
                <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
              </article>
            ))}
          </div>
        </FadeInSection>
      </Section>
      <Section>
        <FadeInSection>
          <Heading level={2}>Processing pipeline</Heading>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {architecturePipelineIntro}
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border bg-muted/40 p-3">
              <Image
                src="/brand/audio-flow-vip.webp"
                alt="Audio and speech flow diagram"
                width={1600}
                height={900}
                unoptimized
                className="h-auto w-full rounded-xl object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-muted/40 p-3">
              <Image
                src="/brand/doc-intel-flow-vip.webp"
                alt="Document intelligence flow diagram"
                width={1600}
                height={900}
                unoptimized
                className="h-auto w-full rounded-xl object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
            {architecturePipelineClosing}
          </p>
        </FadeInSection>
      </Section>
      <HardwareSection />
      <Section id="deployment-options" surface="elevated">
        <FadeInSection>
          <Heading level={2}>Deployment options</Heading>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Select the model that matches your security posture, IT operations,
            and performance expectations.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <Heading level={3} className="text-lg">
                On-premise / private cloud boundary
              </Heading>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Data stays within your controlled network and policy boundary.</li>
                <li>Suitable for courts and regulated environments with strict custody controls.</li>
                <li>Direct integration with enterprise identity, SIEM, and audit systems.</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Recommended hardware profiles: NVIDIA L40S for balanced throughput,
                A100 for larger multi-session loads, and H100 for highest-scale,
                latency-sensitive deployments.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <Heading level={3} className="text-lg">
                Workload identity cloud option
              </Heading>
              <p className="mt-3 text-sm text-muted-foreground">
                Advanced Security (Cloud Deployments): supports identity-based
                access mechanisms such as workload identity and managed service
                authentication, eliminating static credentials.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Lower credential leakage risk for non-technical teams.</li>
                <li>Service-to-service access is short-lived and policy-enforced.</li>
                <li>Clear audit trace of which workload accessed which resource.</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Cloud GPU guidance: L40S for cost-efficient workloads, A100 for
                production-scale concurrency, and H100 for premium low-latency or
                heavy model inference requirements.
              </p>
            </article>
          </div>
        </FadeInSection>
      </Section>
      <Section surface="muted">
        <FadeInSection>
          <Heading level={2}>Security-first design</Heading>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Architecture and operations assume regulated data: encryption in transit
            and at rest, least-privilege access, configurable retention, and audit
            trails suitable for judicial and public-sector oversight. Exact control
            implementations are aligned during technical discovery with your security
            and legal teams.
          </p>
        </FadeInSection>
      </Section>
    </>
  );
}
