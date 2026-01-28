"use client"

import * as React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckCircle, Clock, Search, UserCheck } from "lucide-react"
import { GradientBorderCard } from "@/components/ui/GradientBorderCard"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

const features = [
    {
        title: "100% Human-Written",
        description: "No AI generators. Every sentence is crafted to highlight your unique value.",
        icon: UserCheck,
        accent: "primary",
    },
    {
        title: "ATS-Friendly Formats",
        description: "Clean layouts ensuring your CV passes the bots and reaches the recruiter.",
        icon: Search,
        accent: "accent-cool",
    },
    {
        title: "Industry-Specific Strategy",
        description: "Keywords and phrasing tailored to your target role and sector.",
        icon: CheckCircle,
        accent: "accent-warm",
    },
    {
        title: "Fast Turnaround",
        description: "Get your new CV in as little as 48 hours without compromising quality.",
        icon: Clock,
        accent: "primary",
    },
]

export function WhyChooseMe() {
    const containerRef = React.useRef<HTMLElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        })

        tl.from(".trust-card", {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        })
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="py-24 bg-background relative z-10">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-primary/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute top-0 right-0 w-[50%] h-[40%] bg-accent-warm/10 blur-[100px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[50%] h-[40%] bg-accent-cool/10 blur-[100px] rounded-full -z-10" />

            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent-cool/10 border border-accent-cool/20 text-accent-cool text-xs font-semibold tracking-wide mb-4">
                        THE DIFFERENCE
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground">
                        Why Trust Me With Your <span className="text-primary">Career?</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        I don't just format text; I build career narratives that get results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="trust-card">
                            <GradientBorderCard className="h-full flex flex-col items-center text-center">
                                <div className={cn(
                                    "mb-6 p-4 rounded-full ring-1 ring-border transition-all duration-500",
                                    feature.accent === "primary" && "bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:ring-primary/30",
                                    feature.accent === "accent-warm" && "bg-accent-warm/10 text-accent-warm group-hover:bg-accent-warm/20 group-hover:ring-accent-warm/30",
                                    feature.accent === "accent-cool" && "bg-accent-cool/10 text-accent-cool group-hover:bg-accent-cool/20 group-hover:ring-accent-cool/30"
                                )}>
                                    <feature.icon className="h-8 w-8" />
                                </div>
                                <h3 className={cn(
                                    "text-lg font-bold mb-3 transition-colors",
                                    feature.accent === "primary" && "text-foreground group-hover:text-primary",
                                    feature.accent === "accent-warm" && "text-foreground group-hover:text-accent-warm",
                                    feature.accent === "accent-cool" && "text-foreground group-hover:text-accent-cool"
                                )}>{feature.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </GradientBorderCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
