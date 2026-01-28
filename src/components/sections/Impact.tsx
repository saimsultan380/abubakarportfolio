"use client"

import * as React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Users, Briefcase, TrendingUp, Award } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const stats = [
    {
        label: "Success Rate",
        value: "98%",
        sub: "ATS Pass Rate",
        icon: TrendingUp,
        color: "text-blue-500"
    },
    {
        label: "Clients Hired",
        value: "500+",
        sub: "Globally",
        icon: Users,
        color: "text-primary"
    },
    {
        label: "Salary Increase",
        value: "35%",
        sub: "Average Boost",
        icon: Award,
        color: "text-purple-500"
    },
    {
        label: "Interview Calls",
        value: "3x",
        sub: "More Responses",
        icon: Briefcase,
        color: "text-emerald-500"
    }
]

const companies = [
    "Google", "Amazon", "Meta", "Microsoft", "Goldman Sachs", "McKinsey", "Deloitte", "Apple"
]

export function Impact() {
    const sectionRef = React.useRef<HTMLElement>(null)

    useGSAP(() => {
        gsap.from(".stat-item", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 30,
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            clearProps: "all"
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden border-b border-border">
            {/* Mesh Gradient background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-primary/2 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-24">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-item group p-8 rounded-3xl bg-card border border-border/50 shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col items-center text-center"
                        >
                            <div className={`mb-6 p-4 rounded-2xl bg-secondary border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500`}>
                                <stat.icon className="h-8 w-8" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-foreground">
                                    {stat.value}
                                </p>
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                                    {stat.label}
                                </p>
                                <p className="text-xs text-muted-foreground font-medium">
                                    {stat.sub}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pt-16 border-t border-border/50">
                    <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-12">
                        Clients Hired At Leading Global Companies
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                        {companies.map((company) => (
                            <span
                                key={company}
                                className="text-xl md:text-3xl font-black font-heading tracking-tighter text-foreground hover:text-primary transition-colors cursor-default"
                            >
                                {company}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
