import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbsForPath } from "@/lib/seo";
import { UkHero } from "@/components/sections/areas/uk/UkHero";
import { UkTrusted } from "@/components/sections/areas/uk/UkTrusted";
import { UkOtherServices } from "@/components/sections/areas/uk/UkOtherServices";
import { UkProcess } from "@/components/sections/areas/uk/UkProcess";
import { UkSamples } from "@/components/sections/areas/uk/UkSamples";
import { UkWhyAts } from "@/components/sections/areas/uk/UkWhyAts";
import { UkDiyComparison } from "@/components/sections/areas/uk/UkDiyComparison";
import { UkWhoAndMistakes } from "@/components/sections/areas/uk/UkWhoAndMistakes";
import { UkFAQ } from "@/components/sections/areas/uk/UkFAQ";
import { UkCTA } from "@/components/sections/areas/uk/UkCTA";
import { Pricing } from "@/components/sections/Pricing";
import { Reviews } from "@/components/sections/Reviews";

export const metadata: Metadata = {
  title: "Get #1 ATS-Friendly Resume & CV Writing Services in the UK",
  description:
    "Hire us to get the best personally written ATS-friendly Resume Writing services in the UK. Get your resume written by certified UK resume writers at Discount",
  openGraph: {
    url: "https://resumesuplift.com/areas/uk/",
    title: "Get #1 ATS-Friendly Resume & CV Writing Services in the UK",
    description:
      "Hire us to get the best personally written ATS-friendly Resume Writing services in the UK. Get your resume written by certified UK resume writers at Discount",
  },
  twitter: {
    title: "Get #1 ATS-Friendly Resume & CV Writing Services in the UK",
    description:
      "Hire us to get the best personally written ATS-friendly Resume Writing services in the UK. Get your resume written by certified UK resume writers at Discount",
  },
  alternates: {
    canonical: "https://resumesuplift.com/areas/uk/",
  },
};

export default function UkAreaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbsForPath("/areas/uk/")} />
      <UkHero />
      <UkTrusted />
      <UkOtherServices />
      <UkProcess />
      <Pricing />
      <Reviews />
      <UkSamples />
      <UkWhyAts />
      <UkDiyComparison />
      <UkWhoAndMistakes />
      <UkFAQ />
      <UkCTA />
    </>
  );
}
