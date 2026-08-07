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
      className="glass-card rounded-xl p-6 md:p-8 flex flex-col justify-between group cursor-pointer hover:bg-[#1b2b3f]/70 border border-white/10 hover:border-[#d0bcff]/50 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      onClick={() => onSelectProgram(program)}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="bg-[#a078ff]/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-[#a078ff]/30 transition-colors">
            <span className="material-symbols-outlined text-[#d0bcff] text-2xl">
              {program.icon}
            </span>
          </div>

          {program.duration && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#cbc3d7]">
              {program.duration}
            </span>
          )}
        </div>

        <h3 className="font-display text-xl md:text-2xl font-semibold text-[#d3e4fe] mb-3 group-hover:text-[#d0bcff] transition-colors">
          {program.title}
        </h3>

        <p className="text-sm md:text-base text-[#cbc3d7] mb-6 leading-relaxed">
          {program.description}
        </p>
      </div>

      <div className="flex items-center text-[#d0bcff] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-200 mt-auto pt-2">
        <span>Learn more</span>
        <span className="material-symbols-outlined text-base ml-1">
          arrow_forward
        </span>
      </div>
    </motion.div>
  );
};
