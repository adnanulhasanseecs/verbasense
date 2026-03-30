import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Level = 1 | 2 | 3;

const sizes: Record<Level, string> = {
  1: "font-heading text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl md:text-5xl dark:text-foreground",
  2: "font-heading text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl dark:text-foreground",
  3: "font-heading text-lg font-semibold text-brand-navy dark:text-foreground",
};

export function Heading({
  level,
  id,
  children,
  className,
}: {
  level: Level;
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  const Tag = `h${level}` as const;
  return (
    <Tag id={id} className={cn(sizes[level], className)}>
      {children}
    </Tag>
  );
}
