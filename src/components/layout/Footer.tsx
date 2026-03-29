"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <div className="relative min-h-[480px] h-[min(800px,85vh)] md:min-h-[560px] md:h-[min(900px,88vh)]">
      <footer className="fixed bottom-0 left-0 right-0 w-full min-h-[480px] h-[min(800px,85vh)] md:min-h-[560px] md:h-[min(900px,88vh)] max-h-[95vh] bg-[#050505] text-[#e1e1e1] overflow-y-auto overflow-x-hidden">
        <div className="min-h-full flex flex-col justify-between pl-5 pr-5 sm:pl-6 sm:pr-6 md:pl-12 md:pr-12 py-6 sm:py-8 md:py-12 gap-6 md:gap-8">
          {/* Top Section: Nav & Links */}
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-6 shrink-0">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-base md:text-lg font-medium text-white/60 uppercase tracking-widest">
                Connect
              </h3>
              <div className="flex flex-col gap-2 md:gap-4">
                <a
                  href="mailto:resumesuplift@gmail.com"
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl hover:text-primary transition-colors flex items-center gap-2 md:gap-3 group whitespace-nowrap"
                >
                  resumesuplift@gmail.com
                  <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://wa.me/447478564745"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl hover:text-primary transition-colors flex items-center gap-2 md:gap-3 group"
                >
                  +44 7478 564745
                  <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal normal-case tracking-normal text-inherit">
                  New York, USA
                </p>
              </div>
            </div>

            <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-24 shrink-0">
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/40">
                  Menu
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {["Home", "Services", "Work", "Process", "FAQ"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href={`#${item.toLowerCase()}`}
                          className="text-base md:text-lg hover:text-primary transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/40">
                  Socials
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/muhammad-abubakar-resumewriter?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base md:text-lg hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/share/1BAfxAm5tK/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base md:text-lg hover:text-primary transition-colors"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Middle: Logo + Big Text — shrinkable on small viewports */}
          <div className="flex-1 min-h-[60px] flex flex-col items-center justify-center py-6 md:py-12 shrink gap-4">
            <Link
              href="/"
              className="block transition-transform hover:scale-105"
            >
              <Image
                src="/brand/new%20logo.png"
                alt="Resumes Uplift"
                width={120}
                height={120}
                className="h-16 w-auto sm:h-20 md:h-24 object-contain"
              />
            </Link>
            <h1 className="text-[10vw] sm:text-[11vw] md:text-[12vw] leading-[0.8] font-black tracking-tighter text-center uppercase text-white/10 select-none transition-all duration-500 cursor-default hover:text-primary hover:scale-105 max-w-full">
              Resumes Uplift
            </h1>
          </div>

          {/* Bottom: Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 pt-6 md:pt-8 border-t border-white/10 text-white/40 text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-widest shrink-0">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Resumes Uplift. All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
