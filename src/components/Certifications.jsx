import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { certifications } from '../constants';
import './Certifications.css';

const gradientMap = {
  'from-violet-600 to-purple-400':  'linear-gradient(135deg, #7c3aed, #a78bfa)',
  'from-orange-500 to-yellow-400':  'linear-gradient(135deg, #f97316, #facc15)',
  'from-cyan-500 to-blue-400':      'linear-gradient(135deg, #06b6d4, #60a5fa)',
  'from-blue-600 to-cyan-400':      'linear-gradient(135deg, #2563eb, #22d3ee)',
  'from-pink-600 to-rose-400':      'linear-gradient(135deg, #db2777, #fb7185)',
};

/* ── Single card ── */
const CertCard = ({ cert, index, onOpen, isInView }) => {
  const barGradient = gradientMap[cert.color] || 'linear-gradient(135deg, #7c3aed, #06b6d4)';

  return (
    <motion.div
      className="cert-card glass-card"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      exit={{ opacity: 0, scale: 0.92, y: -10 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(0,0,0,0.35)' }}
      layout
    >
      <div className="cert-bar" style={{ background: barGradient }} />
      <span className="cert-verified">✓ Verified</span>
      <div className="cert-icon">{cert.icon}</div>
      <h3 className="cert-title">{cert.title}</h3>
      <p className="cert-issuer">{cert.issuer}</p>
      <div className="cert-meta">
        <span className="cert-date">{cert.date}</span>
        <span className="cert-id">ID: {cert.credentialId}</span>
      </div>
      <motion.button
        className="cert-open-btn"
        onClick={() => onOpen(cert)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        style={{ '--bar': barGradient }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
        View Certificate
      </motion.button>
    </motion.div>
  );
};

/* ── Inline PDF viewer ── */
const CertViewer = ({ cert, onClose }) => {
  const pdfSrc = `/certificates/${cert.pdfFile}`;
  const barGradient = gradientMap[cert.color] || 'linear-gradient(135deg, #7c3aed, #06b6d4)';
  const [pdfError, setPdfError] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <motion.div
      className="cert-viewer"
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.96 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Viewer header */}
      <div className="cert-viewer-header">
        <div className="cert-viewer-meta">
          <div className="cert-viewer-bar" style={{ background: barGradient }} />
          <span className="cert-viewer-icon">{cert.icon}</span>
          <div>
            <h3 className="cert-viewer-title">{cert.title}</h3>
            <p className="cert-viewer-issuer">{cert.issuer} &nbsp;·&nbsp; {cert.date}</p>
          </div>
        </div>
        <motion.button
          className="cert-close-btn"
          onClick={onClose}
          whileHover={{ scale: 1.08, rotate: 90 }}
          whileTap={{ scale: 0.93 }}
          title="Close (Esc)"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </motion.button>
      </div>

      {/* PDF embed */}
      <div className="cert-pdf-wrap">
        {pdfError ? (
          <div className="cert-pdf-placeholder">
            <span>📄</span>
            <p>PDF not found</p>
            <small>Upload <strong>{cert.pdfFile}</strong> to <code>/public/certificates/</code></small>
          </div>
        ) : (
          <iframe
            src={pdfSrc}
            title={cert.title}
            className="cert-pdf-frame"
            onError={() => setPdfError(true)}
          />
        )}
      </div>

      <div className="cert-viewer-footer">
        <button className="cert-back-btn" onClick={onClose}>
          ← Back to Certifications
        </button>
        <span className="cert-viewer-id">ID: {cert.credentialId}</span>
      </div>
    </motion.div>
  );
};

/* ── Main section ── */
const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Verified credentials from leading platforms in AI, Cloud &amp; Development.
          </p>

          <AnimatePresence mode="wait">
            {activeCert ? (
              /* Viewer mode */
              <CertViewer
                key="viewer"
                cert={activeCert}
                onClose={() => setActiveCert(null)}
              />
            ) : (
              /* Grid mode */
              <motion.div
                key="grid"
                className="cert-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {certifications.map((cert, i) => (
                  <CertCard
                    key={cert.credentialId}
                    cert={cert}
                    index={i}
                    onOpen={setActiveCert}
                    isInView={isInView}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
