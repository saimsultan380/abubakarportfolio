"use client";

import * as React from "react";
import {
  X,
  Upload,
  Briefcase,
  Mail,
  FileText,
  MessageCircle,
  Linkedin,
} from "lucide-react";

interface CVReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVReviewModal({ isOpen, onClose }: CVReviewModalProps) {
  const [cvFile, setCvFile] = React.useState<File | null>(null);
  const [targetRoles, setTargetRoles] = React.useState("");
  const [whatsappNumber, setWhatsappNumber] = React.useState("");
  const [linkedinUrl, setLinkedinUrl] = React.useState("");
  const [isDragging, setIsDragging] = React.useState(false);
  const [fileError, setFileError] = React.useState<string>("");
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape
  React.useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  const validateFile = (file: File) => {
    const okType =
      file.type === "application/pdf" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    if (!okType) return "Please upload a PDF or DOCX file.";

    const maxBytes = 10 * 1024 * 1024;
    if (file.size > maxBytes) return "File is too large. Max size is 10MB.";

    return "";
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const err = validateFile(file);
      setFileError(err);
      if (!err) setCvFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    const err = validateFile(file);
    setFileError(err);
    if (!err) setCvFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !cvFile ||
      !targetRoles.trim() ||
      !whatsappNumber.trim() ||
      !linkedinUrl.trim() ||
      fileError
    )
      return;

    const subject = "CV Review Request";
    const body = `Hello,

I would like to request a professional CV review for my career transition.

WHATSAPP NUMBER (UK):
${whatsappNumber.trim()}

LINKEDIN PROFILE URL:
${linkedinUrl.trim()}

TARGET JOB ROLES:
${targetRoles.trim()}

CV FILE INFORMATION:
- File Name: ${cvFile.name}
- File Size: ${(cvFile.size / 1024 / 1024).toFixed(2)} MB

I will attach my CV file to this email.

Looking forward to your professional feedback!

Thank you,
[Your Name]`;

    const mailtoUrl = `mailto:resumesuplift@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoUrl;

    // Show instruction and close modal
    setTimeout(() => {
      alert(`📧 Email client opened!

IMPORTANT: Please attach your CV file (${cvFile.name}) to the email before sending.

Your target job roles and details have been pre-filled in the email body.`);

      onClose();
      // Reset form
      setCvFile(null);
      setTargetRoles("");
      setWhatsappNumber("");
      setLinkedinUrl("");
      setFileError("");
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] isolation-isolate flex items-start sm:items-center justify-center px-3 sm:px-4 md:px-6 pt-24 pb-6 sm:py-6 bg-background/90 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Submit your CV for review"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-2xl bg-card border border-border rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fill-mode-forwards duration-300 max-h-[calc(100dvh-7rem)] sm:max-h-[90vh]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-foreground truncate">
                Submit Your CV for Review
              </h2>
              <p className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">
                Get professional feedback on your resume
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full hover:bg-muted flex items-center justify-center transition-colors border border-border/50 text-muted-foreground hover:text-foreground flex-shrink-0"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        {/* Form Content */}
        <form
          onSubmit={handleSubmit}
          className="flex-grow p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-5 md:space-y-6 overflow-auto"
        >
          {/* CV Upload Section */}
          <div className="space-y-2 sm:space-y-3">
            <label className="block">
              <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-foreground mb-2">
                <Upload className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                Upload Your CV/Resume
                <span className="text-red-500">*</span>
              </span>
              <p className="text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3">
                Supported formats: PDF, DOCX (Max 10MB)
              </p>
            </label>

            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
              className={`relative border-2 border-dashed rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 transition-all cursor-pointer ${
                isDragging
                  ? "border-primary bg-primary/5"
                  : cvFile
                  ? "border-green-500/50 bg-green-500/5"
                  : "border-border hover:border-primary/50 hover:bg-muted/30"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx"
                onChange={handleFileChange}
                className="hidden"
                required
              />
              <div className="flex flex-col items-center justify-center text-center">
                {cvFile ? (
                  <>
                    <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-green-500/10 flex items-center justify-center mb-3 sm:mb-4">
                      <FileText className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-green-500" />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-foreground mb-1 break-all px-2">
                      {cvFile.name}
                    </p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">
                      {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCvFile(null);
                        setFileError("");
                      }}
                      className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-primary hover:underline"
                    >
                      Change file
                    </button>
                  </>
                ) : (
                  <>
                    <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      <Upload className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-foreground mb-1">
                      Drop your CV here or click to browse
                    </p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">
                      PDF or DOCX format, up to 10MB
                    </p>
                  </>
                )}
              </div>
            </div>
            {fileError ? (
              <p className="text-[10px] sm:text-xs text-red-500">{fileError}</p>
            ) : null}
          </div>

          {/* Target Job Roles Section */}
          <div className="space-y-2 sm:space-y-3">
            <label htmlFor="targetRoles" className="block">
              <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-foreground mb-2">
                <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                What are your target job roles?
                <span className="text-red-500">*</span>
              </span>
              <p className="text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3">
                List the job titles or positions you&apos;re applying for
              </p>
            </label>
            <textarea
              id="targetRoles"
              value={targetRoles}
              onChange={(e) => setTargetRoles(e.target.value)}
              placeholder="e.g., Senior Frontend Developer, React Developer, Full Stack Engineer..."
              rows={4}
              required
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-border bg-background text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
            />
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              Be specific about the roles you&apos;re targeting to get tailored
              feedback
            </p>
          </div>

          {/* WhatsApp Number (UK) */}
          <div className="space-y-2 sm:space-y-3">
            <label htmlFor="whatsappNumber" className="block">
              <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-foreground mb-2">
                <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                WhatsApp Number
                <span className="text-red-500">*</span>
              </span>
              <p className="text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3">
                UK format: include country code +44
              </p>
            </label>
            <input
              id="whatsappNumber"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              placeholder="e.g., +44 7123 456789"
              inputMode="tel"
              autoComplete="tel"
              required
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-border bg-background text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          {/* LinkedIn Profile URL */}
          <div className="space-y-2 sm:space-y-3">
            <label htmlFor="linkedinUrl" className="block">
              <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-foreground mb-2">
                <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                LinkedIn Profile URL
                <span className="text-red-500">*</span>
              </span>
              <p className="text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3">
                Your full LinkedIn profile link
              </p>
            </label>
            <input
              id="linkedinUrl"
              type="url"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              placeholder="e.g., https://www.linkedin.com/in/your-profile"
              autoComplete="url"
              required
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-border bg-background text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={
              !cvFile ||
              !targetRoles.trim() ||
              !whatsappNumber.trim() ||
              !linkedinUrl.trim() ||
              !!fileError
            }
            className="w-full h-11 sm:h-12 inline-flex items-center justify-center rounded-lg sm:rounded-xl bg-primary px-6 sm:px-8 text-sm sm:text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Send via Email
          </button>
        </form>
      </div>
    </div>
  );
}
