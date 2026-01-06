import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export function Button({ 
  variant = "primary", 
  children, 
  className = "",
  ...props 
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-in-out";
  
  const variantStyles = {
    primary: "bg-brand-maroon text-brand-ivory hover:bg-brand-maroon/90 hover:shadow-md",
    secondary: "bg-brand-gold text-brand-charcoal hover:bg-brand-gold/90 hover:shadow-md",
    outline: "border-2 border-brand-maroon text-brand-maroon hover:bg-brand-maroon hover:text-brand-ivory",
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
