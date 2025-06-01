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
        <div className="absolute inset-0 bg-[#060606]">
          <Squares
            direction="diagonal"
            speed={0.3}
            squareSize={40}
            borderColor="rgba(255,255,255,0.1)"
            hoverFillColor="rgba(255,255,255,0.05)"
            className="w-full h-full"
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-l from-pink-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-full blur-3xl" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/85 to-charcoal/90" />
      </motion.div>
    </div>
  );
}