import React, { useEffect, useRef } from 'react';
import { animate, inView } from 'motion';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function FadeIn({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  threshold = 0.2,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    
    const directionValues = {
      up: { y: 20 },
      down: { y: -20 },
      left: { x: 20 },
      right: { x: -20 },
    };

    // Set initial state
    element.style.opacity = '0';
    Object.assign(element.style, {
      transform: `translate(${directionValues[direction].x || 0}px, ${directionValues[direction].y || 0}px)`,
    });

    inView(element, () => {
      animate(
        element,
        {
          opacity: 1,
          x: 0,
          y: 0,
        },
        {
          delay,
          duration,
          easing: [0.17, 0.55, 0.55, 1],
        }
      );
    }, {
      margin: `-${Math.floor(threshold * 100)}px 0px`,
    });
  }, [direction, delay, duration, threshold]);

  return (
    <div ref={ref} className={cn('relative', className)}>
      {children}
    </div>
  );
}