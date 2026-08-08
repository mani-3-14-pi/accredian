import React from 'react';
import { motion } from 'motion/react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'glass' | 'solid' | 'mode-b';
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'glass',
  className = '',
  hoverEffect = true,
  onClick,
}) => {
  const variantStyles = {
    glass: 'glass-card rounded-xl p-6 md:p-8 border border-[#DCEBFF] text-slate-900',
    solid: 'bg-[#FFFFFF] border border-[#DCEBFF] rounded-xl p-6 md:p-8 text-slate-900',
    'mode-b': 'bg-white border border-slate-200 rounded-xl p-6 md:p-8 text-slate-900 shadow-sm',
  };

  const cardClasses = `${variantStyles[variant]} ${
    hoverEffect ? 'transition-all duration-200' : ''
  } ${className}`;

  if (hoverEffect) {
    return (
      <motion.div
        className={cardClasses}
        whileHover={{
          y: -4,
          boxShadow:
            variant === 'mode-b'
              ? '0 10px 25px -5px rgba(0, 0, 0, 0.08)'
              : '0 0 30px rgba(109, 59, 215, 0.25)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  );
};
