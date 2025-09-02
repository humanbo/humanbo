import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    {
      title: "Getting Started",
      description: "New to Humanbo? Start here for setup guides and basics.",
      icon: "🚀",
      articles: 12,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Account & Billing",
      description: "Manage your account, subscriptions, and billing information.",
      icon: "💳",
      articles: 8,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "AI Features",
      description: "Learn how to use our AI tools and features effectively.",
      icon: "🧠",
      articles: 15,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Troubleshooting",
      description: "Common issues and how to resolve them quickly.",
      icon: "🔧",
      articles: 10,
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "API Documentation",
      description: "Technical documentation for developers and integrations.",
      icon: "⚡",
      articles: 20,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "Privacy & Security",
      description: "Information about data protection and security measures.",
      icon: "🔒",
      articles: 6,
      color: "bg-red-100 text-red-600"
    }
  ];

  const popularArticles = [
    {
      title: "How to get started with Humanbo AI",
      category: "Getting Started",
      readTime: "3 min read",
      views: "2.1k views"
    },
    {
      title: "Understanding AI interaction limits",
      category: "Account & Billing",
      readTime: "2 min read",
      views: "1.8k views"
    },
    {
      title: "Customizing AI personality settings",
      category: "AI Features",
      readTime: "5 min read",
      views: "1.5k views"
    },
    {
      title: "Troubleshooting connection issues",
      category: "Troubleshooting",
      readTime: "4 min read",
      views: "1.2k views"
    },
    {
      title: "API rate limits and best practices",
      category: "API Documentation",
      readTime: "7 min read",
      views: "980 views"
    }
  ];

  const contactOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Available 24/7",
      icon: "💬",
      action: "Start Chat",
      color: "bg-humanbo-blue text-humanbo-white"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      availability: "Response within 24 hours",
      icon: "📧",
      action: "Send Email",
      color: "border-2 border-humanbo-black text-humanbo-black hover:bg-humanbo-black hover:text-humanbo-white"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and share knowledge",
      availability: "Active community",
      icon: "👥",
      action: "Join Forum",
      color: "border-2 border-humanbo-black text-humanbo-black hover:bg-humanbo-black hover:text-humanbo-white"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-inter font-extralight text-humanbo-black mb-8 leading-ultra-tight tracking-tight">
            How Can We
            <br />
            <span className="font-light italic text-humanbo-blue">Help?</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter font-light text-humanbo-gray mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Find answers, get support, and make the most of your Humanbo experience.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles, guides, or FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 border border-humanbo-divider rounded-full font-inter font-light text-base text-humanbo-black placeholder-humanbo-gray focus:outline-none focus:border-humanbo-blue focus:ring-1 focus:ring-humanbo-blue transition-all duration-300"
              />
              <i className="bi bi-search absolute left-4 top-1/2 transform -translate-y-1/2 text-humanbo-gray"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 px-8 bg-humanbo-cream">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              Browse by Category
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
              Find the help you need organized by topic
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportCategories.map((category, index) => (
              <div key={index} className="bg-humanbo-white p-6 rounded-lg border border-humanbo-divider hover:border-humanbo-blue/50 transition-all duration-300 hover:scale-105 group cursor-pointer">
                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-inter font-medium text-humanbo-black mb-2 tracking-tight">
                  {category.title}
                </h3>
                <p className="text-base font-inter font-light text-humanbo-gray mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-inter font-light text-humanbo-blue">
                    {category.articles} articles
                  </span>
                  <i className="bi bi-arrow-right text-humanbo-gray group-hover:text-humanbo-blue group-hover:translate-x-1 transition-all duration-300"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              Popular Articles
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
              The most helpful articles from our knowledge base
            </p>
          </div>
          
          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <div key={index} className="bg-humanbo-white p-6 rounded-lg border border-humanbo-divider hover:border-humanbo-blue/50 transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-inter font-medium text-humanbo-black mb-2 tracking-tight group-hover:text-humanbo-blue transition-colors duration-300">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm font-inter font-light text-humanbo-gray">
                      <span className="px-2 py-1 bg-humanbo-subtle text-humanbo-blue rounded text-xs">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.views}</span>
                    </div>
                  </div>
                  <i className="bi bi-arrow-right text-humanbo-gray group-hover:text-humanbo-blue group-hover:translate-x-1 transition-all duration-300"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-8 bg-humanbo-subtle">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              Still Need Help?
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
              Our support team is here to help you succeed with Humanbo
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <div key={index} className="bg-humanbo-white p-8 rounded-lg border border-humanbo-divider text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-inter font-medium text-humanbo-black mb-2 tracking-tight">
                  {option.title}
                </h3>
                <p className="text-base font-inter font-light text-humanbo-gray mb-4 leading-relaxed">
                  {option.description}
                </p>
                <p className="text-sm font-inter font-light text-humanbo-blue mb-6">
                  {option.availability}
                </p>
                <button className={`w-full py-3 rounded-full font-inter font-medium text-base tracking-wide transition-all duration-300 transform hover:scale-105 ${option.color}`}>
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status & Updates */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              System Status
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
              Real-time status of our services and recent updates
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-humanbo-white p-6 rounded-lg border border-humanbo-divider">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-inter font-medium text-humanbo-black tracking-tight">
                  All Systems Operational
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  { service: 'AI Chat Interface', status: 'Operational' },
                  { service: 'API Services', status: 'Operational' },
                  { service: 'Mobile Apps', status: 'Operational' },
                  { service: 'Web Dashboard', status: 'Operational' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="font-inter font-light text-humanbo-gray">{item.service}</span>
                    <span className="font-inter font-medium text-green-600">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-humanbo-white p-6 rounded-lg border border-humanbo-divider">
              <h3 className="text-lg font-inter font-medium text-humanbo-black mb-4 tracking-tight">
                Recent Updates
              </h3>
              <div className="space-y-4">
                {[
                  { date: 'Mar 15, 2024', update: 'Improved AI response accuracy by 15%' },
                  { date: 'Mar 10, 2024', update: 'Added new customization options' },
                  { date: 'Mar 5, 2024', update: 'Enhanced mobile app performance' }
                ].map((item, index) => (
                  <div key={index} className="border-l-2 border-humanbo-blue pl-4">
                    <div className="text-xs font-inter font-light text-humanbo-gray mb-1">
                      {item.date}
                    </div>
                    <div className="text-sm font-inter font-light text-humanbo-black">
                      {item.update}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
