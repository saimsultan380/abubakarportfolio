import type { ReactNode } from "react";
import Link from "next/link";
import { BlogCoverImage } from "@/components/sections/blog/BlogCoverImage";
import { BlogImagePlaceholder } from "@/components/sections/blog/BlogImagePlaceholder";
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

export function WhatTenseShouldAResumeBeIn() {
  const cover = getBlogPost("what-tense-should-a-resume-be-in-past-or-present");

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
              Choosing the correct verb tense can make your resume clearer and
              more professional. If you are unsure whether to describe your
              current responsibilities in the present tense or use the past
              tense throughout your work history, the answer depends on what you
              are describing.
            </p>
            <p>
              Generally, use the present tense for responsibilities you still
              perform in your current job and the past tense for previous jobs
              and completed accomplishments. This approach helps employers
              distinguish your ongoing duties from work you have already
              finished. In this guide, you will learn what tense should a resume
              be in, how to choose the right verbs, and how to avoid common
              resume-writing mistakes.
            </p>
          </Prose>

          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-5 sm:p-7 space-y-3">
            <H3>Quick Answer: What Tense Should a Resume Be In?</H3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              A resume should generally use present tense for ongoing
              responsibilities in your current job and past tense for previous
              jobs and completed projects. For example, write &ldquo;Manage
              customer accounts&rdquo; for an ongoing responsibility and
              &ldquo;Managed customer accounts&rdquo; for a previous role. You
              can use both tenses under your current job when describing ongoing
              duties and achievements that you have already completed.
            </p>
          </div>

          <section className="space-y-5">
            <H2>Should Resumes Be in Past or Present Tense?</H2>
            <Prose>
              <p>
                Resumes commonly use both past and present tense because they
                describe work performed at different times. Your employment dates
                and the status of each responsibility help determine which tense
                is appropriate.
              </p>
            </Prose>
            <Table
              headers={["Resume content", "Recommended tense", "Example"]}
              rows={[
                [
                  "Current, ongoing responsibility",
                  "Present",
                  "Manage customer accounts",
                ],
                [
                  "Previous job responsibility",
                  "Past",
                  "Managed customer accounts",
                ],
                [
                  "Completed project in your current role",
                  "Past",
                  "Launched a new website",
                ],
                [
                  "Ongoing project in your current role",
                  "Present",
                  "Lead a website redesign",
                ],
                [
                  "Previous volunteer position",
                  "Past",
                  "Organised community events",
                ],
                [
                  "Current volunteer position",
                  "Present",
                  "Organise community events",
                ],
              ]}
            />
            <Prose>
              <p>
                University career services, including the University of
                Washington Bothell and UC San Diego, recommend using present
                tense for current work and past tense for previous roles.
              </p>
              <p>
                Therefore, if you are wondering whether a resume should be
                written in past tense or present tense, the best general rule is
                to match the verb to the timing of the activity.
              </p>
            </Prose>
          </section>

          <BlogImagePlaceholder label="Resume tense examples placeholder" />

          <section className="space-y-4">
            <H2>When Should You Use Present Tense in a Resume?</H2>
            <Prose>
              <p>
                Use present tense in a resume when describing responsibilities,
                duties, or activities you currently perform. It communicates that
                the work is ongoing rather than something you did only in the
                past.
              </p>
              <p>
                For example, if you currently work as a marketing manager, your
                bullet points might include:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  Manage digital marketing campaigns across multiple channels.
                </li>
                <li>
                  Analyse campaign performance and identify opportunities for
                  improvement.
                </li>
                <li>
                  Coordinate content production with designers and writers.
                </li>
                <li>Monitor advertising budgets and campaign results.</li>
                <li>Develop strategies to improve customer engagement.</li>
              </ul>
              <p>
                These examples use present-tense verbs because they describe
                ongoing responsibilities.
              </p>
            </Prose>
          </section>

          <section className="space-y-4">
            <H2>
              Should I Use Past Tense in a Resume for My Current Job?
            </H2>
            <Prose>
              <p>
                Yes, when you are describing a completed achievement or project,
                even if you still work for the same employer.
              </p>
              <p>For example:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Launched a new email marketing campaign.</li>
                <li>Trained five new team members.</li>
                <li>Redesigned the company website.</li>
                <li>
                  Introduced a reporting process that reduced manual work.
                </li>
              </ul>
              <p>
                The activities are complete, so past tense is appropriate.
              </p>
              <p>
                This distinction answers a common question about resume current
                or present tense: use present tense for what you continue to do,
                and past tense for what you have already completed. Indeed&apos;s
                resume guidance makes the same distinction between ongoing
                responsibilities and finished projects.
              </p>
            </Prose>
          </section>

          <section className="space-y-4">
            <H2>When Should You Use Past Tense on a Resume?</H2>
            <Prose>
              <p>
                Use past tense for previous jobs, completed responsibilities,
                and achievements that are no longer ongoing. This applies whether
                you left the position recently or several years ago.
              </p>
              <p>
                For example, a former sales representative might write:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Generated new business through targeted outreach.</li>
                <li>Negotiated contracts with corporate clients.</li>
                <li>
                  Maintained customer records and prepared sales reports.
                </li>
                <li>
                  Increased customer retention by improving follow-up processes.
                </li>
              </ul>
              <p>
                Use measurable results when you have accurate figures to support
                them. Avoid inventing percentages or achievements simply to make
                a bullet point sound stronger.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>
              Should a Resume Be in Past Tense for Every Previous Job?
            </H2>
            <Prose>
              <p>
                Yes, past tense is the standard choice for the responsibilities
                and accomplishments associated with previous positions. It
                clearly communicates that the work belongs to a completed period
                of employment.
              </p>
              <p>For example:</p>
            </Prose>
            <Table
              headers={["Incorrect or less clear", "Recommended"]}
              rows={[
                [
                  "Manage a team of eight employees",
                  "Managed a team of eight employees",
                ],
                [
                  "Prepare monthly financial reports",
                  "Prepared monthly financial reports",
                ],
                [
                  "Develop customer relationships",
                  "Developed customer relationships",
                ],
                ["Oversee daily operations", "Oversaw daily operations"],
              ]}
            />
            <Prose>
              <p>
                If you are asking should resumes be in past tense, remember that
                the answer is usually yes for former positions, but not
                necessarily for every section of your entire resume.
              </p>
            </Prose>
          </section>

          <BlogImagePlaceholder label="Past vs present tense comparison placeholder" />

          <section className="space-y-5">
            <H2>Resume Present Tense or Past Tense: Examples</H2>
            <Prose>
              <p>
                The easiest way to understand resume verb tense is to compare
                the same responsibility in different contexts.
              </p>
            </Prose>
            <Table
              headers={["Present tense", "Past tense"]}
              rows={[
                ["Lead a team of designers", "Led a team of designers"],
                [
                  "Manage social media accounts",
                  "Managed social media accounts",
                ],
                ["Write monthly reports", "Wrote monthly reports"],
                [
                  "Build customer relationships",
                  "Built customer relationships",
                ],
                ["Oversee daily operations", "Oversaw daily operations"],
                ["Train new employees", "Trained new employees"],
                [
                  "Coordinate marketing campaigns",
                  "Coordinated marketing campaigns",
                ],
              ]}
            />
            <Prose>
              <p>
                Use the present form for an ongoing activity and the past form
                for an activity that has ended.
              </p>
            </Prose>
          </section>

          <section className="space-y-4">
            <H2>What Is the Past Tense of &ldquo;Oversee&rdquo; on a Resume?</H2>
            <Prose>
              <p>The past tense of oversee is oversaw.</p>
              <p>For example:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  Present: Oversee daily operations and staff scheduling.
                </li>
                <li>Past: Oversaw daily operations and staff scheduling.</li>
              </ul>
              <p>
                Avoid writing &ldquo;overseed&rdquo; or &ldquo;overseen&rdquo;
                when you need the simple past tense. &ldquo;Overseen&rdquo; is
                the past participle, used in constructions such as &ldquo;Have
                overseen daily operations.&rdquo;
              </p>
            </Prose>
          </section>

          <section className="space-y-4">
            <H2>
              Can You Use Both Present and Past Tense in the Same Resume?
            </H2>
            <Prose>
              <p>
                Yes. Using both tenses is appropriate when your resume includes
                current responsibilities and completed work. The important point
                is to use each tense consistently according to the activity
                being described.
              </p>
              <p>For example:</p>
            </Prose>
            <div className="rounded-2xl border border-border/60 bg-muted/20 p-5 space-y-3">
              <p className="font-semibold text-foreground">
                Marketing Manager | January 2024 to Present
              </p>
              <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base text-muted-foreground">
                <li>
                  Manage paid advertising campaigns across search and social
                  platforms.
                </li>
                <li>
                  Analyse performance data and recommend campaign improvements.
                </li>
                <li>
                  Launched a new lead-generation campaign that increased
                  qualified enquiries.
                </li>
                <li>
                  Developed a reporting dashboard to improve campaign
                  visibility.
                </li>
              </ul>
            </div>
            <Prose>
              <p>
                The first two bullets describe ongoing duties. The last two
                describe completed achievements.
              </p>
              <p>
                Some job seekers prefer using past tense for all bullet points,
                including accomplishments in their current role. That can also
                be a reasonable stylistic choice if the wording is clear and
                consistent. Discussions in the resume community on Reddit
                reflect both approaches, with many contributors distinguishing
                ongoing responsibilities from completed achievements.
              </p>
              <p>
                For most applicants, however, the simplest approach is to use
                present tense for current responsibilities and past tense for
                previous roles and completed projects.
              </p>
            </Prose>
          </section>

          <section className="space-y-4">
            <H2>How to Keep Resume Verb Tense Consistent</H2>
            <Prose>
              <p>
                Consistency means using the tense that accurately reflects the
                timing of each responsibility. You do not need to force every
                bullet point into the same tense if the activities happened at
                different times.
              </p>
              <p>Follow these simple rules:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  Current responsibilities: Use present tense, such as
                  &ldquo;Manage client accounts.&rdquo;
                </li>
                <li>
                  Previous responsibilities: Use past tense, such as
                  &ldquo;Managed client accounts.&rdquo;
                </li>
                <li>
                  Completed achievements: Use past tense, such as &ldquo;Reduced
                  reporting time by 20%.&rdquo;
                </li>
                <li>
                  Current projects: Use present tense for ongoing work and past
                  tense for completed milestones.
                </li>
                <li>
                  Professional summary: Use wording that describes your current
                  skills and professional identity.
                </li>
              </ul>
            </Prose>
          </section>

          <section className="space-y-4">
            <H2>Should You Write Your Entire Resume in Past Tense?</H2>
            <Prose>
              <p>
                You can use past tense throughout your experience bullets if
                that style suits your resume. Some applicants prefer it because
                it keeps the wording uniform, particularly when they focus on
                achievements rather than daily duties.
              </p>
              <p>
                However, present tense is generally clearer for ongoing
                responsibilities. If you choose a resume in present tense for
                your current position, make sure your previous roles use past
                tense where appropriate.
              </p>
              <p>
                The goal is clarity, not following a rigid rule that ignores the
                meaning of your words.
              </p>
            </Prose>
          </section>

          <BlogImagePlaceholder label="Common resume tense mistakes placeholder" />

          <section className="space-y-5">
            <H2>Common Resume Tense Mistakes to Avoid</H2>
            <Table
              headers={["Mistake", "Better approach"]}
              rows={[
                [
                  "Using present tense for a job you left",
                  'Change "Manage" to "Managed."',
                ],
                [
                  "Using past tense for every ongoing responsibility",
                  'Use "Manage" for duties you still perform.',
                ],
                [
                  'Writing "overseed" instead of "oversaw"',
                  "Use the correct past tense of irregular verbs.",
                ],
                [
                  "Mixing tenses without a reason",
                  "Check whether each activity is ongoing or completed.",
                ],
                [
                  'Using vague phrases such as "responsible for"',
                  'Start with a clear action verb, such as "Managed," "Created," or "Coordinated."',
                ],
              ]}
            />
            <Prose>
              <p>
                When proofreading, read each bullet point alongside its
                employment dates. This quick check can help you identify tense
                mistakes and make your experience easier to understand.
              </p>
            </Prose>
          </section>

          <section className="space-y-6">
            <H2>Frequently Asked Questions</H2>
            {[
              {
                q: "What tense should a resume be in?",
                a: "Use present tense for ongoing responsibilities in your current role and past tense for previous roles and completed achievements.",
              },
              {
                q: "Should resume be past tense?",
                a: "Usually, yes, for previous jobs and completed accomplishments. Current responsibilities can use present tense.",
              },
              {
                q: "Should I use past tense in resume for my current job?",
                a: "Use past tense for completed projects and achievements. Use present tense for duties you still perform.",
              },
              {
                q: "Should resumes be in past or present tense?",
                a: "Both are appropriate. Choose the tense based on whether the work is ongoing or completed.",
              },
              {
                q: "Can I use present tense in a resume for a previous job?",
                a: "Past tense is the clearer standard for previous positions because the responsibilities belong to a completed period of employment.",
              },
              {
                q: "What is the past tense of oversee in a resume?",
                a: 'The simple past tense is "oversaw." For example, "Oversaw daily operations and staff scheduling."',
              },
            ].map((item, i) => (
              <div key={item.q} className="space-y-2">
                <H3>
                  {i + 1}. {item.q}
                </H3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </section>

          <section className="rounded-3xl border border-primary/25 bg-primary/5 p-6 sm:p-8 space-y-4">
            <H2>Final Thoughts</H2>
            <Prose>
              <p>
                Understanding what tense should resume be in helps you present
                your experience accurately and professionally. Use present tense
                for responsibilities you currently perform, and past tense for
                previous positions, completed projects, and finished
                achievements. You can use both tenses in the same resume when
                the timing of the work justifies it.
              </p>
              <p>
                Before submitting your application, review your job dates,
                action verbs, and bullet points to ensure the wording is
                consistent and easy to follow. A clear resume helps employers
                understand what you do now, what you have accomplished, and how
                your experience relates to the position.
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
