import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Photo from "../assets/ZOUBAIR.png"; // Ensure it's a transparent PNG

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-16 relative overflow-hidden"
    >
      {/* --- Background floating shapes --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 left-10 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
        />
      </div>

      {/* --- Row 1: Image and Name --- */}
      <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        {/* Profile Image with magic animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: [1, 1.05, 1],
            x: [0, 10, -10, 0],
            y: [0, -10, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl"
        >
          <img
            src={Photo}
            alt="Zoubair Mabrouk"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Typing Name Animation */}
        {/* Typing Name Animation */}
<motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="text-4xl md:text-6xl font-bold text-gradient text-center md:text-left"
>
  {["H", "i", ",", " ", "I", "'", "m", " ", "Z", "o", "u", "b", "a", "i", "r", " ", "M", "a", "b", "r", "o", "u", "k"].map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: index * 0.15,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "loop",
        duration: 0.05,
      }}
    >
      {char}
    </motion.span>
  ))}
</motion.h1>

      </div>

      {/* --- Row 2: Subtitle --- */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8 max-w-3xl text-lg font-bold md:text-2xl text-gray-900 z-10"
      >
        Software Engineer & Scientific Researcher — building elegant, scalable, and meaningful app experiences.
      </motion.p>

      {/* --- Row 3: Social Media Icons --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex space-x-6 mt-10 z-10"
      >
        <motion.a
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/ZoubairMabrouk"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-black shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FaGithub size={24} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/zoubair-mabrouk-8026b923a/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-700 hover:text-blue-800 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FaLinkedin size={24} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
          href="mailto:zoubairmabrouk55@gmail.com"
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-600 hover:text-red-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FaEnvelope size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
