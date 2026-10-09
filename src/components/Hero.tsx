import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Compass, Award, Target, BookOpen } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onQuizClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onQuizClick }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute top-12 right-1/4 w-96 h-96 bg-indigo-300/25 rounded-full blur-3xl" />
        <div className="absolute -top-10 right-10 w-64 h-64 bg-sky-200/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Copy, Actions & Highlights */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-50 via-indigo-50 to-sky-50 border border-purple-200 text-purple-800 text-xs font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>YOUR FUTURE STARTS HERE</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Discover Your Passion.{' '}
              <span className="block mt-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                Build Your Future.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Explore career opportunities, discover your strengths, learn about essential skills, and find educational pathways that align with your interests and ambitions.
            </p>

            {/* Primary & Secondary Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-700 shadow-lg shadow-purple-600/25 hover:shadow-xl hover:shadow-purple-600/35 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Careers</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onQuizClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:border-purple-300 hover:text-purple-700 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-purple-600" />
                <span>Take Career Quiz</span>
              </button>
            </div>

            {/* Highlight Indicators */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0">
                <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-purple-100 shadow-xs text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-purple-700">50+</div>
                  <div className="text-xs font-semibold text-slate-800">Career Profiles</div>
                  <div className="text-[11px] text-slate-500 hidden sm:block">Detailed guides</div>
                </div>

                <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-indigo-100 shadow-xs text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-indigo-700">Multiple</div>
                  <div className="text-xs font-semibold text-slate-800">Learning Paths</div>
                  <div className="text-[11px] text-slate-500 hidden sm:block">Degrees & Diplomas</div>
                </div>

                <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-sky-100 shadow-xs text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-sky-700">Rich</div>
                  <div className="text-xs font-semibold text-slate-800">Career Resources</div>
                  <div className="text-[11px] text-slate-500 hidden sm:block">Guides & Roadmaps</div>
                </div>
              </div>

              <p className="text-[11px] text-slate-600 mt-2.5 italic">
                * Note: Figures and metrics represent illustrative educational content, not verified commercial listings.
              </p>
            </div>
          </div>

          {/* Right Column: Hero Graphic & Floating Information Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Illustration Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/15 border-4 border-white bg-gradient-to-b from-purple-100/50 to-indigo-50/50">
                <img
                  src="/hero-illustration.jpg"
                  alt="Career exploration illustration showing students and pathways to technology, design, and science"
                  className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
                  loading="eager"
                />

                {/* Gradient Overlay for aesthetic edge */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Card 1: Discover Your Strengths (Top Right) */}
              <div className="absolute -top-5 -right-3 sm:-right-6 glass-card p-3 sm:p-3.5 rounded-2xl shadow-lg border border-white/80 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">Discover Your Strengths</div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    Aptitude & Interests
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Learn In-Demand Skills (Middle Left) */}
              <div className="absolute top-1/2 -left-3 sm:-left-8 -translate-y-1/2 glass-card p-3 sm:p-3.5 rounded-2xl shadow-lg border border-white/80 flex items-center gap-3 animate-float-reverse">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">Learn In-Demand Skills</div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block" />
                    Tech, Soft & Creative
                  </div>
                </div>
              </div>

              {/* Floating Card 3: Plan Your Career (Bottom Right) */}
              <div className="absolute -bottom-5 right-2 sm:right-4 glass-card p-3 sm:p-3.5 rounded-2xl shadow-lg border border-white/80 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-800 flex items-center justify-center text-white shadow-md">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">Plan Your Career</div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    Step-by-Step Roadmaps
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
