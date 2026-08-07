import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from './ui/SectionHeader';
import { ProgramCard } from './ProgramCard';
import { Button } from './ui/Button';
import { ProgramItem } from '../types';

interface ProgramGridProps {
  onTalkToTeam: () => void;
}

export const ProgramGrid: React.FC<ProgramGridProps> = ({ onTalkToTeam }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProgram, setActiveProgram] = useState<ProgramItem | null>(null);

  const programs: ProgramItem[] = [
    {
      id: 'prog-1',
      title: 'Generative AI',
      description:
        'Master LLMs, RAG architectures, prompt engineering, and custom AI agent integration for enterprise scale.',
      icon: 'neurology',
      category: 'AI & Technology',
      duration: '8–12 Weeks',
      level: 'Executive / Technical',
      keyTopics: [
        'Large Language Models Architecture',
        'Retrieval-Augmented Generation (RAG)',
        'Agentic Workflows & Multi-Agent Systems',
        'Enterprise AI Safety & Governance',
      ],
    },
    {
      id: 'prog-2',
      title: 'Data Science',
      description:
        'Advanced analytics, predictive modeling, machine learning pipelines, and big data infrastructure.',
      icon: 'analytics',
      category: 'AI & Technology',
      duration: '12 Weeks',
      level: 'Mid to Senior Engineers',
      keyTopics: [
        'Predictive & Prescriptive Analytics',
        'MLOps & Production Model Deployment',
        'Real-time Stream Processing',
        'Data Governance & Ethics',
      ],
    },
    {
      id: 'prog-3',
      title: 'Product Management',
      description:
        'End-to-end product lifecycle, data-driven product strategy, AI product roadmap development, and growth.',
      icon: 'inventory',
      category: 'Product & Growth',
      duration: '8 Weeks',
      level: 'Product Leaders',
      keyTopics: [
        'AI-First Product Strategy',
        'Customer Discovery & UX Validation',
        'Product Metrics & Growth Hacking',
        'Cross-Functional Agile Leadership',
      ],
    },
    {
      id: 'prog-4',
      title: 'Leadership Elevation',
      description:
        'Executive decision-making, AI transformation leadership, organizational change, and strategic foresight.',
      icon: 'military_tech',
      category: 'Executive Leadership',
      duration: '6 Weeks',
      level: 'VP & C-Suite',
      keyTopics: [
        'Executive AI Readiness',
        'Strategic Transformation Roadmaps',
        'Managing High-Performance Teams',
        'Corporate Governance & ROI',
      ],
    },
    {
      id: 'prog-5',
      title: 'Digital Transformation',
      description:
        'Modern enterprise architecture, cloud-native migration, API ecosystems, and legacy system modernization.',
      icon: 'cloud_sync',
      category: 'Executive Leadership',
      duration: '10 Weeks',
      level: 'IT & Ops Directors',
      keyTopics: [
        'Cloud Infrastructure & Microservices',
        'Enterprise Integration Patterns',
        'Cybersecurity & Zero Trust Architecture',
        'Digital Capability Building',
      ],
    },
    {
      id: 'prog-6',
      title: 'Fintech & Risk Management',
      description:
        'Quantitative finance, algorithmic trading risk, blockchain ledgers, and automated regulatory compliance.',
      icon: 'payments',
      category: 'Domain Specialist',
      duration: '8 Weeks',
      level: 'Finance Executives',
      keyTopics: [
        'Financial Machine Learning',
        'Fraud Detection & AML Automation',
        'RegTech & Compliance Frameworks',
        'DeFi & Blockchain Security',
      ],
    },
    {
      id: 'prog-7',
      title: 'Ops Excellence & DevOps',
      description:
        'Lean engineering, CI/CD pipeline automation, automated testing, and scalable cloud deployment workflows.',
      icon: 'settings_suggest',
      category: 'Domain Specialist',
      duration: '8 Weeks',
      level: 'DevOps & Site Reliability',
      keyTopics: [
        'Kubernetes & Container Orchestration',
        'Site Reliability Engineering (SRE)',
        'Infrastructure as Code (Terraform)',
        'Continuous Delivery Pipelines',
      ],
    },
  ];

  const categories = ['All', 'AI & Technology', 'Product & Growth', 'Executive Leadership', 'Domain Specialist'];

  const filteredPrograms =
    selectedCategory === 'All'
      ? programs
      : programs.filter((p) => p.category === selectedCategory);

  return (
    <section id="programs" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#494454]/40">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <SectionHeader
          title="Program"
          highlightText="Specializations"
          description="Comprehensive executive learning paths for modern enterprises."
          align="left"
          className="mb-0 max-w-2xl"
        />

        <Button
          variant="glass"
          size="md"
          onClick={onTalkToTeam}
          icon={<span className="material-symbols-outlined text-sm">arrow_forward</span>}
        >
          Request Custom Cohort
        </Button>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2.5 mb-10 pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#d0bcff] text-[#3c0091] shadow-[0_0_15px_rgba(208,188,255,0.3)]'
                : 'glass-card text-[#cbc3d7] hover:text-white hover:border-[#d0bcff]/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Program Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms.map((prog, idx) => (
          <ProgramCard
            key={prog.id}
            program={prog}
            index={idx}
            onSelectProgram={(p) => setActiveProgram(p)}
          />
        ))}
      </div>

      {/* Program Details Modal */}
      <AnimatePresence>
        {activeProgram && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProgram(null)}
          >
            <motion.div
              className="bg-[#102034] border border-[#d0bcff]/40 rounded-2xl p-6 sm:p-8 max-w-2xl w-full text-[#d3e4fe] relative shadow-2xl overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveProgram(null)}
                className="absolute top-6 right-6 p-2 text-[#cbc3d7] hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#a078ff]/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#d0bcff] text-2xl">
                    {activeProgram.icon}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#d0bcff] font-semibold">
                    {activeProgram.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#d3e4fe]">
                    {activeProgram.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-[#cbc3d7] mb-6 leading-relaxed">
                {activeProgram.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6 bg-[#1b2b3f] p-4 rounded-xl border border-white/5">
                <div>
                  <span className="text-xs text-[#cbc3d7] block">Target Cohort</span>
                  <span className="text-sm font-semibold text-white">{activeProgram.level}</span>
                </div>
                <div>
                  <span className="text-xs text-[#cbc3d7] block">Program Duration</span>
                  <span className="text-sm font-semibold text-[#d0bcff]">{activeProgram.duration}</span>
                </div>
              </div>

              {activeProgram.keyTopics && (
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                    Key Curriculum Modules
                  </h4>
                  <ul className="space-y-2">
                    {activeProgram.keyTopics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#cbc3d7]">
                        <span className="material-symbols-outlined text-[#d0bcff] text-base shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <Button
                  variant="purple"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    setActiveProgram(null);
                    onTalkToTeam();
                  }}
                >
                  Enroll Your Team
                </Button>
                <Button
                  variant="glass"
                  size="md"
                  className="w-full"
                  onClick={() => setActiveProgram(null)}
                >
                  Close Overview
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
