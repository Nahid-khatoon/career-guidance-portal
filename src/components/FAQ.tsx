import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data/portalData';

export const FAQ: React.FC = () => {
  // Allow toggling multiple or single item (first item open by default)
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 text-purple-700 text-xs font-bold mb-3 border border-purple-200">
            <HelpCircle className="w-3.5 h-3.5" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clear Answers for Your Career Queries
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Practical guidance on choosing pathways, finding beginner internships, and developing resilient career foundations.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-purple-300 bg-purple-50/30 shadow-xs'
                    : 'border-slate-200 hover:border-purple-200 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-1 rounded-md hidden sm:inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {item.question}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-purple-100/60 pt-3 animate-in fade-in duration-200">
                    <p className="bg-white p-4 rounded-xl border border-slate-100 text-slate-700">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Card */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">Have a specific question not covered here?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Reach out via our interactive contact form below for academic guidance questions.</p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold transition-colors flex items-center gap-1.5 flex-shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask a Question</span>
          </a>
        </div>

      </div>
    </section>
  );
};
