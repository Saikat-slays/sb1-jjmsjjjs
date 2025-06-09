import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialLogoScrollProps {
  className?: string;
}

export function TestimonialLogoScroll({ className }: TestimonialLogoScrollProps) {
  const logos = [
    {
      name: 'OpenAI',
      url: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg',
    },
    {
      name: 'Google',
      url: 'https://cdn.worldvectorlogo.com/logos/google-1-1.svg',
    },
    {
      name: 'Microsoft',
      url: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg',
    },
    {
      name: 'Anthropic',
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg',
    },
    {
      name: 'Meta',
      url: 'https://cdn.worldvectorlogo.com/logos/meta-1.svg',
    },
    {
      name: 'Nvidia',
      url: 'https://cdn.worldvectorlogo.com/logos/nvidia.svg',
    },
    {
      name: 'xAI',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/X.AI_logo.png',
    },
    {
      name: 'DeepSeek',
      url: 'https://avatars.githubusercontent.com/u/165788866?s=200&v=4',
    },
  ];

  // Create multiple sets for seamless looping
  const logoSets = [logos, logos, logos];

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
        <div className="flex">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -100 * logos.length * 8], // Move by the width of one complete set
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {logoSets.flat().map((logo, i) => (
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
                      // Try alternative sources for problematic logos
                      const target = e.target as HTMLImageElement;
                      if (logo.name === 'xAI' && !target.src.includes('clearbit')) {
                        target.src = 'https://logo.clearbit.com/x.ai';
                      } else if (logo.name === 'DeepSeek' && !target.src.includes('pbs.twimg.com')) {
                        target.src = 'https://pbs.twimg.com/profile_images/1866088471526912000/YgX_XIUV_400x400.jpg';
                      } else {
                        // Hide completely broken images
                        const container = target.closest('.mx-8');
                        if (container) {
                          (container as HTMLElement).style.display = 'none';
                        }
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

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