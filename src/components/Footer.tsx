import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

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

  const LogoComponent = () => {
    if (logoError || !logoLoaded) {
      return (
        <div className="w-6 h-6 bg-gradient-to-br from-humanbo-blue to-blue-600 rounded-md flex items-center justify-center text-white font-inter font-medium text-xs">
          <span className="tracking-tight">H</span>
        </div>
      );
    }

    return (
      <img 
        src="https://cdn.websparks.ai/Project_Images/57_Group2085662504-25fe665c.png" 
        alt="Humanbo Logo"
        className="w-6 h-6 object-contain"
        loading="lazy"
        decoding="async"
        onError={() => setLogoError(true)}
        onLoad={() => {
          setLogoLoaded(true);
          setLogoError(false);
        }}
      />
    );
  };

  return (
    <footer className="border-t border-humanbo-divider bg-humanbo-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-6">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3 hover:opacity-80 transition-opacity duration-200">
              <LogoComponent />
              <span className="text-humanbo-black font-inter font-semibold text-lg tracking-tight">
                Humanbo
              </span>
            </Link>
            <p className="text-humanbo-gray font-inter font-light text-sm leading-relaxed mb-4 max-w-xs">
              AI that amplifies human potential with sophistication and purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-humanbo-black font-inter font-medium text-sm mb-3">Products</h4>
              <div className="space-y-2">
                {[
                  { name: 'Askify', path: '/askify' },
                  { name: 'Mocdt', path: '/mocdt' },
                  { name: 'WebSparks', path: '/websparks' },
                  { name: 'OwnCents', path: '/owncents' }
                ].map((product) => (
                  <Link 
                    key={product.path}
                    to={product.path}
                    className="block text-humanbo-gray font-inter font-light text-sm hover:text-humanbo-black transition-colors duration-200"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-humanbo-black font-inter font-medium text-sm mb-3">Company</h4>
              <div className="space-y-2">
                {[
                  { name: 'About', path: '/about' },
                  { name: 'Careers', path: '/careers' },
                  { name: 'Contact', path: '/contact' },
                  { name: 'Support', path: '/support' }
                ].map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path}
                    className="block text-humanbo-gray font-inter font-light text-sm hover:text-humanbo-black transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-humanbo-black font-inter font-medium text-sm mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-humanbo-gray font-inter font-light">
              <div>
                <p className="font-medium text-humanbo-black">🇺🇸 US Office</p>
                <p>30 N Gould St, Sheridan, WY 82802</p>
                <a href="mailto:hello@humanbo.com" className="hover:text-humanbo-blue transition-colors duration-200">
                  hello@humanbo.com
                </a>
              </div>
              <div className="pt-2">
                <p className="font-medium text-humanbo-black">🇧🇩 BD Office</p>
                <p>51/B Kemal Ataturk Ave, Dhaka 1213</p>
                <a href="mailto:hey.bd@humanbo.com" className="hover:text-humanbo-blue transition-colors duration-200">
                  hey.bd@humanbo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-humanbo-divider gap-4">
          {/* Copyright */}
          <div className="text-humanbo-gray font-inter font-light text-xs">
            © 2024 Humanbo. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {[
              { icon: 'bi-facebook', label: 'Facebook', url: 'https://www.facebook.com/humanboai/' },
              { icon: 'bi-instagram', label: 'Instagram', url: 'https://www.instagram.com/humanboai' },
              { icon: 'bi-youtube', label: 'YouTube', url: 'https://www.youtube.com/@Humanbo' },
              { icon: 'bi-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/company/humanbo/' }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-humanbo-subtle rounded-md flex items-center justify-center text-humanbo-gray hover:text-humanbo-blue hover:bg-humanbo-blue/10 transition-all duration-200"
                aria-label={social.label}
              >
                <i className={`bi ${social.icon} text-xs`} aria-hidden="true"></i>
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex gap-4 text-xs">
            {[
              { name: 'Privacy', path: '/privacy' },
              { name: 'Terms', path: '/terms' }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className="text-humanbo-gray font-inter font-light hover:text-humanbo-black transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
