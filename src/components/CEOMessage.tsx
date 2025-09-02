import React, { useState } from 'react';

const CEOMessage: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="py-140 px-8">
      <div className="max-w-humanbo mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-4">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black leading-premium tracking-tight mb-8 hover:text-humanbo-blue transition-colors duration-500 cursor-default">
              A Personal Note
              <span className="text-lg ml-2">💌</span>
            </h2>
            <div className="w-16 h-px bg-humanbo-black hover:bg-humanbo-blue hover:w-24 transition-all duration-500"></div>
          </div>
          <div className="md:col-span-8">
            <blockquote className="text-2xl md:text-3xl font-inter font-light text-humanbo-gray italic leading-relaxed tracking-wide mb-12 hover:text-humanbo-black transition-colors duration-300 cursor-default">
              "We stand at the threshold of an extraordinary moment in human history. AI doesn't have to be cold, distant, or threatening. When built with intention, empathy, and respect for human values, it becomes something beautiful — 
              <span className="hover:bg-humanbo-blue/10 px-1 rounded transition-all duration-300"> a mirror that reflects our best qualities and amplifies our greatest potential.</span>"
            </blockquote>
            <div 
              className="flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-300"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="w-12 h-12 bg-humanbo-subtle rounded-full flex items-center justify-center hover:bg-humanbo-blue/20 transition-colors duration-300">
                <span className="text-humanbo-black font-inter font-medium text-lg">
                  {isHovering ? '👋' : 'FS'}
                </span>
              </div>
              <div>
                <p className="text-base font-inter font-medium text-humanbo-black tracking-wide">
                  Fardin Sheikh
                  {isHovering && <span className="ml-2">🚀</span>}
                </p>
                <p className="text-sm font-inter font-light text-humanbo-gray tracking-wide">
                  {isHovering ? 'Chief Dream Architect' : 'Founder & Chief Visionary'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
