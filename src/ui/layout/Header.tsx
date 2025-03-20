import React, { useState, useEffect, useRef } from "react";
import { miscIcons } from "../../data/icons.data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const DevIcon = miscIcons.Dev;
  const MenuIcon = miscIcons.Menu;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detectar el scroll para cambiar el fondo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-fondo-secundario/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-16 px-5">
        <a href="/">
          <div className="flex items-center space-x-3">
            <DevIcon size={28} className="text-texto-principal" />
            <h1 className="text-xl font-bold">Fabian Anstro</h1>
          </div>
        </a>

        {/* Botón menú hamburguesa */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Abrir menú de navegación"
        >
          <MenuIcon size={24} className="text-texto-principal" />
        </button>

        {/* Fondo oscuro con más sombra al abrir menú */}
        {isOpen && (
          <div className="fixed inset-0.5 bg-black/70 backdrop-blur-xs shadow-2xl md:hidden"></div>
        )}

        {/* Menú de navegación */}
        <nav
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-64 bg-[#212121] transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:relative md:w-auto md:h-auto md:translate-x-0`}
        >
          <div className="p-6 md:hidden flex items-center space-x-3">
            <DevIcon size={28} className="text-texto-principal" />
            <h1 className="text-xl font-bold">Fabian Anstro</h1>
          </div>
          <ul className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 p-6 md:p-0">
            <li>
              <a href="/" className="hover:text-gray-400 transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400 transition">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-gray-400 transition">
                Proyectos
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400 transition">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


