export type BlogPost = {
  slug: string;
  /** Short card / footer title */
  title: string;
  /** Page H1 */
  headline: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  published: boolean;
};

/** Published and upcoming blog posts. Post URLs are root-level: /{slug}/ */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "can-ats-systems-detect-ai-generated-resumes",
    title: "Can ATS Detect AI-Generated Resumes?",
    headline: "Can ATS Systems Detect AI-Generated Resumes or CVs?",
    metaTitle: "Can ATS Systems Detect AI-Generated Resumes or CVs?",
    metaDescription:
      "Can ATS systems detect AI-generated resumes? Learn how ATS screening works, whether recruiters spot ChatGPT writing & how to create a genuine, ATS-friendly resume.",
    image: "/blog/ats-detect-ai-resume-thumbnail.webp",
    imageAlt:
      "Can ATS systems detect AI-generated resumes - what ATS checks vs what recruiters notice",
    published: true,
  },
  {
    slug: "multiple-positions-same-company-resume",
    title: "Multiple Positions at the Same Company",
    headline: "How to List Multiple Positions at the Same Company on a Resume",
    metaTitle: "How to List Multiple Positions at the Same Company on Resume",
    metaDescription:
      "Learn how to list multiple positions at the same company on your resume. Show promotions clearly, choose the right format, and highlight career growth tips.",
    image: "/blog/multiple-positions-same-company-thumbnail.webp",
    imageAlt:
      "How to list multiple positions at the same company - show promotions clearly",
    published: true,
  },
  {
    slug: "how-to-make-resume-ats-friendly",
    title: "How to Make Your Resume ATS Friendly",
    headline: "How to Make Your Resume ATS Friendly: A Step-by-Step Guide",
    metaTitle:
      "How to Make Resume ATS Friendly: ATS Resume Tips & Examples",
    metaDescription:
      "Learn how to make a resume ATS friendly with simple formatting, targeted keywords & examples. Use our ATS Resume tips to improve your resume before applying.",
    image: "/blog/ats-friendly-resume-thumbnail.webp",
    imageAlt: "Make your resume ATS-friendly - a simple guide to getting noticed",
    published: true,
  },
  {
    slug: "what-tense-should-a-resume-be-in-past-or-present",
    title: "What Tense Should a Resume Be In?",
    headline:
      "What Tense Should a Resume Be In? Should Resume Be in Past Tense or Present?",
    metaTitle:
      "What Tense Should a Resume Be In? Past or Present Tense",
    metaDescription:
      "What tense should a resume be in? Learn when to use past or present tense, see examples, and fix common resume verb mistakes before you apply for jobs.",
    image: "/blog/resume-tense-thumbnail.webp",
    imageAlt: "What tense should a resume be in - match the verb to the timing",
    published: true,
  },
  {
    slug: "how-to-write-resume-with-no-experience",
    title: "How to Write a Resume With No Experience",
    headline: "How to Write a Resume With No Experience: A Complete Guide",
    metaTitle: "How to Write a Resume With No Experience (2025 Guide)",
    metaDescription:
      "Learn how to write a resume with no experience. Real examples, section-by-section tips, and recruiter-tested strategies for students, graduates, and career changers.",
    image: "/blog/resume-no-experience-thumbnail-1200x675.jpg",
    imageAlt: "How to write a resume with no experience - a complete guide for graduates and career changers",
    published: true,
  },
  {
    slug: "resume-summary-examples",
    title: "Resume Summary Examples for Every Job",
    headline: "Resume Summary Examples: How to Write a Professional Summary That Gets Interviews",
    metaTitle: "Resume Summary Examples for Every Role and Level (2025)",
    metaDescription:
      "Explore 10+ resume summary examples for every career level and industry. Learn the exact formula to write a professional summary that passes ATS and impresses recruiters.",
    image: "/blog/resume-summary-examples-thumbnail-final.jpg",
    imageAlt: "Resume summary examples - how to write a professional summary that gets interviews",
    published: true,
  },
  {
    slug: "how-long-should-a-resume-be",
    title: "How Long Should a Resume Be?",
    headline: "How Long Should a Resume Be? The Right Resume Length for Every Level",
    metaTitle: "How Long Should a Resume Be? 1 Page or 2 Pages (2025)",
    metaDescription:
      "How long should a resume be? Find the right resume length for your experience level, country, and industry. Includes what to cut and formatting tips to save space.",
    image: "/blog/resume-length-blog-thumbnail.jpg",
    imageAlt: "How long should a resume be - the right length for every career level",
    published: true,
  },
  {
    slug: "how-to-write-a-cover-letter",
    title: "How to Write a Cover Letter",
    headline: "How to Write a Cover Letter: Examples, Tips & Templates for 2025",
    metaTitle: "How to Write a Cover Letter: Examples & Templates (2025)",
    metaDescription:
      "Learn how to write a cover letter that gets interviews. Includes cover letter examples, format guide, structure tips, and a full sample letter for every career level.",
    image: "/blog/how-to-write-a-cover-letter-thumbnail.jpg",
    imageAlt: "How to write a cover letter - examples, tips and templates for every career level",
    published: true,
  },
  {
    slug: "linkedin-headline-examples",
    title: "LinkedIn Headline Examples for Every Industry",
    headline: "LinkedIn Headline Examples: 30+ Best Headlines for Job Seekers in 2025",
    metaTitle: "LinkedIn Headline Examples: Best Headlines for Job Seekers (2025)",
    metaDescription:
      "Explore 30+ LinkedIn headline examples for every industry and career level. Learn the proven formula to write a headline that attracts recruiters and gets you noticed.",
    image: "/blog/linkedin-headline-examples-thumbnail.jpg",
    imageAlt: "LinkedIn headline examples - best headlines for job seekers in 2025",
    published: true,
  },
];

export function getPublishedPosts(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.published);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug && post.published);
}

export function blogPostPath(slug: string): string {
  return `/${slug}/`;
}
