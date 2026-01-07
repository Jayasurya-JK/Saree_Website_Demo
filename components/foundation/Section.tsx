import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'ivory' | 'warmBeige' | 'paperTexture';
}

const spacingClasses = {
  sm: 'py-8 tablet:py-12',
  md: 'py-12 tablet:py-16',
  lg: 'py-16 tablet:py-24',
  xl: 'py-24 tablet:py-32',
};

const backgroundClasses = {
  ivory: 'bg-ivory',
  warmBeige: 'bg-warmBeige',
  paperTexture: 'bg-paperTexture',
};

export function Section({ 
  children, 
  className, 
  spacing = 'md',
  background 
}: SectionProps) {
  return (
    <section 
      className={cn(
        spacingClasses[spacing],
        background && backgroundClasses[background],
        className
      )}
    >
      {children}
    </section>
  );
}
