"use client";

import { useEffect } from "react";

export function ScrollToTopOnMount() {
  useEffect(() => {
    // Disable browser scroll restoration so back navigation always lands at top
    if (typeof window !== "undefined" && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0 });
  }, []);

  return null;
}
