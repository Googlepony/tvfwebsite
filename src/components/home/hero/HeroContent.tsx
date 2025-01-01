import React from 'react';
import { Button } from '../../common/Button';

export function HeroContent() {
  return (
    <div className="max-w-2xl text-white">
      <h1 className="text-5xl font-bold mb-6">
        Transforming Lives Through
        <span className="text-[#FFD101]"> Education, Healthcare, and Empowerment</span>
      </h1>
      <p className="text-xl mb-8">
        Join us in our mission to create positive change and build stronger communities.
      </p>
      <div className="flex space-x-4">
        <Button href="/our-work">Learn More</Button>
        <Button href="/donate" variant="outline">Donate Now</Button>
      </div>
    </div>
  );
}