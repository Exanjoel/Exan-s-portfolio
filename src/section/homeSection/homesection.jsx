import React from "react";
import Section from "../section";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ProjectAnimate from "./progectbutton";
import { ArrowBigRight, ArrowRight } from "lucide-react";

const Homesection = () => {
  const HomeData = {
    type: "mainhead",
    title: "Introduction",
    icon: <FaHome />,
  };

  return (
    <div className="px-4 sm:px-8 py-10 max-w-6xl mx-auto">
      {/* Section Heading */}
      <Section title={HomeData.title} icon={HomeData.icon} />

      {/* Main Heading */}
      <motion.h1
  className="text-4xl sm:text-5xl md:text-6xl font-light italic leading-tight text-[var(--text-color)] md:text-left mt-6"
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
>
  Say hi from{" "}
  <span className="text-[var(--text-color2)]  font-semibold">Exan</span>, <br />
  Full Stack Developer <span className="not-italic font-semibold text-[var(--text-color2)]">&</span> Designer
</motion.h1>


      {/* Description */}
      <motion.p
        className="mt-6 text-md sm:text-lg text-[var(--text-color)] text-center md:text-left leading-relaxed max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        I'm passionate about building modern, responsive web applications with
        clean UI and seamless user experiences. From concept to deployment, I
        love turning ideas into interactive digital products using React,
        Node.js, and design tools like Figma.
      </motion.p>

      {/* Call-to-action */}
      <motion.div
        className="mt-8 text-center md:text-left flex align-center items-center w-full justify-start lg:justify-between gap-4"
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <NavLink
          to="/contact"
          className="group inline-flex items-center justify-between bg-[var(--text-color2)] rounded-full border-2 border-[var(--text-color2)] transition-all duration-300 hover:bg-transparent hover:text-[var(--text-color2)] text-[var(--bg-color)] px-6 py-3 font-medium text-sm sm:text-base hover:scale-105 transition-transform"
          >
          <span className="flex items-center">
            HIRE ME
            <span className="inline-block w-0 overflow-hidden group-hover:w-6 transition-all duration-300 ease-in-out">
              <ArrowRight className="opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
            </span>
          </span>
        </NavLink>
        <NavLink to="/project">
          <ProjectAnimate />
        </NavLink>
      </motion.div>
    </div>
  );
};

export default Homesection;
