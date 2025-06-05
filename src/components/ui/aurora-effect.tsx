import React from 'react';
import { motion } from 'framer-motion';

export function AuroraEffect() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Base layer */}
        <div className="absolute inset-0 bg-charcoal" />
        
        {/* Aurora layers with will-change-transform for better mobile performance */}
        <motion.div
          className="absolute inset-0 opacity-30 will-change-transform"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[50%] rotate-12 bg-gradient-to-r from-aurora-emerald via-aurora-cyan to-aurora-purple blur-3xl transform-gpu" />
        </motion.div>

        <motion.div
          className="absolute inset-0 opacity-30 will-change-transform"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
        >
          <div className="absolute top-[-30%] right-[-10%] w-[120%] h-[60%] -rotate-12 bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-violet blur-3xl transform-gpu" />
        </motion.div>

        <motion.div
          className="absolute inset-0 opacity-30 will-change-transform"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        >
          <div className="absolute top-[10%] left-[-20%] w-[140%] h-[40%] rotate-6 bg-gradient-to-r from-aurora-violet via-aurora-emerald to-aurora-cyan blur-3xl transform-gpu" />
        </motion.div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-transparent to-charcoal/50" />
      </motion.div>
    </div>
  );
}