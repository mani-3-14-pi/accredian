'use client';

import React from 'react';
import { motion } from 'motion/react';
import { TestimonialItem } from '../types';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  index: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index,
}) => {
  return (
    <motion.div
      className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col h-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Company Logo */}
      <div className="h-10 mb-6 flex items-center">
        <img
          src={testimonial.logoUrl}
          alt={`${testimonial.company} Logo`}
          className="h-8 w-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Quote */}
      <p className="font-sans text-base md:text-lg text-slate-800 italic mb-8 flex-grow leading-relaxed">
        "{testimonial.quote}"
      </p>

      {/* Executive Bio */}
      <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-auto">
        <img
          src={testimonial.avatarUrl}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-slate-100"
          referrerPolicy="no-referrer"
        />
        <div>
          <div className="font-display font-semibold text-slate-900 text-sm md:text-base">
            {testimonial.name}
          </div>
          <div className="text-xs md:text-sm text-slate-500 font-medium">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
