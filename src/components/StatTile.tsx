import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { StatItem } from '../types';

interface StatTileProps {
  stat: StatItem;
  delay?: number;
}

export const StatTile: React.FC<StatTileProps> = ({ stat, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, stat.value, {
        duration: 3.6,
        delay: delay,
        ease: "easeOut",
        onUpdate: (val) => setDisplayCount(Math.round(val)),
      });
      return controls.stop;
    }
  }, [isInView, stat.value, delay]);

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-[#8EC5FF] transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2F80FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <span className="material-symbols-outlined text-[#2F80FF] mb-4 text-4xl filled">
        {stat.icon}
      </span>

      {/* Number Display */}
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-2 tracking-tight flex items-center justify-center">
        <span>{displayCount}</span>
        {stat.suffix && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.5 }}
          >
            {stat.suffix}
          </motion.span>
        )}
      </div>

      {/* Label */}
      <div className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wider">
        {stat.label}
      </div>
    </motion.div>
  );
};
