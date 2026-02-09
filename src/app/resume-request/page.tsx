"use client";

import * as React from "react";
import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Briefcase,
  FileText,
  Globe2,
  GraduationCap,
  Languages as LanguagesIcon,
  Mail,
  MapPin,
  Upload,
  User,
  CheckSquare,
} from "lucide-react";

type EducationEntry = {
  degree: string;
  institution: string;
  fieldOfStudy: string;
  graduationYear: string;
  extraCertifications: string;
};

type ExperienceEntry = {
  jobTitle: string;
  companyName: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
};

type LicenseEntry = {
  name: string;
  organization: string;
  issueDate: string;
  expiryDate: string;
  file: File | null;
};

type LanguageEntry = {
  language: string;
  level: string;
};

function ResumeRequestContent() {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [linkedin, setLinkedin] = React.useState("");
  const [location, setLocation] = React.useState("");

  const [desiredTitles, setDesiredTitles] = React.useState("");
  const [targetIndustry, setTargetIndustry] = React.useState("");
  const [employmentType, setEmploymentType] = React.useState<
    "full-time" | "part-time" | "freelance" | "internship" | ""
  >("");
  const [preferredLocations, setPreferredLocations] = React.useState("");

  const [education, setEducation] = React.useState<EducationEntry[]>([
    {
      degree: "",
      institution: "",
      fieldOfStudy: "",
      graduationYear: "",
      extraCertifications: "",
    },
  ]);

  const [experience, setExperience] = React.useState<ExperienceEntry[]>([
    {
      jobTitle: "",
      companyName: "",
      location: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
    },
  ]);

  const [technicalSkills, setTechnicalSkills] = React.useState("");
  const [softSkills, setSoftSkills] = React.useState("");
  const [tools, setTools] = React.useState("");

  const [licenses, setLicenses] = React.useState<LicenseEntry[]>([
    { name: "", organization: "", issueDate: "", expiryDate: "", file: null },
  ]);

  const [languages, setLanguages] = React.useState<LanguageEntry[]>([
    { language: "", level: "" },
  ]);

  const [volunteer, setVolunteer] = React.useState("");
  const [awards, setAwards] = React.useState("");
  const [projects, setProjects] = React.useState("");
  const [otherInfo, setOtherInfo] = React.useState("");

  const [supportingFiles, setSupportingFiles] = React.useState<File[]>([]);

  const [consentAccuracy, setConsentAccuracy] = React.useState(false);
  const [consentDataSharing, setConsentDataSharing] = React.useState(false);

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleEducationChange = (
    index: number,
    field: keyof EducationEntry,
    value: string
  ) => {
    setEducation((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const addEducation = () => {
    setEducation((prev) => [
      ...prev,
      {
        degree: "",
        institution: "",
        fieldOfStudy: "",
        graduationYear: "",
        extraCertifications: "",
      },
    ]);
  };

  const removeEducation = (index: number) => {
    setEducation((prev) => prev.filter((_, i) => i !== index));
  };

  const handleExperienceChange = (
    index: number,
    field: keyof ExperienceEntry,
    value: string
  ) => {
    setExperience((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const addExperience = () => {
    setExperience((prev) => [
      ...prev,
      {
        jobTitle: "",
        companyName: "",
        location: "",
        startDate: "",
        endDate: "",
        responsibilities: "",
      },
    ]);
  };

  const removeExperience = (index: number) => {
    setExperience((prev) => prev.filter((_, i) => i !== index));
  };

  const handleLicenseChange = (
    index: number,
    field: keyof LicenseEntry,
    value: string | File | null
  ) => {
    setLicenses((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value } as LicenseEntry;
      return next;
    });
  };

  const addLicense = () => {
    setLicenses((prev) => [
      ...prev,
      { name: "", organization: "", issueDate: "", expiryDate: "", file: null },
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

  const handleSupportingFilesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(e.target.files || []);
    setSupportingFiles(files);
  };

  const buildEmailBody = () => {
    const eduText = education
      .map(
        (e, idx) => `
Education Entry #${idx + 1}
- Highest Degree: ${e.degree || "-"}
- Institution: ${e.institution || "-"}
- Field of Study / Major: ${e.fieldOfStudy || "-"}
- Graduation Year: ${e.graduationYear || "-"}
- Additional Certifications: ${e.extraCertifications || "-"}`
      )
      .join("\n\n");

    const expText = experience
      .map(
        (e, idx) => `
Work Experience Entry #${idx + 1}
- Job Title: ${e.jobTitle || "-"}
- Company Name: ${e.companyName || "-"}
- Location: ${e.location || "-"}
- Start Date – End Date: ${e.startDate || "-"} – ${e.endDate || "-"}
- Key Responsibilities / Achievements:
${e.responsibilities || "-"}`
      )
      .join("\n\n");

    const licenseText = licenses
      .map(
        (l, idx) => `
License / Certification #${idx + 1}
- Name: ${l.name || "-"}
- Issuing Organization: ${l.organization || "-"}
- Issue Date: ${l.issueDate || "-"}
- Expiration Date: ${l.expiryDate || "-"}
- Uploaded File: ${l.file ? l.file.name : "-"}`
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

    const uploadsText =
      supportingFiles.length > 0
        ? supportingFiles
            .map(
              (file, idx) => `Upload #${idx + 1} - ${file.name} (${(
                file.size /
                1024 /
                1024
              ).toFixed(2)} MB)`
            )
            .join("\n")
        : "No files uploaded.";

    return `Resume Request Form Submission

SECTION 1: Personal Information
- Full Name: ${fullName}
- Email Address: ${email}
- Phone Number: ${phone || "-"}
- LinkedIn Profile URL: ${linkedin || "-"}
- City & Country of Residence: ${location}

SECTION 2: Target Job / Career Goals
- Desired Job Title(s): ${desiredTitles}
- Target Industry / Field: ${targetIndustry}
- Type of Employment Desired: ${employmentType || "-"}
- Preferred Job Location(s): ${preferredLocations || "-"}

SECTION 3: Education Background
${eduText || "-"}

SECTION 4: Work Experience
${expText || "-"}

SECTION 5: Skills
- Technical Skills: ${technicalSkills || "-"}
- Soft Skills: ${softSkills || "-"}
- Tools / Software / Languages: ${tools || "-"}

SECTION 6: Licenses & Certifications
${licenseText || "-"}

SECTION 7: Languages
${languageText || "-"}

SECTION 8: Additional Information
- Volunteer Experience: ${volunteer || "-"}
- Awards / Honors: ${awards || "-"}
- Projects / Portfolio Links: ${projects || "-"}
- Other Info: ${otherInfo || "-"}

SECTION 9: Uploads
${uploadsText}

SECTION 10: Agreement / Consent
- Accuracy Confirmed: ${consentAccuracy ? "Yes" : "No"}
- Info Sharing Consent: ${consentDataSharing ? "Yes" : "No"}

Note: Please ensure that all uploaded files are attached to this email before sending.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !fullName.trim() ||
      !email.trim() ||
      !location.trim() ||
      !desiredTitles.trim() ||
      !targetIndustry.trim() ||
      !employmentType ||
      !consentAccuracy ||
      !consentDataSharing
    ) {
      return;
    }

    setIsSubmitting(true);

    const subject = `Resume Request - ${fullName}`;
    const body = buildEmailBody();

    const mailtoUrl = `mailto:resumesuplift@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      alert(
        "📧 Email client opened!\n\nIMPORTANT: Please attach your old resumes and any license/certification files you uploaded before sending the email."
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
    ? `/checkout?plan=${plan}&pkg=${pkg}${rush === "1" ? "&rush=1" : ""}`
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
                  Resume Request Form
                </h1>
                <p className="text-xs text-muted-foreground">
                  Share your details and career goals for a custom-built resume
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <form
            onSubmit={handleSubmit}
            className="p-4 sm:p-6 space-y-6 sm:space-y-7"
          >
            {/* Section 1: Personal Information */}
            <section className={cardSectionClass}>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className={labelClass}>
                    <User className="h-4 w-4 text-primary" />
                    <span>Section 1: Personal Information</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Basic details so we can tailor your resume to you.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className={labelClass}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={inputClass}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className={labelClass}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className={inputClass}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className={labelClass}>Phone Number</label>
                  <input
                    className={inputClass}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 7123 456789"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className={labelClass}>LinkedIn Profile URL</label>
                  <input
                    type="url"
                    className={inputClass}
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder="https://www.linkedin.com/in/your-profile"
                  />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <label className={labelClass}>
                    City &amp; Country of Residence{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={inputClass}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g., London, United Kingdom"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Section 2: Target Job / Career Goals */}
            <section className={cardSectionClass}>
              <div className={labelClass}>
                <Briefcase className="h-4 w-4 text-primary" />
                <span>Section 2: Target Job / Career Goals</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Help us understand where you want to go next.
              </p>

              <div className="space-y-4 mt-2">
                <div className="space-y-1.5">
                  <label className={labelClass}>
                    Desired Job Title(s) <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className={textareaClass}
                    value={desiredTitles}
                    onChange={(e) => setDesiredTitles(e.target.value)}
                    placeholder="e.g., Senior Software Engineer, Product Manager"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className={labelClass}>
                    Target Industry / Field{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={inputClass}
                    value={targetIndustry}
                    onChange={(e) => setTargetIndustry(e.target.value)}
                    placeholder="e.g., Tech, Finance, Healthcare"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className={labelClass}>
                    Type of Employment Desired{" "}
                    <span className="text-red-500">*</span>
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
                  <label className={labelClass}>
                    Preferred Job Location(s)
                  </label>
                  <textarea
                    className={textareaClass}
                    value={preferredLocations}
                    onChange={(e) => setPreferredLocations(e.target.value)}
                    placeholder="e.g., London, Remote within UK, Europe"
                  />
                </div>
              </div>
            </section>

            {/* Section 3: Education Background */}
            <section className={cardSectionClass}>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className={labelClass}>
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span>Section 3: Education Background</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Add as many education entries as you need.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={addEducation}
                  className="text-xs font-semibold text-primary hover:text-primary/80"
                >
                  + Add Education
                </button>
              </div>

              <div className="space-y-5 mt-3">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="space-y-3 rounded-xl border border-border bg-background/60 p-3 sm:p-4"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold text-muted-foreground">
                        Education Entry #{index + 1}
                      </p>
                      {education.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeEducation(index)}
                          className="text-[11px] font-semibold text-red-500 hover:text-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-muted-foreground">
                          Highest Degree Completed{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          className={inputClass}
                          value={edu.degree}
                          onChange={(e) =>
                            handleEducationChange(
                              index,
                              "degree",
                              e.target.value
                            )
                          }
                          placeholder="e.g., Bachelor of Science"
                          required={index === 0}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-muted-foreground">
                          Name of Institution{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          className={inputClass}
                          value={edu.institution}
                          onChange={(e) =>
                            handleEducationChange(
                              index,
                              "institution",
                              e.target.value
                            )
                          }
                          placeholder="e.g., University of London"
                          required={index === 0}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-muted-foreground">
                          Field of Study / Major{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          className={inputClass}
                          value={edu.fieldOfStudy}
                          onChange={(e) =>
                            handleEducationChange(
                              index,
                              "fieldOfStudy",
                              e.target.value
                            )
                          }
                          placeholder="e.g., Computer Science"
                          required={index === 0}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-muted-foreground">
                          Graduation Year{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          className={inputClass}
                          value={edu.graduationYear}
                          onChange={(e) =>
                            handleEducationChange(
                              index,
                              "graduationYear",
                              e.target.value
                            )
                          }
                          placeholder="e.g., 2022"
                          required={index === 0}
                        />
                      </div>
                      <div className="space-y-1 sm:col-span-2">
                        <label className="text-xs font-medium text-muted-foreground">
                          Additional Certifications (if any)
                        </label>
                        <textarea
                          className={textareaClass}
                          value={edu.extraCertifications}
                          onChange={(e) =>
                            handleEducationChange(
                              index,
                              "extraCertifications",
                              e.target.value
                            )
                          }
                          placeholder="List any relevant certifications earned during your studies."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Work Experience */}
            <section className={cardSectionClass}>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className={labelClass}>
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span>Section 4: Work Experience</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Add as many roles as you need (current and past).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={addExperience}
                  className="text-xs font-semibold text-primary hover:text-primary/80"
                >
                  + Add Experience
                </button>
              </div>

              <div className="space-y-5 mt-3">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="space-y-3 rounded-xl border border-border bg-background/60 p-3 sm:p-4"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold text-muted-foreground">
                        Work Experience Entry #{index + 1}
                      </p>
                      {experience.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeExperience(index)}
                          className="text-[11px] font-semibold text-red-500 hover:text-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-muted-foreground">
                          Job Title
                        </label>
                        <input
                          className={inputClass}
                          value={exp.jobTitle}
                          onChange={(e) =>
                            handleExperienceChange(
                              index,
                              "jobTitle",
                              e.target.value
                            )
                          }
                          placeholder="e.g., Software Engineer"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-muted-foreground">
                          Company Name
                        </label>
                        <input
                          className={inputClass}
                          value={exp.companyName}
                          onChange={(e) =>
                            handleExperienceChange(
                              index,
                              "companyName",
                              e.target.value
                            )
                          }
                          placeholder="e.g., ABC Tech Ltd."
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-muted-foreground">
                          Location (City, Country)
                        </label>
                        <input
                          className={inputClass}
                          value={exp.location}
                          onChange={(e) =>
                            handleExperienceChange(
                              index,
                              "location",
                              e.target.value
                            )
                          }
                          placeholder="e.g., London, UK"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-muted-foreground">
                          Start Date – End Date
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            className={inputClass}
                            value={exp.startDate}
                            onChange={(e) =>
                              handleExperienceChange(
                                index,
                                "startDate",
                                e.target.value
                              )
                            }
                            placeholder="Start (e.g., Jan 2020)"
                          />
                          <input
                            className={inputClass}
                            value={exp.endDate}
                            onChange={(e) =>
                              handleExperienceChange(
                                index,
                                "endDate",
                                e.target.value
                              )
                            }
                            placeholder="End (e.g., Present)"
                          />
                        </div>
                      </div>
                      <div className="space-y-1 sm:col-span-2">
                        <label className="text-xs font-medium text-muted-foreground">
                          Key Responsibilities / Achievements
                        </label>
                        <textarea
                          className={textareaClass}
                          value={exp.responsibilities}
                          onChange={(e) =>
                            handleExperienceChange(
                              index,
                              "responsibilities",
                              e.target.value
                            )
                          }
                          placeholder="Share key responsibilities, achievements, metrics, or projects from this role."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Skills */}
            <section className={cardSectionClass}>
              <div className={labelClass}>
                <Globe2 className="h-4 w-4 text-primary" />
                <span>Section 5: Skills</span>
              </div>
              <p className="text-xs text-muted-foreground">
                List your skills so we can highlight your strengths.
              </p>

              <div className="space-y-3 mt-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    List of Technical Skills
                  </label>
                  <textarea
                    className={textareaClass}
                    value={technicalSkills}
                    onChange={(e) => setTechnicalSkills(e.target.value)}
                    placeholder="e.g., JavaScript, React, Node.js, SQL, AWS"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    List of Soft Skills
                  </label>
                  <textarea
                    className={textareaClass}
                    value={softSkills}
                    onChange={(e) => setSoftSkills(e.target.value)}
                    placeholder="e.g., Leadership, Communication, Problem-Solving"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Any Tools / Software / Languages Known
                  </label>
                  <textarea
                    className={textareaClass}
                    value={tools}
                    onChange={(e) => setTools(e.target.value)}
                    placeholder="e.g., Jira, Figma, Git, Python, Power BI"
                  />
                </div>
              </div>
            </section>

            {/* Section 6: Licenses & Certifications */}
            <section className={cardSectionClass}>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className={labelClass}>
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Section 6: Licenses &amp; Certifications</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Optional. You can also upload related documents.
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
                          Name of License / Certification
                        </label>
                        <input
                          className={inputClass}
                          value={lic.name}
                          onChange={(e) =>
                            handleLicenseChange(index, "name", e.target.value)
                          }
                          placeholder="e.g., PMP, AWS Certified Solutions Architect"
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
                          placeholder="e.g., PMI, Amazon Web Services"
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
                          placeholder="e.g., Mar 2023"
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
                          placeholder="e.g., Mar 2026 / N/A"
                        />
                      </div>
                      <div className="space-y-1 sm:col-span-2">
                        <label className="text-xs font-medium text-muted-foreground">
                          Upload Certificate (Optional)
                        </label>
                        <div className="flex items-center gap-3">
                          <input
                            type="file"
                            className="block w-full text-xs text-muted-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-primary/10 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-primary hover:file:bg-primary/20"
                            onChange={(e) =>
                              handleLicenseChange(
                                index,
                                "file",
                                e.target.files?.[0] || null
                              )
                            }
                          />
                          {lic.file && (
                            <span className="text-[11px] text-muted-foreground truncate max-w-[150px]">
                              {lic.file.name}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Languages */}
            <section className={cardSectionClass}>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className={labelClass}>
                    <LanguagesIcon className="h-4 w-4 text-primary" />
                    <span>Section 7: Languages</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Add all languages you speak and your proficiency level.
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

            {/* Section 8: Additional Information */}
            <section className={cardSectionClass}>
              <div className={labelClass}>
                <MapPin className="h-4 w-4 text-primary" />
                <span>Section 8: Additional Information</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Anything else that can strengthen your profile.
              </p>

              <div className="space-y-3 mt-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Volunteer Experience
                  </label>
                  <textarea
                    className={textareaClass}
                    value={volunteer}
                    onChange={(e) => setVolunteer(e.target.value)}
                    placeholder="Share any volunteer work, roles, and impact."
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Awards / Honors
                  </label>
                  <textarea
                    className={textareaClass}
                    value={awards}
                    onChange={(e) => setAwards(e.target.value)}
                    placeholder="List notable awards, scholarships, or recognitions."
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Projects / Portfolio Links
                  </label>
                  <textarea
                    className={textareaClass}
                    value={projects}
                    onChange={(e) => setProjects(e.target.value)}
                    placeholder="Add links to your portfolio, GitHub, Behance, or important projects."
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">
                    Any other info to highlight?
                  </label>
                  <textarea
                    className={textareaClass}
                    value={otherInfo}
                    onChange={(e) => setOtherInfo(e.target.value)}
                    placeholder="Anything else you want us to know about your profile or goals."
                  />
                </div>
              </div>
            </section>

            {/* Section 9: Uploads */}
            <section className={cardSectionClass}>
              <div className={labelClass}>
                <Upload className="h-4 w-4 text-primary" />
                <span>Section 9: Uploads (Optional)</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Upload any old resumes or supporting documents we should review.
              </p>

              <div className="space-y-2 mt-2">
                <input
                  type="file"
                  multiple
                  onChange={handleSupportingFilesChange}
                  className="block w-full text-xs text-muted-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-primary/10 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-primary hover:file:bg-primary/20"
                />
                {supportingFiles.length > 0 && (
                  <ul className="text-[11px] text-muted-foreground space-y-1 mt-1">
                    {supportingFiles.map((file, idx) => (
                      <li key={idx}>
                        {file.name}{" "}
                        <span className="opacity-70">
                          ({(file.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>

            {/* Section 10: Agreement / Consent */}
            <section className={cardSectionClass}>
              <div className={labelClass}>
                <CheckSquare className="h-4 w-4 text-primary" />
                <span>Section 10: Agreement / Consent</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Please confirm your consent to proceed.
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
                    I agree to share my personal information with Resumes Uplift
                    for resume creation purposes.
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
                  !fullName.trim() ||
                  !email.trim() ||
                  !location.trim() ||
                  !desiredTitles.trim() ||
                  !targetIndustry.trim() ||
                  !employmentType ||
                  !consentAccuracy ||
                  !consentDataSharing
                }
                className="w-full h-12 inline-flex items-center justify-center rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Mail className="mr-2 h-5 w-5" />
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
              <p className="mt-2 text-[11px] text-muted-foreground text-center">
                After clicking submit, your email client will open with all
                details filled in. Please review and attach your files before
                sending.
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default function ResumeRequestPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen pt-24 md:pt-32 pb-16 bg-background flex items-center justify-center">
          <p className="text-muted-foreground font-medium">Loading...</p>
        </main>
      }
    >
      <ResumeRequestContent />
    </Suspense>
  );
}
