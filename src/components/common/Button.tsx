import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export function Button({ href, variant = 'primary', children }: ButtonProps) {
  const baseStyles = "px-6 py-2 rounded-full font-semibold transition-colors";
  const variants = {
    primary: "bg-[#FFD101] text-black hover:bg-opacity-90",
    outline: "border-2 border-[#FFD101] text-[#FFD101] hover:bg-[#FFD101] hover:text-black"
  };

  return (
    <Link to={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </Link>
  );
}