// Importamos iconos desde react-icons (Simple Icons + Otros)
import { 
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiAstro, SiVite, SiVitest, 
    SiPrettier, SiEslint, SiPhp, SiMysql, SiSqlite, SiMariadb, SiMongodb, SiAndroid, SiKotlin, 
    SiUnity, SiGodotengine, SiPython, SiNumpy, SiGit, SiGithub, SiScrumalliance, SiTrello, SiGoogle 
  } from "react-icons/si";
  
  import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaUserAstronaut, FaBars } from "react-icons/fa"; 
  
  // 🌐 Desarrollo Web con colores
  export const techIcons = {
    frontend: {
      HTML: { icon: SiHtml5, color: "#E34F26" },
      CSS: { icon: SiCss3, color: "#1572B6" },
      JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
      TypeScript: { icon: SiTypescript, color: "#3178C6" },
      React: { icon: SiReact, color: "#61DAFB" },
      Tailwind: { icon: SiTailwindcss, color: "#38B2AC" },
      Astro: { icon: SiAstro, color: "#FF5D01" },
      Vite: { icon: SiVite, color: "#646CFF" },
      Vitest: { icon: SiVitest, color: "#6E9F18" },
      Prettier: { icon: SiPrettier, color: "#F7B93E" },
      ESLint: { icon: SiEslint, color: "#4B32C3" },
    },
    backend: {
      PHP: { icon: SiPhp, color: "#777BB4" },
    },
    databases: {
      MySQL: { icon: SiMysql, color: "#4479A1" },
      SQLite: { icon: SiSqlite, color: "#003B57" },
      MariaDB: { icon: SiMariadb, color: "#003545" },
      MongoDB: { icon: SiMongodb, color: "#47A248" },
    },
    mobile: {
      Android: { icon: SiAndroid, color: "#3DDC84" },
      Kotlin: { icon: SiKotlin, color: "#0095D5" },
    },
    gamedev: {
      Unity: { icon: SiUnity, color: "#222C37" },
      Godot: { icon: SiGodotengine, color: "#478CBF" },
    },
    data: {
      Python: { icon: SiPython, color: "#3776AB" },
      NumPy: { icon: SiNumpy, color: "#013243" },
    },
    tools: {
      Git: { icon: SiGit, color: "#F05032" },
      GitHub: { icon: SiGithub, color: "#181717" },
      Scrum: { icon: SiScrumalliance, color: "#00979D" },
      Kanban: { icon: SiTrello, color: "#0052CC" },
      SEO: { icon: SiGoogle, color: "#4285F4" },
    },
  };
  
  // 🔗 Redes Sociales y Contacto
  export const socialIcons = {
    GitHub: { icon: FaGithub, url: "https://github.com/ElZapas" },
    LinkedIn: { icon: FaLinkedin, url: "https://www.linkedin.com/in/fabian-anstro-solano-a7b49a345/" },
    Twitter: { icon: FaTwitter, url: "https://twitter.com/" },
    Email: { icon: FaEnvelope, url: "mailto:anstrosolanofabian@gmail.com" },
  };
  
  // 🚀 Iconos personalizados
  export const miscIcons = {
    Dev: FaUserAstronaut, // Ícono de astronauta para representar "dev"
    Menu: FaBars, // Menu de hamburguesa
  };
  
  