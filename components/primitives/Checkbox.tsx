import React from 'react';
import { cn } from '@/lib/utils';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export function Checkbox({ 
  label, 
  className,
  checked,
  ...props 
}: CheckboxProps) {
  return (
    <label className="flex items-center cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          {...props}
        />
        <div 
          className={cn(
            'w-5 h-5 rounded border-2',
            'transition-all duration-base',
            'group-hover:border-maroon-400',
            checked 
              ? 'bg-maroon-500 border-maroon-500' 
              : 'bg-ivory border-border-default',
            className
          )}
        >
          {checked && (
            <svg 
              className="w-full h-full text-ivory p-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          )}
        </div>
      </div>
      {label && (
        <span className="ml-3 text-sm text-text-primary select-none">
          {label}
        </span>
      )}
    </label>
  );
}
