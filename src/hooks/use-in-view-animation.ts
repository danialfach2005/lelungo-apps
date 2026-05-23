'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useInViewAnimation(once = true, margin = '-50px') {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: margin as any });

  return { ref, isInView };
}

export const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  }
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};
