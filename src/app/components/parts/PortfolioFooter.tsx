import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import AshmitSinghLogo from './LogoTracingBeam';

type NavLink = {
  name: string;
  href: string;
  target?: '_blank';
};

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const socialHover = {
  scale: 1.06,
  y: -4,
  boxShadow: '0px 4px 18px rgba(0, 255, 255, 0.15)',
  transition: {
    type: 'spring' as const,
    stiffness: 250,
    damping: 18,
  },
};

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/', color: 'hover:text-white hover:bg-black/70' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/ashmit-singh-dev', color: 'hover:text-white hover:bg-black/70' },
    { name: 'Twitter', icon: FaXTwitter, url: 'https://twitter.com/ashmit_dev', color: 'hover:text-white hover:bg-black/70' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:ashmit25092001singh@gmail.com', color: 'hover:text-white hover:bg-black/70' },
  ];

  const navSections: { title: string; links: NavLink[] }[] = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'More',
      links: [
        { name: 'Hire Me', href: '/hire-me', target: '_blank' },
        { name: 'Suggestion Page', href: '/suggestion-page', target: '_blank' },
      ],
    },
    {
      title: 'Friends',
      links: [
        { name: 'Portfolio Ayush', href: 'https://mega-project-pink.vercel.app/', target: '_blank' },
        { name: 'Contact Ayush', href: 'https://mega-project-pink.vercel.app/hire-me', target: '_blank' },
      ],
    },
  ];

  return (
    <motion.footer
      className="w-full px-4 pb-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <motion.hr
        className="mb-8 mt-6 h-[1px] w-full border-none bg-gradient-to-r from-zinc-800/80 via-zinc-600/50 to-zinc-800/80"
        variants={itemVariants}
      />

      <div className="mx-auto    flex max-w-6xl flex-col items-center justify-center gap-8 text-center md:flex-row md:items-start md:justify-between md:gap-16 md:text-left">
        <motion.div
          className="flex w-full flex-col sm:flex-row md:flex-col items-center justify-between md:w-auto md:items-start"
          variants={itemVariants}
        >
          <AshmitSinghLogo
            width={230}
            height={55}
            strokeWidth={1.8}
            duration={6}
            className="mb-2 relative left-0 sm:mb-4 lg:mb-6"
          />
          <div className="mb-2 sm:mr-3  lg::mb-6 flex items-center justify-center gap-4 md:justify-start">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700/50 bg-zinc-800/50 text-zinc-400 transition-colors duration-200  hover:border-cyan-900  ${social.color}`}
                whileHover={socialHover}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid w-full grid-cols-2 items-start gap-8 text-center md:w-auto sm:grid-cols-3 sm:text-left"
          variants={footerVariants}
        >
          {navSections.map((section) => (
            <motion.div
              key={section.title}
              className="unselectable mb-8 text-center md:mb-0 md:text-left"
              variants={itemVariants}
            >
              <h3 className="mb-4 text-lg font-semibold text-zinc-200">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.target}
                      rel={link.target ? 'noopener noreferrer' : undefined}
                      className="text-zinc-400 transition-colors duration-200 hover:text-cyan-500"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.hr
        className="my-4 h-[1px] w-full border-none bg-gradient-to-r from-zinc-800/80 via-zinc-600/50 to-zinc-800/80"
        variants={itemVariants}
      />
      <motion.div className="unselectable mt-2 text-center text-sm text-zinc-400 sm:text-base" variants={itemVariants}>
        <p className="font-Helvetica">
          Copyright © {currentYear} Ashmit Singh. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-zinc-500 sm:text-sm">
          Built with Next.js
        </p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;