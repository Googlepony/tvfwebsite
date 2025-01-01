import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';

export function About() {
  return (
    <div>
      <Section className="bg-gray-50">
        <Container>
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At Team Vimalakar Foundation, our mission is to uplift communities through quality education, 
                accessible healthcare, and meaningful empowerment programs. We believe in creating lasting 
                positive change in the lives of those we serve.
              </p>
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                We envision a world where every individual has access to education, healthcare, and 
                opportunities to thrive. Through our dedicated efforts, we strive to build stronger, 
                more resilient communities.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Team working together"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}