import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Outfit for headings/editorial feel
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading", // Naming it font-heading which mapped to nothing in globals yet, but I can add it or just use it directly
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.resumesuplift.com'),
  title: {
    default: "ATS-Optimized Resumes & CVs That Land You Interviews",
    template: "%s | Resumes Uplift"
  },
  description: "Get more interviews with ATS-optimized, recruiter-approved resumes tailored to your role and industry. Professional CV writing service with proven results.",
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
    "recruiter-approved resumes"
  ],
  authors: [{ name: "Resumes Uplift" }],
  creator: "Resumes Uplift",
  publisher: "Resumes Uplift",
  verification: {
    google: "3lT3phbyzEO6yh8nkCSIfsnzWpAhfxIhU_WNM2r60sQ",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.resumesuplift.com',
    title: 'ATS-Optimized Resumes & CVs That Land You Interviews',
    description: 'Get more interviews with ATS-optimized, recruiter-approved resumes tailored to your role and industry.',
    siteName: 'Resumes Uplift',
    images: [
      {
        url: '/brand/logo-new.png',
        width: 1200,
        height: 630,
        alt: 'Resumes Uplift - Professional Resume & CV Writing Service',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATS-Optimized Resumes & CVs That Land You Interviews',
    description: 'Get more interviews with ATS-optimized, recruiter-approved resumes tailored to your role and industry.',
    images: ['/brand/logo-new.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: ['/brand/logo-new.png'],
    icon: [
      { url: '/brand/logo-new.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/logo-new.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/brand/logo-new.png' },
      { url: '/brand/logo-new.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/brand/logo-new.png',
      },
    ],
  },
  manifest: '/manifest.json',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": "https://www.resumesuplift.com/#service",
                  "name": "Resumes Uplift",
                  "description": "Professional ATS-optimized resume and CV writing service that helps job seekers land more interviews.",
                  "url": "https://www.resumesuplift.com",
                  "email": "resumesuplift@gmail.com",
                  "priceRange": "$$",
                  "areaServed": {
                    "@type": "Place",
                    "name": "Worldwide"
                  },
                  "serviceType": ["Resume Writing", "CV Optimization", "ATS Resume Review", "LinkedIn Profile Optimization", "Career Coaching"],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Resume Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Professional Resume Writing",
                          "description": "ATS-optimized resume writing tailored to your target role"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "CV Review & Optimization",
                          "description": "Expert review and optimization of your existing CV"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.resumesuplift.com/#organization",
                  "name": "Resumes Uplift",
                  "url": "https://www.resumesuplift.com",
                  "logo": "https://www.resumesuplift.com/brand/logo-new.png",
                  "email": "resumesuplift@gmail.com",
                  "description": "Professional resume and CV writing service helping job seekers create ATS-optimized resumes that land interviews.",
                  "sameAs": []
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.resumesuplift.com/#website",
                  "url": "https://www.resumesuplift.com",
                  "name": "Resumes Uplift",
                  "description": "Get more interviews with ATS-optimized, recruiter-approved resumes tailored to your role and industry.",
                  "publisher": {
                    "@id": "https://www.resumesuplift.com/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.resumesuplift.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          inter.variable,
          outfit.variable,
          "min-h-screen bg-background font-sans antialiased"
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

