import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    
    // In production, you would send this to your error reporting service
    if (import.meta.env.PROD) {
      // Example: Sentry.captureException(error);
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-humanbo-off-white px-8">
          <div className="max-w-md w-full text-center">
            <div className="text-6xl mb-6">😔</div>
            <h1 className="text-3xl font-inter font-light text-humanbo-black mb-4 tracking-tight">
              Oops! Something went wrong
            </h1>
            <p className="text-lg font-inter font-light text-humanbo-gray mb-8 leading-relaxed">
              We're sorry for the inconvenience. Our team has been notified and is working on a fix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-humanbo-blue text-humanbo-white px-8 py-3 rounded-full font-inter font-medium text-base tracking-wide hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Refresh Page
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="border-2 border-humanbo-black text-humanbo-black px-8 py-3 rounded-full font-inter font-medium text-base tracking-wide hover:bg-humanbo-black hover:text-humanbo-white transition-all duration-300"
              >
                Go Home
              </button>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-humanbo-gray hover:text-humanbo-black">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-2 p-4 bg-red-50 border border-red-200 rounded text-xs text-red-800 overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
