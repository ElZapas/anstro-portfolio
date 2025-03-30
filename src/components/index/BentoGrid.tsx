/**
 * @abstract Componente BentoGrid
 * @description Contenedor de elementos en forma de grid, con 5 columnas y 5 filas.
 * @param {ReactNode} children - Elementos a mostrar en el grid
 */

import type { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
}

const BentoGrid = ({ children }: BentoGridProps) => {
  return (
    <section className="grid grid-cols-5 grid-rows-5 w-full h-screen pt-16 gap-4 p-4">
      {children}
    </section>
  );
};

export default BentoGrid;