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

export function HowLongShouldAResumeBe() {
  const cover = getBlogPost("how-long-should-a-resume-be");

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
              How long should a resume be? It is one of the most common resume questions —
              and one of the most debated. The answer depends on your experience level,
              industry, and the country you are applying in. Get it wrong in either direction
              and you risk losing the recruiter before they reach your strongest qualifications.
            </p>
            <p>
              This guide gives you a clear, evidence-based answer and explains exactly what
              to cut, what to keep, and when a longer resume is not just acceptable but expected.
            </p>
          </Prose>

          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-5 sm:p-7 space-y-3">
            <H3>Quick Answer: How Long Should a Resume Be?</H3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              For most job seekers, one to two pages is the right resume length. Entry-level
              candidates and recent graduates should aim for one page. Mid-career professionals
              with 5–10 years of experience typically need two pages. Senior professionals,
              executives, and academics may use two to three pages when experience genuinely
              justifies it. Longer is never better — relevance is what matters.
            </p>
          </div>

          <section className="space-y-5">
            <H2>Resume Length by Experience Level</H2>
            <Table
              headers={["Experience Level", "Recommended Length", "Why"]}
              rows={[
                [
                  "Student / No experience",
                  "1 page",
                  "Limited history to show — keep it focused and clean",
                ],
                [
                  "Recent graduate (0–2 years)",
                  "1 page",
                  "Entry-level roles don't expect extensive history",
                ],
                [
                  "Mid-level professional (3–7 years)",
                  "1–2 pages",
                  "Enough experience to fill two pages meaningfully",
                ],
                [
                  "Senior professional (8–15 years)",
                  "2 pages",
                  "Deep experience requires space to present properly",
                ],
                [
                  "Executive / C-suite (15+ years)",
                  "2–3 pages",
                  "Board roles, P&L scope, and leadership history need detail",
                ],
                [
                  "Academic / Research",
                  "CV (no limit)",
                  "Publications, grants, and presentations warrant extended format",
                ],
              ]}
            />
          </section>

          <section className="space-y-4">
            <H2>Does Resume Length Really Matter to Recruiters?</H2>
            <Prose>
              <p>
                Yes — but not in the way most people think. Recruiters do not reject resumes
                for being two pages instead of one. They reject resumes that waste their time.
                A dense, overpacked single page is harder to read than a clean two-page resume
                with clear sections and white space.
              </p>
              <p>
                What recruiters actually react to is signal-to-noise ratio: how much useful,
                relevant information is on the page compared to how much filler, repetition,
                or outdated history they have to filter through.
              </p>
              <p>
                A 2010 Harvard Business School study found that two-page resumes were preferred
                for more senior roles, while one-page resumes performed better for entry-level
                positions. More recent recruiter surveys consistently confirm that{" "}
                <strong className="text-foreground">relevance and readability matter more than page count.</strong>
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>Resume Length by Country: UK, US, Canada, and Australia</H2>
            <Prose>
              <p>
                Resume length norms vary by country. What is considered standard in the United
                States may differ from expectations in the United Kingdom or Australia.
              </p>
            </Prose>
            <Table
              headers={["Country", "Standard Length", "Notes"]}
              rows={[
                [
                  "United States",
                  "1–2 pages",
                  "One page preferred for entry-level; two pages acceptable for experienced professionals",
                ],
                [
                  "United Kingdom",
                  "2 pages",
                  "Two-page CVs are the standard; one page can appear thin for experienced candidates",
                ],
                [
                  "Canada",
                  "1–2 pages",
                  "Follows similar conventions to the US; conciseness is valued",
                ],
                [
                  "Australia",
                  "2–3 pages",
                  "Slightly more detail expected; selection criteria responses may require additional length",
                ],
                [
                  "New Zealand",
                  "2 pages",
                  "Similar to Australia; two pages is the typical professional standard",
                ],
              ]}
            />
          </section>

          <section className="space-y-5">
            <H2>When Is a Two-Page Resume Appropriate?</H2>
            <Prose>
              <p>
                A two-page resume is appropriate — and often necessary — when:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>You have 5 or more years of relevant professional experience</li>
                <li>Your career history spans multiple roles with distinct responsibilities</li>
                <li>You hold multiple relevant qualifications, certifications, or licences</li>
                <li>Your achievements require specific detail to be meaningful</li>
                <li>You are applying for a senior, management, or executive role</li>
                <li>Industry norms in your field (e.g., UK CVs) expect more detail</li>
              </ul>
              <p>
                If trimming to one page means removing recent, relevant experience or
                compressing your most important achievements into unreadable bullet points,
                the second page is justified.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>When Should a Resume Be One Page?</H2>
            <Prose>
              <p>A one-page resume is the right choice when:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>You are a student, recent graduate, or early-career professional</li>
                <li>You have fewer than 5 years of professional experience</li>
                <li>You are applying in the US where one-page resumes are common for juniors</li>
                <li>All your most relevant experience fits cleanly on one page with proper spacing</li>
                <li>The role explicitly requests a one-page resume or CV</li>
              </ul>
              <p>
                Do not pad a one-page resume with unnecessary content just to fill space.
                White space and clear formatting make a resume easier to scan. A well-structured
                one-page document often beats a cluttered two-page one.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>What to Cut to Shorten Your Resume</H2>
            <Prose>
              <p>
                If your resume is running too long, review each section critically.
                Here is what is safe to cut and what to keep:
              </p>
            </Prose>
            <Table
              headers={["Cut This", "Keep This"]}
              rows={[
                [
                  "Jobs older than 10–15 years (unless uniquely relevant)",
                  "Recent roles with strong, relevant achievements",
                ],
                [
                  "Responsibilities you have repeated across multiple roles",
                  "Specific outcomes, results, and metrics",
                ],
                [
                  "An objective statement (outdated)",
                  "A tailored professional summary",
                ],
                [
                  "References or 'References available on request'",
                  "Certifications and licences relevant to the role",
                ],
                [
                  "Full postal address",
                  "City/country, LinkedIn URL, and phone number",
                ],
                [
                  "GCSEs / A-Levels if you have a university degree",
                  "Degree name, institution, classification, and graduation year",
                ],
                [
                  "Hobbies unrelated to the job",
                  "Volunteer work and extracurricular roles showing leadership",
                ],
              ]}
            />
          </section>

          <section className="space-y-5">
            <H2>Formatting Tips to Control Resume Length</H2>
            <Prose>
              <p>
                Before you delete content, try these formatting adjustments. You may be able
                to reduce your resume length without removing any important information:
              </p>
            </Prose>
            <div className="space-y-3">
              {[
                {
                  tip: "Reduce margins to 0.5–0.75 inches",
                  detail: "Standard one-inch margins take up significant space. Narrowing them slightly reclaims usable area without affecting readability.",
                },
                {
                  tip: "Use 10–11pt font for body text",
                  detail: "12pt is often too large for resume body text. 10.5pt with 1.15 line spacing reads cleanly and saves significant space.",
                },
                {
                  tip: "Use a two-column layout for skills or contact info",
                  detail: "Placing your contact details or skills in two columns rather than a vertical list frees up considerable vertical space.",
                },
                {
                  tip: "Combine short bullet points",
                  detail: "Three bullets covering the same theme can often be rewritten as one strong, detailed bullet point.",
                },
                {
                  tip: "Remove section dividers and extra line breaks",
                  detail: "Visual separators between sections take up space. Consistent heading styles and clean spacing are more efficient.",
                },
              ].map(({ tip, detail }) => (
                <div key={tip} className="rounded-xl border border-border/60 p-4 space-y-1">
                  <p className="font-semibold text-foreground text-sm">{tip}</p>
                  <p className="text-sm text-muted-foreground">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <H2>Three-Page Resumes: When Are They Acceptable?</H2>
            <Prose>
              <p>
                A three-page resume is acceptable in a small number of situations:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <strong className="text-foreground">Senior executives</strong> with 20+ years of experience across multiple major organisations
                </li>
                <li>
                  <strong className="text-foreground">Academic and research roles</strong> that require a full CV including publications, presentations, grants, and teaching history
                </li>
                <li>
                  <strong className="text-foreground">Government and federal applications</strong> (particularly in the US) that require comprehensive documentation
                </li>
                <li>
                  <strong className="text-foreground">Medical professionals</strong> with extensive clinical, research, and training history
                </li>
              </ul>
              <p>
                For standard corporate roles, three pages is too long. If you think you need
                three pages, review your content critically — most candidates can remove at
                least one full page of unnecessary or outdated material.
              </p>
            </Prose>
          </section>

          <section className="space-y-4">
            <H2>Resume Length Checklist</H2>
            <BlogChecklist
              items={[
                "Confirmed the right length for your experience level (1 or 2 pages)",
                "Removed jobs older than 10–15 years unless directly relevant",
                "Deleted objective statement — replaced with professional summary",
                "Removed 'References available on request'",
                "Cut repeated responsibilities that appear across multiple roles",
                "Removed GCSEs/A-Levels if you have a university degree",
                "Checked margins are 0.5–0.75 inches",
                "Confirmed font size is 10–11pt for body text",
                "Reviewed each bullet point — only kept those with specific, relevant detail",
              ]}
            />
          </section>

          <div className="rounded-3xl bg-primary/5 border border-primary/20 p-6 sm:p-8 space-y-4">
            <H3>Not Sure If Your Resume Is the Right Length?</H3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Our professional resume writers will make sure your resume is exactly the
              right length for your experience level and target role — no filler, no wasted
              space. Every word earns its place. All documents are ATS-optimised, 100%
              human-written, and tailored to your specific career goals.
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
                q: "Is a 2-page resume too long?",
                a: "No — a two-page resume is appropriate and often preferred for professionals with 5 or more years of experience. In the UK and Australia, two pages is the standard expectation. Only entry-level candidates and recent graduates are typically expected to keep their resume to one page.",
              },
              {
                q: "Should a resume be one page or two pages in 2024?",
                a: "It depends on your experience. Entry-level candidates: one page. Mid-career professionals: one to two pages. Senior professionals: two pages. The page count matters less than whether the content is relevant, well-structured, and easy to read quickly.",
              },
              {
                q: "Is it okay to have a 3-page resume?",
                a: "Only for executives with 20+ years of experience, academics with publications and grants to list, or certain government and medical roles that require comprehensive documentation. For most professional roles, three pages is too long and signals poor editing skills.",
              },
              {
                q: "How do I make my resume fit on one page?",
                a: "Remove jobs older than 10–15 years, cut repeated responsibilities, delete objective statements and references sections, reduce margins to 0.5–0.75 inches, use 10–11pt font, and combine short bullet points. If the content is genuinely relevant, two pages may be more appropriate than forcing everything onto one.",
              },
              {
                q: "Does a longer resume hurt your chances?",
                a: "Only if the extra length comes from filler, repetition, or outdated information. Recruiters are experienced readers — they recognise padding quickly and it reflects poorly on your ability to communicate concisely. A well-curated two-page resume will always outperform a bloated one-page or a padded three-page document.",
              },
            ]}
          />
        </div>
      </div>
    </article>
  );
}
