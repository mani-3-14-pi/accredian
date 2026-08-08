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
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Solutions', href: '#features' },
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
      <motion.nav
        id="main-nav"
        className={`fixed left-0 right-0 top-0 z-50 flex justify-center transition-all duration-300 ease-out ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3' 
            : 'bg-transparent border-b border-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <div className="flex items-center justify-between w-full px-6 md:px-12 lg:px-16 2xl:px-24">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="flex items-center gap-3 group relative shrink-0"
          >
            <img 
              src="/logo.webp" 
              alt="Accredian Logo" 
              className="h-7 md:h-8 object-contain group-hover:scale-105 transition-transform duration-300" 
              onError={(e) => {
                // Fallback if image fails to load
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden font-display text-2xl font-bold tracking-tight text-slate-900 group-hover:text-[#2F80FF] transition-colors">
              Accredian
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full group ${
                  link.active
                    ? 'text-[#2F80FF] bg-[#2F80FF]/5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                }`}
              >
                {link.name}
                {link.active && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#2F80FF] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenDemo}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 px-4 py-2 transition-colors"
            >
              Log in
            </button>
            <Button
              variant="primary"
              size="sm"
              onClick={onNavigateToContact}
              className="shadow-sm hover:shadow-md transition-shadow rounded-full px-6"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu_open'}
            </span>
          </button>
        </div>
      </motion.nav>

      {/* Full-Screen Animated Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 md:hidden flex flex-col pt-24 pb-8 px-6"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex-1 flex flex-col gap-6">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2 pl-2">
                Menu
              </p>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`font-display text-3xl font-semibold p-2 rounded-2xl transition-colors ${
                    link.active ? 'text-[#2F80FF] bg-[#2F80FF]/5' : 'text-slate-800 active:bg-slate-100'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div 
              className="flex flex-col gap-3 mt-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-2xl"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenDemo) onOpenDemo();
                }}
              >
                Log in
              </Button>
              <Button
                variant="primary"
                size="lg"
                className="w-full rounded-2xl"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigateToContact) onNavigateToContact();
                }}
              >
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
