import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../images/tvf_logo.png';
import titleImg from '../images/tvf_title.png';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  return (
    <header className="bg-[#FFD101] shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            {/* Logo and Title Images */}
            <img
              className="logoimg"
              width={45}
              height="auto"
              alt="TVF Logo"
              src={logoImg}
            />
            <img
              className="titleimg"
              width={445}
              height="auto"
              alt="TVF Title"
              src={titleImg}
            />
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-gray-700 hover:text-[#FFD101] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/donate"
              className="bg-[#FFD101] text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
