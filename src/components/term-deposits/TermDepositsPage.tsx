import { DigitalBankingSection } from "./DigitalBankingSection";
import { FaqSection } from "./FaqSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroBanner } from "./HeroBanner";
import { OpenAccountSection } from "./OpenAccountSection";
import { ProductComparison } from "./ProductComparison";
import { RatesSection } from "./RatesSection";
import { ScrollToTopButton } from "./ScrollToTopButton";
import { StickySectionNav } from "./StickySectionNav";

export function TermDepositsPage() {
  return (
    <div className="bg-[var(--surface)] text-[var(--ink)]">
      <Header />
      <HeroBanner />
      <StickySectionNav />
      <ProductComparison />
      <RatesSection />
      <OpenAccountSection />
      <DigitalBankingSection />
      <FaqSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
