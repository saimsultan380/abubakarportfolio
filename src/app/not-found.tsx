import type { Metadata } from "next";
import Link from "next/link";
import { Home, FileText, DollarSign, Linkedin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  // No canonical — 404s must not be indexed or treated as a real page
};

const helpfulLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/pricing/", label: "Pricing", icon: DollarSign },
  { href: "/samples/", label: "Resume Samples", icon: FileText },
  { href: "/linkedin-optimization/", label: "LinkedIn Optimization", icon: Linkedin },
];

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center py-20 md:py-28 overflow-hidden bg-background">
      <div className="absolute top-0 right-0 -z-10 h-[400px] w-[400px] bg-primary/15 blur-[120px] rounded-full opacity-40" />
      <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] bg-primary/10 blur-[100px] rounded-full opacity-30" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
            Error 404
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight text-foreground mb-4">
            Page not found
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
            This URL doesn&apos;t match any page on Resumes Uplift. It may have
            been moved, renamed, or never existed. Try one of these instead:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left">
            {helpfulLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card px-4 py-3.5 shadow-sm hover:border-primary/40 hover:text-primary transition-all"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <link.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
          >
            Back to Home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
