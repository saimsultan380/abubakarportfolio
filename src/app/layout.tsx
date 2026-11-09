import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { TrustpilotScript } from "@/components/Trustpilot";
import { SiteGraphJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Best ATS Friendly Resume & CV Writing Services to Get Hired",
    template: "%s | Resumes Uplift",
  },
  description:
    "Hire a certified professional ATS Resume & CV writer. Book our ATS-friendly Resume writing services that help you get hired and win interviews. Get more Jobs",
  keywords: [
    "ATS resume",
    "ATS-optimized CV",
    "professional resume writing",
    "CV review service",
    "resume optimization",
    "career coaching",
    "job application help",
    "LinkedIn profile optimization",
    "resume templates",
    "CV formatting",
    "recruiter-approved resumes",
  ],
  authors: [{ name: "Resumes Uplift" }],
  creator: "Resumes Uplift",
  publisher: "Resumes Uplift",
  verification: {
    google: "8pvd-SFOs0ir8VZ2BVW95CXxnrTZweR8Ateug8-jxgQ",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    // Do NOT set a sitewide url/canonical here — each page sets its own
    siteName: "Resumes Uplift",
    images: [
      {
        url: "/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Resumes Uplift - Professional Resume & CV Writing Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-logo.png"],
  },
  // No sitewide canonical — child pages must set their own unique URL
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SiteGraphJsonLd />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          inter.variable,
          outfit.variable,
          "min-h-screen bg-background font-sans antialiased",
        )}
      >
        <TrustpilotScript />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 relative z-10 bg-background shadow-xl">
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  );
}
