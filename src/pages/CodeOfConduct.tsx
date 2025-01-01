import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';

export function CodeOfConduct() {
  return (
    <div>
      <Section className="bg-gray-50">
        <Container>
          <h1 className="text-4xl font-bold mb-8">Code of Conduct</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Our Code of Conduct outlines the standards of behavior expected from all members, 
              volunteers, and participants in Team Vimalakar Foundation's activities.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Core Values</h2>
            <p className="text-gray-600 mb-6">
              We are committed to maintaining an environment of respect, integrity, and 
              professionalism in all our activities and interactions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Expected Behavior</h2>
            <p className="text-gray-600 mb-6">
              All participants are expected to demonstrate respect, empathy, and cultural 
              sensitivity in their interactions with others.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}