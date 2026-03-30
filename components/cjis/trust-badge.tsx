import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type TrustBadgeProps = {
  children: React.ReactNode;
  className?: string;
  /** Use on navy hero gradient (light text / subtle border). */
  variant?: "default" | "onDark";
};

export function TrustBadge({
  children,
  className,
  variant = "default",
}: TrustBadgeProps) {
  if (variant === "onDark") {
    return (
      <span
        className={cn(
          "inline-flex w-fit items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm",
          className,
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full border-brand-gold/35 bg-brand-gold/10 px-3 py-1 text-xs font-medium text-brand-navy dark:border-brand-gold/40 dark:bg-brand-gold/15 dark:text-brand-gold",
        className,
      )}
    >
      {children}
    </Badge>
  );
}
