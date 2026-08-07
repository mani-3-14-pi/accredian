import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { FeatureCard } from './FeatureRow';
import { FeatureItem } from '../types';

export const FeatureGrid: React.FC = () => {
  const features: FeatureItem[] = [
    {
      id: 'feat-1',
      title: 'Tailored curriculum',
      description:
        'Customized learning paths aligned perfectly with your specific business objectives and technology stacks.',
      icon: 'school',
    },
    {
      id: 'feat-2',
      title: 'Live labs',
      description:
        'Hands-on practical sessions with real-world enterprise scenarios, sandboxes, and immediate AI feedback.',
      icon: 'co_present',
    },
    {
      id: 'feat-3',
      title: 'Real-time analytics',
      description:
        'Comprehensive executive dashboards tracking employee progress, skill acquisition, and cohort performance.',
      icon: 'monitoring',
    },
    {
      id: 'feat-4',
      title: 'Mentorship',
      description:
        'Dedicated 1-on-1 and group guidance from industry veterans and top AI practitioners throughout the program.',
      icon: 'groups',
    },
    {
      id: 'feat-5',
      title: 'LMS Integration',
      description:
        'Seamless SCORM & API integration with your existing Learning Management Systems, Workday, or SuccessFactors.',
      icon: 'integration_instructions',
    },
    {
      id: 'feat-6',
      title: 'Program Management',
      description:
        'White-glove administrative support, attendance tracking, and cohort logistics to ensure smooth delivery.',
      icon: 'manage_accounts',
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        title="Why Accredian"
        highlightText="Enterprise"
        description="Equip your workforce with industry-leading skills tailored to your organizational goals."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, idx) => (
          <FeatureCard key={feature.id} feature={feature} index={idx} />
        ))}
      </div>
    </section>
  );
};
