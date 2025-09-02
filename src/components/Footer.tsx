import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [easterEgg, setEasterEgg] = useState(false);

  return (
    <footer className="py-20 px-8 border-t border-humanbo-divider bg-humanbo-cream">
      <div className="max-w-humanbo mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <div 
              className="flex items-center gap-3 mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setEasterEgg(!easterEgg)}
            >
              <img 
                src="https://cdn.websparks.ai/Project_Images/57_Group2085662504-25fe665c.png" 
                alt="Humanbo Logo"
                className={`h-6 w-6 transition-all duration-300 ${easterEgg ? 'rotate-180 scale-125' : ''}`}
                crossOrigin="anonymous"
              />
              <span className="text-humanbo-black font-inter font-medium text-2xl tracking-premium">
                Humanbo
              </span>
              {easterEgg && (
                <span className="text-lg animate-bounce">🎉</span>
              )}
            </div>
            <p className="text-humanbo-gray font-inter font-light text-base tracking-wide leading-relaxed max-w-md hover:text-humanbo-black transition-colors duration-300 cursor-default">
              Intelligence Reimagined. Crafting AI experiences that enhance human potential with sophistication, empathy, and purpose.
              {easterEgg && (
                <span className="block mt-2 text-sm text-humanbo-blue animate-fade-in">
                  🎊 <em>You found our footer surprise! We love curious explorers.</em>
                </span>
              )}
            </p>
          </div>
          <div className="md:col-span-8">
            <nav className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-humanbo-black font-inter font-medium text-sm tracking-ultra-wide uppercase mb-4 hover:text-humanbo-blue transition-colors duration-300 cursor-default">
                  ✨ Products
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'Askify', path: '/askify' },
                    { name: 'Mocdt', path: '/mocdt' },
                    { name: 'WebSparks', path: '/websparks' },
                    { name: 'OwnCents', path: '/owncents' },
                    { name: 'Time Wallet', path: '/time-wallet' }
                  ].map((product) => (
                    <Link 
                      key={product.path}
                      to={product.path}
                      className="block text-humanbo-gray font-inter font-light text-sm tracking-wide hover:text-humanbo-black hover:translate-x-1 transition-all duration-300"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-humanbo-black font-inter font-medium text-sm tracking-ultra-wide uppercase mb-4 hover:text-humanbo-blue transition-colors duration-300 cursor-default">
                  🏢 Company
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'About', path: '/about' },
                    { name: 'Careers', path: '/careers' },
                    { name: 'Blog', path: '/blog' },
                    { name: 'Contact', path: '/contact' },
                    { name: 'Press', path: '/press' }
                  ].map((item) => (
                    <Link 
                      key={item.path}
                      to={item.path}
                      className="block text-humanbo-gray font-inter font-light text-sm tracking-wide hover:text-humanbo-black hover:translate-x-1 transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-humanbo-black font-inter font-medium text-sm tracking-ultra-wide uppercase mb-4 hover:text-humanbo-blue transition-colors duration-300 cursor-default">
                  💡 Resources
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'Support', path: '/support' },
                    { name: 'Pricing', path: '/pricing' },
                    { name: 'Documentation', path: '/docs' },
                    { name: 'API', path: '/api' },
                    { name: 'Status', path: '/status' }
                  ].map((item) => (
                    <Link 
                      key={item.path}
                      to={item.path}
                      className="block text-humanbo-gray font-inter font-light text-sm tracking-wide hover:text-humanbo-black hover:translate-x-1 transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-humanbo-black font-inter font-medium text-sm tracking-ultra-wide uppercase mb-4 hover:text-humanbo-blue transition-colors duration-300 cursor-default">
                  ⚖️ Legal
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'Privacy Policy', path: '/privacy' },
                    { name: 'Terms of Service', path: '/terms' },
                    { name: 'Cookie Policy', path: '/cookies' },
                    { name: 'Security', path: '/security' },
                    { name: 'Compliance', path: '/compliance' }
                  ].map((item) => (
                    <Link 
                      key={item.path}
                      to={item.path}
                      className="block text-humanbo-gray font-inter font-light text-sm tracking-wide hover:text-humanbo-black hover:translate-x-1 transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-humanbo-divider">
          <div className="flex gap-6 mb-4 md:mb-0">
            {[
              { icon: 'bi-linkedin', label: 'LinkedIn', hover: '💼' },
              { icon: 'bi-twitter-x', label: 'Twitter', hover: '🐦' },
              { icon: 'bi-instagram', label: 'Instagram', hover: '📸' },
              { icon: 'bi-github', label: 'GitHub', hover: '👨‍💻' }
            ].map((social) => (
              <a 
                key={social.label}
                href="#" 
                className="group w-10 h-10 bg-humanbo-white border border-humanbo-divider rounded-full flex items-center justify-center text-humanbo-gray hover:text-humanbo-black hover:border-humanbo-black transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                aria-label={social.label}
              >
                <span className="group-hover:hidden">
                  <i className={`bi ${social.icon} text-sm`}></i>
                </span>
                <span className="hidden group-hover:block text-xs">
                  {social.hover}
                </span>
              </a>
            ))}
          </div>
          <div className="text-humanbo-gray font-inter font-light text-xs tracking-wide hover:text-humanbo-blue transition-colors duration-300 cursor-default">
            © 2024 Humanbo. Powered by Websparks AI. Made with 💙
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
