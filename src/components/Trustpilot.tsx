"use client"

import * as React from "react"
import Script from "next/script"
import { cn } from "@/lib/utils"

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement, forceReload?: boolean) => void
    }
  }
}

const TRUSTPILOT_SCRIPT =
  "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"

const BUSINESS_UNIT_ID = "6acc0eb4d196610fec0e780d"
/** Micro Star — “Great” + star rating + Trustpilot branding */
const MICRO_STAR_TEMPLATE_ID = "5419b732fbfb950b10de65e5"
const TRUSTPILOT_PROFILE = "https://www.trustpilot.com/review/resumesuplift.com"

/** Loads Trustpilot bootstrap once sitewide (place in root layout). */
export function TrustpilotScript() {
  return (
    <Script
      id="trustpilot-bootstrap"
      src={TRUSTPILOT_SCRIPT}
      strategy="afterInteractive"
    />
  )
}

function loadTrustpilotWidget(el: HTMLElement | null) {
  if (!el || typeof window === "undefined") return false
  if (!window.Trustpilot?.loadFromElement) return false
  window.Trustpilot.loadFromElement(el, true)
  return true
}

/**
 * TrustBox Micro Star only.
 * Always uses Trustpilot light theme on a white chip so stars stay visible in dark mode.
 */
export function TrustpilotMicroStar({ className }: { className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const tryLoad = () => loadTrustpilotWidget(el)
    if (tryLoad()) return

    const id = window.setInterval(() => {
      if (tryLoad()) window.clearInterval(id)
    }, 300)
    const stop = window.setTimeout(() => window.clearInterval(id), 10000)

    return () => {
      window.clearInterval(id)
      window.clearTimeout(stop)
    }
  }, [])

  return (
    <div
      className={cn(
        "trustpilot-wrap inline-flex items-center rounded-md bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-black/5",
        className,
      )}
    >
      <div
        ref={ref}
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id={MICRO_STAR_TEMPLATE_ID}
        data-businessunit-id={BUSINESS_UNIT_ID}
        data-style-height="24px"
        data-style-width="100%"
        data-theme="light"
        data-style-alignment="left"
        style={{ minWidth: 220, width: 260, height: 24 }}
      >
        <a
          href={TRUSTPILOT_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-neutral-600"
        >
          Trustpilot
        </a>
      </div>
    </div>
  )
}
