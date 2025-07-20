import React, { useState, useMemo,MutableRefObject } from 'react';
import { motion, AnimatePresence,Variants } from 'framer-motion';

type IrisGateCardProps = {
  availableCardRef: MutableRefObject<HTMLDivElement | null>;
  availableInView: boolean;
  cardVariants: Variants;
  itemVariants: Variants;
};

const IrisGateCard = ({ availableCardRef, availableInView, cardVariants, itemVariants }:IrisGateCardProps) => {
  const [isOpening, setIsOpening] = useState(false);

  // Memoize particle positions for better performance
  const particlePositions = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      angle: i * 12,
      delay: 0.2 + (i * 0.01),
      color: i % 4 === 0 ? '#38bdf8' : i % 4 === 1 ? '#8b5cf6' : i % 4 === 2 ? '#22c55e' : '#06b6d4'
    })), []
  );

  const energyPositions = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      angle: i * 18,
      delay: 0.4 + (i * 0.02),
      color: i % 3 === 0 ? 'rgba(56, 189, 248, 0.7)' : i % 3 === 1 ? 'rgba(139, 92, 246, 0.7)' : 'rgba(34, 197, 94, 0.7)'
    })), []
  );

  const starPositions = useMemo(() => 
    Array.from({ length: 30 },() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      size: Math.random() * 0.5 + 0.5
    })), []
  );

  const handleClick = () => {
    setIsOpening(true);
    
    setTimeout(() => {
      window.open('/hire-me', '_blank');
      setIsOpening(false);
    }, 2500);
  };

  return (
    <>
      {/* Responsive Card Component */}
      <motion.div
        ref={availableCardRef}
        className="
          p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl 
          bg-gradient-to-br from-blue-900/20 to-purple-900/15 
          backdrop-blur-lg border border-blue-400/20 text-center 
          hover:border-blue-400/40 cursor-pointer overflow-hidden relative
          transition-colors duration-300 w-full max-w-sm mx-auto
        "
        onClick={handleClick}
        initial="hidden"
        animate={availableInView ? "visible" : "hidden"}
        variants={cardVariants}
        whileHover={{ 
          y: -2,
          transition: { duration: 0.2 } 
        }}
        whileTap={{ scale: 0.98 }}
        style={{ 
          transform: isOpening ? 'scale(1.02)' : 'scale(1)',
          opacity: isOpening ? 0.9 : 1,
          transition: 'all 0.3s ease-out'
        }}
      >
        {/* Premium Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        
        {/* Enhanced Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-700" />
        
        {/* Responsive Content */}
        <motion.div 
          className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3 relative z-10"
          variants={itemVariants}
        >
          <div className="relative">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
            <div className="absolute inset-0 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-ping" />
          </div>
          <h4 className="text-sm sm:text-lg font-semibold text-white">Available for new opportunities</h4>
        </motion.div>
        
        <motion.p 
          className="text-gray-300 text-xs sm:text-sm relative z-10"
          variants={itemVariants}
        >
          I am actively seeking new roles and collaborations.
        </motion.p>
        <p className="text-[10px] text-cyan-600 mt-2  cursor-pointer">I’m ready to collaborate — tap to learn more</p>
      </motion.div>

      {/* Optimized Space Iris Gate Overlay */}
      <AnimatePresence>
        {isOpening && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #581c87 100%)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Optimized Starfield */}
            {starPositions.map((star, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute bg-white rounded-full opacity-70"
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  filter: 'blur(0.3px)',
                  boxShadow: '0 0 2px rgba(255, 255, 255, 0.6)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.7, 0.5, 0.7],
                  scale: [0, 1, 0.8, 1]
                }}
                transition={{
                  duration: 1.5,
                  delay: star.delay,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Simplified Outer Ring */}
            <motion.div
              className="absolute rounded-full border-2 border-indigo-400/30"
              style={{
                width: 'min(80vw, 400px)',
                height: 'min(80vw, 400px)',
                background: 'conic-gradient(from 0deg, transparent, rgba(99, 102, 241, 0.2), transparent)',
                filter: 'blur(1px)'
              }}
              initial={{ scale: 0, rotate: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 2.5],
                rotate: [0, 180, 360],
                opacity: [0, 0.8, 0.2]
              }}
              transition={{
                duration: 2.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                times: [0, 0.4, 1]
              }}
            />

            {/* Simplified Middle Ring */}
            <motion.div
              className="absolute rounded-full border-2"
              style={{
                width: 'min(60vw, 300px)',
                height: 'min(60vw, 300px)',
                background: 'conic-gradient(from 0deg, transparent, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.2), transparent)',
                filter: 'blur(1px)'
              }}
              initial={{ scale: 0, rotate: 0 }}
              animate={{ 
                scale: [0, 1, 2],
                rotate: [0, -180, -360]
              }}
              transition={{
                duration: 2.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                times: [0, 0.5, 1]
              }}
            />

            {/* Optimized Iris Blades */}
            {Array.from({ length: 12 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  width: '200vmax',
                  height: '200vmax',
                  background: `linear-gradient(to right, 
                    rgba(30, 41, 59, 0.95) 0%, 
                    ${i % 3 === 0 ? 'rgba(59, 130, 246, 0.2)' : 
                      i % 3 === 1 ? 'rgba(139, 92, 246, 0.2)' : 
                      'rgba(34, 197, 94, 0.15)'} 50%, 
                    rgba(30, 41, 59, 0.95) 100%)`,
                  clipPath: `polygon(50% 50%, ${48 + i * 2}% 0%, ${52 + i * 2}% 0%)`,
                  transformOrigin: 'center center',
                  transform: `rotate(${i * 30}deg)`,
                  willChange: 'transform, opacity'
                }}
                initial={{ 
                  scale: 0,
                  rotate: i * 30,
                  opacity: 0
                }}
                animate={{ 
                  scale: [0, 1.5, 0.3],
                  rotate: [i * 30, i * 30 + 60, i * 30 + 120],
                  opacity: [0, 0.9, 0.7]
                }}
                transition={{
                  duration: 2.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  times: [0, 0.6, 1]
                }}
              />
            ))}
            
            {/* Optimized Central Portal */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 'min(25vw, 120px)',
                height: 'min(25vw, 120px)',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.8) 0%, rgba(139, 92, 246, 0.6) 50%, rgba(30, 41, 59, 0.9) 100%)',
                boxShadow: '0 0 60px rgba(56, 189, 248, 0.4)',
                willChange: 'transform, opacity'
              }}
              initial={{ 
                scale: 0,
                rotate: 0,
                opacity: 0
              }}
              animate={{ 
                scale: [0, 1, 20],
                rotate: [0, 180, 360],
                opacity: [0, 1, 0.8]
              }}
              transition={{
                duration: 2.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                times: [0, 0.3, 1]
              }}
            />

            {/* Optimized Inner Glow */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 'min(20vw, 100px)',
                height: 'min(20vw, 100px)',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(56, 189, 248, 0.6) 50%, transparent 100%)',
                filter: 'blur(2px)',
                willChange: 'transform, opacity'
              }}
              initial={{ 
                scale: 0,
                opacity: 0
              }}
              animate={{ 
                scale: [0, 1, 18],
                opacity: [0, 0.8, 0.5]
              }}
              transition={{
                duration: 2.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                times: [0, 0.4, 1]
              }}
            />

            {/* Optimized Particles */}
            {particlePositions.map((particle, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: particle.color,
                  left: '50%',
                  top: '50%',
                  boxShadow: `0 0 4px ${particle.color}`,
                  willChange: 'transform, opacity'
                }}
                initial={{ 
                  scale: 0,
                  x: 0,
                  y: 0,
                  opacity: 0
                }}
                animate={{
                  scale: [0, 1, 0.5, 0],
                  x: [
                    0,
                    Math.cos(particle.angle * Math.PI / 180) * 80,
                    Math.cos(particle.angle * Math.PI / 180) * Math.min(window.innerWidth * 0.4, 300)
                  ],
                  y: [
                    0,
                    Math.sin(particle.angle * Math.PI / 180) * 80,
                    Math.sin(particle.angle * Math.PI / 180) * Math.min(window.innerHeight * 0.4, 300)
                  ],
                  opacity: [0, 1, 0.8, 0]
                }}
                transition={{
                  duration: 2,
                  delay: particle.delay,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  times: [0, 0.3, 0.8, 1]
                }}
              />
            ))}

            {/* Optimized Energy Sparks */}
            {energyPositions.map((energy, i) => (
              <motion.div
                key={`energy-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  filter: 'blur(0.3px)',
                  boxShadow: `0 0 4px ${energy.color}`,
                  willChange: 'transform, opacity'
                }}
                initial={{ 
                  scale: 0,
                  x: 0,
                  y: 0,
                  opacity: 0
                }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos(energy.angle * Math.PI / 180) * Math.min(window.innerWidth * 0.3, 200),
                  y: Math.sin(energy.angle * Math.PI / 180) * Math.min(window.innerHeight * 0.3, 200),
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1.8,
                  delay: energy.delay,
                  ease: "easeOut"
                }}
              />
            ))}
            
            {/* Responsive Status Text */}
            <motion.div
              className="absolute text-center z-10 px-4"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ 
                opacity: [0, 1, 1, 0], 
                y: [30, 0, 0, -20],
                scale: [0.8, 1, 1, 1.1]
              }}
              transition={{
                duration: 2.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                times: [0, 0.2, 0.8, 1]
              }}
            >
              <div className="bg-gradient-to-r from-[#00c6ff] via-[#7b2ff7] to-[#f953c6] text-transparent bg-clip-text text-lg sm:text-xl md:text-2xl font-bold mb-2 drop-shadow-lg">
                Ashmit Quantum Gateway Activation
              </div>
              <div className="bg-gradient-to-r from-[#4e54c8] via-[#8f94fb] to-[#4e54c8] text-transparent bg-clip-text text-sm sm:text-base font-medium drop-shadow-md mb-1">
                ...Calibrating dimensional channels...
              </div>
              <div className="bg-gradient-to-r from-[#11998e] via-[#38ef7d] to-[#11998e] text-transparent bg-clip-text text-xs sm:text-sm font-light drop-shadow-sm">
                Establishing interdimensional link
              </div>
            </motion.div>

            {/* Simplified Progress Ring */}
            <motion.div
              className="absolute rounded-full border-2 border-transparent"
              style={{
                width: 'min(70vw, 350px)',
                height: 'min(70vw, 350px)',
                background: 'conic-gradient(from 0deg, transparent, rgba(56, 189, 248, 0.6), transparent)',
                mask: `radial-gradient(circle, transparent calc(min(35vw, 175px) - 4px), black calc(min(35vw, 175px) - 2px), black calc(min(35vw, 175px) + 2px), transparent calc(min(35vw, 175px) + 4px))`,
                filter: 'blur(0.5px)'
              }}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ 
                rotate: [0, 360, 720],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2.5,
                ease: "linear",
                times: [0, 0.7, 1]
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default IrisGateCard;