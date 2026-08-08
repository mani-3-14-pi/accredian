'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';

export const MarqueeStrip: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-20px' });

  const partners = [
    'IIM LUCKNOW',
    'IIT ROORKEE',
    'MICROSOFT',
    'AMAZON',
    'KPMG',
    'HARVARD EXECUTIVE',
    'GOOGLE',
    'DELOITTE',
  ];

  // Double array for seamless loop
  const marqueeItems = [...partners, ...partners];

  return (
    <motion.section
      ref={sectionRef}
      id="marquee"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
      className="snap-section w-full bg-gradient-to-r from-[#F7FAFC] via-[#DCEBFF]/50 to-[#F7FAFC] border-y border-[#DCEBFF] py-12 sm:py-14 relative z-10 overflow-hidden shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h3 className="text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-widest">
          Trusted by industry leaders & prestigious institutions
        </h3>
      </div>

      <div className="marquee-container w-full py-2">
        <div className="marquee-content flex gap-12 sm:gap-20 items-center">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#2F80FF] tracking-tight whitespace-nowrap cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
