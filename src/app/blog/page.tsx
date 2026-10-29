import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { BlogPageHero } from "@/components/sections/blog/BlogPageHero";
import { BlogPostCard } from "@/components/sections/blog/BlogPostCard";
import { getPublishedPosts } from "@/lib/blog";
import { getBreadcrumbsForPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Career tips, ATS resume advice, LinkedIn optimization, and cover letter insights from Resumes Uplift.",
  alternates: {
    canonical: "https://resumesuplift.com/blog/",
  },
  openGraph: {
    title: "Blog | Resumes Uplift",
    url: "https://resumesuplift.com/blog/",
  },
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbsForPath("/blog/")} />
      <BlogPageHero title="Blog" />
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-5 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
