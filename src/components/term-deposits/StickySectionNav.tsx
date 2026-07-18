"use client";

import type { MouseEvent } from "react";
import { ArrowRight } from "lucide-react";

import { sectionNavItems } from "@/lib/term-deposit-data";

function getScrollOffset() {
  if (typeof window === "undefined") {
    return 0;
  }

  if (window.innerWidth < 640) {
    return 150;
  }

  if (window.innerWidth < 1024) {
    return 135;
  }

  return 120;
}

export function StickySectionNav() {
  const handleAnchorClick = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    const element = document.getElementById(targetId);

    if (!element) {
      return;
    }

    event.preventDefault();

    const offset = getScrollOffset();
    const top = element.getBoundingClientRect().top + window.scrollY - offset;

    window.history.replaceState(null, "", `#${targetId}`);
    window.scrollTo({
      top: Math.max(top, 0),
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-[89px] z-40">
      <div className="mx-auto max-w-[1120px] border border-[var(--border-soft)] bg-white shadow-[0_8px_22px_rgba(12,13,16,0.12)]">
        <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-5">
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-[var(--ink)] sm:gap-x-8 sm:text-base">
          {sectionNavItems.map((item, index) => {
            const targetId = item.href.replace("#", "");

            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative whitespace-nowrap py-2 transition hover:text-[var(--brand)] ${
                  index === 0 ? "text-[var(--ink)]" : "text-[var(--copy)]"
                }`}
                onClick={(event) => handleAnchorClick(event, targetId)}
              >
                {item.label}
                {index === 0 ? (
                  <span className="absolute inset-x-0 -bottom-2 h-[3px] rounded-full bg-[var(--brand)]" />
                ) : null}
              </a>
            );
          })}
        </nav>
        <a
          href="#open-an-account"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-dark)] sm:w-auto sm:min-w-[150px]"
          onClick={(event) => handleAnchorClick(event, "open-an-account")}
        >
          Apply now
          <ArrowRight className="h-4 w-4" />
        </a>
        </div>
      </div>
    </div>
  );
}
