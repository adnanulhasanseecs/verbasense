"use client";

import { BrandLogo } from "@/components/cjis/brand-logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { brandWordmark, navItems, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const platformSubItems = [
    { href: "/platforms/judicial", label: "CourtSense" },
    { href: "/platforms/enterprise", label: "EnterpriseSense" },
    { href: "/platforms/government", label: "GovSense" },
  ] as const;

  const platformActive =
    pathname === "/platform" || pathname.startsWith("/platforms/");

  const linkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/platform") {
      return pathname === "/platform" || pathname.startsWith("/platforms/");
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const linkClass = (href: string) =>
    cn(
      "text-sm font-medium text-navbar-muted transition-colors hover:text-navbar-foreground",
      linkActive(href) && "text-navbar-foreground",
    );

  return (
    <header className="sticky top-0 z-[100] border-b border-white/10 bg-navbar text-navbar-foreground backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2 rounded-md pr-1 outline-offset-4 transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-navbar-foreground/80 md:mr-2 md:gap-3 lg:mr-6"
        >
          <BrandLogo variant="nav" priority />
          <span className="font-heading text-base font-semibold tracking-tight text-navbar-foreground md:text-lg">
            {brandWordmark}
          </span>
          <span className="sr-only">{siteConfig.name} — home</span>
        </Link>
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            if (item.href === "/platform") {
              return (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      linkClass(item.href),
                      platformActive && "text-navbar-foreground",
                    )}
                    aria-haspopup="true"
                  >
                    {item.label}
                  </Link>
                  <div className="absolute left-0 top-full z-50 hidden w-max rounded-xl border border-white/10 bg-navbar/95 p-2 backdrop-blur-md group-hover:block group-focus-within:block">
                    <div className="flex flex-col gap-1">
                      {platformSubItems.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={cn(
                            "rounded-lg px-3 py-2 text-sm font-medium text-navbar-muted transition-colors hover:text-navbar-foreground",
                            linkActive(sub.href) &&
                              "bg-white/5 text-navbar-foreground",
                          )}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(item.href)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "sm", variant: "outline" }),
              "hidden h-9 rounded-2xl border-white/45 bg-transparent text-white hover:bg-white/10 hover:text-white md:inline-flex dark:border-white/45 dark:bg-transparent dark:text-white dark:hover:bg-white/10",
            )}
          >
            Request Technical Demo
          </Link>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="md:hidden border-white/25 bg-transparent text-navbar-foreground hover:bg-white/10 hover:text-navbar-foreground"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-nav-sheet"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent
              id="mobile-nav-sheet"
              side="right"
              className="w-[min(100%,320px)]"
            >
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-2 pb-6" aria-label="Mobile navigation">
                {navItems.map((item) => {
                  if (item.href === "/platform") {
                    return (
                      <div key={item.href} className="pt-1">
                        <Link
                          href={item.href}
                          className={cn(
                            "rounded-xl px-3 py-2.5 text-sm font-medium",
                            linkActive(item.href)
                              ? "bg-muted text-foreground"
                              : "text-muted-foreground hover:bg-muted/60",
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                        <div className="mt-1 flex flex-col gap-1 pl-3">
                          {platformSubItems.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={cn(
                                "rounded-xl px-3 py-2 text-sm font-medium",
                                linkActive(sub.href)
                                  ? "bg-muted text-foreground"
                                  : "text-muted-foreground hover:bg-muted/60",
                              )}
                              onClick={() => setOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-xl px-3 py-2.5 text-sm font-medium",
                        linkActive(item.href)
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted/60",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  className="mt-2 rounded-2xl bg-primary px-3 py-2.5 text-center text-sm font-medium text-primary-foreground"
                  onClick={() => setOpen(false)}
                >
                  Request Technical Demo
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
