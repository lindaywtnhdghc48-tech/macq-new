"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTopOnMount() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    // Disable browser scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    // Check if a section scroll was requested (e.g. from another page's nav button)
    const scrollTarget = sessionStorage.getItem("scrollTarget");
    if (scrollTarget) {
      sessionStorage.removeItem("scrollTarget");
      // Wait for the page to settle then scroll to the target section
      const tryScroll = (attemptsLeft: number) => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          const offset = window.innerWidth < 640 ? 150 : window.innerWidth < 1024 ? 135 : 100;
          const top = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        } else if (attemptsLeft > 0) {
          setTimeout(() => tryScroll(attemptsLeft - 1), 100);
        }
      };
      setTimeout(() => tryScroll(5), 100);
      return;
    }

    scrollToTop();
    setTimeout(scrollToTop, 0);
    setTimeout(scrollToTop, 50);
    setTimeout(scrollToTop, 100);
    setTimeout(scrollToTop, 200);
    setTimeout(scrollToTop, 500);
  }, [pathname]);

  return null;
}
