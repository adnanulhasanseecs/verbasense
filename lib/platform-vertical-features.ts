/**
 * Rich feature cards (2×3 grid) for /platforms/judicial, enterprise, government.
 */

export type PlatformVerticalCard = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly points: readonly [string, string, string];
};

export type PlatformVerticalFeatureSection = {
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly cards: readonly PlatformVerticalCard[];
};

export const judicialPlatformFeatures: PlatformVerticalFeatureSection = {
  eyebrow: "Capabilities",
  title: "Built for courts and justice institutions",
  subtitle:
    "Purpose-built workflows for accurate records, evidentiary discipline, and operational security—aligned to how hearings, filings, and chambers actually run.",
  cards: [
    {
      id: "record",
      title: "Proceeding capture & reporting",
      description:
        "Real-time and batch capture tuned for formal speech, docket references, and jurisdictional terminology. Transcripts stay time-aligned for citation, appeal, and public access where policy allows.",
      imageSrc: "/brand/hero-cjis.webp",
      points: [
        "Time-aligned transcription",
        "Speaker attribution",
        "Court-ready formatting",
      ],
    },
    {
      id: "hearing",
      title: "Hearing & session management",
      description:
        "Support multi-party hearings, remote participants, and long-running calendars without fragmenting the record. Session metadata links people, matters, and exhibits to the spoken line.",
      imageSrc: "/brand/features/audio-transcription-vip.webp",
      points: [
        "Multi-party sessions",
        "Matter-linked metadata",
        "Continuous long-form record",
      ],
    },
    {
      id: "evidence",
      title: "Evidence & case documentation",
      description:
        "Keep briefs, orders, and exhibits coherent with the spoken record so clerks and counsel can move between transcript and filing without reconciling versions by hand.",
      imageSrc: "/brand/features/documents.webp",
      points: [
        "Linked exhibits & orders",
        "Version-aware review",
        "Audit-friendly trails",
      ],
    },
    {
      id: "media",
      title: "Audio & video processing",
      description:
        "Normalize challenging acoustics and synchronized playback so reviewers hear what the bench heard—without exporting media to consumer tools outside your boundary.",
      imageSrc: "/brand/audio-transcription-vip.webp",
      points: [
        "Noise-aware capture",
        "Synchronized playback",
        "Controlled retention",
      ],
    },
    {
      id: "quality",
      title: "Quality assurance",
      description:
        "Layer automated checks with human review where your rules require it—so published records meet clerical, appellate, and administrative standards before release.",
      imageSrc: "/brand/ai-summarization-vip.webp",
      points: [
        "Configurable QA tiers",
        "Reviewer workflows",
        "Release certification",
      ],
    },
    {
      id: "compliance",
      title: "Retention & compliance posture",
      description:
        "Map retention, classification, and access to institutional policy and counsel guidance—so sensitive proceedings stay within the systems and jurisdictions you designate.",
      imageSrc: "/brand/face-rec-vip.webp",
      points: [
        "Policy-driven retention",
        "Role-based access",
        "Institutional jurisdiction",
      ],
    },
  ],
};

export const enterprisePlatformFeatures: PlatformVerticalFeatureSection = {
  eyebrow: "Capabilities",
  title: "Built for boards and regulated enterprises",
  subtitle:
    "Governance-grade capture and extraction for leadership conversations—without routing sensitive deliberation through unmanaged SaaS or ad hoc note-taking tools.",
  cards: [
    {
      id: "board",
      title: "Board & committee sessions",
      description:
        "Formal deliberations with speaker attribution, aligned to minutes workflows, confidentiality expectations, and legal review when resolutions carry regulatory weight.",
      imageSrc: "/brand/enterpriseSense-vip.webp",
      points: [
        "Minutes-oriented capture",
        "Confidentiality-aware handling",
        "Resolution-ready excerpts",
      ],
    },
    {
      id: "executive",
      title: "Executive briefings & leadership forums",
      description:
        "Structured narratives and retrieval across strategy sessions, risk reviews, and leadership offsites—so follow-ups are traceable to what was actually said.",
      imageSrc: "/brand/ai-summarization-vip.webp",
      points: [
        "Executive-ready summaries",
        "Cross-session retrieval",
        "Action surfacing",
      ],
    },
    {
      id: "actions",
      title: "Resolutions, owners & deadlines",
      description:
        "Extract directives, owners, and dates from discussion and linked packets so governance teams close the loop without re-keying from transcripts into task systems.",
      imageSrc: "/brand/action-items-extraction-vip.webp",
      points: [
        "Structured action lines",
        "Owner & deadline cues",
        "Systems-friendly handoff",
      ],
    },
    {
      id: "documents",
      title: "Document & board packs",
      description:
        "Link spoken record to pre-read materials, filings, and attachments so search and review stay coherent when boards operate under tight filing cycles.",
      imageSrc: "/brand/doc-intelligenece-vip.webp",
      points: [
        "Packet-aligned references",
        "Linked analysis",
        "Coherent search",
      ],
    },
    {
      id: "identity",
      title: "Identity & enterprise integration",
      description:
        "Meet in your identity fabric and connect to document stores, calendars, and records systems under the integration patterns your security team approves.",
      imageSrc: "/brand/speaker-recognition-vip.webp",
      points: [
        "Enterprise identity",
        "Approved connectors",
        "Least-privilege access",
      ],
    },
    {
      id: "audit",
      title: "Audit archive & defensibility",
      description:
        "Maintain a searchable archive that ties narrative to underlying segments for internal audit, litigation hold, and regulatory inquiry—without ad hoc exports.",
      imageSrc: "/brand/enterpriseSense-vip.webp",
      points: [
        "Defensible linkage",
        "Hold-aware retention",
        "Oversight-ready exports",
      ],
    },
  ],
};

export const governmentPlatformFeatures: PlatformVerticalFeatureSection = {
  eyebrow: "Capabilities",
  title: "Built for agencies and legislatures",
  subtitle:
    "Public-sector workflows for policy hearings, committee work, and compliance-oriented records—deployed where data sovereignty and oversight expectations apply.",
  cards: [
    {
      id: "policy",
      title: "Policy & legislative proceedings",
      description:
        "Structured capture for hearings, consultations, and legislative sessions with terminology and retention aligned to classification and records policy.",
      imageSrc: "/brand/govSense-vip.webp",
      points: [
        "Classification-aware capture",
        "Legislative terminology",
        "Policy continuity",
      ],
    },
    {
      id: "committee",
      title: "Committees & task forces",
      description:
        "Track direction, voting context, and follow-ups across standing and ad hoc bodies—so oversight and internal audit see a coherent chain of decision.",
      imageSrc: "/brand/speaker-recognition-vip.webp",
      points: [
        "Committee attribution",
        "Follow-up tracking",
        "Oversight-ready views",
      ],
    },
    {
      id: "records",
      title: "Records, FOIA & disclosure",
      description:
        "Position conversational records alongside disclosure workflows with counsel and records officers—redaction and release remain under your procedures, not the vendor’s defaults.",
      imageSrc: "/brand/doc-intelligenece-vip.webp",
      points: [
        "Records alignment",
        "Disclosure coordination",
        "Counsel-guided release",
      ],
    },
    {
      id: "sovereign",
      title: "Sovereign & accredited hosting",
      description:
        "Deploy in accredited data centers, sovereign regions, or air-gapped footprints where national policy requires workloads and keys to remain in-country.",
      imageSrc: "/brand/govSense-vip.webp",
      points: [
        "Region-aware deployment",
        "Accredited patterns",
        "Air-gap options",
      ],
    },
    {
      id: "interagency",
      title: "Interagency coordination",
      description:
        "Share structured outputs across departments under shared identity and classification rules—without copying sensitive audio to unmanaged channels.",
      imageSrc: "/brand/action-items-extraction-vip.webp",
      points: [
        "Controlled sharing",
        "Aligned classification",
        "No shadow copies",
      ],
    },
    {
      id: "privacy",
      title: "Privacy & cross-border rules",
      description:
        "Support multi-jurisdiction programs with privacy and data-location constraints negotiated with your legal and security teams—not one-size-fits-all cloud defaults.",
      imageSrc: "/brand/ai-summarization-vip.webp",
      points: [
        "Jurisdiction-aware design",
        "Privacy-by-policy",
        "Cross-border discipline",
      ],
    },
  ],
};
