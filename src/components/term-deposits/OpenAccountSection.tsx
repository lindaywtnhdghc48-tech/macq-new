"use client";

import { useState } from "react";
import { HandCoins } from "lucide-react";

import { openAccountOptions } from "@/lib/term-deposit-data";

export function OpenAccountSection() {
  const [selected, setSelected] = useState<"individual" | "company">("individual");

  const activeOption =
    openAccountOptions.find((option) => option.value === selected) ?? openAccountOptions[0];

  return (
    <section id="open-an-account" className="bg-[var(--surface)] py-18 sm:py-24">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white shadow-[0_12px_25px_rgba(8,15,39,0.08)]">
            <HandCoins className="h-7 w-7 text-[var(--brand)]" />
          </div>
          <h2 className="mt-6 font-[family:var(--font-display)] text-4xl leading-tight tracking-[-0.04em] text-[var(--ink)] sm:text-6xl">
            Open a term deposit
          </h2>
        </div>

        <div id="open-an-account-card" className="mt-10 rounded-[30px] border border-[var(--border-soft)] bg-white p-6 shadow-[0_24px_60px_rgba(8,15,39,0.06)] sm:p-8">
          <p className="text-lg text-[var(--ink)]">Select the account type you want to open:</p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {openAccountOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`rounded-full border px-6 py-4 text-sm font-semibold transition sm:text-base ${
                  selected === option.value
                    ? "border-black bg-black text-white shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
                    : "border-[var(--border-strong)] bg-white text-[var(--ink)] hover:bg-[var(--surface-muted)]"
                }`}
                onClick={() => setSelected(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-[26px] bg-[var(--surface-muted)] p-6 sm:p-8">
            <h3 className="font-[family:var(--font-display)] text-3xl leading-tight tracking-[-0.03em] text-[var(--ink)]">
              {activeOption.title}
            </h3>
            <p className="mt-5 text-base leading-8 text-[var(--copy)]">{activeOption.intro}</p>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--copy)] sm:text-base">
              {activeOption.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {activeOption.note ? (
              <div className="mt-6 rounded-2xl border border-[var(--border-soft)] bg-white px-5 py-4 text-sm leading-7 text-[var(--ink)] sm:text-base">
                <strong className="font-semibold">Note:</strong> {activeOption.note.replace(/^Note:\s*/, "")}
              </div>
            ) : null}

          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="inline-flex w-full max-w-[680px] items-center justify-center rounded-2xl bg-[var(--brand)] px-6 py-4 text-center text-sm font-semibold text-white shadow-[0_16px_35px_rgba(0,102,204,0.24)] transition hover:brightness-95 sm:text-base"
            >
              Contact us to open your Macquarie Term Deposit Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
