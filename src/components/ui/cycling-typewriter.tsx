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
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
      setKey(prev => prev + 1); // Force re-render of typewriter
    }, 4000); // Show each headline for 4 seconds

    return () => clearTimeout(timer);
  }, [currentIndex, headlines.length]);

  return (
    <h1 className={className} key={key}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(50)
            .typeString(headlines[currentIndex])
            .pauseFor(2000)
            .deleteAll(30)
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