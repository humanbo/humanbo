import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastProvider } from './hooks/useToast';
import { initGA, trackPageView } from './utils/analytics';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';
import PricingPage from './pages/PricingPage';
import SupportPage from './pages/SupportPage';
import AskifyPage from './pages/AskifyPage';
import MocdtPage from './pages/MocdtPage';
import WebSparksPage from './pages/WebSparksPage';
import OwnCentsPage from './pages/OwnCentsPage';
import TimeWalletPage from './pages/TimeWalletPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NotFoundPage from './pages/NotFoundPage';

// Analytics wrapper component
const AnalyticsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    trackPageView(location.pathname + location.search, document.title);
  }, [location]);

  return <>{children}</>;
};

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();

    // Add scroll depth tracking
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        // You can uncomment this when you want to track scroll depth
        // trackScrollDepth(scrollPercent);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <ToastProvider>
          <Router>
            <AnalyticsWrapper>
              <div className="min-h-screen bg-humanbo-off-white font-inter">
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="/askify" element={<AskifyPage />} />
                    <Route path="/mocdt" element={<MocdtPage />} />
                    <Route path="/websparks" element={<WebSparksPage />} />
                    <Route path="/owncents" element={<OwnCentsPage />} />
                    <Route path="/time-wallet" element={<TimeWalletPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </AnalyticsWrapper>
          </Router>
        </ToastProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
