import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { services, achievements, education } from '../constants';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about building AI systems that matter.
          </p>

          {/* Main grid */}
          <div className="about-grid">
            {/* Bio */}
            <motion.div
              className="about-bio glass-card"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bio-avatar">
                <div className="avatar-ring" />
                <div className="avatar-inner">
                  <span className="avatar-emoji">🤖</span>
                </div>
                <div className="avatar-status">
                  <span className="status-dot" />
                  <span>Open to Work</span>
                </div>
              </div>

              <div className="bio-content">
                <h3>Devam Trivedi</h3>
                <p className="bio-tagline gradient-text">BTech CE (AI Specialization) @ Marwadi University</p>
                <p className="bio-text">
                  I'm a BTech student with a deep passion for Artificial Intelligence and its
                  applications. From training ML and DL models to deploying web apps,
                  I love turning complex problems into elegant solutions.
                </p>
                <p className="bio-text">
                  When I'm not coding, you'll find me contributing to open source, reading AI research papers,
                  or mentoring junior developers at my university's AI club.
                </p>
                <div className="bio-details">
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span>Rajkot, Gujarat, India</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📧</span>
                    <span>devamtrivedi.112@gmail.com</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">🎓</span>
                    <span>CGPA: 8.00/10.0</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📅</span>
                    <span>Graduating: April 2027</span>
                  </div>
                </div>
                <a href="#" className="download-cv">
                  Download CV <span>↓</span>
                </a>
              </div>
            </motion.div>

            {/* Right column: services + education */}
            <div className="about-right">
              {/* Services */}
              <div className="services-grid">
                {services.map((service, idx) => (
                  <motion.div
                    key={service.title}
                    className="service-card glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,245,255,0.1)' }}
                  >
                    <span className="service-icon">{service.icon}</span>
                    <h4>{service.title}</h4>
                  </motion.div>
                ))}
              </div>

              {/* Education */}
              <motion.div
                className="education-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="subsection-title">Education</h3>
                {education.map((edu, idx) => (
                  <div key={idx} className="edu-item">
                    <div className="edu-icon">🎓</div>
                    <div className="edu-content">
                      <h4>{edu.degree}</h4>
                      <p className="edu-institution">{edu.institution}</p>
                      <div className="edu-meta">
                        <span>{edu.duration}</span>
                        <span className="edu-gpa">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Achievements */}
              <motion.div
                className="achievements-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h3 className="subsection-title">Achievements</h3>
                <ul className="achievements-list">
                  {achievements.map((ach, idx) => (
                    <li key={idx} className="achievement-item">
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
