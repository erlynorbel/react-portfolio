import { useEffect, useRef } from "react";

/**
 * Options for the useReveal hook.
 * - Extends IntersectionObserverInit for root / margin / threshold control.
 * - once: if true (default) unobserves after first reveal.
 * - className: initial class applied to element before reveal (default: 'fade-in').
 * - visibleClassName: class applied when element becomes visible (default: 'visible').
 */
export interface UseRevealOptions extends IntersectionObserverInit {
  /** Reveal only once (default: true) */
  once?: boolean;
  /** Pre-reveal class (default: 'fade-in') */
  className?: string;
  /** Class added when revealed (default: 'visible') */
  visibleClassName?: string;
  /** Disable observer entirely (e.g. for tests) */
  disabled?: boolean;
}

/**
 * useReveal
 * Adds a fade/slide reveal animation class the first time an element scrolls into view.
 * Provides light accessibility: respects prefers-reduced-motion by immediately revealing.
 *
 * Usage:
 *   const ref = useReveal<HTMLDivElement>();
 *   return <div ref={ref}>Content</div>
 */
export function useReveal<T extends HTMLElement>(
  options: UseRevealOptions = {}
) {
  const {
    once = true,
    className = "fade-in",
    visibleClassName = "visible",
    disabled = false,
    root = null,
    rootMargin = "0px 0px -40px 0px",
    threshold = 0.15,
  } = options;

  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If disabled or running in an environment without IntersectionObserver, reveal immediately.
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (
      disabled ||
      reduceMotion ||
      typeof IntersectionObserver === "undefined"
    ) {
      el.classList.add(visibleClassName);
      return;
    }

    // Ensure initial class is present for transition start state.
    if (className) el.classList.add(className);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClassName);
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { root, rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [
    once,
    className,
    visibleClassName,
    disabled,
    root,
    rootMargin,
    threshold,
  ]);

  return ref;
}

export default useReveal;
