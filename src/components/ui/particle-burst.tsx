import React from 'react';
import { motion } from 'framer-motion';

interface ParticleBurstProps {
  children: React.ReactNode;
}

export function ParticleBurst({ children }: ParticleBurstProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const particles = Array.from({ length: 12 }).map((_, i) => ({
    x: Math.cos((i / 12) * Math.PI * 2) * 50,
    y: Math.sin((i / 12) * Math.PI * 2) * 50,
  }));

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          initial={{ scale: 0, x: 0, y: 0 }}
          animate={{
            scale: [0, 1, 0],
            x: particle.x,
            y: particle.y,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: i * 0.02,
          }}
        />
      ))}
      {children}
    </div>
  );
}