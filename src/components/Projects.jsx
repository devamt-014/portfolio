import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../constants';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="project-card glass-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Gradient top bar */}
      <div className={`card-gradient-bar bg-gradient-to-r ${project.gradient}`} />

      {/* Card header */}
      <div className="project-card-header">
        <div className="project-icon">
          <span>⚡</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/devamt-014?tab=repositories" className="icon-btn" title="GitHub" target="_blank" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="project-body">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>
      </div>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>

      {/* Hover glow */}
      <motion.div
        className="card-glow"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world AI applications built from research to deployment.
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>

          <motion.div
            className="projects-footer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <a href="https://github.com/devamt-014?tab=repositories" target="_blank" rel="noreferrer" className="btn-secondary">
              View All on GitHub →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
