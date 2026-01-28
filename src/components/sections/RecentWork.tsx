"use client"

import * as React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Sparkles, TrendingUp, Zap, Target, CheckCircle2, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

const caseStudies = [
  {
    role: "Senior Frontend Developer",
    industry: "Tech",
    icon: Zap,
    before: {
      title: "Before",
      points: ["Generic template", "No ATS keywords", "Weak impact metrics"],
    },
    after: {
      title: "After",
      points: ["Metrics-driven layout", "React/TS optimized", "FAANG-ready format"],
    },
    result: "Interviews at Meta & Google",
    metric: { value: 98, suffix: "%", label: "ATS Score" },
    accent: "primary" as const,
  },
  {
    role: "Marketing Director",
    industry: "Digital Agency",
    icon: Target,
    before: {
      title: "Before",
      points: ["3-page clunky layout", "Buried ROI data", "No visual hierarchy"],
    },
    after: {
      title: "After",
      points: ["Executive summary lead", "Data visualization", "Strategic positioning"],
    },
    result: "VP role secured in 14 days",
    metric: { value: 2.5, suffix: "x", label: "Call Rate" },
    accent: "accent-warm" as const,
  },
  {
    role: "Fresh Graduate",
    industry: "Business Admin",
    icon: TrendingUp,
    before: {
      title: "Before",
      points: ["Zero visibility", "No internship calls", "Template-based"],
    },
    after: {
      title: "After",
      points: ["Skill-first approach", "Project showcase", "Personal branding"],
    },
    result: "Landed first Top-Tier role",
    metric: { value: 100, suffix: "%", label: "Success" },
    accent: "accent-cool" as const,
  },
]

export function RecentWork() {
  const containerRef = React.useRef<HTMLElement>(null)
  const cardsRef = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Header animation
    gsap.fromTo(
      ".rw-header",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    )

    // Cards staggered reveal with 3D effect
    gsap.fromTo(
      ".transform-card",
      { y: 80, opacity: 0, rotateX: 15 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
        },
      }
    )

    // Before/After reveal animation
    gsap.fromTo(
      ".before-section",
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      }
    )

    gsap.fromTo(
      ".after-section",
      { x: 20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      }
    )

    // Metric counter animation
    caseStudies.forEach((study, index) => {
      const el = document.getElementById(`metric-${index}`)
      if (el) {
        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: study.metric.value,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: study.metric.value % 1 === 0 ? 1 : 0.1 },
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
            },
          }
        )
      }
    })

    // Progress bar animation
    gsap.fromTo(
      ".progress-fill",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
        },
      }
    )

    // Result badge pop
    gsap.fromTo(
      ".result-badge",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        stagger: 0.15,
        delay: 0.8,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
        },
      }
    )

    // CTA animation
    gsap.fromTo(
      ".rw-cta",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".rw-cta",
          start: "top 90%",
        },
      }
    )
  }, { scope: containerRef })

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-background via-background to-muted/30 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-accent-cool/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <header className="rw-header text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-cool/10 text-accent-cool text-[10px] font-black uppercase tracking-widest mb-5 border border-accent-cool/20">
            <Sparkles className="h-3 w-3" />
            Success Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tight text-foreground mb-4">
            Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cool">Transformations</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto font-medium">
            From &quot;Ghosted&quot; to &quot;Hired&quot; — see how data-backed strategies deliver results.
          </p>
        </header>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            return (
              <article
                key={index}
                className="transform-card group relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
                style={{ perspective: "1000px" }}
              >
                {/* Card Header */}
                <div className={cn(
                  "relative p-5 md:p-6 border-b border-border/40",
                  study.accent === "primary" && "bg-gradient-to-br from-primary/5 to-transparent",
                  study.accent === "accent-warm" && "bg-gradient-to-br from-accent-warm/5 to-transparent",
                  study.accent === "accent-cool" && "bg-gradient-to-br from-accent-cool/5 to-transparent"
                )}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className={cn(
                        "inline-block text-[10px] font-black uppercase tracking-widest mb-1.5",
                        study.accent === "primary" && "text-primary",
                        study.accent === "accent-warm" && "text-accent-warm",
                        study.accent === "accent-cool" && "text-accent-cool"
                      )}>
                        {study.industry}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold font-heading text-foreground tracking-tight">
                        {study.role}
                      </h3>
                    </div>
                    <div className={cn(
                      "p-2.5 rounded-xl border shadow-sm group-hover:scale-110 transition-transform duration-300",
                      study.accent === "primary" && "bg-primary/10 border-primary/20 text-primary",
                      study.accent === "accent-warm" && "bg-accent-warm/10 border-accent-warm/20 text-accent-warm",
                      study.accent === "accent-cool" && "bg-accent-cool/10 border-accent-cool/20 text-accent-cool"
                    )}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Before / After Content */}
                <div className="p-5 md:p-6 space-y-4">
                  {/* Before */}
                  <div className="before-section">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="h-4 w-4 text-red-400/70" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-red-400/70">Before</span>
                    </div>
                    <ul className="space-y-1.5">
                      {study.before.points.map((point, i) => (
                        <li key={i} className="text-xs text-muted-foreground/70 flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider with arrow */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    <div className={cn(
                      "p-1.5 rounded-full",
                      study.accent === "primary" && "bg-primary/10 text-primary",
                      study.accent === "accent-warm" && "bg-accent-warm/10 text-accent-warm",
                      study.accent === "accent-cool" && "bg-accent-cool/10 text-accent-cool"
                    )}>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  </div>

                  {/* After */}
                  <div className="after-section">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className={cn(
                        "h-4 w-4",
                        study.accent === "primary" && "text-primary",
                        study.accent === "accent-warm" && "text-accent-warm",
                        study.accent === "accent-cool" && "text-accent-cool"
                      )} />
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-widest",
                        study.accent === "primary" && "text-primary",
                        study.accent === "accent-warm" && "text-accent-warm",
                        study.accent === "accent-cool" && "text-accent-cool"
                      )}>After</span>
                    </div>
                    <ul className="space-y-1.5">
                      {study.after.points.map((point, i) => (
                        <li key={i} className="text-xs text-foreground/80 font-medium flex items-center gap-2">
                          <span className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            study.accent === "primary" && "bg-primary/60",
                            study.accent === "accent-warm" && "bg-accent-warm/60",
                            study.accent === "accent-cool" && "bg-accent-cool/60"
                          )} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Result Footer */}
                <div className="p-5 md:p-6 pt-0">
                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="h-1 w-full rounded-full bg-muted overflow-hidden">
                      <div
                        className={cn(
                          "progress-fill h-full rounded-full origin-left",
                          study.accent === "primary" && "bg-gradient-to-r from-primary/60 to-primary",
                          study.accent === "accent-warm" && "bg-gradient-to-r from-accent-warm/60 to-accent-warm",
                          study.accent === "accent-cool" && "bg-gradient-to-r from-accent-cool/60 to-accent-cool"
                        )}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground mb-0.5">Result</p>
                      <p className="text-sm font-bold text-foreground truncate">{study.result}</p>
                    </div>
                    <div className={cn(
                      "result-badge flex items-baseline gap-0.5 px-3 py-2 rounded-xl border",
                      study.accent === "primary" && "bg-primary/10 border-primary/20",
                      study.accent === "accent-warm" && "bg-accent-warm/10 border-accent-warm/20",
                      study.accent === "accent-cool" && "bg-accent-cool/10 border-accent-cool/20"
                    )}>
                      <span
                        id={`metric-${index}`}
                        className={cn(
                          "text-xl font-black font-heading",
                          study.accent === "primary" && "text-primary",
                          study.accent === "accent-warm" && "text-accent-warm",
                          study.accent === "accent-cool" && "text-accent-cool"
                        )}
                      >
                        {study.metric.value}
                      </span>
                      <span className={cn(
                        "text-sm font-bold",
                        study.accent === "primary" && "text-primary",
                        study.accent === "accent-warm" && "text-accent-warm",
                        study.accent === "accent-cool" && "text-accent-cool"
                      )}>
                        {study.metric.suffix}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground ml-1">
                        {study.metric.label}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* CTA */}
        <div className="rw-cta mt-12 md:mt-16 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Start Your Transformation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-xs text-muted-foreground font-medium">
            Limited slots available each month
          </p>
        </div>
      </div>
    </section>
  )
}
