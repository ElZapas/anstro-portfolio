/**
 * @abstract Componente Header
 * @description Componente de la cabecera de la página
 */

import { useHeader } from "../../hooks/header/useHeader";
import NavMenu from "./NavMenu";
import { DevIcon, MenuIcon } from "./Icon";

const Header = () => {
  const { isOpen, isScrolled, toggleMenu, menuRef } = useHeader();

  return (
    <header
    // Cambia el color de fondo y agrega desenfoque al hacer scroll
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-fondo-secundario/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-16 px-5">
        <a href="/" className="flex items-center space-x-3">
          <DevIcon />
          <h1 className="text-xl font-bold">Fabian Anstro</h1>
        </a>

        {/* Botón menú hamburguesa */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Abrir menú de navegación"
        >
          <MenuIcon />
        </button>

        {/* Fondo oscuro al abrir menú */}
        {isOpen && <div className="fixed inset-0 bg-black/70 backdrop-blur-xs shadow-2xl md:hidden"></div>}

        {/* Menú de navegación */}
        <nav
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-64 bg-[#212121] transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:relative md:w-auto md:h-auto md:translate-x-0`}
        >
          <div className="p-6 md:hidden flex items-center space-x-3">
            <DevIcon />
            <h1 className="text-xl font-bold">Fabian Anstro</h1>
          </div>
          <NavMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;


