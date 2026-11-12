import React, { useState } from 'react';
import { 
  Code2, 
  Binary, 
  Coffee, 
  FileCode, 
  FileCode2, 
  Database, 
  Layers, 
  Palette, 
  Server, 
  Layout, 
  Globe, 
  BrainCircuit, 
  Sparkles, 
  Bot, 
  Cpu, 
  Workflow, 
  GitBranch, 
  Laptop, 
  TerminalSquare, 
  Send, 
  Terminal, 
  Network, 
  Boxes, 
  Code, 
  Trophy,
  Search,
  Filter
} from 'lucide-react';
import { skillsData, SkillItem } from '../data/portfolioData';

// Map icon names to Lucide icon components
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Code2,
  Binary,
  Coffee,
  FileCode,
  FileCode2,
  Database,
  Layers,
  Palette,
  Server,
  Layout,
  Globe,
  BrainCircuit,
  Sparkles,
  Bot,
  Cpu,
  Workflow,
  GitBranch,
  Laptop,
  TerminalSquare,
  Send,
  Terminal,
  Network,
  Boxes,
  Code,
  Trophy
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'languages', label: 'Languages' },
    { id: 'web', label: 'Web Development' },
    { id: 'aiml', label: 'AI & Machine Learning' },
    { id: 'tools', label: 'Developer Tools' },
    { id: 'dsa', label: 'DSA & Problem Solving' },
  ];

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getLevelBadgeClass = (level: string) => {
    if (level.includes('Proficient')) {
      return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
    } else if (level.includes('Intermediate')) {
      return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
    } else if (level.includes('Solved') || level.includes('Contestant')) {
      return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
    }
    return 'bg-white/[0.05] text-slate-300 border-white/10';
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">Proficiencies</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Categorized technical stack focused on scalable software, intelligent models, and algorithmic problem solving.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 font-semibold'
                    : 'bg-[#121522]/80 text-slate-300 hover:text-white border border-white/[0.06] hover:bg-white/[0.05]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. React, Python)..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-[#121522]/90 border border-white/[0.08] focus:border-purple-500/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={`${skill.name}-${index}`}
                className="group relative p-5 rounded-2xl bg-[#121522]/60 border border-white/[0.06] hover:border-purple-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/10"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getLevelBadgeClass(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {skill.name}
                </h3>

                {skill.description && (
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {skill.description}
                  </p>
                )}

                <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="capitalize">{skill.category}</span>
                  <span className="text-slate-400 group-hover:text-cyan-300 transition-colors">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-[#121522]/40 border border-white/[0.06]">
            <Filter className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs text-purple-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

