import { canonicalUrl, SITE_URL, type BreadcrumbItem } from "@/lib/seo";

type BreadcrumbJsonLdProps = {
  items: BreadcrumbItem[];
};

/**
 * schema.org/BreadcrumbList JSON-LD.
 * Always starts with Home, then the page hierarchy.
 */
export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const list: BreadcrumbItem[] = [
    { name: "Home", path: "/" },
    ...items.filter((item) => item.path !== "/"),
  ];

  // Deduplicate consecutive identical paths (e.g. Areas leaf-only pages)
  const deduped = list.filter((item, i, arr) => {
    if (i === 0) return true;
    return item.path !== arr[i - 1].path || item.name !== arr[i - 1].name;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: deduped.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/** Organization + WebSite graph for the root layout (homepage identity only). */
export function SiteGraphJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: "Resumes Uplift",
        description:
          "Professional ATS-optimized resume and CV writing service that helps job seekers land more interviews.",
        url: `${SITE_URL}/`,
        email: "resumesuplift@gmail.com",
        priceRange: "$$",
        areaServed: {
          "@type": "Place",
          name: "Worldwide",
        },
        serviceType: [
          "Resume Writing",
          "CV Optimization",
          "ATS Resume Review",
          "LinkedIn Profile Optimization",
          "Career Coaching",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Resume Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Professional Resume Writing",
                description:
                  "ATS-optimized resume writing tailored to your target role",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "CV Review & Optimization",
                description:
                  "Expert review and optimization of your existing CV",
              },
            },
          ],
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Resumes Uplift",
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/brand/new%20logo.png`,
        email: "resumesuplift@gmail.com",
        description:
          "Professional resume and CV writing service helping job seekers create ATS-optimized resumes that land interviews.",
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Resumes Uplift",
        description:
          "Get more interviews with ATS-optimized, recruiter-approved resumes tailored to your role and industry.",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
