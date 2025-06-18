import SectionHead from "../section";
import { Code } from "lucide-react";
import { motion } from "framer-motion";
import { programSkillSet, techSkillSet } from "./skill";
import { useState } from "react";

const SkillSection = () => {
  const [filterdTech, setFilterdTech] = useState(techSkillSet);
  const [isActive, setIsActive] = useState("");

  function handleFilter(category) {
    const data = techSkillSet.filter((item) => item.type === category);
    setFilterdTech(data);
    setIsActive(category);
  }

  const buttons = [
    {
      name: "All",
      click: () => {
        setFilterdTech(techSkillSet);
        setIsActive("all");
      },
    },
    { name: "Frontend", click: () => handleFilter("frontend") },
    { name: "Backend", click: () => handleFilter("backend") },
    { name: "Database", click: () => handleFilter("database") },
    { name: "Design", click: () => handleFilter("design") },
    { name: "Tools", click: () => handleFilter("tools") },
  ];

  const tabs = ["programmes", "Frameworks"];
  const [activeTab, setActiveTab] = useState("programmes");

  return (
    <>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
        <SectionHead title="My Skills" icon={<Code />} />

        <motion.div
          className="flex text-center border border-gray-800 p-2 rounded-full w-fit mx-auto gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {tabs.map((tab) => (
            <motion.div
              key={tab}
              className="relative cursor-pointer px-4 py-2 text-[var(--text-color)] font-medium rounded-full"
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[var(--text-color2)] rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  activeTab === tab
                    ? "text-[var(--bg-color)]"
                    : "text-[var(--text-color)]"
                }`}
              >
                {tab}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* programming skill section */}
        {activeTab === "programmes" && (
          <div className="h-fit ">
            <div className="flex flex-col items-center gap-8 w-full justify-start mt-6">
              <div className="w-full flex flex-col space-y-4">
                {programSkillSet.map(({ skill, level, logo }) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-4 w-full text-[var(--text-color)] p-4 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <img src={logo} alt={skill} crossOrigin="anonymous" className="w-8 h-8" />
                    <div className="w-full">
                      <div className="flex text-[var(--text-color)] justify-between text-sm font-medium mb-1">
                        <span>{skill}</span>
                        <span>{level}%</span>
                      </div>
                      <div className="w-full bg-[var(--bg-color)] rounded-full h-2.5">
                        <motion.div
                          className="h-1 rounded-full bg-[var(--text-color)]"
                          initial={{ width: "0%" }}
                          animate={{ width: `${level}%` }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Technical skill section */}
        {activeTab === "Frameworks" && (
          <div className="h-screen flex flex-col">
            <div className="my-3 flex justify-center">
              <div className="flex overflow-x-auto whitespace-nowrap no-scrollbar px-2 gap-2">
                {buttons.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.click}
                    className={`px-5 py-3 mx-2 font-semibold rounded-xl transition duration-300 border ${
                      isActive === item.name.toLowerCase()
                        ? "bg-[var(--text-color2)] text-[var(--bg-color)] border-[var(--text-color2)]"
                        : "bg-transparent border-gray-600 hover:bg-[var(--text-color2)] hover:text-[var(--bg-color)]"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {filterdTech.map((skill, index) => {
                const x = index % 2 === 0 ? -50 : 50;
                const y = index % 3 === 0 ? -50 : 50;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x, x, y }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 50,
                      delay: index * 0.1,
                    }}
                    className="flex flex-col items-center border text-[var(--text-color)] border-gray-500 rounded-xl p-6 hover:text-[var(--text-color2)] transition-border duration-300 hover:border-[var(--text-color2)]"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      crossOrigin="anonymous"
                      className="w-12 h-14 mb-2"
                    />
                    <span className="text-lg font-medium">{skill.skill}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SkillSection;
