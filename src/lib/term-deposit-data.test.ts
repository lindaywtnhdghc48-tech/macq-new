import { describe, expect, it } from "vitest";

import {
  additionalInformation,
  classicRatesOverMillion,
  classicRatesUnderMillion,
  digitalRatesOverMillion,
  digitalRatesUnderMillion,
  faqItems,
  footerPrimaryLinks,
  openAccountOptions,
  productCards,
  sectionNavItems,
  saveWays,
} from "./term-deposit-data";

describe("term deposit content", () => {
  it("keeps the sticky navigation aligned with the remaining section anchors", () => {
    const remainingTargets = ["#open-an-account", "#digital-banking", "#faqs"];
    const futureNavTargets = sectionNavItems.slice(2).map((item) => item.href);

    expect(futureNavTargets).toEqual(remainingTargets);
  });

  it("keeps the comparison cards wired to real sections", () => {
    expect(productCards).toHaveLength(2);
    expect(productCards[0].secondaryHref).toBe("#digital-rates");
    expect(productCards[1].secondaryHref).toBe("#classic-rates");
  });

  it("provides rate rows for both deposit amount states", () => {
    expect(digitalRatesUnderMillion).toHaveLength(4);
    expect(digitalRatesOverMillion).toHaveLength(4);
    expect(classicRatesUnderMillion.length).toBeGreaterThan(4);
    expect(classicRatesOverMillion.length).toBe(classicRatesUnderMillion.length);
  });

  it("includes the new open account, faq, and footer content", () => {
    expect(openAccountOptions).toHaveLength(2);
    expect(faqItems.length).toBeGreaterThanOrEqual(6);
    expect(saveWays).toHaveLength(2);
    expect(additionalInformation.length).toBeGreaterThan(2);
    expect(footerPrimaryLinks).toHaveLength(0);
  });
});
