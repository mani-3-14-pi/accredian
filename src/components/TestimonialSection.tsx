'use client';

import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { TestimonialCard } from './TestimonialCard';
import { TestimonialItem } from '../types';

export const TestimonialSection: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: 'test-1',
      quote:
        'The strategic foresight gained through this program fundamentally altered our leadership approach. It was intense, precise, and immediately applicable.',
      name: 'Sarah Jenkins',
      role: 'VP of Engineering',
      company: 'TechCorp',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBlXLTDEuQQLES6OuTYvXS_VvxtWXb_-wSQLmxWo4wjXMeupasOE8fupuaar-E4hkz-AZdB0MyVot35Tt9j-hD-m4lGVP5J8E72SL4FWaXiSSWQAo3e8jvfy9gw107Gkj8Ltya66Ty5UzoNuMvdTFYTwCjgMXhrHyUWMZRacCyu6qtUx35OYqEJEskHkOXWn4fHWvzdQxNG3CfVq6jE809Y9oJ9gZLQ8NdqBU0tud3aoy71kDmw8nOxSg',
      logoUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBTRMMCb3_b4t-zfjDTFpkt5SNnicLM5r1zYkksA34QTam4-GWCaEo1d6n3u-FRRYPwdzMct6-E6rlnLAShCfZf7CU3UqX6mQAlUS-aQEvka9RCdq5-HETpjzpDNyx10gWOnotSiRt6l9-Wuh4KT9nAwk7Hv90MaLz4vOlgkAD9hya2DN4eEgbjUA7HCj1AC1bHjZNcs-gC7frbGnoU1mF9qF1f2XC-O4imDtUZdBuPb52MQmMW0vOk_g',
    },
    {
      id: 'test-2',
      quote:
        'Unparalleled curriculum depth. The data-driven modules empowered our senior management to pivot effectively during a volatile Q3.',
      name: 'David Chen',
      role: 'Managing Director',
      company: 'FinGlobal',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAFSwnm7pR__zyJAjM3Jpjw2uvtsZob57GUr69-o4hZc9zIfw6oXVIilWIDlxGAH7Q9TvrQ7_aKV_6zWOHYqRJW_p3CRkv0oPRrYE_-sea2VisolK1_RrQLlS15IqqNP6c31jdXaI9yR0y5ahoU2hfHRsGuoC0DCj6v0gfpQoclSX5gjfqq5NaGgLbaN5zyN19ZZRSP_7-ukb1nv9JA2f7X9EJjj_7kSygtudiNjIaolYrHzRzoERTBbw',
      logoUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBkk6GK8REiwX1Qt5Hr8Rav0-pfsLSrqXx4sfhTRpIHfC7uV7x0B4GJ68r8CQA8SHkWw9tNp-7DFpa_2dkV7hLMSP7mOdOkLbMk4IeRM2_pHqDHx1HE_TPZazIAc_m1xLRvab2Y-xaIpUX3Z9_s6SNL7u12r-4ClEnGW6eru44wHkHkj6AGbZqSoz6ONCpwzJ3OBM9NO-rCqUGSQMfQx8YZpcci8a8LhJda0WSD6rWQh9JP2ZdHRmRLhg',
    },
    {
      id: 'test-3',
      quote:
        'An extraordinary investment in our human capital. The cohort structure fostered invaluable cross-industry networking that continues to pay dividends.',
      name: 'Elena Rodriguez',
      role: 'COO',
      company: 'HealthLink Logistics',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDP_1rZtXTvXg-zd3trLCv6Dd2R4FJC6uDl4xxdjOCLxDsZPq1xCrN_DzVJX1iqYnzkAgiq7rBbvObxj0ldOc5r4LjtF2eUEwyCQSdLTeskbrZmVpxeEJcvJahFg8zk9OpzL39HemVWwt_BRTgaZKtyfweKICMKm_VHwXbnJ4uYkASre7W6fbEtvEGUyoYYI0X359gj_TnQfWJYkwCGR_LqF5Dzm0-YQ62y-Q8-i7w4acDW9ij0uK5UoQ',
      logoUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC1kUUXgjm33x6aiE0v5f0vEuIhaWWI6zAQUyZjVF4vwVj-T4ddGxFp2F4O_EpTBRseupk5eWA96VQG5zg63BjfkAgj8p2XzFsFs97EMFZ93XMEA0R31VQ4ENjqGmU5wdyKt-0PxyppXhbCuDmUwvxabF2MrIcE85l9B2D6Oz8fCq7jpkX47VNQ9V8wBvsZ5BH0A-erjatQr-T0G9XwByBCtXhglaSnAnk3pT92O36Aqc2zhuxLV3VYUA',
    },
  ];

  return (
    <section id="testimonials" className="snap-section bg-[#FFFFFF] text-slate-900 py-28 md:py-32 px-4 sm:px-6 lg:px-8 w-full border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Client"
          highlightText="Success"
          description="See how enterprise leaders transform their organizations with our executive education programs."
          mode="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
          {testimonials.map((test, idx) => (
            <TestimonialCard key={test.id} testimonial={test} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
