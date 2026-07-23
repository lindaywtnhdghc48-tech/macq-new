"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function NavigationScrollReset() {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  useEffect(() => {
    // Set manual scroll restoration globally once
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Listen for popstate events (back/forward button)
    const handlePopState = () => {
      if (window.location.pathname === "/") {
        scrollToTop();
        setTimeout(scrollToTop, 50);
        setTimeout(scrollToTop, 100);
        setTimeout(scrollToTop, 200);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    // Only scroll to top when navigating TO "/" from another page (back button)
    if (pathname === "/" && prevPathname.current !== null && prevPathname.current !== "/") {
      scrollToTop();
      setTimeout(scrollToTop, 50);
      setTimeout(scrollToTop, 100);
      setTimeout(scrollToTop, 200);
    }
    prevPathname.current = pathname;
  }, [pathname]);

  return null;
}
