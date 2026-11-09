"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-9 w-[3.75rem] shrink-0 items-center rounded-full p-1 transition-colors duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isDark
          ? "bg-[#1e293b] ring-1 ring-indigo-400/30"
          : "bg-[#e2e8f0] ring-1 ring-sky-300/40",
        className,
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Night mode" : "Day mode"}
    >
      {/* Track icons */}
      <Sun
        className={cn(
          "absolute left-2 h-3.5 w-3.5 transition-opacity duration-300",
          isDark ? "text-slate-500 opacity-40" : "text-amber-500 opacity-100",
        )}
        aria-hidden
      />
      <Moon
        className={cn(
          "absolute right-2 h-3.5 w-3.5 transition-opacity duration-300",
          isDark ? "text-indigo-200 opacity-100" : "text-slate-400 opacity-40",
        )}
        aria-hidden
      />

      {/* Sliding knob */}
      <span
        className={cn(
          "relative z-10 flex h-7 w-7 items-center justify-center rounded-full shadow-sm transition-all duration-300 ease-out",
          isDark
            ? "translate-x-[1.65rem] bg-gradient-to-br from-indigo-500 to-slate-800 text-indigo-100"
            : "translate-x-0 bg-gradient-to-br from-amber-300 to-orange-400 text-amber-950",
        )}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 fill-current" />
        ) : (
          <Sun className="h-3.5 w-3.5 fill-current" />
        )}
      </span>
    </button>
  )
}
