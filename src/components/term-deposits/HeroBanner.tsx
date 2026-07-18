import { ChevronRight } from "lucide-react";

import { heroImageUrl } from "@/lib/term-deposit-data";

export function HeroBanner() {
  return (
    <section className="border-b border-[var(--border-soft)] bg-[var(--surface)]">
      <div className="mx-auto max-w-[1360px] px-4 pt-5 pb-6 sm:px-6">
        <a
          href="#"
          className="inline-flex items-center gap-1 text-xs font-medium text-[var(--copy)] underline-offset-4 hover:underline"
        >
          Everyday banking
          <ChevronRight className="h-3 w-3" />
          <span>Term deposits</span>
        </a>
      </div>

      <div className="mx-auto max-w-[1500px] px-0 pb-10 sm:px-4 lg:px-6">
        <div className="relative overflow-hidden bg-[#d7d1cb] shadow-[0_24px_70px_rgba(8,15,39,0.15)]">
          <div
            className="min-h-[520px] bg-cover bg-center sm:min-h-[600px] lg:min-h-[620px]"
            style={{ backgroundImage: `linear-gradient(90deg, rgba(18,16,16,0.26), rgba(18,16,16,0.08)), url(${heroImageUrl})` }}
          />

          <div className="relative mx-auto -mt-[220px] max-w-[1360px] px-4 pb-6 sm:-mt-[250px] sm:px-6 lg:absolute lg:inset-x-0 lg:top-[86px] lg:mt-0">
            <div className="max-w-[520px] bg-black px-7 py-8 text-white shadow-[0_24px_60px_rgba(0,0,0,0.4)] sm:px-10 sm:py-10">
              <h1 className="font-[family:var(--font-display)] text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl">
                Term deposits
              </h1>
              <p className="mt-5 max-w-md text-lg leading-8 text-white/88 sm:text-[1.35rem]">
                Choose from a range of terms and earn a fixed rate.
              </p>

              <div className="mt-8">
                <p className="text-sm uppercase tracking-[0.24em] text-white/52">Featured rates</p>
                <div className="mt-4 grid gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
                  <div>
                    <div className="flex items-start gap-2">
                      <span className="text-[3.6rem] leading-none sm:text-[4.2rem]">5.00</span>
                      <span className="pt-2 text-xl">% p.a.</span>
                    </div>
                    <p className="mt-2 text-sm text-white/72">for 3 months</p>
                  </div>
                  <div className="hidden h-16 w-px bg-white/24 sm:block" />
                  <div>
                    <div className="flex items-start gap-2">
                      <span className="text-[3.6rem] leading-none sm:text-[4.2rem]">5.20</span>
                      <span className="pt-2 text-xl">% p.a.</span>
                    </div>
                    <p className="mt-2 text-sm text-white/72">for 12 months</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-white/70">
                  On balances $1m and below. Interest paid at maturity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
