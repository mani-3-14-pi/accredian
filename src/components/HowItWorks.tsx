import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './ui/SectionHeader';
import { StepItem } from '../types';

export const HowItWorks: React.FC = () => {
  const steps: StepItem[] = [
    {
      stepNumber: 1,
      title: 'Discovery workshop',
      description: 'Identify specific skill gaps, technology targets, and organizational business goals.',
    },
    {
      stepNumber: 2,
      title: 'Curriculum customization',
      description: 'Tailor learning paths, live lab sandboxes, and capstones to match workshop outcomes.',
    },
    {
      stepNumber: 3,
      title: 'Delivery & mentorship',
      description: 'Execute training with live executive sessions, expert mentors, and office hours.',
    },
    {
      stepNumber: 4,
      title: 'Analytics & certification',
      description: 'Track ROI, skill acquisition metrics, and award verified completion certificates.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#0b1c30] border border-[#494454] rounded-2xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6d3bd7]/10 blur-[100px] pointer-events-none" />

        <SectionHeader
          title="How It"
          highlightText="Works"
          description="A streamlined 4-step process to upskill your enterprise workforce at scale."
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-[#494454] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.stepNumber}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Step Circle */}
                <div
                  className={`w-16 h-16 rounded-full bg-[#031427] flex items-center justify-center mb-6 relative transition-all duration-300 ${
                    idx === 0
                      ? 'border-2 border-[#d0bcff] text-[#d0bcff] shadow-[0_0_20px_rgba(208,188,255,0.3)]'
                      : 'border-2 border-[#494454] text-[#cbc3d7] group-hover:border-[#d0bcff] group-hover:text-[#d0bcff]'
                  }`}
                >
                  <span className="font-display text-xl font-bold">
                    {step.stepNumber}
                  </span>
                </div>

                <h4 className="font-display text-lg md:text-xl font-semibold text-[#d3e4fe] mb-2 group-hover:text-[#d0bcff] transition-colors">
                  {step.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#cbc3d7] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
