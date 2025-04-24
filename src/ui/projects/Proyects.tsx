import { useState } from "react";
import ProjectCard from "../../components/projects/ProjectCard";
import ProjectModal from "../../components/projects/ProjectModal";
import { Proyectos } from "../../data/projects.data";
import type { Proyecto } from "../../data/projects.data";

const Proyects = () => {
  const [modalProyecto, setModalProyecto] = useState<Proyecto | null>(null);

  return (
    <section className="px-4 md:px-10 lg:px-20 py-12 pt-16 bg-fondo-principal text-texto-principal">

      {/* Cards */}
      <div id="proyectos" className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Proyectos.map((proyecto: Proyecto) => (
          <div
            key={proyecto.id}
            onClick={() => setModalProyecto(proyecto)}
            className="cursor-pointer"
          >
            <ProjectCard proyecto={proyecto} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalProyecto && (
        <ProjectModal proyecto={modalProyecto} onClose={() => setModalProyecto(null)} />
      )}
    </section>
  );
};

export default Proyects;

