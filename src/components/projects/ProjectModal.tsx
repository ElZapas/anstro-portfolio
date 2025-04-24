import type { FC } from "react";
import type { Proyecto } from "../../data/projects.data";
import { techIcons } from "../../data/icons.data";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface ProjectModalProps {
  proyecto: Proyecto;
  onClose: () => void;
}

const ProjectModal: FC<ProjectModalProps> = ({ proyecto, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="scroll-custom-modals h-full overflow-y-auto bg-card rounded-2xl p-6 max-w-4xl w-full max-h-[85vh] relative text-texto-principal"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-texto-secundario hover:text-texto-principal"
        >
          <IoClose size={24} />
        </button>

        {/* Título */}
        <h2 className="text-3xl font-bold mb-2">{proyecto.nombre}</h2>
        <p className="text-texto-secundario mb-4">{proyecto.detalles.fecha}</p>

        {/* Imagen */}
        <div className="w-full h-98 bg-azul-medio rounded-xl overflow-hidden flex items-center justify-center mb-6">
          <img
            src={proyecto.imagen}
            alt={`Imagen de ${proyecto.nombre}`}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-6">
          {proyecto.tecnologias.map((tec) => {
            const found = Object.values(techIcons)
              .flatMap((cat) => Object.entries(cat))
              .find(([key]) => key.toLowerCase() === tec.toLowerCase());

            if (!found) return null;
            const [name, { icon: Icon, color }] = found;

            return (
              <div
                key={name}
                className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium"
                style={{ backgroundColor: `${color}22`, color }}
              >
                <Icon size={16} />
                {name}
              </div>
            );
          })}
        </div>

        {/* Proyecto de práctica */}
        {proyecto.esPractica && (
          <div className="flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-azul-medio/20 text-sm font-medium text-texto-secundario">
            <img
              src="/images/nhllogo.png"
              alt="Logo práctica"
              className="w-6 h-6"
            />
            <span>Este es un proyecto de prácticas.</span>
          </div>
        )}

        {/* Descripción larga */}
        <p className="mb-4 leading-relaxed text-lg">
          {proyecto.detalles.descripcionLarga}
        </p>

        {/* Funcionalidades */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Funcionalidades</h3>
          <ul className="list-disc list-inside space-y-1 text-texto-secundario">
            {proyecto.detalles.funcionalidades.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Rol, Retos, Aprendizajes */}
        <div className="grid md:grid-cols-3 gap-4">
          {proyecto.detalles.rol && (
            <div>
              <h4 className="font-semibold">Rol</h4>
              <p className="text-texto-secundario text-sm">
                {proyecto.detalles.rol}
              </p>
            </div>
          )}
          {proyecto.detalles.retos && (
            <div>
              <h4 className="font-semibold">Retos</h4>
              <p className="text-texto-secundario text-sm">
                {proyecto.detalles.retos}
              </p>
            </div>
          )}
          {proyecto.detalles.aprendizajes && (
            <div>
              <h4 className="font-semibold">Aprendizajes</h4>
              <p className="text-texto-secundario text-sm">
                {proyecto.detalles.aprendizajes}
              </p>
            </div>
          )}
        </div>

        {/* Enlaces */}
        <div className="flex gap-4 mt-6">
          {proyecto.url && (
            <a
              href={proyecto.url}
              target="_blank"
              className="text-color-acento underline hover:text-color-hover"
            >
              Ver Proyecto
            </a>
          )}
          {proyecto.repositorio && !proyecto.esEmpresarial && (
            <a
              href={proyecto.repositorio}
              target="_blank"
              className="text-color-acento underline hover:text-color-hover"
            >
              Ver Código
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
