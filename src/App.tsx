import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './hooks/useTheme';
import { ToastProvider } from './hooks/useToast';
import { initGA, trackPageView, trackUserEngagement } from './utils/analytics';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import SupportPage from './pages/SupportPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import PricingPage from './pages/PricingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AskifyPage from './pages/AskifyPage';
import MocdtPage from './pages/MocdtPage';
import WebSparksPage from './pages/WebSparksPage';
import OwnCentsPage from './pages/OwnCentsPage';
import TimeWalletPage from './pages/TimeWalletPage';
import NotFoundPage from './pages/NotFoundPage';

// Safe DOM helper
const safeGetElement = (selector: string): Element | null => {
  try {
    return document?.querySelector?.(selector) || null;
  } catch (error) {
    console.warn(`Safe element selection failed for ${selector}:`, error);
    return null;
  }
};

// Safe event listener helper
const safeAddEventListener = (
  target: EventTarget | null,
  event: string,
  handler: EventListener,
  options?: AddEventListenerOptions
): (() => void) => {
  try {
    if (target && typeof target.addEventListener === 'function') {
      target.addEventListener(event, handler, options);
      return () => {
        try {
          if (target && typeof target.removeEventListener === 'function') {
            target.removeEventListener(event, handler, options);
          }
        } catch (cleanupError) {
          console.warn('Event listener cleanup failed:', cleanupError);
        }
      };
    }
  } catch (error) {
    console.warn(`Safe event listener setup failed for ${event}:`, error);
  }
  return () => {}; // Return no-op cleanup function
};

// Analytics wrapper component with enhanced error handling
const AnalyticsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    try {
      // Track page views with error handling
      trackPageView(location.pathname + location.search, document?.title || 'Humanbo');
    } catch (error) {
      console.warn('Analytics tracking error:', error);
    }
  }, [location]);

  return <>{children}</>;
};

function App() {
  useEffect(() => {
    const cleanupFunctions: (() => void)[] = [];

    try {
      // Initialize Google Analytics with error handling
      initGA();

      // Track initial user engagement
      trackUserEngagement('app_start');

      // Add scroll depth tracking with comprehensive error handling
      let maxScroll = 0;
      const handleScroll = () => {
        try {
          const documentElement = document?.documentElement;
          const windowObj = window;
          
          if (!documentElement || !windowObj) return;

          const scrollHeight = documentElement.scrollHeight || 0;
          const clientHeight = windowObj.innerHeight || 0;
          const scrollTop = windowObj.scrollY || windowObj.pageYOffset || 0;
          
          if (scrollHeight > clientHeight && scrollHeight > 0) {
            const scrollPercent = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
            
            if (scrollPercent > maxScroll && scrollPercent % 25 === 0 && scrollPercent <= 100) {
              maxScroll = scrollPercent;
              trackUserEngagement('scroll_depth', `${scrollPercent}%`);
            }
          }
        } catch (error) {
          console.warn('Scroll tracking error:', error);
        }
      };

      // Track time on site with error handling
      const startTime = Date.now();
      const trackTimeOnSite = () => {
        try {
          const timeSpent = Math.round((Date.now() - startTime) / 1000);
          if (timeSpent > 0 && timeSpent < 86400) { // Sanity check: less than 24 hours
            trackUserEngagement('time_on_site', `${timeSpent}s`);
          }
        } catch (error) {
          console.warn('Time tracking error:', error);
        }
      };

      // Track user interactions with enhanced error handling
      const trackClicks = (e: Event) => {
        try {
          const target = e?.target as HTMLElement;
          if (target && (target.tagName === 'A' || target.tagName === 'BUTTON')) {
            const text = target.textContent?.trim() || target.getAttribute?.('aria-label') || 'unknown';
            if (text && text.length > 0) {
              trackUserEngagement('click', text.substring(0, 50));
            }
          }
        } catch (error) {
          console.warn('Click tracking error:', error);
        }
      };

      // Add event listeners with safe helpers
      if (typeof window !== 'undefined') {
        cleanupFunctions.push(
          safeAddEventListener(window, 'scroll', handleScroll, { passive: true }),
          safeAddEventListener(window, 'beforeunload', trackTimeOnSite),
          safeAddEventListener(window, 'click', trackClicks, { passive: true })
        );
      }

      // Cleanup function
      return () => {
        try {
          cleanupFunctions.forEach(cleanup => {
            if (typeof cleanup === 'function') {
              cleanup();
            }
          });
        } catch (error) {
          console.warn('Event listener cleanup error:', error);
        }
      };
    } catch (error) {
      console.error('App initialization error:', error);
      return () => {}; // Return no-op cleanup
    }
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <ToastProvider>
            <Router>
              <AnalyticsWrapper>
                <div className="min-h-screen bg-theme font-inter">
                  <Header />
                  <main>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/blog" element={<BlogPage />} />
                      <Route path="/support" element={<SupportPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/careers" element={<CareersPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/signup" element={<SignupPage />} />
                      <Route path="/askify" element={<AskifyPage />} />
                      <Route path="/mocdt" element={<MocdtPage />} />
                      <Route path="/websparks" element={<WebSparksPage />} />
                      <Route path="/owncents" element={<OwnCentsPage />} />
                      <Route path="/time-wallet" element={<TimeWalletPage />} />
                      <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </AnalyticsWrapper>
            </Router>
          </ToastProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
