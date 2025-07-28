'use client';
import { useEffect } from 'react';

export function useUpdateHashOnScroll(sectionIds: string[]) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (window.location.hash !== `#${id}`) {
              history.replaceState(null, '', `#${id}`);
            }
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // adjust sensitivity
      }
    );

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);
}
