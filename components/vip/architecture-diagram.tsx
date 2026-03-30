/**
 * High-level platform pipeline for marketing: Audio → Transcription → Intelligence → Storage.
 * Distinct from the detailed PipelineDiagram used on architecture / platform pages.
 */

const stages = [
  { id: "a", label: "Audio", sub: "Capture & ingest", x: 40 },
  { id: "b", label: "Transcription", sub: "Speech to text", x: 280 },
  { id: "c", label: "Intelligence", sub: "Summaries & extraction", x: 520 },
  { id: "d", label: "Storage", sub: "Secure index & retention", x: 760 },
] as const;

export function ArchitectureDiagram({ className }: { className?: string }) {
  return (
    <figure
      className={className}
      role="img"
      aria-label="VerbaSense pipeline from audio capture through transcription and intelligence processing into secure storage."
    >
      <svg
        viewBox="0 0 920 140"
        className="h-auto w-full max-w-5xl text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="vipPipe" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B1F3A" stopOpacity="0.28" />
            <stop offset="50%" stopColor="#C89B3C" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0B1F3A" stopOpacity="0.28" />
          </linearGradient>
        </defs>
        {stages.map((s, i) => {
          if (i === stages.length - 1) return null;
          const next = stages[i + 1];
          const y = 52;
          return (
            <line
              key={`${s.id}-${next.id}`}
              x1={s.x + 100}
              y1={y}
              x2={next.x}
              y2={y}
              stroke="url(#vipPipe)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          );
        })}
        {stages.map((s) => (
          <g key={s.id} transform={`translate(${s.x}, 20)`}>
            <rect
              width="200"
              height="72"
              rx="14"
              className="fill-card stroke-primary/30 dark:stroke-primary/45"
              strokeWidth="1.5"
            />
            <text
              x="100"
              y="36"
              textAnchor="middle"
              className="fill-foreground font-sans text-[12px] font-semibold"
            >
              {s.label}
            </text>
            <text
              x="100"
              y="54"
              textAnchor="middle"
              className="fill-muted-foreground font-sans text-[10px]"
            >
              {s.sub}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}
