'use client';

import { useTypewriter, Cursor } from 'react-simple-typewriter';
import MyDeveloperSvg from './parts/HomePageSvg/DeveloperSvg';
import React, { useState, useEffect, useRef, useCallback, MouseEvent } from 'react';

import { FaLinkedinIn, FaGithub, FaInstagram, FaDownload, FaHeart, FaStar } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

// Developer SVG container
const DeveloperSvg = () => (
  <div className="w-full h-full bg-transparent rounded-2xl flex items-center justify-center  border border-slate-700/30 ">
    <div className="text-6xl pb-4 px-8 text-indigo-400"><MyDeveloperSvg /></div>
  </div>
);

const PortfolioHome = () => {
  const [text] = useTypewriter({
    words: ['Full-Stack Developer', 'UI/UX Designer', 'AI Engineer', 'Problem Solver', 'Maths Enthusiast'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 60,
  });

  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent | globalThis.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [handleMouseMove]);

  const socialLinks = [
    { icon: FaLinkedinIn, href: "#", color: "hover:text-cyan-400", label: "LinkedIn" },
    { icon: FaGithub, href: "#", color: "hover:text-cyan-400", label: "GitHub" },
    { icon: FaXTwitter, href: "#", color: "hover:text-cyan-400", label: "Twitter" },
    { icon: FaInstagram, href: "#", color: "hover:text-cyan-400", label: "Instagram" },
  ];

  return (
    <div
      ref={containerRef}
      className='relative w-full bg-transparent overflow-hidden min-h-screen flex flex-col lg:flex-row items-start px-4 sm:px-8 md:px-12 lg:px-20 mt-8 sm:mt-10 pt-4 md:pt-6 pb-2 md:pb-4 lg:pb-6'
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.03) 0%, transparent 70%)`
      }}
    >

      {/* Left Content */}
      <div className='relative w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-start text-center lg:text-left mb-6 lg:mb-0 z-10'>
        <div className='max-w-xl'>

          <p className='text-xl md:text-2xl text-slate-300 mb-1 ml-1 font-light tracking-wide'>
             Hi, I'm
          </p>

          <div className="relative mb-3">
            <h1 className='relative text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-2 leading-tight'>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text blur-sm opacity-50 animate-pulse">
                Ashmit Singh
              </span>
              
              <span className="relative bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text animate-gradient-flow">
                Ashmit Singh
              </span>
            </h1>
          </div>

          <h2 className='text-2xl md:text-3xl font-Avertastd font-bold text-slate-300 mb-5 leading-tight'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-slate-400 animate-gradient-flow'>
              {text}
            </span>
            <Cursor cursorStyle='!' />
          </h2>

          <div className="relative mb-5"> 
              <p className='relative  text-sm md:text-base text-gray-400 leading-relaxed'>
                Crafting dynamic web solutions with focus on intuitive UX and robust systems. 
                <span className="text-indigo-400 font-medium"> Transforming concepts into digital reality</span> through innovative technology.
              </p>
          </div>

          <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6'>
            <a href="/resume.pdf" download className='px-6 py-3 bg-cyan-500 text-black font-Helvetca rounded-lg hover:bg-cyan-600 transition-all duration-300 [box-shadow:0_0_8px_rgba(6,182,212,0.5)] hover:[box-shadow:0_0_20px_rgba(6,182,212,0.8)]'>
              My Resume
            </a>
            <a href="#contact" className='px-6 py-3 border-1 border-cyan-500 text-cyan-500 font-helvetica rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300 hover:[box-shadow:0_0_15px_rgba(6,182,212,0.7)]'>
              Let&apos;s Talk
            </a>
          
          </div>

          <div className='flex items-center justify-center lg:justify-start gap-4 mb-4'>
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative flex flex-col items-center p-2 text-slate-400 ${social.color} transition-all duration-300 transform hover:scale-103 hover:-translate-y-1  hover:shadow-lg`}
                  title={social.label}
                >
                  <Icon size={22} className="mb-2" />
                </a>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-sm text-slate-400 p-3 bg-black/20 rounded-lg border border-slate-700/30">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Available for opportunities</span>
            </div>
            <div className="flex items-center gap-2">
              <FaStar className="text-indigo-400" size={14} />
              <span className="font-mono">Verified Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side SVG */}
      <div className='w-full lg:w-1/2 flex items-start  justify-center  px-2 sm:px-8 md:px-12 lg:mt-0'>
        <DeveloperSvg />
      </div>

      <style jsx>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 4s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default PortfolioHome;
