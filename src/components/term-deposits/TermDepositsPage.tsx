import { FaqSection } from "./FaqSection";
import { Footer } from "./Footer";
import { Header } from "@/components/term-deposits/Header";
import { HeroBanner } from "./HeroBanner";
import { OpenAccountSection } from "./OpenAccountSection";
import { ProductComparison } from "./ProductComparison";
import { RatesSection } from "./RatesSection";
import { ScrollToTopButton } from "./ScrollToTopButton";
import { ScrollToTopOnMount } from "./ScrollToTopOnMount";
import { StickySectionNav } from "./StickySectionNav";

export function TermDepositsPage() {
  return (
    <div id="top" className="bg-[var(--surface)] text-[var(--ink)]">
      <ScrollToTopOnMount />
      <Header />
      <HeroBanner />
      <div className="relative z-30 mx-auto -mt-1 sm:-mt-2 lg:-mt-3">
        <StickySectionNav />
      </div>
      <ProductComparison />
      <RatesSection />
      <OpenAccountSection />
      <FaqSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
