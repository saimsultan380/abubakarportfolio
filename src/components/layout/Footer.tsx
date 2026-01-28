import Link from "next/link"
import { Twitter, Linkedin, Github, Mail, ArrowRight, Zap, MapPin, Phone } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full bg-background border-t border-border relative overflow-hidden">
            {/* Background Mesh Decor */}
            <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 -z-10 h-[300px] w-[300px] bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 pt-20 pb-12">
                <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-2xl font-black tracking-tighter font-heading text-foreground"
                        >
                            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                                <Zap className="h-5 w-5 fill-current" />
                            </div>
                            <span>Abubakar<span className="text-primary italic">.</span></span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs font-medium">
                            Crafting elite career documents for high-performing professionals. Stop settling, start scaling.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border">
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border">
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border">
                                <Github className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-foreground/50">Navigation</h4>
                        <ul className="space-y-4">
                            {["Services", "Process", "Reviews", "Recent Work", "FAQ"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors flex items-center group"
                                    >
                                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-foreground/50">Services</h4>
                        <ul className="space-y-4">
                            {["CV Writing", "LinkedIn Optimization", "Cover Letters", "Career Coaching"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-foreground/50">Get In Touch</h4>
                        <div className="space-y-4">
                            <a href="mailto:hello@example.com" className="group flex items-center gap-3 p-3 rounded-2xl bg-secondary/50 border border-border hover:bg-primary/5 hover:border-primary/20 transition-all">
                                <div className="h-10 w-10 rounded-xl bg-background flex items-center justify-center text-primary shadow-sm border border-border">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">Email Me</p>
                                    <p className="text-xs font-bold text-foreground">hello@example.com</p>
                                </div>
                            </a>
                            <div className="flex items-center gap-3 px-3">
                                <div className="h-5 w-5 flex items-center justify-center text-primary/40">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <span className="text-xs font-bold text-muted-foreground">Available Worldwide</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs font-bold text-muted-foreground">
                        © {new Date().getFullYear()} Abubakar. Built for high-performance.
                    </p>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

