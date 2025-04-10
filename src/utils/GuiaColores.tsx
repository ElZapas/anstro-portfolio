export default function GuiaColores() {
  return (
    <div className="space-y-4 p-4">
      <h2 className="text-2xl font-semibold text-texto-principal">Guía de Colores</h2>

      <div className="flex flex-wrap gap-4">
        {/* Azul oscuro principal */}
        <div className="w-32 h-32 bg-hero-principal rounded-xl flex items-center justify-center">
          <span className="text-texto-principal">Hero Principal</span>
        </div>
        {/* Fondo oscuro */}
        <div className="w-32 h-32 bg-fondo-principal rounded-xl flex items-center justify-center">
          <span className="text-texto-principal">Fondo Principal</span>
        </div>
        {/* Fondo más oscuro */}
        <div className="w-32 h-32 bg-fondo-secundario rounded-xl flex items-center justify-center">
          <span className="text-texto-principal">Fondo Secundario</span>
        </div>
        {/* Azul corporativo */}
        <div className="w-32 h-32 bg-acento rounded-xl flex items-center justify-center">
          <span className="text-texto-principal">Acento</span>
        </div>
        {/* Azul claro */}
        <div className="w-32 h-32 bg-azul-claro rounded-xl flex items-center justify-center">
          <span className="text-texto-principal">Azul Claro</span>
        </div>
        {/* Azul intermedio */}
        <div className="w-32 h-32 bg-azul-medio rounded-xl flex items-center justify-center">
          <span className="text-texto-principal">Azul Medio</span>
        </div>
        {/* Azul pastel */}
        <div className="w-32 h-32 bg-azul-pastel rounded-xl flex items-center justify-center">
          <span className="text-texto-principal">Azul Pastel</span>
        </div>
        {/* Azul vibrante */}
        <div className="w-32 h-32 bg-neon rounded-xl flex items-center justify-center">
          <span className="text-texto-principal">Neon</span>
        </div>
        {/* Texto principal */}
        <div className="w-32 h-32 bg-texto-principal rounded-xl flex items-center justify-center">
          <span className="text-fondo-principal">Texto Principal</span>
        </div>
        {/* Texto secundario */}
        <div className="w-32 h-32 bg-texto-secundario rounded-xl flex items-center justify-center">
          <span className="text-fondo-principal">Texto Secundario</span>
        </div>
        {/* Fondo de tarjetas */}
        <div className="w-32 h-32 bg-card rounded-xl flex items-center justify-center">
          <span className="text-texto-principal">Fondo Card</span>
        </div>
      </div>

      {/* Extras (opcional) */}
      <div className="flex gap-4 mt-6">
        <div className="w-32 h-32 bg-estudios rounded-xl flex items-center justify-center">
          <span className="text-texto-principal">Estudios</span>
        </div>
        <div className="w-32 h-32 bg-trabajo rounded-xl flex items-center justify-center">
          <span className="text-texto-principal">Trabajo</span>
        </div>
        <div className="w-32 h-32 bg-eventos rounded-xl flex items-center justify-center">
          <span className="text-texto-principal">Eventos</span>
        </div>
      </div>
    </div>
  );
}

