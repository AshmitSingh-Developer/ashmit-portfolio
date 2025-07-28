'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeftCircle } from 'react-icons/fi';

const blobPaths = [
  "M66.1,-56.6C83.3,-37.6,90.7,-6.6,80.4,16.9C70.1,40.4,42.1,56.3,14.4,66.6C-13.2,76.9,-39.6,81.6,-58.5,68.4C-77.4,55.1,-88.9,23.9,-84.5,-5.6C-80.1,-35.1,-59.9,-61.7,-34.6,-78.2C-9.2,-94.7,21.2,-101.1,46.4,-90.2C71.6,-79.3,91.5,-51.5,66.1,-56.6Z",
  "M57.5,-49.2C70.6,-30.5,73.8,-5.3,66.1,15.5C58.5,36.2,39.9,52.6,16.2,63.3C-7.5,74,-36.2,79,-54.9,67.2C-73.6,55.3,-82.3,26.6,-78.2,2.4C-74.1,-21.7,-57.3,-41.3,-38.3,-58.4C-19.4,-75.6,1.7,-90.4,24.3,-87.8C47,-85.1,70.9,-65.9,57.5,-49.2Z",
  "M65.2,-55.5C78.8,-36.2,77.9,-7.3,67.7,15.5C57.6,38.4,38.2,55.2,13.2,65.6C-11.8,76,-42.3,79.8,-58.2,65.9C-74,52,-75.3,20.5,-67.2,-3.3C-59.1,-27.2,-41.7,-43.2,-21.9,-61.6C-2,-79.9,20.2,-100.5,41.4,-94.3C62.6,-88.1,82.7,-55.7,65.2,-55.5Z"
];

const Premium404: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1.5,
        ease: 'easeInOut' as const,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 40,
        damping: 12,
        mass: 0.6
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0.8, rotate: -90, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 50,
        damping: 10,
        duration: 1.8
      }
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white overflow-hidden px-4">
      
      {/* SVG Morphing Blob */}
      <motion.svg
        className="absolute w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] blur-2xl opacity-40 mix-blend-screen z-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      >
        <motion.path
          fill="url(#gradient)"
          initial={{ d: blobPaths[0] }}
          animate={{
            d: [blobPaths[0], blobPaths[1], blobPaths[2], blobPaths[0]],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00fff7" />
            <stop offset="50%" stopColor="#ff00f7" />
            <stop offset="100%" stopColor="#00ff8e" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white opacity-10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 3
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        className="z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={numberVariants}
          className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-colorfull animate-gradient-x mb-6"
        >
          404
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
        >
          <span className="text-transparent bg-gradient-to-r from-[#7F00FF] via-[#00C9FF] to-[#FF00CC] bg-clip-text drop-shadow-[0_2px_8px_rgba(255,0,255,0.3)]">
            Oops! This page doesn&apos;t exist.
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-300 mb-8 max-w-xl mx-auto"
        >
          We couldn&apos;t find what you were looking for. Don&apos;t worry — we&apos;ll help you get back on the right path.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 60, damping: 10 }}
              className="relative inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full border border-white/20 backdrop-blur-md bg-white/5 transition-all hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              <FiArrowLeftCircle className="text-lg" />
              Back to Home
              <motion.span
                className="absolute -inset-px rounded-full bg-gradient-to-tr from-pink-500 via-cyan-400 to-purple-500 opacity-20 blur-xl"
                aria-hidden="true"
              />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Premium404;
