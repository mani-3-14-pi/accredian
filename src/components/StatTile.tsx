import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { StatItem } from '../types';

interface StatTileProps {
  stat: StatItem;
  delay?: number;
}

export const StatTile: React.FC<StatTileProps> = ({ stat, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // 1.8s
    const target = stat.value;
    const stepTime = Math.abs(Math.floor(duration / Math.max(target, 1)));
    
    // For large targets like 500 or 50, increment in steps
    const step = Math.max(1, Math.floor(target / 40));

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-[#d0bcff]/50 transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#d0bcff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <span className="material-symbols-outlined text-[#d0bcff] mb-4 text-4xl filled">
        {stat.icon}
      </span>

      {/* Number Display */}
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#d3e4fe] mb-2 tracking-tight">
        {count}
        {stat.suffix}
      </div>

      {/* Label */}
      <div className="text-xs sm:text-sm font-semibold text-[#cbc3d7] uppercase tracking-wider">
        {stat.label}
      </div>
    </motion.div>
  );
};
