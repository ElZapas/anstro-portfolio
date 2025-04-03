import ArrowNav from "../../../components/index/ArrowNav";
import BentoGrid from "../../../components/index/BentoGrid";
import { techIcons } from "../../../data/icons.data";

const Habilidades = () => {
  return (
    <BentoGrid>
      {/* Contenedor grande: Tecnologías */}
      <div className="col-span-4 row-span-5 rounded-xl bg-hero-principal p-4 shadow-lg">
        <h2 className="text-4xl font-bold text-white">Tecnologías</h2>

        {/* Stack Principal */}
        <h3 className="font-semibold text-gray-300 py-3 uppercase text-base">
          Stack principal
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 pb-4">
          {Object.entries(techIcons.frontend).map(
        ([name, { icon: Icon, color }]) => (
          <div
            key={name}
            className="p-3 rounded-lg flex items-center hover:scale-105 transition-transform"
            style={{ backgroundColor: color }}
          >
            <Icon size={24} className="text-white mr-3" />
            <span className="text-white text-sm font-medium">
          {name}
            </span>
          </div>
        )
          )}
        </div>

        {/* Testing y formateo */}
        <h3 className="font-semibold text-gray-300 py-3 uppercase text-base">
          Testing y formateo
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 pb-4">
          {Object.entries(techIcons.testing).map(
        ([name, { icon: Icon, color }]) => (
          <div
            key={name}
            className="p-3 rounded-lg flex items-center hover:scale-105 transition-transform"
            style={{ backgroundColor: color }}
          >
            <Icon size={24} className="text-white mr-3" />
            <span className="text-white text-sm font-medium">
          {name}
            </span>
          </div>
        )
          )}
        </div>

        {/* Manejo de bases de datos */}
        <h3 className="font-semibold text-gray-300 py-3 uppercase text-base">
          Bases de datos
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 pb-4">
          {Object.entries(techIcons.databases).map(
        ([name, { icon: Icon, color }]) => (
          <div
            key={name}
            className="p-3 rounded-lg flex items-center hover:scale-105 transition-transform"
            style={{ backgroundColor: color }}
          >
            <Icon size={24} className="text-white mr-3" />
            <span className="text-white text-sm font-medium">
          {name}
            </span>
          </div>
        )
          )}
        </div>

        {/* Herramientas y metodologías */}
        <h3 className="font-semibold text-gray-300 py-3 uppercase text-base">
          Herramientas
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 pb-4">
          {Object.entries(techIcons.tools).map(
        ([name, { icon: Icon, color }]) => (
          <div
            key={name}
            className="p-3 rounded-lg flex items-center transition-transform"
            style={{ backgroundColor: color }}
          >
            <Icon size={24} className="text-white mr-3" />
            <span className="text-white text-sm font-medium">
          {name}
            </span>
          </div>
        )
          )}
        </div>
      </div>



      {/* Contenedor pequeño: Top Skills */}
      <div className="col-span-1 row-span-4 rounded-xl bg-gradient-to-br from-acento to-azul-medio p-2 flex flex-col justify-center items-center shadow-md">
        <h3 className="text-lg font-semibold text-white mb-3 text-center">
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
            <div
              key={name}
              className="p-4 rounded-lg flex items-center gap-2 shadow-sm bg-opacity-80 justify-center"
              style={{ backgroundColor: color }}
            >
              <Icon size={16} className="text-white" />
              <span className="text-white font-medium text-xs">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Flecha de navegación */}
      <div className="col-span-1 row-span-1 bg-blue-500 rounded-xl p-4 flex items-center justify-center">
        <ArrowNav targetId="siguiente" className="w-full flex justify-center"/>
      </div>
    </BentoGrid>
  );
};

export default Habilidades;
