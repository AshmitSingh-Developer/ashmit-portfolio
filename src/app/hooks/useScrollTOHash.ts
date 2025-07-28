'use client';
import { useEffect } from 'react';

export const useScrollToHash = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');

      // Wait until next frame or layout stable
      const scrollToSection = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      // Use timeout to delay until DOM is mounted
      const timeout = setTimeout(scrollToSection, 500); // tweak if needed
      return () => clearTimeout(timeout);
    }
  }, []);
};
