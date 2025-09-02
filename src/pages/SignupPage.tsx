import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate signup process
    window.setTimeout(() => {
      setIsLoading(false);
      // Handle signup logic here
      console.log('Signup attempt:', formData);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }
  };

  const getStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-red-500';
    if (passwordStrength <= 3) return 'bg-orange-500';
    if (passwordStrength <= 4) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStrengthText = () => {
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength <= 3) return 'Fair';
    if (passwordStrength <= 4) return 'Good';
    return 'Strong';
  };

  return (
    <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-8">
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center gap-3 mb-8 hover:scale-105 transition-transform duration-300">
            <img 
              src="https://cdn.websparks.ai/Project_Images/57_Group2085662504-25fe665c.png" 
              alt="Humanbo Logo"
              className="h-8 w-8"
              crossOrigin="anonymous"
            />
            <span className="text-humanbo-black font-inter font-medium text-xl tracking-premium">
              Humanbo
            </span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-inter font-light text-humanbo-black mb-4 tracking-tight">
            Join Humanbo
          </h1>
          <p className="text-lg font-inter font-light text-humanbo-gray">
            Create your account and start your AI journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-inter font-medium text-humanbo-black mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-humanbo-divider rounded-lg font-inter font-light text-base text-humanbo-black placeholder-humanbo-gray focus:outline-none focus:border-humanbo-blue focus:ring-1 focus:ring-humanbo-blue transition-all duration-300"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-inter font-medium text-humanbo-black mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-humanbo-divider rounded-lg font-inter font-light text-base text-humanbo-black placeholder-humanbo-gray focus:outline-none focus:border-humanbo-blue focus:ring-1 focus:ring-humanbo-blue transition-all duration-300"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-inter font-medium text-humanbo-black mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-humanbo-divider rounded-lg font-inter font-light text-base text-humanbo-black placeholder-humanbo-gray focus:outline-none focus:border-humanbo-blue focus:ring-1 focus:ring-humanbo-blue transition-all duration-300"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-inter font-medium text-humanbo-black mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-humanbo-divider rounded-lg font-inter font-light text-base text-humanbo-black placeholder-humanbo-gray focus:outline-none focus:border-humanbo-blue focus:ring-1 focus:ring-humanbo-blue transition-all duration-300 pr-12"
                placeholder="Create a strong password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-humanbo-gray hover:text-humanbo-black transition-colors duration-200"
              >
                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </button>
            </div>
            {formData.password && (
              <div className="mt-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-300 ${getStrengthColor()}`}
                      style={{ width: `${(passwordStrength / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-inter font-light text-humanbo-gray">
                    {getStrengthText()}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-inter font-medium text-humanbo-black mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-humanbo-divider rounded-lg font-inter font-light text-base text-humanbo-black placeholder-humanbo-gray focus:outline-none focus:border-humanbo-blue focus:ring-1 focus:ring-humanbo-blue transition-all duration-300 pr-12"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-humanbo-gray hover:text-humanbo-black transition-colors duration-200"
              >
                <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </button>
            </div>
            {formData.confirmPassword && formData.password !== formData.confirmPassword && (
              <p className="mt-1 text-xs text-red-500 font-inter font-light">
                Passwords do not match
              </p>
            )}
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              required
              className="w-4 h-4 text-humanbo-blue border-humanbo-divider rounded focus:ring-humanbo-blue focus:ring-2 mt-1"
            />
            <label htmlFor="terms" className="ml-2 text-sm font-inter font-light text-humanbo-gray">
              I agree to the{' '}
              <a href="#" className="text-humanbo-blue hover:text-humanbo-black transition-colors duration-300">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-humanbo-blue hover:text-humanbo-black transition-colors duration-300">
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading || formData.password !== formData.confirmPassword}
            className={`w-full py-3 rounded-full font-inter font-medium text-base tracking-wide transition-all duration-300 transform hover:scale-105 ${
              isLoading || formData.password !== formData.confirmPassword
                ? 'bg-humanbo-gray text-humanbo-white cursor-not-allowed'
                : 'bg-humanbo-black text-humanbo-white hover:bg-gray-800'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <i className="bi bi-arrow-clockwise animate-spin"></i>
                Creating Account...
              </span>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm font-inter font-light text-humanbo-gray">
            Already have an account?{' '}
            <Link 
              to="/login" 
              className="text-humanbo-blue hover:text-humanbo-black transition-colors duration-300 font-medium"
            >
              Sign in here
            </Link>
          </p>
        </div>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-humanbo-divider"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-humanbo-off-white text-humanbo-gray font-inter font-light">
                Or sign up with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="w-full inline-flex justify-center py-3 px-4 border border-humanbo-divider rounded-lg bg-humanbo-white text-sm font-inter font-medium text-humanbo-gray hover:bg-humanbo-subtle hover:border-humanbo-blue/50 transition-all duration-300">
              <i className="bi bi-google mr-2"></i>
              Google
            </button>
            <button className="w-full inline-flex justify-center py-3 px-4 border border-humanbo-divider rounded-lg bg-humanbo-white text-sm font-inter font-medium text-humanbo-gray hover:bg-humanbo-subtle hover:border-humanbo-blue/50 transition-all duration-300">
              <i className="bi bi-github mr-2"></i>
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
