import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const variantClasses = {
  primary: 'bg-maroon-500 text-ivory hover:bg-maroon-600 focus:ring-maroon-500',
  secondary: 'border-2 border-maroon-500 text-maroon-500 hover:bg-maroon-50 focus:ring-maroon-500',
  ghost: 'text-maroon-500 hover:bg-maroon-50 focus:ring-maroon-500',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({ 
  children, 
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={cn(
        'inline-flex items-center justify-center',
        'font-medium rounded-md',
        'transition-all duration-base ease-out-custom',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
