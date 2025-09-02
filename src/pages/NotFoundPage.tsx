import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const NotFoundPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions] = useState([
    { title: 'Home', path: '/', description: 'Return to our homepage' },
    { title: 'About Us', path: '/about', description: 'Learn about our mission' },
    { title: 'Our Products', path: '/#products', description: 'Explore our AI solutions' },
    { title: 'Contact Support', path: '/support', description: 'Get help from our team' },
    { title: 'Pricing', path: '/pricing', description: 'View our pricing plans' },
    { title: 'Blog', path: '/blog', description: 'Read our latest articles' }
  ]);

  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredSuggestions(suggestions);
    } else {
      const filtered = suggestions.filter(
        suggestion =>
          suggestion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          suggestion.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }
  }, [searchQuery, suggestions]);

  return (
    <>
      <SEOHead
        title="Page Not Found - 404"
        description="The page you're looking for doesn't exist. Explore our AI solutions and find what you need."
        url="/404"
      />
      <div className="pt-24 pb-20 min-h-screen">
        <section className="py-20 px-8">
          <div className="max-w-humanbo mx-auto text-center">
            <div className="text-8xl md:text-9xl font-inter font-extralight text-humanbo-blue mb-8 leading-none">
              404
            </div>
            <h1 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              Page Not Found
            </h1>
            <p className="text-xl font-inter font-light text-humanbo-gray mb-12 max-w-2xl mx-auto leading-relaxed">
              Oops! The page you're looking for seems to have wandered off into the digital void. 
              Let's help you find your way back to something amazing.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for what you need..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 border border-humanbo-divider rounded-full font-inter font-light text-base text-humanbo-black placeholder-humanbo-gray focus:outline-none focus:border-humanbo-blue focus:ring-1 focus:ring-humanbo-blue transition-all duration-300"
                />
                <i className="bi bi-search absolute left-4 top-1/2 transform -translate-y-1/2 text-humanbo-gray"></i>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Link 
                to="/"
                className="group bg-humanbo-blue text-humanbo-white px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <i className="bi bi-house"></i>
                  Go Home
                  <i className="bi bi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                </span>
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-humanbo-black text-humanbo-black px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-humanbo-black hover:text-humanbo-white transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <i className="bi bi-chat-dots"></i>
                  Contact Support
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Suggestions */}
        <section className="py-20 px-8 bg-humanbo-cream">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-inter font-light text-humanbo-black mb-4 tracking-tight">
                Popular Destinations
              </h2>
              <p className="text-lg font-inter font-light text-humanbo-gray">
                Here are some places you might want to explore
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSuggestions.map((suggestion, index) => (
                <Link
                  key={index}
                  to={suggestion.path}
                  className="bg-humanbo-white p-6 rounded-lg border border-humanbo-divider hover:border-humanbo-blue/50 transition-all duration-300 hover:scale-105 group"
                >
                  <h3 className="text-lg font-inter font-medium text-humanbo-black mb-2 tracking-tight group-hover:text-humanbo-blue transition-colors duration-300">
                    {suggestion.title}
                  </h3>
                  <p className="text-base font-inter font-light text-humanbo-gray leading-relaxed">
                    {suggestion.description}
                  </p>
                  <div className="mt-4 flex items-center text-humanbo-blue">
                    <span className="text-sm font-inter font-medium">Visit</span>
                    <i className="bi bi-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                  </div>
                </Link>
              ))}
            </div>

            {filteredSuggestions.length === 0 && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-inter font-medium text-humanbo-black mb-2">
                  No results found
                </h3>
                <p className="text-base font-inter font-light text-humanbo-gray">
                  Try a different search term or browse our popular destinations above.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Fun Section */}
        <section className="py-20 px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">🤖</div>
            <h2 className="text-3xl font-inter font-light text-humanbo-black mb-4 tracking-tight">
              Even Our AI Gets Lost Sometimes
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray mb-8 leading-relaxed">
              Don't worry, it happens to the best of us! While you're here, why not explore our 
              human-centered AI solutions that never lose their way?
            </p>
            <Link 
              to="/#products"
              className="inline-flex items-center gap-2 text-humanbo-blue font-inter font-medium text-base tracking-wide hover:text-humanbo-black transition-colors duration-300"
            >
              Explore Our AI Products
              <i className="bi bi-arrow-right transition-transform duration-300 hover:translate-x-1"></i>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFoundPage;
