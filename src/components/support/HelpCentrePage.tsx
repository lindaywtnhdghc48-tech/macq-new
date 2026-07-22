"use client";

import { useState } from "react";

import { Header } from "@/components/term-deposits/Header";

type Question = {
  id: string;
  question: string;
  content: React.ReactNode;
};

const questions: Question[] = [
  {
    id: "what-is-a-term-deposit",
    question: "What's a term deposit?",
    content: (
      <div className="space-y-4 text-sm leading-7 text-[var(--copy)] sm:text-base sm:leading-8">
        <p>A term deposit is a cash investment that allows you to lock in a fixed interest over a set time period.</p>
        <p>Macquarie offers term deposits for:</p>
        <ul className="space-y-2 pl-2">
          <li className="flex gap-3"><span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--ink)]" /><span>Individual Accounts</span></li>
          <li className="flex gap-3"><span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--ink)]" /><span>Company Accounts</span></li>
        </ul>
        <p>
          Macquarie Term Deposits up to $250,000 are{" "}
          <span className="underline underline-offset-2">protected by the Government Guarantee</span>.
        </p>
      </div>
    ),
  },
  {
    id: "who-can-open",
    question: "Who can open a term deposit?",
    content: (
      <div className="space-y-4 text-sm leading-7 text-[var(--copy)] sm:text-base sm:leading-8">
        <p>To open a Macquarie Term Deposit, you&apos;ll need to:</p>
        <ul className="space-y-2 pl-2">
          <li className="flex gap-3"><span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--ink)]" /><span>be at least 18 years old</span></li>
          <li className="flex gap-3"><span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--ink)]" /><span>be an individual account holder/be a company</span></li>
          <li className="flex gap-3"><span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--ink)]" /><span>be a permanent Australian resident and have an Australian driver licence or passport</span></li>
          <li className="flex gap-3"><span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--ink)]" /><span>provide your email address, an Australian mobile number and an Australian residential address</span></li>
          <li className="flex gap-3"><span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--ink)]" /><span>have a minimum investment of $25,000</span></li>
        </ul>
        <p>
          Macquarie Term Deposits can only be opened directly by the account holder. If you hold a Power of Attorney or Enduring Power of Attorney you can&apos;t open a term deposit account on behalf of the account holder.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-apply",
    question: "How do I apply for a term deposit?",
    content: (
      <div className="space-y-4 text-sm leading-7 text-[var(--copy)] sm:text-base sm:leading-8">
        <p>To open a term deposit:</p>
        <ul className="space-y-2 pl-2">
          <li className="flex gap-3"><span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--ink)]" /><span>Go to <a href="/" className="underline underline-offset-2 hover:text-[var(--brand)] transition">Macquarie Term Deposits</a></span></li>
          <li className="flex gap-3"><span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--ink)]" /><span>Select <strong>Apply now</strong></span></li>
          <li className="flex gap-3"><span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--ink)]" /><span>Select Individual/Company Term Deposit in the Contact us form</span></li>
          <li className="flex gap-3"><span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--ink)]" /><span>Fill your details and our agent will contact you to assist with opening your Term Deposit Account.</span></li>
        </ul>
      </div>
    ),
  },
  {
    id: "how-long-to-open",
    question: "How long does it take to open a term deposit?",
    content: (
      <div className="space-y-4 text-sm leading-7 text-[var(--copy)] sm:text-base sm:leading-8">
        <p>We aim to open your Macquarie Term Deposit within 2 business days of receiving your information, provided that all required information and documents are completed.</p>
        <p>The interest rate applicable on your account is set when your account is opened, once all application conditions have been satisfied. Any interest will be earned from the time funds are credited to your account.</p>
        <p>You will receive a confirmation email as soon as your account is set up.</p>
      </div>
    ),
  },
  {
    id: "how-to-fund",
    question: "How do I fund my term deposit account?",
    content: (
      <div className="space-y-4 text-sm leading-7 text-[var(--copy)] sm:text-base sm:leading-8">
        <p>Funds will be deposited directly into your term deposit from your Macquarie Transaction Account or your nominated Bank Account.</p>
        <p>Once your Macquarie Term Deposit is opened and funded, you can&apos;t deposit additional funds.</p>
      </div>
    ),
  },
];

export function HelpCentrePage() {
  const [activeId, setActiveId] = useState(questions[0].id);

  const active = questions.find((q) => q.id === activeId) ?? questions[0];

  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <Header />

      {/* Section heading */}
      <div className="border-b border-[var(--border-soft)] bg-white px-4 py-6 sm:px-8 sm:py-8">
        <div className="mx-auto max-w-[1120px]">
          <h1 className="font-[family:var(--font-display)] text-[1.9rem] leading-tight tracking-[-0.03em] text-[var(--ink)] sm:text-[2.4rem]">
            Opening a Term Deposit
          </h1>
        </div>
      </div>

      {/* Sidebar + content */}
      <div className="mx-auto max-w-[1120px] px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">

          {/* Sidebar */}
          <aside className="w-full shrink-0 lg:w-[280px]">
            <nav className="flex flex-col">
              {questions.map((q) => {
                const isActive = q.id === activeId;
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setActiveId(q.id)}
                    className={`border-l-[3px] px-4 py-3 text-left text-sm leading-6 transition sm:text-[0.95rem] ${
                      isActive
                        ? "border-[var(--brand)] font-semibold text-[var(--brand)]"
                        : "border-transparent font-normal text-[var(--ink)] hover:border-[var(--border-strong)] hover:text-[var(--brand)]"
                    }`}
                  >
                    {q.question}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Divider */}
          <div className="hidden w-px bg-[var(--border-soft)] lg:block" />

          {/* Content */}
          <main className="min-w-0 flex-1">
            <h2 className="font-[family:var(--font-display)] text-[1.9rem] leading-tight tracking-[-0.03em] text-[var(--ink)] sm:text-[2.3rem]">
              {active.question}
            </h2>
            <div className="mt-6">{active.content}</div>
          </main>

        </div>
      </div>

      <footer className="bg-black py-6 text-white sm:py-8">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 space-y-4">
          <p className="text-xs leading-6 text-white/74">
            Unless stated otherwise, this information is provided by Macquarie Bank Limited AFSL and Australian Credit Licence 237502 (MBL) and does not take into account your objectives, financial situation or needs. You should consider whether it is appropriate for you. Finance is subject to our credit approval criteria. Terms and conditions apply and may change without notice.
          </p>
          <p className="text-xs leading-6 text-white/74">
            Apple Pay, the Apple logo &amp; iPhone are trademarks of Apple Inc, registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android Pay, the Android Logo and Google Play are trademarks of Google Inc. MasterCard and the MasterCard Brand Mark are registered trademarks of MasterCard International Incorporated. BPAY is a registered trademark of BPAY Pty Ltd ABN 69 079 137 518.
          </p>
          <p className="text-xs leading-6 text-white/74">
            Other than MBL, none of the Macquarie Group entities referred to are authorised deposit-taking institutions for the purposes of the Banking Act 1959 (Cth), unless noted otherwise. Their obligations do not represent deposits or other liabilities of MBL. Unless otherwise stated, MBL does not guarantee or otherwise provide assurance in respect of the obligations of that entity.
          </p>
          <p className="text-xs text-white/74">© Macquarie Group Limited</p>
        </div>
      </footer>
    </div>
  );
}
