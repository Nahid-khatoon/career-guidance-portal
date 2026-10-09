import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'careers', 'courses', 'skills', 'quiz', 'roadmap', 'resources', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(id);
    }
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'Explore Careers', href: 'careers' },
    { name: 'Courses', href: 'courses' },
    { name: 'Skills', href: 'skills' },
    { name: 'Career Quiz', href: 'quiz' },
    { name: 'Roadmap', href: 'roadmap' },
    { name: 'Resources', href: 'resources' },
    { name: 'Contact', href: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-purple-100 py-3'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
              <Compass className="w-5 h-5 transition-transform group-hover:rotate-45 duration-500" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-700 bg-clip-text text-transparent">
                  CareerPath
                </span>
                <span className="hidden sm:inline-flex items-center text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-purple-100 text-purple-700 border border-purple-200">
                  Portal
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 leading-none mt-0.5">
                Discover Your Future
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-purple-700 bg-purple-50'
                      : 'text-slate-600 hover:text-purple-700 hover:bg-slate-100/70'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scrollToSection('quiz')}
              className="text-xs font-semibold text-purple-700 hover:text-purple-900 px-3 py-2 rounded-lg hover:bg-purple-50 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-500" />
              Quiz
            </button>
            <button
              onClick={() => scrollToSection('careers')}
              className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-700 rounded-xl shadow-sm shadow-purple-600/20 hover:shadow-md hover:shadow-purple-600/30 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Careers</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-purple-700 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-purple-100 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1 mb-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-left px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                  activeSection === link.href
                    ? 'bg-purple-50 text-purple-700'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-purple-700'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => scrollToSection('quiz')}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Take Career Quiz
            </button>
            <button
              onClick={() => scrollToSection('careers')}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Careers</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
