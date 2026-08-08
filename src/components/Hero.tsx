'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/Button';

interface HeroProps {
  onTalkToTeam: () => void;
  onOpenDemo: () => void;
}

const subtitles = [
  "Transform your workforce with executive-level education designed for scale. Data-driven insights, premium curation, and measurable impact.",
  "Empower your workforce with world-class executive education, backed by data-driven insights, curated learning, and measurable business outcomes.",
  "Upskill your organization with expertly curated executive programs that deliver measurable results and lasting business transformation.",
  "Enable continuous workforce growth with scalable executive education, intelligent learning pathways, and proven business impact."
];

export const Hero: React.FC<HeroProps> = ({ onTalkToTeam, onOpenDemo }) => {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col items-center justify-center pt-28 md:pt-36 pb-16 px-4 sm:px-6 lg:px-8 text-center w-full overflow-hidden z-0"
    >
      {/* Background Animated Aurora Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 opacity-80"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="aurora-gradient w-full h-full" />
      </motion.div>

      {/* Floating Noise Overlay */}
      <div className="noise-overlay" />

      {/* Hero Main Content */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl">


        {/* Display Title with Gradient Highlight */}
        <motion.h1
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-slate-900 mb-6 leading-[1.08] max-w-5xl"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Upskill at the speed of{' '}
          <span className="inline-block tracking-[0.02em] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2F80FF] via-[#1E40AF] to-[#2563EB] ml-1.5">
            Enterprise
          </span>
        </motion.h1>

        {/* Supporting Subtitle */}
        <div className="min-h-[120px] sm:min-h-[96px] md:min-h-[80px] w-full max-w-2xl mb-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSubtitle}
              className="font-sans text-lg sm:text-xl md:text-2xl text-slate-700 font-medium leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {subtitles[currentSubtitle]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Action CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <Button
            variant="primary"
            size="lg"
            isMagnetic
            onClick={onTalkToTeam}
            className="w-full sm:w-auto group"
            icon={
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            }
          >
            Talk to Our Enterprise Team
          </Button>

          <Button
            variant="glass"
            size="lg"
            onClick={onOpenDemo}
            className="w-full sm:w-auto"
            icon={
              <span className="material-symbols-outlined text-lg text-[#2F80FF]">
                play_circle
              </span>
            }
            iconPosition="left"
          >
            View Platform Demo
          </Button>
        </motion.div>
      </div>

      {/* Bouncing Scroll Cue */}
      <motion.a
        href="#marquee"
        className="absolute bottom-2 md:bottom-4 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <span className="font-sans text-[11px] text-slate-500 uppercase tracking-widest font-semibold">
          Discover
        </span>
        <motion.span
          className="material-symbols-outlined text-slate-500"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          keyboard_arrow_down
        </motion.span>
      </motion.a>
    </section>
  );
};
