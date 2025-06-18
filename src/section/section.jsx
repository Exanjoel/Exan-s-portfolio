import React from "react";
import { motion } from "framer-motion";

const SectionHead = ({ title, icon }) => {
  return (
    <motion.div
      className="py-4 sm:py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title and Icon */}
      <motion.div
        className="py-2 px-4 sm:px-6 bg-[var(--bg-color)] text-[var(--text-color)] 
                   rounded-2xl border border-gray-600 w-fit shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-xs  md:text-md uppercase flex items-center gap-2 font-semibold">
          {icon}
          <span className="whitespace-nowrap text-xs">{title}</span>
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default SectionHead;
