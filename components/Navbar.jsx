import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-2 rounded-md mr-1">
                <span className="font-bold text-xl">F</span>
              </div>
              <span className={`font-bold text-xl ${isScrolled ? 'text-blue-950' : 'text-white'} transition-colors duration-300`}>inans</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink to="/" yazi="Home" isScrolled={isScrolled} />
              <NavLink to="/dashboard" yazi="Dashboard" isScrolled={isScrolled} />
              <NavLink to="/investments" yazi="Investments" isScrolled={isScrolled} />
              <NavLink to="/news" yazi="Market News" isScrolled={isScrolled} />
              <NavLink to="/contact" yazi="Contact" isScrolled={isScrolled} />
              
              <div className="ml-4 flex items-center">
                <Link 
                  to="/login" 
                  className={`${
                    isScrolled ? 'bg-blue-950 text-white' : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20'
                  } px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-blue-950 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              } focus:outline-none transition-colors duration-300`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>


      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink to="/" yazi="Home" />
          <MobileNavLink to="/dashboard" yazi="Dashboard" />
          <MobileNavLink to="/investments" yazi="Investments" />
          <MobileNavLink to="/news" yazi="Market News" />
          <MobileNavLink to="/contact" yazi="Contact" />
          <MobileNavLink to="/login" yazi="Sign In" />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, yazi, isScrolled }) => (
  <Link 
    to={to} 
    className={`${
      isScrolled ? 'text-gray-700 hover:text-blue-950' : 'text-white/90 hover:text-white'
    } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
  >
    {yazi}
  </Link>
);

const MobileNavLink = ({ to, yazi }) => (
  <Link 
    to={to} 
    className="text-gray-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
    onClick={() => {}}
  >
    {yazi}
  </Link>
);

export default Navbar;