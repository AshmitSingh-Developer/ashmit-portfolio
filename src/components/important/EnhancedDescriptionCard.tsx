'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import useHoverOrFocus from '../../app/hooks/useHoverOrFocus';

interface ReusableCardProps {
  title?: string;
  description: string;
  className?: string;
  button?: React.ReactNode;
}

const ReusableCard: React.FC<ReusableCardProps> = ({
  title,
  description,
  className,
  button,
}) => {
  const { isInteracting, interactionHandlers } = useHoverOrFocus();

  return (
    <motion.div
      className={cn('relative w-full', className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div
        className={cn(
          'relative p-6 md:p-8 lg:p-10 rounded-2xl border border-transparent group overflow-hidden bg-black/60 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.05)] transition-all duration-300',
          isInteracting ? 'hover-active' : ''
        )}
        {...interactionHandlers}
        tabIndex={0} // enables focus for accessibility
      >
        {/* Outer Glow on Hover (All Borders) */}
        <div className="absolute inset-0 z-0 rounded-2xl pointer-events-none transition-all duration-500">
          <div className={cn(
            'absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent opacity-0 transition-opacity duration-500',
            isInteracting && 'opacity-100'
          )} />
          <div className={cn(
            'absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent opacity-0 transition-opacity duration-500',
            isInteracting && 'opacity-100'
          )} />
          <div className={cn(
            'absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-purple-400/50 to-transparent opacity-0 transition-opacity duration-500',
            isInteracting && 'opacity-100'
          )} />
          <div className={cn(
            'absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-blue-400/50 to-transparent opacity-0 transition-opacity duration-500',
            isInteracting && 'opacity-100'
          )} />
        </div>

        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 z-0 pointer-events-none  opacity-[0.04] mix-blend-soft-light" />

        {/* Hover Reflection Glow */}
        <div className={cn(
          'absolute inset-0 z-0 pointer-events-none bg-radial-gradient from-white/5 to-transparent opacity-0 transition-opacity duration-700 blur-2xl',
          isInteracting && 'opacity-100'
        )} />

        {/* Animated Border Pulse */}
        <div className={cn(
          'absolute -inset-[2px] rounded-[20px] z-0 bg-gradient-to-tr from-indigo-500/20 via-pink-500/10 to-purple-500/20 opacity-0 pointer-events-none blur-3xl transition-all duration-1000',
          isInteracting && 'opacity-50 animate-pulse'
        )} />

        {/* Title */}
        {title && (
          <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-center mb-4 text-transparent bg-gradient-to-r from-[#7F00FF] via-[#00C9FF] to-[#FF00CC] bg-clip-text drop-shadow-[0_2px_8px_rgba(255,0,255,0.3)]">
            {title}
            <div
              className={cn(
                'w-0 h-[1.5px] mx-auto mt-[6px] bg-gradient-to-r from-[#00C9FF] via-[#FF00CC] to-[#7F00FF] rounded-full transition-all duration-500 shadow-md',
                isInteracting && 'w-2/3'
              )}
            />
          </h3>
        )}

        {/* Description */}
        <p className="relative z-10 text-base md:text-lg text-zinc-400 text-center leading-relaxed tracking-wide">
          {description}
        </p>

        {button && (
          <div className="relative z-10 mt-6 flex justify-center">
            {button}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ReusableCard;
