import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbsForPath } from "@/lib/seo";
import { ResumeRewritingHero } from "@/components/sections/resume-rewriting/ResumeRewritingHero";
import { ResumeRewritingWhy } from "@/components/sections/resume-rewriting/ResumeRewritingWhy";
import { ResumeRewritingPricing } from "@/components/sections/resume-rewriting/ResumeRewritingPricing";
import { ResumeRewritingSignsIncluded } from "@/components/sections/resume-rewriting/ResumeRewritingSignsIncluded";
import { ResumeRewritingComparison } from "@/components/sections/resume-rewriting/ResumeRewritingComparison";
import { ResumeRewritingProcess } from "@/components/sections/resume-rewriting/ResumeRewritingProcess";
import { ResumeRewritingWhoFor } from "@/components/sections/resume-rewriting/ResumeRewritingWhoFor";
import { ResumeRewritingFAQ } from "@/components/sections/resume-rewriting/ResumeRewritingFAQ";
import { ResumeRewritingCTA } from "@/components/sections/resume-rewriting/ResumeRewritingCTA";
import { Reviews } from "@/components/sections/Reviews";

export const metadata: Metadata = {
  title: "Best Resume Revamp Services: ATS Resume Rewriting by Experts",
  description:
    "Get your outdated resume revamped by expert resume writers. ATS-friendly formatting, keyword optimization, modern design, and stronger content that boosts your job chances by +90%.",
  openGraph: {
    url: "https://resumesuplift.com/resume-rewriting/",
    title: "Best Resume Revamp Services: ATS Resume Rewriting by Experts",
    description:
      "Get your outdated resume revamped by expert resume writers. ATS-friendly formatting, keyword optimization, modern design, and stronger content that boosts your job chances by +90%.",
  },
  twitter: {
    title: "Best Resume Revamp Services: ATS Resume Rewriting by Experts",
    description:
      "Get your outdated resume revamped by expert resume writers. ATS-friendly formatting, keyword optimization, modern design, and stronger content that boosts your job chances by +90%.",
  },
  alternates: {
    canonical: "https://resumesuplift.com/resume-rewriting/",
  },
};

export default function ResumeRewritingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbsForPath("/resume-rewriting/")} />
      <ResumeRewritingHero />
      <ResumeRewritingWhy />
      <ResumeRewritingPricing />
      <Reviews />
      <ResumeRewritingSignsIncluded />
      <ResumeRewritingComparison />
      <ResumeRewritingProcess />
      <ResumeRewritingWhoFor />
      <ResumeRewritingFAQ />
      <ResumeRewritingCTA />
    </>
  );
}
