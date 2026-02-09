"use client";

import * as React from "react";
import { ArrowRight, ArrowUpRight, Linkedin, Star, CheckCircle2 } from "lucide-react";

export function SuccessStats() {
  return (
    <section className="py-24 bg-zinc-50/50 dark:bg-black/20 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="rounded-3xl border border-border bg-card shadow-2xl shadow-primary/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Visual Side */}
            <div className="relative h-full min-h-[400px] lg:min-h-full bg-muted/30 p-8 lg:p-12 flex flex-col justify-between">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                <div className="h-32 w-32 bg-primary/30 rounded-full blur-3xl" />
              </div>
              
              {/* Badge Overlay */}
              <div className="absolute top-8 left-8 z-10 bg-background/80 backdrop-blur-md border border-border p-3 rounded-2xl shadow-sm max-w-[220px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Live Stats</span>
                </div>
                <div className="text-2xl font-black text-foreground">500+</div>
                <div className="text-xs font-medium text-muted-foreground">Clients Hired Globally</div>
              </div>

              {/* Main Image Container */}
              <div className="relative flex-1 w-full h-full flex items-center justify-center mt-16 lg:mt-0">
                 <div className="relative w-full max-w-md aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-background rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                    <img
                      src="https://www.resumeground.com/images/resume.webp"
                      alt="Professional resume example"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.55)]">
                        <div className="flex gap-1 mb-2">
                            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                        </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right: Content Side */}
            <div className="p-8 lg:p-16 flex flex-col justify-center bg-card">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-[0.2em] text-primary w-fit mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Proof of Results
              </div>

              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-foreground">
                Your Career, Your Story —{" "}
                <span className="text-primary">Unforgettable.</span>
              </h2>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                We don't just write resumes; we craft career narratives. 100% personalized, ATS-optimized, and designed to position you as the top 1% candidate in your field.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="/samples"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-105 transition-all"
                >
                  View Samples
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="/cv-review"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-semibold text-foreground hover:border-primary/50 hover:bg-muted/50 transition-all"
                >
                  Get Free Review
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-y-8 gap-x-12 border-t border-border pt-8">
                <div>
                    <div className="text-3xl font-black text-foreground mb-1">98.5%</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                        Interviews Secured
                    </div>
                </div>
                <div>
                    <div className="text-3xl font-black text-foreground mb-1">10+</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                        Global Markets
                    </div>
                </div>
                <div>
                    <div className="text-3xl font-black text-foreground mb-1">4.9/5</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                        Client Rating
                    </div>
                </div>
                <div>
                    <div className="text-3xl font-black text-foreground mb-1">24h</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                        Express Delivery
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
