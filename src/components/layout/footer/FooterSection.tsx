import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div>
      <h4 className="text-[#FFD101] font-bold mb-4">{title}</h4>
      {children}
    </div>
  );
}