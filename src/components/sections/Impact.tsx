"use client"

import * as React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Users, Briefcase, TrendingUp, Award } from "lucide-react"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

const stats = [
    {
        label: "Success Rate",
        value: 98,
        suffix: "%",
        sub: "ATS Pass Rate",
        icon: TrendingUp,
        accent: "primary",
    },
    {
        label: "Clients Hired",
        value: 500,
        suffix: "+",
        sub: "Globally",
        icon: Users,
        accent: "accent-cool",
    },
    {
        label: "Salary Increase",
        value: 35,
        suffix: "%",
        sub: "Average Boost",
        icon: Award,
        accent: "accent-warm",
    },
    {
        label: "Interview Calls",
        value: 3,
        suffix: "x",
        sub: "More Responses",
        icon: Briefcase,
        accent: "primary",
    },
]

const companies = [
    "Google", "Amazon", "Meta", "Microsoft", "Goldman Sachs", "McKinsey", "Deloitte", "Apple",
    "Netflix", "Tesla", "JP Morgan", "BCG", "Bain & Co", "Spotify", "Uber", "Airbnb"
]

export function Impact() {
    const sectionRef = React.useRef<HTMLElement>(null)
    const marqueeRef = React.useRef<HTMLDivElement>(null)
    const statsRef = React.useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // Stats Cards - staggered slide up with scale
        gsap.fromTo(
            ".stat-item",
            { y: 60, opacity: 0, scale: 0.9 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top 85%",
                },
            }
        )

        // Counter Animation with smoother easing
        stats.forEach((stat, index) => {
            const el = document.getElementById(`counter-${index}`)
            if (el) {
                gsap.fromTo(
                    el,
                    { textContent: 0 },
                    {
                        textContent: stat.value,
                        duration: 1.8,
                        ease: "power1.out",
                        snap: { textContent: 1 },
                        scrollTrigger: {
                            trigger: statsRef.current,
                            start: "top 85%",
                        },
                    }
                )
            }
        })

        // Icon bounce on scroll
        gsap.fromTo(
            ".stat-icon",
            { scale: 0, rotate: -15 },
            {
                scale: 1,
                rotate: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(2)",
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top 85%",
                },
            }
        )

        // Marquee Animation - smooth infinite scroll
        if (marqueeRef.current) {
            gsap.to(marqueeRef.current, {
                xPercent: -50,
                duration: 30,
                ease: "none",
                repeat: -1,
            })
        }

        // Companies section fade in
        gsap.fromTo(
            ".companies-label",
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".companies-label",
                    start: "top 90%",
                },
            }
        )
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="py-12 md:py-20 bg-background relative overflow-hidden border-b border-border">
            {/* Subtle gradient background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[80%] bg-primary/3 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute top-0 right-0 w-[30%] h-[40%] bg-accent-cool/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-accent-warm/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                {/* Compact Stats Grid - all 4 in a row on desktop */}
                <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-item group relative p-4 md:p-6 rounded-xl md:rounded-2xl bg-card/60 backdrop-blur-sm border border-border/40 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className={cn(
                                "absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300",
                                stat.accent === "primary" && "bg-gradient-to-br from-primary to-transparent",
                                stat.accent === "accent-warm" && "bg-gradient-to-br from-accent-warm to-transparent",
                                stat.accent === "accent-cool" && "bg-gradient-to-br from-accent-cool to-transparent"
                            )} />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className={cn(
                                    "stat-icon mb-3 md:mb-4 p-2.5 md:p-3 rounded-lg md:rounded-xl bg-background/80 border border-border/60 shadow-sm group-hover:scale-105 transition-transform duration-300",
                                    stat.accent === "primary" && "text-primary",
                                    stat.accent === "accent-warm" && "text-accent-warm",
                                    stat.accent === "accent-cool" && "text-accent-cool"
                                )}>
                                    <stat.icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} />
                                </div>
                                
                                <div className="space-y-0.5 md:space-y-1">
                                    <div className="flex items-baseline justify-center font-black font-heading tracking-tight text-foreground">
                                        <span id={`counter-${index}`} className="text-2xl md:text-3xl lg:text-4xl">
                                            {stat.value}
                                        </span>
                                        <span className={cn(
                                            "text-lg md:text-xl lg:text-2xl ml-0.5",
                                            stat.accent === "primary" && "text-primary",
                                            stat.accent === "accent-warm" && "text-accent-warm",
                                            stat.accent === "accent-cool" && "text-accent-cool"
                                        )}>
                                            {stat.suffix}
                                        </span>
                                    </div>
                                    
                                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                        {stat.label}
                                    </p>
                                    <p className="text-[10px] md:text-xs text-muted-foreground/60 font-medium">
                                        {stat.sub}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Companies Marquee - slimmer */}
                <div className="space-y-4 md:space-y-6">
                    <p className="companies-label text-center text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/70">
                        Clients Hired At Leading Global Companies
                    </p>
                    
                    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                        <div ref={marqueeRef} className="flex w-max">
                            {/* First Set */}
                            <div className="flex shrink-0 items-center gap-8 md:gap-14 pr-8 md:pr-14">
                                {companies.map((company, i) => (
                                    <span
                                        key={`1-${company}-${i}`}
                                        className={cn(
                                            "text-lg md:text-2xl lg:text-3xl font-black font-heading tracking-tight text-muted-foreground/15 whitespace-nowrap transition-all duration-300 hover:text-muted-foreground/40 cursor-default select-none",
                                            i % 3 === 0 && "hover:text-primary/50",
                                            i % 3 === 1 && "hover:text-accent-cool/50",
                                            i % 3 === 2 && "hover:text-accent-warm/50"
                                        )}
                                    >
                                        {company}
                                    </span>
                                ))}
                            </div>
                            {/* Second Set */}
                            <div className="flex shrink-0 items-center gap-8 md:gap-14 pr-8 md:pr-14">
                                {companies.map((company, i) => (
                                    <span
                                        key={`2-${company}-${i}`}
                                        className={cn(
                                            "text-lg md:text-2xl lg:text-3xl font-black font-heading tracking-tight text-muted-foreground/15 whitespace-nowrap transition-all duration-300 hover:text-muted-foreground/40 cursor-default select-none",
                                            i % 3 === 0 && "hover:text-primary/50",
                                            i % 3 === 1 && "hover:text-accent-cool/50",
                                            i % 3 === 2 && "hover:text-accent-warm/50"
                                        )}
                                    >
                                        {company}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
