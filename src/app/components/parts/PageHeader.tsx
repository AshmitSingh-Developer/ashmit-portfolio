'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PageHeaderProps {
  subtitle: string;
  title: string;
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  subtitle, 
  title, 
  className = "",
  subtitleClassName = "",
  titleClassName = ""
}) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([subtitleRef.current, titleRef.current], {
        opacity: 0,
        y: 40,
        filter: 'blur(4px)',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Animate subtitle first
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.6,
        ease: 'power2.out',
      })
      // Then animate title with slight overlap
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.3');

    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={headerRef} 
      className={`text-center mb-12 ${className}`}
    >
      {/* Glassy Capsule for Subtitle */}
      <div
        ref={subtitleRef}
        className={`inline-block px-4 py-1.5 mb-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-cyan-300 font-medium uppercase tracking-wider text-xs md:text-sm shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300 cursor-default ${subtitleClassName}`}
      >
        {subtitle}
      </div>

      {/* Gradient Title */}
      <h1
        ref={titleRef}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight ${titleClassName}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;