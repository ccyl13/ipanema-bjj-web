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
  { label: "Bonos", href: "/bonos" },
  { label: "Seminarios", href: "/seminarios" },
];

export const contact = {
  email: "ipanemabjjgijon@gmail.com",
  phone: "683 62 71 13",
  phoneIntl: "+34683627113", // para tel: / wa.me, sin espacios
  whatsappUrl: "https://wa.me/34683627113",
  address: "Calle Dindurra, 19, Centro, 33202 Gijón, Asturias",
  mapsUrl:
    "https://maps.google.com/?q=" +
    encodeURIComponent("Ipanema BJJ, Calle Dindurra, 19, 33202 Gijón"),
  instagram: "https://www.instagram.com/ipanema_bjj/",
  facebook: "https://www.facebook.com/p/Ipanema-Bjj-Gij%C3%B3n-61588540881589/",
  youtube: PENDIENTE,
};

export const hero = {
  title: "Ipanema",
  titleSuffix: "BJJ Gijón",
  subtitle:
    "Jiu-Jitsu Brasileño para todos los niveles, en el corazón de Gijón. Técnica, comunidad y una primera clase gratis para que lo compruebes tú mismo.",
  ctaPrimary: { label: "Clase de prueba gratis", href: "/#contacto" },
  ctaSecondary: { label: "Ver programas", href: "/#programas" },
  image: "/images/profesor-accion-giro.jpg",
};

export const manifesto = {
  heading: "Nuestro manifiesto",
  quote:
    "No solo entrenamos. Vivimos el Jiu-Jitsu. Entrenamos para ser mejores, dentro y fuera del tatami. Creemos en la disciplina, el respeto, el buen rollo y en una comunidad donde cada persona importa. Porque al final, el verdadero cinturón negro se construye compartiendo el camino.",
  lifestyleLabel: "Ipanema Lifestyle",
  tagline: "Entrena. Conecta. Evoluciona.",
};

export const about = {
  heading: "Sobre nosotros",
  kicker: "El head coach",
  name: "José Luis",
  nickname: "Zezinho",
  belt: "Cinturón negro, Mathias Ribeiro BJJ Team",
  bio: [
    "El Jiu-Jitsu cambió mi vida. Ipanema nació para ayudar a cambiar la de otras personas.",
    "Como cinturón negro de Mathias Ribeiro BJJ Team, mi objetivo nunca fue abrir una academia más.",
    "Quería crear un lugar donde se entrenara fuerte, se respirara buen ambiente y cualquier persona pudiera sentirse en casa desde el primer día.",
    "Aquí formamos competidores cuando alguien quiere competir. Pero, sobre todo, formamos personas que disfrutan del camino.",
    "Porque el mejor cinturón no es el que llevas en la cintura. Es la persona en la que te conviertes durante el proceso.",
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

export const recovery = {
  kicker: "Después de entrenar",
  heading: "No todo termina en el tatami",
  intro:
    "En Ipanema la experiencia te acompaña incluso después de entrenar. Tienes café recién hecho, una selección de bebidas refrescantes e isotónicas y algo con lo que reponer fuerzas antes de irte.",
  items: [
    {
      image: "/images/recovery-corner.jpg",
      title: "Recovery Corner",
      text: "Bebidas frías e isotónicas y barritas de proteína Warrior, siempre disponibles para recuperar después del esfuerzo.",
    },
  ],
};

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
    "Madrid Cup BJJ",
    "Campeonato de España 2025",
    "NTL Pro 2021-2022",
    "European Jiu-Jitsu 2022",
    "INTL Pro 2021-2022",
    "12º Campeonato España Jiu-Jitsu Brasileño AEJJB 2021",
    "International Master Europe 2022",
    "Campeonato de España Jiu-Jitsu Brasileño",
    "European Jiu-Jitsu IBJJF Championship 2018",
    "Campeonato de España de BJJ 2025",
    "Madrid Open IBJJF",
  ],
  affiliation: {
    images: [
      "/images/coach-competicion-2.jpg",
      "/images/coach-competicion-3.jpg",
    ],
    imageAlt: "José Luis \"Zezinho\" en competición de Jiu-Jitsu Brasileño",
    heading: "Una academia local. Un equipo de élite.",
    text: "Ipanema BJJ Gijón es filial oficial del Mathias Ribeiro BJJ Team, que con múltiples sedes en España se ha consolidado como uno de los equipos más fuertes del panorama español y europeo. Su metodología ha formado competidores de alto nivel y ha llevado a sus entrenadores a trabajar con deportistas de élite, entre ellos Ilia Topuria, campeón de la UFC. Entrenar en Ipanema significa formar parte de esa misma estructura técnica y compartir los valores de un equipo que apuesta por la excelencia, el respeto y la evolución constante. Lo mejor del BJJ mundial, aplicado cada día en nuestro tatami.",
  },
  image: "/images/medallas-pared.jpg",
};

export const team = {
  heading: "Profesores y compañeros de viaje",
  intro:
    "En Ipanema creemos que un gran equipo se construye mucho antes de subir al podio. Por eso nuestros instructores no solo enseñan Jiu-Jitsu; acompañan, corrigen, motivan y siguen aprendiendo junto a cada alumno. Competimos, sí. Pero también reímos, viajamos, celebramos cinturones, recibimos a quien llega por primera vez y apoyamos a quien más lo necesita. Eso también es entrenar. Eso también es Ipanema.",
  image: "/images/equipo-grupo.jpg",
};

// Horario real 2026, tomado directamente del cuadrante que usa la academia.
export type ClassTag = "AL" | "K" | "W" | "F" | "A" | "PRIVATE" | "OPEN";

export type ScheduleClass = {
  time: string;
  name: string;
  tag: ClassTag;
};

export const scheduleLegend: { tag: ClassTag; label: string }[] = [
  { tag: "AL", label: "Todos los niveles" },
  { tag: "K", label: "Kids" },
  { tag: "W", label: "Mujeres" },
  { tag: "F", label: "Fundamentos" },
  { tag: "A", label: "Avanzado" },
  { tag: "PRIVATE", label: "Clase privada" },
  { tag: "OPEN", label: "Open Mat" },
];

export const schedule = {
  heading: "Horarios",
  days: [
    {
      day: "Lunes",
      classes: [
        { time: "08:00–09:30", name: "BJJ Kimono", tag: "AL" },
        { time: "11:00–12:30", name: "BJJ NoGi", tag: "AL" },
        { time: "14:15–15:45", name: "BJJ Lunch Kimono", tag: "AL" },
        { time: "17:30–18:15", name: "Clase privada", tag: "PRIVATE" },
        { time: "18:15–19:00", name: "Clase privada", tag: "PRIVATE" },
        { time: "19:00–20:30", name: "Grupo Femenino", tag: "W" },
        { time: "20:30–22:00", name: "BJJ Kimono", tag: "A" },
        { time: "22:00–22:30", name: "Open Mat (Ipanema)", tag: "OPEN" },
      ],
    },
    {
      day: "Martes",
      classes: [
        { time: "08:00–09:30", name: "BJJ NoGi", tag: "AL" },
        { time: "11:00–12:30", name: "BJJ Kimono", tag: "AL" },
        { time: "14:15–15:45", name: "BJJ Lunch NoGi", tag: "AL" },
        { time: "17:30–18:15", name: "BJJ Kids Mini (4 a 7)", tag: "K" },
        { time: "18:15–19:00", name: "BJJ Kids Junior (8 a 12)", tag: "K" },
        { time: "19:00–20:30", name: "BJJ Kimono", tag: "F" },
        { time: "20:30–22:00", name: "BJJ NoGi", tag: "A" },
      ],
    },
    {
      day: "Miércoles",
      classes: [
        { time: "08:00–09:30", name: "BJJ Kimono", tag: "AL" },
        { time: "11:00–12:30", name: "BJJ Laboratorio", tag: "AL" },
        { time: "14:15–15:45", name: "BJJ Lunch Kimono", tag: "AL" },
        { time: "17:30–18:15", name: "Clase privada", tag: "PRIVATE" },
        { time: "18:15–19:00", name: "Clase privada", tag: "PRIVATE" },
        { time: "19:00–20:30", name: "BJJ NoGi", tag: "F" },
        { time: "20:30–22:00", name: "BJJ Kimono", tag: "A" },
        { time: "22:00–22:30", name: "Open Mat (Ipanema)", tag: "OPEN" },
      ],
    },
    {
      day: "Jueves",
      classes: [
        { time: "08:00–09:30", name: "BJJ NoGi", tag: "AL" },
        { time: "11:00–12:30", name: "BJJ Kimono", tag: "AL" },
        { time: "14:15–15:45", name: "BJJ Lunch NoGi", tag: "AL" },
        { time: "17:30–18:15", name: "BJJ Kids Mini (4 a 7)", tag: "K" },
        { time: "18:15–19:00", name: "BJJ Kids Junior (8 a 12)", tag: "K" },
        { time: "19:00–20:30", name: "BJJ Kimono", tag: "F" },
        { time: "20:30–22:00", name: "BJJ NoGi", tag: "A" },
      ],
    },
    {
      day: "Viernes",
      classes: [
        { time: "08:00–09:30", name: "BJJ Kimono", tag: "AL" },
        { time: "11:00–12:30", name: "BJJ NoGi", tag: "AL" },
        { time: "14:15–15:45", name: "BJJ Lunch NoGi", tag: "AL" },
        { time: "17:30–18:15", name: "BJJ Kids Mini (4 a 7)", tag: "K" },
        { time: "18:15–19:00", name: "BJJ Kids Junior (8 a 12)", tag: "K" },
        { time: "19:00–20:30", name: "Open Mat (Ipanema)", tag: "OPEN" },
      ],
    },
    {
      day: "Sábado",
      classes: [
        { time: "11:00–12:30", name: "Open Mat (abierto)", tag: "OPEN" },
      ],
    },
  ] satisfies { day: string; classes: ScheduleClass[] }[],
  note:
    "Horario sujeto a cambios por eventos o necesidades del equipo. Apúntate siempre a las clases desde la app de Ipanema BJJ.",
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
  primary: { label: "Empezar ahora", href: contact.whatsappUrl },
  secondary: { label: "Ver programas", href: "#programas" },
};

export const bonos = {
  heading: "Bonos",
  intro:
    "Sin permanencia. Elige el bono que mejor se ajuste a tu ritmo de entrenamiento, o al Bono Nómada si estás de paso por Gijón.",
  plans: [
    {
      name: "Bono 5 clases",
      price: "45€",
      priceNote: "9€ / clase",
      description:
        "Para entrenar a tu ritmo, sin atarte a un horario fijo cada semana.",
      features: ["5 clases", "Válido para cualquier programa", "Sin caducidad estricta"],
      highlight: false,
    },
    {
      name: "Bono 10 clases",
      price: "90€",
      priceNote: "9€ / clase",
      description: "El más habitual entre quienes entrenan varias veces por semana.",
      features: ["10 clases", "Válido para cualquier programa", "Sin caducidad estricta"],
      highlight: false,
    },
    {
      name: "Bono Nómada",
      price: "50€",
      priceNote: "Clases ilimitadas durante tu estancia",
      description:
        "Para viajeros y practicantes de paso por Gijón: paga una vez y entrena todas las clases que quieras mientras dure tu visita. Pensado para estancias cortas, no para temporadas largas.",
      features: [
        "Clases ilimitadas",
        "Válido durante tu estancia",
        "Ideal si vienes de fuera",
      ],
      highlight: true,
    },
  ],
  note: "Todos los bonos se abonan y activan directamente en la academia. Escríbenos por WhatsApp para reservar el tuyo.",
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
