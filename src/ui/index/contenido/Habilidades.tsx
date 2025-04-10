import ArrowNav from "../../../components/index/ArrowNav";
import BentoGrid from "../../../components/index/BentoGrid";
import { techIcons } from "../../../data/icons.data";
import { motion } from "framer-motion";

const Habilidades = () => {
  return (
    <BentoGrid>
      {/* Contenedor grande: Tecnologías */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="col-span-4 row-span-5 rounded-xl bg-hero-principal p-5 pr-2 shadow-lg flex flex-col justify-between overflow-auto"
      >
        <div className="scroll-custom pr-4 h-full overflow-y-auto">
          <h2 className="text-5xl font-black italic relative text-texto-principal pl-1">
            Tecnologías
          </h2>

          {/* Stack Principal */}
          <h3 className="font-semibold text-texto-principal py-3 uppercase text-sm sm:text-base md:text-lg pl-1">
            Stack principal
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 pb-4 pl-1">
            {Object.entries(techIcons.frontend).map(
              ([name, { icon: Icon, color }]) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 rounded-lg flex items-center"
                  style={{ backgroundColor: color }}
                >
                  <Icon size={24} className="text-texto-principal mr-3" />
                  <span className="text-texto-principal text-xs sm:text-sm font-medium">
                    {name}
                  </span>
                </motion.div>
              )
            )}
          </div>

          {/* Testing y formateo */}
          <h3 className="font-semibold text-texto-principal py-3 uppercase text-sm sm:text-base md:text-lg">
            Testing y formateo
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 pb-4">
            {Object.entries(techIcons.testing).map(
              ([name, { icon: Icon, color }]) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 rounded-lg flex items-center"
                  style={{ backgroundColor: color }}
                >
                  <Icon size={24} className="text-texto-principal mr-3" />
                  <span className="text-texto-principal text-xs sm:text-sm font-medium">
                    {name}
                  </span>
                </motion.div>
              )
            )}
          </div>

          {/* Bases de datos */}
          <h3 className="font-semibold text-texto-principal py-3 uppercase text-sm sm:text-base md:text-lg">
            Bases de datos
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 pb-4">
            {Object.entries(techIcons.databases).map(
              ([name, { icon: Icon, color }]) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 rounded-lg flex items-center"
                  style={{ backgroundColor: color }}
                >
                  <Icon size={24} className="text-texto-principal mr-3" />
                  <span className="text-texto-principal text-xs sm:text-sm font-medium">
                    {name}
                  </span>
                </motion.div>
              )
            )}
          </div>

          {/* Herramientas */}
          <h3 className="font-semibold text-texto-principal py-3 uppercase text-sm sm:text-base md:text-lg">
            Herramientas
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 pb-4">
            {Object.entries(techIcons.tools).map(
              ([name, { icon: Icon, color }]) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 rounded-lg flex items-center"
                  style={{ backgroundColor: color }}
                >
                  <Icon size={24} className="text-texto-principal mr-3" />
                  <span className="text-texto-principal text-xs sm:text-sm font-medium">
                    {name}
                  </span>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.div>

      {/* Contenedor pequeño: Top Skills */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="col-span-1 row-span-4 rounded-xl bg-gradient-to-br from-acento to-azul-medio p-2 flex flex-col justify-center items-center shadow-md"
      >
        <h3 className="text-lg font-semibold text-texto-principal mb-3 text-center">
          Stack con el que estoy trabajando:
        </h3>
        <div className="flex flex-col items-center gap-2">
          {[
            {
              name: "React",
              icon: techIcons.frontend.React.icon,
              color: techIcons.frontend.React.color,
            },
            {
              name: "Tailwind",
              icon: techIcons.frontend.Tailwind.icon,
              color: techIcons.frontend.Tailwind.color,
            },
            {
              name: "Vite",
              icon: techIcons.testing.Vite.icon,
              color: techIcons.testing.Vite.color,
            },
            {
              name: "ESLint",
              icon: techIcons.testing.ESLint.icon,
              color: techIcons.testing.ESLint.color,
            },
            {
              name: "Git",
              icon: techIcons.tools.Git.icon,
              color: techIcons.tools.Git.color,
            },
            {
              name: "GitHub",
              icon: techIcons.tools.GitHub.icon,
              color: techIcons.tools.GitHub.color,
            },
          ].map(({ name, icon: Icon, color }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-4 rounded-lg flex items-center gap-2 shadow-sm bg-opacity-80 justify-center"
              style={{ backgroundColor: color }}
            >
              <Icon size={16} className="text-texto-principal" />
              <span className="text-texto-principal font-medium text-xs">{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Flecha de navegación */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="col-span-1 row-span-1 bg-neon rounded-xl p-4 flex items-center justify-center"
      >
        <ArrowNav targetId="siguiente" className="w-full flex justify-center" />
      </motion.div>
    </BentoGrid>
  );
};

export default Habilidades;

