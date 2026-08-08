'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="snap-section bg-[#031427] text-slate-600 border-t border-[#DCEBFF]/40 pt-16 pb-12 px-4 sm:px-6 lg:px-8 w-full relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <a href="#hero" className="font-display text-2xl font-bold text-white flex items-center gap-2 mb-4">
            <span className="text-[#2F80FF]">Accredian</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#2F80FF]/30 text-[#2F80FF] border border-[#2F80FF]/50 font-medium">
              ENTERPRISE
            </span>
          </a>
          <p className="text-sm leading-relaxed text-slate-600/80 mb-6">
            Empowering modern enterprises with cutting-edge executive education, AI skill frameworks, and measurable workforce transformation.
          </p>
          <div className="flex gap-4">
            <a href="#hero" className="w-9 h-9 rounded-full bg-[#FFFFFF] border border-[#DCEBFF] flex items-center justify-center text-[#2F80FF] hover:border-[#8EC5FF] transition-colors">
              <span className="material-symbols-outlined text-sm">globe</span>
            </a>
            <a href="#hero" className="w-9 h-9 rounded-full bg-[#FFFFFF] border border-[#DCEBFF] flex items-center justify-center text-[#2F80FF] hover:border-[#8EC5FF] transition-colors">
              <span className="material-symbols-outlined text-sm">hub</span>
            </a>
            <a href="#hero" className="w-9 h-9 rounded-full bg-[#FFFFFF] border border-[#DCEBFF] flex items-center justify-center text-[#2F80FF] hover:border-[#8EC5FF] transition-colors">
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
          </div>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-display font-semibold text-white text-base mb-4 uppercase tracking-wider text-xs">
            Specializations
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#programs" className="hover:text-[#2F80FF] transition-colors">Generative AI Exec</a></li>
            <li><a href="#programs" className="hover:text-[#2F80FF] transition-colors">Data Science & MLOps</a></li>
            <li><a href="#programs" className="hover:text-[#2F80FF] transition-colors">AI Product Strategy</a></li>
            <li><a href="#programs" className="hover:text-[#2F80FF] transition-colors">Digital Transformation</a></li>
            <li><a href="#programs" className="hover:text-[#2F80FF] transition-colors">Fintech & Risk Management</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-display font-semibold text-white text-base mb-4 uppercase tracking-wider text-xs">
            Enterprise Solutions
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#features" className="hover:text-[#2F80FF] transition-colors">Custom Cohorts</a></li>
            <li><a href="#features" className="hover:text-[#2F80FF] transition-colors">Live Labs & Sandboxes</a></li>
            <li><a href="#features" className="hover:text-[#2F80FF] transition-colors">LMS Integration</a></li>
            <li><a href="#features" className="hover:text-[#2F80FF] transition-colors">Executive Dashboards</a></li>
            <li><a href="#features" className="hover:text-[#2F80FF] transition-colors">ROI & Progress Reports</a></li>
          </ul>
        </div>

        {/* Company & Support */}
        <div>
          <h4 className="font-display font-semibold text-white text-base mb-4 uppercase tracking-wider text-xs">
            Contact & Support
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#2F80FF] text-base">location_on</span>
              <span>San Francisco, CA & New Delhi</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#2F80FF] text-base">mail</span>
              <a href="mailto:enterprise@accredian.com" className="hover:text-[#2F80FF] transition-colors">enterprise@accredian.com</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#2F80FF] text-base">call</span>
              <span>+1 (800) 555-ACCRED</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-[#DCEBFF]/40 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600/60 gap-4">
        <div>
          © {new Date().getFullYear()} Accredian Enterprise. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#hero" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
          <a href="#hero" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          <a href="#hero" className="hover:text-slate-900 transition-colors">Security & SOC2</a>
        </div>
      </div>
    </footer>
  );
};
