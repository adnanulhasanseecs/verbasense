"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

/**
 * Theme toggle — delegates entirely to next-themes (class on <html>).
 * Avoid manual localStorage / classList updates; they can race and cancel updates.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const isDark = (resolvedTheme ?? "light") === "dark";

  function handleToggleTheme() {
    if (!mounted) return;
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      className="relative z-[9999] pointer-events-auto inline-flex size-9 items-center justify-center rounded-2xl border border-white/25 text-navbar-foreground transition-colors hover:bg-white/10 hover:text-navbar-foreground"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-disabled={!mounted}
      onClick={handleToggleTheme}
    >
      {!mounted ? (
        <Moon className="size-4 opacity-80" />
      ) : isDark ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </button>
  );
}
