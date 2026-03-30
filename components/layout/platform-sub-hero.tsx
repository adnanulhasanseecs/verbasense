import { cn } from "@/lib/utils";

type PlatformSubHeroProps = {
  imageSrc?: string | null;
  alt?: string;
  priority?: boolean;
  className?: string;
};

export function PlatformSubHero({
  imageSrc,
  alt = "",
  priority,
  className,
}: PlatformSubHeroProps) {
  if (imageSrc) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden border-b border-border",
          className,
        )}
      >
        {/* Min/max height (no fixed short box) so wide hero art like hero-cjis.webp is not clipped at the top. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={alt}
          width={2400}
          height={1000}
          className="block w-full max-h-[min(88vh,920px)] min-h-[260px] object-cover object-top md:min-h-[380px] lg:min-h-[460px]"
          decoding="async"
          {...(priority ? { fetchPriority: "high" as const } : {})}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex h-[min(42vh,400px)] w-full items-center justify-center border-b border-border bg-gradient-to-br from-muted via-muted to-brand-navy/20",
        className,
      )}
      role="img"
      aria-label="Hero visual forthcoming"
    >
      <span className="text-sm font-medium tracking-wide text-muted-foreground">
        Visual forthcoming
      </span>
    </div>
  );
}
