import React from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Node {
  x: number;
  y: number;
  connections: number[];
}

export function NeuralNetwork() {
  const [nodes] = React.useState<Node[]>(() => 
    Array.from({ length: 15 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      connections: Array.from({ length: 3 }, () => 
        Math.floor(Math.random() * 15)
      ).filter(n => n !== i)
    }))
  );

  const controls = useAnimation();

  React.useEffect(() => {
    controls.start(i => ({
      opacity: [0.3, 1, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: i * 0.1,
        ease: "easeInOut"
      }
    }));
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-xl" />
      
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {/* Background glow */}
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#glow)" className="animate-pulse" />

        {/* Connections */}
        {nodes.map((node, i) => 
          node.connections.map((connection, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={node.x}
              y1={node.y}
              x2={nodes[connection].x}
              y2={nodes[connection].y}
              stroke="url(#gradient)"
              strokeWidth="0.4"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "linear"
              }}
            />
          ))
        )}
        
        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="2"
            fill="url(#nodeGradient)"
            custom={i}
            animate={controls}
            className="filter drop-shadow-lg"
          />
        ))}

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--color-1))" />
            <stop offset="50%" stopColor="hsl(var(--color-3))" />
            <stop offset="100%" stopColor="hsl(var(--color-5))" />
          </linearGradient>
          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="hsl(var(--color-2))" />
          </radialGradient>
        </defs>
      </svg>

      {/* Overlay glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl blur-2xl" />
    </div>
  );
}