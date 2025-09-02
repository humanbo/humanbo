import React, { useState } from 'react';

const Mission: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  
  const handleClick = () => {
    setClickCount(prev => prev + 1);
  };

  const getButtonText = () => {
    if (clickCount === 0) return 'Shape the Future';
    if (clickCount === 1) return 'Yes, Really! 🚀';
    if (clickCount === 2) return 'You\'re Persistent! 😄';
    if (clickCount === 3) return 'Okay, You Win! 🎉';
    return 'Welcome to the Team! 🤝';
  };

  return (
    <section className="py-160 px-8 bg-humanbo-cream relative overflow-hidden">
      {/* Playful background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-humanbo-blue/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-2 h-2 bg-humanbo-gray/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-humanbo-blue/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-humanbo mx-auto text-center relative">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-inter font-extralight text-humanbo-black mb-16 leading-ultra-tight tracking-tight max-w-5xl mx-auto">
          <span className="hover:text-humanbo-blue transition-colors duration-500 cursor-default">
            Technology should feel
          </span>
          <br />
          <span className="font-light italic hover:scale-105 transition-transform duration-300 cursor-default inline-block">
            effortless,
          </span>
          <br />
          <span className="hover:text-humanbo-blue transition-colors duration-500 cursor-default">
            intelligent, and deeply human.
          </span>
        </h2>
        <p className="text-lg font-inter font-light text-humanbo-gray mb-12 max-w-2xl mx-auto tracking-wide leading-relaxed hover:text-humanbo-black transition-colors duration-300 cursor-default">
          Join us in building a future where AI enhances human creativity, empathy, and potential — not replaces it.
          <span className="block mt-2 text-sm text-humanbo-light-gray">
            ✨ <em>Every click makes the future a little brighter!</em>
          </span>
        </p>
        <button 
          onClick={handleClick}
          className={`group border-2 border-humanbo-black text-humanbo-black px-12 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-humanbo-black hover:text-humanbo-white transition-all duration-500 transform hover:scale-105 ${
            clickCount > 0 ? 'animate-bounce' : ''
          }`}
        >
          <span className="flex items-center gap-2">
            {getButtonText()}
            <i className={`bi transition-transform duration-300 group-hover:translate-x-1 ${
              clickCount > 2 ? 'bi-heart-fill text-red-500' : 'bi-arrow-right'
            }`}></i>
          </span>
        </button>
        {clickCount > 3 && (
          <p className="mt-6 text-sm text-humanbo-blue animate-fade-in">
            🎊 You've unlocked our secret appreciation message! We love curious minds like yours.
          </p>
        )}
      </div>
    </section>
  );
};

export default Mission;
