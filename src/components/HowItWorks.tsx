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
    <section className="snap-section py-28 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#0b1c30] border border-[#2F80FF]/30 rounded-3xl p-10 sm:p-14 md:p-18 relative overflow-hidden shadow-2xl">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F80FF]/15 blur-[120px] pointer-events-none" />

        <SectionHeader
          title="How It"
          highlightText="Works"
          description="A streamlined 4-step process to upskill your enterprise workforce at scale."
          mode="dark"
        />

        <div className="relative max-w-5xl mx-auto mt-12">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-slate-700 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 relative z-10">
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
                      ? 'border-2 border-[#8EC5FF] text-[#8EC5FF] shadow-[0_0_20px_rgba(142,197,255,0.4)]'
                      : 'border-2 border-slate-700 text-slate-400 group-hover:border-[#8EC5FF] group-hover:text-[#8EC5FF]'
                  }`}
                >
                  <span className="font-display text-xl font-bold">
                    {step.stepNumber}
                  </span>
                </div>

                <h4 className="font-display text-lg md:text-xl font-semibold text-white mb-2.5 group-hover:text-[#8EC5FF] transition-colors">
                  {step.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
