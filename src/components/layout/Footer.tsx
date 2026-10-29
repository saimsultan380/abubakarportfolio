"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { AREA_LINKS } from "@/lib/areas";
import { blogPostPath, getPublishedPosts } from "@/lib/blog";
import { CONTACT, WHATSAPP_URL } from "@/lib/contact";

function WhatsAppBrandIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
              <div className="flex flex-col gap-3 md:gap-4">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl hover:text-primary transition-colors flex items-center gap-3 md:gap-4 group"
                >
                  <Mail className="h-5 w-5 md:h-6 md:w-6 shrink-0 text-primary" aria-hidden />
                  <span className="whitespace-nowrap">{CONTACT.email}</span>
                  <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl hover:text-primary transition-colors flex items-center gap-3 md:gap-4 group"
                >
                  <WhatsAppBrandIcon className="h-5 w-5 md:h-6 md:w-6 shrink-0 text-[#25D366]" />
                  <span className="whitespace-nowrap">{CONTACT.phoneDisplay}</span>
                  <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <div className="flex items-start gap-3 md:gap-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal normal-case tracking-normal leading-snug">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 shrink-0 text-primary mt-1.5" aria-hidden />
                  <p>
                    {CONTACT.addressLine1}
                    <br />
                    {CONTACT.addressLine2}
                    <br />
                    {CONTACT.addressLine3}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-24 shrink-0">
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/40">
                  Menu
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/#services" },
                    { label: "Resume Revamp", href: "/resume-rewriting" },
                    { label: "Career CV", href: "/career-specific-cv" },
                    { label: "LinkedIn", href: "/linkedin-optimization" },
                    { label: "Cover Letter", href: "/cover-letter" },
                    { label: "Samples", href: "/samples" },
                    { label: "Process", href: "/#process" },
                    { label: "FAQ", href: "/#faq" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-base md:text-lg hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/40">
                  Areas
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {AREA_LINKS.map((area) => (
                    <li key={area.href}>
                      <Link
                        href={area.href}
                        className="flex items-center gap-2.5 text-base md:text-lg hover:text-primary transition-colors"
                      >
                        <Image
                          src={area.flagSrc}
                          alt={area.flagAlt}
                          width={20}
                          height={14}
                          className="h-3.5 w-5 shrink-0 rounded-[2px] object-cover ring-1 ring-white/20"
                        />
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/40">
                  Blog
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  <li>
                    <Link
                      href="/blog/"
                      className="text-base md:text-lg hover:text-primary transition-colors"
                    >
                      All Posts
                    </Link>
                  </li>
                  {getPublishedPosts().map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={blogPostPath(post.slug)}
                        className="text-base md:text-lg hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/40">
                  Socials
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/resumesuplift/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-base md:text-lg hover:text-primary transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 shrink-0 text-[#0A66C2]"
                        aria-hidden
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/share/1BAfxAm5tK/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-base md:text-lg hover:text-primary transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 shrink-0 text-[#1877F2]"
                        aria-hidden
                      >
                        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                      </svg>
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
            <h1 className="text-[10vw] sm:text-[11vw] md:text-[12vw] leading-[0.8] font-bold tracking-tighter text-center uppercase text-white/10 select-none transition-all duration-500 cursor-default hover:text-primary hover:scale-105 max-w-full">
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
                href="/privacy/"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms/"
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
