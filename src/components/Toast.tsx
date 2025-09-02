import React, { useState, useEffect } from 'react';

export interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false);
      window.setTimeout(() => onClose(id), 300);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [id, duration, onClose]);

  const typeStyles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  };

  const iconMap = {
    success: 'bi-check-circle-fill',
    error: 'bi-x-circle-fill',
    warning: 'bi-exclamation-triangle-fill',
    info: 'bi-info-circle-fill'
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 max-w-sm w-full transition-all duration-300 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className={`p-4 rounded-lg border shadow-lg ${typeStyles[type]}`}>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <i className={`bi ${iconMap[type]} text-lg`}></i>
          </div>
          <div className="ml-3 flex-1">
            <h3 className="text-sm font-inter font-medium">
              {title}
            </h3>
            {message && (
              <p className="mt-1 text-sm font-inter font-light">
                {message}
              </p>
            )}
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              window.setTimeout(() => onClose(id), 300);
            }}
            className="ml-4 flex-shrink-0 hover:opacity-70 transition-opacity duration-200"
          >
            <i className="bi bi-x text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
