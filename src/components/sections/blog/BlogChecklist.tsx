"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  "I have tailored the resume to the job description.",
  "My layout is simple and follows a clear reading order.",
  "My section headings are standard and descriptive.",
  "My contact details are in the document body.",
  "My work experience includes relevant responsibilities and achievements.",
  "My skills and keywords accurately reflect my background.",
  "My dates, job titles, and employment history are consistent.",
  "I have followed the employer's file-format instructions.",
  "I have checked that my saved document contains selectable text.",
  "I have reviewed the final application for errors and missing information.",
] as const;

export function BlogChecklist() {
  const [checked, setChecked] = React.useState<boolean[]>(
    () => ITEMS.map(() => false),
  );

  const done = checked.filter(Boolean).length;

  const toggle = (index: number) => {
    setChecked((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  const reset = () => setChecked(ITEMS.map(() => false));

  const copy = async () => {
    const lines = ITEMS.map(
      (item, i) => `${checked[i] ? "[x]" : "[ ]"} ${item}`,
    );
    await navigator.clipboard.writeText(
      `Resume readiness checklist\n${done} of ${ITEMS.length}\n\n${lines.join("\n")}`,
    );
  };

  return (
    <div className="rounded-3xl border border-border/60 bg-muted/20 p-5 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <h3 className="text-xl font-bold font-heading text-foreground">
            Resume readiness checklist
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {done} of {ITEMS.length} complete
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={copy}
            className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-colors"
          >
            Copy checklist
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      <ul className="space-y-2.5">
        {ITEMS.map((item, index) => (
          <li key={item}>
            <button
              type="button"
              onClick={() => toggle(index)}
              className={cn(
                "flex w-full items-start gap-3 rounded-xl border px-3.5 py-3 text-left transition-colors",
                checked[index]
                  ? "border-primary/30 bg-primary/5"
                  : "border-border/50 bg-background/60 hover:border-border",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border",
                  checked[index]
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background",
                )}
              >
                {checked[index] ? <Check className="h-3.5 w-3.5" /> : null}
              </span>
              <span
                className={cn(
                  "text-sm leading-relaxed",
                  checked[index]
                    ? "text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {item}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
