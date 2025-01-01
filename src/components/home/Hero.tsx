import React from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Transforming Lives Through
            <span className="text-[#FFD101]"> Education, Healthcare, and Empowerment</span>
          </h1>
          <p className="text-xl mb-8">
            Join us in our mission to create positive change and build stronger communities.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/our-work"
              className="bg-[#FFD101] text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Learn More
            </Link>
            <Link
              to="/donate"
              className="border-2 border-[#FFD101] text-[#FFD101] px-8 py-3 rounded-full font-semibold hover:bg-[#FFD101] hover:text-black transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}