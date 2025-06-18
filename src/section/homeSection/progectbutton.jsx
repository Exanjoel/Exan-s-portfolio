import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';

const ProjectAnimate = () => {
  const text = "• My Projects ";

  return (
    <div className="relative flex items-center justify-center w-24 md:w-36 lg:w-48 aspect-square border-2 border-[var(--text-color2)] rounded-full overflow-hidden  mt-8 mr-20">
      
      {/* Smoothly Spinning Text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center m-2"
        animate={{ rotate: 360 }}
        
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }} 
        
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100
                 m -75, 0
                 a 75,75 0 1,1 150,0
                 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text fill="currentColor" fontSize="25" className="text-[var(--text-color)]">
            <textPath
              xlinkHref="#circlePath"
              startOffset="50%"
              textAnchor="middle"
              letterSpacing="6"
            >
             • My Projects • My Projects 
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Center Icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-[var(--text-color)]"
        whileHover={{ scale: 1.2 }}
      >
        <ArrowDownIcon className="w-5 h-5 md:w-6 md:h-6" />
      </motion.div>
    </div>
  );
};

export default ProjectAnimate;
