import React, { useState } from 'react';
import {
  FileText,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Clock,
  Landmark,
  BookOpen
} from 'lucide-react';
import {
  RESOURCE_GUIDES,
  OFFICIAL_RESOURCES
} from '../data/portalData';

export const Resources: React.FC = () => {
  const [expandedGuideId, setExpandedGuideId] = useState<string | null>('resume-writing');

  const toggleGuide = (id: string) => {
    setExpandedGuideId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="resources" className="py-20 bg-slate-50/70 border-t border-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 text-purple-700 text-xs font-bold mb-3 border border-purple-200">
            <BookOpen className="w-3.5 h-3.5" />
            PRACTICAL TOOLKITS & OFFICIAL DIRECTORY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Resume, Interview & Career Resources
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Essential actionable frameworks for resume crafting, interview confidence, and recognized national educational portals for skill certification.
          </p>
        </div>

        {/* Part A: 6 Expandable Information Guides */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-600" />
              <span>Career Preparation Playbooks</span>
            </h3>
            <span className="text-xs text-slate-500 font-medium">Click to expand any guide</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCE_GUIDES.map((guide) => {
              const isExpanded = expandedGuideId === guide.id;

              return (
                <div
                  key={guide.id}
                  className={`bg-white rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    isExpanded
                      ? 'border-purple-400 shadow-md ring-1 ring-purple-400/30'
                      : 'border-slate-200 hover:border-purple-200 shadow-2xs'
                  }`}
                >
                  <div className="p-6">
                    {/* Top Meta */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                        {guide.category}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3" />
                        {guide.readTime}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {guide.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {guide.summary}
                    </p>

                    {/* Key takeaways bullet points */}
                    <div className="space-y-1.5 mb-4">
                      {guide.keyPoints.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expanded Detail Sections */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-100 space-y-4 animate-in fade-in duration-200">
                        {/* Actionable Tips */}
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-2">
                            Actionable Pro Tips:
                          </span>
                          <ul className="space-y-1.5">
                            {guide.actionableTips.map((tip, i) => (
                              <li key={i} className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 leading-relaxed">
                                • {tip}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Dos & Don'ts */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-100">
                            <span className="text-[11px] font-bold text-emerald-800 flex items-center gap-1 mb-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Recommended
                            </span>
                            <ul className="space-y-1 text-[11px] text-emerald-900">
                              {guide.dosAndDonts.dos.map((d, i) => (
                                <li key={i}>✓ {d}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-rose-50/60 p-3 rounded-xl border border-rose-100">
                            <span className="text-[11px] font-bold text-rose-800 flex items-center gap-1 mb-1.5">
                              <XCircle className="w-3.5 h-3.5" /> Avoid
                            </span>
                            <ul className="space-y-1 text-[11px] text-rose-900">
                              {guide.dosAndDonts.donts.map((d, i) => (
                                <li key={i}>✕ {d}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Expand / Collapse Button */}
                  <div className="p-4 bg-slate-50 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => toggleGuide(guide.id)}
                      className="w-full py-2 px-3 rounded-xl text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Collapse Guide' : 'Read Full Guide & Tips'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Guarantee Disclaimer */}
          <div className="mt-6 bg-slate-100 p-4 rounded-2xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Disclaimer:</strong> Sample resumes, templates, interview techniques, and career guides provided here are educational reference frameworks. They do not guarantee job offers, interview calls, or formal employment.
            </p>
          </div>
        </div>

        {/* Part B: Verified Official Resources Section */}
        <div>
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
              <Landmark className="w-3.5 h-3.5" />
              VERIFIED PORTALS
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Official Educational & Career Portals
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Explore recognized national higher education platforms, verified apprenticeship directories, and open university MOOCs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFICIAL_RESOURCES.map((res) => (
              <div
                key={res.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {res.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{res.domain}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                    {res.name}
                  </h4>
                  <p className="text-xs text-purple-700 font-medium mb-3">
                    {res.organization}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <strong>Useful for:</strong> {res.usefulFor}
                  </p>

                  <div className="space-y-1 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Services Provided:
                    </span>
                    <ul className="space-y-1">
                      {res.keyServices.map((srv, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span>{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100">
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-1.5 group"
                    aria-label={`Visit official website of ${res.name} (opens in new tab)`}
                  >
                    <span>Visit Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-purple-50/70 p-4 rounded-2xl border border-purple-100 text-xs text-purple-900">
            <strong>Transparency Notice:</strong> CareerPath is an independent, free educational guidance portal and is not formally affiliated with, funded by, or officially representing any government department or regulatory body. Links point directly to verified public government web addresses for student benefit.
          </div>
        </div>

      </div>
    </section>
  );
};
