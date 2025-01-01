import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';

const events = [
  {
    id: 1,
    title: 'Healthcare Camp 2024',
    date: 'March 15, 2024',
    location: 'City Community Center',
    description: 'Free medical check-ups and consultations for the community.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 2,
    title: 'Education Workshop',
    date: 'April 1, 2024',
    location: 'Local School',
    description: 'Interactive learning session for students and teachers.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

export function Events() {
  return (
    <div>
      <Section className="bg-gray-50">
        <Container>
          <h1 className="text-4xl font-bold mb-12">Upcoming Events</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <p>Date: {event.date}</p>
                    <p>Location: {event.location}</p>
                  </div>
                  <Button href={`/events/${event.id}`}>Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}