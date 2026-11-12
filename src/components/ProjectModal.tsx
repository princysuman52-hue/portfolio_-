import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0e101a] border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Thumbnail Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-video mb-6 border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e101a] via-transparent to-transparent opacity-80" />
          
          {project.metrics && (
            <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-xl bg-purple-900/90 backdrop-blur-md border border-purple-500/40 text-xs font-mono text-purple-200 flex items-center gap-2 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>{project.metrics}</span>
            </div>
          )}
        </div>

        {/* Category & Title */}
        <div className="space-y-2 mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-400 px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20">
            {project.category} project
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            {project.title}
          </h3>
        </div>

        {/* Full Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.fullDescription}
        </p>

        {/* Key Highlights */}
        <div className="mb-6 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Key Engineering Highlights</span>
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
            Technologies Utilized:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-all hover:scale-105"
          >
            <Github className="w-4 h-4" />
            <span>View Source Code</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 transition-all hover:scale-105"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
};

