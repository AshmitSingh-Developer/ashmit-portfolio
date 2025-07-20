// ✅ Updated: Fixed visibility issue with GSAP ScrollTrigger + Framer Motion animation
'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ContactHeader = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (!headerRef.current) return;

    const el = headerRef.current;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        end: 'bottom top',
        onEnter: () => controls.start('animate'),
        onLeaveBack: () => controls.start('initial'),
        markers: false,
      });
    }, el);

    return () => ctx.revert();
  }, [controls]);

const parentVariants = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.26,
      ease: [0.22, 1, 0.36, 1] as const,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};


  return (
<motion.div
  ref={headerRef}
  className="text-center mb-16"
  initial="initial"
  animate={controls}
  variants={parentVariants}
>
  <motion.h2
    className="text-base md:text-lg text-cyan-400 font-semibold uppercase tracking-wider mb-2"
    variants={childVariants}
  >
    Get in Touch
  </motion.h2>
  <motion.h3
    className="text-3xl md:text-5xl font-bold text-white"
    variants={childVariants}
  >
    Contact Me
  </motion.h3>
</motion.div>

  );
};

export default ContactHeader;

