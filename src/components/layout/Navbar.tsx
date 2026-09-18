"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import { ThemeToggle } from "@/components/ThemeToggle"
import { cn } from "@/lib/utils"
import { Menu, X, ArrowRight, Briefcase, PenTool, Edit, Target, Linkedin, ChevronDown, MapPin } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { AREA_LINKS } from "@/lib/areas"

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isAreasOpen, setIsAreasOpen] = React.useState(false)
    const [isMobileAreasOpen, setIsMobileAreasOpen] = React.useState(false)
    const areasRef = React.useRef<HTMLDivElement>(null)
    const navRef = React.useRef<HTMLElement>(null)
    const mobileMenuRef = React.useRef<HTMLDivElement>(null)
    const router = useRouter()
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close areas dropdown on outside click
    React.useEffect(() => {
        const onPointerDown = (e: PointerEvent) => {
            if (!areasRef.current) return
            if (!areasRef.current.contains(e.target as Node)) {
                setIsAreasOpen(false)
            }
        }
        document.addEventListener("pointerdown", onPointerDown)
        return () => document.removeEventListener("pointerdown", onPointerDown)
    }, [])

    React.useEffect(() => {
        setIsAreasOpen(false)
        setIsMobileAreasOpen(false)
    }, [pathname])

    // Body Scroll Lock
    React.useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isMobileMenuOpen])

    useGSAP(() => {
        gsap.from(".nav-desktop-item", {
            y: -20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        })
    }, { scope: navRef })

    const scrollToSection = React.useCallback((id: string, behavior: ScrollBehavior = "smooth") => {
        const el = document.getElementById(id)
        if (!el) return false

        const headerOffset = (navRef.current?.offsetHeight ?? 88) + 12
        const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
        window.scrollTo({ top: Math.max(0, top), behavior })

        // keep URL in sync without triggering default jump
        try {
            window.history.pushState(null, "", `/#${id}`)
        } catch {
            // ignore
        }
        return true
    }, [])

    const requestScrollAfterNavigation = React.useCallback((id: string) => {
        try {
            window.sessionStorage.setItem("pendingNavScrollId", id)
        } catch {
            // ignore
        }
    }, [])

    React.useEffect(() => {
        if (pathname !== "/") return

        let pendingId: string | null = null
        try {
            pendingId = window.sessionStorage.getItem("pendingNavScrollId")
        } catch {
            pendingId = null
        }
        if (!pendingId) return

        const start = Date.now()
        const maxMs = 2000
        const tick = () => {
            const ok = scrollToSection(pendingId!, "auto")
            if (ok || Date.now() - start > maxMs) {
                try {
                    window.sessionStorage.removeItem("pendingNavScrollId")
                } catch {
                    // ignore
                }
                return
            }
            window.setTimeout(tick, 50)
        }

        // allow a moment for sections to render
        window.setTimeout(tick, 0)
    }, [pathname, scrollToSection])

    const handleNavLinkClick = React.useCallback((href: string) => {
        return (e: React.MouseEvent) => {
            // Always close the mobile menu on navigation
            setIsMobileMenuOpen(false)

            // For normal routes like "/pricing", let Next.js handle navigation
            if (!href.includes("#")) return

            const id = href.split("#")[1]
            if (!id) return
            e.preventDefault()

            if (pathname === "/") {
                // same page: scroll immediately
                scrollToSection(id)
                return
            }

            // other page: navigate home, then scroll when ready
            requestScrollAfterNavigation(id)
            router.push("/")
        }
    }, [pathname, requestScrollAfterNavigation, router, scrollToSection])

    const navLinks = [
        { name: "Services", href: "/#services", icon: Briefcase },
        { name: "Cover Letter", href: "/cover-letter", icon: PenTool },
        { name: "Resume Revamp", href: "/resume-rewriting", icon: Edit },
        { name: "Career CV", href: "/career-specific-cv", icon: Target },
        { name: "LinkedIn", href: "/linkedin-optimization", icon: Linkedin },
    ]

    return (
        <>
            <header
                ref={navRef}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500",
                    isScrolled
                        ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)]"
                        : "py-6 bg-transparent"
                )}
            >
                <div className="container mx-auto pl-5 pr-5 sm:pl-6 sm:pr-6 md:pl-8 md:pr-8">
                    <nav className="flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="group flex items-center gap-3 text-xl font-bold tracking-tight text-foreground nav-desktop-item"
                        >
                            <Image
                                src="/brand/new%20logo.png"
                                alt="Resumes Uplift logo"
                                width={56}
                                height={56}
                                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                                priority
                            />
                            <span>Resumes <span className="text-primary">Uplift</span></span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1 bg-secondary/20 p-1 rounded-full border border-border/50 backdrop-blur-md nav-desktop-item">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleNavLinkClick(link.href)}
                                    className="px-5 py-2 text-sm font-bold text-muted-foreground hover:text-primary transition-all rounded-full hover:bg-background/50"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Areas dropdown */}
                            <div ref={areasRef} className="relative">
                                <button
                                    type="button"
                                    onClick={() => setIsAreasOpen((v) => !v)}
                                    className={cn(
                                        "inline-flex items-center gap-1 px-5 py-2 text-sm font-bold rounded-full transition-all",
                                        isAreasOpen || pathname.startsWith("/areas")
                                            ? "text-primary bg-background/50"
                                            : "text-muted-foreground hover:text-primary hover:bg-background/50",
                                    )}
                                    aria-expanded={isAreasOpen}
                                    aria-haspopup="menu"
                                >
                                    Areas
                                    <ChevronDown
                                        className={cn(
                                            "h-3.5 w-3.5 transition-transform",
                                            isAreasOpen && "rotate-180",
                                        )}
                                    />
                                </button>

                                {isAreasOpen && (
                                    <div
                                        role="menu"
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-2xl border border-border/70 bg-card p-2 shadow-xl shadow-black/10 z-50"
                                    >
                                        {AREA_LINKS.map((area) => (
                                            <Link
                                                key={area.href}
                                                href={area.href}
                                                role="menuitem"
                                                onClick={() => setIsAreasOpen(false)}
                                                className={cn(
                                                    "flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors",
                                                    pathname === area.href
                                                        ? "bg-primary/10 text-primary"
                                                        : "text-foreground hover:bg-muted hover:text-primary",
                                                )}
                                            >
                                                <Image
                                                    src={area.flagSrc}
                                                    alt={area.flagAlt}
                                                    width={20}
                                                    height={14}
                                                    className="h-3.5 w-5 shrink-0 rounded-[2px] object-cover shadow-sm ring-1 ring-border/60"
                                                />
                                                {area.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-4 nav-desktop-item">
                            <ThemeToggle />
                            <Link
                                href="/#contact"
                                onClick={handleNavLinkClick("/#contact")}
                                className="hidden md:inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
                            >
                                Hire Us
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>

                            {/* Mobile Toggle */}
                            <button
                                className="md:hidden p-2 text-foreground rounded-xl bg-secondary/50 border border-border transition-colors hover:bg-secondary"
                                onClick={() => setIsMobileMenuOpen(true)}
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu Overlay - Outside header for absolute isolation */}
            <div
                ref={mobileMenuRef}
                className={cn(
                    "fixed top-0 left-0 right-0 bottom-0 z-[200] bg-background w-full h-full transition-all duration-500 ease-in-out md:hidden flex flex-col",
                    isMobileMenuOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-full pointer-events-none"
                )}
            >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-border bg-background">
                    <Link
                        href="/"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 text-xl font-bold tracking-tight text-foreground"
                    >
                        <Image
                            src="/brand/new%20logo.png"
                            alt="Resumes Uplift logo"
                            width={56}
                            height={56}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                        <span>Resumes <span className="text-primary">Uplift</span></span>
                    </Link>
                    <button
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary border border-border text-foreground group active:scale-95 transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                </div>

                {/* Mobile Links */}
                <div className="flex-1 flex flex-col items-start justify-center p-8 gap-6 overflow-y-auto relative bg-background">
                    {/* Decorative Mesh */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[300px] w-[300px] bg-primary/10 blur-[100px] rounded-full" />

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={handleNavLinkClick(link.href)}
                            className="mobile-link group flex items-center gap-6 text-2xl xs:text-3xl sm:text-4xl font-bold font-heading text-foreground hover:text-primary transition-all italic tracking-tighter"
                        >
                            <div className="h-10 w-10 xs:h-12 xs:w-12 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors group-hover:rotate-[10deg]">
                                <link.icon className="h-5 w-5 xs:h-6 xs:w-6" />
                            </div>
                            {link.name}
                        </Link>
                    ))}

                    {/* Mobile Areas */}
                    <div className="w-full">
                        <button
                            type="button"
                            onClick={() => setIsMobileAreasOpen((v) => !v)}
                            className="mobile-link group flex w-full items-center gap-6 text-2xl xs:text-3xl sm:text-4xl font-bold font-heading text-foreground hover:text-primary transition-all italic tracking-tighter"
                        >
                            <div className="h-10 w-10 xs:h-12 xs:w-12 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <MapPin className="h-5 w-5 xs:h-6 xs:w-6" />
                            </div>
                            <span className="flex-1 text-left">Areas</span>
                            <ChevronDown
                                className={cn(
                                    "h-5 w-5 text-muted-foreground transition-transform",
                                    isMobileAreasOpen && "rotate-180 text-primary",
                                )}
                            />
                        </button>
                        {isMobileAreasOpen && (
                            <div className="mt-4 ml-16 space-y-3">
                                {AREA_LINKS.map((area) => (
                                    <Link
                                        key={area.href}
                                        href={area.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-3 text-lg sm:text-xl font-semibold text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <Image
                                            src={area.flagSrc}
                                            alt={area.flagAlt}
                                            width={24}
                                            height={16}
                                            className="h-4 w-6 shrink-0 rounded-[2px] object-cover shadow-sm ring-1 ring-border/60"
                                        />
                                        {area.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Footer */}
                <div className="p-8 border-t border-border bg-background">
                    <Link
                        href="/#contact"
                        onClick={handleNavLinkClick("/#contact")}
                        className="inline-flex h-16 w-full items-center justify-center rounded-2xl bg-primary px-8 text-base font-bold uppercase tracking-widest text-primary-foreground shadow-xl shadow-primary/20"
                    >
                        Elevate My Career
                        <ArrowRight className="ml-3 h-5 w-5" />
                    </Link>
                    <p className="mt-6 text-center text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                        Ready to get hired globally.
                    </p>
                </div>
            </div>
        </>


    )
}


