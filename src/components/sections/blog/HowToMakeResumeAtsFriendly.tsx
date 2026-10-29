import type { ReactNode } from "react";
import Link from "next/link";
import { BlogCoverImage } from "@/components/sections/blog/BlogCoverImage";
import { BlogChecklist } from "@/components/sections/blog/BlogChecklist";
import { BlogFaqAccordion } from "@/components/sections/blog/BlogFaqAccordion";
import { getBlogPost } from "@/lib/blog";

function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose-blog space-y-5 text-[15px] sm:text-base text-muted-foreground leading-relaxed">
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

export function HowToMakeResumeAtsFriendly() {
  const cover = getBlogPost("how-to-make-resume-ats-friendly");

  return (
    <article className="pb-16 md:pb-24">
      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          {cover ? (
            <BlogCoverImage
              src={cover.image}
              alt={cover.imageAlt}
              priority
            />
          ) : null}

          <Prose>
            <p className="text-foreground/90 text-base sm:text-lg leading-relaxed">
              Have you applied for jobs that match your experience but received
              few responses? Your resume may not be communicating your
              qualifications clearly enough to recruiters or the software they
              use to manage applications. Learning how to make resume ATS
              friendly can help you present your experience in a format that is
              easier to process and review.
            </p>
            <p>
              An Applicant Tracking System (ATS) helps employers collect,
              organise, and search job applications. A well-structured resume
              uses readable formatting, familiar section headings, relevant
              keywords, and clear examples of your achievements. This guide
              explains how to make your resume ATS friendly, choose the right
              file format, match your skills to a job description, and check
              your document before submitting it.
            </p>
          </Prose>

          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-5 sm:p-7 space-y-3">
            <H3>Quick answer: How do you make a resume ATS friendly?</H3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              To make your resume ATS friendly, use a simple single-column
              layout, standard section headings, readable fonts, and text-based
              formatting. Include relevant skills and terminology from the job
              description where they accurately describe your experience. Keep
              contact details in the document body, use consistent dates, and
              submit a DOCX or text-based PDF according to the employer&apos;s
              instructions. Finally, check that your resume&apos;s text remains
              readable after saving or exporting it.
            </p>
          </div>

          <section className="space-y-4">
            <H2>Key takeaways</H2>
            <ul className="space-y-2.5 text-muted-foreground">
              {[
                "Use a clean layout with a logical reading order and standard headings.",
                "Tailor your resume to the requirements of each position.",
                "Include relevant keywords naturally in your skills and work experience.",
                "Choose the file format requested by the employer.",
                "Describe achievements with specific actions and measurable results where possible.",
                "Test the final file to check that its text, dates, and contact details remain readable.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <BlogFaqAccordion
            items={[
              {
                q: "What is an ATS-friendly resume?",
                a: "An ATS-friendly resume is a resume structured so that applicant tracking software can extract and organise its information accurately while remaining easy for recruiters to read. It is a regular resume designed with readability, relevant terminology, and straightforward formatting in mind. Employers use ATS platforms to manage applications, maintain candidate records, and support recruitment workflows. Depending on the system and employer configuration, software may extract employment history, education, contact information, and skills into searchable fields. For example, Greenhouse documents formatting problems that can affect resume parsing, including columns, graphics, text boxes, and contact information placed in certain document elements. Lever explains how its parser extracts resume details into candidate profiles. An ATS-friendly resume does not guarantee that an employer will select or interview you. Its purpose is to make your qualifications easier to extract, find, and evaluate.",
              },
            ]}
          />

          <section className="space-y-5">
            <H2>How to make your resume ATS friendly</H2>
            <Prose>
              <p>
                The most effective approach is to simplify the document first,
                then improve the relevance of its content. Follow these steps
                when creating a new resume or updating an existing one.
              </p>
            </Prose>

            <H3>1. Choose a simple, single-column layout</H3>
            <Prose>
              <p>
                A single-column resume provides a straightforward reading
                order. It reduces the risk of software interpreting information
                from separate columns in the wrong sequence.
              </p>
              <p>
                Use a conventional structure with your contact details at the
                top, followed by your summary, skills, experience, and
                education. Add certifications or other relevant sections when
                they support the position.
              </p>
              <p>Avoid unnecessary design elements such as:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Multiple columns and complicated tables</li>
                <li>Floating text boxes</li>
                <li>Decorative icons and graphics</li>
                <li>Skill-rating bars and pie charts</li>
                <li>Images containing important resume information</li>
              </ul>
              <p>
                A visually attractive resume can still work well, but clarity
                should take priority over decoration in the version you submit
                online.
              </p>
            </Prose>

            <H3>2. Use standard resume section headings</H3>
            <Prose>
              <p>
                Choose familiar headings that communicate the purpose of each
                section immediately. Creative labels may look distinctive but
                can make your information less straightforward to categorise.
              </p>
            </Prose>
            <Table
              headers={["Recommended heading", "What to include"]}
              rows={[
                [
                  "Professional Summary",
                  "Relevant experience, expertise, and career strengths",
                ],
                [
                  "Work Experience",
                  "Employers, job titles, dates, responsibilities, and achievements",
                ],
                ["Skills", "Relevant technical and professional skills"],
                [
                  "Education",
                  "Degrees, qualifications, institutions, and dates",
                ],
                [
                  "Certifications",
                  "Relevant professional certificates or licences",
                ],
                [
                  "Projects",
                  "Selected projects demonstrating relevant abilities",
                ],
              ]}
            />
            <Prose>
              <p>
                You do not need every section. Include the ones that fit your
                experience and the requirements of the job.
              </p>
            </Prose>

            <H3>3. Select a readable font and consistent formatting</H3>
            <Prose>
              <p>
                Use a conventional font such as Arial, Calibri, Helvetica, or
                Times New Roman. Keep font sizes readable and apply the same
                formatting rules throughout the document.
              </p>
              <p>
                Use bold text for job titles and section headings. Keep bullet
                points simple, dates consistent, and spacing predictable.
              </p>
              <p>Practical formatting recommendations:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Use a font size around 10 to 12 points for body text.</li>
                <li>Make headings slightly larger than body text.</li>
                <li>Keep margins and spacing consistent.</li>
                <li>
                  Use ordinary bullet points for achievements and
                  responsibilities.
                </li>
                <li>
                  Place contact details in the document body rather than relying
                  on headers or text boxes.
                </li>
                <li>
                  Avoid decorative letter spacing that separates individual
                  characters.
                </li>
              </ul>
              <p>
                These recommendations help make your resume easier for both
                software and people to read. Greenhouse specifically identifies
                certain complex layouts and separated lettering as potential
                parsing problems.
              </p>
            </Prose>

            <H3>4. Save your resume in the correct file format</H3>
            <Prose>
              <p>
                There is no single file format that is best for every employer
                and ATS platform. Both DOCX and PDF can be suitable when the
                receiving system supports them and the file contains readable
                text.
              </p>
              <p>
                Follow the job advertisement&apos;s instructions first. If it
                requests Word format, submit a DOCX file. If it requests PDF,
                use a text-based PDF rather than a scanned image.
              </p>
            </Prose>
            <Table
              headers={["File format", "Advantages", "What to check"]}
              rows={[
                [
                  "DOCX",
                  "Editable and supported by many recruitment systems",
                  "Check that spacing and layout remain intact",
                ],
                [
                  "Text-based PDF",
                  "Preserves the intended appearance across devices",
                  "Confirm that text can be selected and copied",
                ],
                [
                  "Scanned PDF",
                  "May preserve the appearance of a printed document",
                  "Text extraction may fail without OCR",
                ],
                [
                  "JPG or PNG",
                  "Useful for displaying a visual design",
                  "Not suitable as a substitute for a readable resume document",
                ],
              ]}
            />
            <Prose>
              <p>
                Lever documents support for DOCX and PDF, among other formats,
                while Greenhouse lists several accepted candidate-upload
                formats. Their documentation illustrates why the employer&apos;s
                specific requirements matter.
              </p>
            </Prose>

            <H3>5. Match your resume keywords to the job description</H3>
            <Prose>
              <p>
                Relevant keywords help communicate the connection between your
                experience and the position. Start by reading the job
                advertisement and identifying the skills, tools, qualifications,
                and responsibilities it emphasises.
              </p>
              <p>
                Create a short list of the most relevant terms, then incorporate
                them naturally into your resume where they accurately describe
                your background.
              </p>
              <p>
                For example, if a marketing role requests Google Analytics, SEO,
                campaign reporting, and conversion optimisation, include those
                terms when you have the corresponding experience.
              </p>
              <p>
                Avoid copying the entire job description into your resume.
                Repeating keywords without demonstrating the underlying skills
                can make your application less credible to a recruiter.
              </p>
            </Prose>

            <H3>6. Write achievement-focused work experience</H3>
            <Prose>
              <p>
                Do not limit your employment history to a list of routine
                duties. Explain what you did, how you did it, and what changed
                as a result.
              </p>
              <p>A useful structure is:</p>
              <p className="rounded-xl border border-border/60 bg-muted/30 px-4 py-3 text-foreground font-medium">
                Action verb + task or responsibility + method or scope + result
              </p>
              <p>
                For example, instead of writing that you were responsible for
                social media, describe the campaigns you managed, the tools you
                used, or the measurable results you achieved.
              </p>
              <p>
                Use numbers only when they reflect genuine results. If you
                cannot quantify an achievement, explain its scope, complexity,
                or contribution instead.
              </p>
            </Prose>

            <H3>7. Include contact information in readable text</H3>
            <Prose>
              <p>
                Place your name, professional email address, phone number, and
                relevant location information near the top of the resume. Add a
                LinkedIn profile or portfolio link when it supports your
                application.
              </p>
              <p>
                Keep these details in the main document body rather than placing
                essential information in a header, footer, or floating text box.
                Some parsers may fail to extract details from those elements.
              </p>
            </Prose>

            <H3>8. Tailor the resume to each application</H3>
            <Prose>
              <p>
                Keep a master resume containing your full work history,
                qualifications, skills, and achievements. For each application,
                create a tailored version that prioritises the experience most
                relevant to the role.
              </p>
              <p>
                You can adjust the professional summary, reorder relevant
                skills, and highlight different achievements without changing
                the underlying facts.
              </p>
              <p>
                This makes your resume more specific to the employer&apos;s
                requirements while keeping your application accurate and
                consistent.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>What is the best ATS resume format?</H2>
            <Prose>
              <p>
                For many applicants, a reverse-chronological resume is a
                practical starting point because it presents recent experience
                first. A combination format can also work when relevant skills
                and achievements deserve prominence alongside a clear employment
                history.
              </p>
              <p>
                The best choice depends on your experience, career history, and
                the position you want.
              </p>
            </Prose>
            <Table
              headers={["Resume format", "Best suited for", "Main consideration"]}
              rows={[
                [
                  "Reverse chronological",
                  "Applicants with a clear employment history",
                  "Emphasises recent roles and career progression",
                ],
                [
                  "Combination",
                  "Experienced candidates or career changers with transferable skills",
                  "Balances skills with employment history",
                ],
                [
                  "Functional",
                  "Applicants emphasising skills over job chronology",
                  "Can make employment history less clear if used poorly",
                ],
              ]}
            />
            <Prose>
              <p>
                Whichever format you choose, make sure your employment dates,
                job titles, qualifications, and skills are easy to locate. Avoid
                hiding gaps or omitting relevant information simply to make the
                document appear more polished.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>How to choose the right resume keywords</H2>
            <Prose>
              <p>
                Start with the employer&apos;s exact terminology, then check
                whether each term accurately represents your experience. This is
                more useful than adding a generic list of popular resume
                keywords.
              </p>
              <p>Follow this simple process:</p>
              <ol className="space-y-2 list-decimal pl-5">
                <li>Read the job title and responsibilities carefully.</li>
                <li>
                  Identify required skills, qualifications, software, and
                  industry terms.
                </li>
                <li>Separate essential requirements from desirable ones.</li>
                <li>
                  Match each relevant term to evidence in your work history or
                  education.
                </li>
                <li>
                  Use the terminology naturally in your summary, skills, and
                  achievement bullets.
                </li>
                <li>
                  Review the finished resume for repetition and unsupported
                  claims.
                </li>
              </ol>
              <p>
                Consider a job advertisement requesting project management,
                stakeholder communication, and budget tracking.
              </p>
            </Prose>
            <Table
              headers={[
                "Job requirement",
                "Weak resume wording",
                "More relevant wording",
              ]}
              rows={[
                [
                  "Project management",
                  "Helped with projects",
                  "Coordinated project schedules, tasks, and delivery milestones",
                ],
                [
                  "Stakeholder communication",
                  "Good communication skills",
                  "Presented progress updates and coordinated requirements with stakeholders",
                ],
                [
                  "Budget tracking",
                  "Worked with budgets",
                  "Monitored project expenditure and maintained budget records",
                ],
              ]}
            />
            <Prose>
              <p>
                The improved examples demonstrate how to describe relevant
                experience more clearly. Use them only when they accurately
                reflect the work you have performed.
              </p>
              <p>
                Remember that keyword matching is only one part of recruitment.
                Qualifications, screening questions, relevant experience, and
                the employer&apos;s selection criteria may also influence the
                outcome.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>ATS-friendly resume examples</H2>
            <Prose>
              <p>
                The following examples show how to improve resume content
                without relying on complicated formatting.
              </p>
            </Prose>

            <H3>Example 1: Improve a work experience bullet</H3>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-muted/20 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Before
                </p>
                <p className="text-sm text-muted-foreground">
                  Responsible for managing customer support and answering
                  customer questions.
                </p>
              </div>
              <div className="rounded-2xl border border-primary/25 bg-primary/5 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  After
                </p>
                <p className="text-sm text-foreground">
                  Resolved customer enquiries, documented recurring issues, and
                  coordinated follow-ups to improve support consistency.
                </p>
              </div>
            </div>
            <Prose>
              <p>
                The revised bullet uses direct language and describes specific
                responsibilities. It does not invent a performance figure or
                claim an outcome that has not been established.
              </p>
            </Prose>

            <H3>Example 2: Improve a professional summary</H3>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-muted/20 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Before
                </p>
                <p className="text-sm text-muted-foreground">
                  Hardworking professional looking for a challenging position in
                  a growing company.
                </p>
              </div>
              <div className="rounded-2xl border border-primary/25 bg-primary/5 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  After
                </p>
                <p className="text-sm text-foreground">
                  Customer service professional with experience handling
                  customer enquiries, maintaining accurate records, and
                  coordinating issue resolution. Skilled in customer
                  communication, documentation, and cross-team collaboration.
                </p>
              </div>
            </div>
            <Prose>
              <p>
                The improved summary identifies a professional field, describes
                relevant work, and includes useful skills. Adapt it to your own
                background and the target job.
              </p>
            </Prose>

            <H3>Example 3: Organise the resume structure</H3>
            <Prose>
              <p>A straightforward resume might follow this order:</p>
              <ol className="space-y-2 list-decimal pl-5">
                <li>Full name and contact information</li>
                <li>Professional summary</li>
                <li>Relevant skills</li>
                <li>Work experience, newest role first</li>
                <li>Education and qualifications</li>
                <li>Certifications or relevant projects</li>
              </ol>
              <p>
                This is a flexible structure, not a mandatory template. Place
                the most relevant information where it is easy to find, while
                preserving a clear employment history.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>How to check if your resume is ATS friendly?</H2>
            <Prose>
              <p>
                You can perform a basic resume readability test without relying
                entirely on a third-party ATS score.
              </p>
            </Prose>
            <H3>Step 1: Check whether the text is selectable</H3>
            <Prose>
              <p>
                Open the saved PDF and try selecting and copying its text. Paste
                the content into a plain-text editor.
              </p>
              <p>
                If words, dates, or contact details disappear or appear in the
                wrong order, review the original document and export it again.
              </p>
            </Prose>
            <H3>Step 2: Check the reading order</H3>
            <Prose>
              <p>
                Read the copied text from beginning to end. Confirm that your
                name, work experience, dates, education, and skills remain
                grouped correctly.
              </p>
              <p>
                Look for missing bullet points, merged job entries, or headings
                that have moved away from their sections.
              </p>
            </Prose>
            <H3>Step 3: Compare the resume with the job description</H3>
            <Prose>
              <p>
                Check whether the most important requirements are represented
                accurately. Focus on the skills and experience that matter to
                the role rather than chasing an arbitrary keyword count.
              </p>
            </Prose>
            <H3>Step 4: Review the uploaded application</H3>
            <Prose>
              <p>
                If the application form automatically fills in your employment
                history or contact details, compare those fields with the
                original resume. Correct any errors before submitting the
                application when the form permits it.
              </p>
            </Prose>
            <H3>Step 5: Use an ATS resume checker carefully</H3>
            <Prose>
              <p>
                A resume checker can help identify missing keywords, readability
                problems, or formatting concerns. However, its score does not
                necessarily reproduce the employer&apos;s actual ATS
                configuration, screening questions, or hiring criteria.
              </p>
              <p>
                Use automated tools as a diagnostic aid, not a guarantee of
                selection.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>How does an ATS process a resume?</H2>
            <Prose>
              <p>A simplified view of the process is:</p>
            </Prose>
            <ol className="space-y-4">
              {[
                {
                  t: "Resume submitted",
                  d: "The applicant uploads a document.",
                },
                {
                  t: "Information extracted",
                  d: "The system attempts to identify contact details, skills, education, and experience.",
                },
                {
                  t: "Candidate record organised",
                  d: "Extracted information can be stored and searched.",
                },
                {
                  t: "Employer review and selection",
                  d: "Recruiters assess applications using their workflow and selection criteria.",
                },
              ].map((step, i) => (
                <li
                  key={step.t}
                  className="flex gap-4 rounded-2xl border border-border/50 bg-muted/15 p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{step.t}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {step.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <Prose>
              <p>
                Actual workflows vary. Some employers configure eligibility
                questions, screening rules, or automated assessments, while
                others use ATS software primarily to organise applications and
                support recruiter searches.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>Common ATS Resume Mistakes</H2>
            <Prose>
              <p>Avoid these mistakes when preparing your application.</p>
            </Prose>
            <Table
              headers={[
                "Mistake",
                "Why it can cause problems",
                "How to fix it",
              ]}
              rows={[
                [
                  "Using a complex, multi-column layout",
                  "Information may be extracted in the wrong order",
                  "Use a straightforward single-column design",
                ],
                [
                  "Adding keywords you cannot support",
                  "Creates a misleading or unconvincing application",
                  "Include only skills and qualifications you genuinely possess",
                ],
                [
                  "Uploading a scanned resume",
                  "The file may contain no selectable text",
                  "Export a text-based PDF or submit DOCX as instructed",
                ],
                [
                  "Using creative section headings",
                  "Makes the purpose of sections less obvious",
                  "Use familiar headings such as Experience and Education",
                ],
                [
                  "Sending the same resume for every role",
                  "Relevant experience may be difficult to identify",
                  "Tailor the content to each position",
                ],
                [
                  "Placing contact details in a text box",
                  "Some parsers may not extract the details correctly",
                  "Put essential contact information in the main document body",
                ],
              ]}
            />
            <Prose>
              <p>
                A further mistake is assuming that an ATS-friendly resume must
                be designed to beat a robot. Your goal is to communicate
                relevant qualifications accurately, not to manipulate the
                software.
              </p>
            </Prose>
          </section>

          <section className="space-y-4">
            <H2>ATS-friendly Resume Action Checklist</H2>
            <Prose>
              <p>
                Use this checklist before submitting your next application.
              </p>
            </Prose>
            <BlogChecklist />
          </section>

          <section className="space-y-4">
            <H2>How Resumes Uplift can help</H2>
            <Prose>
              <p>
                Creating an effective resume takes more than choosing a
                template. Your content needs to reflect your actual
                qualifications, communicate relevant achievements, and address
                the requirements of your target roles.
              </p>
              <p>
                Resumes Uplift offers resume and CV writing services focused on
                clear presentation and role-specific content. Depending on your
                needs, professional support can also include a{" "}
                <Link
                  href="/resume-rewriting/"
                  className="text-primary font-medium hover:underline"
                >
                  resume revamp
                </Link>
                , a personalised{" "}
                <Link
                  href="/cover-letter/"
                  className="text-primary font-medium hover:underline"
                >
                  cover letter
                </Link>
                ,{" "}
                <Link
                  href="/linkedin-optimization/"
                  className="text-primary font-medium hover:underline"
                >
                  LinkedIn profile optimisation
                </Link>
                , or{" "}
                <Link
                  href="/career-specific-cv/"
                  className="text-primary font-medium hover:underline"
                >
                  career-specific CV writing
                </Link>
                .
              </p>
              <p>
                A professional review can help identify unclear sections,
                missing evidence, inconsistent formatting, and opportunities to
                improve relevance. No resume-writing service can guarantee an
                interview or a particular ATS outcome.
              </p>
            </Prose>
          </section>

          <BlogFaqAccordion
            items={[
              {
                q: "What is an ATS-friendly resume?",
                a: "An ATS-friendly resume is a document designed to make your qualifications easy for applicant tracking software to extract and organise. It uses readable formatting, conventional section headings, and relevant keywords. It should also communicate your experience clearly to a recruiter. An ATS-friendly format reduces avoidable readability problems, but it cannot guarantee that an employer will select your application.",
              },
              {
                q: "How do I make my resume ATS friendly?",
                a: "Start with a simple layout, use standard headings, and keep contact details in the main document body. Match relevant skills and terminology to the job description, describe achievements clearly, and use consistent dates. Save your resume in the format requested by the employer. Finally, check that the saved file's text remains selectable and that the information appears in the correct order.",
              },
              {
                q: "Is PDF or Word better for an ATS resume?",
                a: "Both PDF and Word documents can be suitable, depending on the employer's instructions and the ATS platform. A DOCX file is useful when Word format is requested, while a text-based PDF can preserve your layout. Avoid scanned PDFs that contain only images. If the employer specifies a format, follow that requirement rather than relying on a universal rule.",
              },
              {
                q: "Do ATS systems automatically reject resumes?",
                a: "Some recruitment workflows use eligibility questions, configured screening criteria, or automated assessments, but ATS software does not operate identically across employers. A formatting issue may also cause information to be extracted incorrectly without necessarily triggering an automatic rejection. Follow the job requirements, answer application questions accurately, and check your resume for parsing problems instead of assuming every unsuccessful application was rejected by a machine.",
              },
              {
                q: "How can I check if my resume is ATS friendly?",
                a: "Begin by opening your saved resume and checking whether you can select and copy its text. Paste the content into a plain-text editor to review the reading order, headings, dates, and contact information. Compare your skills with the job description and inspect any automatically populated application fields. An online resume checker can provide additional feedback, but it cannot reproduce every employer's system or selection rules.",
              },
              {
                q: "Should I use an ATS resume template?",
                a: "A simple, well-structured template can save time and help you organise your information consistently. Choose one with a clear reading order, standard headings, and minimal decorative elements. Avoid templates that depend on complex columns, graphics, or text boxes for essential details. Review the finished document after exporting it because the template alone cannot guarantee accurate parsing.",
              },
              {
                q: "How many keywords should an ATS-friendly resume contain?",
                a: "There is no universal keyword count that works for every job or ATS platform. Include the most relevant skills, qualifications, tools, and job-related terms that accurately describe your background. Place them naturally in your summary, skills, and experience sections where appropriate. Focus on demonstrating the required competencies rather than repeating phrases to achieve an arbitrary keyword density.",
              },
              {
                q: "Can I use a two-page ATS-friendly resume?",
                a: "Yes. A two-page resume can be appropriate when your experience, qualifications, or career achievements justify the additional space. There is no universal ATS rule requiring every resume to fit on one page. Keep the document organised, remove irrelevant details, and make sure your most relevant qualifications are easy to find. Follow any specific length instructions provided by the employer.",
              },
            ]}
          />

          <section className="rounded-3xl border border-primary/25 bg-primary/5 p-6 sm:p-8 space-y-4">
            <H2>Improve your resume before your next application</H2>
            <Prose>
              <p>
                An effective ATS-friendly resume combines clear formatting,
                relevant keywords, and evidence of your qualifications. You do
                not need complicated graphics or a special resume design to
                communicate your value. You need a document that software can
                process and recruiters can understand.
              </p>
              <p>
                Start by simplifying your layout, reviewing the job description,
                and improving your achievement statements. Then check the
                exported file and verify that your application details are
                accurate. If you need more support, Resumes Uplift can help you
                refine your resume, strengthen its relevance, and present your
                professional experience more clearly.
              </p>
            </Prose>
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
            >
              Work with Resumes Uplift
            </Link>
          </section>
        </div>
      </div>
    </article>
  );
}
