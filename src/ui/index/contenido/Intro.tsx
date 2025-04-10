import BentoGrid from "../../../components/index/BentoGrid";
import ArrowNav from "../../../components/index/ArrowNav";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <BentoGrid>
      {/* Contenedor Nombre y presentación */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative col-span-2 row-span-5 flex flex-col justify-center p-6 bg-azul-claro text-texto-principal rounded-xl overflow-hidden"
      >
        <h1 className="text-5xl font-black italic relative">¿Quién soy yo?</h1>
        <p className="mt-2 text-xl font-semibold">
          Desarrollador Front-End Junior | 20 años
        </p>
        <p className="mt-4 text-lg font-light italic">
          "Transformo ideas en experiencias digitales, combinando código limpio
          con diseño minimalista."
        </p>
      </motion.div>

      {/* Imagen Abstracta 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="col-span-2 row-span-2 flex items-center justify-center bg-gradient-to-br from-azul-medio to-acento rounded-xl relative"
      >
        <div className="w-24 h-24 bg-white rounded-full shadow-lg"></div>
      </motion.div>

      {/* Imagen Abstracta 2 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="col-span-1 row-span-4 flex items-center justify-center bg-gradient-to-br from-acento to-azul-medio rounded-xl relative"
      >
        <div className="w-20 h-20 bg-white rounded-lg shadow-lg"></div>
      </motion.div>

      {/* Cápsulas de Información */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="col-span-2 row-span-3 grid grid-cols-2 gap-4"
      >
        <div className="relative p-4 bg-azul-medio text-texto-principal rounded-xl flex flex-col justify-center text-center">
          <p className="text-2xl font-semibold pb-2">📍 Ubicación:</p>
          <p className="text-lg font-medium italic">Lima, Perú</p>
          <br className="px-3" />
          <p className="text-2xl font-semibold pb-2 ">🎨 Intereses:</p>
          <p className="text-lg font-light italic">
            UX/UI, diseño minimalista, desarrollo front-end
          </p>
        </div>
        <div className="relative p-4 bg-azul-medio text-texto-principal rounded-xl flex flex-col justify-center text-center">
          <p className="text-2xl font-semibold pb-2">🚀 Objetivo:</p>
          <p className="text-lg font-light italic">
            Aprender y crecer en desarrollo web
          </p>
          <br />
          <p className="text-2xl font-semibold pb-2">🖥️ Stack:</p>
          <p className="text-lg font-light italic">React | Astro | Tailwind</p>
        </div>
      </motion.div>

      {/* Flecha de navegación */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="col-span-1 row-span-1 flex items-end justify-center bg-neon rounded-xl pb-6 relative"
      >
        <ArrowNav
          targetId="sobre-mi"
          className="w-full h-full flex justify-center items-end"
        />
      </motion.div>
    </BentoGrid>
  );
};

export default Intro;
