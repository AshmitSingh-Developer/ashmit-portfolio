'use client';

import React from 'react';

const ProjectCardSkeleton = () => {
  return (
    <div className="animate-pulse rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/80 backdrop-blur-xl border border-slate-700/50 shadow-xl flex flex-col h-full overflow-hidden">
      
      {/* Image */}
      <div className="relative aspect-video w-full bg-neutral-800 rounded-t-2xl" />

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        
        {/* Title */}
        <div className="h-6 w-3/4 bg-neutral-700 rounded" />

        {/* Description */}
        <div className="h-4 w-full bg-neutral-800 rounded" />
        <div className="h-4 w-5/6 bg-neutral-800 rounded" />

        {/* Tech stack icons */}
        <div className="flex gap-3 pt-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-11 h-11 bg-neutral-800 rounded-xl" />
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="pt-4 mt-auto border-t border-slate-700/50 flex items-center gap-4">
          <div className="h-10 w-1/3 bg-neutral-800 rounded-xl" />
          <div className="h-10 w-2/3 bg-neutral-700 rounded-xl" />
        </div>
      </div>

      {/* Pattern Layer */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
};

export default ProjectCardSkeleton;
