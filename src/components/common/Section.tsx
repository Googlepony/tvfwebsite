import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'black';
}

export function Section({ children, className = '', bgColor = 'white' }: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    black: 'bg-black'
  };

  return (
    <section className={`py-16 ${bgColors[bgColor]} ${className}`}>
      {children}
    </section>
  );
}