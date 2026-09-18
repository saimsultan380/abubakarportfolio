"use client";

import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImagePlaceholder({
  label = "Image placeholder",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl border border-dashed border-border/80 bg-muted/40 text-muted-foreground",
        className,
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-card">
        <ImageIcon className="h-6 w-6" />
      </div>
      <p className="px-4 text-center text-sm font-medium">{label}</p>
      <p className="px-4 text-center text-xs text-muted-foreground/70">
        Replace with final image later
      </p>
    </div>
  );
}
