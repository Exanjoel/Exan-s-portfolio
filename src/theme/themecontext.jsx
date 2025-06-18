import { createContext, useContext, useEffect, useState } from "react";

// Create Theme Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Load theme and text color from localStorage or set defaults
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [textColor, setTextColor] = useState(localStorage.getItem("textColor") || "default");
  // Apply theme and text color changes to the document root
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  
  useEffect(() => {
    localStorage.setItem("textColor", textColor);
    document.documentElement.setAttribute("data-text", textColor);
  }, [textColor]);
  

  // Function to toggle between light & dark themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };



  // Function to change text color dynamically
  const changeTextColor = (color) => {
    setTextColor(color);
    localStorage.setItem("textColor", color);
  };
    

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, textColor, changeTextColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook to Use Theme Context
export const useTheme = () => useContext(ThemeContext);
