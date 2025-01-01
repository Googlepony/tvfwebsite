import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a href="#" className="hover:text-[#FFD101]"><Facebook /></a>
      <a href="#" className="hover:text-[#FFD101]"><Instagram /></a>
      <a href="#" className="hover:text-[#FFD101]"><Twitter /></a>
      <a href="#" className="hover:text-[#FFD101]"><Linkedin /></a>
    </div>
  );
}