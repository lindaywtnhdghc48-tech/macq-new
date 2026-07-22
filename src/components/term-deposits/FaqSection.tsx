"use client";

import { useState } from "react";
import {
  ChevronDown,
  CircleHelp,
  Landmark,
  PiggyBank,
  Smartphone,
  SquareArrowOutUpRight,
} from "lucide-react";

import {
  additionalInformation,
  existingHelpCards,
  faqItems,
  saveWays,
} from "@/lib/term-deposit-data";

const saveWayIcons = [PiggyBank, Smartphone, Landmark];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faqs" className="scroll-mt-72 bg-[var(--surface)] pt-18 sm:pt-24">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          <div>
            <h2 className="font-[family:var(--font-display)] text-5xl leading-[0.92] tracking-[-0.05em] text-[var(--ink)] sm:text-6xl lg:sticky lg:top-52">
              Frequently
              <br />
              asked
              <br />
              questions
            </h2>
          </div>

          <div>
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article key={item.question} className="border-t border-[var(--border-strong)]">
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-7 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="max-w-[880px] font-[family:var(--font-display)] text-3xl leading-tight tracking-[-0.03em] text-[var(--ink)] sm:text-[2.35rem]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`mt-2 h-6 w-6 shrink-0 text-[var(--ink)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isOpen ? (
                    <div className="pb-8 text-sm leading-7 text-[var(--copy)] sm:text-base">
                      <div className="rounded-[24px] bg-white px-5 py-5 shadow-[0_20px_45px_rgba(8,15,39,0.05)] sm:px-6">
                        {item.blocks.map((block, blockIndex) => (
                          <div
                            key={`${item.question}-${blockIndex}`}
                            className={blockIndex === 0 ? "" : "mt-5"}
                          >
                            {block.title ? (
                              <h3 className="mb-2 text-base font-semibold text-[var(--ink)] sm:text-lg">
                                {block.title}
                              </h3>
                            ) : null}
                            {block.text ? <p>{block.text}</p> : null}
                            {block.bullets ? (
                              <ul className="space-y-3">
                                {block.bullets.map((bullet) => (
                                  <li key={bullet} className="flex gap-3">
                                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-18 bg-[var(--surface-muted)] py-18 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {existingHelpCards.slice(1, 2).map((card) => (
              <article
                key={card.title}
                className="rounded-[28px] border border-[var(--border-soft)] bg-white p-8 shadow-[0_18px_45px_rgba(8,15,39,0.05)] lg:col-span-2"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand)]">
                  <CircleHelp className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-[family:var(--font-display)] text-3xl leading-tight tracking-[-0.03em] text-[var(--ink)]">
                  {card.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[var(--copy)]">{card.description}</p>
                <a
                  href={card.href}
                  className="mt-8 inline-flex items-center gap-2 rounded-md border border-[var(--brand)] px-5 py-3 text-sm font-semibold text-[var(--brand)] transition hover:bg-[var(--brand-soft)]"
                >
                  {card.action}
                  <SquareArrowOutUpRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>

          <h3 className="mt-16 font-[family:var(--font-display)] text-4xl leading-tight tracking-[-0.04em] text-[var(--ink)] sm:text-5xl">
            Discover other ways to save
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {saveWays.map((item, index) => {
              const Icon = saveWayIcons[index];

              return (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-[24px] border border-[var(--border-soft)] bg-white px-6 py-6 shadow-[0_12px_30px_rgba(8,15,39,0.04)]"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-[family:var(--font-display)] text-2xl leading-tight tracking-[-0.03em] text-[var(--ink)]">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-16">
            <h3 className="font-[family:var(--font-display)] text-4xl leading-tight tracking-[-0.04em] text-[var(--ink)] sm:text-5xl">
              Additional information
            </h3>
            <div className="mt-6 space-y-4 text-xs leading-6 text-[var(--copy)] sm:text-sm">
              {additionalInformation.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
