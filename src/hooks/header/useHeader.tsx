/**
 * @abstract Componente de hook para el header
 * @returns {Object} isOpen, isScrolled, toggleMenu, menuRef
 * Este componente usa tres estados, isOpen, isScrolled y menuRef
 * isOpen: Estado para saber si el menú está abierto o cerrado
 * isScrolled: Estado para saber si el scroll está activo
 * menuRef: Referencia al menú
 * toggleMenu: Función para abrir o cerrar el menú
 */
import { useState, useEffect, useRef } from "react";

export function useHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Efecto para saber si el scroll está activo
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efecto para saber si se ha hecho click fuera del menú
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Si el menú está abierto, añadir evento de click, si no, quitarlo
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return { isOpen, isScrolled, toggleMenu, menuRef };
}
