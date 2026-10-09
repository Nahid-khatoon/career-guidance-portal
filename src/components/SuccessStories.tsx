import React from 'react';
import { Sparkles, Lightbulb } from 'lucide-react';
import { SUCCESS_STORIES } from '../data/portalData';

export const SuccessStories: React.FC = () => {
  return (
    <section id="stories" className="py-20 bg-slate-50/70 border-t border-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 text-purple-700 text-xs font-bold mb-3 border border-purple-200">
            <Sparkles className="w-3.5 h-3.5" />
            INSPIRATIONAL SCENARIOS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Illustrative Learning Journeys & Case Studies
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Realistic, non-fictional educational scenarios showing how students navigate non-traditional pathways, competitive exams, vocational diplomas, and creative portfolios.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {SUCCESS_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${story.tagColor}`}>
                    {story.domain}
                  </span>
                  <span className="text-xs text-slate-400 font-medium italic">
                    {story.profileName}
                  </span>
                </div>

                {/* Scenario Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                  {story.scenarioTitle}
                </h3>

                {/* Pathway Tag */}
                <div className="inline-block text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100 mb-4">
                  Pathway: {story.pathway}
                </div>

                {/* Challenge & Action Narrative */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 mb-5">
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <strong className="text-slate-800 block mb-0.5">The Challenge:</strong>
                    {story.challenge}
                  </div>

                  <div className="bg-purple-50/50 p-3.5 rounded-2xl border border-purple-100/70">
                    <strong className="text-purple-900 block mb-0.5">The Strategy & Action Taken:</strong>
                    {story.actionTaken}
                  </div>

                  <div className="bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-100 text-emerald-950">
                    <strong className="text-emerald-900 block mb-0.5">The Result:</strong>
                    {story.outcome}
                  </div>
                </div>
              </div>

              {/* Bottom Key Takeaway Card */}
              <div className="pt-4 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-700">
                <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-slate-900">Core Takeaway:</strong> {story.keyTakeaway}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Notice Banner */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          <em>Note:</em> The profiles and pathways above represent typical educational scenarios and best practice learning strategies designed for student inspiration, not commercial testimonials.
        </div>

      </div>
    </section>
  );
};
