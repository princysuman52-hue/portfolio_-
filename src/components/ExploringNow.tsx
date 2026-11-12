import React from 'react';
import { 
  Compass, 
  Bot, 
  Network, 
  BrainCircuit, 
  Server, 
  GitPullRequest, 
  Rocket,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { exploringNowData } from '../data/portfolioData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Bot,
  Network,
  BrainCircuit,
  Server,
  GitPullRequest,
  Rocket
};

export const ExploringNow: React.FC = () => {
  return (
    <section id="exploring" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>FORWARD HORIZONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            What I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-400">Exploring Right Now</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Actively reading research papers, benchmarking frameworks, and sharpening cutting-edge technical competencies.
          </p>
        </div>

        {/* Small Modern Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploringNowData.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.title}
                className="group relative p-6 rounded-3xl bg-[#121522]/60 border border-white/[0.08] hover:border-purple-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-900/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-500 text-[11px]">Status: Active Research</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

