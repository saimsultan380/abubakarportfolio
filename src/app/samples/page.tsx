"use client"

import * as React from "react"
import { ArrowLeft, Loader2, FileText, X, Eye } from "lucide-react"
import Link from "next/link"
import { renderAsync } from "docx-preview"

const samples = Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    name: `Sample Resume ${i + 1}`,
    filename: `Resumes Uplift Sample ${i + 1}.docx`,
    type: "DOCX",
    size: "25KB - 250KB"
}))

// Modal Content Component
function DocViewerModal({
    filename,
    onClose
}: {
    filename: string,
    onClose: () => void
}) {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        const loadDoc = async () => {
            if (!containerRef.current) return

            try {
                const response = await fetch(`/samples/${encodeURIComponent(filename)}`)
                if (!response.ok) throw new Error("Failed to fetch")

                const arrayBuffer = await response.arrayBuffer()

                // Render the document directly into the container
                await renderAsync(arrayBuffer, containerRef.current, undefined, {
                    className: "docx", // Add a class for custom styling
                    inWrapper: false,
                    ignoreWidth: false,
                    ignoreHeight: false,
                    ignoreFonts: false,
                    breakPages: true,
                    debug: false,
                })

                setLoading(false)
            } catch (err) {
                console.error("docx-preview error:", err)
                setError(true)
                setLoading(false)
            }
        }

        loadDoc()

        // Prevent body scroll
        document.body.style.overflow = "hidden"
        return () => { document.body.style.overflow = "unset" }
    }, [filename])

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-0 md:p-8 bg-background/90 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-5xl h-full bg-card md:border md:border-border md:rounded-3xl shadow-2xl overflow-hidden flex flex-col scale-in-95 animate-in fill-mode-forwards duration-300">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-border bg-muted/30">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                            <FileText className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-sm md:text-lg font-bold truncate max-w-[150px] md:max-w-md text-foreground">{filename}</h3>
                            <p className="text-[8px] md:text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">Resumes Uplift Design</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="h-8 w-8 md:h-10 md:w-10 rounded-full hover:bg-muted flex items-center justify-center transition-colors border border-border/50 text-muted-foreground"
                    >
                        <X className="h-4 w-4 md:h-5 md:w-5" />
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-grow overflow-auto bg-zinc-200/30 dark:bg-zinc-900/40 p-3 sm:p-4 md:p-8 lg:p-12 scrollbar-hide">
                    <div className="mx-auto w-fit min-h-full">
                        {loading && (
                            <div className="flex flex-col items-center justify-center h-[400px] sm:h-[600px] w-full max-w-[850px] bg-white dark:bg-zinc-950 rounded shadow-sm">
                                <Loader2 className="h-10 w-10 sm:h-12 sm:w-12 animate-spin text-primary/40 mb-4" />
                                <p className="text-xs sm:text-sm font-medium text-muted-foreground animate-pulse tracking-widest uppercase">Rendering Design...</p>
                            </div>
                        )}

                        {error && (
                            <div className="flex flex-col items-center justify-center h-[400px] sm:h-[600px] w-full max-w-[850px] bg-white dark:bg-zinc-950 rounded shadow-sm text-center p-8">
                                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                                    <X className="h-8 w-8 sm:h-10 sm:w-10 text-red-500" />
                                </div>
                                <h4 className="text-lg sm:text-xl font-bold mb-2 text-foreground">Failed to render</h4>
                                <p className="text-sm sm:text-base text-muted-foreground max-w-xs">There was an issue loading the design. Try refreshing the page.</p>
                            </div>
                        )}

                        {/* Rendering Container */}
                        <div
                            ref={containerRef}
                            className={`docx-container shadow-2xl rounded-sm bg-white border border-border transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
                        />
                    </div>
                </div>
            </div>

            {/* Click outside to close */}
            <div className="absolute inset-0 -z-10" onClick={onClose} />

            <style dangerouslySetInnerHTML={{
                __html: `
                .docx-container {
                    min-height: 100%;
                    padding: 0 !important;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    width: 100%;
                    max-width: 100%;
                    margin: 0 auto;
                    overflow: visible;
                }
                .docx-container .docx {
                    padding: 40pt 60pt !important;
                    margin: 0 auto !important;
                    background: white !important;
                    box-shadow: none !important;
                    width: 800px !important;
                    max-width: 800px !important;
                    min-height: auto !important;
                    color: black !important;
                    transition: all 0.3s ease;
                    transform-origin: top center;
                }
                
                /* Responsive scaling with proper containment - no negative margins */
                @media (max-width: 900px) {
                    .docx-container .docx {
                        transform: scale(0.9);
                        width: calc(800px * 0.9) !important;
                        padding: 36pt 54pt !important;
                    }
                }
                @media (max-width: 768px) {
                    .docx-container .docx {
                        transform: scale(0.75);
                        width: calc(800px * 0.75) !important;
                        padding: 30pt 40pt !important;
                    }
                }
                @media (max-width: 640px) {
                    .docx-container .docx {
                        transform: scale(0.6);
                        width: calc(800px * 0.6) !important;
                        padding: 25pt 30pt !important;
                    }
                }
                @media (max-width: 480px) {
                    .docx-container .docx {
                        transform: scale(0.5);
                        width: calc(800px * 0.5) !important;
                        padding: 20pt 20pt !important;
                    }
                }
                @media (max-width: 390px) {
                    .docx-container .docx {
                        transform: scale(0.45);
                        width: calc(800px * 0.45) !important;
                        padding: 18pt 18pt !important;
                    }
                }
                @media (max-width: 360px) {
                    .docx-container .docx {
                        transform: scale(0.42);
                        width: calc(800px * 0.42) !important;
                        padding: 15pt 15pt !important;
                    }
                }

                /* Ensure specific elements look good */
                .docx p { margin-bottom: 0 !important; }
                .docx-container .docx section {
                    padding: 0 !important;
                    background: white !important;
                }
                
                /* Hide scrollbars for the reader feel */
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </div>
    )
}

export default function SamplesPage() {
    const [selectedSample, setSelectedSample] = React.useState<string | null>(null)

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <main className="container px-4 mx-auto pt-32 pb-24 flex-grow">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20 animate-in fade-in">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-black font-heading mb-8 tracking-tighter text-foreground">
                        The <span className="text-primary italic">Uplift</span> Gallery
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Explore our collection of high-performance, ATS-ready resumes. Click any sample to view the optimized design and content layout.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {samples.map((sample) => (
                        <div
                            key={sample.id}
                            onClick={() => setSelectedSample(sample.filename)}
                            className="group relative flex flex-col bg-card border border-border rounded-2xl p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-2 ring-1 ring-border/50 group-hover:ring-primary/20"
                        >
                            {/* Visual Hint */}
                            <div className="h-44 sm:h-48 rounded-xl bg-muted/30 flex flex-col items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors border border-dashed border-border group-hover:border-primary/20 overflow-hidden relative">
                                <div className="relative">
                                    <div className="h-20 w-16 sm:h-24 sm:w-18 md:h-28 md:w-20 bg-white dark:bg-zinc-800 rounded shadow-md border border-border flex flex-col p-2 sm:p-3 gap-1 sm:gap-1.5 group-hover:scale-110 transition-transform duration-500">
                                        <div className="h-1 sm:h-1.5 w-full bg-zinc-100 dark:bg-zinc-700 rounded-full" />
                                        <div className="h-1 sm:h-1.5 w-3/4 bg-zinc-100 dark:bg-zinc-700 rounded-full" />
                                        <div className="mt-2 sm:mt-3 h-1 sm:h-1.5 w-full bg-zinc-100 dark:bg-zinc-700 rounded-full" />
                                        <div className="h-1 sm:h-1.5 w-full bg-zinc-100 dark:bg-zinc-700 rounded-full" />
                                        <div className="h-1 sm:h-1.5 w-1/2 bg-zinc-100 dark:bg-zinc-700 rounded-full" />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-primary flex items-center justify-center text-white shadow-xl translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                                        <Eye className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                                    </div>
                                </div>
                                <span className="mt-4 sm:mt-5 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground/40 group-hover:text-primary transition-colors">
                                    View Resume
                                </span>
                            </div>

                            {/* Info */}
                            <div className="relative">
                                <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                                    {sample.name}
                                </h3>
                                <div className="flex items-center gap-3">
                                    <span className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1.5 rounded-full border border-primary/20 uppercase tracking-widest leading-none">
                                        {sample.type}
                                    </span>
                                    <span className="flex items-center gap-2 uppercase tracking-[0.1em] text-[10px] font-bold text-muted-foreground">
                                        <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
                                        ATS Optimized
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Document Viewer Modal */}
            {selectedSample && (
                <DocViewerModal
                    filename={selectedSample}
                    onClose={() => setSelectedSample(null)}
                />
            )}
        </div>
    )
}
