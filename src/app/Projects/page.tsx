"use client";
import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";

const Projects = () => {
  return (
    <div className="container mx-auto mt-20 p-6">
      <motion.section
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <h1 className="text-3xl font-bold mb-4 text-center">Mis Proyectos</h1>
        <h2 className="text-2xl font-semibold mb-2 text-center">
          Estos son algunos proyectos en los que participé
        </h2>
      </motion.section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {project.description}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Estado: {project.state}
              </p>
              <div className="flex flex-wrap mb-4 justify-center items-center">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Ver Proyecto
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
