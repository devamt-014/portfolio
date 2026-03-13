import React, { useState, useEffect, useRef, useCallback } from 'react';
import './ComingSoon.css';

/* ---------- helpers ---------- */
const LAUNCH_DATE = new Date('2026-06-01T00:00:00');

function getTimeLeft() {
  const diff = LAUNCH_DATE - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000)  /    60_000),
    seconds: Math.floor((diff %    60_000)  /     1_000),
  };
}

function pad(n) { return String(n).padStart(2, '0'); }

/* ---------- Particles ---------- */
const PARTICLE_COUNT = 22;

function Particles() {
  const particles = useRef(
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 18}s`,
      duration: `${12 + Math.random() * 12}s`,
      opacity: 0.4 + Math.random() * 0.5,
    }))
  ).current;

  return (
    <div className="cs-particles" aria-hidden>
      {particles.map(p => (
        <div
          key={p.id}
          className="cs-particle"
          style={{
            left: p.left,
            bottom: '-6px',
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Main ---------- */
export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [email, setEmail]       = useState('');
  const [submitted, setSubmitted] = useState(false);

  /* Countdown tick */
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const handleNotify = useCallback((e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  }, [email]);

  return (
    <div className="cs-root">
      {/* ── Background ── */}
      <div className="cs-bg" aria-hidden>
        <div className="cs-orb cs-orb-1" />
        <div className="cs-orb cs-orb-2" />
        <div className="cs-orb cs-orb-3" />
        <div className="cs-grid" />
      </div>
      <Particles />

      {/* ── Card ── */}
      <div className="cs-card">

        {/* Live badge */}
        <div className="cs-badge">
          <span className="cs-badge-dot" />
          Something epic is brewing
        </div>

        {/* Heading */}
        <h1 className="cs-title">
          Coming&nbsp;Soon
        </h1>

        <div className="cs-divider" />

        {/* Subtitle */}
        <p className="cs-subtitle">
          I'm crafting an experience worth waiting for — an AI-powered portfolio
          that pushes the boundaries of what's possible on the web.
          Stay tuned&nbsp;🚀
        </p>

        {/* ── Countdown ── */}
        <div className="cs-countdown" aria-label="Countdown to launch">
          {[
            { val: timeLeft.days,    label: 'Days'    },
            null,
            { val: timeLeft.hours,   label: 'Hours'   },
            null,
            { val: timeLeft.minutes, label: 'Minutes' },
            null,
            { val: timeLeft.seconds, label: 'Seconds' },
          ].map((item, i) =>
            item === null ? (
              <span key={`sep-${i}`} className="cs-time-sep">:</span>
            ) : (
              <div key={item.label} className="cs-time-block">
                <div className="cs-time-num">
                  <span>{pad(item.val)}</span>
                </div>
                <span className="cs-time-label">{item.label}</span>
              </div>
            )
          )}
        </div>

        {/* ── Notify form ── */}
        {submitted ? (
          <p className="cs-success">
            ✅ You're on the list! I'll notify you at launch.
          </p>
        ) : (
          <form className="cs-notify-form" onSubmit={handleNotify}>
            <input
              className="cs-notify-input"
              type="email"
              placeholder="Enter your email…"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button className="cs-notify-btn" type="submit">
              Notify Me
            </button>
          </form>
        )}

        {/* ── Social links ── */}
        <div className="cs-socials" aria-label="Social links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cs-social-link"
            aria-label="GitHub"
            title="GitHub"
          >
            {/* GitHub SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.68.82.57A12 12 0 0 0 12 .3z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cs-social-link"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            {/* LinkedIn SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"/>
            </svg>
          </a>
          <a
            href="mailto:hello@example.com"
            className="cs-social-link"
            aria-label="Email"
            title="Email"
          >
            {/* Mail SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <polyline points="2,4 12,13 22,4"/>
            </svg>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cs-social-link"
            aria-label="Twitter / X"
            title="Twitter / X"
          >
            {/* X / Twitter SVG */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}
