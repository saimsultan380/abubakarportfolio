"use client";

import * as React from "react";
import { ArrowLeft, X, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const samples = [
  { id: 1, name: "Sample Resume 1", filename: "Resumes Uplift Sample 1.jpg", type: "JPG" },
  { id: 2, name: "Sample Resume 2", filename: "Resumes Uplift Sample 2.jpg", type: "JPG" },
  { id: 3, name: "Sample Resume 3", filename: "Resumes Uplift Sample 3.jpg", type: "JPG" },
  { id: 4, name: "Sample Resume 4", filename: "Resumes Uplift Sample 4.jpg", type: "JPG" },
  { id: 5, name: "Sample Resume 5", filename: "Resumes Uplift Sample 5.jpg", type: "JPG" },
  { id: 6, name: "Sample Resume 6", filename: "Resumes Uplift Sample 6.jpeg", type: "JPEG" },
  { id: 7, name: "Sample Resume 7", filename: "Resumes Uplift Sample 7.jpeg", type: "JPEG" },
  { id: 8, name: "Sample Resume 8", filename: "Resumes Uplift Sample 8.jpeg", type: "JPEG" },
  { id: 9, name: "Sample Resume 9", filename: "Resumes Uplift Sample 9.jpeg", type: "JPEG" },
  { id: 10, name: "Sample Resume 10", filename: "Resumes Uplift Sample 10.jpeg", type: "JPEG" },
  { id: 11, name: "Sample Resume 11", filename: "Resumes Uplift Sample 11.jpeg", type: "JPEG" },
];

// Modal Gallery Component
function GalleryModal({
  index,
  onChange,
  onClose,
}: {
  index: number;
  onChange: (nextIndex: number) => void;
  onClose: () => void;
}) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const touchStartXRef = React.useRef<number | null>(null);

  const total = samples.length;
  const safeIndex = ((index % total) + total) % total;
  const sample = samples[safeIndex];

  const goPrev = React.useCallback(
    () => onChange((safeIndex - 1 + total) % total),
    [onChange, safeIndex, total]
  );
  const goNext = React.useCallback(
    () => onChange((safeIndex + 1) % total),
    [onChange, safeIndex, total]
  );

  React.useEffect(() => {
    setIsLoaded(false);
  }, [safeIndex]);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);

    // Prevent body scroll
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [goNext, goPrev, onClose]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const startX = touchStartXRef.current;
    const endX = e.changedTouches[0]?.clientX ?? null;
    touchStartXRef.current = null;
    if (startX == null || endX == null) return;

    const delta = endX - startX;
    const threshold = 40;
    if (delta > threshold) goPrev();
    else if (delta < -threshold) goNext();
  };

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[1100px] h-[86dvh] sm:h-[82dvh] lg:h-[78dvh] max-h-[860px] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="absolute top-3 right-3 z-20 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-black/40 hover:bg-black/55 text-white border border-white/15 flex items-center justify-center transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Frame */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-2xl flex flex-col flex-1 min-h-0">
          <div className="relative w-full flex-1 min-h-[240px] sm:min-h-0">
            {!isLoaded && (
              <div className="absolute inset-0 bg-white/5 animate-pulse" />
            )}
            <Image
              src={`/samples/${encodeURIComponent(sample.filename)}`}
              alt={sample.name}
              fill
              sizes="(max-width: 640px) 96vw, (max-width: 1024px) 92vw, 1100px"
              className={`object-contain p-2 sm:p-4 transition-opacity duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsLoaded(true)}
              priority
            />
          </div>

          {/* Footer: caption + thumbnails slider */}
          <div className="border-t border-white/10 bg-black/30">
            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">
                  {sample.name}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold">
                  Resumes Uplift Gallery
                </p>
              </div>
              <div className="shrink-0 text-xs font-semibold text-white/70">
                {safeIndex + 1} / {total}
              </div>
            </div>

            <div className="px-3 pb-3">
              <div className="no-scrollbar flex gap-2 overflow-x-auto snap-x snap-mandatory">
                {samples.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => onChange(i)}
                    aria-label={`Open ${s.name}`}
                    className={[
                      "relative shrink-0 snap-start rounded-lg overflow-hidden border transition-all",
                      i === safeIndex
                        ? "border-primary/70 ring-2 ring-primary/40"
                        : "border-white/15 hover:border-white/30",
                      "w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14",
                    ].join(" ")}
                  >
                    <Image
                      src={`/samples/${encodeURIComponent(s.filename)}`}
                      alt={s.name}
                      fill
                      sizes="96px"
                      className="object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Prev/Next */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous sample"
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-black/40 hover:bg-black/55 text-white border border-white/15 flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next sample"
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-black/40 hover:bg-black/55 text-white border border-white/15 flex items-center justify-center transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default function SamplesPage() {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="container px-4 mx-auto pt-32 pb-24 flex-grow">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 animate-in fade-in">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-black font-heading mb-8 tracking-tighter text-foreground">
            The <span className="text-primary italic">Uplift</span> Gallery
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore our collection of high-performance, ATS-ready resumes. Click
            any sample to view the optimized design and content layout.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {samples.map((sample) => (
            <div
              key={sample.id}
              onClick={() => setSelectedIndex(sample.id - 1)}
              className="group relative flex flex-col bg-card border border-border rounded-2xl p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-2 ring-1 ring-border/50 group-hover:ring-primary/20"
            >
              {/* Visual Hint */}
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl bg-muted/30 mb-6 overflow-hidden border border-dashed border-border group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors">
                <Image
                  src={`/samples/${encodeURIComponent(sample.filename)}`}
                  alt={sample.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent opacity-70" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80">
                    View Sample
                  </span>
                  <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-white shadow-xl translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <Eye className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="relative">
                <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                  {sample.name}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1.5 rounded-full border border-primary/20 uppercase tracking-widest leading-none">
                    {sample.type}
                  </span>
                  <span className="flex items-center gap-2 uppercase tracking-[0.1em] text-[10px] font-bold text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
                    ATS Optimized
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Image Viewer Modal */}
      {selectedIndex != null && (
        <GalleryModal
          index={selectedIndex}
          onChange={setSelectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </div>
  );
}
