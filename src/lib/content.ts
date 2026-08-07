// Todo el copy y los datos "de negocio" del sitio viven aquí, en un único
// sitio fácil de editar. Los campos marcados como PENDIENTE son datos reales
// que aún no se han confirmado — sustituir antes de publicar en producción.

export const PENDIENTE = "(pendiente de confirmar)";

export const site = {
  name: "Ipanema BJJ Gijón",
  title: "Academia de Jiu-Jitsu Brasileño en Gijón | Ipanema BJJ",
  description:
    "Academia de Jiu-Jitsu Brasileño en Gijón. Filial del Mathias Ribeiro BJJ Team. Clases de BJJ, NO-GI, niños y mujeres para todos los niveles. Primera clase gratuita.",
  url: "https://ipanemabjjgijon.vercel.app",
};

export const nav = [
  { label: "Sobre nosotros", href: "/#sobre-nosotros" },
  { label: "Instalaciones", href: "/#instalaciones" },
  { label: "Programas", href: "/#programas" },
  { label: "Palmarés", href: "/#palmares" },
  { label: "Horarios", href: "/#horarios" },
  { label: "Ubicación", href: "/#ubicacion" },
  { label: "Tienda", href: "/tienda" },
  { label: "Seminarios", href: "/seminarios" },
];

export const contact = {
  email: "info@academiabjj.com",
  phone: "683 62 71 13",
  phoneIntl: "+34683627113", // para tel: / wa.me, sin espacios
  address: "Calle Dindurra, 19, Centro, 33202 Gijón, Asturias",
  mapsUrl:
    "https://maps.google.com/?q=" +
    encodeURIComponent("Ipanema BJJ, Calle Dindurra, 19, 33202 Gijón"),
  instagram: "https://www.instagram.com/ipanema_bjj/",
  facebook: "https://www.facebook.com/p/Ipanema-Bjj-Gij%C3%B3n-61588540881589/",
  youtube: PENDIENTE,
};

export const hero = {
  title: "Ipanema BJJ",
  titleSuffix: "Gijón",
  subtitle:
    "Jiu-Jitsu Brasileño para todos los niveles, en el corazón de Gijón. Técnica, comunidad y una primera clase gratis para que lo compruebes tú mismo.",
  ctaPrimary: { label: "Clase de prueba gratis", href: "/#contacto" },
  ctaSecondary: { label: "Ver programas", href: "/#programas" },
  image: "/images/profesor-accion-giro.jpg",
};

export const manifesto = {
  heading: "Nuestro manifiesto",
  quote:
    "El Jiu-Jitsu es el arte de la suavidad que convierte la fuerza del adversario en tu propia ventaja.",
};

export const about = {
  heading: "Sobre nosotros",
  kicker: "El profesor",
  name: "José-Luis",
  nickname: "Zezinho",
  belt: "Cinturón negro, Mathias Ribeiro BJJ Team",
  bio: [
    "José-Luis, conocido en el tatami como \"Zezinho\", es el profesor principal de Ipanema BJJ Gijón y cinturón negro dentro del Mathias Ribeiro BJJ Team.",
    "Con años de experiencia sobre el tatami, José-Luis construyó Ipanema BJJ como un sitio donde se entrena en serio pero se cuida a cada alumno, desde quien pisa un tatami por primera vez hasta quien compite a nivel europeo.",
    "También ofrece clases privadas para quien quiera acelerar su progreso con atención 1 a 1.",
  ],
  images: [
    { src: "/images/profesor-blanco-frente.jpg", alt: "José-Luis con el gi blanco de Ipanema BJJ" },
    { src: "/images/profesor-negro-brazos.jpg", alt: "José-Luis con el gi negro, cinturón del Mathias Ribeiro BJJ Team" },
  ],
};

export const gallery = [
  {
    src: "/images/recepcion-lounge.jpg",
    alt: "Zona de recepción y lounge de Ipanema BJJ Gijón, con el neón de la palmera",
    caption: "Recepción",
  },
  {
    src: "/images/tatami-vacio.jpg",
    alt: "Tatami principal de Ipanema BJJ Gijón",
    caption: "Tatami",
  },
  {
    src: "/images/vestuario-surf.jpg",
    alt: "Vestuario con tabla de surf decorativa",
    caption: "Vestuarios",
  },
  {
    src: "/images/duchas.jpg",
    alt: "Duchas de la academia",
    caption: "Duchas",
  },
  {
    src: "/images/coffee-bar.jpg",
    alt: "Rincón de café para antes o después de entrenar",
    caption: "Coffee bar",
  },
  {
    src: "/images/pasillo-taquillas.jpg",
    alt: "Pasillo con taquillas y zona de descanso",
    caption: "Taquillas",
  },
  {
    src: "/images/exterior-fachada.jpg",
    alt: "Fachada de Ipanema BJJ Gijón",
    caption: "Fachada",
  },
  {
    src: "/images/tatami-logos.jpg",
    alt: "Tatami con el logo de Ipanema BJJ y del Mathias Ribeiro Team",
    caption: "Pared de logos",
  },
];

export type Program = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
};

export const programs: Program[] = [
  {
    slug: "bjj",
    title: "BJJ",
    description:
      "Clases de Jiu-Jitsu Brasileño con gi. Técnica, posiciones y sparring para todos los niveles.",
    bullets: ["Técnica con gi", "Posiciones y defensas", "Sparring y rolling"],
  },
  {
    slug: "no-gi",
    title: "NO-GI",
    description:
      "Lucha cuerpo a cuerpo sin gi. Proyecciones, derribos y trabajo en suelo con agarres.",
    bullets: ["Sin kimono", "Proyecciones y derribos", "Transición y control"],
  },
  {
    slug: "kids",
    title: "Niños",
    description:
      "BJJ para niños y niñas: disciplina, coordinación y confianza en un ambiente seguro y divertido.",
    bullets: [
      "Disciplina y respeto",
      "Coordinación y confianza",
      "Grupos por edad y nivel",
    ],
  },
  {
    slug: "mujeres",
    title: "Mujeres",
    description:
      "Clases específicas para mujeres, con un ambiente cercano y enfoque en defensa personal real.",
    bullets: [
      "Clases específicas",
      "Ambiente cercano",
      "Defensa personal real",
    ],
  },
];

export const achievements = {
  heading: "Palmarés",
  kicker: "Equipo competidor",
  intro:
    "Ipanema BJJ es filial del Mathias Ribeiro BJJ Team, uno de los equipos de referencia del Jiu-Jitsu brasileño en España. Nuestros alumnos e instructores compiten y suben al podio.",
  highlights: [
    "Campeonato de España de Jiu-Jitsu",
    "Campeonato de Europa (IBJJF)",
    "Madrid Cup BJJ",
    "NTL Pro",
  ],
  image: "/images/medallas-pared.jpg",
};

export const team = {
  heading: "El equipo",
  intro:
    "Detrás de cada clase hay un equipo de cinturones que entrena, compite y enseña codo a codo con los alumnos.",
  image: "/images/equipo-grupo.jpg",
};

export type ScheduleRow = {
  time: string;
  cells: [string, string, string, string, string]; // Lun, Mar, Mié, Jue, Vie
};

export const schedule = {
  heading: "Horarios",
  days: ["LUN", "MAR", "MIÉ", "JUE", "VIE"] as const,
  rows: [
    {
      time: "08:30–10:00",
      cells: [
        "BJJ Adultos (Gi)",
        "BJJ Adultos (NO-GI)",
        "BJJ Adultos (Gi)",
        "BJJ Adultos (NO-GI)",
        "BJJ Adultos (Gi)",
      ],
    },
    {
      time: "11:00–12:30",
      cells: [
        "BJJ Adultos (Gi)",
        "BJJ Adultos (NO-GI)",
        "Laboratorio",
        "BJJ Adultos (NO-GI)",
        "BJJ Adultos (Gi)",
      ],
    },
    {
      time: "14:15–15:45",
      cells: [
        "BJJ Lunch (NO-GI)",
        "BJJ Lunch (Gi)",
        "BJJ Lunch (NO-GI)",
        "BJJ Lunch (Gi)",
        "BJJ Lunch (NO-GI)",
      ],
    },
    {
      time: "19:30–21:00",
      cells: [
        "BJJ Avanzado",
        "BJJ Avanzado",
        "BJJ Avanzado",
        "BJJ Avanzado",
        "Open Mat",
      ],
    },
    {
      time: "21:00–22:00",
      cells: [
        "Open Mat",
        "BJJ Mujeres (Específico)",
        "Open Mat",
        "Open Mat",
        "Open Mat",
      ],
    },
  ] satisfies ScheduleRow[],
  note:
    "Entre las 15:45 y las 19:30 hay clases de Kids, Fundamentos y Mujeres (Específico). Horario exacto de esa franja y del sábado " +
    PENDIENTE +
    ". Primera clase siempre gratuita.",
};

export const location = {
  heading: "Ubicación",
  intro: contact.address,
  rating: { value: "5,0", count: 60 },
};

export const finalCta = {
  heading: "¿Listo para comenzar?",
  subtitle:
    "Únete a nuestra familia y descubre cómo el Jiu-Jitsu puede transformar tu vida. Tu primera clase es gratis.",
  primary: { label: "Empezar ahora", href: "#contacto" },
  secondary: { label: "Ver programas", href: "#programas" },
};

export const tienda = {
  heading: "Tienda",
  intro:
    "Kimonos y rashguards del equipo, en varias tallas y colores. Si estás empezando, no hace falta que te compres un gi antes de venir: en tu primera clase te dejamos uno.",
  products: [
    {
      name: "Gi Ipanema BJJ",
      description:
        "Kimono oficial del equipo, algodón trenzado de alta densidad. Disponible en blanco y negro.",
      image: "/images/kimonos-percha.jpg",
    },
    {
      name: "Detalle del bordado",
      description: "Bordado de la palmera en el pecho y en la manga.",
      image: "/images/profesor-blanco-brazos.jpg",
    },
  ],
  note: "La tienda online está en desarrollo. Mientras tanto, resérvalo contactando directamente con la academia.",
};

export const seminarios = {
  heading: "Seminarios y campamentos",
  intro:
    "Un modelo híbrido único que combina formación técnica, entrenamiento en un entorno natural y experiencia de comunidad: BJJ + Surf.",
  campDays: [
    {
      day: "Viernes",
      description: "Recepción del grupo y primera sesión técnica en el tatami.",
    },
    {
      day: "Sábado",
      description:
        "Entrenamientos intensivos, clase de surf y actividades grupales.",
    },
    {
      day: "Domingo",
      description: "Sesiones avanzadas y clausura oficial del campamento.",
    },
  ],
  upcoming: [
    {
      title: "BJJ + Surf + Yoga",
      description: "Fin de semana combinado. Fechas " + PENDIENTE + ".",
    },
    {
      title: "Fin de semana intensivo",
      description:
        "Entrenamiento especializado con instructores invitados. Fechas " +
        PENDIENTE +
        ".",
    },
  ],
};
