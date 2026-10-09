/** Business contact details — single source of truth for the site. */
export const CONTACT = {
  legalName: "Resumes Uplift LLC",
  email: "career@resumesuplift.com",
  phoneDisplay: "+1 (810) 380 9944",
  /** Digits only, country code included (for tel: and wa.me) */
  phoneE164: "18103809944",
  addressLine1: "30 N Gould St Ste R",
  addressLine2: "Sheridan, WY 82801",
  addressFull: "30 N Gould St Ste R, Sheridan, WY 82801",
  city: "Sheridan",
  region: "WY",
  postalCode: "82801",
  country: "US",
} as const;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.phoneE164}`;
export const TEL_URL = `tel:+${CONTACT.phoneE164}`;
