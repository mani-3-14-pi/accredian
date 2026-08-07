import React from 'react';

export const MarqueeStrip: React.FC = () => {
  const partners = [
    'IIM LUCKNOW',
    'IIT ROORKEE',
    'MICROSOFT',
    'AMAZON',
    'KPMG',
    'HARVARD EXECUTIVE',
    'GOOGLE',
    'DELOITTE',
  ];

  // Double array for seamless loop
  const marqueeItems = [...partners, ...partners];

  return (
    <section id="marquee" className="bg-[#0b1c30] py-10 border-y border-[#494454]/40 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <h3 className="text-xs md:text-sm font-semibold text-[#cbc3d7] uppercase tracking-widest">
          Trusted by industry leaders & prestigious institutions
        </h3>
      </div>

      <div className="marquee-container w-full py-2">
        <div className="marquee-content flex gap-12 sm:gap-20 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#d3e4fe] tracking-tight whitespace-nowrap hover:text-[#d0bcff] transition-colors cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
