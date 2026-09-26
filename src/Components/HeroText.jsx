/* eslint-disable no-unused-vars */
import React from "react";
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

export default function HeroText() {
  const words = ["Modern", "Functional", "User-Friendly"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const handleDownloadResume = () => {
    const resumeUrl = "/Resume_of_Mahinul_Tanvir_Mahin.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Mahinul_Tanvir_Mahin_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop view */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-4xl font-medium"
        >
          Hi, I'm Mahin
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="text-5xl font-medium text-neutral-300"
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-6xl md:text-7xl xl:text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.7 }}
          >
            Web & Mobile Applications
          </motion.p>
          <motion.button
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
            onClick={handleDownloadResume}
            className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-royal to-lavender text-white font-medium hover:shadow-lg hover:shadow-royal/50 transition-all duration-300 hover:-translate-y-1"
          >
            Download Resume
          </motion.button>
        </div>
      </div>

      {/* mobile view */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-4xl font-medium"
        >
          Hi, I'm Mahin
        </motion.p>
        <div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="text-5xl font-black text-neutral-300"
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-3xl sm:text-4xl"
            />
          </motion.div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
            className="text-3xl font-black text-neutral-300 sm:text-4xl"
          >
            Web & Mobile Applications
          </motion.p>
        </div>
        <motion.button
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.1 }}
          onClick={handleDownloadResume}
          className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-royal to-lavender text-white font-medium hover:shadow-lg hover:shadow-royal/50 transition-all duration-300 hover:-translate-y-1"
        >
          Download Resume
        </motion.button>
      </div>
    </div>
  );
}
