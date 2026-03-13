import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import BrainCanvas from './BrainCanvas';
import './Hero.css';

const Hero = () => {
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollIndicatorRef.current) {
        scrollIndicatorRef.current.style.opacity = window.scrollY > 100 ? '0' : '1';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="hero">
      {/* 3D Background */}
      <div className="hero-canvas">
        <BrainCanvas />
      </div>

      {/* Gradient overlays */}
      <div className="hero-gradient-left" />
      <div className="hero-gradient-bottom" />

      {/* Grid overlay */}
      <div className="hero-grid" />

      <div className="container hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-dot" />
            <span>Available for opportunities</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="hero-greeting">Hi, I'm</span>
            <br />
            <span className="hero-name">Devam Trivedi</span>
            <br />
            <span className="hero-role">
              <TypeAnimation
                sequence={[
                  'AI/ML Engineer 🤖',
                  2000,
                  'Deep Learning Enthusiast 🧠',
                  2000,
                  'Web Developer 💻',
                  2000,
                  'Research & Innovation 🔬',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="typed-text"
              />
            </span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            BTech Computer Engineering student at <strong>Marwadi University</strong> specializing in AI/ML.
            I build intelligent systems that solve real-world problems using cutting-edge machine learning,
            deep learning, and web development.
          </motion.p>

          <motion.div className="hero-stats" variants={itemVariants}>
            {[
              { value: '5+', label: 'Projects Built' },
              { value: '1', label: 'Internships' },
              { value: '1.5K+', label: 'GitHub Commits' },
              { value: '89%', label: 'Avg Model Acc.' },
            ].map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div className="hero-cta" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,245,255,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <span className="btn-arrow">→</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            {[
              { name: 'GitHub', url: 'https://github.com', icon: '⌥' },
              { name: 'LinkedIn', url: 'https://linkedin.com', icon: '◈' },
              { name: 'Twitter', url: 'https://twitter.com', icon: '◉' },
              { name: 'HuggingFace', url: 'https://huggingface.co', icon: '◎' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                title={social.name}
              >
                <span>{social.name}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side floating card */}
        <motion.div
          className="hero-card-area"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="floating-card glass-card">
            <div className="card-header">
              <div className="card-dots">
                <span style={{ background: '#ff5f56' }} />
                <span style={{ background: '#ffbd2e' }} />
                <span style={{ background: '#27c93f' }} />
              </div>
              <span className="card-title">aryan@ai-lab:~</span>
            </div>
            <div className="card-body">
              <div className="code-line"><span className="code-prompt">$</span> <span className="code-text">python train.py --model GPT</span></div>
              <div className="code-line code-output"><span className="code-green">✓</span> Model loaded: 7B params</div>
              <div className="code-line code-output"><span className="code-green">✓</span> Training on 10k samples</div>
              <div className="code-line code-output"><span className="code-cyan">▶</span> Epoch 50/50 — Loss: 0.021</div>
              <div className="code-line code-output"><span className="code-purple">★</span> Accuracy: <span className="code-yellow">94.8%</span></div>
              <div className="code-line"><span className="code-prompt">$</span> <span className="code-text code-blink">_</span></div>
            </div>
          </div>

          <div className="floating-badge badge-pytorch">
            <span>PyTorch</span>
          </div>
          <div className="floating-badge badge-tf">
            <span>TensorFlow</span>
          </div>
          <div className="floating-badge badge-llm">
            <span>LLM</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" ref={scrollIndicatorRef}>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
