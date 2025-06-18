import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Toggle = ({ toggleDrawer, isOpen }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [textColor, setTextColor] = useState(() => localStorage.getItem("textColor") || "default");

  // Set attributes and store in localStorage whenever theme or color changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-text", textColor);
    localStorage.setItem("theme", theme);
    localStorage.setItem("textColor", textColor);
  }, [theme, textColor]);

  const handleThemeToggle = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className="p-6 shadow-lg rounded-lg w-80"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      <div className="flex flex-col items-center gap-6 p-5">
        {/* Theme Toggle */}
        <div
          className="w-20 h-10 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center px-1 cursor-pointer relative transition-all duration-300"
          onClick={handleThemeToggle}
        >
          <div
            className={`absolute w-8 h-8 bg-white rounded-full shadow-md transform transition-all duration-300 ${
              theme === "dark" ? "translate-x-10" : "translate-x-0"
            }`}
          ></div>
          <Sun
            className={`absolute left-2 w-6 h-6 text-yellow-500 transition-opacity ${
              theme === "dark" ? "opacity-0" : "opacity-100"
            }`}
          />
          <Moon
            className={`absolute right-2 w-6 h-6 text-gray-900 transition-opacity ${
              theme === "dark" ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Text Color Buttons */}
        <div className="flex flex-wrap gap-6">
          {[
            { color: "green", bg: "bg-green-500" },
            { color: "violet", bg: "bg-purple-500" },
            { color: "rose", bg: "bg-pink-500" },
            { color: "blue", bg: "bg-blue-500" },
            { color: "orange", bg: "bg-orange-500" },
            { color: "cyan", bg: "bg-cyan-500" },
          ].map(({ color, bg }) => (
            <button
              key={color}
              onClick={() => setTextColor(color)}
              className={`w-10 h-10 ${bg} rounded-full transition-transform hover:scale-110 shadow-md`}
            ></button>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default Toggle;
