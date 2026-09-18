"use client"

import * as React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Check, X, Sparkles, FileText } from "lucide-react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const templateFeatures = [
  "Standard fonts and clean structure",
  "Keyword-rich content that matches job descriptions",
  "No graphics, icons, or tables",
  "Clear and scannable sections for easy reading",
]

const templateBenefits = [
  "Passes ATS filters with ease",
  "Leaves a strong impression on recruiters",
  "Works for both local and global job markets",
]

const comparisonRows = [
  { others: "Same template for every client", us: "Custom ATS and standard formats" },
  { others: "Stuff resumes with buzzwords", us: "Naturally beats ATS, no keyword stuffing" },
  { others: "Copy-paste job descriptions", us: "100% human-written content" },
  { others: "AI-generated content", us: "Experts across 90+ industries" },
  { others: "Ignore client feedback", us: "One-on-one live session with your writer" },
  { others: "No industry-specific expertise", us: "Career-specific resumes for every industry" },
  { others: "Slow Resume Delivery Time", us: "Fast Delivery within 24 hours" },
]

export function RecentWork() {
  const containerRef = React.useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      ".work-header",
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      }
    )

    gsap.fromTo(
      ".work-card-anim",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 70%" },
      }
    )
  }, { scope: containerRef })

  return (
    <section
      id="templates"
      ref={containerRef}
      className="relative py-12 md:py-16 bg-background overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 -z-10 h-[350px] w-[350px] bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 -z-10 h-[250px] w-[250px] bg-accent-cool/5 blur-[100px] rounded-full" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <header className="work-header text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
            <FileText className="h-3.5 w-3.5" />
            Templates & Samples
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-2">
            ATS Friendly Resume{" "}
            <span className="text-primary">Templates and Samples</span>
          </h2>
        </header>

        {/* Templates Section */}
        <div className="work-card-anim mb-12">
          <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8 shadow-xl shadow-black/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Description */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-warm/10 text-accent-warm text-xs font-bold uppercase tracking-widest mb-6 border border-accent-warm/20">
                  <Sparkles className="h-3 w-3" />
                  ATS-Friendly Minimalist
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
                  ATS-Friendly Minimalist Resume Templates
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Every template is designed with minimal colors and a clean layout for full ATS compatibility. You can choose between photo and non-photo versions. They suit both local and international hiring standards.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">What Makes It ATS-Optimized:</h4>
                    <ul className="space-y-3">
                      {templateFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </span>
                          <span className="text-sm text-foreground/80 font-medium leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">Benefits:</h4>
                    <ul className="space-y-3">
                      {templateBenefits.map((ben, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-cool/10 text-accent-cool">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </span>
                          <span className="text-sm text-foreground/80 font-medium leading-snug">{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/samples"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-105 transition-all"
                  >
                    View ATS Resume Samples
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Right: Comparison Table */}
              <div>
                <h4 className="text-lg font-bold font-heading text-foreground mb-6">
                  Here&apos;s How Resume Uplift Stacks Up Against Other Resume Writing Services
                </h4>
                <div className="rounded-2xl border border-border overflow-hidden">
                  {/* Table Header */}
                  <div className="grid grid-cols-2 bg-muted/60 border-b border-border">
                    <div className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">Others</div>
                    <div className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-primary">Resume Uplift</div>
                  </div>
                  {/* Table Rows */}
                  {comparisonRows.map((row, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-2 border-b border-border/50 last:border-0 transition-colors hover:bg-muted/30 ${i % 2 === 0 ? "bg-background" : "bg-muted/20"}`}
                    >
                      <div className="px-4 py-3.5 flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                          <X className="h-2.5 w-2.5 stroke-[3]" />
                        </span>
                        <span className="text-xs text-muted-foreground font-medium leading-snug">{row.others}</span>
                      </div>
                      <div className="px-4 py-3.5 flex items-start gap-2.5 border-l border-border/50">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </span>
                        <span className="text-xs text-foreground font-semibold leading-snug">{row.us}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
