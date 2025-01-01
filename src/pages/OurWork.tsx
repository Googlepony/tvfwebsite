import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';

export function OurWork() {
  return (
    <div>
      <Section className="bg-gray-50">
        <Container>
          <h1 className="text-4xl font-bold mb-12">Our Work</h1>
          
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Healthcare camp"
                className="rounded-lg shadow-lg h-[300px] object-cover"
              />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Healthcare</h2>
                <p className="text-gray-600">
                  Our healthcare initiatives have successfully conducted 10 camps, providing essential 
                  medical services including screenings, consultations, and treatments to underserved 
                  communities.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                <p className="text-gray-600">
                  Through our educational programs, we've helped over 500 students access quality 
                  education, providing resources, tutoring, and scholarship opportunities.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Education initiative"
                className="rounded-lg shadow-lg h-[300px] object-cover md:order-1"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img 
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Empowerment workshop"
                className="rounded-lg shadow-lg h-[300px] object-cover"
              />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Empowerment</h2>
                <p className="text-gray-600">
                  Our empowerment initiatives have reached over 100 women, providing skills training, 
                  financial literacy, and entrepreneurship opportunities.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}