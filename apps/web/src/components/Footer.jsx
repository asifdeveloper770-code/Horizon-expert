import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Smartphone } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Boilers & Heat Systems', path: '/boilers' },
    { name: 'Fabrication & Engineering', path: '/fabrication' },
    { name: 'Water Treatment Solutions', path: '/water-treatment' },
    { name: 'Automation', path: '/automation' },
    { name: 'Pharmaceutical Solutions', path: '/pharmaceutical' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              Chem<span className="text-secondary">Con</span>
            </div>
            <p className="text-sm mb-4">
              Chemical & Engineering Solutions - Your trusted partner for industrial excellence in boiler systems, fabrication, water treatment, and automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-white font-semibold text-lg mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-white font-semibold text-lg mb-4 block">Services</span>
            <ul className="space-y-2">
              {quickLinks.slice(4).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-white font-semibold text-lg mb-4 block">Contact Us</span>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Plot # C-65 32-A Korangi Industrial Area Karachi
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Smartphone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">0323-2772110</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">021-35070311</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@chemcon.com.pk"
                  className="text-sm hover:text-secondary transition-colors"
                >
                  info@chemcon.com.pk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Chem Con - Chemical & Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;