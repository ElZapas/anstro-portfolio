import BentoGrid from "../../../components/index/BentoGrid";
import ArrowNav from "../../../components/index/ArrowNav";
import Timeline from "../../../components/index/Timeline";

const SobreMi = () => {
  return (
    <BentoGrid>
      {/* Línea de tiempo - Espina de Ishikawa */}
<div className="col-span-4 row-span-3 bg-azul-claro rounded-xl p-8 relative">
  <h2 className="text-3xl font-black italic relative">Mi Trayectoria</h2>

  {/* Componente de línea de tiempo */}
  <Timeline />
</div>

      {/* Empresa actual */}
      <div className="col-span-1 row-span-4 bg-azul-medio rounded-xl p-8 relative flex flex-col justify-center">
        <h3 className="text-3xl font-black italic relative mb-6">
          Trabajo Actual
        </h3>
        <p className="text-lg mb-3">Enero 2025 - Mayo 2025</p>
        <p className="text-lg mb-3">
          NEONHOUSELED S.A.C | Decoracion de interiores
        </p>
        <p className="text-lg mb-3">Contrado de practicas</p>
        <div className="absolute inset-1"></div>
      </div>

      {/* Habilidades blandas */}
      <div className="col-span-2 row-span-2 bg-azul-pastel rounded-xl p-8 relative flex flex-col justify-center">
        <h3 className="text-3xl font-black italic relative pb-3 ">
          Habilidades Blandas
        </h3>
        <ul className="list-disc pl-4 text-lg font-medium">
          <li>Trabajo en equipo</li>
          <li>Comunicación efectiva</li>
          <li>Adaptabilidad</li>
        </ul>
        <div className="absolute inset-1"></div>
      </div>

      {/* Roles desempeñados */}
      <div className="col-span-2 row-span-2 bg-azul-pastel rounded-xl p-10 relative flex flex-col justify-center">
        <h3 className="text-3xl font-black italic relative pb-3">
          Roles Desempeñados
        </h3>
        <ul className="list-disc pl-4 text-lg font-medium">
          <li>Diseño y desarrollo de interfaces</li>
          <li>Optimización de performance</li>
          <li>Gestión de proyectos en Agile</li>
        </ul>
        <div className="absolute inset-1"></div>
      </div>

      {/* Flecha de navegación */}

      <div className="col-span-1 row-span-1 flex items-end justify-center bg-neon rounded-xl pb-6 relative">
        <ArrowNav
          targetId="habilidades"
          className="w-full h-full flex justify-center items-end"
        />
      </div>
    </BentoGrid>
  );
};

export default SobreMi;
