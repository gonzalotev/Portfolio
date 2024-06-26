"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/gonzalotev",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/gonzalotevez/",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:gonzalotevez222@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">¡Contáctame!</h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          Estoy disponible para colaboraciones y proyectos. ¡Hablemos!
        </p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-yellow-500 transition-colors duration-300"
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
