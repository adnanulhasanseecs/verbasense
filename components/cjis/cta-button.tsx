"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type CtaButtonProps = {
  href: string;
  variant?: "primary" | "outline" | "accent";
  children: React.ReactNode;
  className?: string;
};

/**
 * Landing CTAs — primary: navy; outline: navy border; accent: gold (sparingly).
 */
export function CtaButton({
  href,
  variant = "primary",
  children,
  className,
}: CtaButtonProps) {
  const variantClass =
    variant === "outline"
      ? buttonVariants({ variant: "outline", size: "lg" })
      : variant === "accent"
        ? buttonVariants({ variant: "secondary", size: "lg" })
        : buttonVariants({ variant: "default", size: "lg" });

  return (
    <Link
      href={href}
      className={cn(
        variantClass,
        "h-11 min-h-11 rounded-2xl px-6 shadow-sm transition-shadow",
        className,
      )}
    >
      {children}
    </Link>
  );
}
