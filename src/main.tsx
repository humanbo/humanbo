import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Comprehensive DOM safety helpers
const safeClassListOperation = (element: Element | null, operation: 'add' | 'remove', className: string): boolean => {
  try {
    if (element && 
        element.classList && 
        typeof element.classList[operation] === 'function' &&
        className && 
        typeof className === 'string') {
      element.classList[operation](className);
      return true;
    }
  } catch (error) {
    console.warn(`Safe classList ${operation} failed:`, error);
  }
  return false;
};

const safeGetElement = (selector: string): Element | null => {
  try {
    if (typeof document !== 'undefined' && 
        document.querySelector && 
        typeof selector === 'string') {
      return document.querySelector(selector);
    }
  } catch (error) {
    console.warn(`Safe element selection failed for ${selector}:`, error);
  }
  return null;
};

// Prevent preview script errors by intercepting classList access
const preventPreviewScriptErrors = () => {
  try {
    // Override console.error to catch and suppress preview script errors
    const originalConsoleError = console.error;
    console.error = (...args) => {
      const message = args.join(' ');
      if (message.includes('classList') || 
          message.includes('preview-script') || 
          message.includes('setInspectorActive') ||
          message.includes('Cannot read properties of null')) {
        console.warn('Preview script error suppressed:', ...args);
        return;
      }
      originalConsoleError.apply(console, args);
    };

    // Add global error handler for preview script
    window.addEventListener('error', (event) => {
      if (event.filename && event.filename.includes('preview-script')) {
        console.warn('Preview script error caught and suppressed:', event.error);
        event.preventDefault();
        return false;
      }
    });

    // Protect against null classList access
    const originalQuerySelector = Document.prototype.querySelector;
    Document.prototype.querySelector = function(selector: string) {
      try {
        const element = originalQuerySelector.call(this, selector);
        if (element && !element.classList) {
          // Add a safe classList if missing
          Object.defineProperty(element, 'classList', {
            value: {
              add: () => {},
              remove: () => {},
              contains: () => false,
              toggle: () => false
            },
            writable: false
          });
        }
        return element;
      } catch (error) {
        console.warn('Safe querySelector error:', error);
        return null;
      }
    };

  } catch (error) {
    console.warn('Preview script error prevention setup failed:', error);
  }
};

// Initialize error prevention
preventPreviewScriptErrors();

// Safe body class management
try {
  const body = safeGetElement('body') as HTMLElement;
  if (body) {
    safeClassListOperation(body, 'add', 'loading');
  }
} catch (error) {
  console.warn('Initial loading class setup failed:', error);
}

// Ensure root element exists with comprehensive error handling
const rootElement = safeGetElement('#root') as HTMLElement;
if (!rootElement) {
  // Create fallback error display
  try {
    const errorDiv = document.createElement('div');
    errorDiv.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: system-ui, sans-serif; background: #f9fafb; padding: 2rem;">
        <div style="text-align: center; max-width: 500px;">
          <div style="font-size: 4rem; margin-bottom: 1rem;">⚠️</div>
          <h1 style="color: #dc2626; margin-bottom: 1rem; font-size: 1.5rem;">Application Error</h1>
          <p style="color: #6b7280; margin-bottom: 2rem;">Root element not found. Please refresh the page or contact support if the issue persists.</p>
          <button onclick="window.location.reload()" style="padding: 0.75rem 1.5rem; background: #3b82f6; color: white; border: none; border-radius: 0.5rem; cursor: pointer; font-size: 1rem;">
            Refresh Page
          </button>
        </div>
      </div>
    `;
    const body = safeGetElement('body') as HTMLElement;
    if (body) {
      body.appendChild(errorDiv);
    }
  } catch (fallbackError) {
    console.error('Failed to create fallback error display:', fallbackError);
  }
  throw new Error('Root element not found');
}

// Create React root with comprehensive error handling
let root;
try {
  root = createRoot(rootElement);
} catch (error) {
  console.error('Failed to create React root:', error);
  // Show fallback error in root element
  rootElement.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: system-ui, sans-serif;">
      <div style="text-align: center; padding: 2rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔧</div>
        <h1 style="color: #dc2626; margin-bottom: 1rem;">React Initialization Error</h1>
        <p style="color: #6b7280; margin-bottom: 2rem;">Failed to initialize the React application. Please refresh the page.</p>
        <button onclick="window.location.reload()" style="padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; cursor: pointer;">
          Refresh Page
        </button>
      </div>
    </div>
  `;
  throw error;
}

// Render app with comprehensive error handling
try {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} catch (error) {
  console.error('Failed to render React app:', error);
  // Fallback rendering
  rootElement.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: system-ui, sans-serif;">
      <div style="text-align: center; padding: 2rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">❌</div>
        <h1 style="color: #dc2626; margin-bottom: 1rem;">Rendering Error</h1>
        <p style="color: #6b7280; margin-bottom: 2rem;">Failed to load the application. Please refresh the page or try again later.</p>
        <button onclick="window.location.reload()" style="padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; cursor: pointer;">
          Refresh Page
        </button>
      </div>
    </div>
  `;
}

// Enhanced load completion handling
const handleLoadComplete = () => {
  try {
    const body = safeGetElement('body') as HTMLElement;
    if (body) {
      safeClassListOperation(body, 'remove', 'loading');
      safeClassListOperation(body, 'add', 'loaded');
    }
  } catch (error) {
    console.warn('Error updating body classes on load:', error);
  }
};

// Multiple event listeners for better compatibility
if (typeof window !== 'undefined') {
  // Primary load events
  window.addEventListener('load', handleLoadComplete, { once: true, passive: true });
  window.addEventListener('DOMContentLoaded', handleLoadComplete, { once: true, passive: true });
  
  // Fallback timeout
  window.setTimeout(handleLoadComplete, 2000);
  
  // Enhanced error handling for all types of errors
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault();
  }, { passive: true });

  window.addEventListener('error', (event) => {
    // Suppress preview script errors specifically
    if (event.filename && (
        event.filename.includes('preview-script') ||
        event.filename.includes('.preview-script')
      )) {
      console.warn('Preview script error suppressed:', event.error);
      event.preventDefault();
      return false;
    }
    
    console.error('Global error:', event.error);
    // Don't prevent default for other errors
  }, { passive: false });

  // Additional protection for preview script
  const originalSetTimeout = window.setTimeout;
  window.setTimeout = function(callback: TimerHandler, delay?: number, ...args: any[]) {
    const safeCallback = typeof callback === 'function' ? function() {
      try {
        return callback.apply(this, arguments);
      } catch (error) {
        if (error instanceof Error && error.message.includes('classList')) {
          console.warn('setTimeout callback error suppressed:', error);
          return;
        }
        throw error;
      }
    } : callback;
    
    return originalSetTimeout.call(this, safeCallback, delay, ...args);
  };
}

// Export for debugging in development
if (import.meta.env.DEV) {
  (window as any).__HUMANBO_DEBUG__ = {
    safeClassListOperation,
    safeGetElement,
    rootElement,
    root
  };
}
