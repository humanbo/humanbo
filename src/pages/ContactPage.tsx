import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import { useToast } from '../hooks/useToast';
import { validateForm } from '../utils/validation';
import { contactAPI, handleApiError } from '../utils/api';
import { trackFormSubmission, trackButtonClick, trackUserEngagement } from '../utils/analytics';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { showSuccess, showError } = useToast();

  const validationRules = {
    name: { required: true, type: 'name', label: 'Full Name' },
    email: { required: true, type: 'email', label: 'Email Address' },
    subject: { required: true, label: 'Subject' },
    message: { required: true, minLength: 10, label: 'Message' }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form start
    trackUserEngagement('form_start', 'contact_form');
    
    // Validate form
    const validation = validateForm(formData, validationRules);
    if (!validation.isValid) {
      setErrors(validation.errors);
      showError('Please fix the errors below');
      trackFormSubmission('contact_form', false);
      return;
    }
    
    setErrors({});
    setIsLoading(true);
    
    try {
      const response = await contactAPI.submit(formData);
      
      if (response.success) {
        setIsSubmitted(true);
        showSuccess('Message sent successfully!', 'We\'ll get back to you within 24 hours.');
        trackFormSubmission('contact_form', true);
        trackUserEngagement('form_complete', 'contact_form');
      } else {
        throw new Error(response.error || 'Failed to send message');
      }
    } catch (error) {
      const errorMessage = handleApiError(error);
      showError('Failed to send message', errorMessage);
      trackFormSubmission('contact_form', false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Track form interaction
    trackUserEngagement('form_interaction', `${name}_field`);
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactMethods = [
    {
      title: "Partnership Inquiries",
      description: "Explore collaboration opportunities and strategic partnerships",
      email: "partnerships@humanbo.com",
      icon: "🤝"
    },
    {
      title: "Technical Support",
      description: "Get expert help with our AI tools and integrations",
      email: "support@humanbo.com",
      icon: "🛠️"
    },
    {
      title: "Media & Press",
      description: "Press inquiries, interviews, and media resources",
      email: "press@humanbo.com",
      icon: "📰"
    },
    {
      title: "General Inquiries",
      description: "Questions about our mission, products, or vision",
      email: "hello@humanbo.com",
      icon: "💬"
    }
  ];

  if (isSubmitted) {
    return (
      <>
        <SEOHead
          title="Thank You - Contact"
          description="Thank you for contacting Humanbo. We've received your message and will get back to you soon."
          url="/contact"
        />
        <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full mx-auto px-8 text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-4xl font-inter font-light text-humanbo-black mb-4 tracking-tight">
              Message Received!
            </h1>
            <p className="text-lg font-inter font-light text-humanbo-gray mb-8">
              Thank you for reaching out. Our team will respond within 24 hours with thoughtful insights tailored to your inquiry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    company: '',
                    subject: '',
                    message: ''
                  });
                  trackButtonClick('send_another_message', 'contact_success');
                }}
                className="bg-humanbo-blue text-humanbo-white px-8 py-3 rounded-full font-inter font-medium text-base tracking-wide hover:bg-blue-600 transition-all duration-300"
              >
                Send Another Message
              </button>
              <Link 
                to="/"
                className="border-2 border-humanbo-black text-humanbo-black px-8 py-3 rounded-full font-inter font-medium text-base tracking-wide hover:bg-humanbo-black hover:text-humanbo-white transition-all duration-300 text-center"
                onClick={() => trackButtonClick('back_to_home', 'contact_success')}
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Connect With Us"
        description="Start a conversation with the Humanbo team. We're here to discuss partnerships, answer questions, and explore how AI can amplify your potential."
        keywords="contact, support, partnerships, collaboration, AI consultation, human-centered AI"
        url="/contact"
      />
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 px-8">
          <div className="max-w-humanbo mx-auto text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-inter font-extralight text-humanbo-black mb-8 leading-ultra-tight tracking-tight">
              Let's Start a
              <br />
              <span className="font-light italic text-humanbo-blue">Conversation</span>
            </h1>
            <p className="text-xl md:text-2xl font-inter font-light text-humanbo-gray mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Whether you're curious about our AI solutions, interested in partnerships, or have a vision to explore—we're here to listen and collaborate.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-8 bg-humanbo-cream">
          <div className="max-w-humanbo mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
                Choose Your Path
              </h2>
              <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
                Connect with the right team member for your specific needs and interests
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-humanbo-white p-6 rounded-lg border border-humanbo-divider hover:border-humanbo-blue/50 transition-all duration-300 hover:scale-105 group">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-inter font-medium text-humanbo-black mb-2 tracking-tight">
                    {method.title}
                  </h3>
                  <p className="text-sm font-inter font-light text-humanbo-gray mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <a 
                    href={`mailto:${method.email}`}
                    className="text-sm font-inter font-medium text-humanbo-blue hover:text-humanbo-black transition-colors duration-300"
                    onClick={() => trackButtonClick('email_contact', method.title.toLowerCase().replace(/\s+/g, '_'))}
                  >
                    {method.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-8 tracking-tight">
                  Share Your Vision
                </h2>
                <p className="text-lg font-inter font-light text-humanbo-gray mb-8 leading-relaxed">
                  Tell us about your challenges, aspirations, or ideas. We believe the best solutions emerge from meaningful conversations.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-humanbo-blue/10 rounded-full flex items-center justify-center">
                      <i className="bi bi-clock text-humanbo-blue"></i>
                    </div>
                    <div>
                      <h3 className="font-inter font-medium text-humanbo-black">Thoughtful Response</h3>
                      <p className="font-inter font-light text-humanbo-gray text-sm">Within 24 hours, always</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-humanbo-blue/10 rounded-full flex items-center justify-center">
                      <i className="bi bi-people text-humanbo-blue"></i>
                    </div>
                    <div>
                      <h3 className="font-inter font-medium text-humanbo-black">Human Connection</h3>
                      <p className="font-inter font-light text-humanbo-gray text-sm">Real people, genuine conversations</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-humanbo-blue/10 rounded-full flex items-center justify-center">
                      <i className="bi bi-shield-check text-humanbo-blue"></i>
                    </div>
                    <div>
                      <h3 className="font-inter font-medium text-humanbo-black">Privacy Respected</h3>
                      <p className="font-inter font-light text-humanbo-gray text-sm">Your information stays secure</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-humanbo-subtle p-8 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-inter font-medium text-humanbo-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg font-inter font-light text-base text-humanbo-black placeholder-humanbo-gray focus:outline-none focus:ring-1 transition-all duration-300 ${
                          errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-humanbo-divider focus:border-humanbo-blue focus:ring-humanbo-blue'
                        }`}
                        placeholder="Your name"
                        disabled={isLoading}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500 font-inter font-light">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-inter font-medium text-humanbo-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg font-inter font-light text-base text-humanbo-black placeholder-humanbo-gray focus:outline-none focus:ring-1 transition-all duration-300 ${
                          errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-humanbo-divider focus:border-humanbo-blue focus:ring-humanbo-blue'
                        }`}
                        placeholder="your@email.com"
                        disabled={isLoading}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 font-inter font-light">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-inter font-medium text-humanbo-black mb-2">
                      Organization (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-humanbo-divider rounded-lg font-inter font-light text-base text-humanbo-black placeholder-humanbo-gray focus:outline-none focus:border-humanbo-blue focus:ring-1 focus:ring-humanbo-blue transition-all duration-300"
                      placeholder="Your organization"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-inter font-medium text-humanbo-black mb-2">
                      What brings you here? *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg font-inter font-light text-base text-humanbo-black focus:outline-none focus:ring-1 transition-all duration-300 ${
                        errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-humanbo-divider focus:border-humanbo-blue focus:ring-humanbo-blue'
                      }`}
                      disabled={isLoading}
                    >
                      <option value="">Choose your interest</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="product">Product Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="press">Media & Press</option>
                      <option value="careers">Career Opportunities</option>
                      <option value="other">Something Else</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-500 font-inter font-light">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-inter font-medium text-humanbo-black mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg font-inter font-light text-base text-humanbo-black placeholder-humanbo-gray focus:outline-none focus:ring-1 transition-all duration-300 resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-humanbo-divider focus:border-humanbo-blue focus:ring-humanbo-blue'
                      }`}
                      placeholder="Share your thoughts, questions, or ideas..."
                      disabled={isLoading}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 font-inter font-light">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-3 rounded-full font-inter font-medium text-base tracking-wide transition-all duration-300 transform hover:scale-105 ${
                      isLoading
                        ? 'bg-humanbo-gray text-humanbo-white cursor-not-allowed'
                        : 'bg-humanbo-blue text-humanbo-white hover:bg-blue-600'
                    }`}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <LoadingSpinner size="sm" color="text-white" />
                        Sending Your Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Start the Conversation
                        <i className="bi bi-send"></i>
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
