import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'outline' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  isMagnetic?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  isMagnetic = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-sm md:text-base px-8 py-4 gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-[#d0bcff] text-[#3c0091] hover:bg-[#e9ddff] shadow-[0_0_15px_rgba(208,188,255,0.3)] hover:shadow-[0_0_20px_rgba(208,188,255,0.5)] active:scale-95',
    purple: 'bg-[#6d3bd7] text-white hover:bg-[#7c4be6] shadow-[0_0_20px_rgba(109,59,215,0.4)] hover:shadow-[0_0_25px_rgba(109,59,215,0.6)] active:scale-95',
    secondary: 'bg-[#26364a] text-[#d3e4fe] hover:bg-[#1b2b3f] border border-white/10 active:scale-95',
    glass: 'glass-card text-[#d3e4fe] hover:bg-[#26364a]/60 border border-[#494454] active:scale-95',
    outline: 'bg-transparent border-2 border-[#494454] text-[#d3e4fe] hover:border-[#d0bcff] hover:text-[#d0bcff] active:scale-95',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (isMagnetic) {
    return (
      <motion.button
        className={combinedClass}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        {...(props as any)}
      >
        {icon && iconPosition === 'left' && <span className="flex items-center">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="flex items-center">{icon}</span>}
      </motion.button>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {icon && iconPosition === 'left' && <span className="flex items-center">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex items-center">{icon}</span>}
    </button>
  );
};
