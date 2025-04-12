import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, ArrowRight } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Zap className="h-8 w-8 text-white" />
          <span className="ml-2 text-2xl text-white">ThynkNext</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link 
            to="/services" 
            className={`${location.pathname === '/services' ? 'text-white' : 'text-white/70'} hover:text-white transition`}
          >
            Services
          </Link>
          <Link 
            to="/results" 
            className={`${location.pathname === '/results' ? 'text-white' : 'text-white/70'} hover:text-white transition`}
          >
            Results
          </Link>
          <Link 
            to="/about" 
            className={`${location.pathname === '/about' ? 'text-white' : 'text-white/70'} hover:text-white transition`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`${location.pathname === '/contact' ? 'text-white' : 'text-white/70'} hover:text-white transition`}
          >
            Contact
          </Link>
        </div>
        <Link 
          to="/strategy-call" 
          className="bg-white text-charcoal px-6 py-2 rounded-full hover:bg-white/90 transition flex items-center"
        >
          Book Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;