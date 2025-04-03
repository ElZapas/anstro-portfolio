/**
 *
 * @abstract Componente animado para el index
 * Circulo que generalmente va en los bordes de los contenedores grid.
 */

const AnimatedDetail = ({ className = "" }: { className?: string }) => {
    return (
      <div
        className={`w-6 h-6 border-2 border-texto-principal rounded-full opacity-60 animate-spin-slow absolute ${className}`}
      />
    );
  };
  
  export default AnimatedDetail;
