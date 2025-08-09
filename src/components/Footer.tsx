export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-inner">
        <div>&copy; {year} Your Name. All rights reserved.</div>
        <div
          style={{ display: "flex", gap: ".85rem", justifyContent: "center" }}
        >
          <a href="https://github.com/placeholder" aria-label="GitHub">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/placeholder"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a href="#home" aria-label="Back to top">
            Top
          </a>
        </div>
      </div>
    </footer>
  );
}
