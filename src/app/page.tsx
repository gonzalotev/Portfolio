"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Carrousel } from "@/components";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh)] bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 mt-10 md:mt-0">
      <motion.div
        className="max-w-3xl px-4 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl sm:mt-10 font-bold mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          ¡Hola! Soy Gonzalo
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Soy un desarrollador full stack web apasionado por crear experiencias
          digitales innovadoras.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Aquí puedes encontrar algunos de mis proyectos recientes y explorar
          más sobre mi trayectoria y habilidades.
        </motion.p>
        <Carrousel />
        <motion.div
          className="flex justify-center space-x-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Link href="/Projects" legacyBehavior>
            <a className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
              Ver mis proyectos
            </a>
          </Link>
          <Link href="/Contact" legacyBehavior>
            <a className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors duration-300">
              Contactar conmigo
            </a>
          </Link>
        </motion.div>
        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          ¡Explora mi portfolio y no dudes en contactarme para colaboraciones o
          consultas!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Home;
