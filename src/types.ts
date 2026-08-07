export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  duration?: string;
  level?: string;
  keyTopics?: string[];
}

export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  logoUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  phone: string;
  message: string;
}
