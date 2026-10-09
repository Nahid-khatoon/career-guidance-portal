import React, { useState, useMemo } from 'react';
import { Search, Sparkles, ArrowRight, GraduationCap, X } from 'lucide-react';
import { CAREERS_DATA, CAREER_CATEGORIES } from '../data/careersData';
import type { CareerItem } from '../data/careersData';
import { DynamicIcon } from './IconHelper';
import { CareerModal } from './CareerModal';

export const CareerExplorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Careers');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCareer, setSelectedCareer] = useState<CareerItem | null>(null);

  // Filter careers based on search term & category
  const filteredCareers = useMemo(() => {
    return CAREERS_DATA.filter((career) => {
      const matchesCategory =
        selectedCategory === 'All Careers' || career.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        career.title.toLowerCase().includes(q) ||
        career.shortDescription.toLowerCase().includes(q) ||
        career.educationPathway.toLowerCase().includes(q) ||
        career.skills.some((s) => s.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Handle click on related career in modal
  const handleSelectRelated = (relatedTitle: string) => {
    const found = CAREERS_DATA.find(
      (c) => c.title.toLowerCase().includes(relatedTitle.toLowerCase()) || relatedTitle.toLowerCase().includes(c.title.toLowerCase())
    );
    if (found) {
      setSelectedCareer(found);
    } else {
      setSelectedCareer(null);
      setSearchQuery(relatedTitle);
    }
  };

  return (
    <section id="careers" className="py-20 bg-slate-50/60 border-t border-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 text-purple-700 text-xs font-bold mb-3 border border-purple-200">
            <Sparkles className="w-3.5 h-3.5" />
            CAREER PROFILES DIRECTORY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Careers That Match Your Interests
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Discover in-depth career guides across engineering, healthcare, digital technology, creative arts, and governance. Find requirements, skill roadmaps, and career growth trajectories.
          </p>
        </div>

        {/* Search Bar & Filters Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-slate-200/80 mb-10 space-y-4">
          
          {/* Search Input Bar */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search careers by title, skills (e.g. Python, Figma, AutoCAD), or qualification..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm text-slate-800 placeholder-slate-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                aria-label="Clear search input"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1" role="tablist" aria-label="Career Categories">
            {CAREER_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-purple-700 text-white shadow-sm shadow-purple-600/30'
                      : 'bg-slate-100 text-slate-600 hover:bg-purple-50 hover:text-purple-700'
                  }`}
                  role="tab"
                  aria-selected={isSelected}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span>
              Showing <strong className="text-slate-800 font-bold">{filteredCareers.length}</strong> of{' '}
              {CAREERS_DATA.length} careers
            </span>
            {(selectedCategory !== 'All Careers' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('All Careers');
                  setSearchQuery('');
                }}
                className="text-purple-600 hover:text-purple-800 font-semibold cursor-pointer underline"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Career Cards Grid */}
        {filteredCareers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCareers.map((career) => (
              <div
                key={career.id}
                className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Category */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className={`w-13 h-13 rounded-2xl bg-gradient-to-tr ${career.badgeColor} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300`}
                    >
                      <DynamicIcon name={career.iconName} className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {career.category}
                    </span>
                  </div>

                  {/* Career Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {career.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3">
                    {career.shortDescription}
                  </p>

                  {/* Skills Badges */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Key In-Demand Skills
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {career.skills.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="text-xs font-medium px-2.5 py-0.5 rounded-lg bg-purple-50 text-purple-700 border border-purple-100"
                        >
                          {skill}
                        </span>
                      ))}
                      {career.skills.length > 3 && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-lg bg-slate-100 text-slate-500">
                          +{career.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Educational Pathway snippet */}
                  <div className="mt-3.5 bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                      <GraduationCap className="w-3.5 h-3.5 text-purple-600" />
                      <span>Pathway</span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {career.educationPathway}
                    </p>
                  </div>
                </div>

                {/* Explore Details CTA */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedCareer(career)}
                    className="w-full py-2.5 px-4 rounded-xl text-sm font-bold text-purple-700 bg-purple-50 hover:bg-purple-700 hover:text-white border border-purple-200 hover:border-purple-700 transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <span>Explore Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">No Careers Found</h3>
            <p className="text-sm text-slate-500 mt-2 mb-6">
              We couldn’t find any career matching "{searchQuery}" in "{selectedCategory}". Try clearing your search term or exploring other categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Careers');
              }}
              className="px-5 py-2.5 bg-purple-700 text-white text-sm font-bold rounded-xl hover:bg-purple-800 transition-colors cursor-pointer"
            >
              Show All 12 Careers
            </button>
          </div>
        )}

      </div>

      {/* Career Details Modal */}
      <CareerModal
        career={selectedCareer}
        onClose={() => setSelectedCareer(null)}
        onSelectRelated={handleSelectRelated}
      />
    </section>
  );
};
