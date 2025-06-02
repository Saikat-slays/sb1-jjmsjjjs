import React, { useEffect, useRef } from 'react';
import { animate, inView, spring } from 'motion';
import { useLocation } from 'react-router-dom';

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: 'fade' | 'slide' | 'scale' | 'rotate';
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function AnimateIn({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  animation = 'fade',
  direction = 'up'
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!ref.current || prefersReducedMotion) return;

    const element = ref.current;
    
    const animations = {
      fade: { opacity: [0, 1] },
      scale: { scale: [0.9, 1], opacity: [0, 1] },
      rotate: { rotate: [-5, 0], opacity: [0, 1] },
      slide: {
        x: direction === 'left' ? [20, 0] : direction === 'right' ? [-20, 0] : 0,
        y: direction === 'up' ? [20, 0] : direction === 'down' ? [-20, 0] : 0,
        opacity: [0, 1]
      }
    };

    inView(element, () => {
      animate(
        element,
        animations[animation],
        {
          delay,
          duration,
          easing: spring({ stiffness: 100, damping: 15 })
        }
      );
    }, { margin: '-10% 0px' });
  }, [animation, delay, duration, direction, prefersReducedMotion]);

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!ref.current || prefersReducedMotion) return;

    animate(
      ref.current,
      { 
        opacity: [0, 1],
        y: [20, 0]
      },
      {
        duration: 0.4,
        easing: spring({ stiffness: 100, damping: 15 })
      }
    );
  }, [location.pathname, prefersReducedMotion]);

  return (
    <div ref={ref} className="opacity-0">
      {children}
    </div>
  );
}

export function FloatingAnimation({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!ref.current || prefersReducedMotion) return;

    animate(
      ref.current,
      { y: [0, -10, 0] },
      {
        duration: 3,
        repeat: Infinity,
        easing: 'ease-in-out'
      }
    );
  }, [prefersReducedMotion]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function ParallaxScroll({ children, speed = 0.5, className = '' }: { 
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!ref.current || prefersReducedMotion) return;

    const handleScroll = () => {
      if (!ref.current) return;
      const scrolled = window.scrollY;
      const yPos = -(scrolled * speed);
      ref.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, prefersReducedMotion]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}