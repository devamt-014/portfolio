import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../constants';
import './Skills.css';

const SkillBar = ({ name, level, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const techStack = [
    { name: 'Python', color: '#3776ab' },
    { name: 'TensorFlow', color: '#ff6f00' },
    { name: 'PyTorch', color: '#ee4c2c' },
    { name: 'React', color: '#61dafb' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Docker', color: '#2496ed' },
    { name: 'AWS', color: '#ff9900' },
    { name: 'Git', color: '#f05032' },
    { name: 'MongoDB', color: '#47a248' },
    { name: 'Scikit', color: '#f7931e' },
    { name: 'FastAPI', color: '#009688' },
    { name: 'Linux', color: '#fcc624' },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            My technical toolkit — from AI research to production-ready web applications.
          </p>

          {/* Tech Stack Pills */}
          <motion.div
            className="tech-stack"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="tech-pill"
                style={{ '--tech-color': tech.color }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * i + 0.3 }}
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <span className="tech-dot" />
                {tech.name}
              </motion.div>
            ))}
          </motion.div>

          {/* Skill categories with bars */}
          <div className="skills-grid">
            {skills.map((category, catIdx) => (
              <motion.div
                key={category.category}
                className="skills-category glass-card"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + catIdx * 0.15 }}
              >
                <h3 className="category-title">{category.category}</h3>
                <div className="skill-bars">
                  {category.items.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={0.05 * i + catIdx * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
