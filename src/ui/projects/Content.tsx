import Intro from "./AboutProyects";
import Proyects from "./Proyects";

const Content = () => {
  return (
    <section id="contenido" className="flex flex-col overflow-hidden">
      {/* Sección 1: Introducción */}
      <div>
        <Intro />
      </div>
      {/* Sección 2: Proyectos */}

      <div id="sobre" className="min-h-screen">
        <Proyects />
      </div>
    </section>
  );
};

export default Content;
