"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function NavigationScrollReset() {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);

  useEffect(() => {
    // Set manual scroll restoration globally once
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Only scroll to top when navigating TO "/" from another page (back button)
    if (pathname === "/" && prevPathname.current !== null && prevPathname.current !== "/") {
      // Use multiple timeouts to ensure this runs after Next.js finishes restoring scroll
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0 });
      }, 0);
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0 });
      }, 50);
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0 });
      }, 100);
    }
    prevPathname.current = pathname;
  }, [pathname]);

  return null;
}
