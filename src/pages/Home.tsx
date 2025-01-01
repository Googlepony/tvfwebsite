import React from 'react';
import { Hero } from '../components/home/Hero';
import { Stats } from '../components/home/Stats';
import { PhotoSlider } from '../components/home/PhotoSlider';

export function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <PhotoSlider />
    </div>
  );
}