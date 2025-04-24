import type { FC } from "react";
import { techIcons } from "../../data/icons.data";
import type { Proyecto } from "../../data/projects.data";
import { motion } from "framer-motion";

interface ProjectCardProps {
  proyecto: Proyecto; 
}

const ProjectCard: FC<ProjectCardProps> = ({ proyecto }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl p-4 shadow-lg text-texto-principal flex flex-col gap-4"
    >
        {/* Imagen */}
        <div className="w-full h-40 bg-azul-medio rounded-xl overflow-hidden flex items-center justify-center mb-4">
          <img
            src={proyecto.imagen}
            alt={`Imagen de ${proyecto.nombre}`}
            className="object-cover w-full h-full"
          />
        </div>

      {/* Nombre del proyecto con imagen de práctica */}
      <div className="flex items-center gap-2">
        {proyecto.esPractica && (
          <img
            src="/images/nhllogo.png"
            alt="Logo práctica"
            className="w-6 h-6"
          />
        )}
        <h3 className="text-2xl font-bold">{proyecto.nombre}</h3>
      </div>

      {/* Descripción corta */}
      <p className="text-texto-secundario">{proyecto.descripcionCorta}</p>

      {/* Tecnologías usadas */}
      <div className="flex flex-wrap gap-2 mt-2">
        {proyecto.tecnologias.map((tec: String) => {
          const found = Object.values(techIcons).flatMap((cat) =>
            Object.entries(cat)
          ).find(([key]) => key.toLowerCase() === tec.toLowerCase());

          if (!found) return null;

          const [name, { icon: Icon, color }] = found;

          return (
            <div
              key={name}
              className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium"
              style={{
                backgroundColor: `${color}22`,
                color: color,
              }}
            >
              <Icon size={16} />
              {name}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
