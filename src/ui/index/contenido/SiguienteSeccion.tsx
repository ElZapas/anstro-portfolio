import { motion } from "framer-motion";
import ArrowNav from "../../../components/index/ArrowNav";
import BentoGrid from "../../../components/index/BentoGrid";

const SiguienteSeccion = () => {
  return (
    <BentoGrid>
      {/* Sección de invitación o llamada a acción */}
      <motion.div
        className="col-span-5 row-span-3 bg-acento rounded-2xl p-9 flex items-center justify-center flex-col gap-7"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h2 className="text-6xl blackItalic text-texto-principal mb-4">
            ¡Descubre mis proyectos!
          </h2>
          <p className="text-2xl text-texto-principal mt-6 max-w-2xl mx-auto">
            Te invito a ver mi trabajo en acción. ¿Listo para explorar y
            descubrir todo lo que puedo hacer?
          </p>
        </div>
        <div className="w-full flex justify-center">
          <a
            href="/projects"
            className="bg-hero-principal text-white py-3 px-6 rounded-lg text-xl font-semibold hover:bg-azul-claro transition duration-300 ease-in-out"
          >
            Ver proyectos
          </a>
        </div>
      </motion.div>

      {/* Sección de retorno al Hero */}
      <motion.div
        className="col-span-5 row-span-2 bg-acento rounded-2xl flex justify-center items-center p-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h3 className="text-3xl font-semibold italic text-texto-principal mb-4">
            ¿Volver al inicio?
          </h3>
          <ArrowNav
            targetId="hero"
            className="w-full flex justify-center transform rotate-180"
          />
        </div>
      </motion.div>
    </BentoGrid>
  );
};

export default SiguienteSeccion;
