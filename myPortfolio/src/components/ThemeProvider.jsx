import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const style = {
    '--fundoDark': theme === 'dark' ? 'rgba(0, 0, 0, 0.516)' : 'white',
    '--colorDark': theme === 'dark' ? 'white' : 'black'
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="theme-provider" style={style}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
