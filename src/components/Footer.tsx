import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#031427] text-[#cbc3d7] border-t border-[#494454]/40 pt-16 pb-12 px-4 sm:px-6 lg:px-8 w-full relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <a href="#hero" className="font-display text-2xl font-bold text-white flex items-center gap-2 mb-4">
            <span className="text-[#d0bcff]">Accredian</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#6d3bd7]/30 text-[#d0bcff] border border-[#6d3bd7]/50 font-medium">
              ENTERPRISE
            </span>
          </a>
          <p className="text-sm leading-relaxed text-[#cbc3d7]/80 mb-6">
            Empowering modern enterprises with cutting-edge executive education, AI skill frameworks, and measurable workforce transformation.
          </p>
          <div className="flex gap-4">
            <a href="#hero" className="w-9 h-9 rounded-full bg-[#102034] border border-[#494454] flex items-center justify-center text-[#d0bcff] hover:border-[#d0bcff] transition-colors">
              <span className="material-symbols-outlined text-sm">globe</span>
            </a>
            <a href="#hero" className="w-9 h-9 rounded-full bg-[#102034] border border-[#494454] flex items-center justify-center text-[#d0bcff] hover:border-[#d0bcff] transition-colors">
              <span className="material-symbols-outlined text-sm">hub</span>
            </a>
            <a href="#hero" className="w-9 h-9 rounded-full bg-[#102034] border border-[#494454] flex items-center justify-center text-[#d0bcff] hover:border-[#d0bcff] transition-colors">
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
            <li><a href="#programs" className="hover:text-[#d0bcff] transition-colors">Generative AI Exec</a></li>
            <li><a href="#programs" className="hover:text-[#d0bcff] transition-colors">Data Science & MLOps</a></li>
            <li><a href="#programs" className="hover:text-[#d0bcff] transition-colors">AI Product Strategy</a></li>
            <li><a href="#programs" className="hover:text-[#d0bcff] transition-colors">Digital Transformation</a></li>
            <li><a href="#programs" className="hover:text-[#d0bcff] transition-colors">Fintech & Risk Management</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-display font-semibold text-white text-base mb-4 uppercase tracking-wider text-xs">
            Enterprise Solutions
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#features" className="hover:text-[#d0bcff] transition-colors">Custom Cohorts</a></li>
            <li><a href="#features" className="hover:text-[#d0bcff] transition-colors">Live Labs & Sandboxes</a></li>
            <li><a href="#features" className="hover:text-[#d0bcff] transition-colors">LMS Integration</a></li>
            <li><a href="#features" className="hover:text-[#d0bcff] transition-colors">Executive Dashboards</a></li>
            <li><a href="#features" className="hover:text-[#d0bcff] transition-colors">ROI & Progress Reports</a></li>
          </ul>
        </div>

        {/* Company & Support */}
        <div>
          <h4 className="font-display font-semibold text-white text-base mb-4 uppercase tracking-wider text-xs">
            Contact & Support
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#d0bcff] text-base">location_on</span>
              <span>San Francisco, CA & New Delhi</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#d0bcff] text-base">mail</span>
              <a href="mailto:enterprise@accredian.com" className="hover:text-[#d0bcff] transition-colors">enterprise@accredian.com</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#d0bcff] text-base">call</span>
              <span>+1 (800) 555-ACCRED</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-[#494454]/40 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#cbc3d7]/60 gap-4">
        <div>
          © {new Date().getFullYear()} Accredian Enterprise. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#hero" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#hero" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#hero" className="hover:text-white transition-colors">Security & SOC2</a>
        </div>
      </div>
    </footer>
  );
};
