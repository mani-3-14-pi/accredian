import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';
import { ContactFormData } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    workEmail: '',
    company: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [leadId, setLeadId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Client side validation
    if (!formData.firstName || !formData.lastName || !formData.workEmail || !formData.company) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields (*)');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setLeadId(data.leadId || 'CONFIRMED');
        
        // Trigger celebration confetti
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch (e) {
          // ignore confetti if canvas blocked
        }
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit request. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage('Network error while connecting to server. Please try again.');
    }
  };

  return (
    <section id="contact" className="snap-section bg-[#FFFFFF] text-slate-900 py-28 md:py-32 px-4 sm:px-6 lg:px-8 w-full border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Transform Your Workforce"
          highlightText="Today"
          description="Schedule a consultation with our enterprise executive team to design a custom upskilling solution."
          mode="light"
        />

        <div className="bg-white border border-slate-200 rounded-t-[2rem] rounded-b-2xl p-10 sm:p-14 shadow-xl relative mt-10">
          {status === 'success' ? (
            <motion.div
              className="text-center py-12 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Consultation Request Received!
              </h3>
              <p className="text-slate-600 max-w-md mx-auto text-base mb-6">
                Thank you for reaching out. Our enterprise solution architect will contact you within 24 hours.
              </p>
              <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg text-xs font-mono text-slate-500 mb-8">
                Reference ID: <span className="font-semibold text-slate-800">{leadId}</span>
              </div>
              <Button
                variant="primary"
                onClick={() => {
                  setStatus('idle');
                  setFormData({
                    firstName: '',
                    lastName: '',
                    workEmail: '',
                    company: '',
                    phone: '',
                    message: '',
                  });
                }}
              >
                Submit Another Request
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">error</span>
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                    className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-base placeholder:text-slate-400 hover:border-slate-400 focus:outline-none focus:border-[#2F80FF] focus:ring-4 focus:ring-[#2F80FF]/15 transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-base placeholder:text-slate-400 hover:border-slate-400 focus:outline-none focus:border-[#2F80FF] focus:ring-4 focus:ring-[#2F80FF]/15 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    required
                    value={formData.workEmail}
                    onChange={handleChange}
                    placeholder="jane.doe@company.com"
                    className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-base placeholder:text-slate-400 hover:border-slate-400 focus:outline-none focus:border-[#2F80FF] focus:ring-4 focus:ring-[#2F80FF]/15 transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Enterprise Inc."
                    className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-base placeholder:text-slate-400 hover:border-slate-400 focus:outline-none focus:border-[#2F80FF] focus:ring-4 focus:ring-[#2F80FF]/15 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-base placeholder:text-slate-400 hover:border-slate-400 focus:outline-none focus:border-[#2F80FF] focus:ring-4 focus:ring-[#2F80FF]/15 transition-all shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message / Cohort Requirements
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your team size, learning objectives, or desired customization..."
                  className="w-full px-4 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-base placeholder:text-slate-400 hover:border-slate-400 focus:outline-none focus:border-[#2F80FF] focus:ring-4 focus:ring-[#2F80FF]/15 transition-all shadow-sm resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full py-4 text-base font-semibold shadow-lg"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
                    Submitting Request...
                  </span>
                ) : (
                  'Schedule Consultation'
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
