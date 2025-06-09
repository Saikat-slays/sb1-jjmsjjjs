import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialLogoScrollProps {
  className?: string;
}

export function TestimonialLogoScroll({ className }: TestimonialLogoScrollProps) {
  const logos = [
    {
      name: 'OpenAI',
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
    },
    {
      name: 'Google',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    },
    {
      name: 'Microsoft',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    },
    {
      name: 'Anthropic',
      url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=100&fit=crop&crop=center',
      isText: false
    },
    {
      name: 'Meta',
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    },
    {
      name: 'NVIDIA',
      url: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg',
    },
    {
      name: 'xAI',
      url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&crop=center',
      isText: true // Force text display for xAI
    },
    {
      name: 'DeepSeek',
      url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&h=100&fit=crop&crop=center',
      isText: true // Force text display for DeepSeek
    },
  ];

  // Create enough duplicates for seamless scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className={className}>
      <div className="relative w-full overflow-hidden bg-charcoal py-16">
        {/* Section Header */}
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Powered by Industry-Leading AI Technologies
          </h2>
          <p className="text-xl text-white/70 text-center max-w-2xl mx-auto">
            We leverage the most advanced AI platforms to build solutions that outperform and outscale
          </p>
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-charcoal to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-charcoal to-transparent z-10" />
        
        {/* Scrolling container */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [`0%`, `-${100 / 3}%`], // Move by exactly one set (1/3 of total width)
          }}
          transition={{
            duration: 8, // Even faster scrolling
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="mx-8 flex items-center justify-center flex-shrink-0"
              style={{ minWidth: '160px' }} // Fixed width for consistent spacing
            >
              <div className="w-32 h-20 flex items-center justify-center bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                {logo.isText ? (
                  // Text-based logo for problematic ones
                  <div className="text-white/70 hover:text-white/100 text-sm font-bold text-center transition-colors duration-300">
                    {logo.name}
                  </div>
                ) : (
                  // Image-based logo with fallback
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const container = target.parentElement;
                      if (container) {
                        container.innerHTML = `
                          <div class="text-white/70 hover:text-white/100 text-sm font-bold text-center transition-colors duration-300">
                            ${logo.name}
                          </div>
                        `;
                      }
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom text */}
        <div className="container mx-auto px-6 mt-12">
          <p className="text-center text-white/60 text-sm">
            These cutting-edge AI technologies power our custom-built solutions. 
            <br className="hidden sm:block" />
            The future of business automation, engineered for your success.
          </p>
        </div>
      </div>
    </div>
  );
}