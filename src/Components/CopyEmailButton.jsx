/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { images } from "../Constant/image"; // Make sure the paths and images are correct
import { AnimatePresence, motion } from "framer-motion";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "tanvrimahin607@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      onClick={copyToClipboard}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={copied ? "copied-true" : "copied-false"}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center gap-2"
        >
          {copied ? (
            <>
              <img src={images.copyDone} alt="copy done" className="w-5" />
              <span>Email has Copied</span>
            </>
          ) : (
            <>
              <img src={images.copyEmail} alt="copy icon" className="w-5" />
              <span>Copy Email Address</span>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
