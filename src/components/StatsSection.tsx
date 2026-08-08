import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { StatTile } from './StatTile';
import { StatItem } from '../types';

export const StatsSection: React.FC = () => {
  const stats: StatItem[] = [
    {
      id: 'stat-1',
      value: 95,
      suffix: '%',
      label: 'Completion Rate',
      icon: 'task_alt',
    },
    {
      id: 'stat-2',
      value: 500,
      suffix: '+',
      label: 'Expert Mentors',
      icon: 'school',
    },
    {
      id: 'stat-3',
      value: 100,
      suffix: '+',
      label: 'Enterprises Scaled',
      icon: 'domain',
    },
    {
      id: 'stat-4',
      value: 50,
      suffix: 'k+',
      label: 'Active Learners',
      icon: 'groups',
    },
  ];

  return (
    <section className="snap-section bg-[#F7FAFC] py-28 md:py-32 relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="The Numbers Behind Our"
          highlightText="Success"
          description="Metrics that validate our approach to executive education and enterprise upskilling at an unprecedented scale."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <StatTile key={stat.id} stat={stat} delay={0.35 + idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};
