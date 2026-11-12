import React from 'react';
import { 
  ArrowUp, 
  Heart, 
  Github, 
  Linkedin, 
  Code2, 
  Terminal, 
  Instagram, 
  Mail,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Exploring', href: '#exploring' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#07080c] border-t border-white/[0.08] pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-purple-600/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-[1.5px]">
                <div className="w-full h-full bg-[#0d0f18] rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 text-xs tracking-wider">
                    {personalInfo.initials}
                  </span>
                </div>
              </div>
              <span className="font-display font-bold text-white text-base">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Computer Science Engineering undergraduate specializing in AI & Machine Learning. Building scalable, intelligent software for real-world impact.
            </p>

            <div className="text-[11px] font-mono text-slate-500">
              Personal Tagline: <span className="text-purple-400 font-medium">"{personalInfo.tagline}"</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-purple-300 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Connect Online
            </h4>
            
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-purple-600/20 border border-white/[0.08] hover:border-purple-500/40 text-slate-300 hover:text-white transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-blue-600/20 border border-white/[0.08] hover:border-blue-500/40 text-slate-300 hover:text-white transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-amber-600/20 border border-white/[0.08] hover:border-amber-500/40 text-slate-300 hover:text-white transition-all"
                title="LeetCode"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.codeforces}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-red-600/20 border border-white/[0.08] hover:border-red-500/40 text-slate-300 hover:text-white transition-all"
                title="Codeforces"
              >
                <Terminal className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-pink-600/20 border border-white/[0.08] hover:border-pink-500/40 text-slate-300 hover:text-white transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-2 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white transition-all group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
            <span>Designed &amp; Built with curiosity and code.</span>
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          </div>
        </div>

      </div>
    </footer>
  );
};

