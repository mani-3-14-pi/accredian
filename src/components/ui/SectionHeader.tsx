'use client';

import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: 'center' | 'left';
  mode?: 'dark' | 'light';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlightText,
  description,
  align = 'center',
  mode = 'dark',
  className = '',
}) => {
  return (
    <div
      className={`${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${
        className.includes('mb-') ? '' : 'mb-12 md:mb-16'
      } ${className}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 mb-4 text-xs font-semibold uppercase tracking-widest text-blue-800 shadow-sm"
        >
          <span className="material-symbols-outlined text-[#2F80FF] text-sm filled">bolt</span>
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900"
      >
        {title}{' '}
        {highlightText && (
          <span className="inline-block tracking-[0.02em] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2F80FF] to-[#1E40AF] ml-1.5">
            {highlightText}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
