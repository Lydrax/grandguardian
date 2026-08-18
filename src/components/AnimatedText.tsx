import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { AnimatedTextProps } from '../types';

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block transition-opacity">
      {char}
    </motion.span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  style,
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.replace(/\s+/g, '').length;
  let charCounter = 0;

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed mx-auto select-none ${className}`}
      style={style}
    >
      {words.map((word, wordIndex) => {
        const letters = word.split('');
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.28em]">
            {letters.map((char, charIndexInWord) => {
              const start = charCounter / totalChars;
              const end = (charCounter + 1) / totalChars;
              charCounter++;
              return (
                <Character
                  key={charIndexInWord}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
