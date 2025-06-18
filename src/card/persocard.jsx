import { motion } from "framer-motion";
import {
  FaGithub,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import SettingIcon from "./settingIcon";
import { Download, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Card = () => {
  return (
    <motion.div
      className="flex flex-col justify-between h-full rounded-3xl p-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-center border border-gray-600 shadow-lg mx-auto bg-[var(--bg-color)]"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Header Section */}
      <div className=" md:flex justify-between items-center mb-6 w-full">
        <div className="absolute top-15 left-0">
          <SettingIcon />
        </div>
        <div className="text-left flex justify-evenly items-center w-full">
          <motion.div
            className="w-fit italic sm:w-[200px] text-3xl sm:text-4xl font-bold overflow-hidden whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typewriter
              words={["Exan Joel"]}
              loop={1} // Infinite loop
              cursor
              cursorStyle=""
              typeSpeed={900}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.div>
          <div className="flex flex-col text-right text-lg font-semibold">
            <span className="text-[var(--text-color2)]">Developer</span>
            <span className="italic">& Designer</span>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <img
          src="/public/IMG_20240707_111635614_PORTRAIT 03 (1).jpg"
          alt="Profile"
          className="w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Contact Info */}
      <div className="mt-4">
        <p className="lg:text-lg text-sm italic">exanjoel07@gmail.com</p>
        <p className="lg:text-lg text-sm italic">Based in Tamil Nadu, INDIA</p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-2 mt-4 text-gray-400">
        <a
          href="https://www.instagram.com/xn_d_joel/"
          target="_blank"
          rel="noopener noreferrer"
          className="border p-3 sm:p-5 rounded-full hover:text-[var(--text-color2)] transition"
        >
          <FaInstagram className="text-xl lg:text-2xl cursor-pointer" />
        </a>

        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="border p-3 sm:p-5 rounded-full hover:text-[var(--text-color2)] transition"
        >
          <FaTwitter className="text-xl lg:text-2xl cursor-pointer" />
        </a>

        <a
          href="https://www.linkedin.com/in/exan-joel"
          target="_blank"
          rel="noopener noreferrer"
          className="border p-3 sm:p-5 rounded-full hover:text-[var(--text-color2)] transition"
        >
          <FaLinkedin className="text-xl lg:text-2xl cursor-pointer" />
        </a>

        <a
          href="https://github.com/Exanjoel"
          target="_blank"
          rel="noopener noreferrer"
          className="border p-3 sm:p-5 rounded-full hover:text-[var(--text-color2)] transition"
        >
          <FaGithub className="text-xl lg:text-2xl cursor-pointer" />
        </a>
      </div>

      <motion.a
        href="/Exan's resume.pdf" // path inside public folder
        download="Exan's resume.pdf" // optional custom download name
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="lg:mt-6 mt-3 md:w-full sm:w-fit px-6 py-3 bg-[var(--text-color2)] text-[var(--bg-color)] font-medium flex items-center justify-center gap-2 rounded-full border-2 border-[var(--text-color2)] transition-all duration-300 hover:bg-transparent hover:text-[var(--text-color2)]"
      >
        <Download className="text-lg" />
        MY RESUME
      </motion.a>
    </motion.div>
  );
};

export default Card;
