import React from 'react';
import Typewriter from 'typewriter-effect';

interface TypewriterHeadingProps {
  text: string;
  className?: string;
  options?: {
    delay?: number;
    deleteSpeed?: number;
    loop?: boolean;
    pauseFor?: number;
  };
}

export function TypewriterHeading({ text, className = '', options = {} }: TypewriterHeadingProps) {
  const defaultOptions = {
    delay: 50,
    deleteSpeed: 30,
    loop: true,
    pauseFor: 3000,
    ...options,
  };

  return (
    <h1 className={className}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(defaultOptions.delay)
            .changeDeleteSpeed(defaultOptions.deleteSpeed)
            .typeString(text)
            .pauseFor(defaultOptions.pauseFor)
            .deleteAll()
            .pauseFor(defaultOptions.pauseFor)
            .start();
        }}
        options={{
          loop: defaultOptions.loop,
          cursor: '_',
          autoStart: true,
        }}
      />
    </h1>
  );
}