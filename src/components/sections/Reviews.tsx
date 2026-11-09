"use client";

import * as React from "react";
import { ThumbsUp, MoreVertical } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { TrustpilotMicroStar } from "@/components/Trustpilot";

gsap.registerPlugin(ScrollTrigger);

type Review = {
  name: string;
  quote: string;
  date: string;
  avatarColor: string;
  reviewsCount?: number;
  localGuide?: boolean;
};

/** Google-style avatar palette */
const AVATAR_COLORS = [
  "#1a73e8",
  "#d93025",
  "#188038",
  "#f9ab00",
  "#9334e6",
  "#e37400",
  "#007b83",
  "#c5221f",
  "#1967d2",
  "#137333",
  "#e8710a",
  "#7627bb",
] as const;

const REVIEWS: Review[] = [
  {
    name: "Mark Sekinobe, MBA",
    date: "2 weeks ago",
    avatarColor: AVATAR_COLORS[0],
    localGuide: true,
    reviewsCount: 14,
    quote:
      "I've been getting interviews after interviews. I didn't need more experience — I needed a resume that showed the experience I already had.",
  },
  {
    name: "Sarah Mitchell",
    date: "a month ago",
    avatarColor: AVATAR_COLORS[1],
    reviewsCount: 8,
    quote:
      "Within two weeks of using my new resume, I landed three interview calls. The writing was clear, confident, and perfectly tailored to my target roles.",
  },
  {
    name: "James Okonkwo",
    date: "3 weeks ago",
    avatarColor: AVATAR_COLORS[2],
    localGuide: true,
    reviewsCount: 22,
    quote:
      "My old CV was getting ignored. After the rewrite, recruiters started messaging me on LinkedIn. The ATS-friendly structure made a real difference.",
  },
  {
    name: "Priya Sharma",
    date: "5 days ago",
    avatarColor: AVATAR_COLORS[3],
    reviewsCount: 6,
    quote:
      "They turned my messy work history into a polished story. Unlimited revisions meant I never felt rushed — the final document felt 100% like me.",
  },
  {
    name: "Daniel Brooks",
    date: "2 months ago",
    avatarColor: AVATAR_COLORS[4],
    localGuide: true,
    reviewsCount: 31,
    quote:
      "Professional, fast, and incredibly thorough. My cover letter and resume finally matched. I got shortlisted for roles I previously couldn't crack.",
  },
  {
    name: "Amina Hassan",
    date: "a week ago",
    avatarColor: AVATAR_COLORS[5],
    reviewsCount: 3,
    quote:
      "As a fresh graduate, I had little experience to show. They highlighted my projects and skills so well that I secured my first full-time offer.",
  },
  {
    name: "Michael Chen",
    date: "4 weeks ago",
    avatarColor: AVATAR_COLORS[6],
    reviewsCount: 11,
    quote:
      "The one-on-one consultation was excellent. They understood my career goals and rewrote everything around measurable achievements.",
  },
  {
    name: "Emily Carter",
    date: "6 days ago",
    avatarColor: AVATAR_COLORS[7],
    localGuide: true,
    reviewsCount: 19,
    quote:
      "Clean formatting, strong keywords, and zero fluff. As someone who reviews resumes for a living, I was impressed by the quality.",
  },
  {
    name: "Omar Farooq",
    date: "3 months ago",
    avatarColor: AVATAR_COLORS[8],
    reviewsCount: 9,
    quote:
      "I was stuck in the same role for years. After Resumes Uplift, I started getting callbacks from companies I actually wanted to work for.",
  },
  {
    name: "Laura Jensen",
    date: "a month ago",
    avatarColor: AVATAR_COLORS[9],
    reviewsCount: 7,
    quote:
      "Switching industries felt impossible until they reframed my transferable skills. The new CV opened doors I didn't think I could reach.",
  },
  {
    name: "David Nguyen",
    date: "2 weeks ago",
    avatarColor: AVATAR_COLORS[10],
    localGuide: true,
    reviewsCount: 16,
    quote:
      "Delivery was quick and the writing was sharp. My LinkedIn profile and resume now tell the same story — recruiters notice that consistency.",
  },
  {
    name: "Fatima Al-Rashid",
    date: "8 days ago",
    avatarColor: AVATAR_COLORS[11],
    reviewsCount: 5,
    quote:
      "They listened carefully and delivered a resume that felt premium without looking overdesigned. Exactly what modern hiring managers want.",
  },
];

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function GoogleStars({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-[1px]", className)} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
          <path
            fill="#FBBC04"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const initial = review.name.trim().charAt(0).toUpperCase();
  const metaParts = [
    review.localGuide ? "Local Guide" : null,
    review.reviewsCount ? `${review.reviewsCount} reviews` : null,
  ].filter(Boolean);

  return (
    <article
      className={cn(
        "shrink-0 w-[300px] sm:w-[320px] md:w-[340px]",
        "rounded-xl border border-[#dadce0] dark:border-border bg-white dark:bg-card",
        "shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)]",
        "px-4 py-3.5",
      )}
    >
      {/* Header: avatar + name + Google mark */}
      <div className="flex items-start gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[15px] font-medium text-white select-none"
          style={{ backgroundColor: review.avatarColor }}
          aria-hidden
        >
          {initial}
        </div>

        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[14px] font-medium leading-5 text-[#202124] dark:text-foreground truncate">
                {review.name}
              </p>
              {metaParts.length > 0 && (
                <p className="text-[12px] leading-4 text-[#70757a] dark:text-muted-foreground truncate mt-0.5">
                  {metaParts.join(" · ")}
                </p>
              )}
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <GoogleG className="h-4 w-4" />
              <MoreVertical className="h-4 w-4 text-[#5f6368] dark:text-muted-foreground opacity-70" aria-hidden />
            </div>
          </div>
        </div>
      </div>

      {/* Stars + date — Google Maps style */}
      <div className="mt-2.5 flex items-center gap-2">
        <GoogleStars />
        <span className="text-[12px] leading-4 text-[#70757a] dark:text-muted-foreground">
          {review.date}
        </span>
      </div>

      {/* Review body */}
      <p className="mt-2 text-[14px] leading-5 text-[#3c4043] dark:text-foreground/90 line-clamp-4">
        {review.quote}
      </p>

      {/* Footer actions */}
      <div className="mt-3 flex items-center gap-5 text-[12px] font-medium text-[#5f6368] dark:text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <ThumbsUp className="h-3.5 w-3.5" strokeWidth={2} />
          Like
        </span>
        <span>Share</span>
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
          className="flex w-max gap-4 will-change-transform pl-4 sm:pl-6"
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

      <div className="container px-5 sm:px-6 md:px-8 mx-auto mb-8 md:mb-10">
        <div className="reviews-header text-center max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-card border border-[#dadce0] dark:border-border shadow-sm">
              <GoogleG className="h-4 w-4" />
              <span className="text-xs font-semibold text-[#3c4043] dark:text-foreground tracking-wide">
                Google Reviews
              </span>
              <GoogleStars />
              <span className="text-xs font-medium text-[#70757a] dark:text-muted-foreground">
                5.0
              </span>
            </div>
            <TrustpilotMicroStar />
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

        <MarqueeRow items={REVIEWS} direction="left" speed={0.36} />
      </div>
    </section>
  );
}
