import React from 'react';
import { cn } from '@/lib/utils';

interface StackProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'vertical' | 'horizontal';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
}

const directionClasses = {
  vertical: 'flex-col',
  horizontal: 'flex-row',
};

const spacingClasses = {
  vertical: {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  },
  horizontal: {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  },
};

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
};

export function Stack({ 
  children, 
  className,
  direction = 'vertical',
  spacing = 'md',
  align = 'stretch',
  justify = 'start',
}: StackProps) {
  return (
    <div 
      className={cn(
        'flex',
        directionClasses[direction],
        spacingClasses[direction][spacing],
        alignClasses[align],
        justifyClasses[justify],
        className
      )}
    >
      {children}
    </div>
  );
}
