"use client"

import * as React from "react"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: "01",
    title: "Research & Analysis",
    description:
      "Our team of experts studies your career background, industry, and target role. This helps us identify the right keywords and skills to highlight in your resume.",
    image: "/process-step-1.svg",
    bg: "#E3EEFC",
    numColor: "#3486D1",
    layout: "wide" as const,
  },
  {
    number: "02",
    title: "Resume Drafting",
    description:
      "Your ATS-friendly resume gets written from scratch, with a focus on achievements, measurable results, and job-specific keywords that match your target position.",
    image: "/process-step-2.svg",
    bg: "#ECE8FD",
    numColor: "#7C5CDB",
    layout: "wide" as const,
  },
  {
    number: "03",
    title: "ATS Optimization Check",
    description:
      "Your resume runs through ATS resume checkers to confirm proper formatting, keyword placement, and compatibility with applicant tracking systems used by employers.",
    image: "/process-step-3.svg",
    bg: "#E2F4EC",
    numColor: "#1F9D63",
    layout: "tall" as const,
  },
  {
    number: "04",
    title: "Revisions",
    description:
      "After this, we refine the resume based on your feedback, working closely with you until every detail reflects your goals and career story accurately.",
    image: "/process-step-4.svg",
    bg: "#EAEEF6",
    numColor: "#2B7BB9",
    layout: "tall" as const,
  },
  {
    number: "05",
    title: "Final Delivery",
    description:
      "Finally, your finished, ATS-friendly resume in your preferred format, ready to send to recruiters and apply for jobs with confidence.",
    image: "/process-step-5.svg",
    bg: "#DFF3F3",
    numColor: "#14857F",
    layout: "tall" as const,
  },
] as const

export function HowItWorks() {
  const sectionRef = React.useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        ".process-card",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      )
    },
    { scope: sectionRef },
  )

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-12 md:py-16"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <div className="mb-3 inline-flex items-center rounded-full bg-[#EAF3FC] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#3486D1] dark:bg-primary/15 dark:text-primary">
            Our Process
          </div>
          <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight text-foreground md:mb-4 md:text-[44px] md:leading-[1.1]">
            How Our Resume Writing
            <br />
            <span className="text-primary">Process Works</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-[17px]">
            A simple, transparent 5-step process designed to get you hired
            faster.
          </p>
        </div>

        {/*
          Desktop: 6-col grid — steps 1–2 span 3 (wide), steps 3–5 span 2 (tall)
          Mobile: single column stack
        */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-6">
          {steps.map((step) => {
            const isWide = step.layout === "wide"
            return (
              <article
                key={step.number}
                className={cn(
                  "process-card relative overflow-hidden rounded-[28px]",
                  isWide
                    ? "md:col-span-3 md:flex md:min-h-[300px]"
                    : "md:col-span-2 md:flex md:flex-col",
                )}
                style={{ backgroundColor: step.bg }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-5 top-4 z-0 font-heading text-[50px] font-bold leading-none tracking-[-2px] md:right-7 md:top-4 md:text-[60px]"
                  style={{ color: step.numColor, opacity: 0.24 }}
                >
                  {step.number}
                </span>

                <div
                  className={cn(
                    "relative z-[1]",
                    isWide
                      ? "p-7 pb-2 md:w-1/2 md:py-10 md:pl-10 md:pr-0 md:pb-10"
                      : "px-7 pb-0 pt-9 md:px-9 md:pt-9",
                  )}
                >
                  <h3 className="mb-2.5 pr-14 font-heading text-2xl font-semibold tracking-[-0.3px] text-[#1A2332] md:text-[28px] md:leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[15px] font-medium leading-6 text-[#334155] md:text-[15.5px] md:leading-6">
                    {step.description}
                  </p>
                </div>

                <div
                  className={cn(
                    "relative z-[1]",
                    isWide
                      ? "mx-auto mt-1 w-[78%] md:absolute md:bottom-[-34px] md:right-5 md:mx-0 md:mt-0 md:w-[42%]"
                      : "mx-auto mt-2 w-[78%] md:mt-auto md:w-[66%] md:px-0",
                    !isWide && "md:mb-[-26px] md:pt-6",
                    isWide && "mb-[-18px] md:mb-0",
                  )}
                >
                  <img
                    src={step.image}
                    alt=""
                    width={440}
                    height={352}
                    className="block h-auto w-full"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-9 flex justify-center md:mt-10">
          <Link
            href="/pricing/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-[15px] font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90 active:scale-95 md:h-14 md:px-8 md:text-base"
          >
            Hire a Resume Writer
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
