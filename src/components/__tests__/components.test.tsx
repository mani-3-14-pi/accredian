import { describe, it, expect } from 'vitest';
import { StatItem, FeatureItem, ProgramItem, TestimonialItem } from '../../types';

describe('Accredian Enterprise Components & Types Test Suite', () => {
  it('should validate StatItem structure correctly', () => {
    const stat: StatItem = {
      id: 'stat-test',
      value: 95,
      suffix: '%',
      label: 'Completion Rate',
      icon: 'task_alt',
    };

    expect(stat.id).toBe('stat-test');
    expect(stat.value).toBe(95);
    expect(stat.suffix).toBe('%');
    expect(stat.label).toBe('Completion Rate');
  });

  it('should validate FeatureItem structure correctly', () => {
    const feature: FeatureItem = {
      id: 'feat-test',
      title: 'Tailored curriculum',
      description: 'Customized learning paths aligned with your objectives.',
      icon: 'school',
    };

    expect(feature.title).toBe('Tailored curriculum');
    expect(feature.icon).toBe('school');
  });

  it('should validate ProgramItem structure correctly', () => {
    const program: ProgramItem = {
      id: 'prog-test',
      title: 'Generative AI',
      description: 'Master LLMs and RAG architectures.',
      icon: 'neurology',
      category: 'AI & Technology',
      duration: '8 Weeks',
    };

    expect(program.category).toBe('AI & Technology');
    expect(program.duration).toBe('8 Weeks');
  });

  it('should validate TestimonialItem structure correctly', () => {
    const testimonial: TestimonialItem = {
      id: 'test-1',
      quote: 'Great executive program!',
      name: 'Sarah Jenkins',
      role: 'VP of Engineering',
      company: 'TechCorp',
      avatarUrl: 'https://example.com/avatar.jpg',
      logoUrl: 'https://example.com/logo.png',
    };

    expect(testimonial.name).toBe('Sarah Jenkins');
    expect(testimonial.company).toBe('TechCorp');
  });
});
