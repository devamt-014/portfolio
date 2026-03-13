import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">Devam </span>
              <span className="logo-dot">.</span>
              <span className="logo-tag">AI</span>
              <span className="logo-bracket">/&gt;</span>
            </div>
            <p>Building intelligent systems<br />that shape the future.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-connect">
            <h4>Connect</h4>
            <div className="footer-socials">
              {[
                { name: 'GitHub', url: 'https://github.com/devamt-014' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/devam-trivedi-9a926227a/' },
              ].map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider" />
          <div className="footer-bottom-content">
            <p>© {year} Devam Trivedi. Built with React + Three.js + ❤️</p>
            <p className="footer-tagline">Designed & Developed with AI Precision</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
