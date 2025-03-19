/**
 * @abstract importación de iconos
 * @constant techIcons: iconos de tecnologías
 * @constant socialIcons: iconos de redes sociales
 * @constant miscIcons: iconos varios
 */

const basePath = "../../assets/icons"; // Ruta base de los iconos

const createIconPath = (filename: string) => `${basePath}/${filename}`; // Función para crear la ruta de un icono


export const techIcons = [ // Ahora, para cada icono, se define un objeto con su nombre, clave, ruta y color
    { name: "HTML", key: "html", src: createIconPath("html.svg"), color: "#E34F26" },
    { name: "CSS", key: "css", src: createIconPath("css.svg"), color: "#1572B6" },
    { name: "JavaScript", key: "javascript", src: createIconPath("javascript.svg"), color: "#F7DF1E" },
    { name: "TypeScript", key: "typescript", src: createIconPath("typescript.svg"), color: "#3178C6" },
    { name: "React", key: "react", src: createIconPath("react.svg"), color: "#61DAFB" },
    { name: "Tailwind CSS", key: "tailwind", src: createIconPath("tailwind.svg"), color: "#38B2AC" },
    { name: "Astro", key: "astro", src: createIconPath("astro.svg"), color: "#FF5D01" },
    { name: "Vite", key: "vite", src: createIconPath("vite.svg"), color: "#646CFF" },
    { name: "Vitest", key: "vitest", src: createIconPath("vitest.svg"), color: "#6E9F18" },
    { name: "Prettier", key: "prettier", src: createIconPath("prettier.svg"), color: "#F7B93E" },
    { name: "ESLint", key: "eslint", src: createIconPath("eslint.svg"), color: "#4B32C3" },
    { name: "PHP", key: "php", src: createIconPath("php.svg"), color: "#777BB4" },
    { name: "MySQL", key: "mysql", src: createIconPath("mysql.svg"), color: "#4479A1" },
    { name: "SQLite", key: "sqlite", src: createIconPath("sqlite.svg"), color: "#003B57" },
    { name: "MariaDB", key: "mariadb", src: createIconPath("mariadb.svg"), color: "#003545" },
    { name: "MongoDB", key: "mongodb", src: createIconPath("mongodb.svg"), color: "#47A248" },
    { name: "Android", key: "android", src: createIconPath("android.svg"), color: "#3DDC84" },
    { name: "Kotlin", key: "kotlin", src: createIconPath("kotlin.svg"), color: "#0095D5" },
    { name: "Unity", key: "unity", src: createIconPath("unity.svg"), color: "#222C37" },
    { name: "Godot", key: "godot", src: createIconPath("godot.svg"), color: "#478CBF" },
    { name: "Python", key: "python", src: createIconPath("python.svg"), color: "#3776AB" },
    { name: "NumPy", key: "numpy", src: createIconPath("numpy.svg"), color: "#013243" },
    { name: "Git", key: "git", src: createIconPath("git.svg"), color: "#F05032" },
    { name: "GitHub", key: "github", src: createIconPath("github.svg"), color: "#181717" },
    { name: "Scrum", key: "scrum", src: createIconPath("scrum.svg"), color: "#00979D" },
    { name: "Kanban", key: "kanban", src: createIconPath("kanban.svg"), color: "#0052CC" },
    { name: "SEO", key: "seo", src: createIconPath("seo.svg"), color: "#4285F4" }
];

export const socialIcons = [
    { name: "GitHub", key: "github", src: createIconPath("github.svg"), url: "https://github.com/" },
    { name: "LinkedIn", key: "linkedin", src: createIconPath("linkedin.svg"), url: "https://linkedin.com/" },
    { name: "Twitter", key: "twitter", src: createIconPath("twitter.svg"), url: "https://twitter.com/" },
    { name: "Email", key: "email", src: createIconPath("email.svg"), url: "mailto:tucorreo@correo.com" }
];

export const miscIcons = {
    dev: createIconPath("dev.svg"),
    favicon: createIconPath("favicon.ico")
};
