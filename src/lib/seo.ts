/**
 * Central SEO helpers — keep canonicals, sitemap, and breadcrumbs consistent.
 * Always: https + non-www + trailing slash.
 */
export const SITE_URL = "https://resumesuplift.com" as const;
export const SITE_NAME = "Resumes Uplift" as const;

/** Normalize a path to start with / and end with / (homepage is "/"). */
export function withTrailingSlash(path: string): string {
  if (!path || path === "/") return "/";
  const clean = path.split("?")[0].split("#")[0];
  const withLeading = clean.startsWith("/") ? clean : `/${clean}`;
  return withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
}

/** Absolute canonical URL for a path. */
export function canonicalUrl(path: string = "/"): string {
  const normalized = withTrailingSlash(path);
  if (normalized === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${normalized}`;
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

/** Indexable marketing pages for sitemap + breadcrumb registry. */
export const INDEXABLE_PAGES: {
  path: string;
  title: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
  breadcrumbs: BreadcrumbItem[];
}[] = [
  {
    path: "/",
    title: "Home",
    changeFrequency: "weekly",
    priority: 1.0,
    breadcrumbs: [],
  },
  {
    path: "/pricing/",
    title: "Pricing",
    changeFrequency: "weekly",
    priority: 0.9,
    breadcrumbs: [{ name: "Pricing", path: "/pricing/" }],
  },
  {
    path: "/samples/",
    title: "Resume Samples",
    changeFrequency: "monthly",
    priority: 0.8,
    breadcrumbs: [{ name: "Resume Samples", path: "/samples/" }],
  },
  {
    path: "/cv-review/",
    title: "Free CV Review",
    changeFrequency: "monthly",
    priority: 0.8,
    breadcrumbs: [{ name: "Free CV Review", path: "/cv-review/" }],
  },
  {
    path: "/cover-letter/",
    title: "Cover Letter Writing",
    changeFrequency: "weekly",
    priority: 0.9,
    breadcrumbs: [{ name: "Cover Letter Writing", path: "/cover-letter/" }],
  },
  {
    path: "/linkedin-optimization/",
    title: "LinkedIn Optimization",
    changeFrequency: "weekly",
    priority: 0.9,
    breadcrumbs: [
      { name: "LinkedIn Optimization", path: "/linkedin-optimization/" },
    ],
  },
  {
    path: "/resume-rewriting/",
    title: "Resume Rewriting",
    changeFrequency: "weekly",
    priority: 0.9,
    breadcrumbs: [{ name: "Resume Rewriting", path: "/resume-rewriting/" }],
  },
  {
    path: "/career-specific-cv/",
    title: "Career-Specific CV",
    changeFrequency: "weekly",
    priority: 0.9,
    breadcrumbs: [
      { name: "Career-Specific CV", path: "/career-specific-cv/" },
    ],
  },
  {
    path: "/areas/usa/",
    title: "USA",
    changeFrequency: "weekly",
    priority: 0.9,
    breadcrumbs: [{ name: "United States", path: "/areas/usa/" }],
  },
  {
    path: "/areas/uk/",
    title: "United Kingdom",
    changeFrequency: "weekly",
    priority: 0.9,
    breadcrumbs: [{ name: "United Kingdom", path: "/areas/uk/" }],
  },
  {
    path: "/areas/canada/",
    title: "Canada",
    changeFrequency: "weekly",
    priority: 0.9,
    breadcrumbs: [{ name: "Canada", path: "/areas/canada/" }],
  },
  {
    path: "/areas/new-zealand/",
    title: "New Zealand",
    changeFrequency: "weekly",
    priority: 0.9,
    breadcrumbs: [{ name: "New Zealand", path: "/areas/new-zealand/" }],
  },
  {
    path: "/areas/australia/",
    title: "Australia",
    changeFrequency: "weekly",
    priority: 0.9,
    breadcrumbs: [{ name: "Australia", path: "/areas/australia/" }],
  },
];

export function getBreadcrumbsForPath(path: string): BreadcrumbItem[] {
  const normalized = withTrailingSlash(path);
  const page = INDEXABLE_PAGES.find((p) => p.path === normalized);
  if (page) return page.breadcrumbs;

  // Non-indexable pages that still need breadcrumbs for hierarchy
  const extras: Record<string, BreadcrumbItem[]> = {
    "/privacy/": [{ name: "Privacy Policy", path: "/privacy/" }],
    "/terms/": [{ name: "Terms of Service", path: "/terms/" }],
  };
  return extras[normalized] ?? [];
}

/** Build Metadata.alternates.canonical + openGraph.url for a path. */
export function pageAlternates(path: string) {
  const url = canonicalUrl(path);
  return {
    canonical: url,
    openGraphUrl: url,
  };
}
