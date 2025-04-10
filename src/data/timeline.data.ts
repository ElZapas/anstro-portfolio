/*
 * Array de fechas a incluir en la linea de tiempo
 * La linea de tiempo esta ubicada en /ui/index/contenido/SobreMi.tsx
 * En caso poder agregar un nuevo evento (puede ser nuevo empleo, curso o carrera)
 * puede apuntarse aqui. Solo sigue la estructura de datos.
 */

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  duration: number;
  type: "study" | "work" | "milestone";
}


export const timelineEvents: TimelineEvent[] = [
  {
    date: "Oct 2021 - Dic S2021",
    title: "Curso HTML & CSS",
    description: "Curso básico sobre estructura y estilos web.",
    duration: 3,
    type: "study",
  },
  {
    date: "Abr 2022 - Dic 2024",
    title: "Instituto X",
    description: "Estudié 'Desarrollo de Sistemas de Información'.",
    duration: 31,
    type: "study",
  },
  {
    date: "Dic 2024",
    title: "Graduación",
    description: "Finalicé mis estudios y obtuve mi título.",
    duration: 1,
    type: "milestone",
  },
  {
    date: "Ene 2025",
    title: "Autodidacta & Empresa X",
    description: "Comencé a estudiar por mi cuenta.",
    duration: 1,
    type: "work",
  },
  {
    date: "Ene 2025 - May 2025",
    title: "Trabajo en Empresa X",
    description: "Desarrollador front-end en prácticas.",
    duration: 5,
    type: "work",
  },
];

