import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    caption: 'Healthcare Camp 2024'
  },
  {
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    caption: 'Education Initiative'
  },
  {
    url: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    caption: 'Women Empowerment Workshop'
  },
  {
    url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    caption: 'Team Meeting'
  }
];

export function Gallery() {
  return (
    <div>
      <Section className="bg-gray-50">
        <Container>
          <h1 className="text-4xl font-bold mb-12">Photo Gallery</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <img 
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}