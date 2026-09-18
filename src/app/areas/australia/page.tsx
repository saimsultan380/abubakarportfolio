import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbsForPath } from "@/lib/seo";
import { AusHero } from "@/components/sections/areas/australia/AusHero";
import { AusWhyMatters } from "@/components/sections/areas/australia/AusWhyMatters";
import { AusProfessional } from "@/components/sections/areas/australia/AusProfessional";
import { AusOtherServices } from "@/components/sections/areas/australia/AusOtherServices";
import { AusSamples } from "@/components/sections/areas/australia/AusSamples";
import { AusAtsKeyword } from "@/components/sections/areas/australia/AusAtsKeyword";
import { AusCareerAndIndustries } from "@/components/sections/areas/australia/AusCareerAndIndustries";
import { AusStrongFormat } from "@/components/sections/areas/australia/AusStrongFormat";
import { AusProcess } from "@/components/sections/areas/australia/AusProcess";
import { AusCitiesAndWhy } from "@/components/sections/areas/australia/AusCitiesAndWhy";
import { AusFAQ } from "@/components/sections/areas/australia/AusFAQ";
import { AusCTA } from "@/components/sections/areas/australia/AusCTA";
import { Pricing } from "@/components/sections/Pricing";
import { Reviews } from "@/components/sections/Reviews";

export const metadata: Metadata = {
  title: "Book Best ATS-friendly Resume Writing Services in Australia",
  description:
    "Get ATS-friendly resume writing services in Australia. Professionally written, job-targeted resumes built to showcase your skills and career achievements!",
  openGraph: {
    url: "https://resumesuplift.com/areas/australia/",
    title: "Book Best ATS-friendly Resume Writing Services in Australia",
    description:
      "Get ATS-friendly resume writing services in Australia. Professionally written, job-targeted resumes built to showcase your skills and career achievements!",
  },
  twitter: {
    title: "Book Best ATS-friendly Resume Writing Services in Australia",
    description:
      "Get ATS-friendly resume writing services in Australia. Professionally written, job-targeted resumes built to showcase your skills and career achievements!",
  },
  alternates: {
    canonical: "https://resumesuplift.com/areas/australia/",
  },
};

export default function AustraliaAreaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbsForPath("/areas/australia/")} />
      <AusHero />
      <AusWhyMatters />
      <AusProfessional />
      <AusOtherServices />
      <Pricing />
      <Reviews />
      <AusSamples />
      <AusAtsKeyword />
      <AusCareerAndIndustries />
      <AusStrongFormat />
      <AusProcess />
      <AusCitiesAndWhy />
      <AusFAQ />
      <AusCTA />
    </>
  );
}
