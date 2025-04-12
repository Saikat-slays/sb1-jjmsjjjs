import React from 'react';
import { motion } from 'framer-motion';

interface LogoScrollProps {
  className?: string;
}

export function LogoScroll({ className }: LogoScrollProps) {
  const logos = [
    {
      name: 'Supabase',
      url: 'https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.b36ebb5f.png&w=256&q=75',
    },
    {
      name: 'StackBlitz',
      url: 'https://developer.stackblitz.com/img/logo.svg',
    },
    {
      name: 'Make',
      url: 'https://images.ctfassets.net/qqlj6g4ee76j/273hKvYmGhekZ8mPHEVJz4/4f7c3d26a5b2c80fdb86b30e51c42fad/Make-Logo-Full-White.svg',
    },
    {
      name: 'Render',
      url: 'https://render.com/static/render-logo-white.svg',
    },
    {
      name: 'OpenAI',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    },
    {
      name: 'Bolt.new',
      url: 'https://bolt.new/bolt.svg',
    },
    {
      name: 'XAI',
      url: 'https://x.ai/favicon.svg',
    },
  ];

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={className}>
      <div className="relative w-full overflow-hidden bg-charcoal py-12">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-charcoal to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-charcoal to-transparent z-10" />
        
        {/* Scrolling container */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -50 * logos.length], // Adjust based on logo width
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="mx-12 flex items-center justify-center"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}