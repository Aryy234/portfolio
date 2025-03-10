export interface Skill {
    name: string
    icon: string
    url?: string
  }
  
  export interface SkillsData {
    frontend: Skill[]
    backend: Skill[]
    databases: Skill[]
    dataAnalysis: Skill[]
    [key: string]: Skill[]
  }
  
  export interface Job {
    title: string
    company: string
    period: string
    description: string[]
  }
  
  export interface Project {
    id: string;
    categoria: string;
    titulo: string;
    tecnologias: string[];
    rol: string;
    descripcion: string;
    estado: "En desarrollo" | "Completado";
    githubLink: string;
    demoLink: string;
    videoUrl: string;
    imagenPortada: string;
    imagenes: string[];
    destacado: boolean;
  }
  