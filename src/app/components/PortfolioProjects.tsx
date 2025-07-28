'use client';
import React, { useState,useEffect } from 'react';
import ProjectsCard from './parts/ProjectsCard';
import PageHeader from './parts/PageHeader';
import ReusableCard from '@/components/important/EnhancedDescriptionCard';
import SkeletonProjects from '../data/skeletons/SkeletonProject';

interface Project {
  _id: string;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  github: string;
}

// Demo Component with Sample Data
const ProjectsShowcase = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (!res.ok) throw new Error('Failed to fetch projects');
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error('❌ Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);


  return (
    <div className="min-h-screen py-16 px-6 sm:px-12 md:px-20 lg:px-24 relative overflow-hidden ">
      
          
      <div className="max-w-7xl mx-auto relative z-10">
         {/* Header Section */}
        <div>
          <PageHeader 
            subtitle="💡 Showcasing My Work" 
            title="Featured " 
            titleAddon={
              <span className="">
                Projects
              </span>
            } 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {loading ? (
            <p className="text-center text-slate-300"><SkeletonProjects/></p>
          ) : projects.length === 0 ? (
            <p className="text-center text-red-400">No projects found.</p>
          ) : (
              projects.map((project) => (
                <ProjectsCard key={project._id} project={project} />
              ))
            )}
        </div>
        <div className='w-full mt-20'>
        <ReusableCard
          title="Help Us Build Something Even Better"
          description="We&apos;d love to hear your thoughts, wild ideas, or tiny tweaks that could make this experience even better. Whether it&apos;s a futuristic feature, a quirky animation, or something magical — drop it in. Your imagination fuels innovation!"
          button={
            <a
              href="/suggestion-page"
              target='_blank'
              className="inline-block px-6 py-2 unselectable text-lg font-medium tracking-wide font-Helvetica  text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:shadow-pink-500/50 transition-transform duration-300 hover:scale-102"
            >
              ✨ Suggest Now
            </a>
          }
        />
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;