import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { blogPostPath } from "@/lib/blog";
import { BlogCoverImage } from "@/components/sections/blog/BlogCoverImage";
import { BlogImagePlaceholder } from "@/components/sections/blog/BlogImagePlaceholder";

type BlogPostCardProps =
  | { variant: "post"; post: BlogPost }
  | { variant: "placeholder" };

export function BlogPostCard(props: BlogPostCardProps) {
  if (props.variant === "placeholder") {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-dashed border-border/60 bg-muted/20">
        <BlogImagePlaceholder
          label="Coming soon"
          aspect="video"
          className="rounded-none border-0 border-b border-dashed border-border/60"
        />
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
            Coming soon
          </p>
          <h2 className="text-lg sm:text-xl font-bold font-heading text-muted-foreground/80">
            New post arriving soon
          </h2>
        </div>
      </div>
    );
  }

  const { post } = props;

  return (
    <Link
      href={blogPostPath(post.slug)}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card hover:border-primary/40 transition-colors"
    >
      <BlogCoverImage
        src={post.image}
        alt={post.imageAlt}
        rounded="none"
        className="border-0 border-b border-border/60 rounded-none"
      />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
          Article
        </p>
        <h2 className="text-lg sm:text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors leading-snug mb-4">
          {post.title}
        </h2>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Read article
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
