import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react"; // Importing components from Flowbite React
import { HiArrowNarrowRight } from "react-icons/hi";
import SectionHead from "../section";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import {
  educationlineData,
  experienceLineData,
  timelineTheme,
} from "./educationData";
import { useState } from "react";

// Reusable TimelineSection Component
const TimelineSection = ({ title, data }) => {
  return (
    <>
    
      <motion.h1
        className="md:text-5xl text-4xl font-light text-[var(--text-color)] mt-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {title}
      </motion.h1>
      <Timeline theme={timelineTheme} className="mx-4 mt-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 1 }}
          >
            <TimelineItem>
              <TimelinePoint icon={item.icon} />
              <TimelineContent>
                <TimelineTime>{item.date}</TimelineTime>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineBody>{item.description}</TimelineBody>
                {item.hasButton && (
                  <Button color="gray">
                    {item.buttonText}
                    <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                  </Button>
                )}
              </TimelineContent>
            </TimelineItem>
          </motion.div>
        ))}
      </Timeline>
    </>
  );
};

// Main Component
const Educationsection = () => {
  const tabs = ["Experience", "Education"];
  const [activeTab, setActiveTab] = useState("Experience");
  return (
    <>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8">

      <SectionHead title={"Resume"} icon={<FileText />} />
      <motion.div
        className="flex border border-gray-800 p-2 rounded-full w-fit mx-auto gap-2"
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

      {activeTab === "Experience" && (
        <TimelineSection title="Experience" data={experienceLineData} />
      )}
      {activeTab === "Education" && (
        <TimelineSection title="Education" data={educationlineData} />
      )}
      </div>
    </>
  );
};

export default Educationsection;
