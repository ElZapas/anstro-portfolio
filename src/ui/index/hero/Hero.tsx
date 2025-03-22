import { motion } from "framer-motion";
import { socialIcons } from "../../../data/icons.data";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Rectángulo deslizante */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 w-full h-full bg-azul-principal"
      />

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative text-white z-10 w-full px-16"
      >
        <h1 className="text-6xl md:text-8xl font-black leading-none">
          Fabian <br />
          <span className="text-gray-300">Anstro</span>
        </h1>
        <h2 className="text-xl md:text-2xl mt-4 text-gray-300">
          Desarrollador de software front-end
        </h2>
      </motion.div>

      {/* Redes Sociales */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-16 flex gap-4 text-gray-300"
      >
        <a
          href={socialIcons.GitHub.url}
          target="_blank"
          className="hover:text-white transition flex items-center gap-2"
        >
          <socialIcons.GitHub.icon />
          GitHub
        </a>
        <a
          href={socialIcons.LinkedIn.url}
          target="_blank"
          className="hover:text-white transition flex items-center gap-2"
        >
          <socialIcons.LinkedIn.icon />
          LinkedIn
        </a>
        <a
          href={socialIcons.Email.url}
          className="hover:text-white transition flex items-center gap-2"
        >
          <socialIcons.Email.icon />
          Contacto
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
