'use client';
import { ReactNode, MouseEventHandler } from 'react';
import React, { useState } from 'react';
import Link from 'next/link';
import MobileContactLinks from './parts/ContactLinks';
import Logo from '../../components/important/LogoName';
import { AnimatePresence, motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { BsArrowUpRight } from "react-icons/bs";
import HireMeButton from './parts/HireMeBtn';


interface NavLinkProps{
  href: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const NAVIGATION_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#mySkills', label: 'Skills' },
  { href: '#contacts', label: 'Contacts' },
];

const NavLink = ({ href, children, onClick }:NavLinkProps) => {
  return (
    <Link href={href} onClick={onClick} className="hover:text-main-col duration-300 delay-20">
      {children}
    </Link>
  );
};

const PortfolioNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className='fixed top-0 z-40 w-screen shadow-2xs backdrop-blur-sm sm:w-full h-12 sm:h-14 pl-3 pr-0 sm:px-6 md:px-8 lg:px-12 overflow-hidden flex flex-row justify-between items-center'>
        <Logo />
        <div className='unselectable h-full hidden sm:gap-4 md:gap-7 lg:min-w-[600px] text-text font-NeueMachina right-0 sm:flex sm:flex-row sm:items-center sm:justify-between'>
          {NAVIGATION_ITEMS.map(({ href, label }) => (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
          ))}
          <HireMeButton />
        </div>

        <motion.button
          whileTap={{scale:0.9}}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="cursor-pointer h-full w-12 sm:w-15 sm:hidden flex items-center justify-center transition-colors"
        >
        <AnimatePresence mode='sync'>
          {isMenuOpen ? (          
            <LuLogOut className="h-6 w-6 text-main-col transform rotate-180" />            
          ) : (
            <AiOutlineMenuUnfold className="h-6 w-6 text-main-col" />           
          ) }       
        </AnimatePresence> 
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-30 bg-black/30 sm:hidden"
            />
            <motion.nav
              initial={{ opacity: 0, x: -300 ,scale: 0.7 }}
              animate={{ opacity: 1, x: 0, scale: 1, 
                transition:{
                  type:"spring",
                  stiffness:300,
                  damping:25
                }
               }}
              exit={{ opacity: 0, x: -300,scale:0.7,
                transition:{
                  duration:0.2
                }
               }}
              className="fixed h-screen overflow-y-scroll shadow-xl left-0 top-0 z-30 w-full pt-11 px-4 pb-3 bg-black/55 sm:hidden backdrop-blur-2xl bg-none"
            >
              <div className="flex flex-col font-NeueMachina gap-2">
                {NAVIGATION_ITEMS.map(({ href, label }) => (
                  <NavLink key={href} href={href} onClick={closeMenu}>
                    <span className="flex items-center px-3 py-1 justify-start gap-4 rounded-md cursor-pointer text-sm">
                      <div className='text-md mt-1 text-white/90'>{label}</div>
                    </span>
                  </NavLink>
                ))}
              </div>
              <div className='mt-4'>
                <motion.hr
                initial={{width:0}}
                animate={{
                  width: '100%',
                  transition:{
                    duration: 1.2,
                    type:'spring',
                    stiffness:200,
                    damping:25,
                    delay:0.4,
                  }
                }}
                 className="border-main-col/50" />
              </div>
              <MobileContactLinks />
              <div className='flex flex-col mt-4 gap-4'>
                <div className=''>
                  <motion.hr
                  initial={{width:0}}
                  animate={{
                    width: '100%',
                    transition:{
                      type:'spring',
                      stiffness:200,
                      damping:25,
                      delay:0.4,
                    }
                  }}
                   className="border-main-col/50" />
                </div>
                <motion.div 
                initial={{x: 180, opacity: 0 }}
                animate={{
                  x:0,
                  opacity:1,
                  transition:{
                    duration:1.3,
                    type:'spring',
                    stiffness:700,
                    damping:25,
                    delay:0.6,
                  }
                }}
                className='w-full ' onClick={closeMenu}>
                  <div className='mx-3 z-50 mt-3'>
                    <Button asChild className="w-fit">
                      <a download className='font-Helvetica' href='/Resume.pdf' target="_blank" rel="noopener noreferrer">
                        Resume <span className='ml-[6px]'><BsArrowUpRight /></span>
                      </a>
                    </Button>
                  </div>
                  <div className='mx-3 z-50  mt-3'>
                    <HireMeButton />
                  </div>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioNavbar;