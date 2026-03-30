"use client";

import { cn } from "@/lib/utils";
import { fadeInView } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function FadeInSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={cn(className)}
      initial={fadeInView.initial}
      whileInView={fadeInView.whileInView}
      viewport={fadeInView.viewport}
      transition={fadeInView.transition}
    >
      {children}
    </motion.div>
  );
}
