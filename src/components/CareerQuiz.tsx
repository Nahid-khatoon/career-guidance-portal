import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Award
} from 'lucide-react';
import { QUIZ_QUESTIONS, CATEGORY_DETAILS } from '../data/quizData';
import type { QuizQuestion } from '../data/quizData';

export const CareerQuiz: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentQuestion: QuizQuestion = QUIZ_QUESTIONS[currentIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const progressPercent = Math.round(((currentIndex + (isFinished ? 1 : 0)) / totalQuestions) * 100);

  // Handle option selection
  const handleSelectOption = (optionId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  // Next Question
  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  // Previous Question
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Restart Quiz
  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsFinished(false);
  };

  // Calculate results dynamically based on category scores
  const scoreResults = React.useMemo(() => {
    const scores: Record<string, number> = {
      technology: 0,
      creative: 0,
      business: 0,
      engineering: 0,
      healthcare: 0,
      governance: 0,
    };

    QUIZ_QUESTIONS.forEach((q) => {
      const selectedOptionId = selectedAnswers[q.id];
      if (selectedOptionId) {
        const option = q.options.find((opt) => opt.id === selectedOptionId);
        if (option && option.categoryScores) {
          Object.entries(option.categoryScores).forEach(([cat, val]) => {
            scores[cat] = (scores[cat] || 0) + (val || 0);
          });
        }
      }
    });

    const sortedCategories = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .map(([key, score]) => ({
        key,
        score,
        details: CATEGORY_DETAILS[key] || {
          key,
          title: key.toUpperCase(),
          description: '',
          topRoles: [],
          suggestedSteps: [],
          color: 'from-purple-600 to-indigo-600',
        },
      }));

    const maxScore = Math.max(...Object.values(scores), 1);

    return {
      scores,
      sortedCategories,
      topCategory: sortedCategories[0],
      secondaryCategory: sortedCategories[1],
      maxScore,
    };
  }, [selectedAnswers]);

  const currentAnswerSelected = !!selectedAnswers[currentQuestion?.id];

  return (
    <section id="quiz" className="py-20 bg-gradient-to-b from-white via-purple-50/40 to-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/80 text-indigo-800 text-xs font-bold mb-3 border border-indigo-200">
            <Sparkles className="w-3.5 h-3.5" />
            SELF-DISCOVERY TOOL
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Interactive Career Assessment Quiz
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Answer 8 intuitive scenario questions to explore career fields best matched to your problem-solving style and interests.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-purple-900/5 border border-purple-100 overflow-hidden">
          
          {/* Progress Header */}
          <div className="bg-slate-50/80 px-6 sm:px-8 py-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-700 text-white flex items-center justify-center font-bold text-xs">
                {isFinished ? 'Done' : `${currentIndex + 1}/${totalQuestions}`}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                {isFinished ? 'Assessment Completed' : `Topic: ${currentQuestion.topic}`}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-32 sm:w-48 bg-slate-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-xs font-bold text-purple-700">{progressPercent}%</span>
            </div>
          </div>

          {!isFinished ? (
            /* Active Question Screen */
            <div className="p-6 sm:p-10">
              
              {/* Question Text */}
              <div className="mb-8">
                <span className="text-xs font-bold tracking-wider uppercase text-purple-700 block mb-1">
                  Question {currentIndex + 1} of {totalQuestions}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  {currentQuestion.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2">
                  {currentQuestion.context}
                </p>
              </div>

              {/* Multiple Choice Options */}
              <div className="space-y-3 mb-8" role="radiogroup" aria-label="Question Options">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedAnswers[currentQuestion.id] === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectOption(option.id)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 cursor-pointer ${
                        isSelected
                          ? 'bg-purple-50/80 border-purple-500 shadow-sm ring-2 ring-purple-500/20 text-slate-900'
                          : 'bg-white hover:bg-slate-50/80 border-slate-200 text-slate-700 hover:border-purple-200'
                      }`}
                      role="radio"
                      aria-checked={isSelected}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                          isSelected
                            ? 'border-purple-600 bg-purple-600'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <div className="flex-1">
                        <span className="text-sm sm:text-base font-semibold block">
                          {option.text}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors ${
                    currentIndex === 0
                      ? 'text-slate-300 cursor-not-allowed'
                      : 'text-slate-700 hover:bg-slate-100 cursor-pointer'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!currentAnswerSelected}
                    className={`px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-sm transition-all duration-200 ${
                      currentAnswerSelected
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white cursor-pointer shadow-purple-500/20'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <span>{currentIndex === totalQuestions - 1 ? 'Show My Results' : 'Next Question'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ) : (
            /* Results Screen */
            <div className="p-6 sm:p-10 space-y-8 animate-in fade-in duration-300">
              
              {/* Primary Match Header */}
              <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-lg">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-3 backdrop-blur-xs">
                    <Award className="w-3.5 h-3.5" />
                    YOUR HIGHEST ALIGNED CATEGORY
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {scoreResults.topCategory.details.title}
                  </h3>
                  <p className="mt-2 text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl">
                    {scoreResults.topCategory.details.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/20 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-200 mr-2">
                      Suggested Roles:
                    </span>
                    {scoreResults.topCategory.details.topRoles.map((role, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-3 py-1 bg-white/20 backdrop-blur-xs text-white rounded-lg border border-white/20"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Transparent Scoring Breakdown */}
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-1 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-purple-600" />
                  Transparent Frontend Scoring Breakdown
                </h4>
                <p className="text-xs text-slate-500 mb-5">
                  Points awarded across your 8 responses based on demonstrated affinities:
                </p>

                <div className="space-y-3.5">
                  {scoreResults.sortedCategories.map((cat) => {
                    const pct = Math.round((cat.score / (scoreResults.maxScore || 1)) * 100);
                    return (
                      <div key={cat.key} className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold text-slate-700">
                          <span>{cat.details.title}</span>
                          <span className="text-purple-700 font-bold">{cat.score} points</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${Math.max(pct, 5)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recommended Action Steps */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Recommended Next Steps For You
                </h4>
                <ul className="space-y-2.5">
                  {scoreResults.topCategory.details.suggestedSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Non-Clinical Assessment Disclaimer */}
              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-950 mb-0.5">Educational Exploration Disclaimer</p>
                  <p className="leading-relaxed">
                    These suggestions are for exploration and are not a professional career assessment. This interactive questionnaire is a self-reflection exercise designed to prompt curiosity and independent study.
                  </p>
                </div>
              </div>

              {/* Restart CTA */}
              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="px-6 py-3 rounded-xl text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Restart Quiz</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
};
