import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState('growth');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for individuals exploring AI',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        '1,000 AI interactions per month',
        'Basic chat interface',
        'Email support',
        'Mobile app access',
        'Standard response time'
      ],
      limitations: [
        'Limited to 3 projects',
        'Basic analytics only'
      ],
      cta: 'Start Free',
      popular: false,
      color: 'border-humanbo-divider'
    },
    {
      id: 'growth',
      name: 'Growth',
      description: 'Ideal for professionals and small teams',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        '10,000 AI interactions per month',
        'Advanced chat interface',
        'Priority email support',
        'Mobile & web app access',
        'Fast response time',
        'Custom AI personalities',
        'Advanced analytics',
        'API access',
        'Team collaboration tools'
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: true,
      color: 'border-humanbo-blue'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large teams and organizations',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Unlimited AI interactions',
        'White-label solutions',
        'Dedicated account manager',
        'Phone & email support',
        'Instant response time',
        'Custom AI training',
        'Advanced security features',
        'Full API access',
        'Custom integrations',
        'SLA guarantee',
        'On-premise deployment'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      color: 'border-humanbo-divider'
    }
  ];

  const faqs = [
    {
      question: "What counts as an AI interaction?",
      answer: "An AI interaction is any message or query sent to our AI systems. This includes chat messages, API calls, and automated responses."
    },
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! Our Growth and Enterprise plans come with a 14-day free trial. No credit card required to start."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise customers. All payments are processed securely."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll provide a full refund."
    },
    {
      question: "Can I get a custom plan?",
      answer: "Absolutely! For unique requirements or larger organizations, we can create custom plans. Contact our sales team to discuss your needs."
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0) return 'Free';
    const price = billingCycle === 'monthly' ? plan.monthlyPrice : Math.floor(plan.yearlyPrice / 12);
    return `$${price}`;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0) return null;
    const monthlyCost = plan.monthlyPrice * 12;
    const savings = monthlyCost - plan.yearlyPrice;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return percentage > 0 ? `Save ${percentage}%` : null;
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-humanbo mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-inter font-extralight text-humanbo-black mb-8 leading-ultra-tight tracking-tight">
            Simple
            <br />
            <span className="font-light italic text-humanbo-blue">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter font-light text-humanbo-gray mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Choose the perfect plan for your AI journey. Start free, scale as you grow.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`font-inter font-light text-base ${billingCycle === 'monthly' ? 'text-humanbo-black' : 'text-humanbo-gray'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                billingCycle === 'yearly' ? 'bg-humanbo-blue' : 'bg-humanbo-divider'
              }`}
            >
              <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
              }`}></div>
            </button>
            <span className={`font-inter font-light text-base ${billingCycle === 'yearly' ? 'text-humanbo-black' : 'text-humanbo-gray'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="px-2 py-1 bg-humanbo-blue text-humanbo-white font-inter font-light text-xs tracking-wide uppercase rounded-full">
                Save up to 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`bg-humanbo-white p-8 rounded-lg border-2 transition-all duration-300 hover:scale-105 relative ${
                  plan.popular ? 'border-humanbo-blue shadow-lg' : plan.color
                } ${selectedPlan === plan.id ? 'ring-2 ring-humanbo-blue ring-opacity-50' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-humanbo-blue text-humanbo-white px-4 py-2 rounded-full font-inter font-medium text-sm tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-inter font-medium text-humanbo-black mb-2 tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-base font-inter font-light text-humanbo-gray mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-4xl font-inter font-light text-humanbo-black">
                      {getPrice(plan)}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-base font-inter font-light text-humanbo-gray">
                        /{billingCycle === 'monthly' ? 'month' : 'month'}
                      </span>
                    )}
                  </div>
                  {billingCycle === 'yearly' && getSavings(plan) && (
                    <div className="text-sm font-inter font-medium text-humanbo-blue">
                      {getSavings(plan)}
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <i className="bi bi-check text-humanbo-blue text-lg"></i>
                      <span className="text-sm font-inter font-light text-humanbo-gray">
                        {feature}
                      </span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <i className="bi bi-x text-humanbo-gray text-lg"></i>
                      <span className="text-sm font-inter font-light text-humanbo-light-gray">
                        {limitation}
                      </span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-full font-inter font-medium text-base tracking-wide transition-all duration-300 transform hover:scale-105 ${
                  plan.popular 
                    ? 'bg-humanbo-blue text-humanbo-white hover:bg-blue-600' 
                    : 'border-2 border-humanbo-black text-humanbo-black hover:bg-humanbo-black hover:text-humanbo-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-8 bg-humanbo-cream">
        <div className="max-w-humanbo mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              Compare Features
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
              See what's included in each plan to find the perfect fit for your needs
            </p>
          </div>
          
          <div className="bg-humanbo-white rounded-lg border border-humanbo-divider overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-humanbo-subtle">
                  <tr>
                    <th className="text-left p-6 font-inter font-medium text-humanbo-black">Features</th>
                    <th className="text-center p-6 font-inter font-medium text-humanbo-black">Starter</th>
                    <th className="text-center p-6 font-inter font-medium text-humanbo-black">Growth</th>
                    <th className="text-center p-6 font-inter font-medium text-humanbo-black">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['AI Interactions', '1,000/month', '10,000/month', 'Unlimited'],
                    ['Response Time', 'Standard', 'Fast', 'Instant'],
                    ['Support', 'Email', 'Priority Email', 'Phone & Email'],
                    ['API Access', '❌', '✅', '✅'],
                    ['Custom Training', '❌', '❌', '✅'],
                    ['White-label', '❌', '❌', '✅'],
                    ['SLA', '❌', '❌', '✅']
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-humanbo-divider">
                      <td className="p-6 font-inter font-light text-humanbo-black">{row[0]}</td>
                      <td className="p-6 text-center font-inter font-light text-humanbo-gray">{row[1]}</td>
                      <td className="p-6 text-center font-inter font-light text-humanbo-gray">{row[2]}</td>
                      <td className="p-6 text-center font-inter font-light text-humanbo-gray">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
              Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-humanbo-white p-6 rounded-lg border border-humanbo-divider hover:border-humanbo-blue/50 transition-all duration-300">
                <h3 className="text-lg font-inter font-medium text-humanbo-black mb-3 tracking-tight">
                  {faq.question}
                </h3>
                <p className="text-base font-inter font-light text-humanbo-gray leading-relaxed">
                  {faq.answer}
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
            Ready to Get Started?
          </h2>
          <p className="text-lg font-inter font-light text-humanbo-gray mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already experiencing the future of human-centered AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/signup"
              className="group bg-humanbo-blue text-humanbo-white px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Start Free Trial
                <i className="bi bi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
              </span>
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-humanbo-black text-humanbo-black px-10 py-4 rounded-full font-inter font-medium text-base tracking-wide hover:bg-humanbo-black hover:text-humanbo-white transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
