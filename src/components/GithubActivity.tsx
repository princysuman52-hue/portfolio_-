import React from 'react';
import { 
  Github, 
  GitCommit, 
  GitPullRequest, 
  Star, 
  GitFork, 
  Flame, 
  ExternalLink,
  Code2
} from 'lucide-react';
import { githubStats, personalInfo } from '../data/portfolioData';

export const GithubActivity: React.FC = () => {
  // Generate a realistic 52-week contribution heat map (7 rows for days of week, 52 cols for weeks)
  const generateContributionWeeks = () => {
    const weeks = [];
    const intensities = [0, 1, 2, 3, 4];
    
    for (let w = 0; w < 44; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        // Pseudo-random deterministic activity favoring active streaks
        const seed = (w * 7 + d * 13) % 100;
        let intensity = 0;
        if (seed > 65) intensity = 4;
        else if (seed > 45) intensity = 3;
        else if (seed > 25) intensity = 2;
        else if (seed > 10) intensity = 1;
        days.push(intensity);
      }
      weeks.push(days);
    }
    return weeks;
  };

  const contributionWeeks = generateContributionWeeks();

  const getHeatmapColor = (intensity: number) => {
    switch (intensity) {
      case 4: return 'bg-purple-500';
      case 3: return 'bg-purple-600/80';
      case 2: return 'bg-purple-800/60';
      case 1: return 'bg-purple-950/80';
      default: return 'bg-white/[0.04]';
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
            <Github className="w-3.5 h-3.5" />
            <span>OPEN SOURCE & CODE ACTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            GitHub <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Activity</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Code cadence, public repositories, language distribution, and open-source contributions.
          </p>
        </div>

        {/* GitHub Header Dashboard Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#121522]/60 border border-white/[0.08] backdrop-blur-xl mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
            
            {/* User Details */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-16 h-16 rounded-2xl object-cover border border-purple-500/40"
                />
                <span className="absolute -bottom-1 -right-1 p-1 bg-[#090a0f] rounded-lg border border-white/10 text-white">
                  <Github className="w-3.5 h-3.5" />
                </span>
              </div>

              <div>
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <span>{personalInfo.name}</span>
                  <span className="text-xs font-mono text-slate-400 font-normal">@{githubStats.username}</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Building intelligent systems & solving algorithmic challenges
                </p>
              </div>
            </div>

            {/* Quick Stats & External Link */}
            <div className="flex items-center flex-wrap gap-3">
              <div className="px-3.5 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 flex items-center gap-1.5">
                <GitCommit className="w-3.5 h-3.5" />
                <span>{githubStats.totalContributions}</span>
              </div>

              <div className="px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                <span>Streak: {githubStats.longestStreak}</span>
              </div>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-all hover:scale-105"
              >
                <span>View GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Simulated Commit Heatmap Graph */}
          <div className="pt-6">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
              <span className="flex items-center gap-1.5">
                <GitCommit className="w-3.5 h-3.5 text-purple-400" />
                <span>Contribution Cadence (Past Year)</span>
              </span>
              <div className="flex items-center gap-1.5 text-[10px]">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-[2px] bg-white/[0.04]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-purple-950/80" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-purple-800/60" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-purple-600/80" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-purple-500" />
                <span>More</span>
              </div>
            </div>

            {/* Heatmap Grid */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-[3.5px] min-w-[680px]">
                {contributionWeeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3.5px]">
                    {week.map((intensity, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-3 h-3 rounded-[2.5px] transition-colors duration-200 hover:ring-1 hover:ring-cyan-300 ${getHeatmapColor(intensity)}`}
                        title={`Activity level: ${intensity}/4`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Language Breakdown Bar */}
          <div className="mt-8 pt-6 border-t border-white/[0.06]">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2.5">
              <span>Primary Language Distribution</span>
              <span className="text-purple-300">Codebase Breakdown</span>
            </div>

            {/* Stacked Progress Bar */}
            <div className="h-2.5 w-full bg-white/[0.05] rounded-full overflow-hidden flex">
              {githubStats.topLanguages.map((lang) => (
                <div
                  key={lang.name}
                  style={{
                    width: `${lang.percentage}%`,
                    backgroundColor: lang.color,
                  }}
                  className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-500"
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs">
              {githubStats.topLanguages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-slate-300">{lang.name}</span>
                  <span className="text-slate-500 font-mono text-[11px]">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Featured Repositories Grid */}
        <h3 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
          <Code2 className="w-5 h-5 text-cyan-400" />
          <span>Featured Repositories</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {githubStats.featuredRepos.map((repo) => (
            <a
              key={repo.name}
              href={`${personalInfo.socials.github}/${repo.name}`}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-[#121522]/50 border border-white/[0.06] hover:border-purple-500/40 backdrop-blur-md transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-sm font-semibold text-white group-hover:text-purple-300 transition-colors flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-300" />
                    <span>{repo.name}</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
                    Public
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {repo.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 hover:text-white">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1 hover:text-white">
                    <GitFork className="w-3.5 h-3.5" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

