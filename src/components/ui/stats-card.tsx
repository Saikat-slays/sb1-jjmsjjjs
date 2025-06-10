import React from 'react';
import { AnimatedCounter } from './animated-counter';
import { AnimatedGradientBorder } from './animated-gradient-border';

interface StatsCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function StatsCard({ value, label, prefix, suffix, decimals }: StatsCardProps) {
  return (
    <AnimatedGradientBorder>
      <div className="bg-charcoal p-6 rounded-lg text-center">
        <AnimatedCounter
          value={value}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          className="text-4xl font-bold text-white mb-2 block"
        />
        <p className="text-white/70">{label}</p>
      </div>
    </AnimatedGradientBorder>
  );
}