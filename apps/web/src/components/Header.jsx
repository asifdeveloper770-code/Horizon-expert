import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import logo from '../assets/LogoPNG.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Boilers & Heat Systems', path: '/boilers' },
    { name: 'Fabrication & Engineering', path: '/fabrication' },
    { name: 'Water Treatment', path: '/water-treatment' },
    { name: 'Automation', path: '/automation' },
    { name: 'Pharmaceutical', path: '/pharmaceutical' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all backdrop-blur-xl bg-white duration-500 ${isScrolled
        ? ' backdrop-blur-xl shadow-2xl py-2 border-b border-yellow-700/30'
        : ' from-black/70 to-transparent py-4'
        }`}
    >
      {/* Gradient Border Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-primary to-accent opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-red-900/10 pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <img
                src={logo}
                alt="ChemCon Logo"
                className="h-14 w-auto object-contain  drop-shadow-2xl"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative group px-1 py-2 font-black-semibold text-sm font-semibold transition-colors duration-300 ${isActive
                      ? 'text-red-500'
                      : isScrolled
                        ? 'text-black hover:text-red-500'
                        : 'text-black hover:text-red-600'
                    }`}
                >
                  {link.name}
                  {/* Hover Underline Animation */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-red-500 to-yellow-300 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  />
                  {/* Soft Glow Effect on Hover */}
                  <span className="absolute inset-0 rounded-md bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300 -z-10 blur-sm"></span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={`transition-colors duration-300 ${isScrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/20'
                  }`}
              >
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-primary/20 bg-white/95 backdrop-blur-xl">
              <SheetTitle className="text-2xl font-extrabold text-primary mb-8 border-b-2 border-accent pb-4 inline-block">
                Menu
              </SheetTitle>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center ${isActive
                        ? 'text-primary bg-primary/10 shadow-sm'
                        : 'text-gray-700 hover:text-primary hover:bg-accent/20 hover:translate-x-2'
                        }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;