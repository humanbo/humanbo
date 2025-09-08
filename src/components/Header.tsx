import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Preload the logo image
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLogoLoaded(true);
      setLogoError(false);
    };
    img.onerror = () => {
      setLogoError(true);
      setLogoLoaded(false);
    };
    img.src = 'https://cdn.websparks.ai/Project_Images/57_Group2085662504-25fe665c.png';
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const LogoComponent = () => {
    if (logoError || !logoLoaded) {
      // Professional fallback logo
      return (
        <div 
          className={`w-8 h-8 bg-gradient-to-br from-humanbo-blue via-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-inter font-bold text-sm shadow-sm transition-all duration-300 ${
            logoHover ? 'rotate-3 scale-105' : ''
          }`}
          role="img"
          aria-label="Humanbo Logo"
        >
          <span className="tracking-tight">H</span>
        </div>
      );
    }

    return (
      <div className="relative">
        <img 
          src="https://cdn.websparks.ai/Project_Images/57_Group2085662504-25fe665c.png" 
          alt="Humanbo Logo"
          className={`w-8 h-8 object-contain rounded-md transition-all duration-300 ${
            logoHover ? 'rotate-3 scale-105' : ''
          }`}
          loading="eager"
          decoding="async"
          onError={() => setLogoError(true)}
          onLoad={() => {
            setLogoLoaded(true);
            setLogoError(false);
          }}
        />
        {/* Loading shimmer effect */}
        {!logoLoaded && !logoError && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md animate-pulse"></div>
        )}
      </div>
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm' 
          : 'bg-white/70 backdrop-blur-lg border-b border-gray-200/40'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14">
          {/* Logo and Brand */}
          <Link 
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-humanbo-blue focus:ring-offset-2 rounded-lg p-1 transition-all duration-300"
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
            aria-label="Humanbo Home"
          >
            <LogoComponent />
            <span className="text-gray-900 font-inter font-semibold text-lg sm:text-xl tracking-tight group-hover:text-humanbo-blue transition-colors duration-300">
              humanbo
            </span>
            {logoHover && (
              <span className="text-sm animate-bounce ml-1 opacity-70" aria-hidden="true">✨</span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
            {/* Products Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-gray-700 font-inter font-medium text-sm hover:text-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-humanbo-blue focus:ring-offset-2 rounded-md px-2 py-1"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Products
                <i className="bi bi-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180" aria-hidden="true"></i>
              </button>
              <div 
                className="absolute top-full left-0 mt-1 w-52 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-1"
                role="menu"
                aria-label="Products menu"
              >
                <div className="py-1.5">
                  {[
                    { name: 'Askify', path: '/askify', emoji: '💬', desc: 'AI Browser Extension' },
                    { name: 'Mocdt', path: '/mocdt', emoji: '🧠', desc: 'AI-Native Work OS' },
                    { name: 'WebSparks', path: '/websparks', emoji: '🎨', desc: 'AI Web Development' },
                    { name: 'OwnCents', path: '/owncents', emoji: '💎', desc: 'Financial Intelligence' },
                    { name: 'Time Wallet', path: '/time-wallet', emoji: '⚡', desc: 'Digital Wellness' }
                  ].map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-200 focus:outline-none focus:bg-gray-50/80 first:rounded-t-xl last:rounded-b-xl"
                      role="menuitem"
                    >
                      <span className="text-base" aria-hidden="true">{product.emoji}</span>
                      <div>
                        <div className="font-inter font-medium text-sm">{product.name}</div>
                        <div className="font-inter font-light text-xs text-gray-500">{product.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Navigation Links */}
            {[
              { name: 'About', path: '/about' },
              { name: 'Blog', path: '/blog' },
              { name: 'Support', path: '/support' }
            ].map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`relative text-gray-700 font-inter font-medium text-sm hover:text-gray-900 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-humanbo-blue focus:ring-offset-2 rounded-md px-2 py-1 ${
                  isActive(link.path) ? 'text-gray-900' : ''
                }`}
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-humanbo-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
            
            {/* Auth Links */}
            <div className="flex items-center gap-3 ml-6 pl-6 border-l border-gray-200/60">
              <Link 
                to="/login"
                className="text-gray-700 font-inter font-medium text-sm hover:text-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-humanbo-blue focus:ring-offset-2 rounded-md px-3 py-1.5"
              >
                Sign In
              </Link>
              <Link 
                to="/signup"
                className="bg-humanbo-blue/90 backdrop-blur-sm text-white px-5 py-2 rounded-full font-inter font-medium text-sm hover:bg-humanbo-blue transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-humanbo-blue focus:ring-offset-2 shadow-sm hover:shadow-md"
              >
                Get Started
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-1.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-humanbo-blue focus:ring-offset-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <i className={`bi ${mobileMenuOpen ? 'bi-x' : 'bi-list'} text-lg`} aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/60 shadow-lg">
          <div className="px-4 py-5 space-y-5">
            {/* Mobile Products */}
            <div className="space-y-2">
              <span className="block text-gray-900 font-inter font-semibold text-sm tracking-wide uppercase opacity-70">Products</span>
              {[
                { name: 'Askify', path: '/askify', emoji: '💬', desc: 'AI Browser Extension' },
                { name: 'Mocdt', path: '/mocdt', emoji: '🧠', desc: 'AI-Native Work OS' },
                { name: 'WebSparks', path: '/websparks', emoji: '🎨', desc: 'AI Web Development' },
                { name: 'OwnCents', path: '/owncents', emoji: '💎', desc: 'Financial Intelligence' },
                { name: 'Time Wallet', path: '/time-wallet', emoji: '⚡', desc: 'Digital Wellness' }
              ].map((product) => (
                <Link
                  key={product.path}
                  to={product.path}
                  className="flex items-center gap-3 pl-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-base" aria-hidden="true">{product.emoji}</span>
                  <div>
                    <div className="font-inter font-medium text-sm">{product.name}</div>
                    <div className="font-inter font-light text-xs text-gray-500">{product.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              {[
                { name: 'About', path: '/about' },
                { name: 'Blog', path: '/blog' },
                { name: 'Support', path: '/support' }
              ].map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className="block text-gray-700 font-inter font-medium text-base hover:text-gray-900 hover:bg-gray-50/80 rounded-lg px-3 py-2 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Auth Links */}
            <div className="pt-4 border-t border-gray-200/60 space-y-2">
              <Link 
                to="/login"
                className="block text-gray-700 font-inter font-medium text-base hover:text-gray-900 hover:bg-gray-50/80 rounded-lg px-3 py-2 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                to="/signup"
                className="block bg-humanbo-blue/90 backdrop-blur-sm text-white px-5 py-2.5 rounded-full font-inter font-medium text-base hover:bg-humanbo-blue transition-all duration-300 text-center shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
