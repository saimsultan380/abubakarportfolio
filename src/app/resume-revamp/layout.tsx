import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume Revamp Form — Upgrade Your Existing CV",
  description:
    "Upload your current resume and tell us what to improve. We'll revamp it into an ATS-optimized, recruiter-approved CV tailored to your target roles.",
  alternates: {
    canonical: "https://resumesuplift.com/resume-revamp/",
  },
  robots: { index: false, follow: false },
};

export default function ResumeRevampLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
