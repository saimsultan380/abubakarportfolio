"use client"

import * as React from "react"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: "ATS Resume/CV Writing",
    description:
      "Get a professional ATS-friendly resume writing service built to pass tracking systems. As expert resume writers, our team writes ATS CVs and resumes that land more interviews.",
    image: "/ats-resume-writing.svg",
    imageMobile: "/ats-resume-writing-mobile.svg",
    href: "/resume-request/",
  },
  {
    title: "Cover Letter Writing",
    description:
      "A strong cover letter builds your first impression fast. Our experts write personalized, keyword-rich cover letters that complement your resume and boost response rates.",
    image: "/cover-letter-writing.svg",
    imageMobile: "/cover-letter-writing-mobile.svg",
    href: "/cover-letter/",
  },
  {
    title: "Resume Revamp",
    description:
      "Outdated resume not getting you interview calls? We revamp your existing CV with modern formatting, stronger content, and ATS-friendly keywords for better results.",
    image: "/resume-revamp.svg",
    imageMobile: "/resume-revamp-mobile.svg",
    href: "/resume-rewriting/",
  },
  {
    title: "LinkedIn Profile Optimization",
    description:
      "Recruiters search LinkedIn daily. We optimize your profile with targeted keywords, a compelling summary & services, and a professional structure that increases recruiter visibility instantly.",
    image: "/linkedin-profile-optimization.svg",
    imageMobile: "/linkedin-profile-optimization-mobile.svg",
    href: "/linkedin-optimization/",
  },
  {
    title: "Career-Specific CV Writing",
    description:
      "Every industry needs a different approach. Being expert CV writers, we provide you with career-specific CVs according to your field, experience level, and target job role for maximum impact.",
    image: "/career-specific-cv.svg",
    imageMobile: "/career-specific-cv-mobile.svg",
    href: "/career-specific-cv/",
  },
] as const

function ServiceGraphic({
  image,
  imageMobile,
  title,
}: {
  image: string
  imageMobile: string
  title: string
}) {
  return (
    <div className="relative shrink-0 p-[15px] leading-none">
      <div className="overflow-hidden rounded-xl leading-none">
        <picture>
          <source media="(max-width: 767px)" srcSet={imageMobile} />
          <img
            src={image}
            alt=""
            width={480}
            height={300}
            className="m-0 block h-auto w-full max-w-none align-top"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      <span className="sr-only">{title} illustration</span>
    </div>
  )
}

export function Services() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const topRow = services.slice(0, 3)
  const bottomRow = services.slice(3)

  useGSAP(
    () => {
      gsap.fromTo(
        ".service-card",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "opacity,transform",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        },
      )
    },
    { scope: sectionRef },
  )

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-12 md:py-16"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent-warm/20 bg-accent-warm/10 px-3 py-1 text-xs font-medium text-accent-warm">
              <Star className="h-3 w-3 fill-accent-warm" />
              What We Offer
            </div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Our Core <span className="text-primary">Services</span>
            </h2>
          </div>

          <div className="hidden md:block">
            <Link
              href="/pricing/"
              className="group flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              View all pricing
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {topRow.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className={cn(
                  "service-card group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300",
                  "hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_12px_30px_-16px_rgba(52,134,209,0.35)]",
                )}
              >
                <ServiceGraphic
                  image={service.image}
                  imageMobile={service.imageMobile}
                  title={service.title}
                />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="mb-2.5 font-heading text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom row: two cards centered under the three */}
          <div className="mx-auto grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:w-[calc((100%-2.5rem)*2/3+1.25rem)] lg:gap-5">
            {bottomRow.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className={cn(
                  "service-card group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300",
                  "hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_12px_30px_-16px_rgba(52,134,209,0.35)]",
                )}
              >
                <ServiceGraphic
                  image={service.image}
                  imageMobile={service.imageMobile}
                  title={service.title}
                />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="mb-2.5 font-heading text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/pricing/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            View all pricing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#pricing"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
          >
            Choose Your Package
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            100% satisfaction guaranteed
          </p>
        </div>
      </div>
    </section>
  )
}
