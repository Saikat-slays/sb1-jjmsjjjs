import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

interface CyclingTypewriterProps {
  className?: string;
}

export function CyclingTypewriter({ className = '' }: CyclingTypewriterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  const headlines = [
    "Never Miss a Lead Again",
    "Get More Customers Without Working More Hours", 
    "Stop Losing Money to Slow Responses",
    "Turn Your Website Into a 24/7 Sales Machine",
    "Automate the Work You Don't Have Time For"
  ];

  useEffect(() => {
    // Calculate timing: typing + pause + deleting + small buffer
    // Typing: ~55ms per char * avg 40 chars = ~2200ms
    // Pause: 2200ms
    // Deleting: ~33ms per char * avg 40 chars = ~1320ms
    // Buffer: 500ms
    // Total: ~6220ms per cycle
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
      setKey(prev => prev + 1); // Force re-render of typewriter
    }, 6500); // Slightly longer to ensure complete cycle

    return () => clearTimeout(timer);
  }, [currentIndex, headlines.length]);

  return (
    <h1 className={className} key={key}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(55) // 10% slower than 50ms (was 50, now 55)
            .changeDeleteSpeed(33) // 10% slower than 30ms (was 30, now 33)
            .typeString(headlines[currentIndex])
            .pauseFor(2200) // Slightly longer pause
            .deleteAll()
            .start();
        }}
        options={{
          loop: false,
          cursor: '_',
          autoStart: true,
        }}
      />
    </h1>
  );
}