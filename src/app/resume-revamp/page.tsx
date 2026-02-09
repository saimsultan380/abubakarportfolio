"use client";

import * as React from "react";
import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Briefcase,
  CheckSquare,
  FileText,
  Globe2,
  Languages as LanguagesIcon,
  Mail,
  Upload,
} from "lucide-react";

type LicenseEntry = {
  name: string;
  organization: string;
  issueDate: string;
  expiryDate: string;
};

type LanguageEntry = {
  language: string;
  level: string;
};

function ResumeRevampContent() {
  const [currentResume, setCurrentResume] = React.useState<File | null>(null);
  const [currentResumeError, setCurrentResumeError] = React.useState("");

  const [desiredTitles, setDesiredTitles] = React.useState("");
  const [targetIndustry, setTargetIndustry] = React.useState("");
  const [whatsappNumber, setWhatsappNumber] = React.useState("");
  const [linkedinUrl, setLinkedinUrl] = React.useState("");
  const [employmentType, setEmploymentType] = React.useState<
    "full-time" | "part-time" | "freelance" | "internship" | ""
  >("");
  const [preferredLocations, setPreferredLocations] = React.useState("");

  const [improvementAreas, setImprovementAreas] = React.useState("");
  const [sectionsChanges, setSectionsChanges] = React.useState("");
  const [specialInstructions, setSpecialInstructions] = React.useState("");

  const [technicalSkills, setTechnicalSkills] = React.useState("");
  const [softSkills, setSoftSkills] = React.useState("");
  const [tools, setTools] = React.useState("");

  const [licenses, setLicenses] = React.useState<LicenseEntry[]>([
    { name: "", organization: "", issueDate: "", expiryDate: "" },
  ]);

  const [languages, setLanguages] = React.useState<LanguageEntry[]>([
    { language: "", level: "" },
  ]);

  const [volunteer, setVolunteer] = React.useState("");
  const [awards, setAwards] = React.useState("");
  const [projects, setProjects] = React.useState("");
  const [otherInfo, setOtherInfo] = React.useState("");

  const [consentAccuracy, setConsentAccuracy] = React.useState(false);
  const [consentDataSharing, setConsentDataSharing] = React.useState(false);

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const validateResumeFile = (file: File) => {
    const okType =
      file.type === "application/pdf" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    if (!okType) return "Please upload a PDF or DOCX file.";

    const maxBytes = 10 * 1024 * 1024;
    if (file.size > maxBytes) return "File is too large. Max size is 10MB.";

    return "";
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const err = validateResumeFile(file);
    setCurrentResumeError(err);
    if (!err) setCurrentResume(file);
  };

  const handleLicenseChange = (
    index: number,
    field: keyof LicenseEntry,
    value: string
  ) => {
    setLicenses((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const addLicense = () => {
    setLicenses((prev) => [
      ...prev,
      { name: "", organization: "", issueDate: "", expiryDate: "" },
    ]);
  };

  const removeLicense = (index: number) => {
    setLicenses((prev) => prev.filter((_, i) => i !== index));
  };

  const handleLanguageChange = (
    index: number,
    field: keyof LanguageEntry,
    value: string
  ) => {
    setLanguages((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const addLanguage = () => {
    setLanguages((prev) => [...prev, { language: "", level: "" }]);
  };

  const removeLanguage = (index: number) => {
    setLanguages((prev) => prev.filter((_, i) => i !== index));
  };

  const buildEmailBody = () => {
    const licenseText = licenses
      .map(
        (l, idx) => `
License / Certification #${idx + 1}
- Name: ${l.name || "-"}
- Issuing Organization: ${l.organization || "-"}
- Issue Date: ${l.issueDate || "-"}
- Expiration Date: ${l.expiryDate || "-"}`
      )
      .join("\n\n");

    const languageText = languages
      .map(
        (l, idx) => `
Language #${idx + 1}
- Language: ${l.language || "-"}
- Proficiency Level: ${l.level || "-"}`
      )
      .join("\n\n");

    return `Resume Revamp Request Form Submission

SECTION 1: Current Resume
- Current Resume File: ${
      currentResume
        ? `${currentResume.name} (${(currentResume.size / 1024 / 1024).toFixed(
            2
          )} MB)`
        : "Not provided"
    }

SECTION 2: Target Job / Career Goals
- Desired Job Title(s): ${desiredTitles}
- Target Industry / Field: ${targetIndustry}
- WhatsApp Number: ${whatsappNumber}
- LinkedIn Profile URL: ${linkedinUrl}
- Type of Employment Desired: ${employmentType || "-"}
- Preferred Job Location(s): ${preferredLocations || "-"}

SECTION 3: Changes / Improvements Requested
- Areas to improve (Achievements, Formatting, Keywords, Skills, Summary, etc.):
${improvementAreas || "-"}

- Sections to remove or add:
${sectionsChanges || "-"}

- Specific instructions or preferences:
${specialInstructions || "-"}

SECTION 4: Skills Update
- Updated Technical Skills:
${technicalSkills || "-"}

- Updated Soft Skills:
${softSkills || "-"}

- New Tools / Software / Languages Known:
${tools || "-"}

SECTION 5: Licenses & Certifications
${licenseText || "-"}

SECTION 6: Languages
${languageText || "-"}

SECTION 7: Additional Information
- Updated Volunteer Experience:
${volunteer || "-"}

- Updated Awards / Honors:
${awards || "-"}

- Updated Projects / Portfolio Links:
${projects || "-"}

- Other updated info to highlight:
${otherInfo || "-"}

SECTION 8: Agreement / Consent
- Accuracy Confirmed: ${consentAccuracy ? "Yes" : "No"}
- Info Sharing Consent: ${consentDataSharing ? "Yes" : "No"}

Note: Please ensure that your current resume is attached to this email before sending.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !currentResume ||
      !!currentResumeError ||
      !desiredTitles.trim() ||
      !targetIndustry.trim() ||
      !whatsappNumber.trim() ||
      !linkedinUrl.trim() ||
      !consentAccuracy ||
      !consentDataSharing
    ) {
      return;
    }

    setIsSubmitting(true);

    const subject = "Resume Revamp Request";
    const body = buildEmailBody();

    const mailtoUrl = `mailto:resumesuplift@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      alert(
        "📧 Email client opened!\n\nIMPORTANT: Please attach your current resume file before sending the email."
      );
      setIsSubmitting(false);
    }, 800);
  };

  const cardSectionClass =
    "space-y-3 p-4 sm:p-5 rounded-2xl border border-border bg-muted/30";

  const labelClass =
    "flex items-center gap-2 text-sm font-semibold text-foreground";

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-background text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";

  const textareaClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-background text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-y min-h-[100px]";

  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") ?? "";
  const pkg = searchParams.get("pkg") ?? "";
  const rush = searchParams.get("rush") ?? "";
  const fromCheckout = Boolean(plan && pkg);
  const checkoutHref = fromCheckout
    ? `/checkout?plan=${plan}&pkg=${pkg}${rush === "1" ? "&rush=1" : ""}&intent=revamp`
    : "/checkout";

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-16 bg-background">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          {fromCheckout && (
            <Link
              href={checkoutHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to checkout
            </Link>
          )}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>

        <div className="rounded-2xl sm:rounded-3xl border border-border bg-card shadow-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 border-b border-border bg-muted/30">
            <div className="flex items-center gap-3 min-w-0">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-bold text-foreground truncate">
                  Resume Revamp Request Form
                </h1>
                <p className="text-xs text-muted-foreground">
                  Share your current resume and what you want improved
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <form
            onSubmit={handleSubmit}
            className="p-4 sm:p-6 space-y-6 sm:space-y-7"
          >
            {/* Section 1: Current Resume */}
            <section className={cardSectionClass}>
              <div className={labelClass}>
                <Upload className="h-4 w-4 text-primary" />
                <span>Section 1: Current Resume</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Upload your current resume so we can revamp it.
              </p>

              <div className="space-y-2 mt-2">
                <div
                  className={[
                    "relative border-2 border-dashed rounded-xl p-4 sm:p-5 transition-all cursor-pointer",
                    currentResume
                      ? "border-green-500/50 bg-green-500/5"
                      : "border-border hover:border-primary/50 hover:bg-muted/30",
                  ].join(" ")}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.docx"
                    className="hidden"
                    onChange={handleResumeChange}
                    required
                  />
                  <div className="flex flex-col items-center justify-center text-center">
                    {currentResume ? (
                      <>
                        <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
                          <FileText className="h-6 w-6 text-green-500" />
                        </div>
                        <p className="text-sm font-semibold text-foreground mb-1 break-all px-2">
                          {currentResume.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {(currentResume.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentResume(null);
                            setCurrentResumeError("");
                          }}
                          className="mt-2 text-xs text-primary hover:underline"
                        >
                          Change file
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                          <Upload className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-sm font-medium text-foreground mb-1">
                          Click to upload your current resume
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PDF or DOCX format, up to 10MB
                        </p>
                      </>
                    )}
                  </div>
                </div>
                {currentResumeError && (
                  <p className="text-xs text-red-500">{currentResumeError}</p>
                )}
              </div>
            </section>

            {/* Section 2: Target Job / Career Goals */}
            <section className={cardSectionClass}>
              <div className={labelClass}>
                <Briefcase className="h-4 w-4 text-primary" />
                <span>Section 2: Target Job / Career Goals</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Tell us what kind of roles this revamped resume should target.
              </p>

              <div className="space-y-4 mt-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Desired Job Title(s) <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className={textareaClass}
                    value={desiredTitles}
                    onChange={(e) => setDesiredTitles(e.target.value)}
                    placeholder="e.g., Senior Product Manager, Data Analyst"
                    required
                  />
                </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  className={inputClass}
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  placeholder="e.g., +44 7123 456789"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">
                  LinkedIn Profile URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  className={inputClass}
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://www.linkedin.com/in/your-profile"
                  required
                />
              </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Target Industry / Field{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={inputClass}
                    value={targetIndustry}
                    onChange={(e) => setTargetIndustry(e.target.value)}
                    placeholder="e.g., SaaS, Fintech, Healthcare"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Type of Employment Desired
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { value: "full-time", label: "Full-time" },
                      { value: "part-time", label: "Part-time" },
                      { value: "freelance", label: "Freelance" },
                      { value: "internship", label: "Internship" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setEmploymentType(
                            employmentType === option.value
                              ? ""
                              : (option.value as typeof employmentType)
                          )
                        }
                        className={[
                          "h-10 rounded-xl border text-xs sm:text-sm font-medium transition-all",
                          employmentType === option.value
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-background hover:border-primary/40 hover:bg-muted/40",
                        ].join(" ")}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Preferred Job Location(s)
                  </label>
                  <textarea
                    className={textareaClass}
                    value={preferredLocations}
                    onChange={(e) => setPreferredLocations(e.target.value)}
                    placeholder="e.g., Remote, London, Europe"
                  />
                </div>
              </div>
            </section>

            {/* Section 3: Changes / Improvements Requested */}
            <section className={cardSectionClass}>
              <div className={labelClass}>
                <FileText className="h-4 w-4 text-primary" />
                <span>Section 3: Changes / Improvements Requested</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Tell us exactly what you want improved in your resume.
              </p>

              <div className="space-y-3 mt-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Areas you want improved
                  </label>
                  <textarea
                    className={textareaClass}
                    value={improvementAreas}
                    onChange={(e) => setImprovementAreas(e.target.value)}
                    placeholder="e.g., Focus more on achievements, improve formatting, add more role-specific keywords, strengthen summary..."
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Any sections to remove or add?
                  </label>
                  <textarea
                    className={textareaClass}
                    value={sectionsChanges}
                    onChange={(e) => setSectionsChanges(e.target.value)}
                    placeholder="e.g., Remove hobbies, add skills section, add separate projects section..."
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Any specific instructions or preferences?
                  </label>
                  <textarea
                    className={textareaClass}
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    placeholder="e.g., Keep resume to 2 pages, avoid overly creative designs, focus on ATS-friendly format..."
                  />
                </div>
              </div>
            </section>

            {/* Section 4: Skills Update */}
            <section className={cardSectionClass}>
              <div className={labelClass}>
                <Globe2 className="h-4 w-4 text-primary" />
                <span>Section 4: Skills Update</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Share only the updated or new skills you want reflected.
              </p>

              <div className="space-y-3 mt-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Updated list of Technical Skills
                  </label>
                  <textarea
                    className={textareaClass}
                    value={technicalSkills}
                    onChange={(e) => setTechnicalSkills(e.target.value)}
                    placeholder="e.g., Added: Python, Power BI; Removed: C++"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Updated list of Soft Skills
                  </label>
                  <textarea
                    className={textareaClass}
                    value={softSkills}
                    onChange={(e) => setSoftSkills(e.target.value)}
                    placeholder="e.g., Added: Stakeholder management, cross-functional collaboration"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Any new Tools / Software / Languages Known
                  </label>
                  <textarea
                    className={textareaClass}
                    value={tools}
                    onChange={(e) => setTools(e.target.value)}
                    placeholder="e.g., New tools learned in the last year"
                  />
                </div>
              </div>
            </section>

            {/* Section 5: Licenses & Certifications */}
            <section className={cardSectionClass}>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className={labelClass}>
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Section 5: Licenses &amp; Certifications</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Add any new or updated certifications to include.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={addLicense}
                  className="text-xs font-semibold text-primary hover:text-primary/80"
                >
                  + Add License
                </button>
              </div>

              <div className="space-y-5 mt-3">
                {licenses.map((lic, index) => (
                  <div
                    key={index}
                    className="space-y-3 rounded-xl border border-border bg-background/60 p-3 sm:p-4"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold text-muted-foreground">
                        License / Certification #{index + 1}
                      </p>
                      {licenses.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeLicense(index)}
                          className="text-[11px] font-semibold text-red-500 hover:text-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-muted-foreground">
                          New or updated licenses/certifications to include
                        </label>
                        <input
                          className={inputClass}
                          value={lic.name}
                          onChange={(e) =>
                            handleLicenseChange(index, "name", e.target.value)
                          }
                          placeholder="e.g., Google Data Analytics Certificate"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-muted-foreground">
                          Issuing Organization
                        </label>
                        <input
                          className={inputClass}
                          value={lic.organization}
                          onChange={(e) =>
                            handleLicenseChange(
                              index,
                              "organization",
                              e.target.value
                            )
                          }
                          placeholder="e.g., Google, Coursera"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-muted-foreground">
                          Issue Date
                        </label>
                        <input
                          className={inputClass}
                          value={lic.issueDate}
                          onChange={(e) =>
                            handleLicenseChange(
                              index,
                              "issueDate",
                              e.target.value
                            )
                          }
                          placeholder="e.g., Jun 2024"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-muted-foreground">
                          Expiration Date (if applicable)
                        </label>
                        <input
                          className={inputClass}
                          value={lic.expiryDate}
                          onChange={(e) =>
                            handleLicenseChange(
                              index,
                              "expiryDate",
                              e.target.value
                            )
                          }
                          placeholder="e.g., Jun 2027 / N/A"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Languages */}
            <section className={cardSectionClass}>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className={labelClass}>
                    <LanguagesIcon className="h-4 w-4 text-primary" />
                    <span>Section 6: Languages</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Add all languages and proficiency levels you want shown.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={addLanguage}
                  className="text-xs font-semibold text-primary hover:text-primary/80"
                >
                  + Add Language
                </button>
              </div>

              <div className="space-y-4 mt-3">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end"
                  >
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-muted-foreground">
                        Language
                      </label>
                      <input
                        className={inputClass}
                        value={lang.language}
                        onChange={(e) =>
                          handleLanguageChange(
                            index,
                            "language",
                            e.target.value
                          )
                        }
                        placeholder="e.g., English"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-muted-foreground">
                        Proficiency Level
                      </label>
                      <select
                        className={inputClass}
                        value={lang.level}
                        onChange={(e) =>
                          handleLanguageChange(index, "level", e.target.value)
                        }
                      >
                        <option value="">Select level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Fluent">Fluent</option>
                        <option value="Native">Native</option>
                      </select>
                    </div>
                    <div className="flex justify-end">
                      {languages.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeLanguage(index)}
                          className="text-[11px] font-semibold text-red-500 hover:text-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Additional Information */}
            <section className={cardSectionClass}>
              <div className={labelClass}>
                <Globe2 className="h-4 w-4 text-primary" />
                <span>Section 7: Additional Information</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Any updated information you want reflected in your resume.
              </p>

              <div className="space-y-3 mt-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Updated Volunteer Experience
                  </label>
                  <textarea
                    className={textareaClass}
                    value={volunteer}
                    onChange={(e) => setVolunteer(e.target.value)}
                    placeholder="Share new or updated volunteer roles and impact."
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Updated Awards / Honors
                  </label>
                  <textarea
                    className={textareaClass}
                    value={awards}
                    onChange={(e) => setAwards(e.target.value)}
                    placeholder="List any new awards, scholarships, or recognitions."
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Updated Projects / Portfolio Links
                  </label>
                  <textarea
                    className={textareaClass}
                    value={projects}
                    onChange={(e) => setProjects(e.target.value)}
                    placeholder="Add updated portfolio links or important new projects."
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Any other updated info to highlight?
                  </label>
                  <textarea
                    className={textareaClass}
                    value={otherInfo}
                    onChange={(e) => setOtherInfo(e.target.value)}
                    placeholder="Anything else you want us to highlight in the revamp."
                  />
                </div>
              </div>
            </section>

            {/* Section 8: Agreement / Consent */}
            <section className={cardSectionClass}>
              <div className={labelClass}>
                <CheckSquare className="h-4 w-4 text-primary" />
                <span>Section 8: Agreement / Consent</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Please confirm your consent to proceed with the revamp.
              </p>

              <div className="space-y-2 mt-2">
                <label className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary/20"
                    checked={consentAccuracy}
                    onChange={(e) => setConsentAccuracy(e.target.checked)}
                    required
                  />
                  <span>
                    I confirm that the information provided is accurate.
                    <span className="text-red-500">*</span>
                  </span>
                </label>
                <label className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary/20"
                    checked={consentDataSharing}
                    onChange={(e) => setConsentDataSharing(e.target.checked)}
                    required
                  />
                  <span>
                    I agree to share my information with Resumes Uplift for
                    resume revamp purposes.
                    <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
            </section>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  !currentResume ||
                  !!currentResumeError ||
                  !desiredTitles.trim() ||
                  !targetIndustry.trim() ||
                !whatsappNumber.trim() ||
                !linkedinUrl.trim() ||
                  !consentAccuracy ||
                  !consentDataSharing
                }
                className="w-full h-12 inline-flex items-center justify-center rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Mail className="mr-2 h-5 w-5" />
                {isSubmitting ? "Opening Email..." : "Submit Revamp Request"}
              </button>
              <p className="mt-2 text-[11px] text-muted-foreground text-center">
                After clicking submit, your email client will open with all
                details filled in. Please review and attach your current resume
                before sending.
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default function ResumeRevampPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen pt-24 md:pt-32 pb-16 bg-background flex items-center justify-center">
          <p className="text-muted-foreground font-medium">Loading...</p>
        </main>
      }
    >
      <ResumeRevampContent />
    </Suspense>
  );
}

