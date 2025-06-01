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
        {/* Squares Background */}
        <div className="absolute inset-0">
          <Squares
            direction="diagonal"
            speed={0.2}
            squareSize={50}
            borderColor="rgba(169,169,169,0.2)"
            hoverFillColor="rgba(169,169,169,0.15)"
            className="w-full h-full"
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-gray-600/30 to-gray-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-l from-gray-500/30 to-gray-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-gray-600/30 to-gray-500/30 rounded-full blur-3xl" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/50 to-charcoal/60" />
      </motion.div>
    </div>
  );
}