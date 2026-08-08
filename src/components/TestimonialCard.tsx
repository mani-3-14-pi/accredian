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
      className="bg-white border border-slate-200 p-8 rounded-xl flex flex-col h-full shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
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
