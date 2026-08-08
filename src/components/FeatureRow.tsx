import React from 'react';
import { motion } from 'motion/react';
import { FeatureItem } from '../types';

interface FeatureCardProps {
  feature: FeatureItem;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  return (
    <motion.div
      className="bg-[#FFFFFF] border border-[#DCEBFF] rounded-xl p-6 md:p-8 hover:border-[#8EC5FF] transition-all duration-300 group hover:shadow-[0_0_25px_rgba(109,59,215,0.2)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      <div className="w-12 h-12 rounded-lg bg-[#DCEBFF] flex items-center justify-center mb-6 group-hover:bg-[#8EC5FF]/30 transition-colors">
        <span className="material-symbols-outlined text-[#2F80FF] text-2xl filled">
          {feature.icon}
        </span>
      </div>

      <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-900 mb-3 group-hover:text-[#2F80FF] transition-colors">
        {feature.title}
      </h3>

      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
};
