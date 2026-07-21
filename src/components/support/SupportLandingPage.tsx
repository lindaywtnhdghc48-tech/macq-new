"use client";

import { Header } from "@/components/term-deposits/Header";
import { heroImageUrl } from "@/lib/term-deposit-data";

type SupportLandingPageProps = {
  title: string;
  intro: string;
  supportingText: string;
};

export function SupportLandingPage({
  title,
  intro,
  supportingText,
}: SupportLandingPageProps) {
  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <Header />

      <section className="relative overflow-hidden bg-[#d7d1cb]">
        <div
          className="mx-auto min-h-[300px] max-w-[1440px] bg-cover bg-center bg-no-repeat sm:min-h-[360px] lg:min-h-[410px]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(18,16,16,0.16), rgba(18,16,16,0.03)), url(${heroImageUrl})`,
            backgroundPosition: "center center",
          }}
        >
          <div className="mx-auto flex h-full max-w-[1120px] items-start px-4 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <div className="mt-3 w-full max-w-[460px] rounded-tl-[26px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] bg-black px-6 py-7 text-white shadow-[0_24px_70px_rgba(0,0,0,0.26)] sm:px-8 sm:py-9">
              <h1 className="font-[family:var(--font-display)] text-4xl leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-[360px] text-sm leading-6 text-white/88 sm:text-base sm:leading-7">
                {intro}
              </p>
              <p className="mt-5 max-w-[390px] text-sm leading-6 text-white/88 sm:text-base sm:leading-7">
                {supportingText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-16 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-4 text-center sm:px-6">
          <h2 className="font-[family:var(--font-display)] text-4xl leading-tight tracking-[-0.04em] text-[var(--ink)] sm:text-6xl">
            How can we assist you?
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-base leading-8 text-[var(--copy)] sm:text-lg">
            Select from the options below to find the right support.
          </p>
          <div className="mx-auto mt-10 min-h-[180px] max-w-[980px] rounded-[30px] border border-[var(--border-soft)] bg-white/55" />
        </div>
      </section>
    </div>
  );
}
