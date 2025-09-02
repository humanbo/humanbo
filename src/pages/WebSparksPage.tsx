import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WebSparksPage: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "AI Code Generation",
      description: "Generate production-ready code from simple descriptions. No coding experience required.",
      icon: "🤖",
      demo: "Just describe what you want: 'Create a modern landing page for a coffee shop'"
    },
    {
      title: "Smart Design System",
      description: "Automatically creates consistent, beautiful designs that follow modern UI/UX principles.",
      icon: "🎨",
      demo: "AI selects perfect colors, typography, and layouts that work together harmoniously"
    },
    {
      title: "Instant Deployment",
      description: "Deploy your applications to the web with a single click. No server setup needed.",
      icon: "🚀",
      demo: "From idea to live website in minutes, not days or weeks"
    },
    {
      title: "Responsive by Default",
      description: "Every application is automatically optimized for mobile, tablet, and desktop.",
      icon: "📱",
      demo: "Your sites look perfect on every device without extra work"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-humanbo-subtle text-humanbo-gray font-inter font-light text-sm tracking-ultra-wide uppercase rounded-full">
              🎨 AI Development
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-inter font-extralight text-humanbo-black mb-8 leading-ultra-tight tracking-tight">
            Meet
            <br />
            <span className="font-light italic text-humanbo-blue">WebSparks</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter font-light text-humanbo-gray mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
            The AI software engineer that transforms your ideas into beautiful, production-ready web applications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group bg-humanbo-black text-humanbo-white px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                Start Building
                <i className="bi bi-code-slash transition-transform duration-300 group-hover:rotate-12"></i>
              </span>
            </button>
            <button className="border-2 border-humanbo-black text-humanbo-black px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-humanbo-black hover:text-humanbo-white transition-all duration-300">
              See Examples
            </button>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 px-8 bg-humanbo-cream">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              Powerful AI Features
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
              Everything you need to build professional web applications, powered by advanced AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-8 bg-humanbo-white rounded-lg border transition-all duration-300 cursor-pointer hover:scale-105 ${
                  activeFeature === index ? 'border-humanbo-blue shadow-lg' : 'border-humanbo-divider hover:border-humanbo-blue/50'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-inter font-medium text-humanbo-black mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-base font-inter font-light text-humanbo-gray leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="text-sm font-inter font-light text-humanbo-blue italic">
                  {feature.demo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              From Idea to Reality
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
              See how WebSparks transforms your vision into a live web application
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Describe Your Idea",
                description: "Tell WebSparks what you want to build in plain English.",
                icon: "💭"
              },
              {
                step: "02", 
                title: "AI Generates Code",
                description: "Watch as AI creates beautiful, functional code in real-time.",
                icon: "⚡"
              },
              {
                step: "03",
                title: "Review & Refine",
                description: "Make adjustments with simple commands. AI adapts instantly.",
                icon: "🔧"
              },
              {
                step: "04",
                title: "Deploy & Share",
                description: "Launch your application to the web with one click.",
                icon: "🌐"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="text-sm font-inter font-medium text-humanbo-blue mb-2 tracking-ultra-wide uppercase">
                  Step {step.step}
                </div>
                <h3 className="text-lg font-inter font-medium text-humanbo-black mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm font-inter font-light text-humanbo-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-8 bg-humanbo-subtle">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              Perfect For Everyone
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Entrepreneurs",
                description: "Launch your startup's website or MVP without hiring developers.",
                icon: "🚀",
                examples: ["Landing pages", "E-commerce stores", "Portfolio sites"]
              },
              {
                title: "Developers",
                description: "Accelerate your workflow and focus on complex problems.",
                icon: "👨‍💻",
                examples: ["Rapid prototyping", "Boilerplate generation", "UI components"]
              },
              {
                title: "Designers",
                description: "Bring your designs to life without writing code.",
                icon: "🎨",
                examples: ["Interactive prototypes", "Design systems", "Client presentations"]
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-humanbo-white p-8 rounded-lg border border-humanbo-divider hover:border-humanbo-blue/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-inter font-medium text-humanbo-black mb-3 tracking-tight">
                  {useCase.title}
                </h3>
                <p className="text-base font-inter font-light text-humanbo-gray leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <div className="space-y-1">
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="text-sm font-inter font-light text-humanbo-blue">
                      • {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg font-inter font-light text-humanbo-gray mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already building faster with WebSparks AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group bg-humanbo-blue text-humanbo-white px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                Start Building Free
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

export default WebSparksPage;
