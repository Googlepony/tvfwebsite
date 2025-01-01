import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../common/Container';
import { FooterSection } from './FooterSection';
import { NewsletterForm } from './NewsletterForm';
import { SocialLinks } from './SocialLinks';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterSection title="Team Vimalakar">
            <p className="text-gray-300">
              Transforming lives through education, healthcare, and empowerment.
            </p>
          </FooterSection>

          <FooterSection title="Quick Links">
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#FFD101]">About Us</Link></li>
              <li><Link to="/our-work" className="hover:text-[#FFD101]">Our Work</Link></li>
              <li><Link to="/events" className="hover:text-[#FFD101]">Events</Link></li>
              <li><Link to="/gallery" className="hover:text-[#FFD101]">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-[#FFD101]">Contact</Link></li>
            </ul>
          </FooterSection>

          <FooterSection title="Contact Us">
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-[#FFD101]" />
                <span>123 NGO Street, City, Country</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#FFD101]" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#FFD101]" />
                <span>contact@vimalakar.org</span>
              </li>
            </ul>
          </FooterSection>

          <div>
            <FooterSection title="Follow Us">
              <SocialLinks />
            </FooterSection>
            
            <div className="mt-8">
              <FooterSection title="Newsletter">
                <NewsletterForm />
              </FooterSection>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Team Vimalakar Foundation. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-[#FFD101]">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#FFD101]">
                Terms of Service
              </Link>
              <Link to="/code-of-conduct" className="text-gray-400 hover:text-[#FFD101]">
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}