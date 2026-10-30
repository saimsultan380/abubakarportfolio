"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

function useCountUp(
  end: number,
  options: {
    duration?: number;
    decimals?: number;
    suffix?: string;
    startOnView?: boolean;
    ref?: React.RefObject<HTMLElement | null>;
  } = {},
) {
  const {
    duration = 2000,
    decimals = 0,
    suffix = "",
    startOnView = true,
    ref,
  } = options;

  const [value, setValue] = React.useState(0);
  const [started, setStarted] = React.useState(!startOnView);

  React.useEffect(() => {
    if (!startOnView) {
      setStarted(true);
      return;
    }
    const el = ref?.current ?? document.querySelector("section");
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setStarted(true);
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [startOnView, ref]);

  React.useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = end * eased;
      setValue(current);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  return display + suffix;
}

export function SuccessStats() {
  const sectionRef = React.useRef<HTMLElement>(null);

  const liveCount = useCountUp(1000, {
    duration: 2000,
    suffix: "+",
    startOnView: true,
    ref: sectionRef,
  });
  const interviewsCount = useCountUp(80, {
    duration: 2000,
    decimals: 0,
    suffix: "%",
    startOnView: true,
    ref: sectionRef,
  });
  const yearsCount = useCountUp(4, {
    duration: 2000,
    suffix: "+",
    startOnView: true,
    ref: sectionRef,
  });
  const expertiseCount = useCountUp(100, {
    duration: 2000,
    suffix: "+",
    startOnView: true,
    ref: sectionRef,
  });
  const ratingCount = useCountUp(4.9, {
    duration: 2000,
    decimals: 1,
    suffix: "/5",
    startOnView: true,
    ref: sectionRef,
  });
  const countriesCount = useCountUp(35, {
    duration: 2000,
    suffix: "+",
    startOnView: true,
    ref: sectionRef,
  });

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-background relative overflow-hidden"
    >
      <div className="container px-4 mx-auto relative z-10">
        <div className="rounded-3xl border border-border bg-card shadow-2xl shadow-primary/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Illustration */}
            <div className="relative flex items-center justify-center bg-[#eef6ff] p-4 sm:p-6 lg:p-8">
              <Image
                src="/Your%20Career%2C%20Your%20Story%20Unforgettable.png"
                alt="Your Career, Your Story Unforgettable"
                width={2078}
                height={1152}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right: Content Side */}
            <div className="p-6 lg:p-10 flex flex-col justify-center bg-card">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-[0.2em] text-primary w-fit mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Proof of Results
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-4 tracking-tight text-foreground">
                Your Career, Your Story{" "}
                <span className="text-primary">Unforgettable.</span>
              </h2>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                We don't just write resumes; we craft career stories. Every resume is
                personalized, ATS-friendly, and designed to position you as the
                top candidate in your field.
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
                  <div className="text-3xl font-semibold tracking-tight text-foreground mb-1 tabular-nums">
                    {interviewsCount}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                    Interviews Secured
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-semibold tracking-tight text-foreground mb-1 tabular-nums">
                    {yearsCount}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                    Years of Experience
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-semibold tracking-tight text-foreground mb-1 tabular-nums">
                    {ratingCount}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                    Client Rating
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-semibold tracking-tight text-foreground mb-1 tabular-nums">
                    {expertiseCount}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                    Industry Expertise
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-semibold tracking-tight text-foreground mb-1 tabular-nums">
                    {liveCount}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                    Happy Clients
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-semibold tracking-tight text-foreground mb-1 tabular-nums">
                    {countriesCount}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                    Countries Served
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
