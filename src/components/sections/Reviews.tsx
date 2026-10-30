"use client";

import * as React from "react";
import { MessageCircleHeart, Quote, Star } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type Review = {
  name: string;
  role: string;
  quote: string;
};

const REVIEWS: Review[] = [
  {
    name: "Mark Sekinobe, MBA",
    role: "Job Seeker",
    quote:
      "I've been getting interviews after interviews. I didn't need more experience — I needed a resume that showed the experience I already had.",
  },
  {
    name: "Sarah Mitchell",
    role: "Marketing Manager",
    quote:
      "Within two weeks of using my new resume, I landed three interview calls. The writing was clear, confident, and perfectly tailored to my target roles.",
  },
  {
    name: "James Okonkwo",
    role: "Software Engineer",
    quote:
      "My old CV was getting ignored. After the rewrite, recruiters started messaging me on LinkedIn. The ATS-friendly structure made a real difference.",
  },
  {
    name: "Priya Sharma",
    role: "Healthcare Professional",
    quote:
      "They turned my messy work history into a polished story. Unlimited revisions meant I never felt rushed — the final document felt 100% like me.",
  },
  {
    name: "Daniel Brooks",
    role: "Finance Analyst",
    quote:
      "Professional, fast, and incredibly thorough. My cover letter and resume finally matched. I got shortlisted for roles I previously couldn't crack.",
  },
  {
    name: "Amina Hassan",
    role: "Recent Graduate",
    quote:
      "As a fresh graduate, I had little experience to show. They highlighted my projects and skills so well that I secured my first full-time offer.",
  },
  {
    name: "Michael Chen",
    role: "Operations Lead",
    quote:
      "The one-on-one consultation was excellent. They understood my career goals and rewrote everything around measurable achievements.",
  },
  {
    name: "Emily Carter",
    role: "HR Specialist",
    quote:
      "Clean formatting, strong keywords, and zero fluff. As someone who reviews resumes for a living, I was impressed by the quality.",
  },
  {
    name: "Omar Farooq",
    role: "Project Manager",
    quote:
      "I was stuck in the same role for years. After Resumes Uplift, I started getting callbacks from companies I actually wanted to work for.",
  },
  {
    name: "Laura Jensen",
    role: "Career Switcher",
    quote:
      "Switching industries felt impossible until they reframed my transferable skills. The new CV opened doors I didn't think I could reach.",
  },
  {
    name: "David Nguyen",
    role: "Sales Executive",
    quote:
      "Delivery was quick and the writing was sharp. My LinkedIn profile and resume now tell the same story — recruiters notice that consistency.",
  },
  {
    name: "Fatima Al-Rashid",
    role: "Executive Assistant",
    quote:
      "They listened carefully and delivered a resume that felt premium without looking overdesigned. Exactly what modern hiring managers want.",
  },
];

const ROW_A = REVIEWS.filter((_, i) => i % 2 === 0);
const ROW_B = REVIEWS.filter((_, i) => i % 2 === 1);

function ReviewCard({ review }: { review: Review }) {
  return (
    <article
      className={cn(
        "group relative shrink-0 overflow-hidden rounded-3xl border border-border/60 bg-card",
        "w-[300px] sm:w-[340px] md:w-[380px]",
        "shadow-[0_12px_40px_-18px_rgba(0,0,0,0.3)]",
        "transition-transform duration-500 hover:-translate-y-1 hover:border-primary/35",
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-70" />
      <div className="p-5 sm:p-6 flex flex-col h-full min-h-[220px]">
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
          <Quote className="h-5 w-5 text-primary/30" />
        </div>

        <p className="text-sm sm:text-[15px] text-foreground/90 leading-relaxed flex-1">
          &ldquo;{review.quote}&rdquo;
        </p>

        <div className="mt-5 pt-4 border-t border-border/50 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
            {review.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-foreground truncate">
              {review.name}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {review.role}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({
  items,
  direction,
  speed = 0.35,
}: {
  items: Review[];
  direction: "left" | "right";
  speed?: number;
}) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const offsetRef = React.useRef(0);
  const pausedRef = React.useRef(false);
  const loop = React.useMemo(() => [...items, ...items], [items]);

  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;
    if (prefersReduced) return;

    let frame = 0;
    const dir = direction === "left" ? 1 : -1;

    if (direction === "right") {
      offsetRef.current = el.scrollWidth / 4;
    }

    const tick = () => {
      if (!pausedRef.current && el) {
        offsetRef.current += speed * dir;
        const half = el.scrollWidth / 2;
        if (half > 0) {
          if (offsetRef.current >= half) offsetRef.current -= half;
          if (offsetRef.current < 0) offsetRef.current += half;
        }
        el.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [direction, speed]);

  return (
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
      <div className="overflow-hidden py-2">
        <div
          ref={trackRef}
          className="flex w-max gap-5 will-change-transform pl-4 sm:pl-6"
        >
          {loop.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".reviews-header", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });
      gsap.from(".reviews-marquee", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="relative py-14 md:py-20 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[420px] w-[720px] rounded-full bg-primary/10 blur-[120px] opacity-60" />

      <div className="container px-5 sm:px-6 md:px-8 mx-auto mb-8 md:mb-12">
        <div className="reviews-header text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <MessageCircleHeart className="h-3.5 w-3.5" />
            Client Reviews
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-3 tracking-tight text-foreground">
            What clients shared{" "}
            <span className="text-primary">with us.</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Real feedback from professionals who used Resumes Uplift to land
            more interviews and better roles.
          </p>
        </div>
      </div>

      <div className="reviews-marquee relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-28 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-28 bg-gradient-to-l from-background to-transparent" />

        <div className="space-y-5">
          <MarqueeRow items={ROW_A} direction="left" speed={0.38} />
          <MarqueeRow items={ROW_B} direction="right" speed={0.32} />
        </div>
      </div>
    </section>
  );
}
