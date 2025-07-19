'use client';
import React from 'react'
import dynamic from 'next/dynamic';
import Navbar from '../components/PortfolioNavbar';
import Home from '../components/PortfolioHome';
import Footer from '../components/parts/PortfolioFooter'
import SkeletonSkills from '../data/skeletons/SkeletonSkills';
import SkeletonProjects from '../data/skeletons/SkeletonProject';


const About = dynamic(() => import('../components/PortfolioAbout'), { 
  ssr: false,
  });
const Projects = dynamic(() => import('../components/PortfolioProjects'), { 
  ssr: false,
  loading: () => <SkeletonProjects />,
  });
const Skills = dynamic(() => import('../components/PortfolioSkills'), { 
  ssr: false,
  loading: () => <SkeletonSkills />,
   });
const Contacts = dynamic(() => import('../components/PortfolioContacts'), { 
  ssr: false,
});




function Portfolio() {
  function myLinks(LinkTag: React.ComponentType,linkID: string){
    return <section id={linkID} className="  scroll-mt-12 sm:scroll-mt-14  w-full ">
      <LinkTag/>
    </section>
  }
  return (
  <>
    {/* Navbar */}
    <Navbar/> 

   <div className='z-4 pt-12 sm:pt-14 flex flex-col justify-center items-center gap-2 '>
    

    {/* Sections */}
    
    {/* Home */}
    {myLinks(Home,"home")}

    {/* About */}
   {myLinks(About,"about")}

    {/* Projects */}
   {myLinks(Projects,"projects")}

    {/* Skills */}
    {myLinks(Skills,"mySkills")}

    {/* Contacts */}
    {myLinks(Contacts,"contacts")}

    {/* Footer */}
    <Footer/>
    
   </div>
 
  </>
  )
}

export default Portfolio