import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'devamtrivedi.112@gmail.com', href: 'mailto:devamtrivedi.112@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Rajkot, Gujarat, India', href: null },
    { icon: '💼', label: 'LinkedIn', value: 'LinkedIn', href: 'https://www.linkedin.com/in/devam-trivedi-9a926227a' },
    { icon: '🐙', label: 'GitHub', value: 'GitHub', href: 'https://github.com/devamt-014' },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind, a collaboration idea, or just want to say hi?
            My inbox is always open.
          </p>

          <div className="contact-grid">
            {/* Left: Info */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="info-header">
                <h3>Let's build something amazing together</h3>
                <p>
                  I'm currently looking for internship and full-time opportunities in AI/ML.
                  Whether you have a question or just want to connect, feel free to reach out!
                </p>
              </div>

              <div className="contact-cards">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={info.label}
                    className="contact-card glass-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ x: 6 }}
                  >
                    <span className="contact-card-icon">{info.icon}</span>
                    <div className="contact-card-text">
                      <span className="contact-card-label">{info.label}</span>
                      {info.href ? (
                        <a href={info.href} className="contact-card-value link">{info.value}</a>
                      ) : (
                        <span className="contact-card-value">{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Availability */}
              <div className="availability glass-card">
                <div className="avail-indicator">
                  <span className="avail-dot" />
                  <span>Available for opportunities</span>
                </div>
                <p>Open to full-time roles, internships, and freelance AI/ML projects.</p>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              className="contact-form-wrap glass-card"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className="form-title">Send a Message</h3>

              {status === 'success' ? (
                <motion.div
                  className="success-message"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <span className="success-icon">✅</span>
                  <h4>Message Sent!</h4>
                  <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus(null)} className="btn-reset">Send Another</button>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="youremail@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration / Job Opportunity"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="submit-btn"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0,245,255,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {status === 'sending' ? (
                      <span className="sending-text">Sending<span className="dots">...</span></span>
                    ) : (
                      <>Send Message <span>→</span></>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
