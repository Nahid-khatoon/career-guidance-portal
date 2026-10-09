import React, { useEffect } from 'react';
import { X, CheckCircle, GraduationCap, MapPin, Briefcase, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import type { CareerItem } from '../data/careersData';
import { DynamicIcon } from './IconHelper';

interface CareerModalProps {
  career: CareerItem | null;
  onClose: () => void;
  onSelectRelated?: (careerTitle: string) => void;
}

export const CareerModal: React.FC<CareerModalProps> = ({ career, onClose, onSelectRelated }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (career) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [career, onClose]);

  if (!career) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="career-modal-title"
    >
      <div
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${career.badgeColor} text-white relative`}>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close career details modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 pr-8">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner flex-shrink-0">
              <DynamicIcon name={career.iconName} className="w-7 h-7" />
            </div>
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-xs mb-1.5 border border-white/20">
                {career.category}
              </span>
              <h2 id="career-modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {career.title}
              </h2>
              <p className="text-white/90 text-sm mt-1 max-w-xl font-normal leading-relaxed">
                {career.shortDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 text-slate-700">
          
          {/* Overview */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-700 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Career Overview
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base bg-slate-50 p-4 rounded-2xl border border-slate-100">
              {career.overview}
            </p>
          </div>

          {/* Typical Responsibilities */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-700 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Typical Responsibilities
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {career.responsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Required Skills (Technical & Soft) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-purple-50/60 rounded-2xl p-4 border border-purple-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-2.5">
                Technical Proficiencies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {career.requiredSkills.technical.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-white text-purple-800 px-2.5 py-1 rounded-lg border border-purple-200/70 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-indigo-50/60 rounded-2xl p-4 border border-indigo-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 mb-2.5">
                Soft & Interpersonal Skills
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {career.requiredSkills.soft.map((soft, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-white text-indigo-800 px-2.5 py-1 rounded-lg border border-indigo-200/70 shadow-2xs"
                  >
                    {soft}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Relevant Degrees or Qualifications */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-700 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Degrees & Qualifications
            </h3>
            <ul className="space-y-2">
              {career.qualifications.map((qual, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                  <span>{qual}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Beginner Learning Roadmap */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-700 mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Beginner Learning Roadmap
            </h3>
            <div className="space-y-3">
              {career.learningRoadmap.map((item) => (
                <div key={item.step} className="flex gap-3 sm:gap-4 items-start p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70">
                  <div className="w-7 h-7 rounded-xl bg-purple-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">{item.title}</h5>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Example Job Roles & Related Careers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Example Job Roles
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {career.exampleJobRoles.map((role, i) => (
                  <span key={i} className="text-xs font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Related Careers
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {career.relatedCareers.map((rel, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (onSelectRelated) onSelectRelated(rel);
                    }}
                    className="text-xs font-semibold bg-purple-50 hover:bg-purple-100 text-purple-700 px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{rel}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Clear Disclaimer */}
          <div className="bg-amber-50/80 rounded-2xl p-4 border border-amber-200/80 flex items-start gap-3 text-amber-900 text-xs">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Notice:</strong> Qualifications, salary bands, and admission requirements can vary by employer, educational institution, and geographical region. Always consult respective college notices and job descriptions for precise criteria.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
