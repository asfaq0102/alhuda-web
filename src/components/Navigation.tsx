import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Academic', path: '/academic' },
    { name: 'Admission', path: '/admission' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Programs', path: '/programs' },
    { name: 'IQAC', path: '/iqac' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out w-full
        ${
        isScrolled
          ? 'bg-white/95 py-2 shadow-md'
          : 'bg-white/90 py-3 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-3 text-2xl font-bold transition-all duration-500 hover:scale-105 mr-4 sm:mr-8"
          >
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-full border-2 border-emerald-600 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                <img 
                  src="/images/IMG-20250121-WA0069.jpg" 
                  alt="Al Huda Logo" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full animate-pulse opacity-80"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-600 to-green-700 bg-clip-text text-transparent transition-all duration-500">
                Al Huda College
              </span>
              <span className="text-xs sm:text-sm font-medium text-emerald-600 opacity-90 transition-all duration-500">
                
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`group relative px-1 py-0.5 rounded-lg transition-all duration-500 text-[0.55rem] font-medium navbar-item-animate ${
                  location.pathname === item.path
                    ? 'text-emerald-600 bg-emerald-50/90 shadow-sm scale-105'
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/80 hover:scale-105 hover:shadow-sm'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative whitespace-nowrap">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
                </span>
                
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-600 rounded-full animate-pulse shadow-sm"></div>
                )}
              </Link>
            ))}

            {/* Auth Buttons */}
            <div className="flex items-center space-x-1 ml-2">
              <Link
                to="/login"
                className={`group relative px-1 py-0.5 rounded-lg transition-all duration-500 text-[0.55rem] font-medium flex items-center space-x-1 navbar-item-animate ${
                  location.pathname === '/login'
                    ? 'text-emerald-600 bg-emerald-50/90 shadow-sm scale-105'
                    : 'text-emerald-600 hover:bg-emerald-50/90 hover:scale-105 hover:shadow-sm'
                }`}
                style={{ animationDelay: '0.9s' }}
              >
                <LogIn className="w-3 h-3" />
                <span>Login</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-500 hover:scale-110
              text-gray-700 hover:bg-gray-100`}
            aria-label="Toggle menu"
          >
            <div className="relative">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400/20 to-green-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[4rem] bg-gray-900/20 backdrop-blur-sm">
            <div className="absolute top-0 left-4 right-4 max-h-[calc(100vh-5rem)] overflow-y-auto bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 animate-scale-in">
              <div className="p-2 flex flex-col items-end space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`justify-end px-3 py-2 rounded-xl transition-all duration-500 mobile-nav-item ${
                      location.pathname === item.path
                        ? 'text-emerald-600 bg-emerald-50 shadow-md'
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50 hover:scale-105'
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}

                {/* Mobile Auth Buttons */}
                <div className="w-full flex flex-col space-y-1 mt-2 pt-2 border-t border-gray-200">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`w-full px-2 py-1.5 rounded-lg text-[0.55rem] text-emerald-600 bg-emerald-50/90 hover:bg-emerald-100/90 transition-all duration-500 flex items-center justify-center space-x-1 mobile-nav-item ${
                      location.pathname === '/login' ? 'bg-emerald-100 shadow-md' : ''
                    }`}
                    style={{ animationDelay: '0.9s' }}
                  >
                    <LogIn className="w-3 h-3" />
                    <span className="font-medium">Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

