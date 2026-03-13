import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My journey building real-world AI products and collaborating with top teams.
          </p>

          {/* ── Coming Soon card ── */}
          <motion.div
            className="exp-coming-soon"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Animated ring with icon inside */}
            <div className="exp-cs-ring" aria-hidden>
              <div className="exp-cs-ring-inner" />
              <div className="exp-cs-icon">⚡</div>
            </div>

            {/* Text */}
            <h3 className="exp-cs-heading">Coming Soon</h3>
            <p className="exp-cs-body">
              Real-world experience, internships, and collaborations are being
              prepared and will be showcased here very soon. Stay tuned!
            </p>

            {/* Badge row */}
            <div className="exp-cs-badges">
              <span className="exp-cs-badge">🤖 AI / ML</span>
              <span className="exp-cs-badge">💻 Web Dev</span>
              <span className="exp-cs-badge">🔬 Research</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

