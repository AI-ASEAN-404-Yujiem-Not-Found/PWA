'use client'
import { useState, useEffect } from 'react';

/**
 * Custom React hook to check if the current viewport is mobile-sized.
 * @param maxWidth The maximum width for a mobile device (default is 768px).
 * @returns A boolean indicating if the viewport is mobile.
 */

const useIsMobile = (maxWidth: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for window availability (useful for Next.js SSR compatibility)
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = `(max-width: ${maxWidth}px)`;
    // Use window.matchMedia for an efficient check
    const checkScreenSize = () => {
      setIsMobile(window.matchMedia(mediaQuery).matches);
    };

    // Set initial value
    checkScreenSize();

    // Add event listener for screen size changes
    window.addEventListener('resize', checkScreenSize);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [maxWidth]); // Re-run effect if maxWidth changes

  return isMobile;
};

export default useIsMobile;
