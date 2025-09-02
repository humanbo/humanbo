import React, { useState } from 'react';

const About: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section id="about" className="py-140 px-8">
      <div className="max-w-humanbo mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-4">
            <h2 
              className="text-4xl md:text-5xl font-inter font-light text-humanbo-black leading-premium tracking-tight cursor-pointer hover:text-humanbo-blue transition-colors duration-500"
              onClick={() => setIsRevealed(!isRevealed)}
            >
              The Humanbo
              <br />
              Philosophy
              <span className="text-lg ml-2 opacity-50">
                {isRevealed ? '🎭' : '✨'}
              </span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-8">
              <p className="text-xl font-inter font-light text-humanbo-gray leading-relaxed tracking-wide hover:text-humanbo-black transition-colors duration-300 cursor-default">
                In a world saturated with cold, mechanical AI, we chose a different path. We believe artificial intelligence should amplify human brilliance, not replace it. 
                <span className="hover:bg-humanbo-blue/10 px-1 rounded transition-all duration-300"> Our technology doesn't just process data — it understands context, emotion, and intent.</span>
              </p>
              <p className={`text-xl font-inter font-light text-humanbo-light-gray leading-relaxed tracking-wide transition-all duration-500 ${
                isRevealed ? 'opacity-100 transform translate-y-0' : 'opacity-70 transform translate-y-2'
              }`}>
                Every algorithm we write, every interface we design, every solution we create begins with a simple question: 
                <span className="italic hover:text-humanbo-blue transition-colors duration-300 cursor-default"> "How would a thoughtful human approach this?"</span> 
                The result is AI that feels less artificial and more... human.
              </p>
              {isRevealed && (
                <p className="text-lg font-inter font-light text-humanbo-blue leading-relaxed tracking-wide animate-fade-in">
                  🎉 <em>Surprise!</em> We believe in delightful discoveries — just like this hidden message you found by clicking our title.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-humanbo-divider to-transparent mt-24 hover:via-humanbo-blue/30 transition-all duration-500"></div>
      </div>
    </section>
  );
};

export default About;
