import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/Button';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTalkToTeam: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  onTalkToTeam,
}) => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'labs' | 'curriculum'>('analytics');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          className="bg-[#102034] border border-[#d0bcff]/40 rounded-2xl max-w-4xl w-full text-[#d3e4fe] shadow-2xl overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Header */}
          <div className="bg-[#031427] p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#d0bcff] text-2xl">
                auto_awesome
              </span>
              <div>
                <h3 className="font-display font-bold text-lg md:text-xl text-white">
                  Accredian Enterprise Executive Platform
                </h3>
                <p className="text-xs text-[#cbc3d7]">
                  Interactive preview of executive dashboards & sandbox environments
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#cbc3d7] hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Navigation Tabs inside Modal */}
          <div className="flex border-b border-white/10 bg-[#0b1c30] px-6">
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-3.5 px-4 text-xs md:text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'analytics'
                  ? 'border-[#d0bcff] text-[#d0bcff]'
                  : 'border-transparent text-[#cbc3d7] hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-base">monitoring</span>
              <span>Executive Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('labs')}
              className={`py-3.5 px-4 text-xs md:text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'labs'
                  ? 'border-[#d0bcff] text-[#d0bcff]'
                  : 'border-transparent text-[#cbc3d7] hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-base">terminal</span>
              <span>Live AI Sandbox</span>
            </button>

            <button
              onClick={() => setActiveTab('curriculum')}
              className={`py-3.5 px-4 text-xs md:text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'curriculum'
                  ? 'border-[#d0bcff] text-[#d0bcff]'
                  : 'border-transparent text-[#cbc3d7] hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-base">schema</span>
              <span>Skill Matrix & LMS</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-8 bg-[#080B14]">
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="glass-card p-4 rounded-xl border border-white/10">
                    <span className="text-xs text-[#cbc3d7] block mb-1">Active Executive Cohort</span>
                    <span className="font-display text-2xl font-bold text-white">Q3 AI Leaders</span>
                    <span className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-xs">trending_up</span>
                      +28% skill retention
                    </span>
                  </div>

                  <div className="glass-card p-4 rounded-xl border border-white/10">
                    <span className="text-xs text-[#cbc3d7] block mb-1">Cohort Progress</span>
                    <span className="font-display text-2xl font-bold text-[#d0bcff]">94.8%</span>
                    <span className="text-xs text-[#cbc3d7] mt-1 block">48/50 Executives Active</span>
                  </div>

                  <div className="glass-card p-4 rounded-xl border border-white/10">
                    <span className="text-xs text-[#cbc3d7] block mb-1">Capstone Submissions</span>
                    <span className="font-display text-2xl font-bold text-white">12 Projects</span>
                    <span className="text-xs text-[#d0bcff] mt-1 block">100% Peer Verified</span>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-xl border border-white/10">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-display font-semibold text-white text-sm">
                      Enterprise Skill Velocity Index
                    </h4>
                    <span className="text-xs text-[#d0bcff] bg-[#d0bcff]/10 px-2.5 py-1 rounded-full">
                      Live Stream
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs text-[#cbc3d7] mb-1">
                        <span>Generative AI & RAG Architecture</span>
                        <span className="font-mono text-white">92% Advanced</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#6d3bd7] to-[#d0bcff] w-[92%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-[#cbc3d7] mb-1">
                        <span>AI Product Governance & Safety</span>
                        <span className="font-mono text-white">88% Competent</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#6d3bd7] to-[#a078ff] w-[88%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'labs' && (
              <div className="glass-card p-6 rounded-xl border border-white/10 font-mono text-xs text-[#d3e4fe] space-y-3 bg-[#031427]">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-slate-400">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-slate-400">accredian-enterprise-sandbox-v2.1</span>
                </div>
                <div className="text-emerald-400">$ accredian init --cohort "GenAI Executive Batch"</div>
                <div className="text-slate-300">[INFO] Provisioning isolated Vector DB & RAG pipeline sandbox...</div>
                <div className="text-slate-300">[SUCCESS] Enterprise API Key connected. Ready for live prompting.</div>
                <div className="bg-black/40 p-4 rounded-lg border border-white/5 text-slate-200 mt-2">
                  <span className="text-[#d0bcff]">$ Prompt:</span> "Evaluate Q3 enterprise supply chain risks using tuned Llama-3 70B pipeline..."
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="space-y-4">
                <div className="p-4 bg-[#102034] rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#d0bcff] font-semibold">MODULE 1</span>
                    <h5 className="font-display font-semibold text-white text-base">
                      Generative AI Architecture & Enterprise RAG
                    </h5>
                    <p className="text-xs text-[#cbc3d7] mt-0.5">
                      Vector embeddings, hybrid search, graph databases, and latency optimization.
                    </p>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full font-semibold">
                    Completed
                  </span>
                </div>

                <div className="p-4 bg-[#102034] rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#d0bcff] font-semibold">MODULE 2</span>
                    <h5 className="font-display font-semibold text-white text-base">
                      Agentic Workflows & Multi-Agent Swarms
                    </h5>
                    <p className="text-xs text-[#cbc3d7] mt-0.5">
                      Autogen, LangGraph, tool usage, memory persistence, and guardrails.
                    </p>
                  </div>
                  <span className="text-xs bg-[#6d3bd7]/30 text-[#d0bcff] border border-[#6d3bd7]/50 px-3 py-1 rounded-full font-semibold">
                    In Progress
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="bg-[#031427] p-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-xs text-[#cbc3d7]">
              Want a tailored walk-through with real corporate data sandboxes?
            </span>
            <div className="flex gap-3 w-full sm:w-auto">
              <Button
                variant="purple"
                size="sm"
                onClick={() => {
                  onClose();
                  onTalkToTeam();
                }}
              >
                Schedule Private Demo
              </Button>
              <Button variant="glass" size="sm" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
