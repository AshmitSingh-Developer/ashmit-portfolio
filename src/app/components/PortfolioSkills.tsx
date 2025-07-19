'use client';
import React, { memo, useMemo, useCallback } from 'react';
import AnimationReveal from './parts/SkillPageAnimation/SkillCardAnimation';
import { motion, useAnimation } from 'framer-motion';
import { Code, Globe, Palette } from 'lucide-react';
import { FaReact, FaNode, FaAws, FaGitAlt, FaGithub, FaNpm } from 'react-icons/fa';
import { PiFigmaLogo } from 'react-icons/pi';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { GoDatabase } from "react-icons/go";
import { CiServer } from "react-icons/ci";
import { BsTools } from "react-icons/bs";
import { IoLogoVercel } from "react-icons/io5";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiVite } from 'react-icons/si';

// TypeScript interfaces
interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
  link: string;
}

interface Skill {
  title: string;
  bio: string;
  icon: React.ReactNode;
  color: string;
  technologies: Technology[];
}

interface IconComponentProps {
  icon: React.ReactNode;
  backgroundColor: string;
}

interface TechLinkProps {
  tech: Technology;
  onHover?: () => void;
  onLeave?: () => void;
}

interface SkillCardProps {
  skill: Skill;
}

const IconComponent = memo<IconComponentProps>(({ icon, backgroundColor }) => (
  <div className='rounded-3xl p-1' style={{ backgroundColor }}>
    {icon}
  </div>
));

const TechLink = memo<TechLinkProps>(({ tech, onHover, onLeave }) => (
  <motion.a
    href={tech.link}
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex px-2 py-1 border-[0.5px] border-[#1E293B] rounded-tl-2xl rounded-br-2xl items-center group"
    whileHover={{ scale: 1.08 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    onHoverStart={onHover}
    onHoverEnd={onLeave}
  >
    <IconComponent
      icon={tech.icon}
      backgroundColor={tech.color + '1A'}
    />
    <span className="ml-2 text-[15px] sm:text-[12px] text-text font-NeueMachina whitespace-nowrap">{tech.name}</span>
    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1 h-1 rounded-full bg-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </motion.a>
));

const SkillCard = memo<SkillCardProps>(({ skill }) => {
  const iconControls = useAnimation();
  const lineControls = useAnimation();

  const handleHoverStartCard = useCallback(() => {
    iconControls.start({ rotate: 15, scale: 1.05 });
    lineControls.start({ backgroundColor: 'rgba(12, 64, 41, 0.9)' });
  }, [iconControls, lineControls]);

  const handleHoverEndCard = useCallback(() => {
    iconControls.start({ rotate: 0, scale: 1 });
    lineControls.start({ backgroundColor: 'rgba(74, 85, 101, 1)' });
  }, [iconControls, lineControls]);

  const iconStyle = useMemo(() => ({
    backgroundColor: skill.color + '1A'
  }), [skill.color]);

  const titleStyle = useMemo(() => ({
    color: skill.color + 'E6'
  }), [skill.color]);

  return (
    <motion.div
      className="card hover:border-[#0C4029]/100"
      onHoverStart={handleHoverStartCard}
      onHoverEnd={handleHoverEndCard}
    >
      {/* Card Top */}
      <div className="flex items-center mb-4">
        {/* Card Icon */}
        <motion.div
          className='rounded-lg p-3'
          style={iconStyle}
          animate={iconControls}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >{skill.icon}
        </motion.div>
        {/* Card Title */}
        <AnimationReveal variantType='slide-up-1'>
          <h3 className="text-xl font-Helvetica font-bold ml-4" style={titleStyle}>
            {skill.title}
          </h3>
        </AnimationReveal>
      </div>
      {/* Card Bio */}
      <AnimationReveal variantType='slide-up-2'>
        <p className="text-gray-400 text-Avertastd mb-4">
          {skill.bio}
        </p>
      </AnimationReveal>
      {/* Card Line */}
      <AnimationReveal variantType='card-line'>
        <motion.hr
          animate={lineControls}
          transition={{ duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-[0.8px] border-0 bg-gray-600/40 my-4 origin-centre" />
      </AnimationReveal>
      {/* Card Technology Links Div */}
      <motion.div
        className="grid grid-cols-2 gap-4 pb-4"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {skill.technologies.map((tech) => (
          <AnimationReveal key={tech.name} variantType='slide-left'>
            <TechLink tech={tech} />
          </AnimationReveal>
        ))}
      </motion.div>
    </motion.div>
  );
});

const skillsData: Skill[] = [
  {
    title: 'Frontend',
    bio: 'Building responsive and interactive user interfaces with modern frameworks and libraries.',
    icon: <Code className="h-8 w-8 text-[#A855F7]" />,
    color: '#A855F7',
    technologies: [
      { name: 'React', icon: <FaReact className="h-6 w-6 md:h-4 md:w-4 text-[#61dbfb]" />, color: '#61dbfb', link: 'https://react.dev/' },
      { name: 'Next.js', icon: <SiNextdotjs className="h-6 w-6 md:h-4 md:w-4 text-white" />, color: '#000000', link: 'https://nextjs.org/' },
      { name: 'Tailwind ', icon: <SiTailwindcss className="h-6 w-6 md:h-4 md:w-4 text-[#099ba8]" />, color: '#099ba8', link: 'https://tailwindcss.com/' },
      { name: 'TypeScript', icon: <SiTypescript className="h-6 w-6 md:h-4 md:w-4 text-[#3178C6]" />, color: '#3178C6', link: 'https://www.typescriptlang.org/' },
    ],
  },
  {
    title: 'Backend',
    bio: 'Developing robust and scalable server-side applications and APIs, and database integrations.',
    icon: <CiServer className="h-8 w-8 text-[#3B82F6]" />,
    color: '#3B82F6',
    technologies: [
      { name: 'Node.js', icon: <FaNode className="h-6 w-6 md:h-4 md:w-4 text-[#68A063]" />, color: '#68A063', link: 'https://nodejs.org/en/' },
      { name: 'Express', icon: <SiExpress className="h-6 w-6 md:h-4 md:w-4 text-white" />, color: '#363736', link: 'https://expressjs.com/' },
    ],
  },
  {
    title: 'UI/UX Design',
    bio: 'Crafting intuitive and visually appealing user interfaces and experiences.',
    icon: <Palette className="h-8 w-8 text-[#EC4899]" />,
    color: '#EC4899',
    technologies: [
      { name: 'Figma', icon: <PiFigmaLogo className="h-6 w-6 md:h-4 md:w-4 text-[#F96CF1]" />, color: '#F24E1E', link: 'https://www.figma.com/' },
      { name: 'Motion', icon: <TbBrandFramerMotion className="h-6 w-6 md:h-4 md:w-4 text-[#564F98]" />, color: '#564F98', link: 'https://www.framer.com/motion/' },
    ],
  },
  {
    title: 'Database',
    bio: 'Managing and optimizing data storage and retrieval for efficient applications.',
    icon: <GoDatabase className="h-8 w-8 text-[#07bfed]" />,
    color: '#07bfed',
    technologies: [
      { name: 'MongoDB', icon: <SiMongodb className="h-6 w-6 md:h-4 md:w-4 text-[#17AD55]" />, color: '#17AD55', link: 'https://www.mongodb.com/' },
    ],
  },
  {
    title: 'Web Performance',
    bio: 'Optimizing web applications for speed, efficiency, and a seamless user experience.',
    icon: <Globe className="h-8 w-8 text-[#10B981]" />,
    color: '#10B981',
    technologies: [
      { name: 'AWS', icon: <FaAws className="h-6 w-6 md:h-4 md:w-4 text-[#FF9900]" />, color: '#FF9900', link: 'https://aws.amazon.com/' },
      { name: 'Git', icon: <FaGitAlt className="h-6 w-6 md:h-4 md:w-4 text-[#F34F29]" />, color: '#F34F29', link: 'https://git-scm.com/' },
      { name: 'Github', icon: <FaGithub className="h-6 w-6 md:h-4 md:w-4 text-white" />, color: '#fff', link: 'https://github.com/' },
    ],
  },
  {
    title: 'Web Tools',
    bio: 'A curated set of tools I use to build, test, and deploy modern websites and smooth development workflows.',
    icon: <BsTools className="h-8 w-8 text-[#10ddcceb]" />,
    color: '#10ddcc',
    technologies: [
      { name: 'NPM', icon: <FaNpm className="h-6 w-6 md:h-4 md:w-4 text-[#CD3E3D]" />, color: '#CD3E3D', link: 'https://www.npmjs.com/' },
      { name: 'Vite', icon: <SiVite className="h-6 w-6 md:h-4 md:w-4 text-[#b283ec]" />, color: '#b283ec', link: 'https://vite.dev/' },
      { name: 'Vercel', icon: <IoLogoVercel className="h-6 w-6 md:h-4 md:w-4 text-[#000000]" />, color: '#ffffff', link: 'https://vercel.com/' },
    ],
  },
];

const PortfolioSkills = () => {

  const memoizedSkills = useMemo(() => skillsData, []);
  return (
    <div
      className="bg-cover z-[5px] bg-center h-auto w-auto"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="w-full z-10 py-4 min-h-[80vh] text-white">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <AnimationReveal variantType="slide-right">
            <h2 className="text-3xl font-bold text-left text-title">Skills</h2>
          </AnimationReveal>
          {/* Page Title Underline */}
          <AnimationReveal variantType='slide-left-underline'>
            <div className="h-1 w-10 rounded-4xl bg-title-ul"></div>
          </AnimationReveal>

          {/* Page Bio */}
          <AnimationReveal variantType="fade-in">
            <p className='text-muted-foreground my-font1 max-w-2xl mt-3 mb-5 sm:mb-8'>I've worked with a range of technologies in the web development world, from frontend to backend and everything in between.</p>
          </AnimationReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memoizedSkills.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Set display names for better debugging
PortfolioSkills.displayName = 'PortfolioSkills';
SkillCard.displayName = 'SkillCard';
TechLink.displayName = 'TechLink';
IconComponent.displayName = 'IconComponent';

export default PortfolioSkills;
