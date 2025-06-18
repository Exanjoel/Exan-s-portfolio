import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  FileText,
  Mail,
  Code,
  Section,
} from "lucide-react";

const NavBar = () => {
  const NavHead = [
    { icon: <Home className="w-5 h-5 md:w-6 md:h-6" />, link: "/", label: "Home" },
    { icon: <User className="w-5 h-5 md:w-6 md:h-6" />, link: "/about", label: "About" },
    { icon: <Code className="w-5 h-5 md:w-6 md:h-6" />, link: "/skills", label: "Skills" },
    { icon: <Section className="w-5 h-5 md:w-6 md:h-6" />, link: "/project", label: "Projects" },
    { icon: <FileText className="w-5 h-5 md:w-6 md:h-6" />, link: "/education", label: "Education" },
    { icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />, link: "/contact", label: "Contact" },
  ];

  return (
    <nav className="border border-gray-600 rounded-full flex flex-row lg:flex-col h-fit shadow-lg lg:shadow-none fixed bottom-4 lg:static left-1/2 lg:left-auto transform -translate-x-1/2 lg:translate-x-0 bg-[var(--bg-color)] z-50">
      {NavHead.map((item, index) => (
        <NavLink
          key={index}
          to={item.link}
          className={({ isActive }) =>
            `text-xs md:text-sm px-3 md:px-4 py-3 md:py-5 text-[var(--text-color)] transition duration-300 ${
              isActive ? "text-[var(--text-color2)]" : "hover:text-[var(--text-color2)]"
            }`
          }
          aria-label={item.label}
          title={item.label}
        >
          {item.icon}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
