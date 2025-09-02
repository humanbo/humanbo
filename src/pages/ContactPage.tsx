import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import LoadingSpinner from '../components/LoadingSpinner';
import { useToast } from '../hooks/useToast';
import { validateForm } from '../utils/validation';
import { contactAPI, handleApiError } from '../utils/api';
import { trackFormSubmission, trackButtonClick } from '../utils/analytics';

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
    
    // Validate form
    const validation = validateForm(formData, validationRules);
    if (!validation.isValid) {
      setErrors(validation.errors);
      showError('Please fix the errors below');
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
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactMethods = [
    {
      title: "General Inquiries",
      description: "Questions about our products or services",
      email: "hello@humanbo.com",
      icon: "💬"
    },
    {
      title: "Technical Support",
      description: "Need help with our AI tools?",
      email: "support@humanbo.com",
      icon: "🛠️"
    },
    {
      title: "Business Partnerships",
      description: "Interested in partnering with us?",
      email: "partnerships@humanbo.com",
      icon: "🤝"
    },
    {
      title: "Press & Media",
      description: "Media inquiries and press requests",
      email: "press@humanbo.com",
      icon: "📰"
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
              Thank You!
            </h1>
            <p className="text-lg font-inter font-light text-humanbo-gray mb-8">
              We've received your message and will get back to you within 24 hours.
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
                Back to Home
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
        title="Contact Us"
        description="Get in touch with the Humanbo team. We're here to help with questions about our AI solutions, partnerships, and support."
        keywords="contact, support, help, customer service, business inquiries, partnerships"
        url="/contact"
      />
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 px-8">
          <div className="max-w-humanbo mx-auto text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-inter font-extralight text-humanbo-black mb-8 leading-ultra-tight tracking-tight">
              Get In
              <br />
              <span className="font-light italic text-humanbo-blue">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl font-inter font-light text-humanbo-gray mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Have questions about our AI solutions? Want to explore partnerships? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-8 bg-humanbo-cream">
          <div className="max-w-humanbo mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-6 tracking-tight">
                How Can We Help?
              </h2>
              <p className="text-lg font-inter font-light text-humanbo-gray max-w-2xl mx-auto">
                Choose the best way to reach us based on your needs
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
                  Send Us a Message
                </h2>
                <p className="text-lg font-inter font-light text-humanbo-gray mb-8 leading-relaxed">
                  Fill out the form and we'll get back to you as soon as possible. We typically respond within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-humanbo-blue/10 rounded-full flex items-center justify-center">
                      <i className="bi bi-geo-alt text-humanbo-blue"></i>
                    </div>
                    <div>
                      <h3 className="font-inter font-medium text-humanbo-black">Office</h3>
                      <p className="font-inter font-light text-humanbo-gray text-sm">San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-humanbo-blue/10 rounded-full flex items-center justify-center">
                      <i className="bi bi-clock text-humanbo-blue"></i>
                    </div>
                    <div>
                      <h3 className="font-inter font-medium text-humanbo-black">Response Time</h3>
                      <p className="font-inter font-light text-humanbo-gray text-sm">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-humanbo-blue/10 rounded-full flex items-center justify-center">
                      <i className="bi bi-shield-check text-humanbo-blue"></i>
                    </div>
                    <div>
                      <h3 className="font-inter font-medium text-humanbo-black">Privacy</h3>
                      <p className="font-inter font-light text-humanbo-gray text-sm">Your data is secure with us</p>
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
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
                        disabled={isLoading}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 font-inter font-light">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-inter font-medium text-humanbo-black mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-humanbo-divider rounded-lg font-inter font-light text-base text-humanbo-black placeholder-humanbo-gray focus:outline-none focus:border-humanbo-blue focus:ring-1 focus:ring-humanbo-blue transition-all duration-300"
                      placeholder="Your Company"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-inter font-medium text-humanbo-black mb-2">
                      Subject *
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
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="press">Press & Media</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-500 font-inter font-light">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-inter font-medium text-humanbo-black mb-2">
                      Message *
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
                      placeholder="Tell us how we can help you..."
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
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
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
