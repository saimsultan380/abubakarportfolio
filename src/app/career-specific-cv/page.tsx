import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbsForPath } from "@/lib/seo";
import { CareerCvHero } from "@/components/sections/career-cv/CareerCvHero";
import { CareerCvWhy } from "@/components/sections/career-cv/CareerCvWhy";
import { CareerCvExecutive } from "@/components/sections/career-cv/CareerCvExecutive";
import { CareerCvPricing } from "@/components/sections/career-cv/CareerCvPricing";
import { CareerCvIndustries } from "@/components/sections/career-cv/CareerCvIndustries";
import { CareerCvSpecificAndStages } from "@/components/sections/career-cv/CareerCvSpecificAndStages";
import { CareerCvWhatYouGet } from "@/components/sections/career-cv/CareerCvWhatYouGet";
import { CareerCvApart } from "@/components/sections/career-cv/CareerCvApart";
import { CareerCvProcess } from "@/components/sections/career-cv/CareerCvProcess";
import { CareerCvFAQ } from "@/components/sections/career-cv/CareerCvFAQ";
import { CareerCvCTA } from "@/components/sections/career-cv/CareerCvCTA";
import { Reviews } from "@/components/sections/Reviews";

export const metadata: Metadata = {
  title:
    "Career-Specific Professional ATS-Friendly CV Writing Service",
  description:
    "Get a career-specific CV written for your exact industry, career level, and role. Personalized, ATS-friendly, and built around real achievements, not templates.",
  openGraph: {
    url: "https://resumesuplift.com/career-specific-cv/",
    title:
      "Career-Specific Professional ATS-Friendly CV Writing Service",
    description:
      "Get a career-specific CV written for your exact industry, career level, and role. Personalized, ATS-friendly, and built around real achievements, not templates.",
  },
  twitter: {
    title:
      "Career-Specific Professional ATS-Friendly CV Writing Service",
    description:
      "Get a career-specific CV written for your exact industry, career level, and role. Personalized, ATS-friendly, and built around real achievements, not templates.",
  },
  alternates: {
    canonical: "https://resumesuplift.com/career-specific-cv/",
  },
};

export default function CareerSpecificCvPage() {
  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbsForPath("/career-specific-cv/")} />
      <CareerCvHero />
      <CareerCvWhy />
      <CareerCvExecutive />
      <CareerCvPricing />
      <Reviews />
      <CareerCvIndustries />
      <CareerCvSpecificAndStages />
      <CareerCvWhatYouGet />
      <CareerCvApart />
      <CareerCvProcess />
      <CareerCvFAQ />
      <CareerCvCTA />
    </>
  );
}
