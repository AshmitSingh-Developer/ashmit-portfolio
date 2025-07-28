'use client';
import React from 'react'
import dynamic from 'next/dynamic';
import Navbar from '../components/PortfolioNavbar';
import Home from '../components/PortfolioHome';
import Footer from '../../components/important/PortfolioFooter'
import SkeletonSkills from '../data/skeletons/SkeletonSkills';

import { useScrollToHash } from '../hooks/useScrollTOHash';
import { useUpdateHashOnScroll } from '../hooks/useUpdateHashonScroll';


const About = dynamic(() => import('../components/PortfolioAbout'), { 
  ssr: false,
  });
const Projects = dynamic(() => import('../components/PortfolioProjects'), { 
  ssr: false,
  });
const Skills = dynamic(() => import('../components/PortfolioSkills'), { 
  ssr: false,
  loading: () => <SkeletonSkills />,
   });
const Contacts = dynamic(() => import('../components/PortfolioContacts'), { 
  ssr: false,
});

const sectionIds = ['home', 'about', 'projects', 'mySkills', 'contacts'];



function Portfolio() {
  useScrollToHash();
  useUpdateHashOnScroll(sectionIds);

  function myLinks(LinkTag: React.ComponentType,linkID: string){
    return <section id={linkID} className="    w-full ">
      <LinkTag/>
    </section>
  }
  return (
  <>
   
    <Navbar/> 

   <div className='z-4  flex flex-col justify-center items-center gap-2 '>
    {/* Sections */}
    {myLinks(Home,"home")}
    {myLinks(About,"about")}
    {myLinks(Projects,"projects")}
    {myLinks(Skills,"mySkills")}
    {myLinks(Contacts,"contacts")}

   </div>
   
    <Footer/>
 
  </>
  )
}

export default Portfolio