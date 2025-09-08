import React, { createContext, useContext, ReactNode } from 'react';

// Simplified theme context - light mode only
interface ThemeContextType {
  theme: 'light';
  toggleTheme: () => void;
  setTheme: (theme: 'light') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Always light theme
  const theme = 'light';

  const setTheme = (newTheme: 'light') => {
    // No-op since we only support light theme
    console.log('Theme is fixed to light mode');
  };

  const toggleTheme = () => {
    // No-op since we only support light theme
    console.log('Theme toggle disabled - light mode only');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
