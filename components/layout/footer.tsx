import { BrandLogo } from "@/components/cjis/brand-logo";
import { brandWordmark, siteConfig } from "@/lib/constants";
import Link from "next/link";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { href: "/platform", label: "Platform overview" },
      { href: "/platforms/judicial", label: "CourtSense" },
      { href: "/platforms/enterprise", label: "EnterpriseSense" },
      { href: "/platforms/government", label: "GovSense" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal#privacy-policy", label: "Privacy Policy" },
      { href: "/legal#terms-of-service", label: "Terms of Service" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md outline-offset-2 transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-white/80 md:gap-3"
            >
              <BrandLogo variant="footer" />
              <span className="font-heading text-base font-semibold text-white md:text-lg">
                {brandWordmark}
              </span>
              <span className="sr-only">{siteConfig.name} — home</span>
            </Link>
            <p className="mt-3 max-w-[19rem] text-sm leading-relaxed text-white/75">
              VerbaSense VIP transforms critical conversations into structured,
              searchable intelligence—built for on-premise and hybrid deployment
              across courts, agencies, and boards.
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white/55">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {siteConfig.name}. CourtSense, EnterpriseSense,
          and GovSense are solution lines on VerbaSense. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
