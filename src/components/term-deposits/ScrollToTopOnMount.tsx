"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTopOnMount() {
  const pathname = usePathname();
  const animationRef = useRef<number | null>(null);
  const endTimeRef = useRef<number>(0);

  useEffect(() => {
    if (pathname !== "/") return;

    // Disable browser scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    endTimeRef.current = Date.now() + 500; // Keep scrolling to top for 500ms

    const animate = () => {
      scrollToTop();
      if (Date.now() < endTimeRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [pathname]);

  return null;
}
