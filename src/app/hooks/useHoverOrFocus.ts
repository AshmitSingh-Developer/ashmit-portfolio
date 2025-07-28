'use client';

import { useEffect, useState, useCallback } from 'react';

const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const useHoverOrFocus = () => {
  const [isInteracting, setIsInteracting] = useState(false);

  // Handlers
  const onEnter = useCallback(() => setIsInteracting(true), []);
  const onLeave = useCallback(() => setIsInteracting(false), []);
  const onTouch = useCallback(() => setIsInteracting(true), []);
  const onBlur = useCallback(() => setIsInteracting(false), []);

  const interactionHandlers = isTouchDevice()
    ? {
        onTouchStart: onTouch,
        onFocus: onTouch,
        onBlur: onBlur,
      }
    : {
        onMouseEnter: onEnter,
        onMouseLeave: onLeave,
        onFocus: onEnter,
        onBlur: onLeave,
      };

  // Optional: auto-reset after touch ends
  useEffect(() => {
    if (!isTouchDevice()) return;

    const handleTouchEnd = () => setTimeout(() => setIsInteracting(false), 300);
    window.addEventListener('touchend', handleTouchEnd);
    return () => window.removeEventListener('touchend', handleTouchEnd);
  }, []);

  return { isInteracting, interactionHandlers };
};

export default useHoverOrFocus;
