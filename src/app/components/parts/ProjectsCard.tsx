'use client';

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import useHoverOrFocus from '../../hooks/useHoverOrFocus'; // Adjust import path as needed

interface Project {
  _id: string;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  github: string;
}

const ProjectsCard = ({ project }: { project: Project }) => {
  const { isInteracting, interactionHandlers } = useHoverOrFocus();

  return (
    <div className="group relative" {...interactionHandlers}>
      {/* Main Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/80 backdrop-blur-xl border border-slate-700/50 shadow-xl group-hover:shadow-2xl group-hover:border-purple-400/60 transition-all duration-500 ease-out h-full flex flex-col">
        
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

        {/* Image */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <div className="aspect-video w-full relative">
            <Image
              fill
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

            {/* Floating Buttons */}
            <div className={`absolute top-4 right-4 z-20 flex gap-3 transition-all duration-400 ${isInteracting ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-600/50 text-white hover:bg-purple-600 hover:border-purple-400 transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-600/50 text-white hover:bg-blue-600 hover:border-blue-400 transition-all duration-300 hover:scale-110"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 space-y-4 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-500">
            {project.title}
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm lg:text-base group-hover:text-slate-200 transition-colors duration-300 flex-1">
            {project.des}
          </p>

          {/* Tech Stack */}
          <div className="flex items-center gap-3 pt-2">
            {project.iconLists.map((icon, index) => (
              <div key={index} className="relative group/icon">
                <div className="w-11 h-11 rounded-xl bg-slate-800/60 backdrop-blur-sm border border-slate-600/40 flex items-center justify-center transition-all duration-300 group-hover:border-purple-400/60 group-hover:bg-slate-700/60 group-hover:scale-105">
                  <Image width={20} height={20} src={icon} alt="tech" className="object-contain" />
                </div>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-900/95 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-slate-600/50 shadow-lg">
                  Technology
                </div>
              </div>
            ))}
          </div>

          {/* Footer Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
            <div className="flex gap-3 items-center w-full">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 text-sm bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-xl px-4 py-3 transition-all hover:scale-[1.03] hover:bg-purple-600/80 hover:border-purple-400"
              >
                <FaGithub className="w-4 h-4" />
                <span>Source</span>
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 text-white text-sm rounded-xl py-3 bg-gradient-to-r from-purple-600 to-blue-600 transition-all hover:scale-[1.03]"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Optional Subtle Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>
    </div>
  );
};

export default ProjectsCard;
