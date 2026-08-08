'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Search, DollarSign, Users, TrendingUp } from 'lucide-react';

const steps = [
  {
    num: '01',
    label: 'PROGRAM',
    title: 'Program Focused',
    description:
      'Choose from executive, certificate and postgraduate learning paths.',
    nicheLabel: 'Your Niche',
    nicheValue: 'Untapped & High-Value',
    metrics: [
      { icon: Search, label: 'Viral Angle', value: 'Identified & Ready' },
      { icon: DollarSign, label: 'Revenue Model', value: 'Zero Upfront Cost' },
      { icon: Users, label: 'Audience Fit', value: 'Highly Scalable' },
      { icon: TrendingUp, label: 'Growth Opportunity', value: 'Massive Upside' },
    ],
    progressLabel: 'Partnership Terms: Transparent & Fair',
    accent: '#2F80FF',
    accent2: '#8EC5FF',
  },
  {
    num: '02',
    label: 'INDUSTRY',
    title: 'Industry Focused',
    description:
      'Build expertise tailored to the needs of your industry.',
    nicheLabel: 'Your Learning Path',
    nicheValue: 'Tailored & Optimized',
    metrics: [
      { icon: Search, label: 'Lab Sandboxes', value: 'Live & Ready' },
      { icon: DollarSign, label: 'Capstone Projects', value: 'Assigned' },
      { icon: Users, label: 'Delivery Speed', value: 'Accelerated' },
      { icon: TrendingUp, label: 'Skill Uplift', value: 'Measurable' },
    ],
    progressLabel: 'Curriculum Terms: Outcome-Driven & Verified',
    accent: '#8EC5FF',
    accent2: '#2F80FF',
  },
  {
    num: '03',
    label: 'SKILL',
    title: 'Skill Focused',
    description:
      'Develop in-demand skills across AI, analytics, design, cloud and more.',
    nicheLabel: 'Your Training Mode',
    nicheValue: 'Live & Interactive',
    metrics: [
      { icon: Users, label: 'Expert Mentors', value: 'Assigned' },
      { icon: Search, label: 'Office Hours', value: 'Daily' },
      { icon: DollarSign, label: 'Sessions', value: 'Live Exec' },
      { icon: TrendingUp, label: 'Completion', value: 'Tracked' },
    ],
    progressLabel: 'Mentorship Terms: Hands-On & Immersive',
    accent: '#2F80FF',
    accent2: '#8EC5FF',
  },
  {
    num: '04',
    label: 'CAREER',
    title: 'Career Level',
    description:
      'Learning designed for leaders, professionals and emerging talent.',
    nicheLabel: 'Your Achievement',
    nicheValue: 'Verified & Certified',
    metrics: [
      { icon: TrendingUp, label: 'ROI Tracking', value: 'Real-Time' },
      { icon: DollarSign, label: 'Certificate', value: 'Verified' },
      { icon: Users, label: 'Recognition', value: 'Industry-Wide' },
      { icon: Search, label: 'Career Impact', value: 'Massive Upside' },
    ],
    progressLabel: 'Certification Terms: Globally Recognized',
    accent: '#8EC5FF',
    accent2: '#2F80FF',
  },
];

export const HowItWorks: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardHeights, setCardHeights] = useState<number[]>([]);
  const GAP = 48; // must match .hiw-right gap

  useEffect(() => {
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
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="hiw-sticky-heading">
                  Tailored<br />Course<br />Segmentation
                </h2>
                <div className="hiw-sticky-rule" />
                <p className="hiw-sticky-sub">
                  Explore Custom-fit Courses Designed to Address Every Professional Focus
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
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
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
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
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
                        <span className="hiw-mock-metric-icon">
                          <m.icon size={14} className="opacity-70" />
                        </span>
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
          background: #FFFFFF;
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
          background: #F7FAFC;
          border: 1px solid #DCEBFF;
          border-radius: 24px;
          overflow: hidden;
          min-height: 280px;
          box-shadow: 0 20px 40px rgba(47, 128, 255, 0.08);
        }

        .hiw-sticky-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top left, rgba(142,197,255,0.2), transparent 70%);
          pointer-events: none;
        }

        .hiw-sticky-inner {
          position: relative;
          z-index: 1;
          padding: 3rem 2.5rem;
        }

        .hiw-sticky-heading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(3rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.05;
          color: #0f172a;
          letter-spacing: -0.01em;
          margin: 0 0 1.5rem;
        }

        .hiw-sticky-rule {
          width: 48px;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, #2F80FF, #8EC5FF);
          margin-bottom: 1.25rem;
        }

        .hiw-sticky-sub {
          font-size: 0.92rem;
          color: #334155;
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
          left: 0;
          right: 0;
          margin: 0 auto;
          width: 2px;
          background: #DCEBFF;
        }

        .hiw-step-marker {
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
          width: 56px;
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
          background: #FFFFFF;
          border-radius: 50%;
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
          width: 6px; height: 6px;
          border-radius: 50%;
        }

        @keyframes hiw-pulse-aura {
          0%   { transform: translate(-50%,-50%) scale(1);   opacity: 0.4; }
          70%  { transform: translate(-50%,-50%) scale(2); opacity: 0; }
          100% { transform: translate(-50%,-50%) scale(2); opacity: 0; }
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
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.35rem 0.8rem;
          border-radius: 999px;
          border: 1px solid #DCEBFF;
          background: #F7FAFC;
          margin-bottom: 1.5rem;
        }

        .hiw-card-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.8rem, 2.5vw, 2.25rem);
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin: 0 0 1rem;
        }

        .hiw-card-desc {
          font-size: 0.97rem;
          color: #475569;
          line-height: 1.75;
          margin: 0 0 1.75rem;
          max-width: 520px;
        }

        /* ─── Dashboard mockup ─── */
        .hiw-mock {
          background: #F7FAFC;
          border: 1px solid #DCEBFF;
          border-radius: 12px;
          padding: 1.75rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .hiw-mock-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.25rem;
        }

        .hiw-mock-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .hiw-mock-report {
          font-size: 0.75rem;
          color: #64748b;
          letter-spacing: 0.05em;
          flex: 1;
        }

        .hiw-mock-active {
          font-size: 0.55rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: #059669;
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          border: 1px solid rgba(16, 185, 129, 0.2);
          background: rgba(16, 185, 129, 0.1);
        }

        .hiw-mock-niche-label {
          font-size: 0.7rem;
          color: #64748b;
          margin-bottom: 0.4rem;
        }

        .hiw-mock-niche-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1.25rem;
        }

        .hiw-mock-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .hiw-mock-metric {
          background: #FFFFFF;
          border: 1px solid #DCEBFF;
          border-radius: 8px;
          padding: 0.85rem 1rem;
        }

        .hiw-mock-metric-top {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.4rem;
        }

        .hiw-mock-metric-icon {
          display: none; /* Hidden to match screenshot */
        }

        .hiw-mock-metric-label {
          font-size: 0.65rem;
          color: #64748b;
          letter-spacing: 0.02em;
        }

        .hiw-mock-metric-value {
          font-size: 0.85rem;
          font-weight: 700;
          color: #0f172a;
        }

        .hiw-mock-progress-track {
          height: 4px;
          background: #DCEBFF;
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
