"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { cn } from "@/lib/utils"

interface InfiniteMovingCardsProps {
    items: React.ReactNode[]
    direction?: "left" | "right"
    speed?: number // Speed in pixels per second
    pauseOnHover?: boolean
    className?: string
}

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = 50,
    pauseOnHover = true,
    className,
}: InfiniteMovingCardsProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollerRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        if (!containerRef.current || !scrollerRef.current) return

        const scroller = scrollerRef.current
        const itemsList = Array.from(scroller.children)

        // Duplicate items for infinite loop
        itemsList.forEach((item) => {
            const clone = item.cloneNode(true)
            scroller.appendChild(clone)
        })

        const totalWidth = scroller.scrollWidth / 2
        const duration = totalWidth / speed

        const animation = gsap.to(scroller, {
            x: direction === "left" ? -totalWidth : 0,
            duration: duration,
            ease: "none",
            repeat: -1,
            onReverseComplete: () => {
                gsap.set(scroller, { x: -totalWidth })
            },
            onComplete: () => {
                if (direction === "left") {
                    gsap.set(scroller, { x: 0 })
                }
            }
        })

        if (direction === "right") {
            gsap.set(scroller, { x: -totalWidth })
            animation.play()
            gsap.to(scroller, {
                x: 0,
                duration: duration,
                ease: "none",
                repeat: -1
            })
        }

        const hoverHandler = () => animation.pause()
        const leaveHandler = () => animation.play()

        if (pauseOnHover) {
            scroller.addEventListener("mouseenter", hoverHandler)
            scroller.addEventListener("mouseleave", leaveHandler)
        }

        return () => {
            animation.kill()
            if (pauseOnHover) {
                scroller.removeEventListener("mouseenter", hoverHandler)
                scroller.removeEventListener("mouseleave", leaveHandler)
            }
        }
    }, [items, direction, speed, pauseOnHover])

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className="flex w-max flex-nowrap gap-6 py-4"
            >
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className="w-[350px] md:w-[450px] shrink-0 relative rounded-2xl border border-border px-8 py-6 bg-background shadow-sm"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
