import React from 'react';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedNumber({ value, prefix = '', suffix = '', className = '' }: AnimatedNumberProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  
  React.useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut"
    });
    
    return controls.stop;
  }, [value]);

  return (
    <div className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  );
}