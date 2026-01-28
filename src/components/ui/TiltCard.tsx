"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
    rotationFactor?: number
    scaleFactor?: number
}

export function TiltCard({
    children,
    className,
    rotationFactor = 15,
    scaleFactor = 1.05,
    ...props
}: TiltCardProps) {
    const ref = React.useRef<HTMLDivElement>(null)
    const [rotation, setRotation] = React.useState({ x: 0, y: 0 })
    const [scale, setScale] = React.useState(1)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -rotationFactor
        const rotateY = ((x - centerX) / centerX) * rotationFactor

        setRotation({ x: rotateX, y: rotateY })
    }

    const handleMouseEnter = () => {
        setScale(scaleFactor)
    }

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 })
        setScale(1)
    }

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale})`,
                transition: "transform 0.1s ease-out",
            }}
            className={cn("preserve-3d will-change-transform", className)}
            {...props}
        >
            {children}
        </div>
    )
}
