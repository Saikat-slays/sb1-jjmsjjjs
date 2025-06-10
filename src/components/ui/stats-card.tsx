import React from 'react';
import { AnimatedNumber } from './animated-number';
import { AnimatedGradientBorder } from './animated-gradient-border';

interface StatsCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export function StatsCard({ value, label, prefix, suffix }: StatsCardProps) {
  return (
    <AnimatedGradientBorder>
      <div className="bg-charcoal p-6 rounded-lg text-center">
        <AnimatedNumber
          value={value}
          prefix={prefix}
          suffix={suffix}
          className="text-4xl font-bold text-white mb-2"
        />
        <p className="text-white/70">{label}</p>
      </div>
    </AnimatedGradientBorder>
  );
}