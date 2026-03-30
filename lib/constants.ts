/** Site copy, navigation, and structured content for VerbaSense Intelligence Platform (VIP). */

/** Logo + nav wordmark (short product name). */
export const brandWordmark = "VerbaSense" as const;

export const siteConfig = {
  name: "VerbaSense Intelligence Platform",
  shortName: "VIP",
  tagline:
    "Enterprise intelligence for judicial proceedings (CourtSense), EnterpriseSense, and GovSense—structured, searchable, and auditable.",
  description:
    "VerbaSense VIP transforms critical conversations into structured intelligence with judicial-grade accuracy, on-premise or hybrid deployment, and modular AI services trusted by courts, agencies, and boards.",
} as const;

/** CourtSense product name (judicial vertical). */
export const courtsenseProductName =
  "CourtSense Judicial Intelligence System (CJIS)" as const;

export const heroTitle =
  "Intelligence for High-Stakes Conversations" as const;

export const heroSupportingLine =
  "Transform meetings, proceedings, and documents into structured, searchable, and actionable intelligence." as const;

/** Homepage band below hero artwork—must not duplicate headline/subcopy shown in the hero image. */
export const homeHeroBandHeadline =
  "A unified intelligence platform for institutions where decisions must be accurate, auditable, and operationally defensible." as const;

export const problemStatement =
  "High-stakes institutions still rely on fragmented notes, delayed summaries, and disconnected records. VerbaSense replaces that gap with one governed system of capture, understanding, and retrieval." as const;

/** Legacy block quote / long-form value prop (About, optional reuse). */
export const coreValueProposition =
  "VerbaSense augments high-stakes environments with advanced speech and document intelligence—transforming conversations into structured, searchable records without displacing established governance or workflows.";

export type NavItem = { readonly href: string; readonly label: string };

export const navItems: readonly NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type PlatformEngineFeature = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
};

/** Core engine capabilities (homepage + platform page). */
export const platformEngineFeatures: readonly PlatformEngineFeature[] = [
  {
    id: "asr",
    title: "Accurate, speaker-aware transcripts",
    description:
      "Produce reliable transcripts for formal proceedings and meetings, with speaker attribution suitable for review, citation, and record continuity.",
  },
  {
    id: "diarization",
    title: "Clear accountability by participant",
    description:
      "Track who said what across sessions so minutes, summaries, and decisions retain context and ownership.",
  },
  {
    id: "summarization",
    title: "Faster review with structured summaries",
    description:
      "Convert long sessions into concise, institution-ready summaries aligned to courtroom, board, or committee standards.",
  },
  {
    id: "actions",
    title: "Automatically identify decisions, risks, and action items",
    description:
      "Surface directives, owners, deadlines, and risk signals directly from the record to reduce manual follow-up effort.",
  },
  {
    id: "documents",
    title: "Connected document and meeting intelligence",
    description:
      "Link filings, briefs, and attachments to spoken context so teams move from discussion to evidence without context loss.",
  },
  {
    id: "storage",
    title: "Governed retention and controlled access",
    description:
      "Keep records within your security boundary with policy-based retention, searchable archives, and controlled access.",
  },
] as const;

export type VerticalSolution = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
};

export const verticalSolutions: readonly VerticalSolution[] = [
  {
    id: "judicial",
    title: "CourtSense",
    description:
      "Court proceedings, evidence-aligned documentation, and secure records for courts and tribunals.",
    href: "/platforms/judicial",
  },
  {
    id: "enterprise",
    title: "EnterpriseSense",
    description:
      "Board and executive sessions with action tracking, decision logging, and defensible archives.",
    href: "/platforms/enterprise",
  },
  {
    id: "government",
    title: "GovSense",
    description:
      "Policy discussions, committee work, and compliance-oriented records for agencies and legislatures.",
    href: "/platforms/government",
  },
] as const;

export type VipZigzagFeature = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  /** null = visual placeholder until asset is added */
  readonly image: string | null;
};

/** Homepage zigzag feature row (VIP engine); WebP art under /public/brand/. */
export const vipHomeZigzagFeatures: readonly VipZigzagFeature[] = [
  {
    id: "asr",
    title: "Speech recognition",
    description:
      "High-accuracy transcription for formal speech, institutional vocabulary, and multilingual environments where the record must hold up to review.\n\nModels are tuned for courtroom diction, boardroom procedure, and agency terminology—with time-aligned output so every line can be cited, searched, and reconciled with exhibits or filings.",
    image: "/brand/features/audio-transcription-vip.webp",
  },
  {
    id: "diarization",
    title: "Speaker identification",
    description:
      "Attribution of speech to participants for minutes, accountability, and precise retrieval across long sessions.\n\nSpeaker turns are labeled consistently across overlapping dialogue and handoffs, so downstream summaries, action items, and audit trails reflect who said what—without manual speaker tagging.",
    image: "/brand/speaker-recognition-vip.webp",
  },
  {
    id: "summarization",
    title: "Summarization",
    description:
      "Concise narratives aligned to institutional style—whether docket notes, board minutes, or committee summaries.\n\nOutputs can follow vertical templates and review conventions, giving clerks, governance teams, and records officers a defensible synopsis without replacing the underlying transcript.",
    image: "/brand/ai-summarization-vip.webp",
  },
  {
    id: "actions",
    title: "Action extraction",
    description:
      "Structured surfacing of directives, owners, and deadlines from discussion and linked documents.\n\nExtracted items can feed task systems, compliance trackers, and follow-up workflows—reducing re-keying while preserving traceability to the spoken or written source.",
    image: "/brand/action-items-extraction-vip.webp",
  },
  {
    id: "documents",
    title: "Document intelligence",
    description:
      "Linked analysis of briefings, filings, and packets so spoken and written record stay coherent in search.\n\nBriefs, exhibits, and attachments are indexed alongside the conversational record, so reviewers can move from transcript to document context in a single investigative path.",
    image: "/brand/doc-intelligenece-vip.webp",
  },
  {
    id: "storage",
    title: "Secure storage",
    description:
      "Retention-aware indexing within your security boundary—on-premise, private cloud, or approved hybrid patterns.\n\nPolicies for classification, hold, and disposition stay under your administrative control, with access paths that map to institutional roles rather than consumer-cloud defaults.",
    image: "/brand/face-rec-vip.webp",
  },
] as const;

export type WhyPoint = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
};

export const whyVerbaSensePoints: readonly WhyPoint[] = [
  {
    id: "accuracy",
    title: "Judicial-grade accuracy",
    description:
      "Models and workflows informed by courtroom and administrative rigor—designed for settings where the record carries legal and institutional weight.",
  },
  {
    id: "security",
    title: "On-premise and hybrid security",
    description:
      "Deploy within your data center, private cloud, or approved hybrid topology so sensitive audio, text, and documents remain under your control.",
  },
  {
    id: "reliability",
    title: "High-stakes reliability",
    description:
      "Modular services, observable operations, and enterprise integration patterns suited to uninterrupted proceedings and scheduled governance events.",
  },
] as const;

export type UspItem = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
};

export const uspItems: readonly UspItem[] = [
  {
    id: "platform",
    title: "Single intelligence platform",
    description:
      "One engine for transcription, understanding, extraction, and retrieval across verticals and deployment models.",
  },
  {
    id: "governance",
    title: "Governance-aligned design",
    description:
      "Role-based access, audit trails, and retention considerations aligned to public-sector and enterprise policy.",
  },
  {
    id: "modular",
    title: "Modular expansion",
    description:
      "Enable capabilities by vertical and site without replacing the full stack—phased adoption and model upgrades on your timeline.",
  },
] as const;

export type FeatureItem = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
};

/** Deep feature list for CourtSense / judicial solution page. */
export const judicialFeatureItems: readonly FeatureItem[] = [
  {
    id: "transcription",
    title: "Intelligent Transcription & ASR",
    description:
      "Accurate, speaker-wise transcription of courtroom proceedings with timestamped records, enabling precise documentation and easy retrieval of statements.",
    image: "/brand/features/transcription.webp",
  },
  {
    id: "summarization",
    title: "Automated Proceeding Summaries",
    description:
      "Concise narratives of hearings and filings—context, holdings, and key points—for quick review without reading full transcripts.",
    image: "/brand/features/summarization.webp",
  },
  {
    id: "documents",
    title: "Document Understanding",
    description:
      "AI-assisted analysis and summarization of case documents, enabling rapid comprehension of lengthy filings and supporting materials.",
    image: "/brand/features/documents.webp",
  },
  {
    id: "search",
    title: "Advanced Search & Case Navigation",
    description:
      "Search across transcripts, documents, and proceedings using contextual queries, significantly reducing time spent locating relevant information.",
    image: "/brand/features/search.webp",
  },
  {
    id: "verification",
    title: "Participant Verification (Optional)",
    description:
      "Facial recognition–based identity verification to ensure secure participation and accurate attendance tracking.",
    image: "/brand/features/verification.webp",
  },
  {
    id: "action-extraction",
    title: "Action Item Extraction",
    description:
      "Structured extraction of tasks and directives—hearing dates, submissions, compliance steps, and judicial instructions—from transcripts and case material.",
    image: "/brand/Action-items-extraction.png",
  },
] as const;

export const architecturePipelineIntro =
  "VerbaSense is built on a modular AI pipeline designed for reliability, auditability, and phased enhancement:";

export const architecturePipelineClosing =
  "Each component operates independently yet coherently in the pipeline, allowing upgrades and new vertical capabilities without a full platform replacement.";

export const useCases = [
  {
    id: "supreme-high",
    title: "Supreme & High Courts",
    description:
      "Enable accurate documentation of complex proceedings and improve accessibility of historical case records.",
  },
  {
    id: "remote-hybrid",
    title: "Remote & Hybrid Hearings",
    description:
      "Ensure consistent documentation and monitoring across distributed locations.",
  },
  {
    id: "administration",
    title: "Judicial Administration",
    description:
      "Support clerical staff with automated record generation and reduce manual workload.",
  },
] as const;

export const securityIntro =
  "VerbaSense provides security and deployment controls for institutions where data custody, traceability, and compliance are mandatory:";

export const securityClosing =
  "Security controls map to judicial, government, and regulated enterprise expectations for confidentiality, integrity, and accountability.";

export const securityPoints = [
  {
    title: "On-premise, private cloud, or hybrid",
    description:
      "Core workloads and data remain within customer-controlled environments; hybrid options connect only where policy allows.",
  },
  {
    title: "End-to-end encryption",
    description:
      "AES-256 encryption at rest and TLS-secured communication in transit.",
  },
  {
    title: "Role-based access control",
    description: "Least-privilege access aligned to institutional roles and duties.",
  },
  {
    title: "Tamper-resistant audit logs",
    description: "Traceable system activity suitable for oversight and compliance reviews.",
  },
  {
    title: "Administrative boundary",
    description:
      "Sensitive audio, transcripts, and documents remain within your defined security and data-classification boundary.",
  },
] as const;

export const whoItsFor = [
  "Judicial systems and courts",
  "Government institutions and ministries",
  "Enterprise leadership and governance teams",
] as const;
