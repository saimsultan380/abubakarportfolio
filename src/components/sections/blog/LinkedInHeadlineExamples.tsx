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

export function LinkedInHeadlineExamples() {
  const cover = getBlogPost("linkedin-headline-examples");

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
              Your LinkedIn headline is the most visible line on your entire profile. It appears
              next to your name in search results, connection requests, comments, and recruiter
              searches — making it the single piece of text that most people read about you,
              most often. Yet most professionals leave it set to their default job title, missing
              a significant opportunity to stand out.
            </p>
            <p>
              This guide explains exactly how to write a LinkedIn headline that attracts
              recruiters and opportunities, provides 30+ real LinkedIn headline examples across
              industries and career levels, and gives you a proven formula to build your own in
              under five minutes.
            </p>
          </Prose>

          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-5 sm:p-7 space-y-3">
            <H3>Quick Answer: What Makes a Great LinkedIn Headline?</H3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              A great LinkedIn headline combines your current role or expertise, the value you
              deliver, and 1–2 specific keywords that recruiters in your field search for — all
              within LinkedIn&apos;s 220-character limit. The best headlines are specific, not
              generic; they describe what you do and who you help, not just your job title.
              Avoid vague phrases like "passionate professional" or "results-driven leader" —
              they waste characters and tell recruiters nothing useful.
            </p>
          </div>

          <section className="space-y-5">
            <H2>Why Your LinkedIn Headline Matters More Than You Think</H2>
            <Prose>
              <p>
                LinkedIn&apos;s algorithm uses your headline as one of the primary signals when
                ranking profiles in search results. When a recruiter types "Senior Product
                Manager London" or "Data Scientist Python NLP", LinkedIn compares that query
                against headlines, job titles, and profile text across millions of profiles.
                A keyword-rich, role-specific headline significantly increases your chances of
                appearing in those searches.
              </p>
              <p>
                Beyond search, your headline is a 220-character first impression. It shows in
                every notification you send, every comment you leave, every connection request
                you submit, and every InMail you receive. A generic headline — "Software Engineer
                at Google" — is forgettable. A specific, benefit-led headline creates curiosity
                and positions you as an expert rather than just an employee.
              </p>
            </Prose>
            <Table
              headers={["LinkedIn Headline Use", "Where It Appears"]}
              rows={[
                ["Search results", "When recruiters search by skill, title, or location"],
                ["Connection requests", "Next to your name when you send/receive invitations"],
                ["Comments and posts", "Below your name when you engage with content"],
                ["InMail and messaging", "In your message thread header"],
                ["People Also Viewed", "In sidebar recommendations"],
                ["Google search", "Often indexed — your headline can appear in Google results"],
              ]}
            />
          </section>

          <section className="space-y-5">
            <H2>The LinkedIn Headline Formula That Works</H2>
            <Prose>
              <p>
                Use this three-part formula to build a headline that is both searchable and
                compelling. You do not need all three parts in every headline — but the best
                headlines combine at least two of them.
              </p>
            </Prose>
            <div className="rounded-2xl border border-border/60 divide-y divide-border/60">
              <div className="p-5 space-y-1">
                <p className="font-semibold text-foreground">Part 1 — Role / Title</p>
                <p className="text-sm text-muted-foreground">
                  Your current or target job title, ideally with a seniority level and
                  specialism. This anchors the recruiter and matches the keywords they are
                  searching for. Example: "Senior UX Designer | Mobile & B2B SaaS".
                </p>
              </div>
              <div className="p-5 space-y-1">
                <p className="font-semibold text-foreground">Part 2 — Value / Outcome</p>
                <p className="text-sm text-muted-foreground">
                  What you help your employer or clients achieve. This differentiates you
                  from every other person with your title. Example: "Helping startups ship
                  products users love" or "Turning data into decisions that drive revenue."
                </p>
              </div>
              <div className="p-5 space-y-1">
                <p className="font-semibold text-foreground">Part 3 — Keywords / Credentials</p>
                <p className="text-sm text-muted-foreground">
                  2–3 specific keywords, tools, qualifications, or industries that increase
                  your discoverability. Example: "Python | Machine Learning | NLP | AWS" or
                  "CPA | Big 4 | Private Equity | Financial Planning."
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <H2>LinkedIn Headline Examples by Industry and Level</H2>

            <div className="space-y-4">
              <H3>LinkedIn Headline Examples — Software Engineering</H3>
              <ExampleBox label="Senior level — keyword-rich and specific" variant="good">
                "Senior Backend Engineer | Python, Go, Kubernetes | Building scalable
                infrastructure at Series B+ startups | Open to Staff Eng roles"
              </ExampleBox>
              <ExampleBox label="Mid-level — role + value proposition" variant="good">
                "Full Stack Developer | React &amp; Node.js | Turning complex problems into
                clean, maintainable code | Fintech &amp; HealthTech"
              </ExampleBox>
              <ExampleBox label="Graduate — lead with credibility and openness" variant="good">
                "Computer Science Graduate (UCL, 2:1) | Python | Machine Learning | Seeking
                Graduate Software Engineer roles in London or Remote"
              </ExampleBox>
              <ExampleBox label="Weak — default title only" variant="bad">
                "Software Engineer at Acme Corp"
              </ExampleBox>
            </div>

            <div className="space-y-4">
              <H3>LinkedIn Headline Examples — Marketing</H3>
              <ExampleBox label="Performance marketing — specific channels and metrics" variant="good">
                "Paid Social &amp; PPC Lead | £2m+ annual ad spend managed | Meta, Google,
                TikTok | Helping DTC brands scale profitably"
              </ExampleBox>
              <ExampleBox label="Content / SEO — clearly positions the specialism" variant="good">
                "SEO &amp; Content Strategist | Grew organic traffic from 10k → 400k/mo |
                B2B SaaS | Writer, Speaker, ex-HubSpot"
              </ExampleBox>
              <ExampleBox label="CMO level — results-first, authoritative" variant="good">
                "CMO | Scaled two SaaS companies from £1m to £20m ARR | Brand, Demand Gen
                &amp; Growth | Board Advisor | Speaker"
              </ExampleBox>
              <ExampleBox label="Weak — vague adjectives, no specifics" variant="bad">
                "Passionate Marketing Professional | Results-Driven | Creative Thinker"
              </ExampleBox>
            </div>

            <div className="space-y-4">
              <H3>LinkedIn Headline Examples — Finance and Accounting</H3>
              <ExampleBox label="FP&A — specialism and credential upfront" variant="good">
                "FP&amp;A Manager | CIMA Qualified | Financial Modelling, Budgeting &amp; Forecasting
                | FMCG &amp; Private Equity | Open to Senior FP&amp;A and Finance Business Partner roles"
              </ExampleBox>
              <ExampleBox label="Investment banking analyst" variant="good">
                "Investment Banking Analyst | M&amp;A, Leveraged Finance | CFA Level 2 Candidate |
                Bulge Bracket → seeking PE/VC Analyst roles"
              </ExampleBox>
              <ExampleBox label="Weak — title without differentiation" variant="bad">
                "Finance Manager at XYZ Ltd"
              </ExampleBox>
            </div>

            <div className="space-y-4">
              <H3>LinkedIn Headline Examples — Sales</H3>
              <ExampleBox label="Enterprise SaaS AE — quota-led, specific" variant="good">
                "Enterprise Account Executive | B2B SaaS | Consistent 130% quota attainment |
                £500k–£1.5m deal sizes | Financial Services &amp; Legal Tech"
              </ExampleBox>
              <ExampleBox label="SDR / BDR — entry level, targeting upward" variant="good">
                "Sales Development Representative | SaaS | Outbound prospecting, Salesforce,
                Outreach | 120% SDR quota | Targeting AE promotion in 2025"
              </ExampleBox>
            </div>

            <div className="space-y-4">
              <H3>LinkedIn Headline Examples — Product Management</H3>
              <ExampleBox label="Senior PM — user-led value statement" variant="good">
                "Senior Product Manager | 0→1 &amp; Growth | B2B SaaS | Agile | Helping
                engineering teams ship products users actually want"
              </ExampleBox>
              <ExampleBox label="Aspiring PM transitioning from engineering" variant="good">
                "Engineer → Product Manager | 5 yrs backend dev + 2 yrs PM | Bridging
                technical depth and user empathy | Fintech &amp; API platforms"
              </ExampleBox>
            </div>

            <div className="space-y-4">
              <H3>LinkedIn Headline Examples — Human Resources</H3>
              <ExampleBox label="HRBP — seniority, focus, credential" variant="good">
                "Senior HR Business Partner | CIPD Level 7 | Organisational Design, ER
                &amp; Talent Acquisition | Tech &amp; Scale-ups | 500–2,000 headcount"
              </ExampleBox>
              <ExampleBox label="Talent acquisition — volume and specialism" variant="good">
                "Talent Acquisition Lead | Tech Hiring | 300+ hires delivered | Building
                diverse engineering teams across Europe | In-house &amp; agency background"
              </ExampleBox>
            </div>

            <div className="space-y-4">
              <H3>LinkedIn Headline Examples — Healthcare and Nursing</H3>
              <ExampleBox label="Registered Nurse — registration and specialism" variant="good">
                "Registered Nurse (NMC) | Acute Medical &amp; Surgical | NHS | Band 6 |
                Interested in Band 7 Sister / Ward Manager roles"
              </ExampleBox>
              <ExampleBox label="Healthcare manager — scope and impact" variant="good">
                "Deputy Ward Manager | Critical Care | NHS Foundation Trust | Quality
                Improvement | Patient Safety | PRINCE2 Practitioner"
              </ExampleBox>
            </div>

            <div className="space-y-4">
              <H3>LinkedIn Headline Examples — Career Changers</H3>
              <ExampleBox label="Teacher to L&D — leads with transferable value" variant="good">
                "L&amp;D Specialist | Former Secondary Teacher (8 yrs) | CIPD L3 | Instructional
                Design, Facilitation &amp; eLearning | Transitioning to Corporate Training"
              </ExampleBox>
              <ExampleBox label="Journalist to content marketing" variant="good">
                "Content Strategist | Former BBC Journalist | Long-form, SEO &amp; Thought
                Leadership | Helping B2B brands publish stories that convert"
              </ExampleBox>
            </div>

            <div className="space-y-4">
              <H3>LinkedIn Headline Examples — Open to Work</H3>
              <Prose>
                <p>
                  If you are actively job seeking, you can include "Open to [role type] roles"
                  at the end of your headline. This is not desperate — it is efficient. Many
                  recruiters actively filter for people who signal openness.
                </p>
              </Prose>
              <ExampleBox label="Open to work — transparent and specific" variant="good">
                "Data Analyst | SQL, Power BI, Python | 4 yrs FMCG &amp; Retail Analytics |
                Open to Senior Analyst and Analytics Manager roles in London or Remote"
              </ExampleBox>
              <ExampleBox label="Weak — vague and passive" variant="bad">
                "Seeking New Opportunities | Motivated Professional | Available Immediately"
              </ExampleBox>
            </div>
          </section>

          <section className="space-y-5">
            <H2>Before and After: LinkedIn Headline Transformations</H2>
            <Prose>
              <p>
                See how small changes to your headline dramatically improve its impact and
                searchability.
              </p>
            </Prose>
            <Table
              headers={["Before (Weak)", "After (Strong)", "What Changed"]}
              rows={[
                [
                  "Marketing Manager at Sainsbury's",
                  "Marketing Manager | FMCG & Retail | Category Growth, Shopper Marketing & NPD | Sainsbury's",
                  "Added specialism, keywords recruiters search, and department focus"
                ],
                [
                  "Passionate Software Developer",
                  "React & TypeScript Developer | 4 yrs | Building fast, accessible web apps | Open to Senior FE roles",
                  "Replaced vague adjective with specific tech stack, experience, and goal"
                ],
                [
                  "Recent Graduate",
                  "Psychology Graduate (Exeter, 1st Class) | Research, Data Analysis & Behavioural Insights | Seeking Graduate HR or Research roles",
                  "Leads with credential, adds skills, signals target role"
                ],
                [
                  "Experienced HR Professional",
                  "Head of HR | CIPD Level 7 | 300+ headcount | Talent, Culture & ER | Tech Scale-ups | London",
                  "Every word is specific — scope, credential, specialism, sector, location"
                ],
                [
                  "Sales Executive looking for new challenges",
                  "B2B SaaS AE | Consistent 115% quota | £200k–£800k deal sizes | Pipeline generation & enterprise closing | Open to AM roles",
                  "Led with proof, not intent; removed vague 'looking for new challenges'"
                ],
              ]}
            />
          </section>

          <section className="space-y-5">
            <H2>LinkedIn Headline Character Limit and Technical Tips</H2>
            <Prose>
              <p>
                LinkedIn gives you 220 characters for your headline. Here is how to make the
                most of every character:
              </p>
            </Prose>
            <div className="rounded-2xl border border-border/60 divide-y divide-border/60">
              <div className="p-5 space-y-1">
                <p className="font-semibold text-foreground">Use separators to improve readability</p>
                <p className="text-sm text-muted-foreground">
                  Use | (pipe) or · (middle dot) to separate elements. This makes your headline
                  easy to scan quickly. Avoid commas as the only separator — they read poorly
                  at a glance.
                </p>
              </div>
              <div className="p-5 space-y-1">
                <p className="font-semibold text-foreground">Front-load your most important keyword</p>
                <p className="text-sm text-muted-foreground">
                  On mobile and in search results, LinkedIn often truncates headlines after the
                  first 60–80 characters. Put your most important role title or keyword first
                  so it always appears even when truncated.
                </p>
              </div>
              <div className="p-5 space-y-1">
                <p className="font-semibold text-foreground">Use natural language keywords</p>
                <p className="text-sm text-muted-foreground">
                  Include the terms recruiters actually type into search — "Data Scientist" not
                  "Data and Insights Professional". Match the language used in job postings for
                  the roles you want. LinkedIn&apos;s algorithm is keyword-based.
                </p>
              </div>
              <div className="p-5 space-y-1">
                <p className="font-semibold text-foreground">Update it regularly</p>
                <p className="text-sm text-muted-foreground">
                  Your headline should evolve with your career. Update it when you change roles,
                  gain a new qualification, pivot your focus, or start actively job searching.
                  A stale headline from three years ago can undermine an otherwise strong profile.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <H2>LinkedIn Headline Optimisation Checklist</H2>
            <BlogChecklist
              items={[
                "Contains your current or target job title with seniority level",
                "Includes 2–3 specific keywords recruiters in your field search for",
                "Uses separators (| or ·) for easy scanning",
                "Leads with the most important information — visible even when truncated",
                "Free of vague adjectives: no 'passionate', 'motivated', 'results-driven'",
                "Communicates the value you deliver, not just the role you hold",
                "Within 220 characters — the LinkedIn headline limit",
                "Updated to reflect your current experience level and career goals",
                "Includes specialism, sector, or tools that set you apart",
                "Signals openness to new roles if actively job seeking",
              ]}
            />
          </section>

          <div className="rounded-3xl bg-primary/5 border border-primary/20 p-6 sm:p-8 space-y-4">
            <H3>Want a Fully Optimised LinkedIn Profile?</H3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              A great headline is just the start. Our professional resume writers also offer
              LinkedIn Profile Optimisation — covering your headline, summary (About section),
              experience descriptions, skills, and keyword strategy. Combined with a professionally
              written CV, you will have a complete job-search profile that opens doors.
            </p>
            <Link
              href="/checkout"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Optimise My LinkedIn Profile
            </Link>
          </div>

          <BlogFaqAccordion
            items={[
              {
                q: "How long should a LinkedIn headline be?",
                a: "LinkedIn allows up to 220 characters for your headline. Aim to use most of them — a fuller headline gives the algorithm more keywords to index and gives readers more context. However, remember that only the first 60–80 characters reliably appear in search results and notifications on mobile, so front-load your most important information.",
              },
              {
                q: "Should I include my current job title in my LinkedIn headline?",
                a: "Yes — your current or target job title should almost always appear in your headline because it is a primary search keyword for recruiters. However, do not stop there. Expand beyond the title to include your specialism, key skills, sector, or the value you deliver. 'Product Manager | B2B SaaS | 0→1 & Growth' is far more effective than 'Product Manager at Company X' alone.",
              },
              {
                q: "What should my LinkedIn headline say if I am a student or recent graduate?",
                a: "Lead with your degree, university, and graduation year — your academic credential is your strongest asset at this stage. Add 2–3 skills from coursework, projects, or part-time work. Close by naming the type of role you are seeking and the industry you are targeting. For example: 'Economics Graduate | University of Edinburgh | Data Analysis, SQL & Excel | Seeking Graduate Analyst roles in Finance or Consulting'.",
              },
              {
                q: "Can I change my LinkedIn headline without notifying my connections?",
                a: "Yes. When editing your LinkedIn profile, you can turn off share profile changes in your settings before making edits. Go to Settings & Privacy → Visibility → Share profile updates with your network, and toggle it off. This prevents LinkedIn from broadcasting your profile changes to your connections — useful if you are quietly job searching.",
              },
              {
                q: "What are the worst LinkedIn headline mistakes to avoid?",
                a: "The most common mistakes are: using only your job title and employer name (generic and unsearchable), using vague adjectives like 'passionate' or 'driven' (everyone says this), listing the job you want but no current skills or experience (looks unqualified), and leaving the default title LinkedIn auto-generates (shows no effort). Focus instead on specific skills, keywords, and the value you provide.",
              },
            ]}
          />
        </div>
      </div>
    </article>
  );
}
