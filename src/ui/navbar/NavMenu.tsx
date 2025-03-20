/**
 * @abstract Componente NavMenu
 * @description Componente de la lista de enlaces del menú de navegación
 * Este componente hace un map de los enlaces del menú y los muestra en una lista
 */

import { menuLinks } from "../../data/menulinks.data";

const NavMenu = () => {
  return (
    <ul className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 p-6 md:p-0">
      {menuLinks.map((link) => (
        <li key={link.path}>
          <a href={link.path} className="hover:text-gray-400 transition">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
