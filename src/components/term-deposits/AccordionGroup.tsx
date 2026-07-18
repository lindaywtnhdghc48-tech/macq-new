"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { AccordionItem } from "@/lib/term-deposit-data";

type AccordionGroupProps = {
  items: AccordionItem[];
  alwaysOpen?: boolean;
  showChevron?: boolean;
};

export function AccordionGroup({
  items,
  alwaysOpen = false,
  showChevron = true,
}: AccordionGroupProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="rounded-[28px] border border-[var(--border-soft)] bg-white shadow-[0_18px_50px_rgba(8,15,39,0.08)]">
      {items.map((item, index) => {
        const isOpen = alwaysOpen || openIndex === index;

        return (
          <div key={item.title} className="border-b border-[var(--border-soft)] last:border-b-0">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-[var(--ink)] transition hover:bg-[var(--surface-muted)] sm:px-8"
              aria-expanded={isOpen}
              onClick={() => {
                if (!alwaysOpen) {
                  setOpenIndex(isOpen ? -1 : index);
                }
              }}
            >
              <span>{item.title}</span>
              {showChevron ? (
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              ) : null}
            </button>
            {isOpen ? (
              <div className="space-y-4 px-6 pb-6 text-sm leading-7 text-[var(--copy)] sm:px-8 sm:text-base">
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {item.links?.length ? (
                  <div className="flex flex-col gap-3 pt-2">
                    {item.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="w-fit text-sm font-semibold text-[var(--brand)] underline-offset-4 hover:underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
