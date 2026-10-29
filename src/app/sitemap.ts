import type { MetadataRoute } from "next";
import { blogPostPath, getPublishedPosts } from "@/lib/blog";
import { INDEXABLE_PAGES, canonicalUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = INDEXABLE_PAGES.map((page) => ({
    url: canonicalUrl(page.path),
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const posts = getPublishedPosts().map((post) => ({
    url: canonicalUrl(blogPostPath(post.slug)),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...posts];
}
