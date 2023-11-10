import React, { useState, createContext, useEffect } from 'react';
import { lightTheme, darkTheme } from '../pages/Register/Theme/color';
 
export const ThemeContext = createContext();
 
export const ThemeProvider = ({ children }) => {

  const [theme,setTheme] = useState(() => {
    const storeTheme = localStorage.getItem('theme');
    return storeTheme ? JSON.parse(storeTheme): lightTheme;
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === lightTheme ? darkTheme : lightTheme);
  }
 
  // const toggleTheme = () => {
  //   setTheme(theme === lightTheme ? darkTheme : lightTheme);
  // };
 
  return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
</ThemeContext.Provider>
  );
};
