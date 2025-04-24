import BentoGrid from "../../components/index/BentoGrid";
import ArrowNav from "../../components/index/ArrowNav";
import { motion } from "framer-motion";
import { miscIcons } from "../../data/icons.data";

const ProyectosIntro = () => {
  const ArrowDown = miscIcons.ArrowDown;

  return (
    <BentoGrid>
      {/* Título principal */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative col-span-5 row-span-3 bg-azul-medio rounded-2xl p-6 flex flex-col justify-center shadow-lg"
      >
        <h2 className="text-3xl md:text-7xl font-black italic text-texto-principal">
          Proyectos Destacados
        </h2>
      </motion.div>

      {/* Descripción */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative col-span-3 row-span-2 bg-azul-pastel rounded-2xl p-6 flex flex-col justify-center shadow-lg"
      >
        <p className="text-texto-principal text-xl font-light italic">
          Estos son algunos de mis proyectos personales y colaborativos. Cada uno refleja mi evolución, tecnologías utilizadas, aprendizajes clave y los retos que enfrenté.
        </p>
      </motion.div>

      {/* Flecha de navegación */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="col-span-2 row-span-2 flex items-end justify-center bg-neon rounded-xl pb-6 relative"
      >
        <div className="absolute w-full h-full flex items-center justify-center text-lg font-bold italic">
            <p className="">Click aqui para ver los productos</p>
        </div>

        <ArrowNav
          targetId="sobre"
          className="w-full h-full flex justify-center items-end z-10"
        />
      </motion.div>
    </BentoGrid>
  );
};

export default ProyectosIntro;
