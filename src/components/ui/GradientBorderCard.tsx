"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GradientBorderCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    containerClassName?: string
}

export function GradientBorderCard({
    children,
    className,
    containerClassName,
    ...props
}: GradientBorderCardProps) {
    return (
        <div
            className={cn(
                "relative h-full rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5",
                containerClassName,
                className,
            )}
            {...props}
        >
            {children}
        </div>
    )
}
