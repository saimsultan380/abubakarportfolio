import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free CV Review — Get Expert Feedback on Your Resume",
  description:
    "Submit your CV for a professional review. Get expert feedback on your ATS compatibility, formatting, keywords, and overall impact. Free for all job seekers.",
  alternates: {
    canonical: "https://resumesuplift.com/cv-review/",
  },
  openGraph: {
    title: "Free CV Review — Get Expert Feedback on Your Resume | Resumes Uplift",
    description:
      "Submit your CV for a professional review. Get expert feedback on ATS compatibility, formatting, and keywords.",
    url: "https://resumesuplift.com/cv-review/",
  },
};

export default function CvReviewLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
