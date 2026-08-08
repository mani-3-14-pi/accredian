import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';
import { ProgramItem } from '../types';

interface ProgramGridProps {
  onTalkToTeam: () => void;
}

export const ProgramGrid: React.FC<ProgramGridProps> = ({ onTalkToTeam }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProgram, setActiveProgram] = useState<ProgramItem | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);

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

  const categoryColors: Record<string, string> = {
    'AI & Technology': 'from-[#2F80FF] to-[#8EC5FF]',
    'Product & Growth': 'from-[#7C3AED] to-[#A78BFA]',
    'Executive Leadership': 'from-[#0F766E] to-[#2DD4BF]',
    'Domain Specialist': 'from-[#C2410C] to-[#FB923C]',
  };

  const categoryAccent: Record<string, string> = {
    'AI & Technology': 'bg-blue-50 text-blue-700 border-blue-100',
    'Product & Growth': 'bg-purple-50 text-purple-700 border-purple-100',
    'Executive Leadership': 'bg-teal-50 text-teal-700 border-teal-100',
    'Domain Specialist': 'bg-orange-50 text-orange-700 border-orange-100',
  };

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  // Update scroll indicators on mount & scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    return () => el.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Smoothly scroll to active card index
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const firstChild = el.firstElementChild?.firstElementChild as HTMLElement;
    const cardWidth = firstChild ? firstChild.clientWidth : 350;
    const stepWidth = cardWidth + 24;

    el.scrollTo({ left: activeCardIndex * stepWidth, behavior: 'smooth' });
  }, [activeCardIndex]);

  // Handle wheel events directly on the scroll track: 1 scroll = 1 next/prev card tile (450ms lockout)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let lastWheelTime = 0;

    const handleWheel = (e: WheelEvent) => {
      // Allow natural horizontal trackpad swipes
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      const now = Date.now();
      if (now - lastWheelTime < 450) {
        // Prevent scroll stacking within 450ms lockout
        const atStart = activeCardIndex === 0 && e.deltaY < 0;
        const atEnd = activeCardIndex >= filteredPrograms.length - 1 && e.deltaY > 0;
        if (!atStart && !atEnd) {
          e.preventDefault();
        }
        return;
      }

      const atStart = activeCardIndex === 0 && e.deltaY < 0;
      const atEnd = activeCardIndex >= filteredPrograms.length - 1 && e.deltaY > 0;

      // Allow vertical page scroll if at boundaries
      if (atStart || atEnd) return;

      e.preventDefault();
      lastWheelTime = now;

      if (e.deltaY > 0) {
        setActiveCardIndex((prev) => Math.min(prev + 1, filteredPrograms.length - 1));
      } else {
        setActiveCardIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [activeCardIndex, filteredPrograms.length]);

  // Reset scroll on category change
  useEffect(() => {
    setActiveCardIndex(0);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
    const timer = setTimeout(updateScrollState, 300);
    return () => clearTimeout(timer);
  }, [selectedCategory, updateScrollState]);

  const scrollBy = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setActiveCardIndex((prev) => Math.min(prev + 1, filteredPrograms.length - 1));
    } else {
      setActiveCardIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftPos(el.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.8;
    el.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <section id="programs" className="snap-section py-24 md:py-28 border-t border-[#DCEBFF]/40">
      {/* Header row */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
          <SectionHeader
            title="Program"
            highlightText="Specializations"
            description="Comprehensive executive learning paths for modern enterprises."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <div className="shrink-0 flex items-start pt-2">
            <Button
              variant="glass"
              size="md"
              onClick={onTalkToTeam}
              icon={<span className="material-symbols-outlined text-sm">arrow_forward</span>}
            >
              Request Custom Cohort
            </Button>
          </div>
        </div>

        {/* Filter pills row + scroll arrows */}
        <div className="flex items-center justify-between gap-4 mb-0">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2F80FF] text-white shadow-[0_0_16px_rgba(47,128,255,0.35)]'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-[#2F80FF] hover:text-[#2F80FF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Scroll arrow buttons */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollBy('left')}
              disabled={!canScrollLeft}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollLeft
                  ? 'border-slate-300 text-slate-600 hover:border-[#2F80FF] hover:text-[#2F80FF] bg-white cursor-pointer'
                  : 'border-slate-100 text-slate-300 bg-white cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <span className="material-symbols-outlined text-base">chevron_left</span>
            </button>
            <button
              onClick={() => scrollBy('right')}
              disabled={!canScrollRight}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollRight
                  ? 'border-slate-300 text-slate-600 hover:border-[#2F80FF] hover:text-[#2F80FF] bg-white cursor-pointer'
                  : 'border-slate-100 text-slate-300 bg-white cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scrollable cards track */}
      <div className="relative mt-10 w-full select-none">
        {/* Left fade gradient */}
        <div
          className={`pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#F7FAFC] to-transparent transition-opacity duration-300 ${
            canScrollLeft ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Right fade gradient */}
        <div
          className={`pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#F7FAFC] to-transparent transition-opacity duration-300 ${
            canScrollRight ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-6 hide-scrollbar ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <AnimatePresence>
            {filteredPrograms.map((prog, idx) => {
              const gradClass = categoryColors[prog.category] || 'from-[#2F80FF] to-[#8EC5FF]';
              const accentClass = categoryAccent[prog.category] || 'bg-blue-50 text-blue-700 border-blue-100';
              return (
                <motion.div
                  key={prog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: 0.35 + idx * 0.05 }}
                  className="group relative flex-shrink-0 w-[300px] sm:w-[350px]"
                  style={{ minHeight: '440px' }}
                  onClick={() => {
                    if (!isDragging) setActiveProgram(prog);
                  }}
                >
                  {/* Card */}
                  <div className="h-full flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#2F80FF]/40 transition-all duration-300 hover:-translate-y-1.5">
                    {/* Top gradient strip */}
                    <div className={`h-1.5 w-full bg-gradient-to-r ${gradClass}`} />

                    <div className="flex flex-col flex-1 p-7">
                      {/* Index + category row */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-[11px] font-bold tracking-[0.15em] text-slate-400 uppercase">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${accentClass}`}>
                          {prog.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-2xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-[#2F80FF] transition-colors duration-300">
                        {prog.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                        {prog.description}
                      </p>

                      {/* Key topics */}
                      <ul className="space-y-2 mb-7">
                        {(prog.keyTopics || []).slice(0, 3).map((topic, ti) => (
                          <li key={ti} className="flex items-start gap-2.5">
                            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-gradient-to-br ${gradClass}`} />
                            <span className="text-xs text-slate-600 leading-relaxed">{topic}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Footer meta */}
                      <div className="mt-auto flex items-center justify-between pt-5 border-t border-slate-100">
                        <div>
                          <span className="block text-[10px] uppercase tracking-wider text-slate-400 mb-0.5">Duration</span>
                          <span className="text-sm font-semibold text-slate-800">{prog.duration}</span>
                        </div>
                        <div className="text-right">
                          <span className="block text-[10px] uppercase tracking-wider text-slate-400 mb-0.5">For</span>
                          <span className="text-sm font-semibold text-slate-800">{prog.level}</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#2F80FF] flex items-center justify-center transition-colors duration-300 ml-2 shrink-0">
                          <span className="material-symbols-outlined text-slate-500 group-hover:text-white text-base transition-colors duration-300">
                            arrow_forward
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Spacer so last card doesn't sit against edge */}
          <div className="shrink-0 w-4" />
        </div>
      </div>

      {/* Scroll hint — mobile */}
      <div className="flex md:hidden items-center justify-center gap-1.5 mt-2 text-xs text-slate-400">
        <span className="material-symbols-outlined text-sm">swipe</span>
        Drag or swipe to explore
      </div>

      {/* Program Details Modal */}
      <AnimatePresence>
        {activeProgram && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProgram(null)}
          >
            <motion.div
              className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full text-slate-900 relative shadow-2xl overflow-hidden"
              initial={{ scale: 0.94, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 24 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gradient header bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${categoryColors[activeProgram.category] || 'from-[#2F80FF] to-[#8EC5FF]'}`} />

              <div className="p-7 sm:p-9 overflow-y-auto max-h-[85vh]">
                <button
                  onClick={() => setActiveProgram(null)}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base text-slate-600">close</span>
                </button>

                {/* Category + title */}
                <div className="mb-6">
                  <span className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full border mb-3 ${categoryAccent[activeProgram.category] || 'bg-blue-50 text-blue-700 border-blue-100'}`}>
                    {activeProgram.category}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                    {activeProgram.title}
                  </h3>
                </div>

                <p className="text-base text-slate-600 mb-7 leading-relaxed">
                  {activeProgram.description}
                </p>

                {/* Meta grid */}
                <div className="grid grid-cols-2 gap-4 mb-7 bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 block mb-1">Target Cohort</span>
                    <span className="text-sm font-semibold text-slate-800">{activeProgram.level}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 block mb-1">Duration</span>
                    <span className="text-sm font-semibold text-[#2F80FF]">{activeProgram.duration}</span>
                  </div>
                </div>

                {/* Key topics */}
                {activeProgram.keyTopics && (
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">
                      Key Curriculum Modules
                    </h4>
                    <ul className="space-y-3">
                      {activeProgram.keyTopics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-gradient-to-br ${categoryColors[activeProgram.category] || 'from-[#2F80FF] to-[#8EC5FF]'}`} />
                          <span className="leading-relaxed">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-slate-100">
                  <Button
                    variant="primary"
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
