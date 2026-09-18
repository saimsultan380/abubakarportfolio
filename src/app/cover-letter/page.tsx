import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbsForPath } from "@/lib/seo";
import { CoverLetterHero } from "@/components/sections/cover-letter/CoverLetterHero";
import { CoverLetterTrust } from "@/components/sections/cover-letter/CoverLetterTrust";
import { CoverLetterWhyMatters } from "@/components/sections/cover-letter/CoverLetterWhyMatters";
import { CoverLetterPricing } from "@/components/sections/cover-letter/CoverLetterPricing";
import { CoverLetterProcess } from "@/components/sections/cover-letter/CoverLetterProcess";
import { CoverLetterWhoFor } from "@/components/sections/cover-letter/CoverLetterWhoFor";
import { CoverLetterDifferent } from "@/components/sections/cover-letter/CoverLetterDifferent";
import { CoverLetterPair } from "@/components/sections/cover-letter/CoverLetterPair";
import { CoverLetterDetailedProcess } from "@/components/sections/cover-letter/CoverLetterDetailedProcess";
import { CoverLetterFAQ } from "@/components/sections/cover-letter/CoverLetterFAQ";
import { CoverLetterCTA } from "@/components/sections/cover-letter/CoverLetterCTA";
import { Reviews } from "@/components/sections/Reviews";

export const metadata: Metadata = {
  title: "Best Cover Letter Writing Service that Uplifts Job Chances",
  description:
    "Impress employers with our expert Cover Letter Writing Services at Discounts. Hire our Cover Letter writers who boost your interview & job chances by +77%",
  openGraph: {
    url: "https://resumesuplift.com/cover-letter/",
    title: "Best Cover Letter Writing Service that Uplifts Job Chances",
    description:
      "Impress employers with our expert Cover Letter Writing Services at Discounts. Hire our Cover Letter writers who boost your interview & job chances by +77%",
  },
  twitter: {
    title: "Best Cover Letter Writing Service that Uplifts Job Chances",
    description:
      "Impress employers with our expert Cover Letter Writing Services at Discounts. Hire our Cover Letter writers who boost your interview & job chances by +77%",
  },
  alternates: {
    canonical: "https://resumesuplift.com/cover-letter/",
  },
};

export default function CoverLetterPage() {
  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbsForPath("/cover-letter/")} />
      <CoverLetterHero />
      <CoverLetterTrust />
      <CoverLetterWhyMatters />
      <CoverLetterPricing />
      <Reviews />
      <CoverLetterProcess />
      <CoverLetterWhoFor />
      <CoverLetterDifferent />
      <CoverLetterPair />
      <CoverLetterDetailedProcess />
      <CoverLetterFAQ />
      <CoverLetterCTA />
    </>
  );
}
