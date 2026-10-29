import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type BlogImagePlaceholderProps = {
  label?: string;
  className?: string;
  aspect?: "video" | "wide" | "square";
};

const aspectClass = {
  video: "aspect-video",
  wide: "aspect-[21/9]",
  square: "aspect-square",
} as const;

export function BlogImagePlaceholder({
  label = "Image placeholder",
  className,
  aspect = "video",
}: BlogImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-dashed border-border/70 bg-muted/40",
        aspectClass[aspect],
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground px-4 text-center">
        <ImageIcon className="h-8 w-8 opacity-50" aria-hidden />
        <span className="text-xs sm:text-sm font-medium tracking-wide">
          {label}
        </span>
      </div>
    </div>
  );
}
