import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-humanbo-off-white/95 backdrop-blur-md border-b border-humanbo-divider/50' 
        : 'bg-humanbo-off-white border-b border-humanbo-divider'
    }`}>
      <div className="max-w-humanbo mx-auto px-8 h-16 flex items-center justify-between">
        <Link 
          to="/"
          className="flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105"
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
        >
          <img 
            src="https://cdn.websparks.ai/Project_Images/57_Group2085662504-25fe665c.png" 
            alt="Humanbo Logo"
            className={`h-8 w-8 transition-all duration-300 ${logoHover ? 'rotate-12 scale-110' : ''}`}
            crossOrigin="anonymous"
          />
          <span className="text-humanbo-black font-inter font-medium text-xl tracking-premium">
            Humanbo
          </span>
          {logoHover && (
            <span className="text-lg animate-bounce">✨</span>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <span className="text-humanbo-gray font-inter font-light text-sm tracking-wide hover:text-humanbo-black transition-all duration-300 cursor-pointer">
              Products
            </span>
            <div className="absolute top-full left-0 mt-2 w-48 bg-humanbo-white border border-humanbo-divider rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-2">
                {[
                  { name: 'Askify', path: '/askify', emoji: '💬' },
                  { name: 'Mocdt', path: '/mocdt', emoji: '🧠' },
                  { name: 'WebSparks', path: '/websparks', emoji: '🎨' },
                  { name: 'OwnCents', path: '/owncents', emoji: '💎' },
                  { name: 'Time Wallet', path: '/time-wallet', emoji: '⚡' }
                ].map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="flex items-center gap-2 px-4 py-2 text-humanbo-gray hover:text-humanbo-black hover:bg-humanbo-subtle transition-all duration-200"
                  >
                    <span>{product.emoji}</span>
                    <span className="font-inter font-light text-sm">{product.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <Link 
            to="/about" 
            className={`text-humanbo-gray font-inter font-light text-sm tracking-wide hover:text-humanbo-black transition-all duration-300 relative group hover:scale-105 ${
              isActive('/about') ? 'text-humanbo-black' : ''
            }`}
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-humanbo-black transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link 
            to="/pricing" 
            className={`text-humanbo-gray font-inter font-light text-sm tracking-wide hover:text-humanbo-black transition-all duration-300 relative group hover:scale-105 ${
              isActive('/pricing') ? 'text-humanbo-black' : ''
            }`}
          >
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-humanbo-black transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link 
            to="/blog" 
            className={`text-humanbo-gray font-inter font-light text-sm tracking-wide hover:text-humanbo-black transition-all duration-300 relative group hover:scale-105 ${
              isActive('/blog') ? 'text-humanbo-black' : ''
            }`}
          >
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-humanbo-black transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link 
            to="/support" 
            className={`text-humanbo-gray font-inter font-light text-sm tracking-wide hover:text-humanbo-black transition-all duration-300 relative group hover:scale-105 ${
              isActive('/support') ? 'text-humanbo-black' : ''
            }`}
          >
            Support
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-humanbo-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link 
            to="/login"
            className="text-humanbo-gray font-inter font-light text-sm tracking-wide hover:text-humanbo-black transition-all duration-300 relative group hover:scale-105"
          >
            Login
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-humanbo-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link 
            to="/signup"
            className="bg-humanbo-black text-humanbo-white px-4 py-2 rounded-full font-inter font-medium text-sm tracking-wide hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            Create Account
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-humanbo-black hover:text-humanbo-blue transition-colors duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`bi ${mobileMenuOpen ? 'bi-x' : 'bi-list'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-humanbo-white border-t border-humanbo-divider">
          <div className="px-8 py-4 space-y-4">
            <div className="space-y-2">
              <span className="block text-humanbo-black font-inter font-medium text-sm tracking-wide">Products</span>
              {[
                { name: 'Askify', path: '/askify', emoji: '💬' },
                { name: 'Mocdt', path: '/mocdt', emoji: '🧠' },
                { name: 'WebSparks', path: '/websparks', emoji: '🎨' },
                { name: 'OwnCents', path: '/owncents', emoji: '💎' },
                { name: 'Time Wallet', path: '/time-wallet', emoji: '⚡' }
              ].map((product) => (
                <Link
                  key={product.path}
                  to={product.path}
                  className="flex items-center gap-2 pl-4 py-1 text-humanbo-gray hover:text-humanbo-black transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{product.emoji}</span>
                  <span className="font-inter font-light text-sm">{product.name}</span>
                </Link>
              ))}
            </div>
            <Link 
              to="/about"
              className="block text-humanbo-gray font-inter font-light text-sm tracking-wide hover:text-humanbo-black transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/pricing"
              className="block text-humanbo-gray font-inter font-light text-sm tracking-wide hover:text-humanbo-black transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/blog"
              className="block text-humanbo-gray font-inter font-light text-sm tracking-wide hover:text-humanbo-black transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/support"
              className="block text-humanbo-gray font-inter font-light text-sm tracking-wide hover:text-humanbo-black transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </Link>
            <Link 
              to="/login"
              className="block text-humanbo-gray font-inter font-light text-sm tracking-wide hover:text-humanbo-black transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/signup"
              className="block bg-humanbo-black text-humanbo-white px-4 py-2 rounded-full font-inter font-medium text-sm tracking-wide hover:bg-gray-800 transition-all duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Create Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
