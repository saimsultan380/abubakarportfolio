"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Award, Users, MessageSquare, Briefcase, Eye } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "40x",
    title: "More Recruiter Search Discoveries",
    description: "Profiles with complete SEO alignment and all-star ratings appear up to 40 times more often in headhunter searches.",
    subtext: "Get found before you even submit an application.",
    icon: Eye,
  },
  {
    value: "71%",
    title: "Higher Interview Callback Rate",
    description: "Hiring managers favor candidates whose LinkedIn profile reinforces and expands upon their resume credentials.",
    subtext: "Turn passive profile views into confirmed interviews.",
    icon: Award,
  },
  {
    value: "22x",
    title: "More Inbound Recruiter Profile Views",
    description: "Profiles optimized with industry-standard skills and keyword density generate significantly more recruiter clicks.",
    subtext: "Skills structured to pass algorithm filters.",
    icon: TrendingUp,
  },
  {
    value: "87%",
    title: "of Recruiters Vet Talent on LinkedIn",
    description: "Headhunters and hiring leaders actively check LinkedIn to verify your leadership, achievements, and peer endorsements.",
    subtext: "Be authoritative where hiring decisions happen.",
    icon: Users,
  },
  {
    value: "+52%",
    title: "More Inbound InMail & Job Inquiries",
    description: "An active, keyword-rich profile prompts recruiters to message you directly about unlisted and executive roles.",
    subtext: "Inbound job opportunities delivered to your inbox.",
    icon: MessageSquare,
  },
  {
    value: "85%",
    title: "of High-Paying Roles Filled via Sourcing",
    description: "Top corporate and executive positions are rarely won on job boards—they go to sourced, optimized LinkedIn candidates.",
    subtext: "Position yourself for hidden market opportunities.",
    icon: Briefcase,
  },
];

export function LinkedInBenefitsStats() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".li-stat-card",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-background relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 h-[400px] w-[500px] bg-primary/10 blur-[130px] rounded-full" />

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3 border border-primary/20">
            <TrendingUp className="h-3.5 w-3.5" />
            Data-Backed Recruiter Metrics
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3 leading-tight">
            Why Profile Optimization Matters: <br />
            <span className="text-primary">What an Optimized Profile Delivers</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Real industry data demonstrating the direct impact of professional LinkedIn optimization on executive callbacks and career velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="li-stat-card">
              <SpotlightCard
                className="h-full p-6 sm:p-7 flex flex-col justify-between rounded-3xl border border-border/70 bg-card hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden group"
                spotlightColor="rgba(var(--primary-rgb), 0.12)"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-primary">
                      {stat.value}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <stat.icon className="h-5 w-5" />
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 font-heading leading-snug">
                    {stat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-border/50">
                  <p className="text-xs sm:text-sm font-semibold text-accent-warm flex items-center gap-1.5">
                    &rarr; {stat.subtext}
                  </p>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
