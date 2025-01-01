import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div>
      <Section className="bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
              <p className="text-gray-600 mb-8">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-[#FFD101]" />
                  <span>123 NGO Street, City, Country</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-[#FFD101]" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-[#FFD101]" />
                  <span>contact@vimalakar.org</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFD101] focus:border-[#FFD101]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFD101] focus:border-[#FFD101]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFD101] focus:border-[#FFD101]"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#FFD101] text-black px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}