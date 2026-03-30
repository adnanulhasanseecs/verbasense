import { Heading } from "@/components/cjis/heading";
import type { PlatformEngineFeature } from "@/lib/constants";
import { cn } from "@/lib/utils";

type PlatformFeatureGridProps = {
  features: readonly PlatformEngineFeature[];
  className?: string;
};

/** Six-tile overview of the core VerbaSense engine (homepage / platform). */
export function PlatformFeatureGrid({
  features,
  className,
}: PlatformFeatureGridProps) {
  return (
    <ul
      className={cn(
        "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {features.map((f) => (
        <li
          key={f.id}
          className="shadow-gold-soft rounded-2xl border border-border/80 bg-card/80 p-6 backdrop-blur-sm"
        >
          <Heading level={3} className="text-base font-semibold">
            {f.title}
          </Heading>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {f.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
