import { useEffect } from "react";
import Lenis from "lenis";

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      infinite: false,

      // Don't hijack scrolling inside overlays, sidebars, modals, etc.
      prevent: (node) => {
        return (
          node.closest("aside") ||
          node.closest("[data-lenis-prevent]") ||
          node.closest(".no-lenis")
        );
      },
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}

export default SmoothScroll;