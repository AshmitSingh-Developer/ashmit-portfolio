'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface SpaceBackgroundProps {
  className?: string;
}

const SpaceBackground: React.FC<SpaceBackgroundProps> = ({
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 w-full h-full overflow-hidden ${className}`}
      style={{ zIndex: 1 }}
    >
      {/* Premium dark space gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />
      
      {/* Deep space radial gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.8) 0%, rgba(0, 0, 0, 0.95) 70%, #000000 100%)',
        }}
      />

      {/* Subtle premium accent gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)',
        }}
      />

      {/* Single subtle nebula accent */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, rgba(99, 102, 241, 0.02) 40%, transparent 70%)',
          filter: 'blur(80px)',
          top: '20%',
          left: '60%',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Premium vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.8) 100%)',
        }}
      />
    </div>
  );
};

export default SpaceBackground;