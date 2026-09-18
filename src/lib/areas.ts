export type AreaLink = {
  name: string;
  href: string;
  shortName: string;
  flagSrc: string;
  flagAlt: string;
};

/** Location/area pages for the Areas dropdown — add new markets here. */
export const AREA_LINKS: AreaLink[] = [
  {
    name: "United States",
    shortName: "USA",
    href: "/areas/usa/",
    flagSrc: "/flags/us.png",
    flagAlt: "United States flag",
  },
  {
    name: "United Kingdom",
    shortName: "UK",
    href: "/areas/uk/",
    flagSrc: "/flags/gb.png",
    flagAlt: "United Kingdom flag",
  },
  {
    name: "Canada",
    shortName: "Canada",
    href: "/areas/canada/",
    flagSrc: "/flags/ca.png",
    flagAlt: "Canada flag",
  },
  {
    name: "New Zealand",
    shortName: "NZ",
    href: "/areas/new-zealand/",
    flagSrc: "/flags/nz.png",
    flagAlt: "New Zealand flag",
  },
  {
    name: "Australia",
    shortName: "AU",
    href: "/areas/australia/",
    flagSrc: "/flags/au.png",
    flagAlt: "Australia flag",
  },
];
