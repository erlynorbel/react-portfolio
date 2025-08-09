import { FormEvent, useState } from "react";
import { useReveal } from "../hooks/useReveal";

export function Contact() {
  const ref = useReveal<HTMLElement>();
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 900); // mock
  }

  return (
    <section id="contact" ref={ref}>
      <div className="section-inner">
        <h2 className="section-heading">Contact</h2>
        <p
          style={{
            color: "var(--text-dim)",
            fontSize: ".9rem",
            marginBottom: "1.25rem",
          }}
        >
          Have a project, idea, or collaboration in mind? Drop a note.
        </p>
        <form className="contact-grid" onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" required aria-label="Name" />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            aria-label="Email"
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Message"
            required
            aria-label="Message"
          />
          <div style={{ display: "flex", gap: ".75rem", alignItems: "center" }}>
            <button className="btn" disabled={status !== "idle"}>
              {status === "idle" && "Send Message"}
              {status === "submitting" && "Sending..."}
              {status === "sent" && "Sent ✔"}
            </button>
            {status === "sent" && (
              <span style={{ fontSize: ".75rem", color: "var(--text-dim)" }}>
                Thanks! I will respond shortly.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
