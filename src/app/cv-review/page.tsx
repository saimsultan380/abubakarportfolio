"use client"

import * as React from "react"
import Link from "next/link"
import { Upload, Briefcase, Mail, FileText, Phone, ArrowLeft } from "lucide-react"

export default function CvReviewPage() {
  const [cvFile, setCvFile] = React.useState<File | null>(null)
  const [targetRoles, setTargetRoles] = React.useState("")
  const [phoneNumber, setPhoneNumber] = React.useState("")
  const [isDragging, setIsDragging] = React.useState(false)
  const [fileError, setFileError] = React.useState<string>("")
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const validateFile = (file: File) => {
    const okType =
      file.type === "application/pdf" ||
      file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    if (!okType) return "Please upload a PDF or DOCX file."

    const maxBytes = 10 * 1024 * 1024
    if (file.size > maxBytes) return "File is too large. Max size is 10MB."

    return ""
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const err = validateFile(file)
      setFileError(err)
      if (!err) setCvFile(file)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (!file) return
    const err = validateFile(file)
    setFileError(err)
    if (!err) setCvFile(file)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!cvFile || !targetRoles.trim() || fileError) return

    const subject = "CV Review Request"
    const body = `Hello,

I would like to request a professional CV review for my career transition.

PHONE NUMBER:
${phoneNumber.trim() || "N/A"}

TARGET JOB ROLES:
${targetRoles.trim()}

CV FILE INFORMATION:
- File Name: ${cvFile.name}
- File Size: ${(cvFile.size / 1024 / 1024).toFixed(2)} MB

I will attach my CV file to this email.

Looking forward to your professional feedback!

Thank you,
[Your Name]`

    const mailtoUrl = `mailto:resumesuplift@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl

    setTimeout(() => {
      alert(`📧 Email client opened!

IMPORTANT: Please attach your CV file (${cvFile.name}) to the email before sending.

Your target job roles and details have been pre-filled in the email body.`)

      setCvFile(null)
      setTargetRoles("")
      setPhoneNumber("")
      setFileError("")
    }, 800)
  }

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-16 bg-background">
      <div className="container px-4 mx-auto max-w-3xl">
        <div className="mb-6">
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
                <h1 className="text-lg sm:text-xl font-bold text-foreground truncate">Submit Your CV for Review</h1>
                <p className="text-xs text-muted-foreground">Get professional feedback on your resume</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-5">
            {/* CV Upload */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Upload className="h-4 w-4 text-primary" />
                Upload Your CV/Resume <span className="text-red-500">*</span>
              </div>
              <p className="text-xs text-muted-foreground">Supported formats: PDF, DOCX (Max 10MB)</p>

              <div
                onDrop={handleDrop}
                onDragOver={(e) => {
                  e.preventDefault()
                  setIsDragging(true)
                }}
                onDragLeave={() => setIsDragging(false)}
                onClick={() => fileInputRef.current?.click()}
                className={[
                  "relative border-2 border-dashed rounded-xl p-5 sm:p-6 transition-all cursor-pointer",
                  isDragging ? "border-primary bg-primary/5" : "",
                  cvFile ? "border-green-500/50 bg-green-500/5" : "border-border hover:border-primary/50 hover:bg-muted/30",
                ].join(" ")}
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
                      <div className="h-14 w-14 rounded-full bg-green-500/10 flex items-center justify-center mb-3">
                        <FileText className="h-7 w-7 text-green-500" />
                      </div>
                      <p className="text-sm font-semibold text-foreground mb-1 break-all px-2">{cvFile.name}</p>
                      <p className="text-xs text-muted-foreground">{(cvFile.size / 1024 / 1024).toFixed(2)} MB</p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setCvFile(null)
                          setFileError("")
                        }}
                        className="mt-3 text-xs text-primary hover:underline"
                      >
                        Change file
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Upload className="h-7 w-7 text-primary" />
                      </div>
                      <p className="text-sm font-medium text-foreground mb-1">Drop your CV here or click to browse</p>
                      <p className="text-xs text-muted-foreground">PDF or DOCX format, up to 10MB</p>
                    </>
                  )}
                </div>
              </div>

              {fileError ? <p className="text-xs text-red-500">{fileError}</p> : null}
            </div>

            {/* Target roles */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Briefcase className="h-4 w-4 text-primary" />
                What are your target job roles? <span className="text-red-500">*</span>
              </div>
              <p className="text-xs text-muted-foreground">List the job titles or positions you&apos;re applying for</p>
              <textarea
                value={targetRoles}
                onChange={(e) => setTargetRoles(e.target.value)}
                placeholder="e.g., Senior Frontend Developer, React Developer, Full Stack Engineer..."
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              />
              <p className="text-xs text-muted-foreground">
                Be specific about the roles you&apos;re targeting to get tailored feedback.
              </p>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Phone className="h-4 w-4 text-primary" />
                Phone Number <span className="text-xs text-muted-foreground font-normal">(optional)</span>
              </div>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="e.g., +92 300 1234567"
                inputMode="tel"
                autoComplete="tel"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={!cvFile || !targetRoles.trim() || !!fileError}
              className="w-full h-12 inline-flex items-center justify-center rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send via Email
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

