'use client'
import { motion } from 'framer-motion';

const Carrousel = () => {
    const slides = [
        { id: 1, src: 'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png', alt: 'React' },
        { id: 2, src: 'https://cdn.worldvectorlogo.com/logos/typescript-2.svg', alt: 'TypeScript' },
        { id: 3, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png', alt: 'JavaScript' },
        { id: 4, src: 'https://www.svgrepo.com/show/368858/nextjs.svg', alt: 'NextJs' },
        { id: 5, src: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png', alt: 'NodeJs' },
        { id: 7, src: 'https://cdn.worldvectorlogo.com/logos/nestjs.svg', alt: 'NestJs' },
        { id: 8, src: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png', alt: 'Redux' },
        { id: 9, src: 'https://www.svgrepo.com/show/333609/tailwind-css.svg', alt: 'TailwindCss' },
        { id: 10, src: 'https://www.svgrepo.com/show/354099/mysql.svg', alt: 'MySql' },
      ];

    return (
        <div className="w-full overflow-hidden my-12">
        <motion.div 
          className="flex mx-4 md:mx-10" 
          animate={{ x: ['0%', '-100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {slides.map((slide) => (
            <img 
              key={slide.id}
              src={slide.src}
              alt={slide.alt}
              className="w-32 h-32 object-contain sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 mr-4 md:mr-8" 
            />
          ))}
          {slides.map((slide) => (
            <img 
              key={slide.id + slides.length}
              src={slide.src}
              alt={slide.alt}
              className="w-32 h-32 object-contain sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 mr-4 md:mr-8" 
            />
          ))}
        </motion.div>
      </div>
    )
}

export default Carrousel;