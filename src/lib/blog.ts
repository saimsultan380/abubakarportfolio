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
