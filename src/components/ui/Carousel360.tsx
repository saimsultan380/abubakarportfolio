"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ─────────────────────────────────────────────
// Resume Sample Images
// ─────────────────────────────────────────────

const images = [
  "/samples/Resumes Uplift Sample 1.jpg",
  "/samples/Resumes Uplift Sample 2.jpg",
  "/samples/Resumes Uplift Sample 3.jpg",
  "/samples/Resumes Uplift Sample 4.jpg",
  "/samples/Resumes Uplift Sample 5.jpg",
  "/samples/Resumes Uplift Sample 6.jpeg",
  "/samples/Resumes Uplift Sample 7.jpeg",
  "/samples/Resumes Uplift Sample 8.jpeg",
  "/samples/Resumes Uplift Sample 9.jpeg",
  "/samples/Resumes Uplift Sample 10.jpeg",
  "/samples/Resumes Uplift Sample 11.jpeg",
];

// How often the carousel auto-rotates (ms)
const AUTOPLAY_INTERVAL_MS = 2800;

// Spring physics for the ring rotation
const springTransition = {
  type: "spring",
  stiffness: 55,
  damping: 15,
  mass: 0.7,
} as const;

// Ring depth (radius) bounds and geometry
const RADIUS_MIN = 100;
const RADIUS_MAX = 220;
const RADIUS_WIDTH_RATIO = 0.45;
const PERSPECTIVE_MULTIPLIER = 2.4; // 3D perspective depth
const RING_TILT_DEG = 28; // tilt angle of ring thumbnails

// Center image crossfade
const CROSSFADE_DURATION_S = 0.45;
const CROSSFADE_EASE = [0.22, 1, 0.36, 1] as const;

// Size classes — thumbnails on the ring (portrait resume proportion)
const THUMB_SIZE_CLASSES =
  "w-12 h-16 sm:w-14 sm:h-20 md:w-16 md:h-22 lg:w-18 lg:h-24";
const THUMB_SIZES_ATTR =
  "(max-width: 640px) 48px, (max-width: 768px) 64px, 80px";

// Size classes — active center image (portrait document look)
const CENTER_SIZE_CLASSES =
  "w-44 h-60 sm:w-52 sm:h-72 md:w-56 md:h-76 lg:w-64 lg:h-88";
const CENTER_SIZES_ATTR =
  "(max-width: 640px) 180px, (max-width: 768px) 220px, 260px";

// Nav button size
const BUTTON_SIZE_CLASSES = "w-9 h-9 sm:w-10 sm:h-10";

// ─────────────────────────────────────────────

// Small spinner shown while an image is loading
const ImageLoader: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-black/5 dark:bg-white/5">
    <div className="w-6 h-6 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
  </div>
);

export function Carousel360() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [radius, setRadius] = useState(180);
  const [loadedThumbs, setLoadedThumbs] = useState<boolean[]>(() =>
    images.map(() => false),
  );

  const numImages = images.length;
  const angleStep = 360 / numImages;

  const steps = Math.round(rotation / angleStep);
  const centerIndex = ((-steps % numImages) + numImages) % numImages;
  const centerImage = images[centerIndex];

  const [prevCenterIndex, setPrevCenterIndex] = useState(centerIndex);
  const [centerLoaded, setCenterLoaded] = useState(false);
  if (centerIndex !== prevCenterIndex) {
    setPrevCenterIndex(centerIndex);
    setCenterLoaded(false);
  }

  useEffect(() => {
    const updateRadius = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      setRadius(
        Math.max(RADIUS_MIN, Math.min(RADIUS_MAX, width * RADIUS_WIDTH_RATIO)),
      );
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + angleStep);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [angleStep]);

  const rotateCarousel = useCallback(
    (direction: "left" | "right") => {
      setRotation(
        (prev) => prev + (direction === "left" ? -angleStep : angleStep),
      );
    },
    [angleStep],
  );

  const markThumbLoaded = useCallback((index: number) => {
    setLoadedThumbs((prev) => {
      if (prev[index]) return prev;
      const next = [...prev];
      next[index] = true;
      return next;
    });
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center select-none py-4 sm:py-6">
      {/* 3D Orbit Stage */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center"
      >
        <div
          className="relative w-full h-full"
          style={{ perspective: radius * PERSPECTIVE_MULTIPLIER }}
        >
          {images.map((item, index) => {
            const targetAngle = rotation + angleStep * index;
            return (
              <motion.div
                key={item}
                className="absolute inset-0 flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: targetAngle }}
                transition={springTransition}
              >
                <motion.div
                  className="relative rounded-lg overflow-hidden border border-border/50 bg-card shadow-[0_6px_20px_rgba(0,0,0,0.18)] ring-1 ring-white/10"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{
                    rotateY: -targetAngle,
                    rotateX: RING_TILT_DEG,
                    z: radius,
                  }}
                  transition={springTransition}
                >
                  {!loadedThumbs[index] && <ImageLoader />}
                  <Image
                    src={item}
                    alt={`Resume Sample ${index + 1}`}
                    width={80}
                    height={110}
                    sizes={THUMB_SIZES_ATTR}
                    onLoad={() => markThumbLoaded(index)}
                    className={`object-cover object-top ${THUMB_SIZE_CLASSES} opacity-90 transition-opacity duration-300 ${
                      loadedThumbs[index] ? "opacity-90" : "opacity-0"
                    }`}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Center Card with Spotlight */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          {/* Subtle Glow Behind Center Image */}
          <div className="absolute w-44 h-60 sm:w-52 sm:h-72 rounded-2xl bg-primary/20 blur-2xl -z-10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={centerIndex}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: CROSSFADE_DURATION_S,
                ease: CROSSFADE_EASE,
              }}
              className="relative rounded-2xl overflow-hidden border-2 border-primary/30 bg-card shadow-[0_15px_40px_rgba(0,0,0,0.25)] ring-1 ring-border/50"
            >
              {!centerLoaded && <ImageLoader />}
              <Image
                src={centerImage}
                alt={`Resume Sample ${centerIndex + 1}`}
                width={260}
                height={350}
                sizes={CENTER_SIZES_ATTR}
                loading="lazy"
                onLoad={() => setCenterLoaded(true)}
                className={`object-cover object-top ${CENTER_SIZE_CLASSES} transition-opacity duration-300 ${
                  centerLoaded ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Sample Indicator Badge */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-background/80 backdrop-blur-md border border-border/60 text-[10px] font-semibold text-foreground tracking-wide whitespace-nowrap shadow-sm">
                Sample #{centerIndex + 1}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-3 mt-4 sm:mt-6 z-30">
        <button
          type="button"
          aria-label="Previous sample"
          onClick={() => rotateCarousel("left")}
          className={`group relative flex items-center justify-center ${BUTTON_SIZE_CLASSES} rounded-full overflow-hidden
                     border border-border/60 bg-card/80 backdrop-blur-md hover:bg-card
                     shadow-md shadow-black/5 dark:shadow-black/20
                     transition-all duration-200 active:scale-90 cursor-pointer`}
        >
          <ArrowLeft className="h-4 w-4 text-foreground/70 group-hover:text-foreground transition-colors duration-200" />
        </button>

        <span className="text-xs font-medium text-muted-foreground px-2">
          {centerIndex + 1} / {numImages}
        </span>

        <button
          type="button"
          aria-label="Next sample"
          onClick={() => rotateCarousel("right")}
          className={`group relative flex items-center justify-center ${BUTTON_SIZE_CLASSES} rounded-full overflow-hidden
                     border border-border/60 bg-card/80 backdrop-blur-md hover:bg-card
                     shadow-md shadow-black/5 dark:shadow-black/20
                     transition-all duration-200 active:scale-90 cursor-pointer`}
        >
          <ArrowRight className="h-4 w-4 text-foreground/70 group-hover:text-foreground transition-colors duration-200" />
        </button>
      </div>
    </div>
  );
}

export default Carousel360;
