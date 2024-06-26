'use client'
import React from "react";
import Link from "next/link";
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const iconVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="flex justify-between items-center fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 p-3 shadow-lg md:p-6 md:h-16">
      <div className="flex items-center justify-center flex-1 space-x-4">
        <Link href="/" legacyBehavior>
          <motion.a
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-yellow-500 transition-colors duration-300 block"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial="hidden"
            animate="visible"
            variants={iconVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaHome className="text-2xl md:text-3xl" />
          </motion.a>
        </Link>
        <Link href="/About" legacyBehavior>
          <motion.a
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-yellow-500 transition-colors duration-300 block"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial="hidden"
            animate="visible"
            variants={iconVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaInfoCircle className="text-2xl md:text-3xl" />
          </motion.a>
        </Link>
        <Link href="/Projects" legacyBehavior>
          <motion.a
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-yellow-500 transition-colors duration-300 block"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial="hidden"
            animate="visible"
            variants={iconVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaProjectDiagram className="text-2xl md:text-3xl" />
          </motion.a>
        </Link>
        <Link href="/Contact" legacyBehavior>
          <motion.a
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-yellow-500 transition-colors duration-300 block"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial="hidden"
            animate="visible"
            variants={iconVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaEnvelope className="text-2xl md:text-3xl" />
          </motion.a>
        </Link>
      </div>
      <motion.button
        onClick={toggleTheme}
        className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-yellow-500 transition-colors duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        initial="hidden"
        animate="visible"
        variants={iconVariants}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {theme === 'light' ? <FaMoon className="text-2xl md:text-3xl" /> : <FaSun className="text-2xl md:text-3xl" />}
      </motion.button>
    </div>
  );
}

export default Navbar;
