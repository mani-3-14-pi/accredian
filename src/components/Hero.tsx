import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';

interface HeroProps {
  onTalkToTeam: () => void;
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onTalkToTeam, onOpenDemo }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-[870px] flex flex-col items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 text-center max-w-7xl mx-auto overflow-hidden"
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
        {/* Enterprise Pill Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#494454] glass-card mb-8 cursor-pointer hover:border-[#d0bcff]/50 transition-colors"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="material-symbols-outlined text-[#d0bcff] text-base filled">
            bolt
          </span>
          <span className="text-xs md:text-sm font-semibold text-[#cbc3d7] uppercase tracking-widest">
            Enterprise Learning Mode
          </span>
        </motion.div>

        {/* Display Title with Gradient Highlight */}
        <motion.h1
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-[#d3e4fe] mb-6 leading-[1.08] max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Upskill at the speed of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0bcff] via-[#a078ff] to-[#6d3bd7]">
            Enterprise
          </span>
        </motion.h1>

        {/* Supporting Subtitle */}
        <motion.p
          className="font-sans text-lg sm:text-xl md:text-2xl text-[#cbc3d7] max-w-2xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Transform your workforce with executive-level education designed for scale. Data-driven insights, premium curation, and measurable impact.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            variant="purple"
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
              <span className="material-symbols-outlined text-lg text-[#d0bcff]">
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
        className="absolute bottom-6 md:bottom-10 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="font-sans text-[11px] text-[#cbc3d7] uppercase tracking-widest font-semibold">
          Discover
        </span>
        <motion.span
          className="material-symbols-outlined text-[#cbc3d7]"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          keyboard_arrow_down
        </motion.span>
      </motion.a>
    </section>
  );
};
