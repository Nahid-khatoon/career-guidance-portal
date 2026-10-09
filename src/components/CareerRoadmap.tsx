import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Compass, ArrowRight } from 'lucide-react';
import { ROADMAP_STEPS } from '../data/portalData';
import type { RoadmapStep } from '../data/portalData';
import { DynamicIcon } from './IconHelper';

export const CareerRoadmap: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep: RoadmapStep = ROADMAP_STEPS[activeStepIndex];

  return (
    <section id="roadmap" className="py-20 bg-white border-t border-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 text-purple-700 text-xs font-bold mb-3 border border-purple-200">
            <Compass className="w-3.5 h-3.5" />
            STEP-BY-STEP STRATEGY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visual Career Planning Roadmap
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From initial curiosity to landing your first professional job, follow this tested 8-step chronological framework to build your career with purpose.
          </p>
        </div>

        {/* Responsive Connected Steps Bar (Horizontal on Desktop, Grid on Mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10">
          {ROADMAP_STEPS.map((item, index) => {
            const isSelected = activeStepIndex === index;
            return (
              <button
                key={item.step}
                type="button"
                onClick={() => setActiveStepIndex(index)}
                className={`p-3 rounded-2xl text-center transition-all duration-200 flex flex-col items-center justify-center cursor-pointer border ${
                  isSelected
                    ? 'bg-purple-700 text-white border-purple-700 shadow-md shadow-purple-600/30 scale-[1.03]'
                    : 'bg-slate-50 text-slate-600 hover:bg-purple-50 hover:text-purple-700 border-slate-200'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold mb-1.5 ${
                    isSelected ? 'bg-white text-purple-700' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {item.step}
                </div>
                <span className="text-[11px] font-bold line-clamp-1 leading-tight">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Showcase Card */}
        <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-12">
          {/* Ambient Orb */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left side: Step info & descriptions */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-purple-300 border border-white/10">
                  <DynamicIcon name={activeStep.iconName} className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                    Step {activeStep.step} of 8
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed">
                {activeStep.description}
              </p>

              {/* Action Tips */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-200 block">
                  Practical Guidance & Action Items:
                </span>
                <div className="space-y-2">
                  {activeStep.actionTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90 bg-white/5 p-3 rounded-xl border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Key Outcome Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                  <Sparkles className="w-4 h-4" />
                  Key Milestone Outcome
                </div>
                <h4 className="text-lg font-bold text-white leading-snug">
                  {activeStep.subtitle}
                </h4>
                <p className="text-xs sm:text-sm text-purple-100 leading-relaxed">
                  {activeStep.keyOutcome}
                </p>

                {/* Next Step Navigation */}
                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs text-purple-300">
                    {activeStepIndex < 7 ? `Up Next: Step ${activeStepIndex + 2}` : 'Final Step Completed!'}
                  </span>
                  {activeStepIndex < 7 && (
                    <button
                      type="button"
                      onClick={() => setActiveStepIndex((prev) => prev + 1)}
                      className="px-4 py-2 bg-white text-purple-900 rounded-xl text-xs font-bold hover:bg-purple-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* All Steps Responsive Timeline Grid */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 text-center mb-6">
            All 8 Steps Overview
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROADMAP_STEPS.map((s, idx) => (
              <div
                key={s.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  activeStepIndex === idx
                    ? 'bg-purple-50/80 border-purple-400 shadow-sm'
                    : 'bg-white hover:bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center">
                    {s.step}
                  </span>
                  <h5 className="text-sm font-bold text-slate-800">{s.title}</h5>
                </div>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
