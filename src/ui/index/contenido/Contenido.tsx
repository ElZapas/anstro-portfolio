import Intro from "./Intro";
import SobreMi from "./SobreMi";
import Habilidades from "./Habilidades";
import SiguienteSeccion from "./SiguienteSeccion";

const Contenido = () => {
  return (
    <section id="contenido" className="flex flex-col overflow-hidden">
      {/* Sección 1: Introducción */}
      <div>
        <Intro />
      </div>

      {/* Sección 2: Sobre Mí */}
      <div id="sobre-mi" >
        <SobreMi />
      </div>

      {/* Sección 3: Habilidades y Herramientas */}
      <div id="habilidades" className="min-h-screen">
        <Habilidades />
      </div>

      <div id="siguiente" className="h-screen">
        <SiguienteSeccion />
      </div>
    </section>
  );
};

export default Contenido;
