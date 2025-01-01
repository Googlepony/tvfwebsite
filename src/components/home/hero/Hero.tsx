import React from 'react';
import { Container } from '../../common/Container';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <div className="relative h-[600px]">
      <HeroBackground />
      <Container className="h-full flex items-center">
        <HeroContent />
      </Container>
    </div>
  );
}