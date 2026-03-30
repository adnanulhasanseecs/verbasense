import {
  ArrowRight,
  AudioLines,
  Bot,
  Database,
  FileText,
  Mic,
  UserRoundCheck,
} from "lucide-react";

const nodes = [
  {
    id: "ingest",
    title: "Audio / video input",
    subtitle: "Ingest channels",
    icon: AudioLines,
  },
  {
    id: "asr",
    title: "Speech recognition",
    subtitle: "Transcription engine",
    icon: Mic,
  },
  {
    id: "diarization",
    title: "Speaker identification",
    subtitle: "Participant attribution",
    icon: UserRoundCheck,
  },
  {
    id: "nlp",
    title: "NLP processing",
    subtitle: "Understanding pipeline",
    icon: Bot,
  },
  {
    id: "output",
    title: "Structured output",
    subtitle: "Searchable records",
    icon: FileText,
  },
  {
    id: "storage",
    title: "Secure storage",
    subtitle: "Retention-aware archive",
    icon: Database,
  },
] as const;

export function PipelineDiagram({ className }: { className?: string }) {
  return (
    <figure
      className={className}
      role="img"
      aria-label="VerbaSense modular pipeline from audio and video input through speech recognition, speaker identification, and NLP into structured output and secure storage."
    >
      <div className="rounded-2xl border border-border/80 bg-card/60 p-3 md:p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            const isLast = idx === nodes.length - 1;
            return (
              <div
                key={node.id}
                className="flex items-center gap-2 lg:basis-[160px] lg:flex-none"
              >
                <div className="flex w-full items-center gap-2 rounded-xl border border-primary/25 bg-muted/35 px-2 py-2">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="size-3.5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold leading-tight text-foreground md:text-xs">
                      {node.title}
                    </p>
                    <p className="text-[10.5px] leading-tight text-muted-foreground md:text-xs">
                      {node.subtitle}
                    </p>
                  </div>
                </div>
                {!isLast ? (
                  <ArrowRight
                    className="size-3 shrink-0 text-primary/70 lg:size-4"
                    aria-hidden
                  />
                ) : null}
              </div>
            );
          })}
        </div>
        <figcaption className="mt-3 text-center text-xs text-muted-foreground">
          Optional participant verification can branch from capture under institutional
          policy.
        </figcaption>
      </div>
    </figure>
  );
}
