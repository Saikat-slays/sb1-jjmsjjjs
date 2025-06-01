import React from 'react';
import { motion } from 'framer-motion';
import { Squares } from './squares-background';

export function BackgroundEffect() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <Squares
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            borderColor="#333"
            hoverFillColor="#222"
            className="w-full h-full"
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-l from-pink-500/30 to-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/30 to-emerald-500/30 rounded-full blur-3xl" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/90 to-charcoal/80" />
      </motion.div>
    </div>
  );
}