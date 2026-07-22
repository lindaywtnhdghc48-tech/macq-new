"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTopOnMount() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    // Every time this page mounts or we navigate back to "/", go to top
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return null;
}
