import React, { useEffect, useRef, useState } from 'react';
import { animate, inView } from 'motion';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
  decimals?: number;
}

export function AnimatedCounter({ 
  value, 
  prefix = '', 
  suffix = '', 
  className = '', 
  duration = 2,
  decimals = 0 
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const element = ref.current;
    
    const cleanup = inView(element, () => {
      // Additional check to ensure element is still valid when animation starts
      if (hasAnimated || !ref.current) return;
      
      setHasAnimated(true);
      
      const animation = animate(0, value, {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
        onUpdate: (latest) => {
          // Use ref.current instead of captured element variable
          if (ref.current) {
            const displayValue = decimals > 0 
              ? latest.toFixed(decimals)
              : Math.round(latest).toString();
            ref.current.textContent = `${prefix}${displayValue}${suffix}`;
          }
        }
      });

      return () => animation.stop();
    }, { margin: '-10% 0px' });

    // Always return cleanup function to ensure proper disconnection
    return cleanup;
  }, [value, prefix, suffix, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}