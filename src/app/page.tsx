import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CompanyMarquee } from "@/components/sections/CompanyMarquee";
import { Services } from "@/components/sections/Services";
import { SuccessStats } from "@/components/sections/SuccessStats";
import { WhyChooseMe } from "@/components/sections/WhyChooseMe";
import { Reviews } from "@/components/sections/Reviews";
import { RecentWork } from "@/components/sections/RecentWork";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "ATS-Optimized Resumes & CVs That Land You Interviews",
  description:
    "Get more interviews with ATS-optimized, recruiter-approved resumes tailored to your role and industry. Professional CV writing service with proven results.",
  alternates: {
    canonical: "https://resumesuplift.com/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyMarquee />
      <Services />
      <SuccessStats />
      <WhyChooseMe />
      <Reviews />
      <RecentWork />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
