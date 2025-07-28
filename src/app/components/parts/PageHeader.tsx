'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { cn } from '@/lib/utils'

interface PageHeaderProps {
  subtitle: string;
  title: string;
  titleAddon?: React.ReactNode; 
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  subtitle,
  title,
  titleAddon, 
  className = '',
  subtitleClassName = '',
  titleClassName = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const subtitleControls = useAnimation();
  const titleControls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      if (isInView) {
        await subtitleControls.start({
          opacity: 1,
          y: 0,
          transition: {
            ease: 'easeOut',
            duration: 0.2,
          },
        });

        await titleControls.start({
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 100,
            damping: 16,
          },
        });
      } else {
        subtitleControls.start({
          opacity: 0,
          y: 30,
          transition: { duration: 0.8 },
        });
        titleControls.start({
          opacity: 0,
          y: 30,
          transition: { duration: 0.6 },
        });
      }
    };

    animate();
  }, [isInView]);

  return (
    <div ref={ref} className={`text-center unselectable mb-12 ${className}`}>
      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={subtitleControls}
        className={cn(
          `relative inline-block px-5 py-2 mb-4 rounded-full text-white text-sm md:text-base font-medium cursor-default transition-all duration-300`,
          subtitleClassName
        )}
      >
        {/* Glassy Background with Blur and Border */}
        <div className="absolute inset-0 rounded-full bg-black/30 backdrop-blur-md border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] z-0" />

        {/* Permanent Outer Glow Borders */}
        <div className="absolute inset-0 z-0 rounded-full pointer-events-none transition-all duration-500">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent opacity-100" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent opacity-100" />
        
        </div>

        {/* Noise Texture Layer */}
        <div className="absolute inset-0 z-0  opacity-[0.04] mix-blend-soft-light rounded-full pointer-events-none" />

        {/* Animated Border Pulse (permanent) */}
        <div className="absolute -inset-[2px] z-0 bg-gradient-to-tr from-indigo-500/20 via-pink-500/10 to-purple-500/20 opacity-50 animate-pulse pointer-events-none blur-2xl rounded-full transition-all duration-1000" />

        {/* Actual Subtitle Text */}
        <span className="relative z-10">{subtitle}</span>
      </motion.div>
      
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={titleControls}
        className={`
          text-3xl md:text-5xl lg:text-6xl 
          font-bold 
          leading-tight ${titleClassName}
        `}
      >
        {title}{' '}
        {titleAddon && (
          <span className=" text-colorfull p-1  animate-gradient-x text-3xl md:text-5xl lg:text-6xl font-nyght italic font-bold">
            {titleAddon}
          </span>
        )}
      </motion.h1>
    </div>
  );
};

export default PageHeader;
