import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface AshmitSinghLogoProps {
  className?: string;
  width?: number;
  height?: number;
  autoPlay?: boolean;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
}

const AshmitSinghLogo: React.FC<AshmitSinghLogoProps> = ({
  className = "",
  width = 400,
  height = 80,
  autoPlay = true,
  strokeWidth = 2.2,
  duration = 8,
  delay = 0
}) => {
  const controls = useAnimation();

  const letterPaths = {
    A: "M10 60 L25 15 L40 60 M18 45 L32 45",
    S: "M35 20 Q35 15 25 15 Q15 15 15 25 Q15 35 25 37.5 Q35 40 35 50 Q35 60 25 60 Q15 60 15 55",
    H: "M10 15 L10 60 M35 15 L35 60 M10 37.5 L35 37.5",
    M: "M10 60 L10 15 L25 37.5 L40 15 L40 60",
    I: "M10 15 L35 15 M22.5 15 L22.5 60 M10 60 L35 60",
    T: "M10 15 L50 15 M29.9 16.1 L29.9 60",
    S2: "M35 20 Q35 15 25 15 Q15 15 15 25 Q15 35 25 37.5 Q35 40 35 50 Q35 60 25 60 Q15 60 15 55",
    I2: "M10 15 L35 15 M22.5 15 L22.5 60 M10 60 L35 60",
    N: "M10 60 L10 15 L35 60 L35 15",
    G: "M35 25 Q35 15 25 15 Q15 15 15 37.5 Q15 60 25 60 Q35 60 35 45 L25 45",
    H2: "M10 15 L10 60 M35 15 L35 60 M10 37.5 L35 37.5"
  };

  const letterKeys = ['A', 'S', 'H', 'M', 'I', 'T', 'S2', 'I2', 'N', 'G', 'H2'];

  useEffect(() => {
    if (autoPlay) {
      controls.start({
  pathLength: [0, 1, 1, 0],
  strokeOpacity: [0, 1, 1, 0],
  transition: {
    duration,
    ease: "linear",
    times: [0, 0.35, 0.70, 1], // 45% draw, 40% hold, 15% fade
    repeat: Infinity,
    repeatType: "loop",
    delay,
  },
});
    }
  }, [autoPlay,controls,delay,duration]);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 520 80"
      className={className}
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* Aqua Neon Glow Filter */}
        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur2" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur3" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="blur3" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ASHMIT */}
      {letterKeys.slice(0, 6).map((letter, index) => (
        <g key={`${letter}-${index}`} transform={`translate(${index * 45 + 20}, 10)`}>
          <motion.path
            d={letterPaths[letter as keyof typeof letterPaths]}
            fill="none"
            stroke="#00fff7"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#neonGlow)"
            style={{ pathLength: 1 }}
            initial={{ pathLength: 0, strokeOpacity: 0 }}
            animate={controls}
          />
        </g>
      ))}

      {/* SINGH */}
      {letterKeys.slice(6).map((letter, index) => (
        <g key={`${letter}-${index + 6}`} transform={`translate(${index * 45 + 320}, 10)`}>
          <motion.path
            d={letterPaths[letter as keyof typeof letterPaths]}
            fill="none"
            stroke="#00fff7"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#neonGlow)"
            style={{ pathLength: 1 }}
            initial={{ pathLength: 0, strokeOpacity: 0 }}
            animate={controls}
          />
        </g>
      ))}
    </svg>
  );
};

export default AshmitSinghLogo;













  // const letterPaths = {
  //   A: "M10 60 L25 15 L40 60 M18 45 L32 45",
  //   S: "M35 20 Q35 15 25 15 Q15 15 15 25 Q15 35 25 37.5 Q35 40 35 50 Q35 60 25 60 Q15 60 15 55",
  //   H: "M10 15 L10 60 M35 15 L35 60 M10 37.5 L35 37.5",
  //   M: "M10 60 L10 15 L25 37.5 L40 15 L40 60",
  //   I: "M10 15 L35 15 M22.5 15 L22.5 60 M10 60 L35 60",
  //   T: "M10 15 L50 15 M29.9 16.1 L29.9 60",
  //   S2: "M35 20 Q35 15 25 15 Q15 15 15 25 Q15 35 25 37.5 Q35 40 35 50 Q35 60 25 60 Q15 60 15 55",
  //   I2: "M10 15 L35 15 M22.5 15 L22.5 60 M10 60 L35 60",
  //   N: "M10 60 L10 15 L35 60 L35 15",
  //   G: "M35 25 Q35 15 25 15 Q15 15 15 37.5 Q15 60 25 60 Q35 60 35 45 L25 45",
  //   H2: "M10 15 L10 60 M35 15 L35 60 M10 37.5 L35 37.5"
  // };