import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CareerExplorer } from './components/CareerExplorer';
import { CareerQuiz } from './components/CareerQuiz';
import { EducationPaths } from './components/EducationPaths';
import { SkillsDevelopment } from './components/SkillsDevelopment';
import { CareerRoadmap } from './components/CareerRoadmap';
import { Resources } from './components/Resources';
import { CareerChecklist } from './components/CareerChecklist';
import { SuccessStories } from './components/SuccessStories';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Top Sticky Navbar */}
      <Navbar onNavigate={scrollTo} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={() => scrollTo('careers')}
          onQuizClick={() => scrollTo('quiz')}
        />

        {/* 2. Career Exploration Directory & Modal */}
        <CareerExplorer />

        {/* 3. Interactive Career Assessment Quiz */}
        <CareerQuiz />

        {/* 4. Education & Learning Streams */}
        <EducationPaths />

        {/* 5. In-Demand Skills Development */}
        <SkillsDevelopment />

        {/* 6. Step-by-Step Career Roadmap */}
        <CareerRoadmap />

        {/* 7. Resume, Interview & Official Directory Resources */}
        <Resources />

        {/* 8. Interactive Career Planning Checklist */}
        <CareerChecklist />

        {/* 9. Illustrative Case Studies & Inspiration */}
        <SuccessStories />

        {/* 10. Frequently Asked Questions */}
        <FAQ />

        {/* 11. Validated Contact Section */}
        <Contact />
      </main>

      {/* 12. Footer with 2026 Copyright & Disclaimers */}
      <Footer />
    </div>
  );
}

export default App;
