"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Info } from "lucide-react";

import {
  classicAccordionItems,
  classicRatesOverMillion,
  classicRatesUnderMillion,
  digitalAccordionItems,
  digitalRatesOverMillion,
  digitalRatesUnderMillion,
  type DetailedRateRow,
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

function DetailedRateTable({ rows }: { rows: DetailedRateRow[] }) {
  return (
    <>
      <div className="grid gap-4 lg:hidden">
        {rows.map((row) => (
          <article
            key={row.term}
            className="rounded-[24px] border border-[var(--border-soft)] bg-white p-5 shadow-[0_18px_40px_rgba(8,15,39,0.06)]"
          >
            <h4 className="text-lg font-semibold text-[var(--ink)]">{row.term}</h4>
            <dl className="mt-4 grid gap-3 text-sm text-[var(--copy)]">
              <div className="flex items-start justify-between gap-4">
                <dt className="font-medium text-[var(--ink)]">At maturity</dt>
                <dd className="text-right">{row.maturity}</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="font-medium text-[var(--ink)]">Monthly</dt>
                <dd className="text-right">{row.monthly}</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="font-medium text-[var(--ink)]">Quarterly</dt>
                <dd className="text-right">{row.quarterly}</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="font-medium text-[var(--ink)]">Half yearly</dt>
                <dd className="text-right">{row.halfYearly}</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="font-medium text-[var(--ink)]">Annually</dt>
                <dd className="text-right">{row.annually}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <div className="hidden overflow-x-auto rounded-[26px] border border-[var(--border-soft)] bg-white shadow-[0_22px_55px_rgba(8,15,39,0.06)] lg:block">
        <table className="w-full min-w-[920px] border-collapse">
        <thead>
          <tr className="border-b border-[var(--border-soft)] text-left text-sm font-semibold text-[var(--ink)] sm:text-base">
            <th className="px-5 py-4 sm:px-8">Term</th>
            <th className="px-5 py-4 sm:px-8">Interest paid at maturity</th>
            <th className="px-5 py-4 sm:px-8">Interest paid monthly</th>
            <th className="px-5 py-4 sm:px-8">Interest paid quarterly</th>
            <th className="px-5 py-4 sm:px-8">Interest paid half yearly</th>
            <th className="px-5 py-4 sm:px-8">Interest paid annually</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.term} className="border-b border-[var(--border-soft)] last:border-b-0">
              <td className="px-5 py-5 font-semibold text-[var(--ink)] sm:px-8">{row.term}</td>
              <td className="px-5 py-5 text-[var(--copy)] sm:px-8">{row.maturity}</td>
              <td className="px-5 py-5 text-[var(--copy)] sm:px-8">{row.monthly}</td>
              <td className="px-5 py-5 text-[var(--copy)] sm:px-8">{row.quarterly}</td>
              <td className="px-5 py-5 text-[var(--copy)] sm:px-8">{row.halfYearly}</td>
              <td className="px-5 py-5 text-[var(--copy)] sm:px-8">{row.annually}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </>
  );
}

export function RatesSection() {
  const [digitalAmount, setDigitalAmount] = useState<"under" | "over">("under");
  const [classicAmount, setClassicAmount] = useState<"under" | "over">("under");

  const digitalRows = useMemo(
    () => (digitalAmount === "under" ? digitalRatesUnderMillion : digitalRatesOverMillion),
    [digitalAmount]
  );

  const classicRows = useMemo(
    () => (classicAmount === "under" ? classicRatesUnderMillion : classicRatesOverMillion),
    [classicAmount]
  );

  return (
    <section id="rates-and-fees" className="scroll-mt-36 bg-[var(--surface-muted)] py-16 sm:py-24">
      <div className="mx-auto max-w-[1120px] space-y-16 px-4 sm:px-6">
        <div
          id="digital-rates"
          className="scroll-mt-36 rounded-[36px] bg-white px-5 py-10 shadow-[0_22px_70px_rgba(8,15,39,0.08)] sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-[760px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-soft)] px-4 py-2 text-sm font-semibold text-[var(--brand)]">
              New
            </div>
            <h2 className="mt-6 font-[family:var(--font-display)] text-4xl leading-[0.95] tracking-[-0.04em] text-[var(--ink)] sm:text-6xl">
              Macquarie Digital Term Deposit
              <br />
              fixed interest rates
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--copy)]">
              We&apos;ve reimagined how term deposits work with the Macquarie Digital Term Deposit.
            </p>
            <p className="mt-2 text-lg leading-8 text-[var(--copy)]">
              Available for individual or joint accounts with a minimum investment of $25,000.
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
            <p className="mt-6 max-w-5xl text-sm leading-7 text-[var(--copy)] sm:text-base">
              The above interest rates are subject to change. The interest rate that you&apos;ll receive on your Digital Term Deposit may vary depending on when your application is processed and will be confirmed at account opening.
            </p>
          </div>

          <div className="mt-10 flex gap-4 rounded-[30px] bg-[var(--sky-panel)] px-5 py-6 sm:px-8">
            <Info className="mt-1 h-5 w-5 shrink-0 text-[var(--brand)]" />
            <div className="space-y-4 text-sm leading-7 text-[var(--copy)] sm:text-base">
              <p className="font-semibold text-[var(--ink)]">Do you currently hold a term deposit with us?</p>
              <p>
                If you would like to view your current term deposit rate,{" "}
                <a href="#" className="font-semibold text-[var(--ink)] underline underline-offset-4">
                  log in to your account
                </a>
                <ArrowUpRight className="ml-1 inline h-4 w-4" />
              </p>
              <p>
                If your term deposit is reaching maturity and you&apos;re not sure which account you hold,{" "}
                <a href="#" className="font-semibold text-[var(--ink)] underline underline-offset-4">
                  find out how to check which term deposit account you have
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <AccordionGroup items={digitalAccordionItems} />

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

          <div className="mx-auto mt-12 max-w-[1060px]">
            <p className="mb-4 text-center text-2xl font-medium text-[var(--ink)]">I want to deposit...</p>
            <AmountToggle
              active={classicAmount}
              onChange={setClassicAmount}
              firstLabel="$1 million and under"
              secondLabel="Greater than $1 million"
            />
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-medium text-[var(--ink)]">
              Interest rates for deposits {classicAmount === "under" ? "of $1 million or under" : "greater than $1 million"}
            </h3>
            <div className="mt-6">
              <DetailedRateTable rows={classicRows} />
            </div>
            <p className="mt-6 max-w-5xl text-sm leading-7 text-[var(--copy)] sm:text-base">
              The above interest rates are subject to change. The interest rate that you&apos;ll receive on your Term Deposit may vary depending on when your application is processed and will be confirmed at account opening.
            </p>
          </div>

          <div className="mt-10 flex gap-4 rounded-[30px] bg-[var(--sky-panel)] px-5 py-6 sm:px-8">
            <Info className="mt-1 h-5 w-5 shrink-0 text-[var(--brand)]" />
            <div className="space-y-4 text-sm leading-7 text-[var(--copy)] sm:text-base">
              <p className="font-semibold text-[var(--ink)]">Do you currently hold a term deposit with us?</p>
              <p>
                If you would like to view your current term deposit rate,{" "}
                <a href="#" className="font-semibold text-[var(--ink)] underline underline-offset-4">
                  log in to your account
                </a>
                <ArrowUpRight className="ml-1 inline h-4 w-4" />
              </p>
              <p>
                If your term deposit is reaching maturity and you&apos;re not sure which account you hold,{" "}
                <a href="#" className="font-semibold text-[var(--ink)] underline underline-offset-4">
                  find out how to check which term deposit account you have
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <AccordionGroup items={classicAccordionItems} />
      </div>
    </section>
  );
}
