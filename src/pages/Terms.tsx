import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';

export function Terms() {
  return (
    <div>
      <Section className="bg-gray-50">
        <Container>
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              These Terms of Service ("Terms") govern your access to and use of Team Vimalakar 
              Foundation's services and website.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing or using our services, you agree to be bound by these Terms and our 
              Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Services</h2>
            <p className="text-gray-600 mb-6">
              You agree to use our services only for lawful purposes and in accordance with these Terms.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}