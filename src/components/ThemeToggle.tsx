import React from 'react';

// Theme toggle component - now displays light mode indicator only
const ThemeToggle: React.FC = () => {
  return (
    <div className="relative w-12 h-6 rounded-full bg-gray-200 flex items-center justify-center">
      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs text-gray-600 shadow-sm">
        <i className="bi bi-sun-fill" />
      </div>
      <span className="sr-only">Light mode active</span>
    </div>
  );
};

export default ThemeToggle;
