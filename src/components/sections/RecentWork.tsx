"use client"

import * as React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, CheckCircle2, FileText, Search, Sparkles, Target } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const deliverables = [
  {
    title: "ATS Audit Snapshot",
    description: "Keyword match, missing skills, and quick wins to improve screening results.",
    icon: Search,
  },
  {
    title: "Stronger Impact Bullets",
    description: "Rewritten examples that turn responsibilities into measurable outcomes.",
    icon: Target,
  },
  {
    title: "Clean, Recruiter-Friendly Format",
    description: "Structure that’s easy to scan and safe for ATS parsing.",
    icon: FileText,
  },
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
      id="work"
      ref={containerRef}
      className="relative py-24 md:py-32 bg-zinc-50 dark:bg-black/40 overflow-hidden"
    >
      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <header className="work-header text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
            <Sparkles className="h-3.5 w-3.5" />
            Free Resume Audit
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-foreground mb-6">
            See exactly what you&apos;ll{" "}
            <span className="text-primary">get</span>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Before you order, I can review your current CV and share a clear snapshot of what to fix to start getting interviews.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: What you get */}
          <div className="work-card-anim h-full">
            <div className="h-full rounded-[1rem] border border-border/60 bg-white dark:bg-zinc-900/50 p-8 md:p-12 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500">
              <h3 className="text-3xl font-bold font-heading tracking-tight text-foreground mb-4">
                What you&apos;ll receive
              </h3>
              <p className="text-muted-foreground text-lg mb-10">
                A practical, actionable review (not generic feedback) so you know exactly what to improve.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {deliverables.map((d, idx) => {
                  const Icon = d.icon
                  return (
                    <div key={idx} className="flex flex-col">
                      <div className="h-14 w-14 rounded-2xl bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-500/20 flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h4 className="font-bold text-foreground mb-2">{d.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-col items-start sm:flex-row gap-6 sm:items-center sm:justify-between pt-8 border-t border-border/50">
                <div className="text-sm text-muted-foreground font-medium">
                  <span className="font-bold text-foreground">Tip:</span> Send your current CV + target job title.
                </div>
                <a
                  href="#contact"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-orange-600 px-8 text-base font-bold text-white shadow-lg shadow-orange-600/20 hover:bg-orange-700 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Get My Audit
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Preview */}
          <div className="work-card-anim h-full">
            <div className="h-full rounded-[1rem] border border-border/60 bg-white dark:bg-zinc-900/50 p-8 md:p-12 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-orange-100 dark:border-orange-500/20">
                <Sparkles className="h-3 w-3" />
                Preview
              </div>

              <h3 className="text-2xl font-bold font-heading text-foreground mb-8">
                Example of what I fix
              </h3>

              <div className="space-y-6">
                {/* Before */}
                <div className="rounded-2xl border border-border bg-zinc-50 dark:bg-zinc-900/50 p-6">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/70 mb-3">
                    Before
                  </p>
                  <p className="text-lg text-muted-foreground font-serif italic">
                    “Responsible for managing projects and team tasks.”
                  </p>
                </div>

                {/* After */}
                <div className="relative rounded-2xl border border-orange-200 dark:border-orange-500/30 bg-white dark:bg-zinc-900 p-6 shadow-xl shadow-orange-500/5 scale-[1.02] transform">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-3">
                    After
                  </p>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-500" />
                    </div>
                    <p className="text-lg text-foreground font-medium leading-relaxed">
                      “Led a <span className="font-bold text-foreground bg-orange-100 dark:bg-orange-500/20 px-1 rounded">6‑person team</span> to deliver 12 projects on time, improving stakeholder satisfaction by <span className="font-bold text-foreground bg-orange-100 dark:bg-orange-500/20 px-1 rounded">30%</span>.”
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-sm font-medium text-muted-foreground text-center">
                You’ll get role‑specific keywords, a cleaner structure, and stronger impact statements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
