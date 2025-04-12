import React, { useEffect, useRef } from 'react';
import { animate } from 'motion';
import { cn } from '@/lib/utils';

interface FloatingIconProps {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}

export function FloatingIcon({
  children,
  className,
  amplitude = 10,
  duration = 2,
}: FloatingIconProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let startY = 0;

    const animation = animate(
      element,
      { y: [startY, -amplitude, startY] },
      {
        duration,
        easing: 'ease-in-out',
        repeat: Infinity,
      }
    );

    return () => animation.stop();
  }, [amplitude, duration]);

  return (
    <div ref={ref} className={cn('relative', className)}>
      {children}
    </div>
  );
}