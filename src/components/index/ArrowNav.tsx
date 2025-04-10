/**
 * @description Flecha de navegación
 * @param {string} targetId - ID de la siguiente sección a la que se desplazará
 * @param {string} className - Clases adicionales para personalizar el componente
 * Este componente es una flecha de navegación que permite desplazarse
 * @example <arrownav targetId="contenido"/>
 */
import { miscIcons } from "../../data/icons.data";

interface ArrowNavProps {
  targetId: string;
  className?: string;
}

const ArrowNav = ({ targetId, className }: ArrowNavProps) => {
  const scrollToSection = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={scrollToSection}
      className={`p-2 bg-transparent text-texto-principal rounded-full transition ${className}`}
    >
      <miscIcons.ArrowDown size={40} />
    </div>
  );
};

export default ArrowNav;

