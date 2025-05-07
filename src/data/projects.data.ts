export interface Proyecto {
  id: string;
  nombre: string;
  descripcionCorta: string;
  tecnologias: string[];
  imagen: string;
  url?: string;
  repositorio?: string;
  esPractica?: boolean;
  esEmpresarial?: boolean;
  detalles: {
    descripcionLarga: string;
    funcionalidades: string[];
    fecha: string;
    rol?: string;
    retos?: string;
    aprendizajes?: string;
  };
}

export const Proyectos: Proyecto[] = [
  {
    id: "portafolio-p1",
    nombre: "Topsters ES",
    descripcionCorta: "Pagina web para crear listas de música.",
    tecnologias: ["React", "Tailwind", "TypeScript", "Vite"],
    imagen: "/images/proyecto1-topsters.webp",
    url: "https://topster-project.vercel.app",
    repositorio: "https://github.com/usuario/portafolio-v1",
    detalles: {
      descripcionLarga:
        "Topsters ES es una aplicación web que permite a los usuarios crear listas de música personalizadas. Los usuarios pueden agregar canciones, álbumes y artistas a sus listas, y compartirlas con otros usuarios. Use la base de datos de LastFM para obtener información sobre canciones y álbumes.",
      funcionalidades: [
        "Creación de listas de música",
        "Búsqueda de canciones y álbumes",
        "Interfaz de usuario intuitiva",
        "busqueda de albumes y artistas",
        "Generacion top escuchas",
      ],
      fecha: "Marzo 2025",
      rol: "Diseño y desarrollo completo",
      retos:
        "Implementar la API de LastFM y optimizar el rendimiento de la aplicación.",
      aprendizajes:
        "Aprendí a trabajar con APIs externas y a optimizar el rendimiento de aplicaciones web.",
    },
  },
  {
    id: "portafolio-p2",
    nombre: "Dulce sensacion",
    descripcionCorta: "Pagina web dedicada a la venta de postres",
    tecnologias: ["Astro", "Tailwind", "Vite", "JavaScript"],
    imagen: "/images/proyecto2-dulcesensacion.webp",
    url: "https://dulce-sensacion.vercel.app",
    repositorio: "https://github.com/usuario/portafolio-v1",
    detalles: {
      descripcionLarga:
        "Este proyecto fue en su tiempo un pedido de un familiar mio (quien es la dueña de la pasteleria) para crear una pagina web dedicada a la venta de postres. Este proyecto tuvo una version sin frameworks a mediados de 2022, por lo que decici refactorizarlo usando Astro y Tailwind.",
      funcionalidades: [
        "Pagina de inicio con productos destacados",
        "Publicidad y contacto",
        "Interfaz de usuario intuitiva",
        "Posicionamiento SEO",
      ],
      fecha: "Abril 2025",
      rol: "Diseño y desarrollo completo",
      retos: "Entender el funcionamiento de Astro y su arquitectura.",
      aprendizajes:
        "Fue un buen proyecto para entender el funcionamiento de Astro y su arquitectura, ademas de aprender a usar Tailwind.",
    },
  },
  {
    id: "portafolio-p3",
    nombre: "Sistema gestor de tickets",
    descripcionCorta: "Sistema de tickets para soporte tecnico",
    tecnologias: ["React", "JavaScript", "Vite", "Css", "Scrum", "Kanban"],
    imagen: "/images/proyecto5-ticketfront.webp",
    url: "https://dulce-sensacion.vercel.app",
    repositorio: "https://github.com/usuario/portafolio-v1",
    detalles: {
      descripcionLarga:
        "Proyecto integrador de mi instituto, ya que un amigo ya tenia conocimientos en sistemas similares nos propuso hacer un sistema de tickets para soporte tecnico. Este proyecto fue desarrollado en 2024 y fue mi primer acercamiento a React como framework.",
      funcionalidades: [
        "Sistema de tickets",
        "CRUD de usuarios y tickets",
        "Consumo de API REST usando fetch",
        "Uso de React Hooks",
        "Sistema de autenticacion",
      ],
      fecha: "Diciembre 2024",
      rol: "Desarrollo fullstack",
      retos: "Mi primer acercamiento a React y el uso de API REST.",
      aprendizajes:
        "Gracias a este proyecto aprendi a usar React y su ecosistema, ademas de aprender a usar API REST y el manejo de estados.",
    },
  },
  {
    id: "portafolio-p4",
    nombre: "Gestor de tickets backend",
    descripcionCorta: "Backend para el sistema de tickets",
    tecnologias: ["PHP", "MySQL", "Scrum", "Kanban"],
    imagen: "/images/proyecto5-ticketBack.webp",
    url: "https://apiticket-production-4edf.up.railway.app",
    repositorio: "https://github.com/ElZapas/API_Ticket",
    detalles: {
      descripcionLarga:
        "Backend del sistema de tickets, desarrollado en PHP y MySQL. Este proyecto fue desarrollado en 2024, a pesar de no estar muy involucrado en el desarrollo del backend, me ayudo a entender como funcionan las API REST y su arquitectura.",
      funcionalidades: [
        "Sistema de tickets",
        "CRUD de usuarios y tickets",
        "Creacion de endpoints",
        "Sistema de autenticacion JWT",
      ],
      fecha: "Diciembre 2024",
      rol: "Desarrollo fullstack",
      retos:
        "Involucramento en el desarrollo del backend y la creacion y entendimiento de endpoints.",
      aprendizajes:
        "Con este proyecto entendi como funciona el backend y su arquitectura, gracias a esto pude entender como funcionan las API REST y su arquitectura.",
    },
  },
  {
    id: "portafolio-p5",
    nombre: "Tami",
    esPractica: true,
    esEmpresarial: true,
    descripcionCorta: "Empresa de maquinaria",
    tecnologias: ["Astro", "React", "Tailwind", "Vite", "TypeScript", "Git"],
    imagen: "/images/proyecto3-Tami.webp",
    url: "https://tami.tami-peru.com",
    detalles: {
      descripcionLarga:
        "Como parte de mis practicas pre-profesionales, me toco trabajar en una empresa dedicada a la venta de maquinaria. En esta empresa me toco trabajar en el desarrollo de su pagina web, la cual fue desarrollada en Astro y React.",
      funcionalidades: [
        "Landing page",
        "Pagina de productos",
        "Dashboard de administracion",
        "Sistema de autenticacion",
      ],
      fecha: "Febrero 2025",
      rol: "Desarrollo frontend",
      retos:
        "Mi primer acercamiento a un entorno laboral real y el uso de Astro y React como framework.",
      aprendizajes:
        "Gracias a este proyecto aprendi a trabajar en un entorno laboral real, ademas de aprender a usar Astro y React como framework. Aprendi a usar Git como herramienta de versionado y a trabajar en equipo con otras personas.",
    },
  },
  {
    id: "portafolio-p6",
    nombre: "Yuntas",
    esPractica: true,
    esEmpresarial: true,
    descripcionCorta: "Empresa de iluminación y diseño",
    tecnologias: ["Astro", "React", "Tailwind", "Vite", "TypeScript", "Git"],
    imagen: "/images/proyecto4-Yuntas.webp",
    url: "https://yuntas.yuntasproducciones.com",
    detalles: {
      descripcionLarga:
        "Como parte de mis practicas pre-profesionales, me toco trabajar en una empresa dedicada a la iluminacion y diseño. En esta empresa me toco trabajar en el desarrollo de su pagina web, la cual fue desarrollada en Astro y React.",
      funcionalidades: [
        "Landing page",
        "Pagina de productos",
        "Dashboard de administracion",
        "Sistema de autenticacion",
      ],
      fecha: "Febrero 2025",
      rol: "Desarrollo frontend",
      retos:
        "Ser parte de un equipo de trabajo y el uso de Astro y React como framework.",
      aprendizajes:    
          "Gracias a este proyecto aprendi a trabajar en un entorno laboral real, asimismo pude entender el funcionamiento de las herramientas de desarrollo",
    }
  },
];
