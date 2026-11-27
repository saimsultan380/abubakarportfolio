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

export function HowToWriteACoverLetter() {
  const cover = getBlogPost("how-to-write-a-cover-letter");

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
              A cover letter is your opportunity to speak directly to the hiring manager — to explain
              why you want this specific role, at this specific company, and why you are the right
              person for it. When done well, it turns a good CV into an irresistible application.
              When done poorly, it can undermine an otherwise strong candidacy.
            </p>
            <p>
              This guide explains exactly how to write a cover letter in 2025, what to include,
              what to avoid, and provides real cover letter examples you can adapt for your own
              job search — whether you are applying for your first job or your tenth.
            </p>
          </Prose>

          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-5 sm:p-7 space-y-3">
            <H3>Quick Answer: How Do You Write a Cover Letter?</H3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              A strong cover letter has four parts: a compelling opening that names the role and
              shows genuine interest, a middle section that highlights 2–3 specific achievements
              relevant to the job, a brief paragraph showing you understand the company, and a
              confident closing with a clear call to action. Keep it to one page, address it to a
              named person where possible, and tailor every letter to the specific role.
            </p>
          </div>

          <section className="space-y-5">
            <H2>What Is a Cover Letter and Do You Still Need One?</H2>
            <Prose>
              <p>
                A cover letter is a one-page document submitted alongside your CV or resume that
                introduces you to the employer, expands on your most relevant experience, and
                explains your motivation for applying. Unlike a CV — which is a factual record of
                your career — a cover letter lets your personality and enthusiasm come through.
              </p>
              <p>
                Do you still need one in 2025? In most cases, yes. A survey by ResumeLab found
                that 83% of hiring managers say cover letters are important when making hiring
                decisions, and 74% would prefer a candidate with a cover letter over one without
                — even if both CVs were equally strong. The exception is online applications
                where the cover letter field is optional and the ATS system does not pass it to
                the recruiter, but even then a strong letter can tip the balance.
              </p>
            </Prose>
            <Table
              headers={["Scenario", "Cover Letter Needed?", "Why"]}
              rows={[
                ["Job posting says 'required'", "Yes — always", "Non-submission disqualifies you"],
                ["Application has an optional field", "Yes — submit one", "Shows extra effort vs those who skip"],
                ["Referral / networking application", "Yes — personalise it", "Warm the connection further"],
                ["Mass-apply via LinkedIn Easy Apply", "Sometimes optional", "Often not seen by humans; focus on CV"],
                ["No posting — speculative application", "Yes — essential", "It IS your introduction"],
              ]}
            />
          </section>

          <section className="space-y-5">
            <H2>Cover Letter Format: Length, Layout and Structure</H2>
            <Prose>
              <p>
                Before writing a single word, you need to understand the correct format. A cover
                letter that is too long, too short, or laid out incorrectly signals a lack of
                professionalism — no matter how good the content is.
              </p>
            </Prose>
            <Table
              headers={["Element", "Recommendation"]}
              rows={[
                ["Length", "One page — 250 to 400 words is the ideal range"],
                ["Font", "Same font as your CV — 10–12pt, professional (e.g. Calibri, Georgia, Garamond)"],
                ["Margins", "1–1.25 inches on all sides"],
                ["Format", "Single-spaced paragraphs, one blank line between each"],
                ["File type", "PDF unless the employer requests Word (.docx)"],
                ["File name", "FirstName-LastName-CoverLetter-CompanyName.pdf"],
                ["Header", "Match your CV header — name, email, phone, LinkedIn"],
              ]}
            />
            <Prose>
              <p>
                Use a business-letter layout with your contact details at the top, the date, then
                the employer's name and address. Address the letter to a named person — research
                LinkedIn or the company website to find the hiring manager's name. "Dear Hiring
                Manager" is a last resort, not a first choice.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>How to Structure a Cover Letter: 4 Key Sections</H2>
            <Prose>
              <p>
                Every strong cover letter follows the same four-part structure. Here is exactly
                what to include in each section.
              </p>
            </Prose>

            <div className="rounded-2xl border border-border/60 divide-y divide-border/60">
              <div className="p-5 space-y-1">
                <p className="font-semibold text-foreground">Section 1 — The Opening (1–2 sentences)</p>
                <p className="text-sm text-muted-foreground">
                  Name the specific role you are applying for and where you found it. Then give
                  one compelling sentence that immediately signals you are the right person. Avoid
                  generic openers like "I am writing to apply for..." — open with energy and
                  specificity instead.
                </p>
              </div>
              <div className="p-5 space-y-1">
                <p className="font-semibold text-foreground">Section 2 — Your Value (2–3 paragraphs)</p>
                <p className="text-sm text-muted-foreground">
                  This is the core of your letter. Highlight 2–3 specific achievements that are
                  directly relevant to the job description. Use numbers wherever possible. Do not
                  simply repeat your CV — expand on the context, decisions, and impact behind your
                  strongest experiences.
                </p>
              </div>
              <div className="p-5 space-y-1">
                <p className="font-semibold text-foreground">Section 3 — Why This Company (1 paragraph)</p>
                <p className="text-sm text-muted-foreground">
                  Show that you have done your research. Mention something specific about the
                  company — a product, initiative, value, mission, or recent announcement — and
                  explain why it aligns with your own goals or values. This paragraph is what
                  separates a tailored letter from a template.
                </p>
              </div>
              <div className="p-5 space-y-1">
                <p className="font-semibold text-foreground">Section 4 — The Closing (2–3 sentences)</p>
                <p className="text-sm text-muted-foreground">
                  Express enthusiasm for the opportunity, refer to your CV, and include a clear
                  call to action — for example, "I would welcome the opportunity to discuss how
                  my background could contribute to your team." Sign off with "Yours sincerely"
                  if you addressed the letter to a named person, or "Yours faithfully" if you
                  used "Dear Hiring Manager."
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <H2>Cover Letter Examples: Good vs Weak Openings</H2>
            <Prose>
              <p>
                The opening sentence determines whether a recruiter reads on or moves on. Here are
                side-by-side examples of strong and weak cover letter openings, and what makes
                each work or fail.
              </p>
            </Prose>

            <div className="space-y-4">
              <H3>Opening Examples — Marketing Role</H3>
              <ExampleBox label="Strong opening — specific and confident" variant="good">
                "Having spent three years building and scaling Paid Social campaigns for
                e-commerce brands with budgets up to £500k, I was immediately drawn to the Senior
                Performance Marketing Manager role at Bloom & Co — particularly your focus on
                data-driven creative testing, which is an area I have a proven track record in."
              </ExampleBox>
              <ExampleBox label="Weak opening — generic and forgettable" variant="bad">
                "I am writing to express my interest in the Marketing Manager position at your
                company. I am a motivated and passionate marketing professional with several years
                of experience and I believe I would be a great fit for this role."
              </ExampleBox>
            </div>

            <div className="space-y-4">
              <H3>Opening Examples — Software Engineering Role</H3>
              <ExampleBox label="Strong opening — leads with impact" variant="good">
                "When I read that Veritas Technologies is rebuilding its core data pipeline
                infrastructure in Python and Apache Kafka, it felt like a direct match for the
                work I have been doing for the past two years at FinPulse — where I reduced
                data processing latency by 60% using an event-driven architecture on AWS."
              </ExampleBox>
              <ExampleBox label="Weak opening — no hook, no specifics" variant="bad">
                "I am excited to apply for the Software Engineer position. I have a degree in
                Computer Science and have been working in software development for two years.
                I believe I have the skills required for this role."
              </ExampleBox>
            </div>

            <div className="space-y-4">
              <H3>Opening Examples — Graduate / Entry Level</H3>
              <ExampleBox label="Strong opening — compensates for lack of experience" variant="good">
                "During my final year dissertation, I designed and deployed a machine learning
                model that predicted student dropout risk with 88% accuracy — a project that
                sparked my passion for applying data science to real social problems. I am
                applying for the Graduate Data Analyst role at Upskill because your mission
                to close the global skills gap aligns directly with the work I want to do."
              </ExampleBox>
              <ExampleBox label="Weak opening — apologetic and vague" variant="bad">
                "Although I do not have much professional experience, I am very enthusiastic
                about this role and eager to learn. I recently graduated with a degree in Data
                Science and I am looking for my first opportunity in the field."
              </ExampleBox>
            </div>
          </section>

          <section className="space-y-5">
            <H2>Full Cover Letter Example: Mid-Level Professional</H2>
            <Prose>
              <p>
                Here is a complete, job-ready cover letter example for a mid-level account manager
                role. You can use this as a template — replace the company name, role title, and
                specific details with your own.
              </p>
            </Prose>
            <div className="rounded-2xl border border-primary/30 overflow-hidden">
              <div className="px-5 py-3 bg-primary/5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Full Example — Account Manager Application
                </p>
              </div>
              <div className="px-6 py-5 space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>James Okafor<br />james.okafor@email.com | +44 7700 900 123 | linkedin.com/in/jamesokafor<br />14 November 2025</p>
                <p>Sarah Chen, Head of Sales<br />Nexum Software Ltd<br />London, EC2A 1AB</p>
                <p><strong>Re: Senior Account Manager — London (Job Ref: NS-2025-SAM)</strong></p>
                <p>
                  Dear Sarah,
                </p>
                <p>
                  After five years managing enterprise accounts in the B2B SaaS sector and
                  consistently landing in the top 10% of my company&apos;s sales team, I was immediately
                  excited to see the Senior Account Manager role at Nexum. Your focus on long-term
                  customer success — not just initial contract value — mirrors the approach I
                  have built my career around.
                </p>
                <p>
                  In my current role at CloudAxis, I manage a portfolio of 22 enterprise clients
                  with a combined ARR of £3.2m. Last year I grew my book by 34% through a
                  combination of upsell campaigns and proactive QBR processes that reduced churn
                  in my portfolio to under 3% — the lowest in the team. I also led the onboarding
                  of our largest-ever client (£480k ARR) by coordinating across four internal
                  departments and tailoring the implementation plan to their specific workflow.
                </p>
                <p>
                  I have followed Nexum&apos;s growth since you launched your AI-assisted analytics
                  module in Q2 — a product I have seen first-hand create measurable ROI for
                  similar clients in my current portfolio. I am genuinely excited about the
                  opportunity to sell a product I already believe in.
                </p>
                <p>
                  I have attached my CV for your review and would very much welcome the
                  opportunity to discuss how my experience could support Nexum&apos;s growth targets.
                  I am available for an interview at your convenience.
                </p>
                <p>Yours sincerely,<br />James Okafor</p>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <H2>Cover Letter Mistakes to Avoid</H2>
            <Prose>
              <p>
                Even well-written CVs can be undermined by a poor cover letter. Here are the most
                common cover letter mistakes — and how to fix each one.
              </p>
            </Prose>
            <Table
              headers={["Mistake", "Why It Hurts You", "Fix"]}
              rows={[
                ["Starting with 'I am writing to apply for...'", "Weak, generic opening — recruiters have read it 1,000 times", "Open with a specific achievement or insight that immediately signals fit"],
                ["Repeating your CV word for word", "Adds no new information; wastes the recruiter's time", "Expand on 2–3 key achievements with more context and impact than your CV allows"],
                ["Sending the same letter everywhere", "Hiring managers can spot a template letter instantly", "Tailor every letter — at minimum change the company name, role, and company-specific paragraph"],
                ["Focusing on what you want, not what you offer", "'I am looking for a role where I can grow' tells them nothing about you", "Frame everything around the value you bring, not what you hope to gain"],
                ["Making it too long", "No recruiter reads a two-page cover letter", "Stick to 250–400 words; every sentence must earn its place"],
                ["Using vague adjectives", "'Passionate', 'motivated', 'hard-working' — everyone says this", "Replace with evidence: a specific result or decision that demonstrates the quality"],
                ["Forgetting to proofread", "Typos signal carelessness — especially damaging in a first impression", "Read aloud, use spell-check, and ask someone else to review before sending"],
              ]}
            />
          </section>

          <section className="space-y-5">
            <H2>Cover Letter Tips for Specific Situations</H2>

            <div className="space-y-4">
              <H3>Cover Letter With No Experience</H3>
              <Prose>
                <p>
                  If you have little or no work experience, focus your cover letter on your
                  academic achievements, relevant coursework, volunteering, society leadership,
                  or personal projects. Lead with the skills these experiences built, not the
                  lack of professional history. Show research into the company and enthusiasm
                  for the specific role — these qualities are highly valued in entry-level candidates.
                </p>
              </Prose>
            </div>

            <div className="space-y-4">
              <H3>Cover Letter for a Career Change</H3>
              <Prose>
                <p>
                  When changing careers, your cover letter must work harder than your CV to explain
                  the transition. Directly address why you are moving and frame your previous
                  experience in terms of transferable skills. Lead with what your new industry
                  gains from your background — not what you hope to gain from the change. Be
                  honest about the transition; most hiring managers respect self-awareness and
                  clear motivation far more than a vague application that glosses over the change.
                </p>
              </Prose>
            </div>

            <div className="space-y-4">
              <H3>Cover Letter After a Gap in Employment</H3>
              <Prose>
                <p>
                  Employment gaps do not need to be hidden — but they do need to be addressed
                  briefly and confidently. If your gap was for caring responsibilities, health,
                  further study, or personal reasons, a single sentence is enough. If you used the
                  gap to freelance, volunteer, or upskill, mention it positively. Do not dwell on
                  the gap; redirect the reader&apos;s attention to what you bring to the role now.
                </p>
              </Prose>
            </div>

            <div className="space-y-4">
              <H3>Speculative Cover Letter (No Job Posting)</H3>
              <Prose>
                <p>
                  A speculative cover letter is sent to a company you admire, without a specific
                  job posting. It needs to be highly targeted — research the company&apos;s recent
                  activity, challenges, and direction, and explain precisely what role you could
                  play. Address it to the most relevant person (a team lead, department head, or
                  founder for smaller companies). Speculative applications have a higher success
                  rate than many people expect because there is less competition.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-4">
            <H2>Cover Letter Writing Checklist</H2>
            <BlogChecklist
              items={[
                "Addressed to a named person — not 'Dear Hiring Manager' if avoidable",
                "States the specific role and job reference number in the first paragraph",
                "Opens with a compelling, specific first sentence — not a generic opener",
                "Highlights 2–3 relevant achievements with numbers where possible",
                "Contains a company-specific paragraph showing genuine research",
                "Written in a professional but natural tone — not stiff or overly formal",
                "One page only — between 250 and 400 words",
                "Saved as a PDF with a professional file name",
                "Proofread at least twice — no typos, grammar errors, or wrong company name",
                "Signed off correctly: 'Yours sincerely' (named) or 'Yours faithfully' (unnamed)",
              ]}
            />
          </section>

          <div className="rounded-3xl bg-primary/5 border border-primary/20 p-6 sm:p-8 space-y-4">
            <H3>Want a Professional Cover Letter Written for You?</H3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Writing about yourself is one of the hardest parts of a job application. Our
              professional resume writers craft compelling, tailored cover letters — alongside
              complete CVs — that pass ATS, impress recruiters, and open doors. Every document
              is 100% human-written and customised to your target role and industry.
            </p>
            <Link
              href="/checkout"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get My Cover Letter Written
            </Link>
          </div>

          <BlogFaqAccordion
            items={[
              {
                q: "How long should a cover letter be?",
                a: "A cover letter should be one page — ideally between 250 and 400 words. That is long enough to make a compelling case for your candidacy, and short enough for a recruiter to read in under two minutes. If yours is running longer, cut any sentences that do not add specific value. Every word must earn its place.",
              },
              {
                q: "Should I address my cover letter to a specific person?",
                a: "Yes, wherever possible. Research the company website, LinkedIn, or even call reception to find the hiring manager's name. 'Dear [Name]' shows initiative and makes the letter feel personal. If you genuinely cannot find a name, 'Dear Hiring Manager' or 'Dear [Department] Team' is acceptable — but 'To Whom It May Concern' is now considered outdated.",
              },
              {
                q: "Can I use the same cover letter for multiple jobs?",
                a: "You can use a template as a starting point, but every cover letter must be tailored before sending. At minimum, change the company name, role title, and your company-specific paragraph. Hiring managers can immediately spot a generic letter — and it signals low effort. The more tailored your letter, the higher your chance of an interview.",
              },
              {
                q: "What should I include in a cover letter with no experience?",
                a: "Focus on transferable skills from education, volunteering, part-time work, society roles, or personal projects. Lead with what you have done, not what you lack. Show you have researched the company and explain why you are genuinely interested in this specific role. Enthusiasm, research, and relevant skills matter far more than a lengthy work history at the entry level.",
              },
              {
                q: "Should a cover letter repeat what is on my CV?",
                a: "No — a cover letter should expand on your CV, not repeat it. Use the letter to provide context your CV cannot: why you made a specific decision, the full impact of a project, what you learned, or why this particular role and company excites you. The two documents should complement each other, not duplicate each other.",
              },
            ]}
          />
        </div>
      </div>
    </article>
  );
}
