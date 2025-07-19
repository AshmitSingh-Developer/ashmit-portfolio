import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaLinkedinIn, FaGithub,FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import DeveloperSvg from './parts/HomePageSvg/DeveloperSvg';

const PortfolioHome = () => {
  const [text] = useTypewriter({
    words: ['Full-Stack Developer', 'UI/UX Designer','AI Engineer','Problem Solver','Maths Lover'],
    loop: true,
    typeSpeed: 140,
    deleteSpeed: 70,
  });

  return (
    <div className='w-full bg-transparent flex flex-col lg:flex-row items-start px-6 sm:px-12 md:px-16 lg:px-24 pt-4 md:pt-6 pb-4 md:pb-6 lg:pb-8 '>
      {/* Left Column (Text Content) */}
      <div className='w-full lg:w-1/2 unselectable flex flex-col justify-start items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0'>
        <div className='max-w-xl'>
          <p className='text-xl ml-1 md:text-2xl text-gray-300 mb-2'>Hi, I am</p>
          <h1 className='text-4xl  h-[40px] sm:h-[51px] lg:h-[64px] text-Helvetica  sm:text-5xl md:text-5xl overflow-visible lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text'>
            Ashmit Singh
          </h1>
          <h2 className='text-2xl md:text-4xl font-Avertastd font-bold text-gray-300 mb-6'>
            <span className='text-cyan-400'>{text}</span>
            <Cursor cursorStyle='!' />
          </h2>
          <p className='text-base md:text-lg text-gray-400 mb-8'>
            Crafting dynamic and responsive web solutions with a focus on intuitive user experiences and robust back-end systems.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8'>
            <a href="/resume.pdf" download className='px-6 py-3 bg-cyan-500 text-black font-Helvetca rounded-lg hover:bg-cyan-600 transition-all duration-300 [box-shadow:0_0_8px_rgba(6,182,212,0.5)] hover:[box-shadow:0_0_20px_rgba(6,182,212,0.8)]'>
              My Resume
            </a>
            <a href="#contact" className='px-6 py-3 border-1 border-cyan-500 text-cyan-500 font-helvetica rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300 hover:[box-shadow:0_0_15px_rgba(6,182,212,0.7)]'>
              Let's Talk
            </a>
          </div>
          <div className='hidden lg:flex items-center justify-center lg:justify-start gap-6'>
            <a href="#" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-cyan-400 transition-colors duration-300'>
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-cyan-400 transition-colors duration-300'>
              <FaGithub size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-cyan-400 transition-colors duration-300'>
              <FaXTwitter size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-cyan-400 transition-colors duration-300'>
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column (SVG) */}
      <div className='w-full lg:w-1/2 flex items-start justify-center px-4 sm:px-8 md:px-12 lg:mt-0'>
        <DeveloperSvg />
      </div>
    </div>
  );
};

export default PortfolioHome;
