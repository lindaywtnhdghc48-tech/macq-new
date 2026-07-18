import { ArrowUpRight } from "lucide-react";

import { bankingAppImageUrl, digitalBankingBullets } from "@/lib/term-deposit-data";

export function DigitalBankingSection() {
  return (
    <section className="border-t border-[var(--border-soft)] bg-[var(--surface)] py-18 sm:py-24">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <div className="grid items-center gap-8 rounded-[32px] bg-[var(--surface-muted)] p-6 sm:p-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-10">
          <div className="overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(8,15,39,0.12)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={bankingAppImageUrl}
              alt="Macquarie digital banking preview"
              className="h-[320px] w-full object-cover"
            />
          </div>

          <div id="digital-banking" className="scroll-mt-72">
            <h2 className="font-[family:var(--font-display)] text-4xl leading-tight tracking-[-0.04em] text-[var(--ink)] sm:text-5xl">
              Much loved digital banking
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--copy)] sm:text-lg">
              Get set to save more - the{" "}
              <a href="#faqs" className="underline underline-offset-4">
                Macquarie Mobile Banking app
              </a>{" "}
              is designed to make your life easier.
            </p>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--copy)] sm:text-base">
              {digitalBankingBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[var(--ink)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <a
              href="#faqs"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] transition hover:gap-3"
            >
              Explore digital banking support
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
