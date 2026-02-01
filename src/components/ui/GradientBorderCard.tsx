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
        <div className={cn("relative group p-[1px] rounded-2xl overflow-hidden isolation-auto", containerClassName)}>
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-primary/25 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

            {/* Static Border Fallback */}
            <div className="absolute inset-0 bg-transparent rounded-2xl z-[-1]" />

            {/* Inner Content */}
            <div
                className={cn(
                    "relative h-full bg-card rounded-[15px] p-6 z-10 border border-border/60 shadow-sm transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/5",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </div>
    )
}
