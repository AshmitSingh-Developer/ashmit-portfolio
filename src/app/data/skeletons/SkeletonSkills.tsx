'use client';
import React from 'react';

const SkeletonSkills = () => {
  return (
    <div className="w-full py-4 min-h-[80vh] text-white animate-pulse">
      <div className="container mx-auto px-4">
        {/* Title Placeholder */}
        <div className="h-8 w-40 bg-neutral-800 rounded-md mb-3" />
        {/* Underline Placeholder */}
        <div className="h-1 w-10 bg-neutral-700 rounded mb-6" />

        {/* Bio Placeholder */}
        <div className="h-4 w-3/4 bg-neutral-800 rounded mb-2" />
        <div className="h-4 w-2/3 bg-neutral-800 rounded mb-8" />

        {/* Grid Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-4 border border-neutral-800 rounded-xl space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-neutral-700 rounded-lg" />
                <div className="h-4 w-1/2 bg-neutral-700 rounded" />
              </div>
              <div className="h-3 w-full bg-neutral-800 rounded" />
              <div className="h-3 w-5/6 bg-neutral-800 rounded" />
              <div className="h-px w-full bg-neutral-700 my-2" />
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="h-8 bg-neutral-800 rounded-md" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonSkills;
