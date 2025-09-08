import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import ThemeToggle from '../components/ThemeToggle';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  const [logoError, setLogoError] = useState(false);
  const [activeTab, setActiveTab] = useState('founders');

  const LogoComponent = () => {
    if (logoError) {
      return (
        <div className="w-7 h-7 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center text-white font-inter font-medium text-sm transition-all duration-160 hover:scale-110">
          <span className="tracking-tight">H</span>
        </div>
      );
    }

    return (
      <img 
        src="https://cdn.websparks.ai/Project_Images/57_Group2085662504-25fe665c.png" 
        alt="Humanbo"
        className="w-7 h-7 object-contain transition-all duration-160 hover:scale-110"
        loading="eager"
        decoding="async"
        onError={() => setLogoError(true)}
        onLoad={() => setLogoError(false)}
      />
    );
  };

  const capabilities = [
    { name: 'Askify', value: 'Instant, in-context answers', users: 'Anyone', outcome: 'Faster understanding' },
    { name: 'Mocdt', value: 'Calm AI-native work OS', users: 'Teams', outcome: 'Less context switching' },
    { name: 'WebSparks', value: 'Idea→production web apps', users: 'Devs/Founders', outcome: 'Faster shipping' },
    { name: 'OwnCents', value: 'Live finance clarity', users: 'Founders/Finance', outcome: 'Confident decisions' },
    { name: 'Time Wallet', value: 'Budget minutes like money', users: 'Everyone', outcome: 'Intentional screen time' }
  ];

  const personas = {
    founders: {
      pains: ['Context switching kills focus', 'Building takes forever', 'Finance is a black box'],
      outcomes: ['Ship faster with WebSparks', 'Clear runway with OwnCents', 'Stay focused with Mocdt'],
      testimonial: 'Shipped our MVP in 4 days instead of 4 weeks.'
    },
    operations: {
      pains: ['Too many tools to manage', 'Team productivity unclear', 'Process inefficiencies'],
      outcomes: ['Unified workspace with Mocdt', 'Clear team metrics', 'Streamlined workflows'],
      testimonial: 'Reduced context switching by 38% across our team.'
    },
    engineering: {
      pains: ['Slow development cycles', 'Complex deployments', 'Documentation overhead'],
      outcomes: ['Rapid prototyping with WebSparks', 'Instant deployments', 'AI-assisted documentation'],
      testimonial: 'From idea to production in minutes, not days.'
    },
    finance: {
      pains: ['Manual reporting', 'Unclear forecasts', 'Investor prep stress'],
      outcomes: ['Automated insights with OwnCents', 'Accurate forecasting', 'Investor-ready metrics'],
      testimonial: 'Improved forecast accuracy by 21% in first month.'
    },
    students: {
      pains: ['Information overload', 'Poor time management', 'Research inefficiency'],
      outcomes: ['Smart browsing with Askify', 'Intentional screen time', 'Efficient research'],
      testimonial: 'Cut research time in half while understanding more.'
    }
  };

  const openRoles = [
    {
      title: 'Product Designer',
      location: 'Remote',
      description: 'Own core product experiences end-to-end.'
    },
    {
      title: 'Frontend Engineer', 
      location: 'Remote',
      description: 'Ship minimal, fast, accessible UI.'
    },
    {
      title: 'ML/AI Engineer',
      location: 'Remote', 
      description: 'Build human-aware models and tools.'
    },
    {
      title: 'Developer Advocate',
      location: 'Remote',
      description: 'Help builders succeed with Humanbo.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Humanbo — AI that feels human"
        description="A unified, human-centered platform that augments how you browse, work, build, manage finance, and master time."
        keywords="AI platform, human-centered AI, productivity, automation, unified platform"
        url="/"
        type="website"
      />

      {/* Skip to content link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 transition-all duration-160">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2 cursor-pointer group">
              <LogoComponent />
              <span className="text-gray-900 font-inter font-medium text-lg tracking-tight group-hover:text-primary transition-colors duration-160">
                humanbo
              </span>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              {['Solutions', 'Our Product', 'Philosophy', 'Security', 'Careers', 'Press', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-700 font-inter font-light text-sm hover:text-gray-900 transition-colors duration-160 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white rounded-md px-2 py-1"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button className="bg-primary text-white px-5 py-1.5 rounded-full font-inter font-medium text-sm hover:scale-102 transition-all duration-160 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white">
                Experience AI
              </button>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-6xl md:text-7xl font-inter font-extralight text-gray-900 mb-8 leading-tight tracking-tight text-balance">
                AI That Amplifies
                <br />
                <span className="font-light text-primary">Human Brilliance</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={160}>
              <p className="text-xl font-inter font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                A unified, human-centered platform that augments how you browse, work, build, manage finance, and master time.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={240}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-primary text-white px-8 py-3 rounded-full font-inter font-medium text-sm tracking-wide hover:scale-102 transition-all duration-160 interactive-element">
                  Discover the Difference
                </button>
                <a href="#our-product" className="text-gray-600 font-inter font-light text-sm hover:text-gray-900 transition-colors duration-160">
                  Our Product →
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Product */}
        <section id="our-product" className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-inter font-extralight text-gray-900 mb-4 tracking-tight">
                  Our Product
                </h2>
                <p className="text-base font-inter font-light text-gray-600 max-w-2xl mx-auto mb-8">
                  Humanbo is one integrated platform with modular capabilities designed to amplify different aspects of human potential.
                </p>
                
                {/* Capabilities Strip */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                  {capabilities.map((cap, index) => (
                    <span key={index} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600 font-inter font-light text-xs">
                      {cap.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Feature Matrix */}
            <ScrollReveal delay={160}>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-4 font-inter font-medium text-gray-900 text-sm">Capability</th>
                        <th className="text-left p-4 font-inter font-medium text-gray-900 text-sm">Core Value</th>
                        <th className="text-left p-4 font-inter font-medium text-gray-900 text-sm">Typical Users</th>
                        <th className="text-left p-4 font-inter font-medium text-gray-900 text-sm">Key Outcome</th>
                      </tr>
                    </thead>
                    <tbody>
                      {capabilities.map((cap, index) => (
                        <tr key={index} className="border-t border-gray-200">
                          <td className="p-4 font-inter font-medium text-gray-900 text-sm">{cap.name}</td>
                          <td className="p-4 font-inter font-light text-gray-600 text-sm">{cap.value}</td>
                          <td className="p-4 font-inter font-light text-gray-600 text-sm">{cap.users}</td>
                          <td className="p-4 font-inter font-light text-gray-600 text-sm">{cap.outcome}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-primary text-white px-8 py-3 rounded-full font-inter font-medium text-sm tracking-wide hover:scale-102 transition-all duration-160">
                  Explore Our Product
                </button>
                <button className="border border-gray-200 text-gray-900 px-8 py-3 rounded-full font-inter font-medium text-sm tracking-wide hover:bg-gray-50 transition-all duration-160">
                  See Use Cases
                </button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Conviction */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-inter font-extralight text-gray-900 mb-6 tracking-tight">
                  Our Conviction
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                'Intelligence should amplify human creativity, not replace it',
                'Technology must understand context, emotion, and human nuance',
                'AI partnerships require transparency about capabilities and limitations',
                'Continuous evolution means learning alongside human needs and aspirations'
              ].map((principle, index) => (
                <ScrollReveal key={index} delay={index * 80}>
                  <div className="flex items-start gap-3 p-4">
                    <i className="bi bi-check-circle-fill text-accent text-lg mt-0.5 flex-shrink-0"></i>
                    <p className="text-base font-inter font-light text-gray-600 leading-relaxed">
                      {principle}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* The Humanbo Difference */}
            <ScrollReveal>
              <div className="text-center mb-12">
                <h3 className="text-2xl font-inter font-light text-gray-900 mb-8 tracking-tight">
                  The Humanbo Difference
                </h3>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
              {[
                { icon: '🎯', title: 'Purpose-Driven', copy: 'Every feature serves human flourishing' },
                { icon: '🧠', title: 'Contextually Aware', copy: 'Understanding beyond data points' },
                { icon: '⚡', title: 'Seamlessly Integrated', copy: 'Enhancing natural workflows' },
                { icon: '🔒', title: 'Private by Default', copy: 'Your data stays yours' }
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 80}>
                  <div className="group cursor-pointer">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-all duration-160">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <h4 className="text-base font-inter font-medium text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm font-inter font-light text-gray-600">
                      {item.copy}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Founder Quote */}
            <ScrollReveal>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 relative">
                <div className="absolute top-4 left-4 w-1 h-12 bg-primary rounded-full"></div>
                <blockquote className="text-lg font-inter font-light text-gray-900 leading-relaxed text-center mb-6 pl-6">
                  "The most profound technological advances don't replace human intelligence—they amplify human wisdom, creativity, and our capacity for meaningful connection."
                </blockquote>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-inter font-medium text-sm">
                    FS
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-inter font-medium text-gray-900">
                      Fardin Sheikh
                    </p>
                    <p className="text-xs font-inter font-light text-gray-600">
                      Founder & Visionary
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Solutions (Personas) */}
        <section id="solutions" className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-inter font-extralight text-gray-900 mb-6 tracking-tight">
                  Solutions
                </h2>
                <p className="text-base font-inter font-light text-gray-600 max-w-2xl mx-auto">
                  See how Humanbo transforms workflows across different roles and industries
                </p>
              </div>
            </ScrollReveal>

            {/* Tabs */}
            <ScrollReveal delay={160}>
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {Object.keys(personas).map((persona) => (
                  <button
                    key={persona}
                    onClick={() => setActiveTab(persona)}
                    className={`px-4 py-2 rounded-full font-inter font-medium text-sm tracking-wide transition-all duration-160 ${
                      activeTab === persona
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200'
                    }`}
                  >
                    {persona.charAt(0).toUpperCase() + persona.slice(1)}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Tab Content */}
            <ScrollReveal delay={240}>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="grid md:grid-cols-3 gap-8 mb-6">
                  <div>
                    <h4 className="text-sm font-inter font-medium text-gray-900 mb-4 uppercase tracking-wide">
                      Common Pains
                    </h4>
                    <ul className="space-y-2">
                      {personas[activeTab as keyof typeof personas].pains.map((pain, index) => (
                        <li key={index} className="text-sm font-inter font-light text-gray-600 flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          {pain}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-inter font-medium text-gray-900 mb-4 uppercase tracking-wide">
                      Humanbo Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {personas[activeTab as keyof typeof personas].outcomes.map((outcome, index) => (
                        <li key={index} className="text-sm font-inter font-light text-gray-600 flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-inter font-medium text-gray-900 mb-4 uppercase tracking-wide">
                      User Voice
                    </h4>
                    <blockquote className="text-sm font-inter font-light text-gray-600 italic">
                      "{personas[activeTab as keyof typeof personas].testimonial}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-inter font-extralight text-gray-900 mb-6 tracking-tight">
                  Security
                </h2>
                <p className="text-base font-inter font-light text-gray-600 max-w-2xl mx-auto">
                  Enterprise-grade security and compliance built into every layer
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: 'Data Ownership', description: 'Your data remains yours. We never train on customer data.' },
                { title: 'Encryption', description: 'End-to-end encryption in transit and at rest with AES-256.' },
                { title: 'SSO/SAML Ready', description: 'Enterprise authentication with your existing identity provider.' },
                { title: 'Regional Hosting', description: 'Choose your data residency with global infrastructure options.' }
              ].map((policy, index) => (
                <ScrollReveal key={index} delay={index * 80}>
                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                    <h3 className="text-base font-inter font-medium text-gray-900 mb-2">
                      {policy.title}
                    </h3>
                    <p className="text-sm font-inter font-light text-gray-600">
                      {policy.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={320}>
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="text-base font-inter font-medium text-gray-900 mb-4">
                  Compliance Roadmap
                </h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-inter font-medium">
                    GDPR Aligned
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-inter font-medium">
                    SOC 2 (Planned)
                  </span>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-inter font-medium text-sm hover:text-primary/80 transition-colors duration-160">
                  Security Whitepaper (PDF)
                  <i className="bi bi-download text-xs"></i>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Careers */}
        <section id="careers" className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-inter font-extralight text-gray-900 mb-6 tracking-tight">
                  Careers at Humanbo
                </h2>
                <p className="text-base font-inter font-light text-gray-600 max-w-2xl mx-auto">
                  Join us in building AI that amplifies human potential. Shape the future of human-computer collaboration.
                </p>
              </div>
            </ScrollReveal>

            {/* Open Roles */}
            <ScrollReveal delay={160}>
              <div className="mb-16">
                <h3 className="text-xl font-inter font-medium text-gray-900 mb-8 text-center">
                  Open Roles
                </h3>
                <div className="space-y-4">
                  {openRoles.map((role, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-inter font-medium text-gray-900 mb-1">
                          {role.title}
                        </h4>
                        <p className="text-sm font-inter font-light text-gray-600 mb-1">
                          {role.description}
                        </p>
                        <span className="text-xs font-inter font-light text-gray-600">
                          {role.location}
                        </span>
                      </div>
                      <a 
                        href={`mailto:talent@humanbo.com?subject=Application: ${role.title}`}
                        className="bg-primary text-white px-4 py-2 rounded-full font-inter font-medium text-sm hover:scale-102 transition-all duration-160"
                      >
                        Apply
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Culture & Benefits */}
            <ScrollReveal delay={240}>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div>
                  <h4 className="text-base font-inter font-medium text-gray-900 mb-4">
                    Culture
                  </h4>
                  <ul className="space-y-2 text-sm font-inter font-light text-gray-600">
                    <li>• Remote-first</li>
                    <li>• Async-friendly</li>
                    <li>• Quarterly retreats</li>
                    <li>• Equitable pay</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base font-inter font-medium text-gray-900 mb-4">
                    Benefits
                  </h4>
                  <ul className="space-y-2 text-sm font-inter font-light text-gray-600">
                    <li>• Generous PTO</li>
                    <li>• Wellness stipend</li>
                    <li>• Learning budget</li>
                    <li>• Home office kit</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base font-inter font-medium text-gray-900 mb-4">
                    Process
                  </h4>
                  <ul className="space-y-2 text-sm font-inter font-light text-gray-600">
                    <li>1. Intro call</li>
                    <li>2. Deep-dive</li>
                    <li>3. Portfolio review</li>
                    <li>4. Paid trial</li>
                    <li>5. Offer</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Press / Media Kit */}
        <section id="press" className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-inter font-extralight text-gray-900 mb-6 tracking-tight">
                  Press / Media Kit
                </h2>
                <p className="text-base font-inter font-light text-gray-600">
                  Press resources and brand assets
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Downloads */}
              <ScrollReveal delay={160}>
                <div>
                  <h3 className="text-lg font-inter font-medium text-gray-900 mb-6">
                    Downloads
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Wordmark (SVG/PNG)',
                      'Monogram icon (SVG/PNG)', 
                      'Brand guide (PDF)',
                      'Product screenshots (ZIP)',
                      'Founder photo, Fardin Sheikh (PNG)'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200">
                        <span className="text-sm font-inter font-light text-gray-600">{item}</span>
                        <i className="bi bi-download text-primary cursor-pointer hover:scale-110 transition-transform duration-160"></i>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Company Info */}
              <ScrollReveal delay={240}>
                <div>
                  <h3 className="text-lg font-inter font-medium text-gray-900 mb-6">
                    Company Information
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-inter font-medium text-gray-900 mb-2 uppercase tracking-wide">
                      Boilerplate
                    </h4>
                    <p className="text-sm font-inter font-light text-gray-600 leading-relaxed">
                      Humanbo is a unified, human-centered AI platform that augments how people browse, work, build, manage finance, and master time. Founded in 2023, the company is building AI that amplifies human potential rather than replacing it.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-inter font-medium text-gray-900 mb-3 uppercase tracking-wide">
                      Fact Sheet
                    </h4>
                    <div className="space-y-2 text-sm font-inter font-light text-gray-600">
                      <div className="flex justify-between">
                        <span>Founded:</span>
                        <span>2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Team size:</span>
                        <span>15-20</span>
                      </div>
                      <div className="flex justify-between">
                        <span>HQ:</span>
                        <span>Sheridan, WY</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Focus:</span>
                        <span>Human-centered AI</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <a 
                      href="mailto:press@humanbo.com"
                      className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-inter font-medium text-sm hover:scale-102 transition-all duration-160"
                    >
                      Press Contact
                      <i className="bi bi-envelope text-xs"></i>
                    </a>
                  </div>

                  <p className="text-xs font-inter font-light text-gray-600 mt-4 opacity-60">
                    Please don't alter the logo or colors.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-inter font-extralight text-gray-900 mb-6 tracking-tight">
                  Contact
                </h2>
                <p className="text-base font-inter font-light text-gray-600">
                  Ready to experience AI that amplifies human potential?
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-inter font-medium text-gray-900 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 transition-all duration-160"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-inter font-medium text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 transition-all duration-160"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-inter font-medium text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 transition-all duration-160 resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-full font-inter font-medium text-sm hover:scale-102 transition-all duration-160"
                >
                  Send Message
                </button>
              </form>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
