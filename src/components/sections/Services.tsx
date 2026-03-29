"use client"

import * as React from "react"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FileText, Edit, PenTool, Linkedin, Briefcase, ArrowRight, Star } from "lucide-react"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

const services = [
    {
        title: "ATS Optimized CV/Resume Writing",
        description: "Built from scratch with keywords that pass Automated Tracking Systems and catch recruiter attention.",
        icon: FileText,
        colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
        accent: "primary",
    },
    {
        title: "Resume Revamp",
        description: "Modernize your existing resume with a clean, professional layout that highlights your achievements.",
        icon: Edit,
        colSpan: "col-span-1",
        accent: "accent-warm",
    },
    {
        title: "Cover Letters",
        description: "Persuasive, tailored cover letters that tell your story.",
        icon: PenTool,
        colSpan: "col-span-1",
        accent: "accent-cool",
    },
    {
        title: "LinkedIn Optimization",
        description: "Full profile overhaul to increase visibility, search ranking, and connection requests.",
        icon: Linkedin,
        colSpan: "col-span-1",
        accent: "primary",
    },
    {
        title: "Career-Specific CVs",
        description: "Strategically written resumes for Tech, Finance, Healthcare, and Executive roles.",
        icon: Briefcase,
        colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
        accent: "accent-warm",
    },
]

export function Services() {
    const sectionRef = React.useRef<HTMLElement>(null)

    useGSAP(() => {
        gsap.from(".service-card", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
        })
    }, { scope: sectionRef })

    return (
        <section id="services" ref={sectionRef} className="py-24 bg-zinc-50 dark:bg-black/40 relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-warm/10 text-accent-warm text-xs font-medium mb-4 border border-accent-warm/20">
                            <Star className="h-3 w-3 fill-accent-warm" />
                            Premium Services
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-foreground">
                            Get Noticed.{" "}
                            <span className="text-primary">Get Hired.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Strategic career documents crafted to bypass bots and impress humans.
                        </p>
                    </div>

                    <div className="hidden md:block">
                        <Link
                            href="/pricing"
                            className="group flex items-center gap-2 text-sm font-medium text-accent-cool hover:text-accent-cool/80 transition-colors"
                        >
                            View all pricing
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                        <SpotlightCard
                            key={index}
                            className={cn(service.colSpan, "service-card p-8 group h-full flex flex-col")}
                            spotlightColor="rgba(var(--primary-rgb), 0.1)"
                        >
                            <div>
                                <div className={cn(
                                    "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110",
                                    service.accent === "primary" && "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
                                    service.accent === "accent-warm" && "bg-accent-warm/10 text-accent-warm group-hover:bg-accent-warm group-hover:text-white",
                                    service.accent === "accent-cool" && "bg-accent-cool/10 text-accent-cool group-hover:bg-accent-cool group-hover:text-white"
                                )}>
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h3 className={cn(
                                    "text-xl font-bold mb-3 font-heading transition-colors",
                                    service.accent === "primary" && "group-hover:text-primary",
                                    service.accent === "accent-warm" && "group-hover:text-accent-warm",
                                    service.accent === "accent-cool" && "group-hover:text-accent-cool"
                                )}>{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>

                {/* End CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="#pricing"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
                    >
                        Choose Your Package
                        <ArrowRight className="h-4 w-4" />
                    </a>
                    <p className="mt-4 text-sm text-muted-foreground">
                        100% satisfaction guaranteed
                    </p>
                </div>
            </div>
        </section>
    )
}
