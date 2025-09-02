import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MocdtPage: React.FC = () => {
  const [activeApp, setActiveApp] = useState(0);

  const apps = [
    {
      name: "Email Manager",
      description: "Smart email organization with AI-powered sorting and priority detection.",
      icon: "📧",
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Project Hub",
      description: "Centralized project management with intelligent task automation.",
      icon: "📋",
      color: "bg-green-100 text-green-600"
    },
    {
      name: "File Sync",
      description: "Seamless file sharing between all apps with version control.",
      icon: "📁",
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "Team Chat",
      description: "Integrated communication with context-aware conversations.",
      icon: "💬",
      color: "bg-orange-100 text-orange-600"
    },
    {
      name: "Analytics",
      description: "Real-time insights into your work patterns and productivity.",
      icon: "📊",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-humanbo-subtle text-humanbo-gray font-inter font-light text-sm tracking-ultra-wide uppercase rounded-full">
              🧠 Work OS
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-inter font-extralight text-humanbo-black mb-8 leading-ultra-tight tracking-tight">
            Meet
            <br />
            <span className="font-light italic text-humanbo-blue">Mocdt</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter font-light text-humanbo-gray mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
            The AI-native Work OS that brings all your work tools together in perfect harmony.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group bg-humanbo-black text-humanbo-white px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                Start Free Trial
                <i className="bi bi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
              </span>
            </button>
            <button className="border-2 border-humanbo-black text-humanbo-black px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-humanbo-black hover:text-humanbo-white transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Apps Showcase */}
      <section className="py-20 px-8 bg-humanbo-cream">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              Five Apps, One Ecosystem
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
              Each app is designed to work seamlessly with the others, creating a unified work experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app, index) => (
              <div 
                key={index}
                className={`p-6 bg-humanbo-white rounded-lg border transition-all duration-300 cursor-pointer hover:scale-105 ${
                  activeApp === index ? 'border-humanbo-blue shadow-lg' : 'border-humanbo-divider hover:border-humanbo-blue/50'
                }`}
                onClick={() => setActiveApp(index)}
              >
                <div className={`w-12 h-12 rounded-lg ${app.color} flex items-center justify-center text-2xl mb-4`}>
                  {app.icon}
                </div>
                <h3 className="text-xl font-inter font-medium text-humanbo-black mb-3 tracking-tight">
                  {app.name}
                </h3>
                <p className="text-base font-inter font-light text-humanbo-gray leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-8 tracking-tight">
                Why Choose Mocdt?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Seamless Integration",
                    description: "All apps share data instantly. No more switching between tools or losing context.",
                    icon: "🔗"
                  },
                  {
                    title: "AI-Powered Automation",
                    description: "Smart workflows that learn from your patterns and automate repetitive tasks.",
                    icon: "🤖"
                  },
                  {
                    title: "Unified Experience",
                    description: "One login, one interface, one way of working across all your projects.",
                    icon: "✨"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4 group hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-inter font-medium text-humanbo-black mb-2 tracking-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-base font-inter font-light text-humanbo-gray leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-humanbo-subtle rounded-lg p-8 text-center">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-inter font-medium text-humanbo-black mb-4 tracking-tight">
                Ready to Transform Your Workflow?
              </h3>
              <p className="text-base font-inter font-light text-humanbo-gray mb-6">
                Join thousands of teams already working smarter with Mocdt.
              </p>
              <button className="bg-humanbo-blue text-humanbo-white px-8 py-3 rounded-full font-inter font-medium text-base tracking-wide hover:bg-blue-600 transition-all duration-300">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-humanbo-subtle">
        <div className="max-w-humanbo mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
            Experience the Future of Work
          </h2>
          <p className="text-lg font-inter font-light text-humanbo-gray mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how Mocdt can transform your productivity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group bg-humanbo-blue text-humanbo-white px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                Start Free Trial
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

export default MocdtPage;
