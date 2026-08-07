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
  const isDark = mode === 'dark';

  return (
    <motion.div
      className={`${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-3xl mb-12 md:mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#494454] glass-card mb-4 text-xs font-semibold uppercase tracking-widest text-[#cbc3d7]">
          <span className="material-symbols-outlined text-[#d0bcff] text-sm filled">bolt</span>
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`font-display text-3xl md:text-5xl font-bold tracking-tight mb-4 ${
          isDark ? 'text-[#d3e4fe]' : 'text-slate-900'
        }`}
      >
        {title}{' '}
        {highlightText && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0bcff] to-[#6d3bd7]">
            {highlightText}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            isDark ? 'text-[#cbc3d7]' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};
