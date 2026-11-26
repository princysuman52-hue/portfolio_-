import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Github, 
  Linkedin, 
  Code2, 
  Instagram, 
  Terminal, 
  Cpu, 
  Zap, 
  BrainCircuit,
  Layers,
  ChevronDown
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { triggerConfetti } from '../utils/confetti';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect for animated roles
  useEffect(() => {
    const fullText = personalInfo.animatedRoles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText === fullText) {
          // Pause at full word
          setTypingSpeed(1800);
          setIsDeleting(true);
        }
      } else {
        // Backspacing
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.animatedRoles.length);
          setTypingSpeed(300);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const handleResumeClick = () => {
    triggerConfetti();
    onOpenResume();
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Headline, Bio, CTAs, Socials */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7 text-left z-10">
          
          {/* Greeting Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-medium backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span>Hello, I'm <strong className="text-white font-sans font-semibold">{personalInfo.name}</strong></span>
            <span className="text-purple-400/40">|</span>
            <span className="text-slate-400">CSE (AI & ML)</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12]">
              Computer Science Student.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
                AI Enthusiast.
              </span>{' '}
              <br className="hidden sm:inline" />
              Future Innovator.
            </h1>
          </div>

          {/* Typewriter Dynamic Subtitle */}
          <div className="flex items-center gap-2 text-lg sm:text-2xl font-mono font-medium text-slate-300 h-9">
            <Terminal className="w-5 h-5 text-purple-400 shrink-0" />
            <span className="text-slate-400 font-sans font-normal text-base sm:text-lg">Specializing in:</span>
            <span className="text-cyan-300 font-semibold border-b-2 border-cyan-400/50 pb-0.5">
              {currentText}
            </span>
            <span className="w-2 h-5 bg-purple-400 animate-pulse" />
          </div>

          {/* Short Introduction */}
          <p className="text-slate-300/90 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            {personalInfo.intro}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.12] text-slate-200 hover:text-white font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Let's Connect</span>
            </button>

            <button
              onClick={handleResumeClick}
              className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 text-purple-200 hover:text-white font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-purple-400 group-hover:text-cyan-300 transition-colors" />
              <span>Download Resume</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400/80 group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08] w-full max-w-xl">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Profiles:</span>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-purple-600/20 border border-white/[0.08] hover:border-purple-500/40 text-slate-300 hover:text-white transition-all duration-200 hover:scale-105"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-blue-600/20 border border-white/[0.08] hover:border-blue-500/40 text-slate-300 hover:text-white transition-all duration-200 hover:scale-105"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-amber-600/20 border border-white/[0.08] hover:border-amber-500/40 text-slate-300 hover:text-white transition-all duration-200 hover:scale-105"
                title="LeetCode (320+ Solved)"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.codeforces}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-red-600/20 border border-white/[0.08] hover:border-red-500/40 text-slate-300 hover:text-white transition-all duration-200 hover:scale-105"
                title="Codeforces"
              >
                <Terminal className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-pink-600/20 border border-white/[0.08] hover:border-pink-500/40 text-slate-300 hover:text-white transition-all duration-200 hover:scale-105"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Profile Photo Card with Futuristic Glassmorphic Aura */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-10">
          
          {/* Animated Background Aura Behind Card */}
          <div className="absolute w-72 h-72 sm:w-88 sm:h-88 bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-cyan-500/30 rounded-full blur-3xl -z-10 animate-pulse-slow" />

          {/* Interactive Profile Card */}
          <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
            {/* Outer Gradient Border */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-purple-500/40 via-white/10 to-cyan-500/30 shadow-2xl shadow-purple-900/30 backdrop-blur-xl">
              <div className="bg-[#0e101a] rounded-[22px] overflow-hidden p-3.5 border border-white/[0.06]">
                
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if avatar fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Gradient Overlay for Cinematic Lighting */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e101a] via-transparent to-transparent opacity-60" />

                  {/* Top-Right Badge: Active Status */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#090a0f]/80 backdrop-blur-md border border-white/10 flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-slate-200 font-medium">B.Tech AI & ML</span>
                  </div>

                  {/* Bottom Image Overlay Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#090a0f]/85 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-white">{personalInfo.name}</div>
                        <div className="text-xs text-purple-300 font-mono">Future Software Engineer</div>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                        <Zap className="w-4 h-4 text-cyan-300" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Sub-Strip */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-center pt-1 border-t border-white/[0.06]">
                  <div className="p-1.5 rounded-lg bg-white/[0.02]">
                    <span className="block text-xs font-bold text-white font-mono">320+</span>
                    <span className="text-[10px] text-slate-400">DSA Solved</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/[0.02]">
                    <span className="block text-xs font-bold text-cyan-300 font-mono">8.9</span>
                    <span className="text-[10px] text-slate-400">CGPA</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/[0.02]">
                    <span className="block text-xs font-bold text-purple-300 font-mono">Hackathon</span>
                    <span className="text-[10px] text-slate-400">Participated</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Decorative Skill Chips */}
            <div className="absolute -left-6 top-1/4 px-3 py-1.5 rounded-xl bg-[#121522]/90 border border-purple-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 animate-float">
              <BrainCircuit className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-medium text-slate-200 font-mono">AI & ML</span>
            </div>

            <div className="absolute -right-6 top-2/3 px-3 py-1.5 rounded-xl bg-[#121522]/90 border border-cyan-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 animate-float" style={{ animationDelay: '1.5s' }}>
              <Layers className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-medium text-slate-200 font-mono">Full-Stack</span>
            </div>

            <div className="absolute -left-4 bottom-8 px-3 py-1.5 rounded-xl bg-[#121522]/90 border border-indigo-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 animate-float" style={{ animationDelay: '3s' }}>
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-medium text-slate-200 font-mono">C++ & Python</span>
            </div>

          </div>

        </div>

      </div>

      {/* Metrics Strip / Stats Ticker */}
      <div className="max-w-7xl mx-auto w-full mt-16 pt-8 border-t border-white/[0.08] z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-[#121522]/50 border border-white/[0.06] hover:border-purple-500/30 backdrop-blur-md transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-300 mt-1">{stat.label}</div>
              <div className="text-[11px] font-mono text-slate-500 mt-0.5">{stat.change}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => scrollTo('about')}
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-purple-300 transition-colors"
          aria-label="Scroll down to About section"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>

    </section>
  );
};

