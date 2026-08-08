import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';

interface AccordionItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  faq,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-slate-200 py-3">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left py-4 hover:bg-slate-50 transition-colors rounded-lg px-3 group focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-slate-900 text-base md:text-lg pr-4 group-hover:text-[#2F80FF] transition-colors">
          {faq.question}
        </span>

        <motion.span
          className="material-symbols-outlined text-slate-500 group-hover:text-[#2F80FF] shrink-0"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          add
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-5 text-sm md:text-base text-slate-600 leading-relaxed font-sans">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
