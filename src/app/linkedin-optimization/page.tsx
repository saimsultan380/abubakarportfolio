import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbsForPath } from "@/lib/seo";
import { LinkedInHero } from "@/components/sections/linkedin/LinkedInHero";
import { LinkedInWhatsIncluded } from "@/components/sections/linkedin/LinkedInWhatsIncluded";
import { LinkedInBenefitsStats } from "@/components/sections/linkedin/LinkedInBenefitsStats";
import { LinkedInPricing } from "@/components/sections/linkedin/LinkedInPricing";
import { LinkedInTransformation } from "@/components/sections/linkedin/LinkedInTransformation";
import { LinkedInProcess } from "@/components/sections/linkedin/LinkedInProcess";
import { LinkedInFAQ } from "@/components/sections/linkedin/LinkedInFAQ";
import { Reviews } from "@/components/sections/Reviews";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "LinkedIn Profile Optimization Service +90% Recruitment Boost",
  description:
    "Get LinkedIn Profile Optimization service for Individuals and Company LinkedIn pages at a discount. Increase Search Visibility, Networking Leads & Job Chances",
  openGraph: {
    url: "https://resumesuplift.com/linkedin-optimization/",
    title: "LinkedIn Profile Optimization Service +90% Recruitment Boost",
    description:
      "Get LinkedIn Profile Optimization service for Individuals and Company LinkedIn pages at a discount. Increase Search Visibility, Networking Leads & Job Chances",
  },
  twitter: {
    title: "LinkedIn Profile Optimization Service +90% Recruitment Boost",
    description:
      "Get LinkedIn Profile Optimization service for Individuals and Company LinkedIn pages at a discount. Increase Search Visibility, Networking Leads & Job Chances",
  },
  alternates: {
    canonical: "https://resumesuplift.com/linkedin-optimization/",
  },
};

export default function LinkedInOptimizationPage() {
  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbsForPath("/linkedin-optimization/")} />
      <LinkedInHero />
      <LinkedInWhatsIncluded />
      <LinkedInBenefitsStats />
      <LinkedInPricing />
      <Reviews />
      <LinkedInTransformation />
      <LinkedInProcess />
      <LinkedInFAQ />
      <CTA />
    </>
  );
}
