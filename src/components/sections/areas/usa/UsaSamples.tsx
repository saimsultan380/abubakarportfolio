"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";

export function UsaSamples() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
              <FileText className="h-3.5 w-3.5" />
              Samples
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-4">
              ATS Friendly Resume Templates and{" "}
              <span className="text-primary">Samples</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              Browse real ATS-optimized resume samples built for the US job
              market. See the formatting, structure, and achievement-focused
              writing that helps candidates get past screening systems and into
              interviews.
            </p>
            <Link
              href="/samples"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              View ATS Resume Samples
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border/70 bg-muted/30 shadow-sm">
            <Image
              src="/areas/us-ats-templates-samples.png"
              alt="ATS-friendly resume templates and samples for the United States"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
