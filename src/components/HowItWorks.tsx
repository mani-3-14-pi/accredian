import React, { useRef, useLayoutEffect, useState } from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    num: '01',
    label: 'DISCOVER',
    title: 'Discovery Workshop',
    description:
      'Identify specific skill gaps, technology targets, and organizational business goals. Every successful strategy starts with understanding your unique needs.',
    nicheLabel: 'Your Skill Gap',
    nicheValue: 'Identified & Mapped',
    metrics: [
      { icon: '🎯', label: 'Gap Analysis', value: 'Completed' },
      { icon: '🏢', label: 'Org Targets', value: 'Defined' },
      { icon: '👥', label: 'Team Size', value: 'Scalable' },
      { icon: '📋', label: 'Roadmap', value: 'Ready' },
    ],
    progressLabel: 'Assessment Terms: Transparent & Data-Driven',
    accent: '#8EC5FF',
    accent2: '#7B61FF',
  },
  {
    num: '02',
    label: 'CUSTOMIZE',
    title: 'Curriculum Customization',
    description:
      'We craft tailored learning paths, live lab sandboxes, and capstones to match workshop outcomes and consistently scale your team\'s capabilities.',
    nicheLabel: 'Your Learning Path',
    nicheValue: 'Tailored & Optimized',
    metrics: [
      { icon: '🧪', label: 'Lab Sandboxes', value: 'Live & Ready' },
      { icon: '🎓', label: 'Capstone Projects', value: 'Assigned' },
      { icon: '⚡', label: 'Delivery Speed', value: 'Accelerated' },
      { icon: '📈', label: 'Skill Uplift', value: 'Measurable' },
    ],
    progressLabel: 'Curriculum Terms: Outcome-Driven & Verified',
    accent: '#7B61FF',
    accent2: '#2F80FF',
  },
  {
    num: '03',
    label: 'DELIVER',
    title: 'Delivery & Mentorship',
    description:
      'Execute training with live executive sessions, expert mentors, and dedicated office hours to ensure every learner reaches their full potential.',
    nicheLabel: 'Your Training Mode',
    nicheValue: 'Live & Interactive',
    metrics: [
      { icon: '👨‍🏫', label: 'Expert Mentors', value: 'Assigned' },
      { icon: '🕐', label: 'Office Hours', value: 'Daily' },
      { icon: '💬', label: 'Sessions', value: 'Live Exec' },
      { icon: '✅', label: 'Completion', value: 'Tracked' },
    ],
    progressLabel: 'Mentorship Terms: Hands-On & Immersive',
    accent: '#2F80FF',
    accent2: '#45f3ff',
  },
  {
    num: '04',
    label: 'CERTIFY',
    title: 'Analytics & Certification',
    description:
      'Using real-time data analytics, track ROI, skill acquisition metrics, and award verified completion certificates that hold real-world value.',
    nicheLabel: 'Your Achievement',
    nicheValue: 'Verified & Certified',
    metrics: [
      { icon: '📊', label: 'ROI Tracking', value: 'Real-Time' },
      { icon: '🏆', label: 'Certificate', value: 'Verified' },
      { icon: '🌐', label: 'Recognition', value: 'Industry-Wide' },
      { icon: '🚀', label: 'Career Impact', value: 'Massive Upside' },
    ],
    progressLabel: 'Certification Terms: Globally Recognized',
    accent: '#45f3ff',
    accent2: '#8EC5FF',
  },
];

export const HowItWorks: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardHeights, setCardHeights] = useState<number[]>([]);
  const GAP = 48; // must match .hiw-right gap

  useLayoutEffect(() => {
    const measure = () => {
      const heights = cardRefs.current.map((el) => el?.getBoundingClientRect().height ?? 0);
      setCardHeights(heights);
    };
    measure();
    const observer = new ResizeObserver(measure);
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="snap-section hiw-section">
      <div className="hiw-outer">

        {/* ── LEFT: Sticky "HOW WE WORK" card ── */}
        <div className="hiw-left">
          <div className="hiw-sticky-card">
            <div className="hiw-sticky-glow" />
            <div className="hiw-sticky-inner">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="hiw-sticky-heading">
                  HOW<br />WE<br />WORK
                </h2>
                <div className="hiw-sticky-rule" />
                <p className="hiw-sticky-sub">
                  Every great partnership starts with understanding your vision.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── CENTER: Vertical line + bullseye per step ── */}
        <div className="hiw-center">
          <div className="hiw-center-line" />
          {steps.map((step, idx) => {
            // Calculate top offset: sum of heights + gaps before this card, plus half of this card's height
            const topOffset = cardHeights
              .slice(0, idx)
              .reduce((acc, h) => acc + h + GAP, 0)
              + (cardHeights[idx] ?? 200) / 2
              - 28; // subtract half bullseye height (56/2)
            return (
              <motion.div
                key={step.num}
                className="hiw-step-marker"
                style={{ top: topOffset }}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {/* Bullseye rings */}
                <div
                  className="hiw-bullseye"
                  style={{ '--accent': step.accent } as React.CSSProperties}
                >
                  <div className="hiw-ring hiw-ring-3" style={{ borderColor: step.accent }} />
                  <div className="hiw-ring hiw-ring-2" style={{ borderColor: step.accent }} />
                  <div className="hiw-ring hiw-ring-1" style={{ borderColor: step.accent }} />
                  <div className="hiw-ring-dot"    style={{ background: step.accent, boxShadow: `0 0 8px ${step.accent}, 0 0 16px ${step.accent}80` }} />
                  <div className="hiw-ring-pulse"  style={{ borderColor: step.accent }} />
                </div>
                {/* Step number below bullseye */}
                <span className="hiw-step-num" style={{ color: step.accent }}>
                  {step.num}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* ── RIGHT: Scrollable step cards ── */}
        <div className="hiw-right">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className="hiw-card"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Pill label */}
              <span
                className="hiw-pill"
                style={{ color: step.accent, borderColor: `${step.accent}40`, background: `${step.accent}12` }}
              >
                {step.num} / {step.label}
              </span>

              {/* Title */}
              <h3 className="hiw-card-title">{step.title}</h3>

              {/* Description */}
              <p className="hiw-card-desc">{step.description}</p>

              {/* Dashboard mockup */}
              <div className="hiw-mock">
                {/* Mock header */}
                <div className="hiw-mock-header">
                  <div className="hiw-mock-dot" style={{ background: step.accent, boxShadow: `0 0 6px ${step.accent}` }} />
                  <span className="hiw-mock-report">
                    {step.label.charAt(0) + step.label.slice(1).toLowerCase()} Report
                  </span>
                  <span className="hiw-mock-active">ACTIVE</span>
                </div>

                {/* Niche label */}
                <div className="hiw-mock-niche-label">{step.nicheLabel}</div>
                <div className="hiw-mock-niche-value">{step.nicheValue}</div>

                {/* 2×2 Metrics */}
                <div className="hiw-mock-grid">
                  {step.metrics.map((m) => (
                    <div key={m.label} className="hiw-mock-metric">
                      <div className="hiw-mock-metric-top">
                        <span className="hiw-mock-metric-icon">{m.icon}</span>
                        <span className="hiw-mock-metric-label">{m.label}</span>
                      </div>
                      <div className="hiw-mock-metric-value">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="hiw-mock-progress-track">
                  <div
                    className="hiw-mock-progress-fill"
                    style={{
                      width: `${(idx + 1) * 25}%`,
                      background: `linear-gradient(90deg, ${step.accent}, ${step.accent2})`,
                    }}
                  />
                </div>
                <div className="hiw-mock-progress-label" style={{ color: step.accent }}>
                  {step.progressLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── Scoped styles ── */}
      <style>{`

        /* ─── Section wrapper ─── */
        .hiw-section {
          width: 100%;
          background: #06080f;
          padding: 0;
        }

        .hiw-outer {
          display: grid;
          /* left | center-connector | right */
          grid-template-columns: 340px 80px 1fr;
          max-width: 1300px;
          margin: 0 auto;
          padding: 80px 32px 120px;
          align-items: start;
          gap: 0;
        }

        /* ─── LEFT sticky card ─── */
        .hiw-left {
          align-self: stretch;
        }

        .hiw-sticky-card {
          position: sticky;
          top: 10vh;
          background: linear-gradient(145deg, #2c1f6e 0%, #1a1650 45%, #0e1130 100%);
          border: 1px solid rgba(142,197,255,0.12);
          border-radius: 24px;
          overflow: hidden;
          min-height: 280px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06);
        }

        .hiw-sticky-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 60%, rgba(123,97,255,0.35) 0%, transparent 65%);
          pointer-events: none;
        }

        .hiw-sticky-inner {
          position: relative;
          z-index: 1;
          padding: 2.5rem 2.25rem 2.5rem;
        }

        .hiw-sticky-heading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(2.8rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.0;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin: 0 0 1.25rem;
        }

        .hiw-sticky-rule {
          width: 48px;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, #8EC5FF, #7B61FF);
          margin-bottom: 1.25rem;
        }

        .hiw-sticky-sub {
          font-size: 0.92rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          margin: 0;
          max-width: 220px;
        }

        /* ─── CENTER column ─── */
        .hiw-center {
          position: relative;
          align-self: stretch; /* stretch to full height of right column */
        }

        .hiw-center-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(142,197,255,0.15) 8%,
            rgba(142,197,255,0.15) 92%,
            transparent 100%
          );
        }

        .hiw-step-marker {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        /* ─── Bullseye ─── */
        .hiw-bullseye {
          position: relative;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hiw-ring {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid;
        }
        .hiw-ring-3 { width: 56px; height: 56px; opacity: 0.3; }
        .hiw-ring-2 { width: 38px; height: 38px; opacity: 0.5; }
        .hiw-ring-1 { width: 22px; height: 22px; opacity: 0.75; }

        .hiw-ring-dot {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 8px; height: 8px;
          border-radius: 50%;
        }

        @keyframes hiw-pulse-aura {
          0%   { transform: translate(-50%,-50%) scale(1);   opacity: 0.55; }
          70%  { transform: translate(-50%,-50%) scale(2.1); opacity: 0; }
          100% { transform: translate(-50%,-50%) scale(2.1); opacity: 0; }
        }

        .hiw-ring-pulse {
          position: absolute;
          top: 50%; left: 50%;
          width: 56px; height: 56px;
          border-radius: 50%;
          border: 1px solid;
          animation: hiw-pulse-aura 2.2s ease-out infinite;
          pointer-events: none;
        }

        .hiw-step-num {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        /* ─── RIGHT scrollable column ─── */
        .hiw-right {
          display: flex;
          flex-direction: column;
          gap: 48px;
          padding-left: 24px;
          padding-top: 0;
        }

        /* ─── Individual step card ─── */
        .hiw-card {
          background: transparent;
          padding-top: 16px;
          padding-bottom: 16px;
        }

        .hiw-pill {
          display: inline-block;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.28rem 0.7rem;
          border-radius: 999px;
          border: 1px solid;
          margin-bottom: 1.1rem;
        }

        .hiw-card-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.6rem, 2.8vw, 2.1rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.015em;
          margin: 0 0 0.9rem;
        }

        .hiw-card-desc {
          font-size: 0.97rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.75;
          margin: 0 0 1.75rem;
          max-width: 520px;
        }

        /* ─── Dashboard mockup ─── */
        .hiw-mock {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 1.4rem 1.5rem 1.25rem;
        }

        .hiw-mock-header {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 1.1rem;
        }

        .hiw-mock-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .hiw-mock-report {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.06em;
          flex: 1;
        }

        .hiw-mock-active {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #4ade80;
          padding: 0.18rem 0.55rem;
          border-radius: 999px;
          border: 1px solid rgba(74,222,128,0.3);
          background: rgba(74,222,128,0.08);
        }

        .hiw-mock-niche-label {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.35);
          margin-bottom: 0.3rem;
        }

        .hiw-mock-niche-value {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .hiw-mock-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
          margin-bottom: 1rem;
        }

        .hiw-mock-metric {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          padding: 0.65rem 0.85rem;
        }

        .hiw-mock-metric-top {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.3rem;
        }

        .hiw-mock-metric-icon {
          font-size: 0.75rem;
        }

        .hiw-mock-metric-label {
          font-size: 0.65rem;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.04em;
        }

        .hiw-mock-metric-value {
          font-size: 0.82rem;
          font-weight: 600;
          color: #ffffff;
        }

        .hiw-mock-progress-track {
          height: 3px;
          background: rgba(255,255,255,0.07);
          border-radius: 999px;
          overflow: hidden;
          margin-bottom: 0.6rem;
        }

        .hiw-mock-progress-fill {
          height: 100%;
          border-radius: 999px;
          transition: width 0.6s ease;
        }

        .hiw-mock-progress-label {
          font-size: 0.72rem;
          font-weight: 600;
        }

        /* ─── Responsive ─── */
        @media (max-width: 960px) {
          .hiw-outer {
            grid-template-columns: 1fr;
            padding: 48px 20px 64px;
            gap: 0;
          }

          .hiw-left { margin-bottom: 32px; }

          .hiw-sticky-card {
            position: relative;
            top: 0;
          }

          .hiw-center { display: none; }

          .hiw-right {
            padding-left: 0;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
};
