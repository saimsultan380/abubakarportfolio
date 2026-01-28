"use client"

import * as React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check, X, TrendingUp, ArrowRight, Star, AlertCircle } from "lucide-react"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

const caseStudies = [
    {
        role: "Senior Frontend Developer",
        industry: "Tech",
        old: "Generic template, no ATS keywords.",
        new: "Metrics-driven, React-focused strategy.",
        result: "Interviews at Meta & Google",
        stats: "98% ATS Score",
        color: "blue"
    },
    {
        role: "Marketing Director",
        industry: "Digital Agency",
        old: "3-page clunky layout, buried ROI.",
        new: "High-impact summary, visual hierarchy.",
        result: "VP role secured in 14 days",
        stats: "2.5x Call Rate",
        color: "purple"
    },
    {
        role: "Fresh Graduate",
        industry: "Business Admin",
        old: "Zero visibility for internships.",
        new: "Skill-based, project-heavy layout.",
        result: "Landed first Top-Tier role",
        stats: "100% Success",
        color: "green"
    }
]

export function RecentWork() {
    const containerRef = React.useRef<HTMLElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        })

        tl.from(".section-header", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
            .from(".case-card", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                clearProps: "all"
            }, "-=0.4")
    }, { scope: containerRef })

    return (
        <section id="work" ref={containerRef} className="py-32 bg-background relative overflow-hidden">
            {/* Professional Background Elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute top-0 left-1/4 -z-10 h-[600px] w-[600px] bg-primary/5 blur-[120px] rounded-full opacity-50" />
            <div className="absolute bottom-0 right-1/4 -z-10 h-[500px] w-[500px] bg-secondary/10 blur-[100px] rounded-full opacity-30" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="section-header text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-primary/20 shadow-sm">
                        <Star className="h-3 w-3 fill-primary" />
                        Proven Success Stories
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-8 tracking-tighter leading-[0.85]">
                        The Ultimate <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground/80 to-foreground/40 italic">Transformation.</span>
                    </h2>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        Moving from "Ghosted" to "Hired" with data-backed strategies and elite visual positioning.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <SpotlightCard
                            key={index}
                            className="case-card group flex flex-col border-border/40 shadow-2xl hover:shadow-primary/5 transition-all duration-700 bg-card/50 backdrop-blur-sm rounded-[40px] border-2"
                            spotlightColor="rgba(var(--primary), 0.08)"
                        >
                            {/* Transformation Visual Header */}
                            <div className="relative h-72 p-6 overflow-hidden border-b border-border/50 bg-muted/20">
                                <div className="absolute inset-x-6 top-6 h-full flex gap-4">
                                    {/* BEFORE MOCKUP */}
                                    <div className="w-1/2 relative bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-red-500/10 p-4 flex flex-col gap-2.5 transition-all duration-700 group-hover:scale-95 group-hover:rotate-[-2deg] group-hover:opacity-40 group-hover:grayscale">
                                        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-red-500/10 text-[7px] font-black text-red-500 border border-red-500/20 uppercase tracking-widest">
                                            Rejected
                                        </div>
                                        <div className="h-2 w-12 bg-zinc-300 dark:bg-zinc-800 rounded-full" />
                                        <div className="space-y-1.5 mt-2">
                                            <div className="h-1 w-full bg-zinc-200 dark:bg-zinc-800/50 rounded-full" />
                                            <div className="h-1 w-[85%] bg-zinc-200 dark:bg-zinc-800/50 rounded-full" />
                                            <div className="h-1 w-[90%] bg-zinc-200 dark:bg-zinc-800/50 rounded-full" />
                                        </div>
                                        <div className="mt-4 flex flex-wrap gap-1.5">
                                            <div className="h-3 w-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
                                            <div className="h-3 w-10 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
                                        </div>
                                        <div className="mt-auto h-2 w-full bg-zinc-200 dark:bg-zinc-800/50 rounded-full overflow-hidden">
                                            <div className="h-full w-1/3 bg-red-400" />
                                        </div>
                                    </div>

                                    {/* AFTER MOCKUP */}
                                    <div className="w-1/2 relative bg-white dark:bg-zinc-950 rounded-2xl border-2 border-primary/20 p-5 flex flex-col gap-3 shadow-[0_20px_40px_-15px_rgba(var(--primary),0.2)] transition-all duration-700 group-hover:translate-x-2 group-hover:scale-105 group-hover:rotate-[1deg] group-hover:border-primary/40">
                                        <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-primary/10 text-[8px] font-black text-primary border border-primary/20 uppercase tracking-[0.2em] animate-pulse">
                                            Hired
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="h-5 w-5 rounded-lg bg-primary/20 border border-primary/20" />
                                            <div className="h-2.5 w-16 bg-primary/30 rounded-full" />
                                        </div>
                                        <div className="space-y-2 mt-2">
                                            <div className="h-1 w-full bg-primary/10 rounded-full" />
                                            <div className="h-1 w-full bg-primary/10 rounded-full" />
                                            <div className="h-1 w-[75%] bg-primary/40 rounded-full shadow-[0_0_8px_rgba(var(--primary),0.3)]" />
                                        </div>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            <div className="h-4 w-12 bg-primary/5 border border-primary/10 rounded-full" />
                                            <div className="h-4 w-10 bg-primary/5 border border-primary/10 rounded-full" />
                                        </div>
                                        <div className="mt-auto h-3 w-full bg-primary/5 rounded-full overflow-hidden border border-primary/10">
                                            <div className="h-full w-[94%] bg-gradient-to-r from-primary/80 to-primary shadow-[0_0_12px_rgba(var(--primary),0.5)]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/50 text-[8px] font-black uppercase tracking-widest text-muted-foreground scale-90 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                    Full Strategy Reveal <ArrowRight className="h-2 w-2" />
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-10 flex-grow flex flex-col">
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-3xl font-black font-heading text-foreground tracking-tight leading-none">{study.role}</h3>
                                        <div className="h-10 w-10 rounded-2xl bg-secondary/50 border border-border flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors duration-500">
                                            <TrendingUp className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                    </div>
                                    <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10">
                                        {study.industry}
                                    </span>
                                </div>

                                <div className="space-y-6 mb-10">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0 h-6 w-6 rounded-lg bg-red-500/5 border border-red-500/10 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                                            <X className="h-3.5 w-3.5 text-red-500" />
                                        </div>
                                        <p className="text-[13px] text-muted-foreground/80 font-medium leading-relaxed italic">"{study.old}"</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0 h-6 w-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_10px_rgba(var(--primary),0.1)]">
                                            <Check className="h-3.5 w-3.5 text-primary stroke-[3]" />
                                        </div>
                                        <p className="text-[15px] text-foreground font-black tracking-tight leading-relaxed">{study.new}</p>
                                    </div>
                                </div>

                                <div className="mt-auto pt-8 border-t border-border/50 flex items-end justify-between">
                                    <div className="space-y-1">
                                        <span className="block text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">Final Outcome</span>
                                        <span className="font-black text-foreground text-lg flex items-center gap-2 group-hover:text-primary transition-colors duration-500">
                                            {study.result}
                                        </span>
                                    </div>
                                    <div className="px-5 py-3 rounded-2xl bg-foreground dark:bg-white text-background dark:text-foreground shadow-2xl group-hover:-translate-y-1 group-hover:shadow-primary/20 transition-all duration-500 border border-white/10 dark:border-black/5">
                                        <span className="text-[13px] font-black italic tracking-widest">{study.stats}</span>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <button className="group relative h-16 px-12 rounded-2xl bg-foreground dark:bg-white text-background dark:text-foreground text-sm font-black uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-[1.03] active:scale-95 flex items-center gap-4 mx-auto overflow-hidden">
                        <span className="relative z-10 flex items-center gap-3">
                            Start Your Transformation
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
                        </span>
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    </button>
                    <p className="mt-8 text-[11px] font-bold text-muted-foreground uppercase tracking-[0.4em] animate-pulse">
                        High-Impact strategy slots available
                    </p>
                </div>
            </div>
        </section>
    )
}

