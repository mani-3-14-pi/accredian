import { useState, useRef, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { StatsSection } from './components/StatsSection';
import { FeatureGrid } from './components/FeatureGrid';
import { ProgramGrid } from './components/ProgramGrid';
import { HowItWorks } from './components/HowItWorks';
import { TestimonialSection } from './components/TestimonialSection';
import { FAQSection } from './components/FAQSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Global Page-Level Wheel Lockout — synced to browser CSS snap duration (~700ms)
  // The lockout MUST match the actual snap animation duration, not just a debounce.
  // We also listen for 'scrollend' to release the lock early once snap has settled.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isLocked = false;
    let lockTimer: ReturnType<typeof setTimeout> | null = null;

    const releaseLock = () => {
      isLocked = false;
      if (lockTimer) clearTimeout(lockTimer);
      lockTimer = null;
    };

    const handleWheel = (e: WheelEvent) => {
      // Ignore horizontal trackpad swipes
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      if (isLocked) {
        e.preventDefault();
        return;
      }

      // Lock immediately and release after 700ms (or on scrollend)
      isLocked = true;
      lockTimer = setTimeout(releaseLock, 700);
    };

    // Release lock as soon as the browser snap animation settles
    const handleScrollEnd = () => releaseLock();

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scrollend', handleScrollEnd);
    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scrollend', handleScrollEnd);
      if (lockTimer) clearTimeout(lockTimer);
    };
  }, []);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-auto snap-y-mandatory bg-[#F7FAFC] text-slate-900 flex flex-col font-sans antialiased selection:bg-[#8EC5FF]/30 selection:text-white relative"
    >
      {/* Navigation */}
      <NavBar
        onOpenDemo={() => setIsDemoModalOpen(true)}
        onNavigateToContact={scrollToContact}
      />

      {/* Main Page Scrollable Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onTalkToTeam={scrollToContact}
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* Content Wrapper to slide over sticky Hero */}
        <div className="relative z-10 bg-[#F7FAFC] shadow-xl">
          {/* Partner Logo Marquee */}
        <MarqueeStrip />

        {/* Live Metrics & Stats */}
        <StatsSection />

        {/* "Why Accredian Enterprise" Feature Grid */}
        <FeatureGrid />

        {/* Executive Program Specializations */}
        <ProgramGrid onTalkToTeam={scrollToContact} />

        {/* How It Works (4-Step Process) */}
        <HowItWorks />

        {/* Client Success Testimonials (Mode B Light Section) */}
        <TestimonialSection />

        {/* Frequently Asked Questions (Mode B Light Section) */}
        <FAQSection />

        {/* Lead Capture Consultation Form */}
          <ContactForm />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Platform Interactive Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        onTalkToTeam={scrollToContact}
      />
    </div>
  );
}
