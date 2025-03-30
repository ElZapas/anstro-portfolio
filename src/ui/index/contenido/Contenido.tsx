import Intro from "./Intro";
import SobreMi from "./SobreMi";
import Habilidades from "./Habilidades";

const Contenido = () => {
  return (
    <section id="contenido" className="flex flex-col">
      {/* Sección 1: Introducción */}
      <div>
        <Intro />
      </div>

      {/* Sección 2: Sobre Mí */}
      <div id="sobre-mi" >
        <SobreMi />
      </div>

      {/* Sección 3: Habilidades y Herramientas */}
      <div id="habilidades" className="h-screen">
        <Habilidades />
      </div>
    </section>
  );
};

export default Contenido;
