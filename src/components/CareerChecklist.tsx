import React, { useState } from 'react';
import { CheckSquare, RotateCcw, CheckCircle2, Trophy } from 'lucide-react';
import { CHECKLIST_ITEMS } from '../data/portalData';

export const CareerChecklist: React.FC = () => {
  // State for tracked task IDs
  const [completedTaskIds, setCompletedTaskIds] = useState<Record<string, boolean>>({
    'check-1': true, // Pre-check first one for welcoming UX
  });

  const totalTasks = CHECKLIST_ITEMS.length;
  const completedCount = Object.values(completedTaskIds).filter(Boolean).length;
  const percentage = Math.round((completedCount / totalTasks) * 100);

  const toggleTask = (id: string) => {
    setCompletedTaskIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleReset = () => {
    setCompletedTaskIds({});
  };

  const handleSelectAll = () => {
    const allChecked: Record<string, boolean> = {};
    CHECKLIST_ITEMS.forEach((item) => {
      allChecked[item.id] = true;
    });
    setCompletedTaskIds(allChecked);
  };

  return (
    <section id="checklist" className="py-20 bg-white border-t border-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            INTERACTIVE TRACKER
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Career Planning Action Checklist
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Check off key preparation milestones as you explore, learn, and position yourself for your dream career.
          </p>
        </div>

        {/* Progress & Stat Header Card */}
        <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-lg shadow-purple-900/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-purple-200">
                Your Progress Tracker
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                {completedCount} of {totalTasks} Tasks Completed
              </h3>
            </div>

            <div className="flex items-center gap-2">
              {percentage === 100 ? (
                <div className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-sm animate-bounce">
                  <Trophy className="w-4 h-4" />
                  All Done! Ready to Launch!
                </div>
              ) : (
                <span className="text-2xl font-extrabold text-purple-200">
                  {percentage}%
                </span>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden p-0.5">
            <div
              className="bg-emerald-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* Quick encouragement message */}
          <p className="text-xs text-purple-100/90 mt-3 italic">
            {percentage === 0 && 'Select your first task below to begin your career preparation journey!'}
            {percentage > 0 && percentage < 50 && 'Great start! Consistency in early steps builds immense confidence.'}
            {percentage >= 50 && percentage < 100 && 'More than halfway there! Your portfolio and skills are coming together.'}
            {percentage === 100 && 'Outstanding dedication! You have covered all key milestones of student career readiness.'}
          </p>
        </div>

        {/* Checklist Items Container */}
        <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80 space-y-3.5 mb-6">
          {CHECKLIST_ITEMS.map((item, index) => {
            const isChecked = !!completedTaskIds[item.id];

            return (
              <div
                key={item.id}
                onClick={() => toggleTask(item.id)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 cursor-pointer select-none ${
                  isChecked
                    ? 'bg-purple-50/60 border-purple-300 shadow-2xs'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                }`}
              >
                {/* Checkbox Icon */}
                <button
                  type="button"
                  aria-label={`Toggle ${item.text}`}
                  className="mt-0.5 text-purple-700 flex-shrink-0 focus:outline-none"
                >
                  {isChecked ? (
                    <div className="w-6 h-6 rounded-lg bg-purple-700 text-white flex items-center justify-center shadow-xs">
                      <CheckSquare className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-lg border-2 border-slate-300 hover:border-purple-500 bg-white" />
                  )}
                </button>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-100/70 px-2 py-0.5 rounded-md">
                      Step {index + 1} • {item.category}
                    </span>
                  </div>
                  <h4
                    className={`text-sm sm:text-base font-bold transition-colors ${
                      isChecked ? 'line-through text-slate-400' : 'text-slate-900'
                    }`}
                  >
                    {item.text}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Controls: Reset & Quick Mark */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleSelectAll}
              className="px-4 py-2 text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors cursor-pointer"
            >
              Mark All as Completed
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Checklist</span>
            </button>
          </div>

          <span className="text-xs text-slate-400">
            Interactive frontend session only • No database storage
          </span>
        </div>

      </div>
    </section>
  );
};
