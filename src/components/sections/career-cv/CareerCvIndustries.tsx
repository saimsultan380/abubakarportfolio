"use client";

import * as React from "react";
import {
  Cpu,
  Landmark,
  TrendingUp,
  HeartPulse,
  Cog,
  Users,
  GraduationCap,
  ShoppingBag,
  Scale,
  Building2,
  Plus,
} from "lucide-react";

const industries = [
  { name: "IT and Technology", icon: Cpu },
  { name: "Banking, Finance, and Accounting", icon: Landmark },
  { name: "Sales, Marketing, and Business Development", icon: TrendingUp },
  { name: "Healthcare and Medical", icon: HeartPulse },
  { name: "Engineering and Manufacturing", icon: Cog },
  { name: "Human Resources and Administration", icon: Users },
  { name: "Education and Academia", icon: GraduationCap },
  { name: "Retail, Hospitality, and Customer Service", icon: ShoppingBag },
  { name: "Legal and Compliance", icon: Scale },
  { name: "Government and Public Sector", icon: Building2 },
  { name: "Your Industry", icon: Plus },
];

export function CareerCvIndustries() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            Industries We <span className="text-primary">Write For</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            A CV that works in one industry rarely works in another. We write
            with real understanding of what each field expects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {industries.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card px-4 py-4 shadow-sm hover:border-primary/40 hover:shadow-md transition-all"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-foreground leading-snug">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
