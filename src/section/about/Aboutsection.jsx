import React from "react";
import Section from "../section";
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFlag, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const aboutDetails = [
  { label: "Name", value: "D. Exan Joel", icon: <FaUser /> },
  { label: "Phone", value: "+91 9791820805", icon: <FaPhone /> },
  { label: "Email", value: "exanjoel07@gmail.com", icon: <FaEnvelope /> },
  { label: "Address", value: "Kanyakumari, Tamil Nadu, India", icon: <FaMapMarkerAlt /> },
  { label: "Nationality", value: "Indian", icon: <FaFlag /> },
  { label: "Hobbies", value: "Coding, Reading, Hiking", icon: <FaHeart /> },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Aboutsection = () => {
  return (
    <section className="w-full px-4 sm:px-8 py-14 max-w-5xl mx-auto">
      <Section title="About Me" icon={<FaUser />} />

      {/* Main Statement and Description */}
      <motion.div
        className="text-[var(--text-color)] mt-6 text-center md:text-left"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="relative font-light italic text-3xl sm:text-4xl md:text-5xl leading-tight">
          Every great design{" "}
          <span className="text-[var(--text-color2)] font-semibold">begins</span> with an even
          better <span className="text-[var(--text-color2)] font-semibold">story</span>.
        </h2>

        <p className="text-base sm:text-lg mt-6 leading-relaxed max-w-3xl mx-auto md:mx-0">
          I’m a web developer focused on building modern and responsive interfaces
          using tools like <strong>React</strong> and <strong>Designs</strong>. My
          approach blends clean visuals with intuitive experiences. I’m always exploring new ideas, constantly learning,
          and love turning concepts into interactive web products.
        </p>
      </motion.div>

      {/* Personal Info Section */}
      <motion.div
        className="mt-12"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <h3 className="text-xl font-semibold text-[var(--text-color2)] mb-6 underline underline-offset-4 decoration-2">
          Personal Info
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[var(--text-color)]">
          {aboutDetails.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="mt-1 text-[var(--text-color2)]">{item.icon}</span>
              <div>
                <span className="block text-sm sm:text-base font-semibold text-[var(--text-color2)]">
                  {item.label}
                </span>
                <span className="text-sm sm:text-base">{item.value}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Aboutsection;
