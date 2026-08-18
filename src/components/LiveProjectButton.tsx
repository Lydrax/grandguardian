import React from 'react';
import { motion } from 'framer-motion';
import { LiveProjectButtonProps } from '../types';

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  href,
  className = '',
  label = 'Live Project',
}) => {
  const content = (
    <motion.div
      whileHover={{ scale: 1.04, backgroundColor: 'rgba(215, 226, 234, 0.1)' }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-200 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base cursor-pointer select-none ${className}`}
    >
      <span>{label}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return <button onClick={onClick} className="inline-block text-left">{content}</button>;
};
