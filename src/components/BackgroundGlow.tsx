import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25]" />
      
      {/* Soft Ambient Radial Gradients */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[140px] animate-pulse-slow" />
      <div className="absolute top-[35%] -left-[15%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute top-[65%] -right-[15%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute -bottom-[10%] left-1/3 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[140px]" />
    </div>
  );
};

