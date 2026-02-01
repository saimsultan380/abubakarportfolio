"use client";

import Image from "next/image";
import { CheckCircle2, Linkedin, Star } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto perspective-[1000px] group">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 blur-[100px] rounded-full opacity-50 pointer-events-none group-hover:opacity-70 transition-opacity duration-700" />

      {/* Floating Decorative Elements */}
      <div className="absolute -top-6 -right-6 animate-float-slow delay-700 hidden sm:block">
        <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl shadow-xl shadow-primary/5 border border-white/50 dark:border-white/5 rotate-12 transition-transform group-hover:rotate-6">
          <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
        </div>
      </div>

      {/* Main Card */}
      <div className="relative bg-white/80 dark:bg-zinc-950/80 backdrop-blur-2xl border border-white/60 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-2xl transition-all duration-500 hover:shadow-primary/10">
        {/* Header Label */}
        <div className="flex items-center gap-2 mb-6 opacity-80">
          <div className="h-6 px-2.5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
              Meet Our Team
            </span>
          </div>
        </div>

        {/* Profile Block */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
          {/* Image */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-zinc-800 shrink-0 group-hover:scale-105 transition-transform duration-500">
            <Image
              src="/brand/WhatsApp%20Image%202026-01-31%20at%2012.05.58%20AM.jpeg"
              alt="Muhammad Abu Bakar"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Name & Title */}
          <div className="flex-1 min-w-0 pt-1">
            <a
              href="https://www.linkedin.com/in/muhammad-abubakar-resumewriter?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center sm:justify-start gap-2 text-2xl font-bold font-heading text-foreground tracking-tight hover:text-primary transition-colors"
              aria-label="Open Abubakar LinkedIn profile"
            >
              Muhammad Abu Bakar
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
            <p className="text-sm font-semibold text-primary mt-0.5">
              Expert Writing Head
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-3 h-3 text-yellow-500 fill-yellow-500"
                />
              ))}
              <span className="text-[10px] font-medium text-muted-foreground ml-1">
                (500+ Hired)
              </span>
            </div>
          </div>
        </div>

        {/* Divider with simple gradient */}
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Intro/Bio */}
        <div className="relative z-10">
          <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed font-medium">
            Certified Professional Resume Writer | LinkedIn Optimization Specialist | Cover Letter Expert | ATS-Compliant Resume Creator | Executive Career Branding | Job-Winning Resume Writer
          </p>
        </div>

        {/* Bottom Tags */}
        <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
            <span className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
              Recruiter Approved
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
            <span className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
              ATS Optimized
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
