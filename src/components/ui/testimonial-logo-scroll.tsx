import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';

interface TestimonialLogoScrollProps {
  className?: string;
}

export function TestimonialLogoScroll({ className }: TestimonialLogoScrollProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

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
      name: 'Apple',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    },
    {
      name: 'Microsoft',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
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
      name: 'Groq',
      isText: true
    },
    {
      name: 'xAI',
      isText: true
    },
    {
      name: 'DeepSeek',
      isText: true
    },
  ];

  // Create enough duplicates for seamless scrolling - more for mobile
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    // Reset drag position after a short delay to resume normal animation
    setTimeout(() => {
      dragX.set(0);
    }, 100);
  };

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Update drag position based on drag delta
    dragX.set(dragX.get() + info.delta.x);
  };

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
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <motion.div
          ref={containerRef}
          className="flex whitespace-nowrap cursor-grab active:cursor-grabbing"
          animate={!isHovered && !isDragging ? {
            x: [`0%`, `-${100 / 4}%`],
          } : {}}
          style={{
            x: useTransform(dragX, (value) => value)
          }}
          transition={{
            duration: window.innerWidth < 768 ? 4 : 8, // Faster on mobile
            repeat: Infinity,
            ease: "linear",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDrag={handleDrag}
          drag="x"
          dragConstraints={{ left: -1000, right: 1000 }}
          dragElastic={0.1}
          whileDrag={{ cursor: "grabbing" }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="mx-3 sm:mx-6 md:mx-8 flex items-center justify-center flex-shrink-0 pointer-events-none"
              style={{ minWidth: window.innerWidth < 768 ? '100px' : '120px' }}
            >
              {logo.isText ? (
                // Text-based logo for xAI, DeepSeek, and Groq
                <div className="w-20 sm:w-24 md:w-32 h-12 sm:h-16 md:h-20 flex items-center justify-center bg-white/10 rounded-lg p-2 sm:p-3 md:p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="text-white/70 hover:text-white/100 text-xs sm:text-sm md:text-lg font-bold text-center transition-colors duration-300">
                    {logo.name}
                  </div>
                </div>
              ) : (
                // Image-based logo with robust fallback
                <div className="w-20 sm:w-24 md:w-32 h-12 sm:h-16 md:h-20 flex items-center justify-center bg-white/10 rounded-lg p-2 sm:p-3 md:p-4 hover:bg-white/20 transition-all duration-300">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const container = target.parentElement;
                      if (container) {
                        // Replace the entire container content with text
                        container.innerHTML = `
                          <div class="text-white/70 hover:text-white/100 text-xs sm:text-sm md:text-lg font-bold text-center transition-colors duration-300">
                            ${logo.name}
                          </div>
                        `;
                      }
                    }}
                    onLoad={(e) => {
                      // Ensure the image loaded properly
                      const target = e.target as HTMLImageElement;
                      if (target.naturalWidth === 0 || target.naturalHeight === 0) {
                        const container = target.parentElement;
                        if (container) {
                          container.innerHTML = `
                            <div class="text-white/70 hover:text-white/100 text-xs sm:text-sm md:text-lg font-bold text-center transition-colors duration-300">
                              ${logo.name}
                            </div>
                          `;
                        }
                      }
                    }}
                  />
                </div>
              )}
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