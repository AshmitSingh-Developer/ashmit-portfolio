'use client';
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  github: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/80 backdrop-blur-xl border border-slate-700/50 shadow-xl group-hover:shadow-2xl group-hover:border-purple-400/60 transition-all duration-500 ease-out h-full flex flex-col">
        
        {/* Sharp Animated Background with Neon Accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        
        {/* Clean Border Highlight */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-purple-400/30 group-hover:via-blue-400/30 group-hover:to-cyan-400/30 transition-all duration-400" />
        
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <div className="aspect-video w-full relative">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Sharp Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            
            {/* Floating Action Buttons with Sharp Animation */}
            <div className={`absolute top-4 right-4 flex gap-3 transition-all duration-400 ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-600/50 text-white hover:bg-purple-600/80 hover:border-purple-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-600/50 text-white hover:bg-blue-600/80 hover:border-blue-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative p-6 space-y-4 flex-1 flex flex-col">
          
          {/* Title with Clean Gradient */}
          <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-500">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-300 leading-relaxed text-sm lg:text-base group-hover:text-slate-200 transition-colors duration-300 flex-1">
            {project.des}
          </p>

          {/* Tech Stack Icons with Clean Hover */}
          <div className="flex items-center gap-3 pt-2">
            {project.iconLists.map((icon, index) => (
              <div
                key={index}
                className="relative group/icon"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className={`w-11 h-11 rounded-xl bg-slate-800/60 backdrop-blur-sm border border-slate-600/40 flex items-center justify-center transition-all duration-300 group-hover:border-purple-400/60 group-hover:bg-slate-700/60 group/icon:hover:scale-110 group/icon:hover:bg-purple-500/20 group/icon:hover:border-purple-400`}>
                  <img src={icon} alt="tech" className="w-5 h-5 object-contain" />
                </div>
                
                {/* Sharp Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-900/95 text-white text-xs px-3 py-2 rounded-lg opacity-0 group/icon:hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-slate-600/50 shadow-lg">
                  Technology
                </div>
              </div>
            ))}
          </div>

          {/* Premium Enhanced Bottom Links */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
            <div className="flex gap-3 items-center w-full">
              
              {/* Enhanced Source Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/source relative flex items-center gap-2 text-slate-300 transition-all duration-500 text-sm bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-xl px-4 py-3 overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/30 cursor-pointer"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 opacity-0 group-hover/source:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover/source:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/source:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover/source:border-purple-400/70 transition-all duration-500 shadow-[0_0_20px_rgba(147,51,234,0)] group-hover/source:shadow-[0_0_20px_rgba(147,51,234,0.3)] pointer-events-none"></div>
                
                {/* Content */}
                <FaGithub className="w-4 h-4 relative z-10 group-hover/source:rotate-[360deg] group-hover/source:text-white transition-all duration-700 ease-out pointer-events-none" />
                <span className="font-medium relative z-10 group-hover/source:text-white transition-colors duration-500 pointer-events-none">Source</span>
                
                {/* Particle Effect */}
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover/source:opacity-100 group-hover/source:animate-ping transition-opacity duration-500 pointer-events-none"></div>
              </a>
              
              {/* Enhanced Live Demo Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/demo relative flex-1 flex items-center justify-center gap-2 text-white transition-all duration-500 text-sm rounded-xl px-6 py-3 overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/40 cursor-pointer"
              >
                {/* Multi-layer Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-500 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover/demo:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover/demo:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Enhanced Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/demo:translate-x-full transition-transform duration-1200 ease-in-out pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover/demo:translate-x-full transition-transform duration-800 delay-200 ease-in-out pointer-events-none"></div>
                
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover/demo:border-blue-300/50 transition-all duration-500 shadow-[0_0_30px_rgba(59,130,246,0)] group-hover/demo:shadow-[0_0_30px_rgba(59,130,246,0.4)] pointer-events-none"></div>
                
                {/* Pulsing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-xl opacity-0 group-hover/demo:opacity-100 group-hover/demo:animate-pulse transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Content */}
                <FaExternalLinkAlt className="w-4 h-4 relative z-10 group-hover/demo:rotate-12 group-hover/demo:scale-110 transition-all duration-500 ease-out drop-shadow-lg pointer-events-none" />
                <span className="font-medium relative z-10 drop-shadow-lg group-hover/demo:tracking-wider transition-all duration-500 pointer-events-none">Live Demo</span>
                
                {/* Premium Particle Effects */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-white/80 rounded-full opacity-0 group-hover/demo:opacity-100 group-hover/demo:animate-ping transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover/demo:opacity-100 group-hover/demo:animate-ping transition-opacity duration-500 delay-100 pointer-events-none"></div>
                
                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-xl bg-white/20 transform scale-0 group-hover/demo:scale-100 opacity-0 group-hover/demo:opacity-100 transition-all duration-700 ease-out pointer-events-none"></div>
                <div className="absolute inset-0 rounded-xl bg-white/10 transform scale-0 group-hover/demo:scale-110 opacity-0 group-hover/demo:opacity-100 transition-all duration-1000 ease-out delay-100 pointer-events-none"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
      </div>
    </div>
  );
};

// Demo Component with Sample Data
const ProjectShowcase = () => {
  const sampleProjects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      des: "A comprehensive analytics platform built with React, TypeScript, and machine learning algorithms for real-time data insights and predictive modeling.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      iconLists: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      ],
      link: "https://example.com",
      github: "https://github.com/example/repo"
    },
    {
      id: 2,
      title: "3D Portfolio Website",
      des: "An immersive 3D portfolio experience using Three.js, React, and modern web technologies with stunning visual effects and smooth interactions.",
      img: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=400&fit=crop",
      iconLists: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      ],
      link: "https://example.com",
      github: "https://github.com/example/repo"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      des: "A modern e-commerce solution with advanced features including real-time inventory, payment processing, and comprehensive admin dashboard.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      iconLists: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
      ],
      link: "https://example.com",
      github: "https://github.com/example/repo"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden p-8">
      {/* Crisp Animated Stars */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-32 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-60 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{animationDelay: '1.8s'}}></div>
      </div>
      
      {/* Clean Background Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-purple-900/15 via-purple-900/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-blue-900/15 via-blue-900/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-radial from-cyan-900/8 via-transparent to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
            Featured Projects
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover innovative solutions crafted with cutting-edge technologies and modern design principles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {sampleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;