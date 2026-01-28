"use client"

import Image from "next/image"
import { CheckCircle2, Star, StarHalf, TrendingUp, Trophy } from "lucide-react"

export function HeroVisual() {
    return (
        <div className="relative w-full aspect-square flex items-center justify-center p-8 bg-transparent">

            {/* Background Decorative Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
                <div className="absolute w-[110%] h-[110%] rounded-full border border-accent-cool/10 animate-pulse" />
                <div className="absolute w-[90%] h-[90%] rounded-full border border-primary/15" />
                <div className="absolute w-[70%] h-[70%] rounded-full border border-accent-warm/20" />

                {/* Glow Effect */}
                <div className="absolute w-[50%] h-[50%] bg-gradient-to-br from-primary/10 via-accent-cool/10 to-accent-warm/10 blur-[120px] rounded-full" />
            </div>

            {/* Main Premium Card */}
            <div className="relative w-full max-w-[420px] aspect-[1/1.2] bg-white dark:bg-zinc-950 rounded-[32px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] border border-border/50 overflow-hidden">
                {/* Hero Image Section */}
                <div className="relative w-full h-[65%] overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950">
                    <Image
                        src="/hero-visual.png"
                        alt="Professional Resume Success"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-transparent " />
                </div>

                {/* Card Content Section */}
                <div className="p-6 sm:p-8 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <Trophy className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-bold text-foreground">Top-Tier Candidate</span>
                        </div>
                        <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4].map(i => <Star key={i} className="h-3 w-3 fill-accent-warm text-accent-warm" />)}
                            <StarHalf className="h-3 w-3 fill-accent-warm text-accent-warm" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-4 w-4 text-accent-cool" />
                            <div className="h-1.5 flex-1 bg-muted dark:bg-zinc-800 rounded-full" />
                        </div>
                        <div className="flex items-center gap-3 opacity-60">
                            <CheckCircle2 className="h-4 w-4 text-accent-cool" />
                            <div className="h-1.5 flex-1 bg-muted dark:bg-zinc-800 rounded-full" />
                        </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between opacity-30">
                        <span className="text-[9px] font-black tracking-widest uppercase">ATS Optimization Verified</span>
                        <span className="text-[9px] font-black tracking-widest uppercase">2026</span>
                    </div>
                </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -right-6 top-[15%] sm:-right-12 sm:top-[20%] animate-float-slow z-30">
                <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-primary/20 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-zinc-900 flex items-center justify-center text-white ring-4 ring-primary/10">
                        <TrendingUp className="h-5 w-5" />
                    </div>
                    <div className="pr-2">
                        <p className="text-[10px] font-black opacity-40 uppercase tracking-widest mb-0.5">ATS Score</p>
                        <p className="text-xl font-black text-foreground">98%</p>
                    </div>
                </div>
            </div>

            <div className="absolute -left-6 bottom-[20%] sm:-left-12 sm:bottom-[25%] animate-float-delayed z-30">
                <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-accent-warm/30 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent-warm/20 flex items-center justify-center text-accent-warm ring-4 ring-accent-warm/10">
                        <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div className="pr-2">
                        <p className="text-[10px] font-black opacity-40 uppercase tracking-widest mb-0.5">Status</p>
                        <p className="text-base font-black text-foreground">Interview Invited</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

