'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Flame, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function FloatingCTA() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Show the button when scrolled past 30% of the page
    if (latest > 0.3) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToDeals = () => {
    // Smooth scroll to the top of the deal grid (or just a generic height if no ref available globally)
    window.scrollTo({
      top: document.body.scrollHeight * 0.45,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]"
        >
          <Button 
            onClick={scrollToDeals}
            size="lg" 
            className="rounded-full shadow-glow border border-primary/50 flex items-center gap-2 group hover:scale-105 hover:shadow-glow-active transition-all"
          >
            <Flame className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span className="font-bold">See Best Deals Now</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
