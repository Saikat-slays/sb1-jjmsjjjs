import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  // Close menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    handleRouteChange(); // Initial cleanup
    return () => handleRouteChange(); // Cleanup on unmount
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { path: '/services', label: 'Services' },
    { path: '/how-we-work', label: 'How We Work' },
    { path: '/about', label: 'About' },
    { path: '/data-solution', label: 'Data Case Study' },
    { path: '/ai-visuals', label: 'Visuals Case Study' },
    { path: '/developer-docs', label: 'Developer Docs' },
  ];
  
  return (
    <nav className="container mx-auto px-6 py-4 relative z-50">
      <div className="flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="menu-button lg:hidden p-2 -ml-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Zap className="h-8 w-8 text-white" />
          <span className="ml-2 text-2xl text-white">ThynkNext</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
          {menuItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`${
                location.pathname === path ? 'text-white' : 'text-white/70'
              } hover:text-white transition`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/strategy-call"
          className="bg-white text-charcoal px-6 py-2 rounded-full hover:bg-white/90 transition hidden lg:flex items-center"
        >
          Book Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu lg:hidden fixed inset-0 top-[72px] bg-charcoal z-50"
          >
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-6">
                {menuItems.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`${
                      location.pathname === path ? 'text-white' : 'text-white/70'
                    } text-xl hover:text-white transition`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  to="/strategy-call"
                  className="bg-white text-charcoal px-6 py-3 rounded-full hover:bg-white/90 transition flex items-center justify-center mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Book Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;