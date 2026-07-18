import { ArrowRight } from "lucide-react";

import { futureSections } from "@/lib/term-deposit-data";

export function FutureSections() {
  return (
    <section className="bg-[var(--surface)] pb-24">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {futureSections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-36 rounded-[30px] border border-dashed border-[var(--border-strong)] bg-white p-8 shadow-[0_20px_45px_rgba(8,15,39,0.06)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand)]">
                {section.eyebrow}
              </p>
              <h2 className="mt-5 font-[family:var(--font-display)] text-3xl leading-tight tracking-[-0.03em] text-[var(--ink)]">
                {section.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--copy)]">{section.description}</p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] transition hover:gap-3"
              >
                Section ready for your next screenshot
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
