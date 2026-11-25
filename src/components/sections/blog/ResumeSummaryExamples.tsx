import type { ReactNode } from "react";
import Link from "next/link";
import { BlogCoverImage } from "@/components/sections/blog/BlogCoverImage";
import { BlogFaqAccordion } from "@/components/sections/blog/BlogFaqAccordion";
import { BlogChecklist } from "@/components/sections/blog/BlogChecklist";
import { getBlogPost } from "@/lib/blog";

function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-5 text-[15px] sm:text-base text-muted-foreground leading-relaxed">
      {children}
    </div>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-foreground pt-4">
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-xl sm:text-2xl font-bold font-heading tracking-tight text-foreground pt-2">
      {children}
    </h3>
  );
}

function ExampleBox({
  label,
  variant,
  children,
}: {
  label: string;
  variant: "good" | "bad";
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border overflow-hidden ${
        variant === "good"
          ? "border-primary/30"
          : "border-border/60"
      }`}
    >
      <div
        className={`px-5 py-3 ${
          variant === "good" ? "bg-primary/5" : "bg-muted/40"
        }`}
      >
        <p
          className={`text-xs font-bold uppercase tracking-widest ${
            variant === "good" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {label}
        </p>
      </div>
      <div className="px-5 py-4">
        <p className="text-sm text-muted-foreground italic leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border/60">
      <table className="w-full min-w-[520px] text-left text-sm">
        <thead className="bg-muted/50">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 font-semibold text-foreground border-b border-border/60"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/40 last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top text-muted-foreground">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ResumeSummaryExamples() {
  const cover = getBlogPost("resume-summary-examples");

  return (
    <article className="pt-8 md:pt-10 pb-16 md:pb-24">
      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {cover ? (
            <BlogCoverImage
              src={cover.image}
              alt={cover.imageAlt}
              priority
            />
          ) : null}

          <Prose>
            <p className="text-foreground/90 text-base sm:text-lg leading-relaxed">
              A resume summary is the first thing a recruiter reads. If it fails to communicate
              your value clearly in the first few seconds, your resume may be skipped — even if
              everything else is excellent. This guide explains what a resume summary is, how to
              write one, and provides real examples for every industry and experience level.
            </p>
            <p>
              Whether you are a fresh graduate, a mid-level professional, or a senior executive,
              you will find a resume summary example here that you can adapt to your own background.
            </p>
          </Prose>

          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-5 sm:p-7 space-y-3">
            <H3>Quick Answer: What Is a Resume Summary?</H3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              A resume summary is a 2–4 sentence paragraph at the top of your resume that
              highlights your most relevant experience, skills, and career goal. It replaces the
              outdated objective statement and gives recruiters an immediate reason to keep reading.
              A strong summary is specific, tailored to the role, and free of generic filler phrases.
            </p>
          </div>

          <section className="space-y-4">
            <H2>Resume Summary vs Objective Statement: What Is the Difference?</H2>
            <Prose>
              <p>
                These two terms are often confused, but they serve different purposes and
                target different audiences.
              </p>
            </Prose>
            <Table
              headers={["", "Resume Summary", "Objective Statement"]}
              rows={[
                ["Focus", "What you offer the employer", "What you want from the job"],
                ["Length", "2–4 sentences", "1–2 sentences"],
                ["Best for", "All experience levels", "Entry-level or career changers only"],
                ["Recommended?", "Yes — almost always", "Rarely — only if no experience"],
              ]}
            />
            <Prose>
              <p>
                For most candidates, a professional summary is more effective. It tells the
                recruiter why you are a strong fit — which is exactly what they want to know.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>How to Write a Resume Summary: The Formula</H2>
            <Prose>
              <p>
                Use this three-part structure to build a resume summary that is both compelling
                and ATS-optimised:
              </p>
            </Prose>
            <div className="rounded-2xl border border-border/60 divide-y divide-border/60">
              <div className="p-5 space-y-1">
                <p className="font-semibold text-foreground">Part 1 — Who you are</p>
                <p className="text-sm text-muted-foreground">
                  Your job title, years of experience, and industry. This anchors the recruiter
                  immediately and signals relevance.
                </p>
              </div>
              <div className="p-5 space-y-1">
                <p className="font-semibold text-foreground">Part 2 — What you do best</p>
                <p className="text-sm text-muted-foreground">
                  Your 2–3 strongest skills or areas of expertise, ideally using keywords from
                  the job description. This is where ATS matching happens.
                </p>
              </div>
              <div className="p-5 space-y-1">
                <p className="font-semibold text-foreground">Part 3 — The value you bring</p>
                <p className="text-sm text-muted-foreground">
                  One specific achievement, result, or area of impact that sets you apart from
                  other candidates with similar backgrounds.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <H2>Resume Summary Examples for Every Role and Level</H2>

            <div className="space-y-5">
              <H3>Resume Summary Examples — No Experience / Recent Graduate</H3>
              <ExampleBox label="Example 1 — Marketing Graduate" variant="good">
                "Marketing graduate with a First Class degree from the University of Manchester,
                specialising in digital marketing, SEO content, and consumer behaviour research.
                Managed social media channels for a 600-member student society, growing engagement
                by 40% over one academic year. Seeking an entry-level digital marketing role where
                I can apply analytical and creative skills to drive campaign performance."
              </ExampleBox>
              <ExampleBox label="Example 2 — Computer Science Graduate" variant="good">
                "Computer Science graduate with hands-on experience in Python, Java, and REST API
                development through three academic projects and an open-source contribution.
                Delivered a machine learning model for academic research with 92% classification
                accuracy. Eager to bring strong problem-solving skills and a collaborative mindset
                to a junior software engineering role."
              </ExampleBox>
            </div>

            <div className="space-y-5">
              <H3>Resume Summary Examples — Mid-Level Professional</H3>
              <ExampleBox label="Example — Project Manager (5 years)" variant="good">
                "PMP-certified Project Manager with 5 years of experience leading cross-functional
                teams across SaaS and financial services sectors. Delivered 12 consecutive projects
                on time and within budget, with an average stakeholder satisfaction score of 4.7/5.
                Skilled in Agile methodology, risk management, and stakeholder communication."
              </ExampleBox>
              <ExampleBox label="Example — Sales Executive (4 years)" variant="good">
                "Results-driven B2B Sales Executive with 4 years of experience in SaaS solutions,
                consistently exceeding quarterly targets by 20–35%. Closed a £480,000 enterprise
                deal — the largest in company history — through a consultative selling approach
                and C-suite relationship building. Strong track record in pipeline management,
                CRM systems, and new market development."
              </ExampleBox>
              <ExampleBox label="Example — Registered Nurse (6 years)" variant="good">
                "Registered Nurse with 6 years of experience in acute medical and surgical wards
                across NHS Trust hospitals. Proficient in patient assessment, medication administration,
                and multidisciplinary team coordination. Received the Team Leader Commendation Award
                in 2023 for improving ward handover efficiency by 25%."
              </ExampleBox>
            </div>

            <div className="space-y-5">
              <H3>Resume Summary Examples — Senior and Executive Level</H3>
              <ExampleBox label="Example — Marketing Director" variant="good">
                "Strategic Marketing Director with 12 years of experience scaling B2C and B2B brands
                across UK and North American markets. Led a team of 18 across content, paid media,
                and brand, delivering a 3x increase in qualified pipeline and a 60% improvement in
                customer acquisition cost over three years. Expert in full-funnel strategy, brand
                positioning, and performance analytics."
              </ExampleBox>
              <ExampleBox label="Example — Chief Financial Officer" variant="good">
                "Commercially focused CFO with 15 years of experience in financial leadership across
                technology, retail, and private equity-backed organisations. Spearheaded a £12m
                cost-reduction programme and led two successful M&A transactions totalling £85m.
                Board-level communicator with deep expertise in financial planning, treasury
                management, and investor relations."
              </ExampleBox>
            </div>

            <div className="space-y-5">
              <H3>Resume Summary Examples — Career Change</H3>
              <ExampleBox label="Example — Teacher to Corporate Trainer" variant="good">
                "Former secondary school teacher with 8 years of experience designing and delivering
                curriculum for diverse learners, transitioning into corporate Learning and Development.
                Strong facilitation, instructional design, and stakeholder engagement skills built
                across 200+ training sessions. Completed the CIPD Level 3 Award in Learning and
                Development and completed two freelance onboarding programmes for SMEs."
              </ExampleBox>
            </div>

            <div className="space-y-5">
              <H3>What a Weak Resume Summary Looks Like — and Why</H3>
              <ExampleBox label="Weak example — avoid this" variant="bad">
                "Motivated and results-oriented professional with a passion for excellence and a
                proven track record of success in a fast-paced environment. Looking for a challenging
                role that allows me to utilise my skills and grow professionally."
              </ExampleBox>
              <Prose>
                <p>
                  This summary fails because it contains no specific information. It could belong
                  to anyone in any industry. The recruiter learns nothing about your experience,
                  skills, or the value you bring.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-5">
            <H2>Resume Summary by Industry — Quick Reference</H2>
            <Table
              headers={["Industry", "Key Phrases to Include", "Avoid"]}
              rows={[
                ["Technology", "Tech stack, languages, Agile, delivered X systems", "Generic 'passionate about tech'"],
                ["Finance", "ACA/CFA qualified, P&L, budget value, compliance", "Vague 'financial experience'"],
                ["Healthcare", "RN/GMC registered, patient outcomes, ward type", "Unquantified 'patient care'"],
                ["Marketing", "Channel, budget managed, ROI, % growth", "'Creative thinker' without proof"],
                ["Sales", "Revenue target %, deal size, sector, methodology", "'Good communicator'"],
                ["Education", "Key stage, subject, Ofsted, student outcomes", "'Passionate about learning'"],
                ["HR", "CIPD, headcount, retention %, ER cases", "Vague 'people person'"],
              ]}
            />
          </section>

          <section className="space-y-4">
            <H2>Resume Summary Writing Checklist</H2>
            <BlogChecklist
              items={[
                "Opens with your job title and years of experience (or degree if entry-level)",
                "Contains 2–3 specific, relevant skills matching the job description",
                "Includes at least one quantified achievement or outcome",
                "Written in third person — no 'I' or 'my'",
                "Between 40 and 80 words — not too short, not too long",
                "Tailored to this specific job, not copied from your last application",
                "Free of clichés: no 'results-driven', 'passionate', 'hard worker'",
                "Passes ATS — includes keywords from the job posting",
              ]}
            />
          </section>

          <div className="rounded-3xl bg-primary/5 border border-primary/20 p-6 sm:p-8 space-y-4">
            <H3>Want a Professional Summary Written for Your Resume?</H3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Writing about yourself is one of the hardest parts of a job application.
              Our professional resume writers craft compelling summaries — and complete resumes —
              tailored to your experience, industry, and target role. Every document is 100%
              human-written and ATS-optimised.
            </p>
            <Link
              href="/checkout"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get My Resume Written
            </Link>
          </div>

          <BlogFaqAccordion
            items={[
              {
                q: "How long should a resume summary be?",
                a: "A resume summary should be 2 to 4 sentences, or approximately 40 to 80 words. It should be long enough to communicate your most relevant experience and strongest value, but short enough to be read quickly. Recruiters spend seconds on an initial review — your summary must make an immediate impression.",
              },
              {
                q: "Should I write a resume summary or objective?",
                a: "For most candidates, a professional summary is more effective than an objective statement. A summary focuses on what you offer the employer. An objective focuses on what you want from the job. Only use an objective statement if you have very limited work experience and need to explain a specific career direction.",
              },
              {
                q: "Can I use the same resume summary for every job?",
                a: "No. While you can use a template or starting point, your resume summary should be tailored to each job application. Read the job description and mirror its key language, skills, and priorities in your summary. A generic summary is easy for recruiters to spot and suggests low effort.",
              },
              {
                q: "What keywords should I include in my resume summary?",
                a: "Include keywords directly from the job description — job titles, required skills, tools, qualifications, and industry-specific terminology. These improve your ATS score and show the recruiter immediately that you understand the role. Avoid stuffing keywords unnaturally; they should fit naturally into your sentences.",
              },
              {
                q: "Should my resume summary be in first or third person?",
                a: "Third person — but without using your name. Write 'Marketing Manager with 7 years of experience' rather than 'I am a Marketing Manager with 7 years of experience.' The 'I' is implied. This is the standard professional convention for resume writing.",
              },
            ]}
          />
        </div>
      </div>
    </article>
  );
}
