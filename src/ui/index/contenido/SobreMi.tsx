import BentoGrid from "../../../components/index/BentoGrid";
import ArrowNav from "../../../components/index/ArrowNav";
import Timeline from "../../../components/index/Timeline";
import { motion } from "framer-motion";

const SobreMi = () => {
  return (
    <BentoGrid>
      {/* Línea de tiempo - Espina de Ishikawa */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="col-span-4 row-span-3 bg-azul-claro rounded-xl p-8 relative"
      >
        <h2 className="text-3xl font-black italic relative">Mi Trayectoria</h2>
        <Timeline />
      </motion.div>

      {/* Empresa actual */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="col-span-1 row-span-4 bg-azul-medio rounded-xl p-8 relative flex flex-col justify-center"
      >
        <h3 className="text-3xl font-black italic relative mb-6">
          Trabajo Actual
        </h3>
        <p className="text-lg mb-3">Enero 2025 - Mayo 2025</p>
        <p className="text-lg mb-3">
          NEONHOUSELED S.A.C | Decoración de interiores
        </p>
        <p className="text-lg mb-3">Contrato de prácticas</p>
        <div className="absolute inset-1"></div>
      </motion.div>

      {/* Habilidades blandas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="col-span-2 row-span-2 bg-azul-pastel rounded-xl p-8 relative flex flex-col justify-center"
      >
        <h3 className="text-3xl font-black italic relative pb-3">
          Habilidades Blandas
        </h3>
        <ul className="list-disc pl-4 text-lg font-medium">
          <li>Trabajo en equipo</li>
          <li>Comunicación efectiva</li>
          <li>Adaptabilidad</li>
        </ul>
        <div className="absolute inset-1"></div>
      </motion.div>

      {/* Roles desempeñados */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="col-span-2 row-span-2 bg-azul-pastel rounded-xl p-10 relative flex flex-col justify-center"
      >
        <h3 className="text-3xl font-black italic relative pb-3">
          Roles Desempeñados
        </h3>
        <ul className="list-disc pl-4 text-lg font-medium">
          <li>Diseño y desarrollo de interfaces</li>
          <li>Optimización de performance</li>
          <li>Gestión de proyectos en Agile</li>
        </ul>
        <div className="absolute inset-1"></div>
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
          targetId="habilidades"
          className="w-full h-full flex justify-center items-end"
        />
      </motion.div>
    </BentoGrid>
  );
};

export default SobreMi;

