import type { ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { BlogPageHero } from "@/components/sections/blog/BlogPageHero";
import { HowToMakeResumeAtsFriendly } from "@/components/sections/blog/HowToMakeResumeAtsFriendly";
import { WhatTenseShouldAResumeBeIn } from "@/components/sections/blog/WhatTenseShouldAResumeBeIn";
import {
  BLOG_POSTS,
  getBlogPost,
  blogPostPath,
} from "@/lib/blog";
import { canonicalUrl } from "@/lib/seo";

const POST_CONTENT: Record<string, ComponentType> = {
  "how-to-make-resume-ats-friendly": HowToMakeResumeAtsFriendly,
  "what-tense-should-a-resume-be-in-past-or-present": WhatTenseShouldAResumeBeIn,
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.filter((post) => post.published).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const url = canonicalUrl(blogPostPath(post.slug));
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Blog", path: "/blog/" },
          { name: post.title, path: blogPostPath(post.slug) },
        ]}
      />
      <BlogPageHero title={post.headline} />
      {(() => {
        const Content = POST_CONTENT[slug];
        return Content ? <Content /> : null;
      })()}
    </>
  );
}
