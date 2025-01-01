import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';

export function Privacy() {
  return (
    <div>
      <Section className="bg-gray-50">
        <Container>
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              This Privacy Policy describes how Team Vimalakar Foundation ("we," "us," or "our") 
              collects, uses, and protects your personal information.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information that you provide directly to us, including name, email address, 
              phone number, and any other information you choose to provide.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect to provide, maintain, and improve our services, 
              to communicate with you, and to comply with legal obligations.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}