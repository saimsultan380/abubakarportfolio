import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { BlogPageHero } from "@/components/sections/blog/BlogPageHero";
import { BlogPostCard } from "@/components/sections/blog/BlogPostCard";
import {
  BLOG_CARD_COUNT,
  getPublishedPosts,
} from "@/lib/blog";
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
  const cards = Array.from({ length: BLOG_CARD_COUNT }, (_, index) => {
    const post = posts[index];
    return post
      ? { key: post.slug, variant: "post" as const, post }
      : { key: `placeholder-${index}`, variant: "placeholder" as const };
  });

  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbsForPath("/blog/")} />
      <BlogPageHero title="Blog" />
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-5 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
            {cards.map((card) =>
              card.variant === "post" ? (
                <BlogPostCard
                  key={card.key}
                  variant="post"
                  post={card.post}
                />
              ) : (
                <BlogPostCard key={card.key} variant="placeholder" />
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
