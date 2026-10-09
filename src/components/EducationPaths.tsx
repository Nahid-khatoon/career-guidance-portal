import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Clock,
  ChevronRight,
  X,
  AlertCircle
} from 'lucide-react';
import { COURSE_STREAMS, EDUCATION_STAGES } from '../data/educationData';
import type { CourseStream } from '../data/educationData';
import { DynamicIcon } from './IconHelper';

export const EducationPaths: React.FC = () => {
  const [activeStageTab, setActiveStageTab] = useState<string>('after-10');
  const [selectedStreamModal, setSelectedStreamModal] = useState<CourseStream | null>(null);

  const currentStage = EDUCATION_STAGES.find((s) => s.stageId === activeStageTab) || EDUCATION_STAGES[0];

  return (
    <section id="courses" className="py-20 bg-white border-t border-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 text-purple-700 text-xs font-bold mb-3 border border-purple-200">
            <GraduationCap className="w-3.5 h-3.5" />
            ACADEMIC STREAM BLUEPRINTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Choose Your Learning Path
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Understand subjects, required degrees, and typical career horizons across major academic streams, plus educational stage choices from school to post-graduate studies.
          </p>
        </div>

        {/* 8 Course Stream Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {COURSE_STREAMS.map((stream) => (
            <div
              key={stream.id}
              className={`rounded-3xl p-6 border ${stream.colorScheme.border} ${stream.colorScheme.bgLight} hover:shadow-lg transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-purple-700">
                    <DynamicIcon name={stream.iconName} className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${stream.colorScheme.badgeBg}`}>
                    {stream.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{stream.title}</h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed line-clamp-2">
                  {stream.shortSummary}
                </p>

                {/* Relevant Subjects */}
                <div className="space-y-3 pt-3 border-t border-black/5 text-xs">
                  <div>
                    <span className="font-bold text-slate-700 block mb-1">Key Subjects:</span>
                    <p className="text-slate-600 line-clamp-2">
                      {stream.relevantSubjects.slice(0, 3).join(', ')}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-slate-700 block mb-1">Degrees & Certifications:</span>
                    <p className="text-slate-600 line-clamp-2">
                      {stream.possibleQualifications.slice(0, 2).join(' • ')}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-slate-700 block mb-1">Career Options:</span>
                    <p className="text-slate-600 line-clamp-2">
                      {stream.exampleCareerOptions.slice(0, 3).join(', ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="pt-5 mt-4 border-t border-black/5">
                <button
                  type="button"
                  onClick={() => setSelectedStreamModal(stream)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-white hover:bg-slate-900 hover:text-white text-slate-800 border border-slate-200 transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Educational Stages Section */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 block mb-1">
              DECISION MILESTONES
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Educational Pathways by Milestone
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Select your current education stage to see common pathways, timelines, and transition guidance.
            </p>
          </div>

          {/* Milestone Tabs */}
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Education Milestones">
            {EDUCATION_STAGES.map((stage) => {
              const isSelected = activeStageTab === stage.stageId;
              return (
                <button
                  key={stage.stageId}
                  onClick={() => setActiveStageTab(stage.stageId)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-purple-700 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-purple-50 hover:text-purple-700 border border-slate-200'
                  }`}
                  role="tab"
                  aria-selected={isSelected}
                >
                  {stage.title}
                </button>
              );
            })}
          </div>

          {/* Active Milestone Options Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-sm font-bold text-slate-800">{currentStage.title} Options</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-purple-700">
                {currentStage.badge}
              </span>
            </div>

            <p className="text-sm text-slate-600 italic">
              {currentStage.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              {currentStage.options.map((opt, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">{opt.name}</h4>
                      <span className="text-[11px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md flex items-center gap-1 flex-shrink-0">
                        <Clock className="w-3 h-3" />
                        {opt.duration}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {opt.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">
                      Next Progression:
                    </span>
                    <p className="text-xs text-purple-900 font-medium leading-relaxed">
                      {opt.nextSteps}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility Disclaimer Notice */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-start gap-3 text-xs text-slate-500">
            <AlertCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Important Institutional Note:</strong> Specific eligibility criteria, cutoffs, minimum percentage requirements, and entrance procedures vary widely by university, state technical board, and country. Always verify criteria on the official portal of your prospective institution.
            </p>
          </div>
        </div>

      </div>

      {/* Stream Deep Dive Modal */}
      {selectedStreamModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedStreamModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStreamModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <DynamicIcon name={selectedStreamModal.iconName} className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                  {selectedStreamModal.durationTypical}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {selectedStreamModal.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
              {selectedStreamModal.deepDive.overview}
            </p>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-600" />
                  Curriculum Highlights
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStreamModal.deepDive.curriculumHighlights.map((curr, idx) => (
                    <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-lg">
                      {curr}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-indigo-600" />
                  Recognized Institutes & Colleges
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStreamModal.deepDive.topInstitutes.map((inst, idx) => (
                    <span key={idx} className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-lg border border-purple-100">
                      {inst}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-amber-400 text-white font-bold flex items-center justify-center text-[10px]">★</span>
                  Recommended Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStreamModal.deepDive.recommendedCertifications.map((cert, idx) => (
                    <span key={idx} className="text-xs bg-amber-50 text-amber-800 px-3 py-1 rounded-lg border border-amber-100">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedStreamModal(null)}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold cursor-pointer"
              >
                Close Stream Guide
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
