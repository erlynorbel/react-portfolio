import { useReveal } from "../hooks/useReveal";

export function Hero() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="home" ref={ref} className="hero">
      <div className="section-inner">
        <h1>
          Building reliable <span className="inline-accent">front-end</span>{" "}
          experiences with a focus on performance, accessibility & delightful
          details.
        </h1>
        <p className="hero-lead">
          I craft component systems, optimize delivery pipelines, and turn
          product ideas into resilient, maintainable interfaces.
        </p>
        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            gap: "0.85rem",
            flexWrap: "wrap",
          }}
        >
          <a className="btn" href="#projects">
            View Projects
          </a>
          <a
            className="btn"
            style={
              { "--btn-bg": "#334155", "--btn-bg-hover": "#475569" } as any
            }
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
