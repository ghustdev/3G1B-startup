'use client';

import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function MouseFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = React.useState(false);

  const springConfig = { damping: 50, stiffness: 150, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);

    // Add listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .cursor-pointer');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
        const newElements = document.querySelectorAll('a, button, input, textarea, .cursor-pointer');
        newElements.forEach(el => {
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('mouseleave', handleMouseLeave);
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-[hsl(var(--brand-purple))] rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering ? 'hsla(var(--brand-purple), 0.1)' : 'transparent',
        borderColor: isHovering ? 'hsl(var(--brand-cyan))' : 'hsl(var(--brand-purple))',
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-[hsl(var(--brand-purple))] opacity-20 rounded-full blur-sm" />
    </motion.div>
  );
}
