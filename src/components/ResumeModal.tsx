import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Check, 
  Copy, 
  FileText, 
  Sparkles, 
  GraduationCap, 
  Code2, 
  Briefcase, 
  Trophy,
  Mail,
  ExternalLink
} from 'lucide-react';
import { personalInfo, educationData, skillsData, projectsData, achievementsData } from '../data/portfolioData';
import { triggerConfetti } from '../utils/confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    triggerConfetti();
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
========================================
${personalInfo.name} - Resume
${personalInfo.headline}
Email: ${personalInfo.email} | Location: ${personalInfo.location}
GitHub: ${personalInfo.socials.github} | LinkedIn: ${personalInfo.socials.linkedin}
LeetCode: ${personalInfo.socials.leetcode}
========================================

EDUCATION:
${educationData.degree} in ${educationData.major}
Specialization: ${educationData.specialization}
${educationData.institution} | ${educationData.period} | CGPA: ${educationData.cgpa}

TECHNICAL SKILLS:
- Languages: Python, C++, Java, JavaScript, TypeScript, SQL
- Web Development: React.js, Tailwind CSS, Node.js, Express, Next.js
- AI & ML: Machine Learning, Generative AI, Agentic AI, PyTorch, LangChain, REST APIs
- Developer Tools: Git, GitHub, VS Code, IntelliJ IDEA, Postman, Linux
- DSA: 320+ LeetCode problems solved, Codeforces contestant

FEATURED PROJECTS:
${projectsData.map(p => `* ${p.title} (${p.tags.join(', ')})
  ${p.shortDescription}`).join('\n')}

ACHIEVEMENTS & HONORS:
${achievementsData.map(a => `* ${a.title} - ${a.organization} (${a.date})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    triggerConfetti();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0d0f18] border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 z-10 text-left">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-white">
                Curriculum Vitae / Resume
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {personalInfo.name} &bull; CSE (AI & ML)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md shadow-purple-600/30 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-medium transition-all"
              title="Copy plain-text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable/Readable Resume Document Preview */}
        <div className="mt-6 space-y-6 text-slate-200">
          
          {/* Header Contact Block */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
              <h2 className="text-2xl font-display font-extrabold text-white">{personalInfo.name}</h2>
              <p className="text-xs text-purple-300 font-mono mt-0.5">{personalInfo.headline}</p>
            </div>
            <div className="text-xs font-mono space-y-1 text-slate-400">
              <div>Email: <span className="text-white">{personalInfo.email}</span></div>
              <div>Location: <span className="text-white">{personalInfo.location}</span></div>
              <div>Status: <span className="text-emerald-400">{personalInfo.status}</span></div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h4>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex flex-wrap justify-between items-center gap-2">
                <span className="font-semibold text-white text-sm">{educationData.degree} in {educationData.major}</span>
                <span className="text-xs font-mono text-cyan-300">{educationData.period}</span>
              </div>
              <div className="text-xs text-slate-300 mt-1">Specialization: {educationData.specialization}</div>
              <div className="text-xs text-slate-400 mt-0.5">{educationData.institution} &bull; CGPA: <strong className="text-white">{educationData.cgpa}</strong></div>
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Core Competencies</span>
            </h4>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-2 text-xs">
              <div><strong className="text-white">Languages:</strong> <span className="text-slate-300">Python, C++, Java, JavaScript, TypeScript, SQL</span></div>
              <div><strong className="text-white">Web & Frameworks:</strong> <span className="text-slate-300">React.js, Tailwind CSS, Node.js, Express, Next.js, HTML5/CSS3</span></div>
              <div><strong className="text-white">AI & ML:</strong> <span className="text-slate-300">Machine Learning, Generative AI, Agentic AI, PyTorch, Scikit-Learn, REST APIs</span></div>
              <div><strong className="text-white">Tools & Practices:</strong> <span className="text-slate-300">Git, GitHub, VS Code, IntelliJ IDEA, Postman, Linux, OOPs, System Design</span></div>
              <div><strong className="text-white">DSA & CP:</strong> <span className="text-slate-300">320+ LeetCode problems solved, Codeforces active contestant</span></div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Featured Engineering Projects</span>
            </h4>
            <div className="space-y-3">
              {projectsData.slice(0, 3).map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <span className="font-semibold text-white text-sm">{proj.title}</span>
                    <span className="text-[11px] font-mono text-purple-300">{proj.tags.slice(0, 3).join(' • ')}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{proj.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              <span>Key Recognitions</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {achievementsData.slice(0, 4).map((ach) => (
                <div key={ach.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="font-semibold text-white">{ach.title}</div>
                  <div className="text-[11px] text-slate-400">{ach.organization} &bull; {ach.metric}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Close / Action */}
        <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center flex-wrap gap-3">
          <span className="text-xs text-slate-400 font-mono">Available for immediate evaluation & interviews</span>
          <button
            onClick={handlePrint}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-purple-600/30 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download / Print Resume</span>
          </button>
        </div>

      </div>
    </div>
  );
};

