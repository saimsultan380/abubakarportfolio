"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronUp, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/contact";

const WHATSAPP_MESSAGE =
  "Hi! I'm interested in your CV/resume and career services.";

type PurchaseEvent = {
  name: string;
  city: string;
  country: string;
  flagSrc: string;
  service: string;
  minutesAgo: number;
};

/** International client purchase notifications (social proof). */
const PURCHASE_EVENTS: PurchaseEvent[] = [
  {
    name: "James Mitchell",
    city: "London",
    country: "UK",
    flagSrc: "/flags/gb.png",
    service: "Mid Level Resume Package",
    minutesAgo: 2,
  },
  {
    name: "Sophie Laurent",
    city: "Toronto",
    country: "Canada",
    flagSrc: "/flags/ca.png",
    service: "LinkedIn Profile Optimization",
    minutesAgo: 5,
  },
  {
    name: "Daniel Okonkwo",
    city: "New York",
    country: "USA",
    flagSrc: "/flags/us.png",
    service: "Executive Level All-in-One",
    minutesAgo: 8,
  },
  {
    name: "Amelia Chen",
    city: "Sydney",
    country: "Australia",
    flagSrc: "/flags/au.png",
    service: "Resume Revamp Service",
    minutesAgo: 12,
  },
  {
    name: "Oliver Hansen",
    city: "Auckland",
    country: "New Zealand",
    flagSrc: "/flags/nz.png",
    service: "Cover Letter Writing",
    minutesAgo: 15,
  },
  {
    name: "Priya Sharma",
    city: "Wellington",
    country: "New Zealand",
    flagSrc: "/flags/nz.png",
    service: "Career-Specific CV Writing",
    minutesAgo: 18,
  },
  {
    name: "Lucas Ferreira",
    city: "Chicago",
    country: "USA",
    flagSrc: "/flags/us.png",
    service: "Entry Level Resume Package",
    minutesAgo: 22,
  },
  {
    name: "Emily Walsh",
    city: "Manchester",
    country: "UK",
    flagSrc: "/flags/gb.png",
    service: "Resume + LinkedIn Bundle",
    minutesAgo: 27,
  },
  {
    name: "Noah Tremblay",
    city: "Vancouver",
    country: "Canada",
    flagSrc: "/flags/ca.png",
    service: "Executive Resume Writing",
    minutesAgo: 31,
  },
  {
    name: "Grace Okafor",
    city: "Melbourne",
    country: "Australia",
    flagSrc: "/flags/au.png",
    service: "Cover Letter + LinkedIn",
    minutesAgo: 36,
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-7 w-7", className)}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function timeLabel(minutesAgo: number) {
  if (minutesAgo < 2) return "Just now";
  if (minutesAgo < 60) return `${minutesAgo} min ago`;
  return `${Math.floor(minutesAgo / 60)} hr ago`;
}

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [purchaseIndex, setPurchaseIndex] = React.useState(0);
  const [toastVisible, setToastVisible] = React.useState(false);
  const [toastExiting, setToastExiting] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cycle purchase toasts: show → hold → hide → next
  React.useEffect(() => {
    if (dismissed) return;

    let hideTimer: number | undefined;
    let exitTimer: number | undefined;
    let nextTimer: number | undefined;

    const showTimer = window.setTimeout(() => {
      setToastExiting(false);
      setToastVisible(true);

      hideTimer = window.setTimeout(() => {
        setToastExiting(true);
        exitTimer = window.setTimeout(() => {
          setToastVisible(false);
          setToastExiting(false);
          nextTimer = window.setTimeout(() => {
            setPurchaseIndex((i) => (i + 1) % PURCHASE_EVENTS.length);
          }, 4500);
        }, 350);
      }, 5500);
    }, 1800);

    return () => {
      window.clearTimeout(showTimer);
      if (hideTimer) window.clearTimeout(hideTimer);
      if (exitTimer) window.clearTimeout(exitTimer);
      if (nextTimer) window.clearTimeout(nextTimer);
    };
  }, [purchaseIndex, dismissed]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${CONTACT.phoneE164}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const purchase = PURCHASE_EVENTS[purchaseIndex];

  return (
    <>
      {/* Left: live purchase social proof */}
      <div className="fixed left-3 bottom-20 sm:left-6 sm:bottom-24 z-50 flex flex-col items-start gap-3 max-w-[min(92vw,320px)] pointer-events-none">
        {!dismissed && toastVisible && (
          <div
            className={cn(
              "pointer-events-auto w-full rounded-2xl border border-border/80 bg-background/95 backdrop-blur-md shadow-xl shadow-black/10 p-3 sm:p-3.5",
              toastExiting ? "purchase-toast-exit" : "purchase-toast-enter",
            )}
            role="status"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-background">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Just ordered
                </p>
                <p className="text-sm font-semibold text-foreground truncate">
                  {purchase.name}
                </p>
                <p className="text-xs text-muted-foreground leading-snug mt-0.5">
                  {purchase.service}
                </p>
                <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <Image
                    src={purchase.flagSrc}
                    alt=""
                    width={16}
                    height={11}
                    className="h-2.5 w-4 rounded-[1px] object-cover ring-1 ring-border/60"
                  />
                  <span>
                    {purchase.city}, {purchase.country}
                  </span>
                  <span className="opacity-40">·</span>
                  <span>{timeLabel(purchase.minutesAgo)}</span>
                </div>
              </div>
              <button
                type="button"
                aria-label="Dismiss purchase notifications"
                onClick={() => {
                  setDismissed(true);
                  setToastVisible(false);
                }}
                className="h-6 w-6 shrink-0 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center justify-center"
              >
                <span className="text-sm font-bold leading-none">×</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Left: scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={cn(
          "fixed left-3 bottom-4 sm:left-6 sm:bottom-6 z-50 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg transition-all duration-300 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
      </button>

      {/* Right: glowing WhatsApp */}
      <div className="fixed right-3 bottom-4 sm:right-6 sm:bottom-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="wa-soft-bounce relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          <span
            className="wa-glow-ring pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/50"
            aria-hidden
          />
          <span
            className="wa-glow-ring-delay pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/35"
            aria-hidden
          />
          <WhatsAppIcon className="relative z-10" />
        </a>
      </div>
    </>
  );
}
