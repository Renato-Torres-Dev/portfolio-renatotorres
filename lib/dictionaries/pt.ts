const pt = {
  hero: {
    title: "Renato Torres",
    description:
      "Front-End Developer focado em criar experiências digitais modernas, performáticas e memoráveis.",
    button1: "Ver Projetos",
    button2: "Entrar em contato",
  },

  manifesto: {
    sectionTitle: "Manifesto",
    title:
      "Código não é só lógica. É experiência, movimento e intenção.",
    description:
      "Eu desenvolvo interfaces que vão além do visual. Cada decisão — do layout à performance — é pensada para criar produtos digitais claros, intuitivos e memoráveis.",
  },

  timeline: {
    title: "Timeline Profissional",
    experiences: [
      {
        year: "2023 - Presente",
        role: "Front-End Developer",
        company: "Grupo Moura",
        description:
        "Responsável pela manutenção e atualização dos sites institucionais da empresa.",
      },
      {
        year: "2023 - 2024",
        role: "Front-End Developer",
        company: "Recife Centro",
        description:
        "Desenvolvimento do site com integrações via API e redes sociais.",
      },
      {
        year: "2025",
        role: "Front-End Developer",
        company: "PAD Saúde",
        description:
        "Criação do site e aplicação interna do sistema completo da clínica.",
      },
    ],
  },
  
  projects: {
    title: "Projetos",
    description: [
      {
        id: 1,
        title: "Baterias Moura",
        description: "Design moderno e responsivo com performance otimizada.",
        image: "/moura-home.png",
        technologies: ["NextJS", "Tailwind", "Shadcn"],
        link: "https://www.moura.com.br/",
      },
      {
        id: 2,
        title: "PAD Saúde",
        description: "Design responsivo e interface interativa.",
        image: "/padsaude-home.png",
        technologies: ["NextJS", "Tailwind", "Shadcn"],
        link: "https://www.padsaude.com.br/",
      },
      {
          id: 3,
          title: "Recife Centro",
          description: "Design moderno com integrações via API e Instagram.",
          image: "/recifecentro-home.png",
          technologies: ["NextJS", "Tailwind", "Shadcn"],
          link: "https://front-qa.recifecentro.com.br",
      },
      {
          id: 4,
          title: "Casas Léo",
          description: "Design modernizado e intuitivo com integração com API.",
          image: "/casasleo-home.png",
          technologies: ["NextJS", "Tailwind", "PHP"],
          link: "https://casasleo.com.br",
      },
    ]
  },
  
  skills: {
    title: "Skills",
    items: [
      {
        title: "React",
        color: "#61dafb",
      },
      {
        title: "NextJS",
        color: "#ffffff",
      },
      {
        title: "Tailwind CSS",
        color: "#38bdf8",
      },
      {
        title: "Framer Motion",
        color: "#f000b8",
      },
      {
        title: "GSAP",
        color: "#88ce02",
      },
      {
        title: "TypeScript",
        color: "#3178c6",
      },
      {
        title: "UI/UX Design",
        color: "#facc15",
      },
      {
        title: "PHP",
        color: "#f50000ff",
      },
      {
        title: "Acessibilidade",
        color: "#e879f9",
      },
    ]
  },

  contact: {
    title: "Contato",
    name: "Nome",
    email: "Email",
    message: "Mensagem",
    submit: "Enviar Mensagem",
  },

  footer: {
    title: "Vamos finalizar?",
    text: "Vamos conversar?",
    subtext: "Estou disponível para projetos, freelas ou apenas para trocar ideias",
  }
};

export default pt;