'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ProgramItem } from '../types';

interface ProgramCardProps {
  program: ProgramItem;
  index: number;
  onSelectProgram: (program: ProgramItem) => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, index, onSelectProgram }) => {
  return (
    <motion.div
      className="glass-card rounded-xl p-6 md:p-8 flex flex-col justify-between group cursor-pointer hover:bg-[#F7FAFC]/70 border border-[#DCEBFF] hover:border-[#8EC5FF] transition-all duration-300"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      onClick={() => onSelectProgram(program)}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="bg-[#DCEBFF] w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-[#8EC5FF]/30 transition-colors">
            <span className="material-symbols-outlined text-[#2F80FF] text-2xl">
              {program.icon}
            </span>
          </div>

          {program.duration && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-[#DCEBFF] text-slate-600">
              {program.duration}
            </span>
          )}
        </div>

        <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-900 mb-3 group-hover:text-[#2F80FF] transition-colors">
          {program.title}
        </h3>

        <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
          {program.description}
        </p>
      </div>

      <div className="flex items-center text-[#2F80FF] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-200 mt-auto pt-2">
        <span>Learn more</span>
        <span className="material-symbols-outlined text-base ml-1">
          arrow_forward
        </span>
      </div>
    </motion.div>
  );
};
