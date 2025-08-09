import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="about" ref={ref}>
      <div className="section-inner split">
        <div>
          <h2 className="section-heading">About</h2>
          <p>
            I am a front-end engineer focused on crafting cohesive design
            systems and performant interfaces. My work blends strong TypeScript
            discipline, component architecture, and iterative UX refinement.
          </p>
          <p style={{ marginTop: "1rem" }}>
            I value maintainable abstractions, progressive enhancement, and
            tooling that shortens feedback loops. When not coding, I explore
            interface motion patterns & visual systems.
          </p>
        </div>
        <div className="card" style={{ alignSelf: "start" }}>
          <h3>Highlights</h3>
          <ul
            style={{
              listStyle: "none",
              display: "grid",
              gap: ".55rem",
              fontSize: ".85rem",
              color: "var(--text-dim)",
            }}
          >
            <li>Design System leadership & token strategy</li>
            <li>Performance budgeting & Core Web Vitals</li>
            <li>Accessibility-first development</li>
            <li>Incremental migration to TypeScript</li>
            <li>Developer experience & build optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
