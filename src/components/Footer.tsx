import React from 'react';
import { Compass, ArrowUp, ExternalLink } from 'lucide-react';
import { CAREER_CATEGORIES } from '../data/careersData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                CareerPath
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Discover Your Future — A comprehensive educational guidance platform empowering students to explore careers, understand academic pathways, and build high-demand skills.
            </p>

            <div className="flex items-center gap-2 text-xs text-purple-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>100% Static & Privacy-Focused Portal</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('careers')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Explore Careers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('courses')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Courses & Streams
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('skills')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Skills Development
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('quiz')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Career Quiz
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('roadmap')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Planning Roadmap
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Career Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Career Categories
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {CAREER_CATEGORIES.filter((c) => c !== 'All Careers').map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => scrollToSection('careers')}
                  className="text-[11px] bg-slate-800 hover:bg-purple-900/60 hover:text-purple-300 px-2.5 py-1 rounded-lg text-slate-300 transition-colors cursor-pointer"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Col 4: Official Educational Resources (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              National Portals
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="https://www.ncs.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <span>National Career Service (NCS)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://swayam.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <span>SWAYAM Free Online Courses</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.aicte-india.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <span>AICTE Student Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ugc.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <span>University Grants Commission (UGC)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Privacy Note */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-500 leading-relaxed space-y-2">
          <p>
            <strong>Educational & Informational Disclaimer:</strong> CareerPath is an open informational guide designed to facilitate educational exploration and self-discovery. Information regarding degrees, examinations, job roles, and career salaries is purely illustrative and varies by university, jurisdiction, and employer. CareerPath is not affiliated with any governmental or accreditation body.
          </p>
          <p>
            <strong>Privacy Guarantee:</strong> This application runs 100% statically in your browser client. No personal cookies, credentials, or answers are captured or stored on remote databases.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 CareerPath — Discover Your Future. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-purple-700 text-white font-semibold transition-all hover:shadow-md cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
