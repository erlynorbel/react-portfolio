import { projects } from "../data/projects";
import { useRef, useEffect } from "react";
// import { useReveal } from "../hooks/useReveal";
// If the file is missing, either create it or update the path below to the correct location.
// Example: import { useReveal } from "../hooks/useReveal"; // <-- update path if needed

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleReveal = () => {
      el.classList.add("revealed");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleReveal();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}
