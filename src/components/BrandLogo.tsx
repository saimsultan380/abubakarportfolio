"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

type BrandLogoProps = {
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

/**
 * Theme-aware brand mark.
 * Light: navy RU. Dark: white RU.
 * Uses html.dark CSS (not only Tailwind dark:) so the swap
 * always tracks next-themes' class on <html>.
 */
export function BrandLogo({
  className,
  width = 80,
  height = 48,
  priority = false,
}: BrandLogoProps) {
  return (
    <span
      className={cn(
        "brand-logo relative inline-flex items-center shrink-0",
        className,
      )}
    >
      <Image
        src="/logo-light.png"
        alt="Resumes Uplift logo"
        width={width}
        height={height}
        className="brand-logo-light h-full w-auto object-contain"
        priority={priority}
        unoptimized
      />
      <Image
        src="/logo-dark.png"
        alt="Resumes Uplift logo"
        width={width}
        height={height}
        className="brand-logo-dark h-full w-auto object-contain"
        priority={priority}
        unoptimized
      />
    </span>
  )
}
