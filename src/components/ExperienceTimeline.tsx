import React from 'react';
import { 
  Milestone, 
  Trophy, 
  Users, 
  GitFork, 
  Cpu, 
  MapPin, 
  Calendar, 
  CheckCircle2,
  Sparkles,
  Award
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono">
            <Milestone className="w-3.5 h-3.5" />
            <span>BUILDING MY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">Hackathons</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Hands-on technical leadership, national hackathon finalist, technical community mentorship, and open-source contributions.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="relative border-l border-white/[0.1] ml-4 sm:ml-8 md:ml-32 space-y-12">
          {experienceData.map((item, index) => (
            <div key={item.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#090a0f] border-2 border-purple-500 group-hover:border-cyan-400 transition-colors shadow-sm shadow-purple-500/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-cyan-300" />
              </div>

              {/* Date Callout on wide screens */}
              <div className="md:absolute md:-left-32 md:top-1.5 md:w-24 md:text-right hidden md:block">
                <span className="font-mono text-xs font-semibold text-purple-400">
                  {item.period}
                </span>
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#121522]/60 border border-white/[0.08] hover:border-purple-500/40 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-purple-900/10">
                
                {/* Header row with badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="md:hidden font-mono text-xs text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
                      {item.period}
                    </span>
                    {item.badge && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[11px] font-mono">
                        <Sparkles className="w-3 h-3" />
                        <span>{item.badge}</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Role and Organization */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <div className="text-sm font-medium text-slate-300 mt-0.5">
                  <span className="text-purple-300 font-semibold">{item.role}</span> &bull; {item.organization}
                </div>

                {/* Bullet Points */}
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                  {item.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills/Tags */}
                <div className="mt-5 pt-4 border-t border-white/[0.04] flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-slate-500 mr-1">Skills:</span>
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

