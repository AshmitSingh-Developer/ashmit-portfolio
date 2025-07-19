'use client';
import React from 'react';

const SkeletonProjectShowcase = () => {
  return (
    <div className="w-full min-h-screen py-8 px-4 animate-pulse text-white">
      <div className="max-w-7xl mx-auto">
        {/* Title Placeholder */}
        <div className="h-10 w-60 bg-neutral-800 rounded mb-4 mx-auto" />
        <div className="h-4 w-3/4 bg-neutral-700 rounded mb-12 mx-auto" />

        {/* Grid of Placeholder Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="border border-neutral-800 rounded-2xl p-4 bg-neutral-900/40 backdrop-blur-xl space-y-4"
            >
              {/* Image */}
              <div className="h-48 w-full bg-neutral-800 rounded-xl" />

              {/* Title */}
              <div className="h-5 w-3/4 bg-neutral-700 rounded" />

              {/* Description */}
              <div className="h-4 w-full bg-neutral-800 rounded" />
              <div className="h-4 w-5/6 bg-neutral-800 rounded" />

              {/* Divider */}
              <div className="h-px w-full bg-neutral-700 my-2" />

              {/* Icons */}
              <div className="flex gap-2">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="h-8 w-8 bg-neutral-800 rounded-lg" />
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 pt-4">
                <div className="h-10 w-1/3 bg-neutral-800 rounded-lg" />
                <div className="h-10 w-2/3 bg-neutral-700 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonProjectShowcase;
