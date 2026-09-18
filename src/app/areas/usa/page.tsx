import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbsForPath } from "@/lib/seo";
import { UsaHero } from "@/components/sections/areas/usa/UsaHero";
import { UsaTrusted } from "@/components/sections/areas/usa/UsaTrusted";
import { UsaOtherServices } from "@/components/sections/areas/usa/UsaOtherServices";
import { UsaProcess } from "@/components/sections/areas/usa/UsaProcess";
import { UsaWhyTrust } from "@/components/sections/areas/usa/UsaWhyTrust";
import { UsaSamples } from "@/components/sections/areas/usa/UsaSamples";
import { UsaOptimize } from "@/components/sections/areas/usa/UsaOptimize";
import { UsaComparison } from "@/components/sections/areas/usa/UsaComparison";
import { UsaCTA } from "@/components/sections/areas/usa/UsaCTA";
import { Pricing } from "@/components/sections/Pricing";
import { Reviews } from "@/components/sections/Reviews";

export const metadata: Metadata = {
  title: "ATS Resume Writing Service in the USA: Get Hired Fast in USA",
  description:
    "70%+ recruiters find AI resumes inauthentic. Get job-winning, human-written ATS resume and CV writing services in the USA from the best resume writers USA.",
  openGraph: {
    url: "https://resumesuplift.com/areas/usa/",
    title: "ATS Resume Writing Service in the USA: Get Hired Fast in USA",
    description:
      "70%+ recruiters find AI resumes inauthentic. Get job-winning, human-written ATS resume and CV writing services in the USA from the best resume writers USA.",
  },
  twitter: {
    title: "ATS Resume Writing Service in the USA: Get Hired Fast in USA",
    description:
      "70%+ recruiters find AI resumes inauthentic. Get job-winning, human-written ATS resume and CV writing services in the USA from the best resume writers USA.",
  },
  alternates: {
    canonical: "https://resumesuplift.com/areas/usa/",
  },
};

export default function UsaAreaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbsForPath("/areas/usa/")} />
      <UsaHero />
      <UsaTrusted />
      <UsaOtherServices />
      <Pricing />
      <Reviews />
      <UsaProcess />
      <UsaWhyTrust />
      <UsaSamples />
      <UsaOptimize />
      <UsaComparison />
      <UsaCTA />
    </>
  );
}
