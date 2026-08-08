'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { StatItem } from '../types';

interface StatTileProps {
  stat: StatItem;
  delay?: number;
}

export const StatTile: React.FC<StatTileProps> = ({ stat, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [displayCount, setDisplayCount] = useState(stat.value);

  useEffect(() => {
    const controls = animate(0, stat.value, {
      duration: 2,
      delay: delay,
      ease: "easeOut",
      onUpdate: (val) => setDisplayCount(Math.round(val)),
    });
    return controls.stop;
  }, [stat.value, delay]);

  return (
    <motion.div
      ref={ref}
      className="bg-white border border-slate-200/90 rounded-2xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-[#2F80FF] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm"
      initial={{ opacity: 1, y: 0, scale: 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2F80FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-[#2F80FF] text-2xl filled">
          {stat.icon}
        </span>
      </div>

      {/* Number Display */}
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-2 tracking-tight flex items-center justify-center">
        <span>{displayCount}</span>
        {stat.suffix && (
          <span className="text-[#2F80FF] ml-0.5">
            {stat.suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <div className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider">
        {stat.label}
      </div>
    </motion.div>
  );
};
