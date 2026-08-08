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
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F80FF] focus-visible:ring-offset-2';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-sm md:text-base px-8 py-4 gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-[#2F80FF] text-white hover:bg-[#2563EB] shadow-[0_4px_14px_rgba(47,128,255,0.39)] hover:shadow-[0_6px_20px_rgba(47,128,255,0.23)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95',
    purple: 'bg-[#0F172A] text-white hover:bg-[#1E293B] shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95',
    secondary: 'bg-[#F7FAFC] text-[#2F80FF] hover:bg-[#DCEBFF] border border-[#DCEBFF] active:scale-95',
    glass: 'glass-card text-slate-900 hover:bg-white border border-[#DCEBFF] active:scale-95',
    outline: 'bg-transparent border-2 border-[#DCEBFF] text-slate-700 hover:border-[#2F80FF] hover:text-[#2F80FF] active:scale-95',
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
