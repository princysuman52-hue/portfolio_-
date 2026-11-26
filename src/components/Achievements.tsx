import React from 'react';
import { 
  Trophy, 
  Award, 
  Code2, 
  Flame, 
  ExternalLink, 
  CheckCircle, 
  GraduationCap, 
  Sparkles,
  Zap,
  TrendingUp
} from 'lucide-react';
import { achievementsData, personalInfo } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & BENCHMARKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-300 to-cyan-300">Coding Profiles</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Competitive programming ratings, verified course certifications, and hackathon recognitions.
          </p>
        </div>

        {/* Featured Coding Profile Cards (LeetCode, Codeforces, GitHub) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* LeetCode Card */}
          <a
            href={personalInfo.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            className="group relative p-6 rounded-3xl bg-gradient-to-b from-[#161a29] to-[#0f111c] border border-amber-500/20 hover:border-amber-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-amber-500/10"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="flex items-center gap-1 text-xs font-mono text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>50+ Day Streak</span>
              </span>
            </div>

            <h3 className="text-xl font-display font-bold text-white group-hover:text-amber-300 transition-colors">
              LeetCode
            </h3>
            <p className="text-xs text-slate-400 mt-1">Data Structures & Algorithm Problem Solver</p>

            <div className="mt-5 space-y-2 border-t border-white/[0.06] pt-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Total Solved:</span>
                <span className="font-mono font-bold text-white text-sm">320+ Problems</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Contest Percentile:</span>
                <span className="font-mono text-amber-400 font-semibold">Top 15% Global</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Core Strengths:</span>
                <span className="font-mono text-slate-300">Trees, DP, Graphs</span>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-end text-xs font-semibold text-amber-400 gap-1 group-hover:underline">
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Codeforces Card */}
          <a
            href={personalInfo.socials.codeforces}
            target="_blank"
            rel="noreferrer"
            className="group relative p-6 rounded-3xl bg-gradient-to-b from-[#161a29] to-[#0f111c] border border-cyan-500/20 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-cyan-500/10"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="flex items-center gap-1 text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Div 2 / Div 3</span>
              </span>
            </div>

            <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
              Codeforces
            </h3>
            <p className="text-xs text-slate-400 mt-1">Speed, Accuracy & Mathematical Logic</p>

            <div className="mt-5 space-y-2 border-t border-white/[0.06] pt-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Competitive Track:</span>
                <span className="font-mono font-bold text-white text-sm">Specialist Track</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Language Used:</span>
                <span className="font-mono text-cyan-400 font-semibold">C++17 / C++20</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Rounds Contested:</span>
                <span className="font-mono text-slate-300">Regular Participant</span>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-end text-xs font-semibold text-cyan-400 gap-1 group-hover:underline">
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

        </div>

        {/* Certifications and Additional Accolades Grid */}
        <h3 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
          <Award className="w-5 h-5 text-purple-400" />
          <span>Certifications & Academic Accomplishments</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-[#121522]/50 border border-white/[0.06] hover:border-purple-500/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">
                  {item.organization}
                </span>
                {item.metric && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium">
                    {item.metric}
                  </span>
                )}
              </div>

              <h4 className="text-sm font-semibold text-white">
                {item.title}
              </h4>

              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

