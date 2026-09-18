import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/FloatingActions";
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
    google: "3lT3phbyzEO6yh8nkCSIfsnzWpAhfxIhU_WNM2r60sQ",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    // Do NOT set a sitewide url/canonical here — each page sets its own
    siteName: "Resumes Uplift",
    images: [
      {
        url: "/brand/new%20logo.png",
        width: 1200,
        height: 630,
        alt: "Resumes Uplift - Professional Resume & CV Writing Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/brand/new%20logo.png"],
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
    shortcut: ["/brand/new%20logo.png"],
    icon: [
      { url: "/brand/new%20logo.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/new%20logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/brand/new%20logo.png" },
      { url: "/brand/new%20logo.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/brand/new%20logo.png",
      },
    ],
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
