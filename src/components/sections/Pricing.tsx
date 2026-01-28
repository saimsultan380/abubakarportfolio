"use client"

import * as React from "react"
import { Check, Star, Zap, Rocket, Shield } from "lucide-react"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { cn } from "@/lib/utils"

const packages = [
    {
        name: "Professional Resume",
        price: "149",
        description: "Perfect for entry to mid-level professionals seeking a competitive edge.",
        features: [
            "ATS-Optimized Resume Writing",
            "Strategic Keyword Research",
            "Industry-Specific Formatting",
            "2 Rounds of Revisions",
            "48-Hour Delivery",
        ],
        icon: Rocket,
        tag: "Most Popular",
        gradient: "from-blue-500/20 to-blue-600/20",
    },
    {
        name: "The Executive",
        price: "299",
        description: "A complete overhaul for senior leaders and executive-level candidates.",
        features: [
            "Everything in Professional",
            "LinkedIn Profile Optimization",
            "Targeted Cover Letter",
            "Unlimited Revisions",
            "Direct WhatsApp Priority",
            "Post-Interview Guide",
        ],
        icon: Shield,
        tag: "Premium",
        gradient: "from-primary/20 to-primary/40",
        popular: true,
    },
    {
        name: "Career Transition",
        price: "199",
        description: "Designed for those changing industries or returning to the workforce.",
        features: [
            "Transferable Skills Audit",
            "Career Pivot Strategy",
            "Strategic Cover Letter",
            "ATS Framework Refresh",
            "Job Search Guide",
        ],
        icon: Zap,
        tag: "Strategic",
        gradient: "from-purple-500/20 to-purple-600/20",
    },
]

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-primary/2 blur-[150px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20">
                        Transparent Pricing
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                        Invest in the <span className="text-primary italic">Career You Deserve.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Choose the package that fits your career stage. Every document is 100% hand-crafted to bypass bots and wow humans.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <SpotlightCard
                            key={index}
                            className={cn(
                                "p-0 overflow-hidden flex flex-col group border-border/50 transition-all duration-500",
                                pkg.popular && "ring-2 ring-primary border-primary/50 shadow-2xl shadow-primary/10"
                            )}
                            spotlightColor="rgba(var(--primary), 0.1)"
                        >
                            {/* Header */}
                            <div className={cn("p-8 bg-gradient-to-br border-b border-border/50 relative", pkg.gradient)}>
                                {pkg.popular && (
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest shadow-lg">
                                        {pkg.tag}
                                    </div>
                                )}
                                {!pkg.popular && (
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-widest border border-border">
                                        {pkg.tag}
                                    </div>
                                )}

                                <div className="h-12 w-12 rounded-xl bg-background/50 backdrop-blur-md flex items-center justify-center mb-6 shadow-sm border border-white/20">
                                    <pkg.icon className="h-6 w-6 text-foreground" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-2">{pkg.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black font-heading text-foreground">${pkg.price}</span>
                                    <span className="text-muted-foreground font-medium">USD</span>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-8 flex-grow">
                                <p className="text-sm text-muted-foreground mb-8 font-medium italic">
                                    "{pkg.description}"
                                </p>
                                <ul className="space-y-4">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                                                <Check className="h-3 w-3 text-primary" />
                                            </div>
                                            <span className="text-sm text-foreground/80 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Footer */}
                            <div className="p-8 pt-0">
                                <button
                                    className={cn(
                                        "w-full h-12 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2",
                                        pkg.popular
                                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02]"
                                            : "bg-secondary text-foreground border border-border hover:bg-zinc-200 dark:hover:bg-zinc-800"
                                    )}
                                >
                                    Start Project <Star className={cn("h-4 w-4", pkg.popular ? "fill-white" : "fill-primary")} />
                                </button>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>

                <div className="mt-16 text-center text-muted-foreground text-sm font-medium">
                    Need a custom solution? <a href="#contact" className="text-primary hover:underline font-bold">Contact me</a> for a free quote.
                </div>
            </div>
        </section>
    )
}
