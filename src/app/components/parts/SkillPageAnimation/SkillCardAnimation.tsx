"use client";
import { ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type VariantType = "slide-up-1"|"slide-up-2"|"fade-in"|"slide-right"|"slide-right-para"|"slide-left"|"slide-left-underline"|'card-line'|'footer-line';

type Props = {
  children: ReactNode;
  variantType?: VariantType;
  className?: string;
};

export default function AnimatedText({
  children,
  variantType = "slide-up-1",
  className = "",
}: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2, rootMargin: "0px 0px -10% 0px", });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const variantsMap = {
    "slide-up-1": {
      hidden: { opacity: 0, y: 70 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
      },
    },
    "slide-up-2": {
      hidden: { opacity: 0, y: 15 },

      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration:0.8,
          delay: 0.2,
          type: "spring" as const,
          stiffness: 70,
          damping: 25,
          mass: 0.1,
        },
      },
    },
  "slide-right": {
      hidden: { opacity: 0, x: -180 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.4,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1] as const, 
        },
      },
    }, 
  "slide-right-para": {
      hidden: { opacity: 0, x: -25 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1] as const, 
        },
      },
    },    
  "slide-left-underline": {
      hidden: { opacity: 0, x: 180 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          delay:0.3,
          duration: 0.8,
          ease: [0.33, 1, 0.68, 1] as const, 
        },
      },
    }, 
  "slide-left": {
      hidden: { opacity: 0, x: 20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1] as const, 
        },
      },
    },          


    "fade-in": {
      hidden: { opacity: 0, y: 10, scale: 0.8 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 1,
          type: "spring"as const,
          stiffness: 60,
          damping: 8,
          mass: 0.8,
          delay: 0.1,
        },
      },
    }, 
    "card-line": {
      hidden: {  scaleX: 0, transformOrigin: 'centre',},
      visible: {
          scaleX: 1,
          transformOrigin: 'centre',
          transition:{
            duration: 1,
            type:'spring'as const,
            stiffness: 150,
            damping: 25,
            delay: 0.2,
        },
      },
    },
"footer-line": {
  hidden: { scaleX: 0, transformOrigin: 'center' },
  visible: {
    scaleX: 1,
    transformOrigin: 'center',
    transition: {
      duration: 1.2,
      ease: [0.4, 0.0, 0.2, 1], // smooth, non-bouncy
      delay: 0.2
    }
  }
}
   
  };

  const variants = variantsMap[variantType];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
