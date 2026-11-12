import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  BookOpen, 
  Compass, 
  Lightbulb, 
  Code2, 
  CheckCircle2, 
  Target,
  Rocket
} from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Princy Suman</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Architecting intelligent digital solutions with modern code and relentless problem solving.
          </p>
        </div>

        {/* Top Grid: Bio & Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-8 rounded-3xl bg-[#121522]/60 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-xl font-display font-bold text-white flex items-center gap-2.5 mb-4">
                <Code2 className="w-5 h-5 text-purple-400" />
                <span>Engineering with Intelligence & Curiosity</span>
              </h3>

              <div className="space-y-4 text-slate-300/90 text-sm sm:text-base leading-relaxed">
                {aboutData.bioParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Tagline Card Banner */}
              <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Guiding Philosophy:</span>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-200 font-display font-bold text-sm tracking-wide shadow-sm">
                  "{personalInfo.tagline}"
                </div>
              </div>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#0f111a] border border-white/[0.06] flex items-start gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">High Precision</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Clean architecture, typed code & optimized time complexity.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0f111a] border border-white/[0.06] flex items-start gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Rapid Learning</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Evolving from fundamentals to cutting-edge Agentic AI.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0f111a] border border-white/[0.06] flex items-start gap-3">
                <div className="p-2 rounded-xl bg-pink-500/10 text-pink-400">
                  <Rocket className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Startup Mindset</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Focusing on high-impact solutions that solve real problems.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Key Focus Breakdown */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-[#121522]/60 border border-white/[0.08] backdrop-blur-xl">
              <h3 className="text-base font-display font-bold text-white flex items-center gap-2 mb-4">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>Academic & Technical Profile</span>
              </h3>

              <div className="space-y-3.5">
                {aboutData.coreFocus.map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-purple-400/90">{item.title}</div>
                    <div className="text-sm font-semibold text-slate-100 mt-0.5">{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Key Interests Tags */}
              <div className="mt-5 pt-4 border-t border-white/[0.08]">
                <div className="text-xs font-mono text-slate-400 mb-2.5">Areas of Passion:</div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Agentic AI", 
                    "Full Stack Engineering", 
                    "DSA & Competitive Coding", 
                    "Computer Vision", 
                    "System Design", 
                    "Open Source", 
                    "Startup Innovation"
                  ].map((interest) => (
                    <span 
                      key={interest}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300 hover:text-white hover:border-purple-500/40 transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Status Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/30 backdrop-blur-md flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Seeking SDE / AI Internships</h4>
                <p className="text-xs text-slate-300 mt-0.5">Ready to contribute to high-velocity software and AI engineering teams.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: My Journey Interactive Timeline */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="w-5 h-5 text-purple-400" />
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              My Journey Timeline
            </h3>
            <span className="text-xs font-mono text-slate-500 ml-2 hidden sm:inline">( Milestones & Progress )</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {aboutData.journeyTimeline.map((milestone, idx) => (
              <div
                key={milestone.year}
                className="relative p-6 rounded-2xl bg-[#121522]/50 border border-white/[0.08] hover:border-purple-500/40 backdrop-blur-md transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Year Indicator */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs font-bold mb-3">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>{milestone.year}</span>
                </div>

                <h4 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {milestone.title}
                </h4>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {milestone.description}
                </p>

                {/* Card index accent */}
                <span className="absolute bottom-3 right-4 font-mono text-2xl font-black text-white/[0.03] pointer-events-none">
                  0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

