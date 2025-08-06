import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

interface CyclingTypewriterProps {
  className?: string;
}

export function CyclingTypewriter({ className = '' }: CyclingTypewriterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  const headlines = [
    "Scale Your Fitness Brand Globally",
    "Automate Your E-Commerce Operations", 
    "Turn Browsers Into Loyal Customers",
    "24/7 AI Support for Your Brand",
    "Personalized Fitness Journeys at Scale"
  ];

  useEffect(() => {
    // Calculate timing for complete word-by-word deletion:
    // Typing: ~55ms per char * avg 40 chars = ~2200ms
    // Pause: 2200ms
    // Word-by-word deletion: ~300ms per word * avg 8 words = ~2400ms
    // Buffer: 500ms
    // Total: ~7300ms per cycle
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
      setKey(prev => prev + 1); // Force re-render of typewriter
    }, 7500); // Extended to accommodate word-by-word deletion

    return () => clearTimeout(timer);
  }, [currentIndex, headlines.length]);

  return (
    <h1 className={className} key={key}>
      <Typewriter
        onInit={(typewriter) => {
          const currentText = headlines[currentIndex];
          const words = currentText.split(' ');
          
          // Type the full sentence
          typewriter
            .changeDelay(55) // 10% slower typing
            .typeString(currentText)
            .pauseFor(2200); // Pause to read
          
          // Delete word by word (backwards)
          for (let i = words.length - 1; i >= 0; i--) {
            const textUpToWord = words.slice(0, i).join(' ');
            if (textUpToWord.length > 0) {
              typewriter
                .deleteChars(words[i].length + (i < words.length - 1 ? 1 : 0)) // +1 for space
                .pauseFor(200); // Small pause between word deletions
            } else {
              // Delete the last word completely
              typewriter.deleteChars(words[i].length);
            }
          }
          
          typewriter.start();
        }}
        options={{
          loop: false,
          cursor: '_',
          autoStart: true,
          deleteSpeed: 33, // 10% slower deletion speed
        }}
      />
    </h1>
  );
}