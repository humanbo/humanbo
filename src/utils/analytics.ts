// Google Analytics 4 Integration with enhanced error handling
export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || '';

// Initialize Google Analytics with error handling
export const initGA = () => {
  try {
    if (typeof window !== 'undefined' && GA_TRACKING_ID) {
      // Check if gtag is already loaded
      if (window.gtag) {
        console.log('Google Analytics already initialized');
        return;
      }

      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      script.onerror = () => {
        console.warn('Failed to load Google Analytics script');
      };
      
      const head = document.head;
      if (head) {
        head.appendChild(script);
      }

      // Initialize gtag with error handling
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        try {
          window.dataLayer.push(args);
        } catch (error) {
          console.warn('gtag error:', error);
        }
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true,
        // Enhanced ecommerce and user engagement
        custom_map: {
          custom_parameter: 'user_engagement'
        }
      });

      console.log('Google Analytics initialized with ID:', GA_TRACKING_ID);
    } else {
      console.warn('Google Analytics not initialized - missing tracking ID or window object');
    }
  } catch (error) {
    console.error('Error initializing Google Analytics:', error);
  }
};

// Track page views with error handling
export const trackPageView = (url: string, title?: string) => {
  try {
    if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
      window.gtag('config', GA_TRACKING_ID, {
        page_title: title || document.title,
        page_location: window.location.origin + url,
      });
      
      // Also send as a page_view event
      window.gtag('event', 'page_view', {
        page_title: title || document.title,
        page_location: window.location.origin + url,
        page_path: url
      });
    }
  } catch (error) {
    console.warn('Error tracking page view:', error);
  }
};

// Track custom events with error handling
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  try {
    if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        custom_parameter: 'user_engagement'
      });
    }
  } catch (error) {
    console.warn('Error tracking event:', error);
  }
};

// Track conversions with error handling
export const trackConversion = (conversionId: string, value?: number, currency = 'USD') => {
  try {
    if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: currency,
      });
    }
  } catch (error) {
    console.warn('Error tracking conversion:', error);
  }
};

// Track form submissions with error handling
export const trackFormSubmission = (formName: string, success: boolean = true) => {
  try {
    trackEvent(success ? 'form_submit_success' : 'form_submit_error', 'engagement', formName);
    
    // Additional conversion tracking for successful form submissions
    if (success) {
      trackEvent('generate_lead', 'conversion', formName);
    }
  } catch (error) {
    console.warn('Error tracking form submission:', error);
  }
};

// Track button clicks with error handling
export const trackButtonClick = (buttonName: string, location: string) => {
  try {
    trackEvent('click', 'engagement', `${buttonName}_${location}`);
  } catch (error) {
    console.warn('Error tracking button click:', error);
  }
};

// Track scroll depth with error handling
export const trackScrollDepth = (percentage: number) => {
  try {
    trackEvent('scroll', 'engagement', `${percentage}%`);
  } catch (error) {
    console.warn('Error tracking scroll depth:', error);
  }
};

// Track user engagement with error handling
export const trackUserEngagement = (engagementType: string, details?: string) => {
  try {
    trackEvent('user_engagement', 'behavior', `${engagementType}${details ? `_${details}` : ''}`);
  } catch (error) {
    console.warn('Error tracking user engagement:', error);
  }
};

// Track product interest with error handling
export const trackProductInterest = (productName: string, action: string) => {
  try {
    trackEvent('product_interest', 'products', `${productName}_${action}`);
  } catch (error) {
    console.warn('Error tracking product interest:', error);
  }
};

// Track navigation with error handling
export const trackNavigation = (from: string, to: string) => {
  try {
    trackEvent('navigation', 'user_flow', `${from}_to_${to}`);
  } catch (error) {
    console.warn('Error tracking navigation:', error);
  }
};

// Track search with error handling
export const trackSearch = (searchTerm: string, resultsCount?: number) => {
  try {
    trackEvent('search', 'engagement', searchTerm, resultsCount);
  } catch (error) {
    console.warn('Error tracking search:', error);
  }
};

// Track video interactions with error handling
export const trackVideoInteraction = (action: string, videoTitle: string, progress?: number) => {
  try {
    trackEvent(`video_${action}`, 'media', videoTitle, progress);
  } catch (error) {
    console.warn('Error tracking video interaction:', error);
  }
};

// Track download with error handling
export const trackDownload = (fileName: string, fileType: string) => {
  try {
    trackEvent('download', 'engagement', `${fileName}_${fileType}`);
  } catch (error) {
    console.warn('Error tracking download:', error);
  }
};

// Track external link clicks with error handling
export const trackExternalLink = (url: string, linkText?: string) => {
  try {
    trackEvent('external_link_click', 'engagement', linkText || url);
  } catch (error) {
    console.warn('Error tracking external link:', error);
  }
};

// Track social media interactions with error handling
export const trackSocialInteraction = (network: string, action: string, target?: string) => {
  try {
    trackEvent('social_interaction', 'social', `${network}_${action}${target ? `_${target}` : ''}`);
  } catch (error) {
    console.warn('Error tracking social interaction:', error);
  }
};

// Track timing events with error handling
export const trackTiming = (category: string, variable: string, value: number, label?: string) => {
  try {
    if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
      window.gtag('event', 'timing_complete', {
        name: variable,
        value: value,
        event_category: category,
        event_label: label
      });
    }
  } catch (error) {
    console.warn('Error tracking timing:', error);
  }
};

// Track exceptions with error handling
export const trackException = (description: string, fatal: boolean = false) => {
  try {
    if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
      window.gtag('event', 'exception', {
        description: description,
        fatal: fatal
      });
    }
  } catch (error) {
    console.warn('Error tracking exception:', error);
  }
};

// Enhanced ecommerce tracking with error handling
export const trackPurchase = (transactionId: string, value: number, currency: string = 'USD', items: any[] = []) => {
  try {
    if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
      window.gtag('event', 'purchase', {
        transaction_id: transactionId,
        value: value,
        currency: currency,
        items: items
      });
    }
  } catch (error) {
    console.warn('Error tracking purchase:', error);
  }
};

// Track sign up with error handling
export const trackSignUp = (method: string = 'email') => {
  try {
    trackEvent('sign_up', 'engagement', method);
  } catch (error) {
    console.warn('Error tracking sign up:', error);
  }
};

// Track login with error handling
export const trackLogin = (method: string = 'email') => {
  try {
    trackEvent('login', 'engagement', method);
  } catch (error) {
    console.warn('Error tracking login:', error);
  }
};

// Set user properties with error handling
export const setUserProperties = (properties: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
      window.gtag('config', GA_TRACKING_ID, {
        custom_map: properties
      });
    }
  } catch (error) {
    console.warn('Error setting user properties:', error);
  }
};

// Set user ID for cross-device tracking with error handling
export const setUserId = (userId: string) => {
  try {
    if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
      window.gtag('config', GA_TRACKING_ID, {
        user_id: userId
      });
    }
  } catch (error) {
    console.warn('Error setting user ID:', error);
  }
};

// Declare global gtag function
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
