"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "gonzalo-tevez.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex mt-10 items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-center">
      <motion.div
        className="container mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-105"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Un poco sobre mí
        </motion.h1>

        <motion.section
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Experiencia Laboral</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold">Experis - Banco Galicia</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                Desempeñé el rol de desarrollador en varios proyectos internos
                utilizando tecnologías del ecosistema de TypeScript.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                INDEC - Instituto Nacional de Estadística y Censos
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                Participé en el desarrollo de grandes sistemas de decodificación
                de datos y algunas aplicaciones móviles utilizando tecnologías
                del ecosistema de JavaScript.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Mi Educación</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold">
                Universidad de la Ciudad de Buenos Aires
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                Licenciatura en Tecnologías Digitales
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                Instituto Superior Nuestra Señora de la Paz
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                Analista de Sistemas de Información
              </p>
            </div>
          </div>
        </motion.section>

        <motion.button
          onClick={downloadCV}
          className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-full hover:bg-blue-700 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Descargar CV
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
