"use client"

import * as React from "react"
import { Quote, Star } from "lucide-react"
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards"

const reviews = [
    {
        name: "Sarah M.",
        role: "Marketing Specialist",
        location: "UK",
        platform: "Direct Client",
        content: "I started getting interviews within two weeks. My resume was completely restructured and optimized for ATS. The difference was immediate.",
        rating: 5,
    },
    {
        name: "Ahmed R.",
        role: "Software Engineer",
        location: "UAE",
        platform: "LinkedIn",
        content: "Professional, honest, and very strategic. The CV felt tailored exactly to my role. Highly recommended.",
        rating: 5,
    },
    {
        name: "Jessica T.",
        role: "Project Manager",
        location: "US",
        platform: "Upwork",
        content: "The turnaround was fast, but the quality was incredible. He highlighted achievements I didn't even think were important.",
        rating: 5,
    },
    {
        name: "David K.",
        role: "Financial Analyst",
        location: "Canada",
        platform: "Direct Client",
        content: "Worth every penny. The LinkedIn optimization alone doubled my profile views in 3 days. Got hired at a Big 4 firm.",
        rating: 5,
    },
    {
        name: "Emily W.",
        role: "UX Designer",
        location: "Germany",
        platform: "LinkedIn",
        content: "He knows exactly what recruiters are looking for. The design was clean but the content strategy was the real game changer.",
        rating: 5,
    },
    {
        name: "Michael B.",
        role: "Sales Director",
        location: "Australia",
        platform: "Referral",
        content: "I was skeptical about hiring a writer, but this was a game changer. Landed a VP role in 3 weeks.",
        rating: 5,
    },
    {
        name: "Linda C.",
        role: "Nurse Practitioner",
        location: "USA",
        platform: "Direct Client",
        content: "Helped me transition from clinical work to administration. The new CV positioned my transferable skills perfectly.",
        rating: 5,
    },
    {
        name: "Raj P.",
        role: "Data Scientist",
        location: "India/Remote",
        platform: "Upwork",
        content: "Technically accurate and well formatted. The ATS scan report provided was very reassuring.",
        rating: 5,
    },
    {
        name: "Sophie L.",
        role: "Content Writer",
        location: "France",
        platform: "LinkedIn",
        content: "As a writer myself, I'm picky. But his ability to synthesize my career into a punchy 2-pager was impressive.",
        rating: 5,
    },
    {
        name: "James H.",
        role: "Graduate",
        location: "UK",
        platform: "Direct Client",
        content: "Got my first grad scheme offer after using this CV. The structure really helped hide my lack of experience.",
        rating: 5,
    },
    {
        name: "Maria G.",
        role: "HR Manager",
        location: "Spain",
        platform: "LinkedIn",
        content: "I see resumes all day. This is exactly what we want to see. Clean, relevant, and no fluff.",
        rating: 5,
    },
    {
        name: "Tom W.",
        role: "Operations Lead",
        location: "USA",
        platform: "Referral",
        content: "Responsive, professional, and delivered early. The cover letter was specific to the company I applied for.",
        rating: 5,
    }
]

export function Reviews() {
    const firstRow = reviews.slice(0, 6)
    const secondRow = reviews.slice(6, 12)

    return (
        <section id="reviews" className="py-24 bg-zinc-50 dark:bg-black/40 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -z-10 h-[400px] w-[400px] bg-primary/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] bg-blue-500/5 blur-[100px] rounded-full" />

            <div className="container px-4 mx-auto mb-16">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                        <Star className="h-3 w-3 fill-primary" />
                        100+ Reviews
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                        Loved by Professionals <br />
                        <span className="text-primary">Globally.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Don't just take my word for it. Here's what 10+ real clients are saying.
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                <InfiniteMovingCards
                    items={firstRow.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                    direction="left"
                    speed={40}
                />
                <InfiniteMovingCards
                    items={secondRow.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                    direction="right"
                    speed={35}
                />
            </div>
        </section>
    )
}

function ReviewCard({ review }: { review: any }) {
    return (
        <div className="flex flex-col h-full justify-between select-none">
            <div className="mb-6 text-primary/20">
                <Quote className="h-8 w-8 fill-current" />
            </div>
            <p className="text-lg text-foreground mb-8 leading-relaxed font-medium">
                "{review.content}"
            </p>
            <div className="flex items-center justify-between border-t border-border/50 pt-6 mt-auto">
                <div>
                    <div className="font-bold text-base text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">
                        {review.role} • {review.location}
                    </div>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-secondary text-secondary-foreground border border-border">
                    {review.platform}
                </div>
            </div>
        </div>
    )
}
