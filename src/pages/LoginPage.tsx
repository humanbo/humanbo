import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    window.setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
      console.log('Login attempt:', formData);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
            Welcome Back
          </h1>
          <p className="text-lg font-inter font-light text-humanbo-gray">
            Sign in to your Humanbo account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="Enter your email"
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
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-humanbo-gray hover:text-humanbo-black transition-colors duration-200"
              >
                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-humanbo-blue border-humanbo-divider rounded focus:ring-humanbo-blue focus:ring-2"
              />
              <span className="ml-2 text-sm font-inter font-light text-humanbo-gray">
                Remember me
              </span>
            </label>
            <a href="#" className="text-sm font-inter font-light text-humanbo-blue hover:text-humanbo-black transition-colors duration-300">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-full font-inter font-medium text-base tracking-wide transition-all duration-300 transform hover:scale-105 ${
              isLoading
                ? 'bg-humanbo-gray text-humanbo-white cursor-not-allowed'
                : 'bg-humanbo-black text-humanbo-white hover:bg-gray-800'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <i className="bi bi-arrow-clockwise animate-spin"></i>
                Signing In...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm font-inter font-light text-humanbo-gray">
            Don't have an account?{' '}
            <Link 
              to="/signup" 
              className="text-humanbo-blue hover:text-humanbo-black transition-colors duration-300 font-medium"
            >
              Create one here
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
                Or continue with
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

export default LoginPage;
