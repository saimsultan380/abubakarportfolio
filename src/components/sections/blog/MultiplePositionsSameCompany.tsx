import type { ReactNode } from "react";
import Link from "next/link";
import { BlogCoverImage } from "@/components/sections/blog/BlogCoverImage";
import { BlogFaqAccordion } from "@/components/sections/blog/BlogFaqAccordion";
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

function ResumeBlock({ children }: { children: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-muted/20 p-4 sm:p-5">
      <pre className="text-xs sm:text-sm text-muted-foreground whitespace-pre-wrap font-mono leading-relaxed">
        {children}
      </pre>
    </div>
  );
}

export function MultiplePositionsSameCompany() {
  const cover = getBlogPost("multiple-positions-same-company-resume");

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
              Have you been promoted, transferred to another department, or
              moved through several job titles while working for the same
              employer? Knowing how to list multiple positions at same company
              on resume can be challenging, especially when you want to show
              career growth without repeating information.
            </p>
            <p>
              The way you organise these roles affects how clearly recruiters
              understand your experience. If you list every position separately
              without a clear structure, your work history may look confusing. If
              you combine everything into one entry, you might hide valuable
              promotions and achievements. This guide explains the best resume
              formats for multiple roles, with practical examples and tips for
              presenting your career progression.
            </p>
          </Prose>

          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-5 sm:p-7 space-y-3">
            <H3>Quick Answer: How Do You List Multiple Positions at the Same Company?</H3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              To list multiple positions at the same company, write the
              employer&apos;s name once and place each job title underneath it
              in reverse chronological order. Include separate employment dates
              for every position and add achievement-focused bullet points where
              responsibilities changed. If you left and later returned, list each
              employment period as a separate entry.
            </p>
          </div>

          <section className="space-y-4">
            <H2>Key Takeaways</H2>
            <ul className="space-y-2.5 text-muted-foreground">
              {[
                "Group consecutive positions under one company heading when the roles form a clear career progression.",
                "Include the correct job title and employment dates for every position.",
                "Use separate bullet points when your responsibilities or achievements changed.",
                "Mention promotions to make career growth clear.",
                "Repeat the company name when you left and returned or when separate entries improve clarity.",
                "Use a simple, readable layout that works for recruiters and applicant tracking systems.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-5">
            <H2>What Does Multiple Positions at the Same Company Mean?</H2>
            <Prose>
              <p>
                Multiple positions at the same company means you held two or more
                job titles for one employer during different periods of
                employment.
              </p>
              <p>
                This can happen when you receive a promotion, move to another
                department, accept an internal transfer, or take on additional
                responsibilities. For example, you might start as a Marketing
                Assistant, become a Marketing Coordinator, and later move into a
                Marketing Manager position.
              </p>
              <p>
                Listing these roles correctly helps employers understand your
                career history and see how your responsibilities developed.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>How to List Multiple Positions at the Same Company</H2>
            <Prose>
              <p>
                The most straightforward method is to place the company name and
                your overall employment dates at the top. Then list each
                position underneath, starting with your most recent role.
              </p>
              <p>Follow these steps to organise your work experience.</p>
            </Prose>

            <H3>Step 1: Write the Company Name Once</H3>
            <Prose>
              <p>
                Start with the employer&apos;s name, location, and your overall
                employment period.
              </p>
              <p>For example:</p>
            </Prose>
            <ResumeBlock>
              {`ABC Marketing Solutions | Chicago, IL | January 2020 to Present`}
            </ResumeBlock>
            <Prose>
              <p>
                This establishes that all the positions underneath belong to the
                same employer.
              </p>
            </Prose>

            <H3>Step 2: List Each Job Title Separately</H3>
            <Prose>
              <p>
                Place your latest job title first, followed by your previous
                positions. Add the dates you held each role so the recruiter can
                understand when your responsibilities changed.
              </p>
              <p>For example:</p>
            </Prose>
            <ResumeBlock>
              {`Marketing Manager | January 2024 to Present
Marketing Coordinator | June 2022 to December 2023
Marketing Assistant | January 2020 to May 2022`}
            </ResumeBlock>

            <H3>Step 3: Add Relevant Achievements Under Each Position</H3>
            <Prose>
              <p>
                Give each role bullet points that reflect the responsibilities
                and results associated with that particular job.
              </p>
              <p>
                Your latest position should usually receive the most attention
                because it represents your current level of responsibility.
                Earlier roles can have fewer bullet points, especially when
                their duties are less relevant to your target position.
              </p>
            </Prose>

            <H3>Step 4: Highlight Your Promotion or Career Progression</H3>
            <Prose>
              <p>
                If you received a promotion, make the transition clear. You can
                mention it in the first bullet point under your new position.
              </p>
              <p>For example:</p>
            </Prose>
            <ResumeBlock>
              {`Promoted from Marketing Coordinator to Marketing Manager after leading successful digital campaigns and improving lead generation processes.`}
            </ResumeBlock>
            <Prose>
              <p>
                Only use this wording when it accurately describes your
                promotion.
              </p>
            </Prose>

            <H3>Step 5: Check the Dates and Formatting</H3>
            <Prose>
              <p>
                Review every job title and employment date before submitting your
                resume. Make sure the dates do not suggest that you held a
                position longer than you actually did.
              </p>
              <p>
                Keep the formatting consistent throughout your work experience
                section.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>
              Which Resume Format Should You Choose for Multiple Positions at
              One Company?
            </H2>
            <Prose>
              <p>
                There is no single format that works for every situation. Choose
                your layout according to how much your responsibilities changed
                and whether your employment was continuous.
              </p>
              <p>
                The three common approaches are stacked job titles, separate
                positions under one employer heading, and fully separate
                employment entries.
              </p>
            </Prose>

            <H3>1. Stack Job Titles Under One Company</H3>
            <Prose>
              <p>
                Use stacked titles when you received promotions or title changes
                but your responsibilities remained broadly similar.
              </p>
              <p>
                This format saves space and makes your career progression easy to
                recognise.
              </p>
              <p>Example:</p>
            </Prose>
            <ResumeBlock>
              {`ABC Marketing Solutions | Chicago, IL | 2020 to Present
Marketing Manager | January 2024 to Present
Marketing Coordinator | June 2022 to December 2023
Marketing Assistant | January 2020 to May 2022
• Manage marketing campaigns and coordinate activities across digital channels.
• Review campaign performance and identify opportunities to improve lead generation.
• Support content planning, email marketing, and reporting activities.`}
            </ResumeBlock>
            <Prose>
              <p>
                This compact format works best when the roles share similar duties
                and achievements.
              </p>
            </Prose>

            <H3>2. List Each Position Separately Under One Company</H3>
            <Prose>
              <p>
                Choose this approach when your responsibilities, seniority, or job
                functions changed significantly.
              </p>
              <p>
                You still mention the company once, but each role receives its
                own heading and achievement bullets.
              </p>
              <p>Example:</p>
            </Prose>
            <ResumeBlock>
              {`ABC Marketing Solutions | Chicago, IL | January 2020 to Present

Marketing Manager | January 2024 to Present
• Lead a team of five marketing professionals and coordinate campaign priorities.
• Manage an annual marketing budget and monitor campaign performance.
• Introduced a reporting process to improve performance tracking.

Marketing Coordinator | June 2022 to December 2023
• Coordinated email campaigns and social media content calendars.
• Analysed campaign data and prepared monthly performance reports.
• Worked with designers and writers to deliver marketing materials.

Marketing Assistant | January 2020 to May 2022
• Supported content creation and campaign administration.
• Updated website content and maintained marketing records.`}
            </ResumeBlock>
            <Prose>
              <p>
                This layout gives each position enough space to show what you
                accomplished.
              </p>
            </Prose>

            <H3>3. Create Separate Entries for Each Employment Period</H3>
            <Prose>
              <p>
                Repeat the company name when you left the organisation and
                returned later. This also works when separate entries make a
                complicated timeline easier to understand.
              </p>
              <p>Example:</p>
            </Prose>
            <ResumeBlock>
              {`ABC Marketing Solutions | Chicago, IL
Marketing Manager | March 2025 to Present
• Manage campaign strategy and oversee marketing performance.

XYZ Media Group | Chicago, IL
Marketing Specialist | January 2024 to February 2025
• Developed digital content and supported client campaigns.

ABC Marketing Solutions | Chicago, IL
Marketing Coordinator | January 2021 to December 2023
• Coordinated marketing activities and maintained campaign schedules.`}
            </ResumeBlock>
            <Prose>
              <p>
                This format makes the break in employment clear rather than
                suggesting continuous service.
              </p>
            </Prose>

            <H3>Comparing the Three Resume Formats</H3>
            <Table
              headers={["Resume format", "Best situation", "Main advantage"]}
              rows={[
                [
                  "Stacked job titles",
                  "Similar responsibilities and straightforward promotions",
                  "Saves space",
                ],
                [
                  "Separate roles under one company",
                  "Different duties or increased responsibility",
                  "Shows achievements clearly",
                ],
                [
                  "Separate company entries",
                  "Returning to an employer or interrupted employment",
                  "Makes the timeline clear",
                ],
              ]}
            />
            <Prose>
              <p>
                Which format is best? For consecutive roles with clear
                progression, use one employer heading with separate titles and
                dates. If your roles were very different, give each position its
                own achievement bullets. If you left and returned, show separate
                employment periods.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>How to Show Promotions on a Resume</H2>
            <Prose>
              <p>
                A promotion is worth highlighting because it demonstrates that
                your responsibilities or position changed during your employment.
                List the previous and current job titles with accurate dates
                rather than showing only your latest title.
              </p>
              <p>Here are three ways to present promotions.</p>
            </Prose>

            <H3>Mention the Promotion in Your New Role</H3>
            <Prose>
              <p>You can use a bullet point to explain your progression.</p>
              <p>Example:</p>
            </Prose>
            <ResumeBlock>
              {`Senior Sales Executive | March 2024 to Present
• Promoted from Sales Executive after consistently meeting quarterly sales targets.
• Manage key client relationships and support the onboarding of new team members.
• Develop sales strategies to improve customer retention.`}
            </ResumeBlock>
            <Prose>
              <p>
                This approach connects your promotion with your professional
                achievements.
              </p>
            </Prose>

            <H3>Show the Previous and New Job Titles</H3>
            <Prose>
              <p>
                If you received multiple promotions, list every relevant title
                underneath the employer heading.
              </p>
              <p>Example:</p>
            </Prose>
            <ResumeBlock>
              {`Brightway Financial Services | New York, NY | 2019 to Present
Sales Manager | January 2024 to Present
Senior Sales Executive | January 2022 to December 2023
Sales Executive | June 2019 to December 2021`}
            </ResumeBlock>
            <Prose>
              <p>
                This structure gives recruiters a clear view of your progression.
              </p>
            </Prose>

            <H3>Explain How Your Responsibilities Increased</H3>
            <Prose>
              <p>
                Your resume should show more than changes in job titles. Explain
                how your responsibilities, decision-making authority, team size,
                or business impact developed.
              </p>
            </Prose>
            <Table
              headers={[
                "Previous position",
                "New position",
                "What to highlight",
              ]}
              rows={[
                [
                  "Sales Executive",
                  "Sales Manager",
                  "Team leadership and sales strategy",
                ],
                [
                  "Junior Accountant",
                  "Senior Accountant",
                  "Financial reporting and review responsibilities",
                ],
                [
                  "Marketing Assistant",
                  "Marketing Coordinator",
                  "Campaign planning and coordination",
                ],
                [
                  "Customer Service Representative",
                  "Team Leader",
                  "Staff supervision and issue resolution",
                ],
              ]}
            />
            <Prose>
              <p>Use only changes that genuinely reflect your experience.</p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>Resume Examples for Multiple Positions at One Company</H2>
            <Prose>
              <p>
                The following examples show how to list multiple jobs at one
                company in different professional situations. Adapt the structure
                to your actual titles, dates, and achievements.
              </p>
            </Prose>

            <H3>Example 1: Two Positions at the Same Company</H3>
            <Prose>
              <p>
                Use this structure when you held two consecutive roles with the
                same employer.
              </p>
            </Prose>
            <ResumeBlock>
              {`NORTHSTAR TECHNOLOGIES | Austin, TX | 2021 to Present

Project Manager | January 2024 to Present
• Manage project schedules, budgets, and delivery priorities.
• Coordinate cross-functional teams to complete projects on time.
• Communicate progress and risks to stakeholders.

Project Coordinator | June 2021 to December 2023
• Maintained project documentation and status reports.
• Scheduled team meetings and tracked project milestones.
• Supported project managers with resource coordination.`}
            </ResumeBlock>

            <H3>Example 2: Three Positions at the Same Company</H3>
            <Prose>
              <p>
                If you received several promotions, list all relevant positions
                in reverse chronological order.
              </p>
            </Prose>
            <ResumeBlock>
              {`GREENFIELD RETAIL GROUP | Dallas, TX | 2019 to Present

Store Manager | January 2024 to Present
• Oversee daily store operations and team performance.
• Monitor sales results and implement operational improvements.

Assistant Store Manager | January 2022 to December 2023
• Supervised daily activities and supported staff development.
• Helped manage inventory and customer service standards.

Sales Associate | March 2019 to December 2021
• Assisted customers with product selection and purchases.
• Maintained product displays and supported stock management.`}
            </ResumeBlock>

            <H3>Example 3: Multiple Positions in Different Departments</H3>
            <Prose>
              <p>
                If you moved to a different department, use separate role
                descriptions so the change in responsibilities is clear.
              </p>
            </Prose>
            <ResumeBlock>
              {`GLOBAL SERVICES INC. | Boston, MA | 2020 to Present

Human Resources Specialist | February 2024 to Present
• Support recruitment, onboarding, and employee documentation.
• Coordinate HR processes and maintain personnel records.

Operations Coordinator | January 2022 to January 2024
• Coordinated daily operational activities across departments.
• Prepared reports and monitored workflow requirements.

Administrative Assistant | June 2020 to December 2021
• Managed calendars, correspondence, and office records.
• Supported administrative tasks for department managers.`}
            </ResumeBlock>

            <H3>Example 4: Multiple Positions Held at the Same Time</H3>
            <Prose>
              <p>
                If you held two roles simultaneously, show the overlapping dates
                honestly. You can use separate entries or combine the titles when
                both roles were genuinely part of your responsibilities.
              </p>
            </Prose>
            <ResumeBlock>
              {`ABC CREATIVE STUDIO | Miami, FL | 2022 to Present

Marketing Coordinator | January 2023 to Present
Social Media Lead | June 2023 to Present
• Coordinate marketing campaigns and manage social media publishing.
• Prepare content calendars and monitor engagement.
• Report campaign results and recommend improvements.`}
            </ResumeBlock>
            <Prose>
              <p>
                Do not change the dates to make the positions appear sequential
                if you performed them at the same time.
              </p>
            </Prose>

            <H3>Example 5: Returning to a Previous Employer</H3>
            <Prose>
              <p>
                If you left a company and later returned, list each period
                separately. Include the correct dates for both periods.
              </p>
            </Prose>
            <ResumeBlock>
              {`ABC TECHNOLOGIES | Seattle, WA
Operations Manager | March 2025 to Present
• Oversee operational planning and performance reporting.

ABC TECHNOLOGIES | Seattle, WA
Operations Associate | January 2021 to December 2022
• Supported daily operations and maintained process documentation.`}
            </ResumeBlock>
            <Prose>
              <p>
                If you worked elsewhere between these periods, include that
                employer in the correct chronological position.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>How to Make Multiple Positions ATS-Friendly</H2>
            <Prose>
              <p>
                An Applicant Tracking System (ATS) is software employers use to
                collect, organise, and manage job applications. A clear work
                history helps both recruitment software and human reviewers
                understand your employment timeline.
              </p>
              <p>Use these practices when formatting multiple positions.</p>
            </Prose>

            <H3>Use Clear Company and Job Title Headings</H3>
            <Prose>
              <p>
                Keep the employer name, job title, and dates easy to identify.
                Avoid placing several titles and date ranges in one complicated
                paragraph.
              </p>
            </Prose>

            <H3>Use Consistent Date Formatting</H3>
            <Prose>
              <p>
                Choose one date format and use it throughout your resume.
              </p>
            </Prose>
            <Table
              headers={["Recommended format", "Example"]}
              rows={[
                ["Month and year", "January 2022 to March 2024"],
                ["Abbreviated month and year", "Jan 2022 to Mar 2024"],
                ["Year only", "2022 to 2024"],
              ]}
            />
            <Prose>
              <p>
                Month and year can provide more detail when you have several
                internal moves within a short period. Follow the same style
                throughout the document.
              </p>
            </Prose>

            <H3>Use Standard Work Experience Headings</H3>
            <Prose>
              <p>Use familiar labels such as:</p>
              <ul className="space-y-1.5 list-disc pl-5">
                <li>Work Experience</li>
                <li>Professional Experience</li>
                <li>Employment History</li>
              </ul>
              <p>
                Avoid creative headings that might make your employment history
                harder to identify.
              </p>
            </Prose>

            <H3>Keep the Layout Simple</H3>
            <Prose>
              <p>
                Use a readable font, clear headings, and straightforward bullet
                points. Avoid unnecessary graphics, text boxes, and complex
                layouts that may affect how information is extracted.
              </p>
              <p>
                Always follow the employer&apos;s file-format instructions. Check
                the document after uploading it if the application portal
                displays parsed information.
              </p>
            </Prose>

            <H3>Include Relevant Job Description Keywords</H3>
            <Prose>
              <p>
                Tailor each role&apos;s bullet points to the position you are
                applying for. Include relevant skills, tools, and responsibilities
                when they accurately reflect your experience.
              </p>
              <p>
                Do not repeat the same keywords under every job title simply to
                increase keyword frequency.
              </p>
              <p>
                Simple resume review flow: Prepare employment history → Add each
                job title and date → Write role-specific achievements → Check
                formatting → Review the final resume.
              </p>
            </Prose>

            <H3>Common Mistakes to Avoid When Listing Multiple Jobs at One Company</H3>
            <Prose>
              <p>
                Small formatting mistakes can make your work history harder to
                understand. Avoid these common problems.
              </p>
            </Prose>
            <Table
              headers={["Mistake", "Better approach"]}
              rows={[
                [
                  "Listing only your latest job title",
                  "Include relevant previous positions and their dates",
                ],
                [
                  "Repeating identical bullet points",
                  "Give each role its own responsibilities and achievements",
                ],
                [
                  "Leaving out promotion dates",
                  "Show the exact period for every position",
                ],
                [
                  "Combining unrelated roles",
                  "Use separate descriptions for different responsibilities",
                ],
                [
                  "Showing incorrect employment dates",
                  "Verify every start and end date",
                ],
                [
                  "Overloading older roles with details",
                  "Give more space to recent and relevant experience",
                ],
              ]}
            />
          </section>

          <section className="space-y-5">
            <H2>Before and After: Improve Your Work Experience</H2>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-muted/20 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Weak version
                </p>
                <pre className="text-xs sm:text-sm text-muted-foreground whitespace-pre-wrap font-mono leading-relaxed">
                  {`ABC Marketing Solutions | 2020 to Present
Marketing Assistant / Coordinator / Manager
• Worked on marketing activities.
• Managed different tasks.
• Helped the team with campaigns.`}
                </pre>
              </div>
              <div className="rounded-2xl border border-primary/25 bg-primary/5 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Improved version
                </p>
                <pre className="text-xs sm:text-sm text-foreground whitespace-pre-wrap font-mono leading-relaxed">
                  {`ABC Marketing Solutions | Chicago, IL | 2020 to Present

Marketing Manager | January 2024 to Present
• Lead campaign planning and coordinate a five-person marketing team.
• Monitor campaign performance and prepare monthly reports.

Marketing Coordinator | June 2022 to December 2023
• Coordinated email campaigns and managed content schedules.
• Worked with internal teams to deliver marketing materials.

Marketing Assistant | January 2020 to May 2022
• Supported content preparation and campaign administration.
• Updated website information and maintained marketing records.`}
                </pre>
              </div>
            </div>
            <Prose>
              <p>
                The weak version does not explain when you held each position or
                how your responsibilities developed.
              </p>
              <p>
                The improved version makes the timeline, responsibilities, and
                career progression easier to understand.
              </p>
            </Prose>
          </section>

          <section className="space-y-5">
            <H2>Where Resumes Uplift Fits</H2>
            <Prose>
              <p>
                If you have held several positions at one company, your resume
                should show more than a list of job titles. It should
                communicate how your responsibilities developed and which
                achievements make you suitable for your next opportunity.
              </p>
              <p>
                Resumes Uplift provides professional resume writing and resume
                revamp services to help organise employment history, present
                career progression, and highlight relevant accomplishments. The
                goal is to create a clear, professional resume based on your
                actual experience.
              </p>
            </Prose>
          </section>

          <section className="space-y-4">
            <H2>Final Checklist: Listing Multiple Positions at the Same Company</H2>
            <Prose>
              <p>Before sending your resume, review these points:</p>
            </Prose>
            <ul className="space-y-2.5 text-muted-foreground">
              {[
                "Company name and location are correct.",
                "Every relevant job title is included.",
                "Each position has accurate start and end dates.",
                "Roles appear in reverse chronological order.",
                "Promotions and internal transfers are clearly shown.",
                "Each role has relevant responsibilities and achievements.",
                "Repeated bullet points have been removed.",
                "The layout is consistent and easy to read.",
                "The resume reflects the requirements of the target job.",
                "The employment history matches your other application records.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <BlogFaqAccordion
            title="Frequently Asked Questions"
            items={[
              {
                q: "How do you list multiple positions at the same company on a resume?",
                a: "List the company name once, followed by each job title and its employment dates. Put your most recent position first and use separate bullet points when your responsibilities changed.",
              },
              {
                q: "Should I list each position separately on my resume?",
                a: "Yes, when the positions involved different responsibilities, skills, or levels of seniority. You can keep them under one company heading to show that they were consecutive roles with the same employer.",
              },
              {
                q: "Do you repeat the company name for multiple positions?",
                a: "You usually do not need to repeat the company name when your positions were consecutive. Repeat it when you left and returned, or when separate entries make your employment timeline easier to understand.",
              },
              {
                q: "How do I show a promotion on my resume?",
                a: "List your previous and new job titles with their respective dates. You can also include a bullet point explaining that you were promoted and highlight the achievements or increased responsibilities behind the move.",
              },
              {
                q: "Can I combine two positions at the same company?",
                a: "Yes, if the roles had very similar responsibilities and combining them does not hide important career information. Keep the titles and dates clear, and avoid suggesting that you held a particular title longer than you did.",
              },
              {
                q: "How many bullet points should each position have?",
                a: "Give your most recent and relevant role the most detail. Earlier positions can have fewer bullets, focusing on achievements and skills that support your target job.",
              },
              {
                q: "Should I list multiple positions at the same company on LinkedIn?",
                a: "Yes. LinkedIn allows you to show separate positions under the same employer. Use accurate dates and job titles so your profile presents a consistent employment history.",
              },
              {
                q: "How do I list multiple positions if I worked in different departments?",
                a: "Use one company heading and give each department or position its own title, dates, and relevant achievements. This helps readers understand that you changed functions rather than simply changing job titles.",
              },
            ]}
          />

          <section className="space-y-5">
            <H2>Get Professional Help With Your Resume</H2>
            <Prose>
              <p>
                Your experience within one company can demonstrate professional
                growth, adaptability, and increasing responsibility. Presenting
                that history clearly helps recruiters understand the value you
                bring to a new role.
              </p>
              <p>
                If your work history includes several promotions, internal
                transfers, or different responsibilities, Resumes Uplift can help
                organise your experience into a professional resume that reflects
                your career development.
              </p>
            </Prose>
          </section>

          <section className="rounded-3xl border border-primary/25 bg-primary/5 p-6 sm:p-8 space-y-4">
            <H2>Conclusion</H2>
            <Prose>
              <p>
                Knowing how to list multiple positions at the same company on a
                resume helps you present promotions and internal career moves
                clearly. Use one employer heading for consecutive roles, include
                accurate dates for every position, and give separate descriptions
                when your responsibilities changed. If you left and returned,
                show each employment period separately. Most importantly, focus
                on achievements rather than repeating job duties. A well-organised
                work history gives recruiters a clearer understanding of your
                experience and helps them see how you have developed throughout
                your career.
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