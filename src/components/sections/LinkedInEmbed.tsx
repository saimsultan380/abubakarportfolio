import Image from "next/image";
import { ExternalLink, Linkedin, Play } from "lucide-react";

const POST_URL =
  "https://www.linkedin.com/feed/update/urn:li:ugcPost:7521356265478889473";
const COMPANY_URL = "https://www.linkedin.com/company/resumesuplift/";
const THUMB_URL = "/linkedin/client-testimonial-thumb.jpg";

export function LinkedInEmbed() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-background">
      <div className="absolute top-0 right-0 -z-10 h-[320px] w-[320px] bg-primary/10 blur-[120px] rounded-full opacity-50" />

      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-4">
            <Linkedin className="h-3.5 w-3.5" />
            LinkedIn
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            Latest From Our <span className="text-primary">LinkedIn</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Follow Resumes Uplift for career tips, client wins, and resume
            writing insights.
          </p>
        </div>

        <article className="mx-auto w-full max-w-xl overflow-hidden rounded-3xl border border-border/60 bg-card shadow-lg">
          <div className="flex items-center gap-3 px-5 pt-5 pb-3">
            <Image
              src="/brand/new%20logo.png"
              alt="Resumes Uplift"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-contain bg-muted border border-border/60"
            />
            <div className="min-w-0 flex-1">
              <p className="font-bold text-foreground leading-tight">
                Resumes Uplift
              </p>
              <p className="text-xs text-muted-foreground">1,614 followers</p>
            </div>
            <Linkedin className="h-5 w-5 text-[#0A66C2] shrink-0" />
          </div>

          <div className="px-5 pb-4 space-y-3">
            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
              &ldquo;I&apos;ve been getting interviews after interviews.&rdquo;
              Words from Mark Sekinobe, MBA, after working with us on his
              resume. He didn&apos;t need more experience. He needed a resume
              that showed the experience he already had.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your resume should make three things clear: what you&apos;ve done,
              what changed because of you, and what you can deliver next. When
              those are clear, recruiters call back.
            </p>
          </div>

          <a
            href={POST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mx-auto block w-full max-w-sm overflow-hidden border-y border-border/50 bg-muted"
          >
            <Image
              src={THUMB_URL}
              alt="LinkedIn client testimonial video thumbnail"
              width={504}
              height={896}
              className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              priority
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/25 transition-colors">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-lg">
                <Play className="h-6 w-6 fill-current ml-0.5" />
              </span>
            </span>
          </a>

          <div className="flex flex-col sm:flex-row gap-2 p-4 sm:p-5">
            <a
              href={POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#0A66C2] px-4 text-sm font-semibold text-white hover:bg-[#004182] transition-colors"
            >
              View post on LinkedIn
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-border px-4 text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              Follow our page
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
