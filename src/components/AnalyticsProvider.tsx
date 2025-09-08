import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { 
  initGA, 
  trackPageView, 
  trackEvent, 
  trackUserEngagement,
  trackFormSubmission,
  trackButtonClick,
  setUserId,
  setUserProperties
} from '../utils/analytics';

interface AnalyticsContextType {
  trackEvent: (action: string, category: string, label?: string, value?: number) => void;
  trackPageView: (url: string, title?: string) => void;
  trackUserEngagement: (engagementType: string, details?: string) => void;
  trackFormSubmission: (formName: string, success?: boolean) => void;
  trackButtonClick: (buttonName: string, location: string) => void;
  setUserId: (userId: string) => void;
  setUserProperties: (properties: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();
    
    // Track initial app load
    trackUserEngagement('app_load');
    
    // Set up performance tracking
    if ('performance' in window) {
      window.addEventListener('load', () => {
        window.setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (perfData) {
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            trackEvent('page_load_time', 'performance', 'load_time', Math.round(loadTime));
          }
        }, 0);
      });
    }
    
    // Track user engagement patterns
    let isActive = true;
    let startTime = Date.now();
    
    const trackEngagementTime = () => {
      if (isActive) {
        const engagementTime = Date.now() - startTime;
        if (engagementTime > 30000) { // Track if user is engaged for more than 30 seconds
          trackUserEngagement('engaged_session', `${Math.round(engagementTime / 1000)}s`);
        }
      }
    };
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isActive = false;
        trackEngagementTime();
      } else {
        isActive = true;
        startTime = Date.now();
      }
    };
    
    const handleBeforeUnload = () => {
      trackEngagementTime();
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const contextValue: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackUserEngagement,
    trackFormSubmission,
    trackButtonClick,
    setUserId,
    setUserProperties
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
