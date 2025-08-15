import React from "react";
import '../components/Footer.css';

const Footer = () => (
  <footer className="footer bg-light border-top py-3">
    <div className="container text-center">
      <p className="mb-2">&copy; 2025 Lebron Paulmark D. Dimayacyac. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/lebron-dimayacyac-286ba62a1/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/erlynorbel/" target="_blank" rel="noopener noreferrer" title="GitHub">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://x.com/rlvpldi" target="_blank" rel="noopener noreferrer" title="Twitter">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://www.instagram.com/rlvpldi" target="_blank" rel="noopener noreferrer" title="Instagram">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
