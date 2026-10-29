import Image from "next/image";
import { cn } from "@/lib/utils";

type BlogCoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** Card thumbs are tighter; article hero can be a bit taller feel via same 16:9 */
  rounded?: "none" | "top" | "all";
};

export function BlogCoverImage({
  src,
  alt,
  className,
  priority = false,
  rounded = "all",
}: BlogCoverImageProps) {
  const radius =
    rounded === "none"
      ? "rounded-none"
      : rounded === "top"
        ? "rounded-t-3xl"
        : "rounded-2xl sm:rounded-3xl";

  return (
    <div
      className={cn(
        "relative w-full aspect-video overflow-hidden border border-border/50 bg-[#f7f7f7] dark:bg-muted/40",
        radius,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
        className="object-contain object-center p-1 sm:p-2"
      />
    </div>
  );
}
