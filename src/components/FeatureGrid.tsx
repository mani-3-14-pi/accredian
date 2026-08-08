'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './ui/SectionHeader';

const features = [
  {
    id: 'feat-1',
    badge: '100% Customized',
    title: 'Tailored Curriculum',
    description: 'Customized learning paths aligned perfectly with your specific enterprise business objectives, tech stacks, and team skill gaps.',
    icon: 'school',
    highlights: ['Proprietary Tech Stack Alignment', 'Skill Gap Diagnostic Workshop', 'Custom Capstone Projects'],
    metric: '98% Alignment Score',
  },
  {
    id: 'feat-2',
    badge: 'Interactive Sandboxes',
    title: 'Live Labs & Cloud Sandboxes',
    description: 'Hands-on practical sessions with real-world enterprise scenarios, isolated cloud sandboxes, and instant AI code review.',
    icon: 'co_present',
    highlights: ['Isolated Cloud Environments', 'Real-time AI Code Assessment', 'Enterprise Workflows'],
    metric: '4.9/5 Lab Rating',
  },
  {
    id: 'feat-3',
    badge: 'Executive Dashboards',
    title: 'Real-time Analytics & Skill Insights',
    description: 'Comprehensive executive dashboards tracking employee progress, skill acquisition velocity, and cohort performance.',
    icon: 'monitoring',
    highlights: ['Skill Delta Measurement', 'Cohort Velocity Tracking', 'Clear Business ROI Reporting'],
    metric: '100% Data Visibility',
  },
  {
    id: 'feat-4',
    badge: '1-on-1 Guidance',
    title: 'Dedicated Expert Mentorship',
    description: 'Direct access to industry veterans and AI practitioners for personalized coaching, code reviews, and office hours.',
    icon: 'groups',
    highlights: ['Top 1% AI Practitioners', 'Weekly Office Hours', 'Tailored Code Reviews'],
    metric: '24hr Mentor Response',
  },
  {
    id: 'feat-5',
    badge: 'SCORM & API Ready',
    title: 'Seamless Corporate LMS Integration',
    description: 'Instant SCORM & API integration with your existing Learning Management Systems, Workday, Cornerstone, or SuccessFactors.',
    icon: 'integration_instructions',
    highlights: ['Automated Progress Sync', 'Workday & SCORM Compliant', 'Single Sign-On (SSO) Support'],
    metric: 'Zero-Friction Sync',
  },
  {
    id: 'feat-6',
    badge: '24/7 Managed Support',
    title: 'White-Glove Program Management',
    description: 'Administrative support, attendance tracking, cohort logistics, and success management for effortless enterprise delivery.',
    icon: 'manage_accounts',
    highlights: ['Dedicated Success Manager', 'Automated Executive Reports', 'Flexible Schedule Batches'],
    metric: '100% Satisfaction',
  },
];

export const FeatureGrid: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const lastWheelTime = useRef(0);

  // Wheel navigation scoped ONLY to the card stage box
  // Hovering outside the card stage box lets normal page scroll happen
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handleWheel = (e: WheelEvent) => {
      // Ignore if mostly horizontal scroll
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      const now = Date.now();
      // Lockout window (450ms) to prevent rapid skipping during multi-scroll bursts
      if (now - lastWheelTime.current < 450) {
        if (
          (e.deltaY > 0 && activeIndex < features.length - 1) ||
          (e.deltaY < 0 && activeIndex > 0)
        ) {
          e.preventDefault();
        }
        return;
      }

      if (e.deltaY > 0 && activeIndex < features.length - 1) {
        e.preventDefault();
        setActiveIndex((prev) => Math.min(prev + 1, features.length - 1));
        lastWheelTime.current = now;
      } else if (e.deltaY < 0 && activeIndex > 0) {
        e.preventDefault();
        setActiveIndex((prev) => Math.max(prev - 1, 0));
        lastWheelTime.current = now;
      }
    };

    stage.addEventListener('wheel', handleWheel, { passive: false });
    return () => stage.removeEventListener('wheel', handleWheel);
  }, [activeIndex]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0 && activeIndex < features.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (deltaX > 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    }
  };

  return (
    <section
      id="features"
      className="snap-section py-20 md:py-28 bg-[#F7FAFC] border-t border-[#DCEBFF]/50 relative overflow-hidden select-none"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#2F80FF]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          title="Why Accredian"
          highlightText="Enterprise"
          description="Equip your workforce with industry-leading skills tailored to your organizational goals."
          align="center"
          mode="dark"
        />

        {/* Outer Cards Container Box with Thin Black/Slate Border */}
        <motion.div
          ref={stageRef}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto min-h-[460px] sm:min-h-[500px] md:min-h-[550px] flex items-center justify-center my-6 md:my-10 rounded-3xl bg-white border border-slate-200/80 shadow-md p-4 sm:p-6"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full h-[400px] sm:h-[440px] md:h-[490px] flex items-center justify-center overflow-visible">
            {features.map((feat, idx) => {
              const distance = idx - activeIndex;
              const isCenter = distance === 0;
              const isRight = distance === 1;
              const isLeft = distance === -1;

              // PowerPoint Morph offset & scale transformations
              let xOffset = 0;
              let yOffset = 0;
              let scale = 0.65;
              let opacity = 0;
              let rotate = 0;
              let zIndex = 5;
              let filter = 'blur(6px)';

              const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;

              if (isCenter) {
                xOffset = 0;
                yOffset = 0;
                scale = 1;
                opacity = 1;
                rotate = 0;
                zIndex = 30;
                filter = 'blur(0px)';
              } else if (isRight) {
                xOffset = screenWidth < 640 ? 120 : screenWidth < 1024 ? 240 : 320;
                yOffset = 18;
                scale = 0.86;
                opacity = 0.65;
                rotate = 3.5;
                zIndex = 20;
                filter = 'blur(1px)';
              } else if (isLeft) {
                xOffset = screenWidth < 640 ? -120 : screenWidth < 1024 ? -240 : -320;
                yOffset = -22;
                scale = 0.8;
                opacity = 0.45;
                rotate = -4;
                zIndex = 10;
                filter = 'blur(2px)';
              } else if (distance > 1) {
                xOffset = 500;
                yOffset = 40;
                scale = 0.6;
                opacity = 0;
                rotate = 7;
                zIndex = 5;
              } else if (distance < -1) {
                xOffset = -500;
                yOffset = -40;
                scale = 0.6;
                opacity = 0;
                rotate = -8;
                zIndex = 5;
              }

              return (
                <motion.div
                  key={feat.id}
                  className="absolute w-[95%] sm:w-[500px] md:w-[580px] cursor-pointer"
                  animate={{
                    x: xOffset,
                    y: yOffset,
                    scale,
                    opacity,
                    rotate,
                    filter,
                  }}
                  style={{ zIndex }}
                  transition={{
                    type: 'spring',
                    stiffness: 250,
                    damping: 25,
                    mass: 0.8,
                  }}
                  onClick={() => setActiveIndex(idx)}
                >
                  {/* Morph Card with Thin Black/Slate Border */}
                  <div
                    className={`h-full rounded-2xl p-5 sm:p-6 bg-white border transition-all duration-300 ${
                      isCenter
                        ? 'border-slate-900/30 shadow-[0_16px_45px_rgba(15,23,42,0.12),0_4px_12px_rgba(0,0,0,0.03)]'
                        : 'border-slate-900/15 shadow-sm hover:border-slate-900/30'
                    }`}
                  >
                    {/* Header Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#DCEBFF] to-[#b3d4ff] flex items-center justify-center shadow-inner border border-slate-900/10">
                        <span className="material-symbols-outlined filled text-[#2F80FF] text-xl">
                          {feat.icon}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900/5 text-slate-800 border border-slate-900/15">
                        {feat.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-tight">
                      {feat.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {feat.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      {feat.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#2F80FF]/15 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-[#2F80FF] text-[10px] font-bold">
                              check
                            </span>
                          </div>
                          <span className="text-xs font-medium text-slate-700">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Morph Controls & Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto pt-2">
          {/* Card Step Indicators */}
          <div className="flex items-center gap-2">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? 'w-7 bg-slate-900 shadow-sm'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to feature card ${idx + 1}`}
              />
            ))}
          </div>

          {/* Morph Step Arrows + Status text */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">
              0{activeIndex + 1} / 0{features.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
                disabled={activeIndex === 0}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 ${
                  activeIndex > 0
                    ? 'border-slate-900/30 text-slate-800 hover:bg-slate-900 hover:text-white bg-white cursor-pointer shadow-sm'
                    : 'border-slate-200 text-slate-300 bg-slate-50 cursor-not-allowed'
                }`}
                aria-label="Previous morph card"
              >
                <span className="material-symbols-outlined text-base">chevron_left</span>
              </button>

              <button
                onClick={() => setActiveIndex((prev) => Math.min(prev + 1, features.length - 1))}
                disabled={activeIndex === features.length - 1}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 ${
                  activeIndex < features.length - 1
                    ? 'border-slate-900/30 text-slate-800 hover:bg-slate-900 hover:text-white bg-white cursor-pointer shadow-sm'
                    : 'border-slate-200 text-slate-300 bg-slate-50 cursor-not-allowed'
                }`}
                aria-label="Next morph card"
              >
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
