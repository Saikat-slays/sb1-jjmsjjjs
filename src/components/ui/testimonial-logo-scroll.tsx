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
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg',
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
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/X.AI_logo.png',
      fallback: 'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg'
    },
    {
      name: 'DeepSeek',
      url: 'https://pbs.twimg.com/profile_images/1866088471526912000/YgX_XIUV_400x400.jpg',
      fallback: 'https://avatars.githubusercontent.com/u/165788866?s=200&v=4'
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
            duration: 12, // Reduced from 25 to 12 for faster scrolling
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
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const currentLogo = logos.find(l => l.name === logo.name);
                    
                    // Try fallback URL if available
                    if (currentLogo?.fallback && !target.src.includes('fallback-tried')) {
                      target.src = currentLogo.fallback + '?fallback-tried=true';
                    } else {
                      // Create a text-based fallback
                      const container = target.parentElement;
                      if (container) {
                        container.innerHTML = `
                          <div class="text-white/70 text-xs font-semibold text-center">
                            ${logo.name}
                          </div>
                        `;
                      }
                    }
                  }}
                />
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