const es = {
  hero: {
    title: "Renato Torres",
    description:
      "Desarrollador Front-End enfocado en crear experiencias digitales modernas, de alto rendimiento y memorables.",
    button1: "Ver Proyectos",
    button2: "Contactar",
  },

  manifesto: {
    title:
      "El código no es solo lógica. Es experiencia, movimiento e intención.",
    description:
      "Desarrollo interfaces que van más allá de lo visual. Cada decisión — desde el diseño hasta el rendimiento — está pensada para crear productos digitales claros, intuitivos y memorables.",
  },

  timeline: {
    experiences: [
      {
        year: "2023 - Presente",
        role: "Desarrollador Front-End",
        company: "Grupo Moura",
        description:
          "Responsable del mantenimiento y actualización de los sitios institucionales de la empresa.",
      },
      {
        year: "2023 - 2024",
        role: "Desarrollador Front-End",
        company: "Recife Centro",
        description:
          "Desarrollo del sitio web con integraciones vía API y redes sociales.",
      },
      {
        year: "2025",
        role: "Desarrollador Front-End",
        company: "PAD Salud",
        description:
          "Creación del sitio web y aplicación interna del sistema completo de la clínica.",
      },
    ],
  },

  projects: {
    description: [
      {
        id: 1,
        title: "Baterias Moura",
        description: "Diseño moderno y responsivo con rendimiento optimizado.",
        image: "/moura-home.png",
        technologies: ["NextJS", "Tailwind", "Shadcn"],
        link: "https://www.moura.com.br/",
      },
      {
        id: 2,
        title: "PAD Saúde",
        description: "Diseño moderno y responsivo con rendimiento optimizado.",
        image: "/padsaude-home.png",
        technologies: ["NextJS", "Tailwind", "Shadcn"],
        link: "https://www.padsaude.com.br/",
      },
      {
          id: 3,
          title: "Recife Centro",
          description: "Diseño moderno y responsivo con integraciones API y conexiones de Instagram.",
          image: "/recifecentro-home.png",
          technologies: ["NextJS", "Tailwind", "Shadcn"],
          link: "https://front-qa.recifecentro.com.br",
      },
      {
          id: 4,
          title: "Casas Léo",
          description: "Diseño moderno y responsivo con integración con API.",
          image: "/casasleo-home.png",
          technologies: ["NextJS", "Tailwind", "PHP"],
          link: "https://casasleo.com.br",
      },
    ]
  },

  contact: {
    name: "Nombre",
    email: "Correo",
    message: "Mensaje",
    submit: "Enviar Mensaje",
    finishTitle: "¿Finalizamos?",
    finishSubtitle: "¿Hablamos?",
  },
};

export default es;