'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Target, Factory, Lightbulb, TrendingUp } from 'lucide-react';

const steps = [
  {
    num: '01',
    label: 'PROGRAM',
    title: 'Program Focused',
    description:
      'Choose from executive, certificate and postgraduate learning paths.',
    image: '/senior-management-v2.webp',
    icon: Target,
    iconColor: '#E11D48',
    accent: '#2F80FF',
    accent2: '#8EC5FF',
  },
  {
    num: '02',
    label: 'INDUSTRY',
    title: 'Industry Focused',
    description:
      'Build expertise tailored to the needs of your industry.',
    image: '/project-management-v2.webp',
    icon: Factory,
    iconColor: '#111827',
    accent: '#8EC5FF',
    accent2: '#2F80FF',
  },
  {
    num: '03',
    label: 'SKILL',
    title: 'Skill Focused',
    description:
      'Develop in-demand skills across AI, analytics, design, cloud and more.',
    image: '/data-science-v2.webp',
    icon: Lightbulb,
    iconColor: '#F59E0B',
    accent: '#2F80FF',
    accent2: '#8EC5FF',
  },
  {
    num: '04',
    label: 'CAREER',
    title: 'Career Level',
    description:
      'Learning designed for leaders, professionals and emerging talent.',
    image: '/digital-transformation-v2.webp',
    icon: TrendingUp,
    iconColor: '#2563EB',
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
                  Learning,<br />Your Way
                </h2>
                <div className="hiw-sticky-rule" />
                <p className="hiw-sticky-sub">
                  The right course for every career path.
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
              <div className="hiw-card-simple">
                <div className="hiw-card-simple-img-wrapper">
                  <img src={step.image} alt={step.title} className="hiw-card-simple-img" />
                </div>
                <div className="hiw-card-simple-content-wrapper">
                  <div className="hiw-card-simple-content">
                    <div className="hiw-card-simple-text">
                      <h4 className="hiw-card-simple-title">{step.title}</h4>
                      <p className="hiw-card-simple-desc">{step.description}</p>
                    </div>
                    <div className="hiw-card-simple-icon" style={{ color: step.iconColor }}>
                      <step.icon size={44} strokeWidth={2.5} />
                    </div>
                  </div>
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
          padding: 2.5rem 2.5rem;
        }

        .hiw-sticky-heading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          color: #0f172a;
          letter-spacing: -0.01em;
          margin: 0 0 1.25rem;
        }

        .hiw-sticky-rule {
          width: 48px;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, #2F80FF, #8EC5FF);
          margin-bottom: 1.25rem;
        }

        .hiw-sticky-sub {
          font-size: 1rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
          max-width: 240px;
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

        .hiw-card-simple {
          background: #E2E8F0;
          border-radius: 36px;
          overflow: hidden;
          padding-bottom: 24px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .hiw-card-simple-img-wrapper {
          width: 100%;
          height: 320px;
          background: #334155;
        }

        .hiw-card-simple-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 36px 36px 0 0;
        }

        .hiw-card-simple-content-wrapper {
          padding: 0 24px;
          margin-top: -60px;
          position: relative;
          z-index: 2;
        }

        .hiw-card-simple-content {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 24px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          gap: 20px;
        }

        .hiw-card-simple-text {
          flex: 1;
        }

        .hiw-card-simple-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: #020617;
          margin: 0 0 0.5rem;
          letter-spacing: -0.01em;
        }

        .hiw-card-simple-desc {
          font-size: 1rem;
          color: #475569;
          font-style: italic;
          line-height: 1.4;
          margin: 0;
        }

        .hiw-card-simple-icon {
          flex-shrink: 0;
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
