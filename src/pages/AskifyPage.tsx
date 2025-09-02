import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AskifyPage: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Instant Answers",
      description: "Highlight any text on any website and get instant, contextual answers powered by advanced AI.",
      icon: "⚡"
    },
    {
      title: "Smart Chat Interface",
      description: "Ask follow-up questions and have natural conversations while browsing.",
      icon: "💬"
    },
    {
      title: "Context Awareness",
      description: "Understands the webpage you're on and provides relevant, accurate responses.",
      icon: "🧠"
    },
    {
      title: "Privacy First",
      description: "Your browsing data stays private. We only process what you explicitly ask about.",
      icon: "🔒"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-humanbo-subtle text-humanbo-gray font-inter font-light text-sm tracking-ultra-wide uppercase rounded-full">
              💬 Browser Extension
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-inter font-extralight text-humanbo-black mb-8 leading-ultra-tight tracking-tight">
            Meet
            <br />
            <span className="font-light italic text-humanbo-blue">Askify</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter font-light text-humanbo-gray mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Your intelligent browsing companion. Get instant answers to any question while exploring the web.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group bg-humanbo-black text-humanbo-white px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                Add to Chrome
                <i className="bi bi-download transition-transform duration-300 group-hover:translate-y-1"></i>
              </span>
            </button>
            <button className="border-2 border-humanbo-black text-humanbo-black px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-humanbo-black hover:text-humanbo-white transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 bg-humanbo-cream">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              Powerful Features
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
              Everything you need to make browsing more intelligent and productive
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-6 bg-humanbo-white rounded-lg border transition-all duration-300 cursor-pointer hover:scale-105 ${
                  activeFeature === index ? 'border-humanbo-blue shadow-lg' : 'border-humanbo-divider hover:border-humanbo-blue/50'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-inter font-medium text-humanbo-black mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-base font-inter font-light text-humanbo-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              How It Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Install Extension",
                description: "Add Askify to your browser in seconds. No setup required.",
                icon: "📥"
              },
              {
                step: "02", 
                title: "Highlight & Ask",
                description: "Select any text on any website and ask your question.",
                icon: "✨"
              },
              {
                step: "03",
                title: "Get Smart Answers",
                description: "Receive instant, contextual responses powered by AI.",
                icon: "🎯"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="text-sm font-inter font-medium text-humanbo-blue mb-2 tracking-ultra-wide uppercase">
                  Step {step.step}
                </div>
                <h3 className="text-xl font-inter font-medium text-humanbo-black mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-base font-inter font-light text-humanbo-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-humanbo-subtle">
        <div className="max-w-humanbo mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
            Ready to Browse Smarter?
          </h2>
          <p className="text-lg font-inter font-light text-humanbo-gray mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already browsing more intelligently with Askify.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group bg-humanbo-blue text-humanbo-white px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                Get Started Free
                <i className="bi bi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
              </span>
            </button>
            <Link 
              to="/"
              className="text-humanbo-black font-inter font-light text-base tracking-wide hover:text-humanbo-blue transition-colors duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AskifyPage;
