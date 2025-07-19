'use client';
import React from 'react';
import { motion } from 'framer-motion';

const HireMeButton = () => {
  return (
    <motion.a
      href="/hire-me"
      target="_blank"
      rel="noopener noreferrer"
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="relative inline-flex items-center group"
    >
      <motion.div
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.02 },
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="relative px-6 py-3 rounded-xl border border-cyan-400/40 bg-black/60 backdrop-blur-md text-white overflow-hidden shadow-xl hover:shadow-cyan-500/30 transition-shadow duration-300"
      >
        {/* Space Gradient Hover Overlay */}
        <motion.span
          variants={{
            rest: { scaleX: 0 },
            hover: { scaleX: 1 },
          }}
          transition={{ duration: 0.05, ease: 'easeInOut' }}
          className="absolute inset-0 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#00c9a7] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out blur-sm opacity-80"
          style={{ zIndex: 0 }}
        />

        {/* Content */}
        <span className="relative z-10 flex items-center space-x-3">
          {/* Icon */}
          <motion.svg
            variants={{
              rest: { rotate: 0, y: 0 },
              hover: { rotate: -12, y: -2 },
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-cyan-300 group-hover:text-teal-200 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </motion.svg>

          {/* Text */}
          <span className="text-sm font-semibold text-cyan-200 group-hover:text-teal-100 tracking-wide transition-colors duration-300">
            Hire Me
          </span>
        </span>
      </motion.div>
    </motion.a>
  );
};

export default HireMeButton;
