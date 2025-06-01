import React from 'react';
import { motion } from 'framer-motion';
import { FlickeringGrid } from './flickering-grid';

export function BackgroundEffect() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Base Background */}
        <div className="absolute inset-0 bg-app-background" />

        {/* Flickering Grid */}
        <div className="absolute inset-0">
          <FlickeringGrid
            className="w-full h-full"
            squareSize={4}
            gridGap={6}
            color="#333333"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-l from-primary/5 to-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-gradient-to-tr from-primary/5 to-primary/10 rounded-full blur-3xl" />

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-app-background/50 via-transparent to-app-background/50" />
      </motion.div>
    </div>
  );
}