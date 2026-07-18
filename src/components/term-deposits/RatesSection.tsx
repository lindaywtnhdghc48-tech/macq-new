"use client";

import { useMemo, useState } from "react";

import {
  classicAccordionItems,
  digitalAccordionItems,
  digitalRatesOverMillion,
  digitalRatesUnderMillion,
  type SimpleRateRow,
} from "@/lib/term-deposit-data";
import { AccordionGroup } from "./AccordionGroup";

function AmountToggle({
  active,
  onChange,
  firstLabel,
  secondLabel,
}: {
  active: "under" | "over";
  onChange: (value: "under" | "over") => void;
  firstLabel: string;
  secondLabel: string;
}) {
  return (
    <div className="grid gap-3 rounded-full border border-[var(--border-strong)] p-1.5 md:grid-cols-2">
      {[
        { key: "under" as const, label: firstLabel },
        { key: "over" as const, label: secondLabel },
      ].map((item) => (
        <button
          key={item.key}
          type="button"
          className={`rounded-full px-6 py-4 text-sm font-semibold transition sm:text-base ${
            active === item.key
              ? "bg-black text-white shadow-[0_10px_25px_rgba(0,0,0,0.18)]"
              : "text-[var(--ink)] hover:bg-[var(--surface-muted)]"
          }`}
          onClick={() => onChange(item.key)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

function SimpleRateTable({ rows }: { rows: SimpleRateRow[] }) {
  return (
    <div className="overflow-hidden rounded-[26px] border border-[var(--border-soft)] bg-white shadow-[0_22px_55px_rgba(8,15,39,0.06)]">
      <div className="grid grid-cols-2 gap-4 border-b border-[var(--border-soft)] px-5 py-4 text-sm font-semibold text-[var(--ink)] sm:px-8 sm:text-base">
        <span>Term</span>
        <span>Interest paid at maturity</span>
      </div>
      {rows.map((row) => (
        <div
          key={row.term}
          className="grid grid-cols-2 gap-4 border-b border-[var(--border-soft)] px-5 py-5 text-sm text-[var(--copy)] last:border-b-0 sm:px-8 sm:text-base"
        >
          <span className="font-semibold text-[var(--ink)]">{row.term}</span>
          <span>{row.maturity}</span>
        </div>
      ))}
    </div>
  );
}

export function RatesSection() {
  const [digitalAmount, setDigitalAmount] = useState<"under" | "over">("under");

  const digitalRows = useMemo(
    () => (digitalAmount === "under" ? digitalRatesUnderMillion : digitalRatesOverMillion),
    [digitalAmount]
  );

  return (
    <section id="rates-and-fees" className="scroll-mt-36 bg-[var(--surface-muted)] py-16 sm:py-24">
      <div className="mx-auto max-w-[1120px] space-y-16 px-4 sm:px-6">
        <div
          id="digital-rates"
          className="scroll-mt-36 rounded-[36px] bg-white px-5 py-10 shadow-[0_22px_70px_rgba(8,15,39,0.08)] sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="font-[family:var(--font-display)] text-4xl leading-[0.95] tracking-[-0.04em] text-[var(--ink)] sm:text-6xl">
              Macquarie Term Deposit
              <br />
              fixed interest rates
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--copy)]">
              We&apos;ve reimagined how term deposits work with the Macquarie Term Deposit.
            </p>
            <p className="mt-2 text-lg leading-8 text-[var(--copy)]">
              Available for individual or company accounts with a minimum investment of $25,000.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-[1060px]">
            <p className="mb-4 text-center text-2xl font-medium text-[var(--ink)]">I want to deposit...</p>
            <AmountToggle
              active={digitalAmount}
              onChange={setDigitalAmount}
              firstLabel="$1 million or under"
              secondLabel="Greater than $1 million"
            />
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-medium text-[var(--ink)]">
              Interest rates for deposits {digitalAmount === "under" ? "of $1 million or under" : "greater than $1 million"}
            </h3>
            <div className="mt-6">
              <SimpleRateTable rows={digitalRows} />
            </div>
          </div>
        </div>

        <AccordionGroup items={digitalAccordionItems} alwaysOpen showChevron={false} />

        <div
          id="classic-rates"
          className="scroll-mt-36 rounded-[36px] bg-white px-5 py-10 shadow-[0_22px_70px_rgba(8,15,39,0.08)] sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="font-[family:var(--font-display)] text-4xl leading-[0.95] tracking-[-0.04em] text-[var(--ink)] sm:text-6xl">
              Macquarie Term Deposit
              <br />
              fixed interest rates
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--copy)]">
              Our classic Macquarie Term Deposit offering.
            </p>
            <p className="mt-2 text-lg leading-8 text-[var(--copy)]">
              Available for company or trust accounts with a minimum balance of $5,000.
            </p>
          </div>

        </div>

        <AccordionGroup items={classicAccordionItems} />
      </div>
    </section>
  );
}
