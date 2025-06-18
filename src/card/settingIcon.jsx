import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import ThemeToggle from "../theme/themetoggle";
import { motion } from "framer-motion";

const SettingIcon = () => {
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        {/* Rotating Settings Icon */}
        <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className=" p-2 bg-[var(--bg-color)]  rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }} // Continuous rotation
      >
        <IoMdSettings size={24} />
      </motion.button>

      {/* Drawer */}
      
        <ThemeToggle isOpen={isOpen} toggleDrawer={toggleDrawer} />
      
    </>
  );
};

export default SettingIcon;
