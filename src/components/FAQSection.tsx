'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './ui/SectionHeader';
import { AccordionItem } from './AccordionItem';
import { FAQItem } from '../types';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'What is the time commitment required?',
      answer:
        'Most executive cohorts require approximately 3 to 5 hours per week. Programs are designed around busy executive schedules with flexible asynchronous prep material, live weekend/evening masterclasses, and dedicated office hours.',
    },
    {
      id: 'faq-2',
      question: 'Are these programs designed for technical or non-technical leaders?',
      answer:
        'We offer tailored tracks for both technical leaders (VPs of Engineering, Tech Leads, MLOps Engineers) and non-technical business executives (C-Suite, Product Managers, Strategy Directors). Custom cohorts blend cross-functional teams for maximum alignment.',
    },
    {
      id: 'faq-3',
      question: 'Can we customize a cohort for our enterprise?',
      answer:
        'Yes, 100%! We conduct a preliminary Discovery Workshop with your organizational stakeholders to align learning modules with your company’s proprietary tech stack, real dataset sandboxes, and specific strategic OKRs.',
    },
    {
      id: 'faq-4',
      question: 'What is the recommended cohort size and schedule?',
      answer:
        'Cohort sizes typically range from 15 to 50 executives per enterprise batch to maintain deep interactive mentoring and peer collaboration. Schedules can be structured over 6 to 12 weeks.',
    },
    {
      id: 'faq-5',
      question: 'How does Accredian handle executive certification and LMS reporting?',
      answer:
        'Accredian issues blockchain-verified completion credentials for executives. We seamlessly integrate with your corporate LMS (Workday, Cornerstone, SuccessFactors) via SCORM/xAPI to provide automated attendance and progress analytics.',
    },
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="snap-section bg-white text-slate-900 py-28 md:py-32 px-4 sm:px-6 lg:px-8 w-full border-t border-slate-200">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title="Frequently Asked"
          highlightText="Questions"
          description="Everything you need to know about our enterprise executive cohorts and custom program delivery."
          mode="light"
        />

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 space-y-3"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
