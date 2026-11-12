import React, { useState } from 'react';
import { BackgroundGlow } from './components/BackgroundGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { GithubActivity } from './components/GithubActivity';
import { ExploringNow } from './components/ExploringNow';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#090a0f] text-slate-100 selection:bg-purple-500/30 selection:text-purple-200">
      {/* Background Animated Ambience */}
      <BackgroundGlow />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Me Section & Journey Timeline */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />

        {/* Experience & Hackathons ("Building My Journey") */}
        <ExperienceTimeline />

        {/* Achievements & Coding Profiles (LeetCode, Codeforces, GitHub) */}
        <Achievements />

        {/* Academic Education Section */}
        <Education />

        {/* GitHub Live Activity & Language Stats */}
        <GithubActivity />

        {/* "What I'm Exploring Right Now" */}
        <ExploringNow />

        {/* Functional Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;

