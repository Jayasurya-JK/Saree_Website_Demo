import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
  className?: string;
}

const variantClasses = {
  default: 'bg-border-light text-text-secondary',
  success: 'bg-deepGreen-100 text-deepGreen-700',
  warning: 'bg-rust/10 text-rust',
  info: 'bg-indigo-100 text-indigo-700',
};

export function Badge({ 
  children, 
  variant = 'default',
  className 
}: BadgeProps) {
  return (
    <span 
      className={cn(
        'inline-flex items-center px-2.5 py-0.5',
        'rounded-full text-xs font-medium',
        'transition-colors duration-base',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
