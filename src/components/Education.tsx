import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Sparkles,
  School
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Formal <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Education</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Undergraduate curriculum focused on algorithmic precision, artificial intelligence, and core computer systems.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#121522]/60 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden shadow-2xl mb-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Degree & Institution Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-medium">
                  {educationData.degree}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{educationData.period}</span>
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  {educationData.status}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {educationData.major}
                </h3>
                <div className="text-base font-semibold text-purple-300 mt-1 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Specialization: {educationData.specialization}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <School className="w-4 h-4 text-slate-400" />
                <span>{educationData.institution}</span>
              </div>

              {/* Academic Highlights */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Academic Milestones:
                </div>
                {educationData.academicHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: CGPA Stat Card & Highlights */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 via-indigo-950/40 to-cyan-950/30 border border-purple-500/30 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-purple-300 uppercase tracking-wider">Cumulative GPA</span>
                  <Award className="w-5 h-5 text-amber-300" />
                </div>
                <div className="text-4xl sm:text-5xl font-display font-black text-white mt-2">
                  {educationData.cgpa}
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Top tier academic distinction across rigorous engineering mathematics and computer science curricula.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Core Engineering Focus
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Rigorous hands-on training combining foundational theory (Algorithms, Operating Systems, Theory of Computation) with applied deep learning and software engineering principles.
                </p>
              </div>

            </div>

          </div>

          {/* Relevant Coursework Grid */}
          <div className="mt-8 pt-8 border-t border-white/[0.08]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Key Coursework & Theoretical Foundations</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {educationData.coursework.map((course) => (
                <span
                  key={course}
                  className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] hover:bg-purple-500/10 border border-white/[0.06] hover:border-purple-500/30 text-xs font-medium text-slate-300 hover:text-white transition-all duration-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

