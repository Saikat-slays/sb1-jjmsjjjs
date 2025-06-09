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
      name: 'Meta',
      url: 'https://cdn.worldvectorlogo.com/logos/meta-1.svg',
    },
    {
      name: 'Anthropic',
      url: 'https://cdn.worldvectorlogo.com/logos/anthropic.svg',
    },
    {
      name: 'Nvidia',
      url: 'https://cdn.worldvectorlogo.com/logos/nvidia.svg',
    },
    {
      name: 'AWS',
      url: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
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
                    // Hide the broken image and show text fallback
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.logo-fallback')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'logo-fallback text-white text-sm font-bold text-center flex items-center justify-center w-full h-full';
                      fallback.textContent = logo.name;
                      parent.appendChild(fallback);
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