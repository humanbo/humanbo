import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OwnCentsPage: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    {
      title: "Cash Flow Tracking",
      description: "Real-time visibility into your cash position with automated categorization.",
      icon: "💰",
      value: "$127,450",
      label: "Current Cash"
    },
    {
      title: "Revenue Analytics",
      description: "Track MRR, ARR, and growth trends with predictive forecasting.",
      icon: "📈",
      value: "+23.5%",
      label: "Monthly Growth"
    },
    {
      title: "Runway Calculator",
      description: "Know exactly how long your money will last with scenario planning.",
      icon: "⏱️",
      value: "18 months",
      label: "Current Runway"
    },
    {
      title: "Fundraising Readiness",
      description: "Get investor-ready metrics and benchmarks for your industry.",
      icon: "🎯",
      value: "92%",
      label: "Ready Score"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-humanbo-subtle text-humanbo-gray font-inter font-light text-sm tracking-ultra-wide uppercase rounded-full">
              💎 Financial Intelligence
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-inter font-extralight text-humanbo-black mb-8 leading-ultra-tight tracking-tight">
            Meet
            <br />
            <span className="font-light italic text-humanbo-blue">OwnCents</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter font-light text-humanbo-gray mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
            The all-in-one financial intelligence platform that gives startups complete visibility into their financial health.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group bg-humanbo-black text-humanbo-white px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                Start Free Trial
                <i className="bi bi-graph-up transition-transform duration-300 group-hover:translate-y-[-2px]"></i>
              </span>
            </button>
            <button className="border-2 border-humanbo-black text-humanbo-black px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-humanbo-black hover:text-humanbo-white transition-all duration-300">
              See Demo
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Dashboard Preview */}
      <section className="py-20 px-8 bg-humanbo-cream">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              Your Financial Command Center
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
              Get real-time insights into every aspect of your startup's financial health
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className={`p-6 bg-humanbo-white rounded-lg border transition-all duration-300 cursor-pointer hover:scale-105 ${
                  activeMetric === index ? 'border-humanbo-blue shadow-lg' : 'border-humanbo-divider hover:border-humanbo-blue/50'
                }`}
                onClick={() => setActiveMetric(index)}
              >
                <div className="text-3xl mb-4">{metric.icon}</div>
                <div className="text-2xl font-inter font-medium text-humanbo-black mb-1">
                  {metric.value}
                </div>
                <div className="text-sm font-inter font-light text-humanbo-gray mb-3">
                  {metric.label}
                </div>
                <h3 className="text-lg font-inter font-medium text-humanbo-black mb-2 tracking-tight">
                  {metric.title}
                </h3>
                <p className="text-sm font-inter font-light text-humanbo-gray leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-8 tracking-tight">
                Everything You Need to Scale
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Automated Reporting",
                    description: "No more spreadsheets. Get automated financial reports that update in real-time.",
                    icon: "📊"
                  },
                  {
                    title: "Benchmark Insights",
                    description: "Compare your metrics against industry standards and similar-stage startups.",
                    icon: "🎯"
                  },
                  {
                    title: "Investor-Ready Metrics",
                    description: "Generate professional reports that investors actually want to see.",
                    icon: "📈"
                  },
                  {
                    title: "Scenario Planning",
                    description: "Model different growth scenarios and see how they impact your runway.",
                    icon: "🔮"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4 group hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-inter font-medium text-humanbo-black mb-2 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-base font-inter font-light text-humanbo-gray leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-humanbo-subtle rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-inter font-medium text-humanbo-black mb-4 tracking-tight">
                  Trusted by 500+ Startups
                </h3>
              </div>
              <div className="space-y-4">
                <div className="bg-humanbo-white p-4 rounded-lg">
                  <div className="text-sm font-inter font-light text-humanbo-gray mb-1">Average time saved per week</div>
                  <div className="text-2xl font-inter font-medium text-humanbo-black">12 hours</div>
                </div>
                <div className="bg-humanbo-white p-4 rounded-lg">
                  <div className="text-sm font-inter font-light text-humanbo-gray mb-1">Faster fundraising prep</div>
                  <div className="text-2xl font-inter font-medium text-humanbo-black">75%</div>
                </div>
                <div className="bg-humanbo-white p-4 rounded-lg">
                  <div className="text-sm font-inter font-light text-humanbo-gray mb-1">Customer satisfaction</div>
                  <div className="text-2xl font-inter font-medium text-humanbo-black">4.9/5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-8 bg-humanbo-subtle">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Starter",
                price: "Free",
                description: "Perfect for early-stage startups",
                features: ["Basic cash flow tracking", "Monthly reports", "Up to 3 team members"],
                cta: "Start Free"
              },
              {
                name: "Growth",
                price: "$49/month",
                description: "For scaling startups",
                features: ["Advanced analytics", "Benchmark insights", "Unlimited team members", "API access"],
                cta: "Start Trial",
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For established companies",
                features: ["Custom integrations", "Dedicated support", "Advanced security", "Custom reports"],
                cta: "Contact Sales"
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-humanbo-white p-8 rounded-lg border transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-humanbo-blue shadow-lg' : 'border-humanbo-divider'
              }`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-humanbo-blue text-humanbo-white px-3 py-1 rounded-full text-xs font-inter font-medium tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-inter font-medium text-humanbo-black mb-2 tracking-tight">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-inter font-light text-humanbo-black mb-2">
                    {plan.price}
                  </div>
                  <p className="text-sm font-inter font-light text-humanbo-gray">
                    {plan.description}
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <i className="bi bi-check text-humanbo-blue"></i>
                      <span className="text-sm font-inter font-light text-humanbo-gray">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-3 rounded-full font-inter font-medium text-sm tracking-wide transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-humanbo-blue text-humanbo-white hover:bg-blue-600' 
                    : 'border border-humanbo-black text-humanbo-black hover:bg-humanbo-black hover:text-humanbo-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
            Take Control of Your Finances
          </h2>
          <p className="text-lg font-inter font-light text-humanbo-gray mb-8 max-w-2xl mx-auto">
            Join hundreds of startups who are already making smarter financial decisions with OwnCents.
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

export default OwnCentsPage;
