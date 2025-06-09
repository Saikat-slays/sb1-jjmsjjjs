import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialLogoScrollProps {
  className?: string;
}

export function TestimonialLogoScroll({ className }: TestimonialLogoScrollProps) {
  const logos = [
    {
      name: 'Client 1',
      url: '/logos/client-1.png',
    },
    {
      name: 'Client 2', 
      url: '/logos/client-2.png',
    },
    {
      name: 'Client 3',
      url: '/logos/client-3.png',
    },
    {
      name: 'Client 4',
      url: '/logos/client-4.png',
    },
    {
      name: 'Client 5',
      url: '/logos/client-5.png',
    },
    {
      name: 'Client 6',
      url: '/logos/client-6.png',
    },
    {
      name: 'Client 7',
      url: '/logos/client-7.png',
    },
  ];

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={className}>
      <div className="relative w-full overflow-hidden bg-charcoal py-16">
        {/* Section Header */}
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Trusted by Forward-Thinking Brands
          </h2>
          <p className="text-xl text-white/70 text-center max-w-2xl mx-auto">
            Join the companies that have transformed their operations with our bespoke AI solutions
          </p>
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-charcoal to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-charcoal to-transparent z-10" />
        
        {/* Scrolling container */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -50 * logos.length * 8], // Adjust based on logo width and spacing
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="mx-8 flex items-center justify-center flex-shrink-0"
            >
              <div className="w-32 h-20 flex items-center justify-center bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  onError={(e) => {
                    console.log(`Failed to load logo: ${logo.url}`);
                    const target = e.target as HTMLImageElement;
                    // Fallback to a placeholder
                    target.src = `https://via.placeholder.com/120x60/ffffff/000000?text=${encodeURIComponent(logo.name)}`;
                    target.onError = null; // Prevent infinite loop
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom text */}
        <div className="container mx-auto px-6 mt-12">
          <p className="text-center text-white/60 text-sm">
            These brands chose custom-built AI solutions over generic templates. 
            <br className="hidden sm:block" />
            The results speak for themselves.
          </p>
        </div>
      </div>
    </div>
  );
}