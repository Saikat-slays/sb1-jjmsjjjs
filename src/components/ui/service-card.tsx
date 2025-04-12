import React from 'react';
import { GlowingEffect } from './glowing-effect';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { FloatingIcon } from './floating-icon';
import { FadeIn } from './fade-in';

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ Icon, title, description }: ServiceCardProps) {
  return (
    <FadeIn>
      <div className="group relative bg-white p-8 rounded-2xl">
        <GlowingEffect
          spread={20}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative z-10">
          <FloatingIcon>
            <Icon className="h-12 w-12 text-primary mb-6" />
          </FloatingIcon>
          <h3 className="text-xl font-bold mb-4 text-black">{title}</h3>
          <p className="text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}