'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';

const PortfolioAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = useMemo(() => [
    { name: 'Frontend Development', level: 95, color: 'from-blue-500 to-purple-600' },
    { name: 'Backend Development', level: 88, color: 'from-green-500 to-teal-600' },
    { name: 'UI/UX Design', level: 82, color: 'from-pink-500 to-rose-600' },
    { name: 'Mobile Development', level: 75, color: 'from-orange-500 to-red-600' }
  ], []);

  const tools = useMemo(() => [
    { name: 'VS Code', icon: '⚡', category: 'Editor' },
    { name: 'Next.js', icon: '⚛️', category: 'Framework' },
    { name: 'Tailwind CSS', icon: '🎨', category: 'Styling' },
    { name: 'Figma', icon: '🎭', category: 'Design' },
    { name: 'Node.js', icon: '🚀', category: 'Backend' },
    { name: 'TypeScript', icon: '📘', category: 'Language' }
  ], []);

  const stats = useMemo(() => [
    { number: '50+', label: 'Projects Completed', icon: '🚀' },
    { number: '3+', label: 'Years Experience', icon: '⏰' },
    { number: '∞', label: 'Cups of Coffee', icon: '☕' }
  ], []);

  const handleConnectClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const contactsSection = document.querySelector('#contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback if #contacts doesn't exist
      window.location.hash = 'contacts';
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [skills.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Optimized background elements - reduced blur and animations */}
      <div className="absolute inset-0 overflow-hidden will-change-transform">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/15 to-purple-600/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-600/15 to-teal-600/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-600/8 to-orange-600/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-700 will-change-transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Main About Card with Image */}
          <div className={`xl:col-span-7 transition-all duration-700 will-change-transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/8 transition-colors duration-300">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                
                {/* About Text Content */}
                <div className="flex-1 space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p className="text-xl text-white font-medium">
                    I&apos;m a passionate full-stack developer with a knack for creating dynamic and user-friendly web applications.
                  </p>
                  <p>
                    With expertise in modern front-end technologies like <span className="text-blue-400 font-semibold">React</span> and <span className="text-blue-400 font-semibold">Next.js</span>, combined with robust back-end solutions using <span className="text-green-400 font-semibold">Node.js</span> and <span className="text-green-400 font-semibold">Express</span>, I build comprehensive digital experiences.
                  </p>
                  <p>
                    I thrive on solving complex problems and learning new technologies. My goal is to build applications that are not only functional but also provide an exceptional user experience that delights and engages users.
                  </p>
                </div>

                {/* Optimized Image Card */}
                <div className={`lg:w-1/3 xl:w-1/4 flex-shrink-0 transition-all duration-700 will-change-transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
                  <div className="relative group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-4 border border-white/10 shadow-xl hover:shadow-blue-500/10 transition-all duration-500 group-hover:border-blue-500/30">
                      <div className="relative overflow-hidden rounded-2xl">
                        {/* Simplified gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 via-transparent to-purple-600/15 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                        
                        {/* Image container */}
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                          <Image
                            fill
                            src="/my-avatar2.png"
                            alt="Ashmit Singh"
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          
                          {/* Simplified floating particles */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
                            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '100ms' }}></div>
                            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '300ms' }}></div>
                            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '500ms' }}></div>
                          </div>
                        </div>

                        {/* Fixed Overlay content */}
                        <div 
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 h-28 translate-y-full group-hover:translate-y-0 transition-transform duration-400 flex flex-col justify-end z-30"
                          style={{ pointerEvents: 'auto' }}
                        >
                          <h3 className="text-base font-bold text-white mb-1">Ashmit Singh</h3>
                          <p className="text-blue-400 font-semibold text-xs mb-2">Full Stack Developer</p>
                          <button 
                            onClick={handleConnectClick}
                            className="inline-flex items-center justify-center px-3 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full font-medium text-white text-xs transition-all duration-200 hover:bg-white/30 hover:scale-105 w-fit cursor-pointer z-40"
                            type="button"
                            aria-label="Navigate to contacts section"
                          >
                            Let&apos;s Connect
                          </button>
                        </div>
                      </div>

                      {/* Simplified decorative elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-400"></div>
                      <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-400"></div>
                    </div>

                    {/* Reduced glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Optimized sections */}
          <div className={`xl:col-span-5 space-y-8 transition-all duration-700 will-change-transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
            
            {/* Skills Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/8 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Skills & Expertise
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-white">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${activeSkill === index ? 'animate-pulse' : ''}`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/8 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Favorite Tools
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tools.map((tool) => (
                  <div 
                    key={tool.name} 
                    className="relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-xl p-4 transition-all duration-200 hover:scale-105 cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2 transition-transform duration-200 hover:scale-110">
                        {tool.icon}
                      </div>
                      <h4 className="font-semibold text-white text-sm mb-1">{tool.name}</h4>
                      <p className="text-xs text-gray-400">{tool.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center hover:bg-white/8 transition-all duration-200 hover:scale-105">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAbout;