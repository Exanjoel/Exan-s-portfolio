
import { Workflow, GraduationCap, Notebook, Pen, LampDesk, ChevronsLeftRightEllipsis } from "lucide-react";

export const educationlineData = [
    {
      date: "May 2025",
      title: "Bachelor Engineering in Computer Science",
      description:
        "I graduated from the University of Anna with a degree in Computer Science. During my studies, I gained a strong foundation in programming, algorithms, and software development.",
      buttonText: null,
      hasButton: false,
      icon: GraduationCap,
    },
    {
      date: "March 2021",
      title: "Govt Higher Secondary School -thucakaly",
      description:
        "I completed my higher secondary education at Govt Higher Secondary School -thucakaly. I focused on science and mathematics, which sparked my interest in technology and programming.",
      buttonText: null,
      hasButton: false,
      icon: Notebook,
    },
    {
      date: "April 2019",
      title: "SSLC - VN Memorial Higher Secondary School",
      description:
        "I completed my SSLC at VN Memorial Higher Secondary School. This foundational education helped me develop critical thinking and problem-solving skills.",
      buttonText: null,
      hasButton: false,
      icon: Pen,
    },
  ];
  export  const experienceLineData = [
    {
      date: "June 2024 - Present",
      title: "Full Stack Developer - Tamilloft startup.",
      description:
        "Working as a full stack developer, building scalable web applications using React, Node.js, and MongoDB. Focused on performance optimization and responsive UI development.",
      buttonText: null,
      hasButton: false,
      icon: Workflow,
    },
    {
      date: "September 2024 - oct 2024",
      title: "Full stack developer Intern - RexKnar",
      description:
        "Assisted in the development of a web development, optimized front-end components, and implemented API integrations using Next.js and Express.",
      buttonText: null,
      hasButton: false,
      icon: LampDesk,
    },
    {
      date: "July 2023 - august 2023",
      title: "Industry-Based Android Application Development with IOT Intern -NSIC, Chennai",
      description:
        "Developed an Android application integrated with IoT devices, focusing on real-time data processing and user-friendly interfaces. Gained experience in mobile app development and IoT technologies.",
      buttonText: null,
      hasButton: false,
      icon: ChevronsLeftRightEllipsis,
    },
  ];

  export const timelineTheme = {
    root: {
      direction: {
        horizontal: "sm:flex",
        vertical: "relative border-l border-gray-200 dark:border-gray-700",
      },
    },
    item: {
      root: {
        horizontal: "relative mb-6 sm:mb-0",
        vertical: "mb-10 ml-6",
      },
      content: {
        root: {
          base: "",
          horizontal: "mt-3 sm:pr-8",
          vertical: "",
        },
        body: {
          base: "mb-4 text-sm font-normal text-[var(--text-color)] dark:text-[var(--text-color)]",
        },
        time: {
          base: "mb-1 text-md font-normal leading-none text-[var(--text-color)] dark:text-[var(--text-color)]",
        },
        title: {
          base: "text-xl font-semibold text-[var(--text-color)] dark:text-[var(--text-color)]",
        },
      },
      point: {
        horizontal: "flex items-center",
        line: "hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700",
        marker: {
          base: {
            horizontal:
              "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
            vertical:
              "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
          },
          icon: {
            base: "h-4 w-4 text-black dark:text-black]",
            wrapper:
              "absolute -left-4 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--text-color2)] ring-4 ring-[var(--text-color2)] dark:bg-[var(--text-color2)] dark:ring-[var(--text-color2)]",
          },
        },
        vertical: "",
      },
    },
  };
  