import { motion } from "framer-motion";
import { socialIcons, miscIcons } from "../../../data/icons.data";

const squareColors = ["#005bb5", "#004c99", "#003d7f", "#002f66", "#001f4d"]; // Tonos oscuros
const scrollToNextSection = () => {
  const nextSection = document.getElementById("contenido");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-hero-principal overflow-hidden">
      {/* Rectángulo deslizante */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 w-full h-full bg-azul-principal flex items-center justify-center"
      ></motion.div>

      {/* Animación de Cuadrados */}
      <div className="absolute inset-0 flex justify-end items-center">
        {squareColors.map((color, index) => (
          <motion.div
            key={index}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.5 + index * 0.2,
              ease: "easeInOut"
            }}
            className="w-32 h-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
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
        transition={{ delay: 2.5, duration: 1 }}
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

      {/* Botón de scroll */}
      <motion.button
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
        onClick={scrollToNextSection}
        className="absolute bottom-10 right-10 text-gray-300 hover:text-white transition"
        whileHover={{ y: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <miscIcons.ArrowDown size={40} />
      </motion.button>
    </section>
  );
};

export default Hero;
