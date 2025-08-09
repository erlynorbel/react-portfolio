import { useReveal } from "../hooks/useReveal";

const skills = [
  "TypeScript",
  "React",
  "Vite",
  "Accessibility",
  "Design Systems",
  "Node",
  "Testing",
  "Performance",
  "CSS Architecture",
  "State Machines",
  "GraphQL",
  "REST",
];

export function Skills() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="skills" ref={ref}>
      <div className="section-inner">
        <h2 className="section-heading">Skills</h2>
        <div className="skills-cloud">
          {skills.map((s) => (
            <span key={s} className="skill">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
