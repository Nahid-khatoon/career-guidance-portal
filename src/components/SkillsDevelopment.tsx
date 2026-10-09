import React, { useState, useMemo } from 'react';
import {
  Lightbulb,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Target
} from 'lucide-react';
import { SKILLS_DATA, SKILL_CATEGORIES } from '../data/skillsData';
import { DynamicIcon } from './IconHelper';

export const SkillsDevelopment: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Skills');
  const [expandedSkillId, setExpandedSkillId] = useState<string | null>(null);

  const filteredSkills = useMemo(() => {
    if (selectedCategory === 'All Skills') return SKILLS_DATA;
    return SKILLS_DATA.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  const toggleExpand = (id: string) => {
    setExpandedSkillId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="skills" className="py-20 bg-slate-50/70 border-t border-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/80 text-indigo-800 text-xs font-bold mb-3 border border-indigo-200">
            <Target className="w-3.5 h-3.5" />
            CORE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Build Skills for Tomorrow
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Technical and interpersonal abilities define professional success. Learn why each competency matters and start practicing with beginner-friendly daily activities.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist" aria-label="Skill Categories">
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-purple-700 text-white shadow-sm shadow-purple-600/30'
                    : 'bg-white text-slate-700 hover:bg-purple-50 hover:text-purple-700 border border-slate-200'
                }`}
                role="tab"
                aria-selected={isSelected}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const isExpanded = expandedSkillId === skill.id;

            return (
              <div
                key={skill.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center shadow-xs">
                      <DynamicIcon name={skill.iconName} className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${skill.badgeColor}`}>
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {skill.description}
                  </p>

                  {/* Why it Matters */}
                  <div className="bg-purple-50/60 p-3 rounded-xl border border-purple-100/80 mb-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-purple-900 mb-1">
                      <Lightbulb className="w-3.5 h-3.5 text-purple-600" />
                      <span>Why It Matters</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {skill.whyItMatters}
                    </p>
                  </div>

                  {/* Beginner Practice Ideas */}
                  <div className="space-y-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Beginner Practice Ideas:
                    </span>
                    <ul className="space-y-1.5">
                      {skill.beginnerPracticeIdeas.slice(0, isExpanded ? 3 : 2).map((idea, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{idea}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suggested Activities */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-100 space-y-2 animate-in fade-in duration-200">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 block">
                        Suggested Learning Activities:
                      </span>
                      <ul className="space-y-1.5">
                        {skill.suggestedActivities.map((act, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg">
                            <BookOpen className="w-3.5 h-3.5 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Expand / View Details Button */}
                <div className="pt-4 mt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => toggleExpand(skill.id)}
                    className="w-full py-2 px-3 rounded-xl text-xs font-bold text-purple-700 hover:text-white bg-purple-50 hover:bg-purple-700 border border-purple-200 hover:border-purple-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Show Less' : 'View Practice Roadmap'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
