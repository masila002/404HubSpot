import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Scoped scroll-reveal: fades/slides [data-reveal] once into view.
// Respects prefers-reduced-motion, cleans up on unmount (gsap.context revert).
export function useReveal(rootRef, options = {}) {
  let ctx = null;
  const reduceQuery =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : { matches: true };

  onMounted(() => {
    if (!rootRef.value || reduceQuery.matches) return;
    ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((el, i) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 26 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: Math.min((i % 4) * 0.06, 0.24),
            overwrite: "auto",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
            ...options,
          },
        );
      });
      // Gentle hero entrance for [data-hero] children
      const heroKids = gsap.utils.toArray("[data-hero] > *");
      if (heroKids.length) {
        gsap.fromTo(
          heroKids,
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08 },
        );
      }
    }, rootRef.value);
  });

  onUnmounted(() => {
    ctx?.revert();
    ScrollTrigger.getAll().forEach((t) => {
      if (t.trigger && rootRef.value?.contains(t.trigger)) t.kill();
    });
  });
}

export { gsap, ScrollTrigger };
