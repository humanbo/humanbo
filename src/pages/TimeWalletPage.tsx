import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TimeWalletPage: React.FC = () => {
  const [timeBalance, setTimeBalance] = useState(120); // minutes
  const [isDemo, setIsDemo] = useState(false);

  const apps = [
    { name: "Instagram", icon: "📷", timeSpent: 45, limit: 30, color: "bg-pink-100 text-pink-600" },
    { name: "TikTok", icon: "🎵", timeSpent: 25, limit: 20, color: "bg-purple-100 text-purple-600" },
    { name: "Twitter", icon: "🐦", timeSpent: 15, limit: 15, color: "bg-blue-100 text-blue-600" },
    { name: "YouTube", icon: "📺", timeSpent: 35, limit: 60, color: "bg-red-100 text-red-600" }
  ];

  const startDemo = () => {
    setIsDemo(true);
    const interval = window.setInterval(() => {
      setTimeBalance(prev => {
        if (prev <= 0) {
          window.clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 100);

    window.setTimeout(() => {
      window.clearInterval(interval);
      setIsDemo(false);
      setTimeBalance(120);
    }, 10000);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-humanbo-subtle text-humanbo-gray font-inter font-light text-sm tracking-ultra-wide uppercase rounded-full">
              ⚡ Digital Wellness
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-inter font-extralight text-humanbo-black mb-8 leading-ultra-tight tracking-tight">
            Meet
            <br />
            <span className="font-light italic text-humanbo-blue">Time Wallet</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter font-light text-humanbo-gray mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Your digital wallet for time. Load minutes, set limits, and take control of your screen time with a gamified approach to digital wellness.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group bg-humanbo-black text-humanbo-white px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                Download App
                <i className="bi bi-download transition-transform duration-300 group-hover:translate-y-1"></i>
              </span>
            </button>
            <button 
              onClick={startDemo}
              className="border-2 border-humanbo-black text-humanbo-black px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-humanbo-black hover:text-humanbo-white transition-all duration-300"
            >
              Try Demo
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-20 px-8 bg-humanbo-cream">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              See It In Action
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
              Experience how Time Wallet transforms your relationship with digital apps
            </p>
          </div>
          
          <div className="max-w-md mx-auto bg-humanbo-white rounded-2xl p-6 shadow-lg border border-humanbo-divider">
            {/* Wallet Balance */}
            <div className="text-center mb-8">
              <div className="text-sm font-inter font-medium text-humanbo-gray mb-2 tracking-wide uppercase">
                Time Balance
              </div>
              <div className={`text-4xl font-inter font-light mb-2 transition-colors duration-300 ${
                timeBalance < 30 ? 'text-red-500' : timeBalance < 60 ? 'text-orange-500' : 'text-humanbo-black'
              }`}>
                {timeBalance} min
              </div>
              <div className={`w-full h-2 bg-gray-200 rounded-full overflow-hidden ${isDemo ? 'animate-pulse' : ''}`}>
                <div 
                  className={`h-full transition-all duration-300 ${
                    timeBalance < 30 ? 'bg-red-500' : timeBalance < 60 ? 'bg-orange-500' : 'bg-humanbo-blue'
                  }`}
                  style={{ width: `${(timeBalance / 120) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* App Usage */}
            <div className="space-y-4">
              {apps.map((app, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-humanbo-subtle rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${app.color} flex items-center justify-center text-lg`}>
                      {app.icon}
                    </div>
                    <div>
                      <div className="font-inter font-medium text-humanbo-black text-sm">
                        {app.name}
                      </div>
                      <div className="font-inter font-light text-humanbo-gray text-xs">
                        {app.timeSpent}/{app.limit} min
                      </div>
                    </div>
                  </div>
                  <div className={`text-xs font-inter font-medium px-2 py-1 rounded-full ${
                    app.timeSpent > app.limit 
                      ? 'bg-red-100 text-red-600' 
                      : app.timeSpent === app.limit 
                        ? 'bg-orange-100 text-orange-600'
                        : 'bg-green-100 text-green-600'
                  }`}>
                    {app.timeSpent > app.limit ? 'Over' : app.timeSpent === app.limit ? 'Limit' : 'Good'}
                  </div>
                </div>
              ))}
            </div>

            {/* Demo Controls */}
            <div className="mt-6 text-center">
              {!isDemo ? (
                <button 
                  onClick={startDemo}
                  className="bg-humanbo-blue text-humanbo-white px-6 py-2 rounded-full font-inter font-medium text-sm tracking-wide hover:bg-blue-600 transition-all duration-300"
                >
                  Start Demo
                </button>
              ) : (
                <div className="text-sm font-inter font-light text-humanbo-gray">
                  ⏱️ Demo running... Watch your time balance decrease!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              Simple as 1-2-3
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Load Your Wallet",
                description: "Add time to your wallet just like adding money. Set your daily or weekly budget.",
                icon: "💰"
              },
              {
                step: "02", 
                title: "Set App Limits",
                description: "Choose how much time you want to spend on each app. Time Wallet enforces the limits.",
                icon: "⏰"
              },
              {
                step: "03",
                title: "Live Intentionally",
                description: "When you hit your limit, that's it! Your time balance decreases, just like spending money.",
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

      {/* Benefits */}
      <section className="py-20 px-8 bg-humanbo-subtle">
        <div className="max-w-humanbo mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-8 tracking-tight">
                Why Time Wallet Works
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Gamified Experience",
                    description: "Turn digital wellness into a game. See your progress, earn achievements, and stay motivated.",
                    icon: "🎮"
                  },
                  {
                    title: "Real Consequences",
                    description: "Overspending time has real impact on your wallet balance, just like overspending money.",
                    icon: "⚖️"
                  },
                  {
                    title: "Mindful Usage",
                    description: "Become aware of how you spend your time and make intentional choices about your digital life.",
                    icon: "🧘"
                  },
                  {
                    title: "Flexible Control",
                    description: "Adjust your limits anytime. Add more time when needed, or challenge yourself with less.",
                    icon: "🎛️"
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
            <div className="bg-humanbo-white rounded-lg p-8 text-center">
              <div className="text-6xl mb-6">📱</div>
              <h3 className="text-2xl font-inter font-medium text-humanbo-black mb-4 tracking-tight">
                Take Back Control
              </h3>
              <p className="text-base font-inter font-light text-humanbo-gray mb-6">
                Join thousands who have transformed their digital habits with Time Wallet.
              </p>
              <div className="space-y-4">
                <div className="bg-humanbo-subtle p-4 rounded-lg">
                  <div className="text-2xl font-inter font-medium text-humanbo-black">2.5 hours</div>
                  <div className="text-sm font-inter font-light text-humanbo-gray">Average daily time saved</div>
                </div>
                <div className="bg-humanbo-subtle p-4 rounded-lg">
                  <div className="text-2xl font-inter font-medium text-humanbo-black">87%</div>
                  <div className="text-sm font-inter font-light text-humanbo-gray">Users report better focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
            Start Living More Intentionally
          </h2>
          <p className="text-lg font-inter font-light text-humanbo-gray mb-8 max-w-2xl mx-auto">
            Download Time Wallet today and transform your relationship with technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group bg-humanbo-blue text-humanbo-white px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                Download Free
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

export default TimeWalletPage;
