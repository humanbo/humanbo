import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const playfulWords = ['Intelligence', 'Creativity', 'Empathy', 'Wonder', 'Magic'];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % playfulWords.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="pt-40 pb-140 px-8 relative overflow-hidden">
      {/* Subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-2 h-2 bg-humanbo-blue/20 rounded-full transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x * 0.01}px`,
            top: `${mousePosition.y * 0.01}px`,
          }}
        />
        <div 
          className="absolute w-1 h-1 bg-humanbo-gray/30 rounded-full transition-all duration-1500 ease-out"
          style={{
            right: `${mousePosition.x * 0.005}px`,
            bottom: `${mousePosition.y * 0.005}px`,
          }}
        />
      </div>

      <div className="max-w-humanbo mx-auto text-center relative">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-humanbo-subtle text-humanbo-gray font-inter font-light text-sm tracking-ultra-wide uppercase rounded-full hover:bg-humanbo-blue/10 hover:text-humanbo-blue transition-all duration-300 cursor-default">
            ✨ Where AI Meets Soul
          </span>
        </div>
        
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-inter font-extralight text-humanbo-black mb-12 leading-ultra-tight tracking-tight">
          <span className="inline-block transition-all duration-500 hover:scale-105 cursor-default">
            {playfulWords[currentWord]}
          </span>
          <br />
          <span className="font-light italic hover:text-humanbo-blue transition-colors duration-500 cursor-default">
            Reimagined
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl font-inter font-light text-humanbo-gray mb-16 max-w-3xl mx-auto leading-relaxed tracking-wide">
          We craft AI that thinks like you do — intuitive, empathetic, and delightfully human. 
          <span className="hover:text-humanbo-blue transition-colors duration-300 cursor-default"> Experience technology that doesn't just compute, but truly understands.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <button 
            className="group bg-humanbo-black text-humanbo-white px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:rotate-1"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span className="flex items-center gap-2">
              {isHovering ? '🚀 Launch Experience' : 'Experience Humanbo'}
              <i className="bi bi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
            </span>
          </button>
          <a 
            href="#products" 
            className="group text-humanbo-black font-inter font-light text-base tracking-wide transition-all duration-300 relative hover:scale-105"
          >
            <span className="border-b border-humanbo-black/20 group-hover:border-humanbo-black transition-all duration-300">
              Discover Our Magic
            </span>
            <i className="bi bi-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
