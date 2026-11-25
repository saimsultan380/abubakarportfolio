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

export function HowToWriteResumeWithNoExperience() {
  const cover = getBlogPost("how-to-write-resume-with-no-experience");

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
              Writing a resume with no experience feels impossible — but it is not.
              Every professional you admire once had exactly zero years of work experience.
              The difference between a resume that gets interviews and one that gets ignored
              is not the number of jobs listed. It is how well you present what you already have.
            </p>
            <p>
              This guide explains how to write a resume with no experience using real
              examples, proven formatting strategies, and recruiter-tested techniques
              that work for students, fresh graduates, and career changers alike.
            </p>
          </Prose>

          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-5 sm:p-7 space-y-3">
            <H3>Quick Answer: How Do You Write a Resume With No Experience?</H3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Focus on your education, transferable skills, volunteering, internships,
              coursework, and personal projects. Lead with a strong professional summary,
              choose a skills-focused format, and tailor every application to the job
              description. Quantity of experience is not what gets you hired — relevance is.
            </p>
          </div>

          <section className="space-y-4">
            <H2>Can You Get a Job With No Work Experience on Your Resume?</H2>
            <Prose>
              <p>
                Yes — and it happens more often than you think. Entry-level employers
                expect candidates to have limited formal work history. What they look
                for instead is evidence of:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Relevant skills that apply to the role</li>
                <li>Academic achievements that demonstrate capability</li>
                <li>Volunteer or extracurricular involvement showing initiative</li>
                <li>Internships, placements, or part-time work of any kind</li>
                <li>Personal or academic projects connected to the industry</li>
              </ul>
              <p>
                Hiring managers who review entry-level applications are trained to look
                beyond job titles. A blank work history section does not disqualify
                you — but a poorly structured resume will.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>What Resume Format Works Best With No Experience?</H2>
            <Prose>
              <p>
                When you have little or no work history, the order of your resume sections
                matters more than the content of each individual section.
              </p>
            </Prose>
            <Table
              headers={["Resume Format", "Best For", "Experience Level"]}
              rows={[
                [
                  "Functional (skills-based)",
                  "Highlighting transferable skills over work history",
                  "No experience",
                ],
                [
                  "Reverse-chronological",
                  "Showing career progression clearly",
                  "1+ years of experience",
                ],
                [
                  "Combination / Hybrid",
                  "Balancing skills and limited work history",
                  "Some internships or part-time work",
                ],
              ]}
            />
            <Prose>
              <p>
                For most entry-level candidates, a <strong className="text-foreground">hybrid format</strong> works
                best. It leads with your skills and education, then lists any experience
                (internships, volunteering, projects) in reverse order below.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>How to Structure a Resume With No Experience</H2>
            <Prose>
              <p>
                Use the following section order when experience is limited. Each section
                is explained below with examples.
              </p>
            </Prose>

            <div className="space-y-6">
              <div className="rounded-2xl border border-border/60 p-5 sm:p-6 space-y-3">
                <H3>1. Contact Information</H3>
                <Prose>
                  <p>
                    Include your full name, professional email address, phone number,
                    LinkedIn profile URL, and city or country. You do not need to include
                    your full postal address.
                  </p>
                  <p>
                    Make sure your email address looks professional. Addresses like{" "}
                    <span className="font-medium text-foreground">james.carter@gmail.com</span> are
                    suitable. Addresses like{" "}
                    <span className="font-medium text-foreground">coolkid99@hotmail.com</span> are not.
                  </p>
                </Prose>
              </div>

              <div className="rounded-2xl border border-border/60 p-5 sm:p-6 space-y-3">
                <H3>2. Professional Summary</H3>
                <Prose>
                  <p>
                    A professional summary is a 2–4 sentence paragraph at the top of your
                    resume that explains who you are, what you offer, and what kind of role
                    you are looking for. It is the most important section of a no-experience
                    resume because it frames everything that follows.
                  </p>
                  <p>
                    Avoid generic phrases like "hard-working and motivated team player."
                    Instead, describe your field of study, the most relevant skill you bring,
                    and the type of contribution you want to make.
                  </p>
                </Prose>
                <div className="rounded-xl bg-muted/40 p-4 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">Example — Before</p>
                  <p className="text-sm text-muted-foreground italic">
                    "Recent graduate looking for an opportunity to grow and contribute to a dynamic team."
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mt-3">Example — After</p>
                  <p className="text-sm text-muted-foreground italic">
                    "Marketing graduate with hands-on experience managing social media content for a university society of 800 members. Skilled in content calendars, audience analytics, and Canva design. Seeking an entry-level social media role where I can apply data-led creative strategy."
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 p-5 sm:p-6 space-y-3">
                <H3>3. Education</H3>
                <Prose>
                  <p>
                    For candidates with no professional experience, education should appear
                    high on the resume — immediately after the summary. Include:
                  </p>
                  <ul className="space-y-1.5 list-disc pl-5">
                    <li>Degree name and subject</li>
                    <li>University or institution name</li>
                    <li>Graduation year (or expected graduation year)</li>
                    <li>GPA or classification if strong (e.g., First Class Honours, 3.8 GPA)</li>
                    <li>Relevant modules, coursework, or dissertation topic</li>
                    <li>Academic awards or scholarships</li>
                  </ul>
                </Prose>
              </div>

              <div className="rounded-2xl border border-border/60 p-5 sm:p-6 space-y-3">
                <H3>4. Skills</H3>
                <Prose>
                  <p>
                    List skills in two categories: technical skills (software, tools, languages)
                    and transferable skills (communication, problem-solving, project management).
                    Only list skills you can genuinely demonstrate if asked in an interview.
                  </p>
                </Prose>
                <Table
                  headers={["Technical Skills", "Transferable Skills"]}
                  rows={[
                    ["Microsoft Excel / Google Sheets", "Written and verbal communication"],
                    ["Adobe Photoshop / Canva", "Time management and prioritisation"],
                    ["Python (beginner)", "Research and analytical thinking"],
                    ["WordPress / Webflow", "Teamwork and collaboration"],
                    ["HubSpot CRM (certified)", "Attention to detail"],
                  ]}
                />
              </div>

              <div className="rounded-2xl border border-border/60 p-5 sm:p-6 space-y-3">
                <H3>5. Projects and Academic Work</H3>
                <Prose>
                  <p>
                    Projects are one of the most underused sections on entry-level resumes.
                    If you have built something, researched something, or solved a real problem
                    during your studies, it belongs here.
                  </p>
                  <p>
                    Format each project like a mini work experience entry: give it a title,
                    describe what you did, and include a measurable outcome if possible.
                  </p>
                </Prose>
                <div className="rounded-xl bg-muted/40 p-4 space-y-1">
                  <p className="text-sm font-semibold text-foreground">E-commerce Website — Final Year Project</p>
                  <p className="text-sm text-muted-foreground">
                    Built a fully functional online store using Shopify and custom CSS. Conducted
                    user testing with 15 participants and improved checkout completion rate by 22%
                    based on feedback. Received highest mark in the cohort.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 p-5 sm:p-6 space-y-3">
                <H3>6. Volunteering and Extracurricular Activities</H3>
                <Prose>
                  <p>
                    Volunteering, society leadership, sports captaincy, and event organisation
                    all demonstrate real-world skills. Treat each one like a work experience
                    entry. Describe your responsibilities and what you achieved.
                  </p>
                </Prose>
              </div>

              <div className="rounded-2xl border border-border/60 p-5 sm:p-6 space-y-3">
                <H3>7. Certifications and Courses</H3>
                <Prose>
                  <p>
                    Online certifications from platforms like Google, HubSpot, Coursera,
                    LinkedIn Learning, or Udemy add credibility. List the course name,
                    provider, and year of completion.
                  </p>
                </Prose>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <H2>What to Write in a Resume With No Work Experience: Section by Section</H2>
            <Prose>
              <p>
                Every section of your resume should answer one question: why are you suitable
                for this specific role? Here is what to include and what to leave out:
              </p>
            </Prose>
            <Table
              headers={["Section", "Include", "Leave Out"]}
              rows={[
                ["Summary", "Skills, field of study, career goal", "Vague phrases like 'hard worker'"],
                ["Education", "GPA (if strong), relevant modules", "High school if you have a degree"],
                ["Skills", "Tools you can demonstrate", "Skills you cannot back up"],
                ["Projects", "Outcomes and your specific role", "Group work where your contribution is unclear"],
                ["Volunteering", "Responsibilities and results", "One-off events with no lasting role"],
                ["Certifications", "Completed, relevant credentials", "Courses you started but did not finish"],
              ]}
            />
          </section>

          <section className="space-y-4">
            <H2>Resume With No Experience Examples: Before and After</H2>
            <Prose>
              <p>
                The difference between a weak and strong entry-level resume is specificity.
                Generic statements tell a recruiter nothing. Specific, evidence-based statements
                show potential.
              </p>
            </Prose>
            <div className="space-y-4">
              <div className="rounded-2xl border border-border/60 overflow-hidden">
                <div className="bg-muted/40 px-5 py-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Weak bullet — no evidence</p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm text-muted-foreground italic">
                    "Responsible for social media at university society."
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-primary/30 overflow-hidden">
                <div className="bg-primary/5 px-5 py-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">Strong bullet — specific and measurable</p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm text-muted-foreground italic">
                    "Managed Instagram and LinkedIn accounts for a 400-member business society, growing combined followers by 35% over one academic year through weekly content scheduling and engagement campaigns."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <H2>Tips to Make Your No-Experience Resume Stand Out</H2>
            <BlogChecklist
              items={[
                "Tailor your resume to each job — read the description and mirror its language",
                "Use action verbs to start each bullet: Managed, Developed, Analysed, Coordinated",
                "Quantify wherever possible — percentages, numbers, timescales",
                "Keep your resume to one page at the entry level",
                "Save and send as PDF to preserve your formatting",
                "Include a matching cover letter that expands on your most relevant experience",
                "Optimise your LinkedIn profile to match your resume's key points",
                "Get a second opinion — a professional review can spot gaps you cannot see",
              ]}
            />
          </section>

          <section className="space-y-4">
            <H2>Common Mistakes on Entry-Level Resumes</H2>
            <Prose>
              <p>
                Avoid these errors that frequently appear on first-time resumes and damage
                an otherwise strong application:
              </p>
              <ul className="space-y-3 list-disc pl-5">
                <li>
                  <strong className="text-foreground">Using an objective statement instead of a summary.</strong>{" "}
                  Objective statements focus on what you want from a job. Summary statements
                  focus on what you offer. Recruiters care about the second, not the first.
                </li>
                <li>
                  <strong className="text-foreground">Listing responsibilities instead of achievements.</strong>{" "}
                  Anyone can describe a task. Describe the result of the task instead.
                </li>
                <li>
                  <strong className="text-foreground">Sending the same resume everywhere.</strong>{" "}
                  A tailored resume that matches the job description will always outperform
                  a generic one.
                </li>
                <li>
                  <strong className="text-foreground">Using a creative or heavily designed template.</strong>{" "}
                  Fancy formatting can confuse ATS software. Use a clean, text-based layout.
                </li>
                <li>
                  <strong className="text-foreground">Including a photo.</strong>{" "}
                  In the UK, US, Canada, and Australia, photos are not standard and can
                  introduce unconscious bias.
                </li>
              </ul>
            </Prose>
          </section>

          <div className="rounded-3xl bg-primary/5 border border-primary/20 p-6 sm:p-8 space-y-4">
            <H3>Need a Professional Resume With No Experience?</H3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Our professional writers specialise in entry-level resumes that get interviews.
              We know how to position limited experience as genuine potential and present your
              skills, education, and projects in the most compelling way.
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
                q: "How do I write a resume with no experience and no college degree?",
                a: "Focus on any skills you have developed through freelance work, volunteering, online courses, or self-taught projects. List relevant certifications, describe your strongest transferable skills, and write a professional summary that positions you clearly for the type of role you are applying for. Many employers value demonstrated skills over formal credentials.",
              },
              {
                q: "What should I put on my resume if I have never had a job?",
                a: "Include your education, relevant coursework, academic projects, volunteering, extracurricular activities, certifications, and skills. Any experience where you took responsibility, contributed to a team, or solved a problem is worth including — even if it was unpaid.",
              },
              {
                q: "Should a no-experience resume be one page?",
                a: "Yes. At the entry level, one page is the standard. A second page is only appropriate once you have several years of relevant professional experience. Keep your resume concise and focused on the most relevant information for the role.",
              },
              {
                q: "How do I make my resume look professional with no experience?",
                a: "Use a clean, ATS-friendly template with consistent fonts, clear section headings, and logical layout. Avoid decorative elements, photos, and multiple columns that can confuse parsing software. Lead with a strong professional summary and make every bullet point specific and outcome-focused.",
              },
              {
                q: "Can I lie on my resume if I have no experience?",
                a: "No. Fabricating experience, qualifications, or skills is dishonest and can result in immediate dismissal if discovered — even after you are hired. Employers conduct background checks and reference checks. Focus instead on presenting your genuine skills and achievements in the most compelling way possible.",
              },
            ]}
          />
        </div>
      </div>
    </article>
  );
}
