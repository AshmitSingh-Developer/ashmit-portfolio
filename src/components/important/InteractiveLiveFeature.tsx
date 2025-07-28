'use client';

import React, { useState, useEffect } from 'react';
import {
  FaVolumeUp, FaVolumeMute, FaExpand, FaCompress,
  FaCog, FaEye
} from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const InteractiveStatusPanel: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [performanceMetrics, setPerformanceMetrics] = useState({ fps: 60, ping: 12 });
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewCount, setViewCount] = useState(1247);
  const [connectionStatus, setConnectionStatus] = useState<'online' | 'offline'>('online');
  const [showPanel, setShowPanel] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPerformanceMetrics({
        fps: Math.floor(Math.random() * 5) + 58,
        ping: Math.floor(Math.random() * 10) + 8
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const formatTime = (date: Date): string =>
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <>
      {/* Floating Circular Button */}
      <div className="fixed bottom-6 right-6 z-[99] unselectable flex items-center justify-center">
        {/* Outer Circular Rolling Text */}
        <div
          className={`absolute w-20 h-20 sm:w-26 sm:h-26 pointer-events-none ${
            isHovered ? 'animate-spin-fast' : 'animate-spin-slow'
          }`}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path
                id="textCircle"
                d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                fill="none"
              />
            </defs>
            <text fill="#FFF" fontSize="9" fontFamily="monospace" textLength={216}>
              <textPath xlinkHref="#textCircle" startOffset="0%">
                •  Ashmit Technologie&apos;s   •   Ashmit Technologie&apos;s
              </textPath>
            </text>
          </svg>
        </div>

        <button
          onClick={() => {
            setShowPanel(!showPanel);

            // On mobile/touch devices, simulate hover effect briefly
            if ('ontouchstart' in window) {
              setIsHovered(true);
              setTimeout(() => setIsHovered(false), 200); // revert after 0.2s
            }
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          className="relative h-12 w-12 sm:w-14 sm:h-14 rounded-full bg-black/30 backdrop-blur-md border border-indigo-400/20 shadow-xl flex items-center justify-center overflow-hidden hover:scale-101 transition-all duration-300"
        >
          <span className="text-indigo-200 text-[10px] font-bold font-mono z-10">Click Me</span>
        </button>
      </div>

      {/* Animated Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed bottom-36 unselectable right-6 z-50 flex flex-col gap-2"
          >
            {/* Time Display */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="px-3 py-2 bg-black/60 backdrop-blur-md border border-indigo-400/30 rounded-lg text-sm text-indigo-300 font-mono text-center"
            >
              {formatTime(currentTime)}
            </motion.div>

            {/* Performance Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-2"
            >
              <div className="px-2 py-1 bg-black/60 backdrop-blur-md border border-indigo-400/30 rounded-md text-xs text-indigo-300 font-mono">
                {performanceMetrics.fps} FPS
              </div>
              <div className="px-2 py-1 bg-black/60 backdrop-blur-md border border-indigo-400/30 rounded-md text-xs text-indigo-300 font-mono">
                {performanceMetrics.ping}ms
              </div>
            </motion.div>

            {/* Control Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-2"
            >
              <button
                onClick={() => setAudioEnabled(!audioEnabled)}
                className="p-2 bg-black/60 backdrop-blur-md border border-indigo-400/30 rounded-lg text-indigo-300 hover:bg-indigo-500/20 transition-all duration-300 hover:scale-110"
                title="Toggle Audio"
              >
                {audioEnabled ? <FaVolumeUp size={14} /> : <FaVolumeMute size={14} />}
              </button>
              <button
                onClick={handleFullscreen}
                className="p-2 bg-black/60 backdrop-blur-md border border-indigo-400/30 rounded-lg text-indigo-300 hover:bg-indigo-500/20 transition-all duration-300 hover:scale-110"
                title="Fullscreen"
              >
                {isFullscreen ? <FaCompress size={14} /> : <FaExpand size={14} />}
              </button>
              <button
                className="p-2 bg-black/60 backdrop-blur-md border border-indigo-400/30 rounded-lg text-indigo-300 hover:bg-indigo-500/20 transition-all duration-300 hover:scale-110"
                title="Settings"
              >
                <FaCog size={14} />
              </button>
            </motion.div>

            {/* Status Indicators */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-between px-3 py-2 bg-black/60 backdrop-blur-md border border-indigo-400/30 rounded-lg"
            >
              <div className="flex items-center gap-2 text-xs text-indigo-300">
                <div
                  className={`w-2 h-2 rounded-full ${
                    connectionStatus === 'online'
                      ? 'bg-green-400 animate-pulse'
                      : 'bg-red-400'
                  }`}
                />
                <span className="font-mono capitalize">{connectionStatus}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-indigo-300">
                <FaEye size={10} />
                <span className="font-mono">{viewCount.toLocaleString()}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InteractiveStatusPanel;

