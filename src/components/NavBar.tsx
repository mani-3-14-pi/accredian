import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/Button';

interface NavBarProps {
  onOpenDemo?: () => void;
  onNavigateToContact?: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({ onOpenDemo, onNavigateToContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Solutions', href: '#features' },
    { name: 'Enterprise', href: '#hero', active: true },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#031427]/90 backdrop-blur-xl border-b border-white/10 shadow-lg py-3'
            : 'bg-transparent backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[#d3e4fe] flex items-center gap-2 group"
          >
            <span className="text-[#d0bcff] group-hover:text-white transition-colors">Accredian</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#6d3bd7]/30 text-[#d0bcff] border border-[#6d3bd7]/50 font-medium hidden sm:inline-block">
              ENTERPRISE
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm font-semibold transition-all duration-200 ${
                  link.active
                    ? 'text-[#d0bcff] border-b-2 border-[#d0bcff] pb-1'
                    : 'text-[#cbc3d7] hover:text-[#d0bcff]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="glass"
              size="sm"
              onClick={onOpenDemo}
            >
              Demo
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={onNavigateToContact}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#d3e4fe] hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Full-Screen Animated Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#080B14]/95 backdrop-blur-2xl z-40 md:hidden flex flex-col px-6 pt-24 pb-12 justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-6">
              <p className="text-xs uppercase tracking-widest text-[#958ea0] font-semibold mb-2">
                Enterprise Navigation
              </p>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`font-display text-2xl font-bold transition-colors ${
                    link.active ? 'text-[#d0bcff]' : 'text-[#d3e4fe] hover:text-[#d0bcff]'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <Button
                variant="purple"
                size="lg"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigateToContact) onNavigateToContact();
                }}
              >
                Talk to Enterprise Team
              </Button>
              <Button
                variant="glass"
                size="lg"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenDemo) onOpenDemo();
                }}
              >
                View Platform Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
