import React from 'react';
import { cn } from '@/lib/utils';

// Heading 1
interface Heading1Props {
  children: React.ReactNode;
  className?: string;
}

export function Heading1({ children, className }: Heading1Props) {
  return (
    <h1 
      className={cn(
        'text-5xl tablet:text-6xl',
        'font-serif tracking-tight',
        'text-balance',
        className
      )}
    >
      {children}
    </h1>
  );
}

// Heading 2
interface Heading2Props {
  children: React.ReactNode;
  className?: string;
}

export function Heading2({ children, className }: Heading2Props) {
  return (
    <h2 
      className={cn(
        'text-4xl tablet:text-5xl',
        'font-serif tracking-tight',
        'text-balance',
        className
      )}
    >
      {children}
    </h2>
  );
}

// Heading 3
interface Heading3Props {
  children: React.ReactNode;
  className?: string;
}

export function Heading3({ children, className }: Heading3Props) {
  return (
    <h3 
      className={cn(
        'text-3xl tablet:text-4xl',
        'font-serif tracking-tight',
        className
      )}
    >
      {children}
    </h3>
  );
}

// Heading 4
interface Heading4Props {
  children: React.ReactNode;
  className?: string;
}

export function Heading4({ children, className }: Heading4Props) {
  return (
    <h4 
      className={cn(
        'text-2xl tablet:text-3xl',
        'font-serif tracking-tight',
        className
      )}
    >
      {children}
    </h4>
  );
}

// Body
interface BodyProps {
  children: React.ReactNode;
  className?: string;
}

export function Body({ children, className }: BodyProps) {
  return (
    <p 
      className={cn(
        'text-base leading-relaxed',
        'text-text-secondary',
        className
      )}
    >
      {children}
    </p>
  );
}

// Caption
interface CaptionProps {
  children: React.ReactNode;
  className?: string;
}

export function Caption({ children, className }: CaptionProps) {
  return (
    <p 
      className={cn(
        'text-sm',
        'text-text-tertiary',
        className
      )}
    >
      {children}
    </p>
  );
}
