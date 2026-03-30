import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://verbasense.io"),
  icons: {
    icon: [
      { url: "/favicon.webp", type: "image/webp", sizes: "32x32" },
      {
        url: "/brand/verbaSense-Logo-transparent.webp",
        type: "image/webp",
      },
    ],
    apple: [{ url: "/apple-touch-icon.webp", type: "image/webp", sizes: "180x180" }],
  },
  title: {
    default: `${siteConfig.shortName} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "VerbaSense",
    "judicial intelligence",
    "enterprise meeting intelligence",
    "government meeting intelligence",
    "AI transcription",
    "on-premise AI platform",
  ],
  openGraph: {
    title: "VerbaSense Intelligence Platform",
    description:
      "Transform high-stakes conversations into structured, searchable, and actionable intelligence.",
    url: "https://verbasense.io",
    siteName: "VerbaSense",
    images: [
      {
        url: "/brand/hero-image-vip.webp",
        width: 1200,
        height: 630,
        alt: "VerbaSense Intelligence Platform",
      },
    ],
    type: "website",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "VerbaSense Intelligence Platform",
    description:
      "Transform high-stakes conversations into structured, searchable, and actionable intelligence.",
    images: ["/brand/hero-image-vip.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${inter.className} min-h-screen flex flex-col antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
