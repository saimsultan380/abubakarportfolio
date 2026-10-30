"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { RESUME_SAMPLES } from "@/lib/resume-samples";
import { cn } from "@/lib/utils";

const LOOP = [...RESUME_SAMPLES, ...RESUME_SAMPLES];

export function CvTemplateSlider() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const offsetRef = React.useRef(0);
  const pausedRef = React.useRef(false);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let frame = 0;
    const speed = 0.5;

    const tick = () => {
      if (!pausedRef.current && el) {
        offsetRef.current += speed;
        const half = el.scrollWidth / 2;
        if (half > 0 && offsetRef.current >= half) {
          offsetRef.current -= half;
        }
        el.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;

        const card = el.firstElementChild as HTMLElement | null;
        if (card) {
          const step = card.getBoundingClientRect().width + 20;
          if (step > 0) {
            const idx =
              Math.floor(offsetRef.current / step) % RESUME_SAMPLES.length;
            setActive(idx);
          }
        }
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const nudge = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;
    const step = card.getBoundingClientRect().width + 20;
    const half = el.scrollWidth / 2;
    let next = offsetRef.current + dir * step;
    if (half > 0) {
      while (next < 0) next += half;
      while (next >= half) next -= half;
    }
    offsetRef.current = next;
    el.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
    el.style.transform = `translate3d(${-next}px, 0, 0)`;
    window.setTimeout(() => {
      if (el) el.style.transition = "";
    }, 520);
  };

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-background border-y border-border/60">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-0 -z-10 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute top-1/2 right-0 -z-10 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-accent-cool/10 blur-[100px]" />

      <div className="container mx-auto px-5 sm:px-6 md:px-8 mb-8 md:mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              <FileText className="h-3.5 w-3.5" />
              CV Templates
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-2">
              ATS-Friendly Resume{" "}
              <span className="text-primary">&amp; CV Samples</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Real samples from our writers — clean layouts that pass tracking
              systems and look sharp to recruiters.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              aria-label="Previous templates"
              onClick={() => nudge(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card hover:border-primary/40 hover:text-primary transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next templates"
              onClick={() => nudge(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card hover:border-primary/40 hover:text-primary transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <Link
              href="/samples/"
              className="ml-1 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
        onFocusCapture={() => {
          pausedRef.current = true;
        }}
        onBlurCapture={() => {
          pausedRef.current = false;
        }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="overflow-hidden py-3">
          <div
            ref={trackRef}
            className="flex w-max gap-5 pl-5 sm:pl-8 will-change-transform"
          >
            {LOOP.map((src, index) => {
              const sampleIndex = index % RESUME_SAMPLES.length;
              const isActive = sampleIndex === active;
              return (
                <Link
                  key={`${src}-${index}`}
                  href="/samples/"
                  className={cn(
                    "group relative shrink-0 overflow-hidden rounded-2xl border bg-card shadow-lg transition-all duration-300",
                    "w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px]",
                    isActive
                      ? "border-primary/50 shadow-primary/15 scale-[1.02]"
                      : "border-border/60 hover:border-primary/35 hover:-translate-y-1",
                  )}
                >
                  <div className="relative aspect-[3/4] bg-muted">
                    <Image
                      src={src}
                      alt={`Resume sample ${sampleIndex + 1}`}
                      fill
                      sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 300px, 320px"
                      className="object-cover object-top"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-1.5">
        {RESUME_SAMPLES.map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === active ? "w-6 bg-primary" : "w-1.5 bg-border",
            )}
          />
        ))}
      </div>
    </section>
  );
}
