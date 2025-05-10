// Base de datos expandida con 40 profesionales de diferentes categorías

export interface Professional {
  id: string
  name: string
  profession: string
  services: string[]
  bio: string
  rating: number
  reviewsCount: number
  completedJobs: number
  location: string
  joinedDate: string
  responseTime: string
  image: string
  servicesList: {
    name: string
    price: string
    duration: string
  }[]
  reviews: {
    id: number
    author: string
    date: string
    rating: number
    comment: string
    project: string
  }[]
  certifications: string[]
}

export const expandedProfessionalProfiles: Professional[] = [
  // PLOMERÍA
  {
    id: "plomeria-1",
    name: "Carlos Rodríguez",
    profession: "Plomero Matriculado",
    services: ["plomería"],
    bio: "Plomero matriculado con más de 15 años de experiencia en plomería residencial y comercial. Especializado en reparaciones, instalaciones y servicios de emergencia.",
    rating: 4.9,
    reviewsCount: 124,
    completedJobs: 187,
    location: "Buenos Aires, CABA",
    joinedDate: "Enero 2020",
    responseTime: "Menos de 1 hora",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Reparación de Cañerías", price: "$15.000-25.000", duration: "1-2 horas" },
      { name: "Limpieza de Desagües", price: "$12.000-18.000", duration: "1 hora" },
      { name: "Instalación de Grifería", price: "$20.000-30.000", duration: "1-3 horas" },
      { name: "Reparación de Calefón", price: "$25.000-40.000", duration: "2-4 horas" },
      { name: "Instalación de Calefón", price: "$60.000-100.000", duration: "4-6 horas" },
    ],
    reviews: [
      {
        id: 1,
        author: "Javier L.",
        date: "15 de Marzo, 2025",
        rating: 5,
        comment:
          "¡Carlos fue fantástico! Llegó a tiempo, diagnosticó rápidamente el problema con nuestra cañería con pérdidas y lo arregló por un precio razonable.",
        project: "Reparación de Cañerías",
      },
      {
        id: 2,
        author: "Miguel T.",
        date: "28 de Febrero, 2025",
        rating: 5,
        comment:
          "Gran experiencia con Carlos instalando nuestro nuevo calefón. Explicó todas nuestras opciones y completó el trabajo eficientemente.",
        project: "Instalación de Calefón",
      },
    ],
    certifications: ["Matrícula de Plomero", "Certificado en Prevención de Reflujo", "Certificación de Líneas de Gas"],
  },
  {
    id: "electricidad-1",
    name: "Laura Fernández",
    profession: "Electricista Certificada",
    services: ["electricidad"],
    bio: "Electricista certificada con 12 años de experiencia en instalaciones residenciales y comerciales. Especializada en soluciones eficientes y seguras.",
    rating: 4.8,
    reviewsCount: 110,
    completedJobs: 165,
    location: "Buenos Aires, CABA",
    joinedDate: "Marzo 2020",
    responseTime: "Menos de 1 hora",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Instalación Eléctrica Completa", price: "$80.000-150.000", duration: "1-3 días" },
      { name: "Reparación de Cortocircuitos", price: "$15.000-30.000", duration: "1-3 horas" },
      { name: "Instalación de Luces", price: "$10.000-25.000", duration: "1-4 horas" },
      { name: "Tableros Eléctricos", price: "$30.000-60.000", duration: "3-6 horas" },
    ],
    reviews: [
      {
        id: 1,
        author: "Martín G.",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Laura realizó la instalación eléctrica completa de nuestra casa. Trabajo impecable y muy profesional.",
        project: "Instalación Eléctrica Completa",
      },
      {
        id: 2,
        author: "Carolina S.",
        date: "15 de Marzo, 2025",
        rating: 5,
        comment: "Solucionó un problema de cortocircuito que otros no pudieron resolver. Rápida y eficiente.",
        project: "Reparación de Cortocircuitos",
      },
    ],
    certifications: [
      "Técnica Electricista Matriculada",
      "Especialista en Instalaciones de Baja Tensión",
      "Certificación en Seguridad Eléctrica",
    ],
  },
  {
    id: "carpinteria-1",
    name: "Miguel Sánchez",
    profession: "Carpintero y Ebanista",
    services: ["carpintería"],
    bio: "Carpintero con 20 años de experiencia especializado en muebles a medida y restauración. Trabajo con las mejores maderas y garantizo calidad artesanal.",
    rating: 4.9,
    reviewsCount: 130,
    completedJobs: 195,
    location: "Buenos Aires, CABA",
    joinedDate: "Febrero 2019",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Muebles a Medida", price: "$80.000-300.000", duration: "7-20 días" },
      { name: "Restauración de Muebles", price: "$40.000-100.000", duration: "5-15 días" },
      { name: "Instalación de Puertas", price: "$30.000-60.000", duration: "1-2 días" },
      { name: "Decks de Madera", price: "$100.000-300.000", duration: "5-10 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Claudia R.",
        date: "25 de Marzo, 2025",
        rating: 5,
        comment:
          "Miguel fabricó todos los muebles de nuestra cocina a medida. El trabajo es impecable y la calidad excepcional.",
        project: "Muebles a Medida",
      },
      {
        id: 2,
        author: "Hernán G.",
        date: "15 de Marzo, 2025",
        rating: 5,
        comment:
          "Restauró un juego de comedor antiguo que era de mi abuela. Quedó como nuevo respetando su estilo original.",
        project: "Restauración de Muebles",
      },
    ],
    certifications: ["Maestro Carpintero", "Especialista en Ebanistería", "Técnico en Restauración de Antigüedades"],
  },
  {
    id: "pintura-1",
    name: "Ana Gómez",
    profession: "Pintora Profesional",
    services: ["pintura"],
    bio: "Pintora con 15 años de experiencia en trabajos residenciales y comerciales. Especializada en acabados de alta calidad y técnicas decorativas.",
    rating: 4.9,
    reviewsCount: 120,
    completedJobs: 180,
    location: "Buenos Aires, CABA",
    joinedDate: "Enero 2020",
    responseTime: "Menos de 1 hora",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Pintura Interior", price: "$50.000-150.000", duration: "2-5 días" },
      { name: "Pintura Exterior", price: "$80.000-250.000", duration: "3-7 días" },
      { name: "Técnicas Decorativas", price: "$70.000-200.000", duration: "3-6 días" },
      { name: "Empapelado", price: "$60.000-180.000", duration: "2-5 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Familia Rodríguez",
        date: "25 de Marzo, 2025",
        rating: 5,
        comment:
          "Ana pintó toda nuestra casa. El trabajo es impecable y su asesoramiento en colores fue fundamental para lograr el ambiente que queríamos.",
        project: "Pintura Interior",
      },
      {
        id: 2,
        author: "Café Palermo",
        date: "15 de Marzo, 2025",
        rating: 5,
        comment:
          "Realizó un mural y técnicas decorativas en nuestro local. El resultado transformó completamente el espacio.",
        project: "Técnicas Decorativas",
      },
    ],
    certifications: ["Técnica en Pintura Decorativa", "Especialista en Color", "Certificación en Revestimientos"],
  },
  {
    id: "techado-1",
    name: "Roberto Martínez",
    profession: "Especialista en Techado",
    services: ["techado"],
    bio: "Profesional con 18 años de experiencia en instalación y reparación de todo tipo de techos. Garantizo trabajos impermeables y duraderos.",
    rating: 4.8,
    reviewsCount: 110,
    completedJobs: 165,
    location: "Buenos Aires, CABA",
    joinedDate: "Enero 2020",
    responseTime: "Menos de 1 hora",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Instalación de Techos", price: "$150.000-500.000", duration: "5-15 días" },
      { name: "Reparación de Goteras", price: "$40.000-100.000", duration: "1-3 días" },
      { name: "Impermeabilización", price: "$80.000-200.000", duration: "3-7 días" },
      { name: "Techos de Tejas", price: "$200.000-600.000", duration: "7-20 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Familia Torres",
        date: "25 de Marzo, 2025",
        rating: 5,
        comment:
          "Roberto instaló el techo completo de nuestra casa. Trabajo impecable y resistió perfectamente las lluvias intensas.",
        project: "Instalación de Techos",
      },
      {
        id: 2,
        author: "Consorcio Edificio Palermo",
        date: "15 de Marzo, 2025",
        rating: 5,
        comment: "Solucionó problemas de filtraciones que teníamos hace años. Profesional, puntual y efectivo.",
        project: "Reparación de Goteras",
      },
    ],
    certifications: [
      "Técnico en Construcción",
      "Especialista en Impermeabilización",
      "Certificación en Trabajo en Altura",
    ],
  },
  {
    id: "pisos-1",
    name: "Lucía Pérez",
    profession: "Instaladora de Pisos",
    services: ["pisos"],
    bio: "Especialista en instalación de todo tipo de pisos con 15 años de experiencia. Trabajo con precisión y calidad garantizada en todos mis proyectos.",
    rating: 4.9,
    reviewsCount: 115,
    completedJobs: 175,
    location: "Buenos Aires, CABA",
    joinedDate: "Enero 2020",
    responseTime: "Menos de 1 hora",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Pisos de Madera", price: "$80.000-200.000", duration: "3-7 días" },
      { name: "Pisos Flotantes", price: "$60.000-150.000", duration: "2-5 días" },
      { name: "Pisos Vinílicos", price: "$50.000-120.000", duration: "2-4 días" },
      { name: "Pulido y Plastificado", price: "$40.000-100.000", duration: "2-4 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Familia González",
        date: "25 de Marzo, 2025",
        rating: 5,
        comment:
          "Lucía instaló pisos de madera en toda nuestra casa. El trabajo es impecable y su asesoramiento fue fundamental para elegir el material adecuado.",
        project: "Pisos de Madera",
      },
      {
        id: 2,
        author: "Oficinas Centrales S.A.",
        date: "15 de Marzo, 2025",
        rating: 5,
        comment: "Instaló pisos vinílicos en nuestras oficinas. Trabajo rápido, limpio y de excelente calidad.",
        project: "Pisos Vinílicos",
      },
    ],
    certifications: ["Técnica en Instalación de Pisos", "Especialista en Maderas", "Certificación en Acabados"],
  },
  {
    id: "plomeria-2",
    name: "Martín Gómez",
    profession: "Plomero Especialista",
    services: ["plomería"],
    bio: "Especialista en instalaciones sanitarias con 10 años de experiencia. Ofrezco soluciones eficientes para todo tipo de problemas de plomería residencial y comercial.",
    rating: 4.7,
    reviewsCount: 98,
    completedJobs: 145,
    location: "Córdoba, Argentina",
    joinedDate: "Marzo 2021",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Instalación de Baños", price: "$80.000-150.000", duration: "2-3 días" },
      { name: "Reparación de Pérdidas", price: "$15.000-30.000", duration: "1-3 horas" },
      { name: "Instalación de Bombas", price: "$40.000-70.000", duration: "3-5 horas" },
      { name: "Desobstrucción", price: "$10.000-20.000", duration: "1-2 horas" },
    ],
    reviews: [
      {
        id: 1,
        author: "Ana P.",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment: "Martín instaló nuestro baño completo y quedó perfecto. Muy profesional y ordenado en su trabajo.",
        project: "Instalación de Baños",
      },
      {
        id: 2,
        author: "Roberto S.",
        date: "15 de Marzo, 2025",
        rating: 4,
        comment:
          "Buen trabajo reparando una pérdida complicada. Tardó un poco más de lo previsto pero el resultado fue excelente.",
        project: "Reparación de Pérdidas",
      },
    ],
    certifications: ["Técnico en Instalaciones Sanitarias", "Especialista en Sistemas de Bombeo"],
  },
  {
    id: "electricidad-2",
    name: "Roberto Sánchez",
    profession: "Electricista Industrial",
    services: ["electricidad"],
    bio: "Especialista en instalaciones eléctricas industriales con 18 años de experiencia. Ofrezco soluciones seguras y eficientes para empresas y fábricas.",
    rating: 4.9,
    reviewsCount: 95,
    completedJobs: 140,
    location: "Córdoba, Argentina",
    joinedDate: "Enero 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Instalaciones Industriales", price: "$150.000-500.000", duration: "Según proyecto" },
      { name: "Mantenimiento Preventivo", price: "$50.000-100.000", duration: "1 día" },
      { name: "Automatización", price: "$80.000-200.000", duration: "2-5 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Industrias Metálicas S.A.",
        date: "10 de Abril, 2025",
        rating: 5,
        comment:
          "Roberto realizó la instalación eléctrica completa de nuestra planta. Excelente trabajo y cumplimiento de normas de seguridad.",
        project: "Instalaciones Industriales",
      },
      {
        id: 2,
        author: "Fábrica Textil",
        date: "2 de Abril, 2025",
        rating: 5,
        comment: "Implementó un sistema de automatización que mejoró nuestra eficiencia productiva. Muy recomendable.",
        project: "Automatización",
      },
    ],
    certifications: [
      "Ingeniero Eléctrico",
      "Especialista en Automatización Industrial",
      "Certificación en Seguridad Industrial",
    ],
  },
  {
    id: "carpinteria-2",
    name: "Ana Gutiérrez",
    profession: "Carpintera de Obra",
    services: ["carpintería"],
    bio: "Especialista en carpintería de obra con 15 años de experiencia. Realizo trabajos en construcciones nuevas y remodelaciones con precisión y calidad.",
    rating: 4.8,
    reviewsCount: 95,
    completedJobs: 140,
    location: "Córdoba, Argentina",
    joinedDate: "Marzo 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Estructuras de Madera", price: "$150.000-500.000", duration: "Según proyecto" },
      { name: "Escaleras", price: "$100.000-300.000", duration: "7-15 días" },
      { name: "Revestimientos", price: "$80.000-200.000", duration: "5-10 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Constructora Córdoba",
        date: "10 de Abril, 2025",
        rating: 5,
        comment:
          "Ana realizó toda la carpintería de obra en nuestro proyecto de 5 casas. Excelente trabajo y cumplimiento de plazos.",
        project: "Estructuras de Madera",
      },
      {
        id: 2,
        author: "Familia Rodríguez",
        date: "2 de Abril, 2025",
        rating: 5,
        comment:
          "Diseñó e instaló una escalera de madera que es la pieza central de nuestra casa. Impresionante trabajo.",
        project: "Escaleras",
      },
    ],
    certifications: [
      "Técnica en Construcción",
      "Especialista en Estructuras de Madera",
      "Certificación en Seguridad en Obra",
    ],
  },
  {
    id: "pintura-2",
    name: "Martín Peralta",
    profession: "Pintor de Exteriores",
    services: ["pintura"],
    bio: "Especialista en pintura de exteriores y tratamiento de fachadas con 18 años de experiencia. Trabajo con materiales de primera calidad que garantizan durabilidad.",
    rating: 4.8,
    reviewsCount: 95,
    completedJobs: 150,
    location: "Córdoba, Argentina",
    joinedDate: "Marzo 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Pintura de Fachadas", price: "$100.000-300.000", duration: "5-10 días" },
      { name: "Impermeabilización", price: "$80.000-200.000", duration: "3-7 días" },
      { name: "Tratamiento Antihumedad", price: "$70.000-180.000", duration: "3-6 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Consorcio Edificio Central",
        date: "10 de Abril, 2025",
        rating: 5,
        comment: "Martín pintó toda la fachada de nuestro edificio de 10 pisos. Trabajo excelente, en tiempo y forma.",
        project: "Pintura de Fachadas",
      },
      {
        id: 2,
        author: "Familia Sánchez",
        date: "2 de Abril, 2025",
        rating: 5,
        comment:
          "Solucionó problemas de humedad en nuestra casa que llevaban años. El tratamiento y la pintura quedaron perfectos.",
        project: "Tratamiento Antihumedad",
      },
    ],
    certifications: [
      "Técnico en Tratamiento de Superficies",
      "Especialista en Impermeabilización",
      "Certificación en Trabajo en Altura",
    ],
  },
  {
    id: "plomeria-3",
    name: "Luciana Pérez",
    profession: "Plomera e Instaladora",
    services: ["plomería"],
    bio: "Plomera profesional especializada en instalaciones modernas y eficientes. Trabajo con los mejores materiales y garantizo todas mis reparaciones.",
    rating: 4.8,
    reviewsCount: 76,
    completedJobs: 112,
    location: "Rosario, Santa Fe",
    joinedDate: "Junio 2021",
    responseTime: "Menos de 1 hora",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Instalación de Termotanques", price: "$45.000-80.000", duration: "3-5 horas" },
      { name: "Reparación de Inodoros", price: "$12.000-25.000", duration: "1-2 horas" },
      { name: "Instalación de Sistemas de Riego", price: "$35.000-70.000", duration: "1-2 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Marcelo D.",
        date: "5 de Abril, 2025",
        rating: 5,
        comment: "Luciana instaló nuestro termotanque nuevo con mucha profesionalidad. Excelente trabajo y muy limpio.",
        project: "Instalación de Termotanques",
      },
      {
        id: 2,
        author: "Carolina M.",
        date: "28 de Marzo, 2025",
        rating: 5,
        comment: "Reparó nuestro inodoro que tenía problemas desde hace meses. Rápida y eficiente.",
        project: "Reparación de Inodoros",
      },
    ],
    certifications: ["Técnica en Instalaciones Sanitarias", "Especialista en Sistemas de Agua Caliente"],
  },
  {
    id: "electricidad-3",
    name: "Alejandra Martínez",
    profession: "Electricista Domiciliaria",
    services: ["electricidad"],
    bio: "Electricista especializada en instalaciones domiciliarias. Ofrezco soluciones prácticas y seguras para hogares con garantía en todos mis trabajos.",
    rating: 4.7,
    reviewsCount: 78,
    completedJobs: 120,
    location: "Rosario, Santa Fe",
    joinedDate: "Mayo 2021",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Instalación de Tomacorrientes", price: "$8.000-15.000", duration: "1-2 horas" },
      { name: "Cambio de Cableado", price: "$20.000-50.000", duration: "1-2 días" },
      { name: "Instalación de Ventiladores", price: "$12.000-20.000", duration: "1-3 horas" },
    ],
    reviews: [
      {
        id: 1,
        author: "Lucía P.",
        date: "25 de Marzo, 2025",
        rating: 5,
        comment: "Alejandra instaló nuevos tomacorrientes en toda la casa. Trabajo limpio y profesional.",
        project: "Instalación de Tomacorrientes",
      },
      {
        id: 2,
        author: "Fernando M.",
        date: "18 de Marzo, 2025",
        rating: 4,
        comment:
          "Realizó el cambio de cableado en nuestra casa antigua. Buen trabajo aunque tardó un poco más de lo previsto.",
        project: "Cambio de Cableado",
      },
    ],
    certifications: ["Técnica Electricista", "Especialista en Instalaciones Domiciliarias"],
  },
  {
    id: "carpinteria-3",
    name: "Pablo Morales",
    profession: "Carpintero de Muebles",
    services: ["carpintería"],
    bio: "Carpintero especializado en diseño y fabricación de muebles contemporáneos. Combino técnicas tradicionales con diseños modernos.",
    rating: 4.7,
    reviewsCount: 85,
    completedJobs: 120,
    location: "Rosario, Santa Fe",
    joinedDate: "Mayo 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Muebles de Diseño", price: "$100.000-400.000", duration: "10-30 días" },
      { name: "Bibliotecas", price: "$80.000-200.000", duration: "7-15 días" },
      { name: "Mesas y Sillas", price: "$60.000-150.000", duration: "5-15 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Estudio de Arquitectura Rosario",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Pablo fabricó muebles personalizados para varios de nuestros proyectos. Su trabajo es de altísima calidad y sus diseños son únicos.",
        project: "Muebles de Diseño",
      },
      {
        id: 2,
        author: "Mariana L.",
        date: "10 de Marzo, 2025",
        rating: 4,
        comment:
          "Realizó una biblioteca a medida para nuestro living. El resultado es excelente aunque tardó un poco más de lo previsto.",
        project: "Bibliotecas",
      },
    ],
    certifications: ["Diseñador de Muebles", "Técnico en Carpintería", "Especialista en Maderas Nobles"],
  },
  {
    id: "pintura-3",
    name: "Carolina Suárez",
    profession: "Pintora Decorativa",
    services: ["pintura"],
    bio: "Artista y pintora especializada en técnicas decorativas y murales. Transformo espacios con color y creatividad.",
    rating: 4.9,
    reviewsCount: 85,
    completedJobs: 120,
    location: "Rosario, Santa Fe",
    joinedDate: "Mayo 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Murales", price: "$80.000-250.000", duration: "5-15 días" },
      { name: "Esponjeados", price: "$60.000-150.000", duration: "3-7 días" },
      { name: "Veladuras", price: "$70.000-180.000", duration: "4-8 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Jardín de Infantes Rosario",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Carolina pintó murales temáticos en todas nuestras aulas. El trabajo es maravilloso y los niños están encantados.",
        project: "Murales",
      },
      {
        id: 2,
        author: "Restaurante El Dorado",
        date: "10 de Marzo, 2025",
        rating: 5,
        comment:
          "Realizó técnicas decorativas en todo nuestro local que le dieron una personalidad única. Excelente trabajo.",
        project: "Veladuras",
      },
    ],
    certifications: ["Artista Plástica", "Especialista en Técnicas Decorativas", "Muralista"],
  },
  {
    id: "techado-3",
    name: "Marcela Díaz",
    profession: "Especialista en Techos Verdes",
    services: ["techado"],
    bio: "Profesional especializada en diseño e instalación de techos verdes y sustentables. Combino funcionalidad con beneficios ambientales.",
    rating: 4.8,
    reviewsCount: 75,
    completedJobs: 110,
    location: "Rosario, Santa Fe",
    joinedDate: "Mayo 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Techos Verdes", price: "$200.000-600.000", duration: "10-25 días" },
      { name: "Jardines en Altura", price: "$150.000-500.000", duration: "7-20 días" },
      { name: "Sistemas de Captación de Agua", price: "$100.000-300.000", duration: "5-15 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Edificio Sustentable Rosario",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Marcela diseñó e instaló un techo verde en todo nuestro edificio. El resultado es hermoso y ha mejorado la eficiencia energética.",
        project: "Techos Verdes",
      },
      {
        id: 2,
        author: "Restaurante Ecológico",
        date: "10 de Marzo, 2025",
        rating: 5,
        comment:
          "Instaló un jardín en nuestra terraza que ahora usamos para cultivar hierbas para el restaurante. Excelente trabajo.",
        project: "Jardines en Altura",
      },
    ],
    certifications: [
      "Arquitecta Paisajista",
      "Especialista en Construcción Sustentable",
      "Certificación en Sistemas Ecológicos",
    ],
  },
  {
    id: "pisos-3",
    name: "Carolina Mendoza",
    profession: "Especialista en Microcemento",
    services: ["pisos"],
    bio: "Profesional especializada en aplicación de microcemento y pisos continuos. Creo superficies modernas, sin juntas y altamente personalizables.",
    rating: 4.9,
    reviewsCount: 80,
    completedJobs: 120,
    location: "Rosario, Santa Fe",
    joinedDate: "Mayo 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Pisos de Microcemento", price: "$90.000-220.000", duration: "5-10 días" },
      { name: "Revestimientos Continuos", price: "$80.000-200.000", duration: "4-8 días" },
      { name: "Escaleras de Microcemento", price: "$70.000-150.000", duration: "3-7 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Estudio de Arquitectura Rosario",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Carolina aplicó microcemento en varios de nuestros proyectos. Su trabajo es de altísima calidad y el acabado es perfecto.",
        project: "Pisos de Microcemento",
      },
      {
        id: 2,
        author: "Restaurante Moderno",
        date: "10 de Marzo, 2025",
        rating: 5,
        comment:
          "Aplicó microcemento en todo nuestro local, incluyendo las escaleras. El resultado es espectacular y muy resistente al tránsito.",
        project: "Escaleras de Microcemento",
      },
    ],
    certifications: [
      "Especialista en Microcemento",
      "Técnica en Revestimientos Continuos",
      "Certificación en Colorimetría",
    ],
  },
  {
    id: "plomeria-4",
    name: "Diego Fernández",
    profession: "Plomero Industrial",
    services: ["plomería"],
    bio: "Especialista en plomería industrial y comercial con 20 años de experiencia. Atiendo emergencias las 24 horas.",
    rating: 4.9,
    reviewsCount: 135,
    completedJobs: 210,
    location: "Mendoza, Argentina",
    joinedDate: "Febrero 2019",
    responseTime: "Menos de 1 hora",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Instalaciones Industriales", price: "$100.000-500.000", duration: "Según proyecto" },
      { name: "Reparaciones de Emergencia", price: "$25.000-50.000", duration: "1-4 horas" },
      { name: "Mantenimiento Preventivo", price: "$40.000-80.000", duration: "3-5 horas" },
    ],
    reviews: [
      {
        id: 1,
        author: "Empresa Alimentos S.A.",
        date: "10 de Abril, 2025",
        rating: 5,
        comment: "Diego realizó la instalación completa de nuestra planta. Excelente trabajo y cumplimiento de plazos.",
        project: "Instalaciones Industriales",
      },
      {
        id: 2,
        author: "Hotel Mendoza",
        date: "2 de Abril, 2025",
        rating: 5,
        comment: "Respondió a nuestra emergencia en menos de 30 minutos. Solucionó el problema rápidamente.",
        project: "Reparaciones de Emergencia",
      },
    ],
    certifications: [
      "Ingeniero Hidráulico",
      "Especialista en Sistemas Industriales",
      "Certificación en Seguridad Industrial",
    ],
  },
  {
    id: "electricidad-4",
    name: "Gabriel Torres",
    profession: "Electricista e Iluminador",
    services: ["electricidad"],
    bio: "Especialista en sistemas de iluminación y electricidad. Diseño e implemento soluciones personalizadas para hogares y comercios.",
    rating: 4.8,
    reviewsCount: 85,
    completedJobs: 130,
    location: "Mendoza, Argentina",
    joinedDate: "Abril 2020",
    responseTime: "Menos de 1 hora",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Diseño de Iluminación", price: "$40.000-100.000", duration: "Según proyecto" },
      { name: "Instalación de Dimmers", price: "$15.000-25.000", duration: "1-3 horas" },
      { name: "Iluminación LED", price: "$30.000-80.000", duration: "1-2 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Restaurante Mendoza",
        date: "15 de Abril, 2025",
        rating: 5,
        comment:
          "Gabriel diseñó e instaló todo el sistema de iluminación de nuestro restaurante. El resultado es espectacular.",
        project: "Diseño de Iluminación",
      },
      {
        id: 2,
        author: "María J.",
        date: "5 de Abril, 2025",
        rating: 5,
        comment:
          "Instaló iluminación LED en toda nuestra casa. Quedó hermoso y redujo nuestra factura de electricidad.",
        project: "Iluminación LED",
      },
    ],
    certifications: ["Técnico Electricista", "Diseñador de Iluminación", "Especialista en Eficiencia Energética"],
  },
  {
    id: "carpinteria-4",
    name: "Luciano Díaz",
    profession: "Carpintero Restaurador",
    services: ["carpintería"],
    bio: "Especialista en restauración de muebles antiguos y de valor histórico. Recupero la belleza original de piezas clásicas respetando sus técnicas de fabricación.",
    rating: 4.9,
    reviewsCount: 75,
    completedJobs: 110,
    location: "Mendoza, Argentina",
    joinedDate: "Abril 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Restauración de Antigüedades", price: "$50.000-200.000", duration: "15-45 días" },
      { name: "Reparación de Muebles", price: "$30.000-80.000", duration: "7-20 días" },
      { name: "Conservación de Maderas", price: "$40.000-100.000", duration: "10-30 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Museo Provincial",
        date: "15 de Abril, 2025",
        rating: 5,
        comment:
          "Luciano restauró varias piezas de nuestra colección con un respeto absoluto por las técnicas originales. Trabajo excepcional.",
        project: "Restauración de Antigüedades",
      },
      {
        id: 2,
        author: "Familia Mendoza",
        date: "5 de Abril, 2025",
        rating: 5,
        comment:
          "Restauró un juego de comedor que lleva en nuestra familia 3 generaciones. El resultado es impresionante.",
        project: "Restauración de Antigüedades",
      },
    ],
    certifications: [
      "Maestro Restaurador",
      "Especialista en Maderas Antiguas",
      "Técnico en Conservación de Patrimonio",
    ],
  },
  {
    id: "pintura-4",
    name: "Diego Mendoza",
    profession: "Pintor Industrial",
    services: ["pintura"],
    bio: "Especialista en pintura industrial y comercial con 20 años de experiencia. Ofrezco soluciones duraderas para grandes superficies y ambientes exigentes.",
    rating: 4.8,
    reviewsCount: 75,
    completedJobs: 110,
    location: "Mendoza, Argentina",
    joinedDate: "Febrero 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Pintura Industrial", price: "$150.000-500.000", duration: "Según proyecto" },
      { name: "Pisos Epóxicos", price: "$100.000-300.000", duration: "5-10 días" },
      { name: "Señalización", price: "$80.000-200.000", duration: "3-7 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Fábrica Mendoza S.A.",
        date: "15 de Abril, 2025",
        rating: 5,
        comment:
          "Diego realizó la pintura completa de nuestra planta industrial. Trabajo profesional y con todas las medidas de seguridad.",
        project: "Pintura Industrial",
      },
      {
        id: 2,
        author: "Estacionamiento Central",
        date: "5 de Abril, 2025",
        rating: 5,
        comment: "Instaló pisos epóxicos en nuestro estacionamiento de 3 niveles. Excelente acabado y durabilidad.",
        project: "Pisos Epóxicos",
      },
    ],
    certifications: [
      "Técnico en Pinturas Industriales",
      "Especialista en Recubrimientos Especiales",
      "Certificación en Seguridad Industrial",
    ],
  },
  {
    id: "techado-4",
    name: "Javier Pereyra",
    profession: "Techista Tradicional",
    services: ["techado"],
    bio: "Especialista en techos tradicionales y de estilo colonial. Trabajo con tejas, pizarra y otros materiales clásicos respetando técnicas artesanales.",
    rating: 4.7,
    reviewsCount: 85,
    completedJobs: 125,
    location: "Mendoza, Argentina",
    joinedDate: "Abril 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Techos de Tejas Coloniales", price: "$180.000-500.000", duration: "10-25 días" },
      { name: "Techos de Pizarra", price: "$250.000-700.000", duration: "15-30 días" },
      { name: "Restauración de Techos Históricos", price: "$200.000-600.000", duration: "15-40 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Bodega Mendoza",
        date: "15 de Abril, 2025",
        rating: 5,
        comment:
          "Javier restauró el techo original de nuestra bodega centenaria. Respetó el estilo y los materiales originales. Trabajo excepcional.",
        project: "Restauración de Techos Históricos",
      },
      {
        id: 2,
        author: "Familia Sánchez",
        date: "5 de Abril, 2025",
        rating: 4,
        comment:
          "Instaló un techo de tejas coloniales en nuestra casa. El resultado es hermoso aunque tardó más de lo previsto.",
        project: "Techos de Tejas Coloniales",
      },
    ],
    certifications: ["Maestro Techista", "Especialista en Restauración", "Técnico en Materiales Tradicionales"],
  },
  {
    id: "pisos-4",
    name: "Ricardo Torres",
    profession: "Instalador de Pisos Especiales",
    services: ["pisos"],
    bio: "Especialista en pisos deportivos, industriales y especiales con 20 años de experiencia. Ofrezco soluciones técnicas para necesidades específicas.",
    rating: 4.8,
    reviewsCount: 75,
    completedJobs: 110,
    location: "Mendoza, Argentina",
    joinedDate: "Abril 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Pisos Deportivos", price: "$150.000-400.000", duration: "7-15 días" },
      { name: "Pisos Industriales", price: "$200.000-600.000", duration: "10-20 días" },
      { name: "Pisos Antiestáticos", price: "$180.000-450.000", duration: "7-15 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Club Deportivo Mendoza",
        date: "15 de Abril, 2025",
        rating: 5,
        comment:
          "Ricardo instaló el piso de nuestra cancha de básquet. La calidad es excepcional y cumple con todas las normativas deportivas.",
        project: "Pisos Deportivos",
      },
      {
        id: 2,
        author: "Laboratorio Médico",
        date: "5 de Abril, 2025",
        rating: 5,
        comment:
          "Instaló pisos antiestáticos en nuestro laboratorio. Cumple perfectamente con nuestros requisitos técnicos y de seguridad.",
        project: "Pisos Antiestáticos",
      },
    ],
    certifications: [
      "Ingeniero en Materiales",
      "Especialista en Pisos Técnicos",
      "Certificación en Normativas Deportivas",
    ],
  },
  {
    id: "plomeria-5",
    name: "Valeria Torres",
    profession: "Plomera Residencial",
    services: ["plomería"],
    bio: "Plomera especializada en soluciones residenciales. Ofrezco servicios de calidad con garantía en todos mis trabajos.",
    rating: 4.6,
    reviewsCount: 65,
    completedJobs: 95,
    location: "La Plata, Buenos Aires",
    joinedDate: "Agosto 2021",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Instalación de Cocinas", price: "$30.000-60.000", duration: "3-6 horas" },
      { name: "Reparación de Filtraciones", price: "$15.000-30.000", duration: "1-3 horas" },
      { name: "Instalación de Tanques de Agua", price: "$40.000-80.000", duration: "4-8 horas" },
    ],
    reviews: [
      {
        id: 1,
        author: "Mariana L.",
        date: "25 de Marzo, 2025",
        rating: 5,
        comment: "Valeria instaló toda la plomería de nuestra cocina nueva. Trabajo impecable y muy profesional.",
        project: "Instalación de Cocinas",
      },
      {
        id: 2,
        author: "Gustavo P.",
        date: "18 de Marzo, 2025",
        rating: 4,
        comment:
          "Solucionó una filtración complicada en nuestra terraza. Buen trabajo aunque un poco más caro de lo esperado.",
        project: "Reparación de Filtraciones",
      },
    ],
    certifications: ["Técnica en Instalaciones Domiciliarias", "Especialista en Detección de Fugas"],
  },
  {
    id: "electricidad-5",
    name: "Javier López",
    profession: "Electricista y Técnico en Domótica",
    services: ["electricidad"],
    bio: "Especialista en instalaciones eléctricas inteligentes y domótica. Transformo hogares convencionales en casas inteligentes.",
    rating: 4.9,
    reviewsCount: 70,
    completedJobs: 95,
    location: "La Plata, Buenos Aires",
    joinedDate: "Julio 2021",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Instalación de Domótica", price: "$100.000-300.000", duration: "3-7 días" },
      { name: "Automatización de Hogar", price: "$80.000-200.000", duration: "2-5 días" },
      { name: "Instalación de Cámaras", price: "$40.000-100.000", duration: "1-2 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Ricardo P.",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Javier convirtió nuestra casa en un hogar inteligente. Ahora controlamos todo desde el celular. Increíble trabajo.",
        project: "Instalación de Domótica",
      },
      {
        id: 2,
        author: "Silvia M.",
        date: "10 de Marzo, 2025",
        rating: 5,
        comment: "Instaló un sistema de cámaras y seguridad en toda la casa. Excelente trabajo y muy profesional.",
        project: "Instalación de Cámaras",
      },
    ],
    certifications: ["Técnico Electricista", "Especialista en Domótica", "Certificación en Sistemas de Seguridad"],
  },
  {
    id: "carpinteria-5",
    name: "Valeria Romero",
    profession: "Carpintera y Diseñadora",
    services: ["carpintería"],
    bio: "Carpintera especializada en diseño contemporáneo y sustentable. Creo muebles funcionales con maderas certificadas y técnicas respetuosas con el medio ambiente.",
    rating: 4.8,
    reviewsCount: 65,
    completedJobs: 95,
    location: "La Plata, Buenos Aires",
    joinedDate: "Junio 2021",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Muebles Sustentables", price: "$90.000-250.000", duration: "15-30 días" },
      { name: "Diseños Minimalistas", price: "$70.000-180.000", duration: "10-25 días" },
      { name: "Mobiliario Infantil", price: "$50.000-120.000", duration: "7-20 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Centro Cultural La Plata",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Valeria diseñó y fabricó todo el mobiliario de nuestra sala infantil con materiales ecológicos. El resultado es hermoso y seguro para los niños.",
        project: "Mobiliario Infantil",
      },
      {
        id: 2,
        author: "Estudio de Arquitectura Eco",
        date: "10 de Marzo, 2025",
        rating: 5,
        comment:
          "Colaboramos con Valeria en varios proyectos sustentables. Su trabajo es excepcional y su compromiso con el medio ambiente es admirable.",
        project: "Muebles Sustentables",
      },
    ],
    certifications: [
      "Diseñadora Industrial",
      "Especialista en Maderas Sustentables",
      "Certificación en Producción Ecológica",
    ],
  },
  {
    id: "pintura-5",
    name: "Lucía Fernández",
    profession: "Pintora y Restauradora",
    services: ["pintura"],
    bio: "Especialista en restauración de pinturas y acabados en casas antiguas. Recupero la belleza original respetando las técnicas y materiales de época.",
    rating: 4.7,
    reviewsCount: 65,
    completedJobs: 95,
    location: "La Plata, Buenos Aires",
    joinedDate: "Julio 2021",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Restauración de Pinturas", price: "$70.000-200.000", duration: "7-20 días" },
      { name: "Recuperación de Molduras", price: "$60.000-150.000", duration: "5-15 días" },
      { name: "Pátinas", price: "$50.000-120.000", duration: "3-10 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Casa Histórica La Plata",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Lucía restauró todas las pinturas originales de nuestra casa centenaria. Su trabajo es meticuloso y respetuoso con la historia del edificio.",
        project: "Restauración de Pinturas",
      },
      {
        id: 2,
        author: "Teatro Municipal",
        date: "10 de Marzo, 2025",
        rating: 4,
        comment:
          "Realizó la recuperación de molduras y pinturas decorativas en nuestro foyer. Excelente trabajo aunque requirió más tiempo del previsto.",
        project: "Recuperación de Molduras",
      },
    ],
    certifications: ["Restauradora de Arte", "Especialista en Técnicas Históricas", "Técnica en Conservación"],
  },
  {
    id: "techado-5",
    name: "Laura Vega",
    profession: "Especialista en Techos Modernos",
    services: ["techado"],
    bio: "Profesional especializada en soluciones de techado modernas y eficientes. Trabajo con los últimos materiales y tecnologías para garantizar durabilidad y eficiencia energética.",
    rating: 4.8,
    reviewsCount: 70,
    completedJobs: 105,
    location: "La Plata, Buenos Aires",
    joinedDate: "Junio 2021",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Techos de Chapa Prepintada", price: "$150.000-400.000", duration: "5-15 días" },
      { name: "Techos con Aislación Térmica", price: "$200.000-500.000", duration: "7-20 días" },
      { name: "Techos Fotovoltaicos", price: "$300.000-800.000", duration: "10-25 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Oficinas La Plata",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Laura instaló un techo con paneles fotovoltaicos integrados. El trabajo es excelente y ya estamos ahorrando en electricidad.",
        project: "Techos Fotovoltaicos",
      },
      {
        id: 2,
        author: "Familia Rodríguez",
        date: "10 de Marzo, 2025",
        rating: 5,
        comment:
          "Instaló un techo con aislación térmica que ha mejorado notablemente la temperatura de nuestra casa. Profesional y eficiente.",
        project: "Techos con Aislación Térmica",
      },
    ],
    certifications: [
      "Ingeniera en Construcción",
      "Especialista en Eficiencia Energética",
      "Certificación en Energías Renovables",
    ],
  },
  {
    id: "pisos-5",
    name: "Alejandra Gómez",
    profession: "Restauradora de Pisos Antiguos",
    services: ["pisos"],
    bio: "Especialista en restauración y recuperación de pisos antiguos. Devuelvo la vida a mosaicos, baldosas y maderas históricas respetando sus características originales.",
    rating: 4.9,
    reviewsCount: 70,
    completedJobs: 100,
    location: "La Plata, Buenos Aires",
    joinedDate: "Junio 2021",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Restauración de Mosaicos", price: "$90.000-250.000", duration: "7-20 días" },
      { name: "Recuperación de Pisos de Madera", price: "$80.000-200.000", duration: "5-15 días" },
      { name: "Reposición de Piezas Originales", price: "$70.000-180.000", duration: "Según proyecto" },
    ],
    reviews: [
      {
        id: 1,
        author: "Casa Histórica La Plata",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Alejandra restauró los mosaicos centenarios de nuestra casa. El trabajo es impresionante, recuperó colores y diseños que creíamos perdidos.",
        project: "Restauración de Mosaicos",
      },
      {
        id: 2,
        author: "Museo Provincial",
        date: "10 de Marzo, 2025",
        rating: 5,
        comment:
          "Recuperó el piso de parquet original de nuestra sala principal. Su conocimiento de técnicas antiguas y su meticulosidad son admirables.",
        project: "Recuperación de Pisos de Madera",
      },
    ],
    certifications: ["Restauradora de Patrimonio", "Especialista en Materiales Históricos", "Técnica en Conservación"],
  },
  // Nuevos profesionales adicionales para llegar a 40
  {
    id: "plomeria-6",
    name: "Sebastián Moreno",
    profession: "Plomero Especialista en Gas",
    services: ["plomería"],
    bio: "Plomero matriculado especializado en instalaciones de gas natural y envasado. Más de 12 años de experiencia en el sector residencial e industrial.",
    rating: 4.8,
    reviewsCount: 92,
    completedJobs: 140,
    location: "Mar del Plata, Buenos Aires",
    joinedDate: "Abril 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Instalación de Gas", price: "$50.000-120.000", duration: "1-3 días" },
      { name: "Habilitaciones", price: "$30.000-60.000", duration: "Según trámite" },
      { name: "Detección de Fugas", price: "$15.000-30.000", duration: "1-3 horas" },
      { name: "Conversión a Gas Natural", price: "$70.000-150.000", duration: "2-4 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Familia Gutiérrez",
        date: "10 de Abril, 2025",
        rating: 5,
        comment: "Sebastián realizó la instalación de gas en nuestra casa nueva. Trabajo impecable y muy profesional.",
        project: "Instalación de Gas",
      },
      {
        id: 2,
        author: "Restaurante Mar Azul",
        date: "25 de Marzo, 2025",
        rating: 5,
        comment: "Hizo la conversión a gas natural de nuestro local. Excelente trabajo y muy buen asesoramiento.",
        project: "Conversión a Gas Natural",
      },
    ],
    certifications: ["Matriculado en Gas", "Técnico en Seguridad de Instalaciones", "Especialista en Normativas"],
  },
  {
    id: "electricidad-6",
    name: "Mariana Sosa",
    profession: "Electricista Industrial",
    services: ["electricidad"],
    bio: "Ingeniera eléctrica con especialización en automatización industrial. Más de 15 años de experiencia en proyectos de gran envergadura.",
    rating: 4.9,
    reviewsCount: 88,
    completedJobs: 135,
    location: "San Luis, Argentina",
    joinedDate: "Mayo 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Automatización Industrial", price: "$200.000-800.000", duration: "Según proyecto" },
      { name: "Instalación de PLC", price: "$150.000-400.000", duration: "5-15 días" },
      { name: "Mantenimiento Preventivo", price: "$80.000-200.000", duration: "2-5 días" },
      { name: "Auditorías Eléctricas", price: "$60.000-150.000", duration: "3-7 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Industria Metalúrgica San Luis",
        date: "15 de Abril, 2025",
        rating: 5,
        comment:
          "Mariana implementó todo el sistema de automatización de nuestra planta. Trabajo excepcional y muy profesional.",
        project: "Automatización Industrial",
      },
      {
        id: 2,
        author: "Fábrica de Alimentos",
        date: "2 de Marzo, 2025",
        rating: 5,
        comment: "Realizó la instalación y programación de PLCs en nuestra línea de producción. Excelente trabajo.",
        project: "Instalación de PLC",
      },
    ],
    certifications: ["Ingeniera Eléctrica", "Especialista en Automatización", "Certificación en Seguridad Industrial"],
  },
  {
    id: "carpinteria-6",
    name: "Jorge Méndez",
    profession: "Carpintero Naval",
    services: ["carpintería"],
    bio: "Especialista en carpintería naval con más de 25 años de experiencia. Construcción y restauración de embarcaciones de madera siguiendo técnicas tradicionales.",
    rating: 4.9,
    reviewsCount: 65,
    completedJobs: 90,
    location: "Tigre, Buenos Aires",
    joinedDate: "Febrero 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Restauración de Embarcaciones", price: "$200.000-1.000.000", duration: "30-120 días" },
      { name: "Construcción de Botes", price: "$500.000-2.000.000", duration: "60-180 días" },
      { name: "Reparaciones", price: "$50.000-300.000", duration: "7-30 días" },
      { name: "Mantenimiento", price: "$30.000-100.000", duration: "3-10 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Club Náutico Tigre",
        date: "20 de Abril, 2025",
        rating: 5,
        comment:
          "Jorge restauró nuestra embarcación histórica con un respeto absoluto por las técnicas originales. Trabajo excepcional.",
        project: "Restauración de Embarcaciones",
      },
      {
        id: 2,
        author: "Ricardo M.",
        date: "5 de Marzo, 2025",
        rating: 5,
        comment: "Construyó un bote a medida para nuestra familia. El resultado es una verdadera obra de arte.",
        project: "Construcción de Botes",
      },
    ],
    certifications: [
      "Maestro Carpintero Naval",
      "Técnico en Construcción de Embarcaciones",
      "Especialista en Maderas Náuticas",
    ],
  },
  {
    id: "pintura-6",
    name: "Sofía Ramírez",
    profession: "Pintora de Murales",
    services: ["pintura"],
    bio: "Artista especializada en murales urbanos y arte público. Transformo espacios con color y mensajes que conectan con la comunidad.",
    rating: 4.8,
    reviewsCount: 72,
    completedJobs: 105,
    location: "Salta, Argentina",
    joinedDate: "Julio 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Murales Urbanos", price: "$100.000-500.000", duration: "7-30 días" },
      { name: "Arte en Escuelas", price: "$80.000-300.000", duration: "5-20 días" },
      { name: "Murales Comerciales", price: "$120.000-400.000", duration: "10-25 días" },
      { name: "Talleres de Arte", price: "$50.000-150.000", duration: "1-5 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Municipalidad de Salta",
        date: "15 de Abril, 2025",
        rating: 5,
        comment:
          "Sofía realizó un mural impresionante que se ha convertido en un punto de referencia en nuestra ciudad. Trabajo excepcional.",
        project: "Murales Urbanos",
      },
      {
        id: 2,
        author: "Escuela Primaria 123",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Transformó nuestro patio con murales educativos que encantan a los niños. Además realizó talleres con los alumnos.",
        project: "Arte en Escuelas",
      },
    ],
    certifications: ["Licenciada en Bellas Artes", "Especialista en Arte Urbano", "Educadora Artística"],
  },
  {
    id: "techado-6",
    name: "Fernando Quiroga",
    profession: "Especialista en Techos Solares",
    services: ["techado"],
    bio: "Ingeniero especializado en integración de sistemas solares en techos. Combino eficiencia energética con soluciones estéticas y duraderas.",
    rating: 4.9,
    reviewsCount: 68,
    completedJobs: 95,
    location: "Neuquén, Argentina",
    joinedDate: "Marzo 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Techos Solares Integrados", price: "$400.000-1.200.000", duration: "15-45 días" },
      { name: "Instalación de Paneles", price: "$200.000-600.000", duration: "7-20 días" },
      { name: "Techos Ecológicos", price: "$300.000-800.000", duration: "10-30 días" },
      { name: "Asesoramiento Energético", price: "$50.000-150.000", duration: "1-5 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Centro Comercial Neuquén",
        date: "10 de Abril, 2025",
        rating: 5,
        comment:
          "Fernando diseñó e instaló un sistema de techos solares que ha reducido nuestra factura energética en un 70%. Excelente trabajo.",
        project: "Techos Solares Integrados",
      },
      {
        id: 2,
        author: "Familia Martínez",
        date: "25 de Marzo, 2025",
        rating: 5,
        comment:
          "Instaló paneles solares en nuestro techo con un diseño que se integra perfectamente con la arquitectura de la casa.",
        project: "Instalación de Paneles",
      },
    ],
    certifications: [
      "Ingeniero en Energías Renovables",
      "Especialista en Sistemas Solares",
      "Certificación en Eficiencia Energética",
    ],
  },
  {
    id: "pisos-6",
    name: "Martina Rojas",
    profession: "Especialista en Pisos Artísticos",
    services: ["pisos"],
    bio: "Artista especializada en pisos decorativos y artísticos. Creo superficies únicas que combinan funcionalidad con expresión artística.",
    rating: 4.8,
    reviewsCount: 62,
    completedJobs: 85,
    location: "Bariloche, Río Negro",
    joinedDate: "Septiembre 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Pisos 3D", price: "$150.000-400.000", duration: "10-25 días" },
      { name: "Mosaicos Artísticos", price: "$120.000-350.000", duration: "15-30 días" },
      { name: "Pisos Temáticos", price: "$100.000-300.000", duration: "7-20 días" },
      { name: "Restauración Artística", price: "$80.000-250.000", duration: "10-30 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Hotel Bariloche",
        date: "15 de Abril, 2025",
        rating: 5,
        comment:
          "Martina creó un impresionante piso 3D en nuestro lobby que deja a todos los huéspedes maravillados. Trabajo excepcional.",
        project: "Pisos 3D",
      },
      {
        id: 2,
        author: "Restaurante Lago",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Diseñó e instaló un mosaico artístico que se ha convertido en el centro de atención de nuestro local. Bellísimo trabajo.",
        project: "Mosaicos Artísticos",
      },
    ],
    certifications: ["Licenciada en Bellas Artes", "Especialista en Técnicas de Mosaico", "Diseñadora de Interiores"],
  },
  {
    id: "plomeria-7",
    name: "Raúl Giménez",
    profession: "Plomero Ecológico",
    services: ["plomería"],
    bio: "Especialista en sistemas de plomería ecológica y ahorro de agua. Implemento soluciones sustentables que respetan el medio ambiente.",
    rating: 4.7,
    reviewsCount: 58,
    completedJobs: 80,
    location: "Ushuaia, Tierra del Fuego",
    joinedDate: "Octubre 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Sistemas de Recolección de Agua de Lluvia", price: "$100.000-300.000", duration: "5-15 días" },
      { name: "Instalación de Sanitarios Ecológicos", price: "$50.000-150.000", duration: "2-5 días" },
      { name: "Sistemas de Reutilización de Aguas Grises", price: "$80.000-250.000", duration: "3-10 días" },
      { name: "Asesoramiento en Ahorro de Agua", price: "$30.000-80.000", duration: "1-3 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Eco Lodge Ushuaia",
        date: "10 de Abril, 2025",
        rating: 5,
        comment:
          "Raúl diseñó e instaló todo nuestro sistema de plomería ecológica. Gracias a él, nuestro lodge es completamente sustentable en cuanto al uso del agua.",
        project: "Sistemas de Recolección de Agua de Lluvia",
      },
      {
        id: 2,
        author: "Familia Eco",
        date: "25 de Marzo, 2025",
        rating: 5,
        comment:
          "Instaló sanitarios ecológicos y un sistema de reutilización de aguas grises en nuestra casa. Excelente trabajo y muy buen asesoramiento.",
        project: "Instalación de Sanitarios Ecológicos",
      },
    ],
    certifications: ["Técnico en Plomería", "Especialista en Sistemas Ecológicos", "Certificación en Sustentabilidad"],
  },
  {
    id: "electricidad-7",
    name: "Natalia Vega",
    profession: "Electricista Solar",
    services: ["electricidad"],
    bio: "Especialista en instalaciones eléctricas solares y sistemas autónomos. Diseño soluciones que aprovechan la energía del sol para hogares y empresas.",
    rating: 4.8,
    reviewsCount: 60,
    completedJobs: 85,
    location: "San Juan, Argentina",
    joinedDate: "Agosto 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Instalación de Sistemas Solares", price: "$200.000-600.000", duration: "7-20 días" },
      { name: "Sistemas Autónomos", price: "$300.000-800.000", duration: "10-30 días" },
      { name: "Iluminación Solar", price: "$100.000-300.000", duration: "5-15 días" },
      { name: "Mantenimiento de Sistemas", price: "$50.000-150.000", duration: "1-3 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Bodega San Juan",
        date: "15 de Abril, 2025",
        rating: 5,
        comment:
          "Natalia diseñó e instaló un sistema solar que abastece toda nuestra bodega. El trabajo es excelente y el ahorro energético notable.",
        project: "Instalación de Sistemas Solares",
      },
      {
        id: 2,
        author: "Familia Montaña",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Instaló un sistema autónomo en nuestra casa de montaña. Ahora tenemos electricidad confiable y limpia todo el año.",
        project: "Sistemas Autónomos",
      },
    ],
    certifications: ["Ingeniera Eléctrica", "Especialista en Energía Solar", "Certificación en Sistemas Autónomos"],
  },
  {
    id: "carpinteria-7",
    name: "Daniel Ortiz",
    profession: "Carpintero de Instrumentos Musicales",
    services: ["carpintería"],
    bio: "Luthier especializado en la construcción y restauración de instrumentos musicales de madera. Combino técnicas tradicionales con innovación para lograr sonidos perfectos.",
    rating: 4.9,
    reviewsCount: 55,
    completedJobs: 75,
    location: "Tandil, Buenos Aires",
    joinedDate: "Noviembre 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Construcción de Guitarras", price: "$200.000-800.000", duration: "30-90 días" },
      { name: "Restauración de Instrumentos", price: "$100.000-400.000", duration: "15-45 días" },
      { name: "Ajustes y Calibración", price: "$30.000-100.000", duration: "3-10 días" },
      { name: "Diseño Personalizado", price: "$300.000-1.000.000", duration: "45-120 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Conservatorio de Música Tandil",
        date: "10 de Abril, 2025",
        rating: 5,
        comment:
          "Daniel restauró nuestra colección de instrumentos históricos con un respeto absoluto por las técnicas originales. Trabajo excepcional.",
        project: "Restauración de Instrumentos",
      },
      {
        id: 2,
        author: "Guitarrista Profesional",
        date: "25 de Marzo, 2025",
        rating: 5,
        comment:
          "Construyó una guitarra personalizada que supera todas mis expectativas. El sonido es perfecto y la artesanía impecable.",
        project: "Construcción de Guitarras",
      },
    ],
    certifications: ["Maestro Luthier", "Especialista en Maderas Tonales", "Técnico en Acústica"],
  },
  {
    id: "pintura-7",
    name: "Gabriela Montes",
    profession: "Pintora de Efectos Especiales",
    services: ["pintura"],
    bio: "Especialista en efectos especiales y técnicas innovadoras de pintura. Creo ilusiones ópticas, efectos tridimensionales y acabados únicos.",
    rating: 4.8,
    reviewsCount: 59,
    completedJobs: 82,
    location: "San Miguel de Tucumán, Tucumán",
    joinedDate: "Julio 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Efectos Tridimensionales", price: "$100.000-300.000", duration: "7-20 días" },
      { name: "Ilusiones Ópticas", price: "$80.000-250.000", duration: "5-15 días" },
      { name: "Acabados Metalizados", price: "$70.000-200.000", duration: "3-10 días" },
      { name: "Pintura Luminiscente", price: "$90.000-280.000", duration: "5-15 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Teatro San Martín",
        date: "15 de Abril, 2025",
        rating: 5,
        comment:
          "Gabriela creó efectos tridimensionales impresionantes para nuestra escenografía. El público queda maravillado con las ilusiones.",
        project: "Efectos Tridimensionales",
      },
      {
        id: 2,
        author: "Discoteca Luz",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Realizó un mural con pintura luminiscente que transforma completamente nuestro local durante la noche. Trabajo espectacular.",
        project: "Pintura Luminiscente",
      },
    ],
    certifications: [
      "Licenciada en Bellas Artes",
      "Especialista en Efectos Especiales",
      "Técnica en Materiales Innovadores",
    ],
  },
  {
    id: "techado-7",
    name: "Gustavo Herrera",
    profession: "Especialista en Techos Históricos",
    services: ["techado"],
    bio: "Restaurador especializado en techos de edificios históricos y patrimoniales. Recupero la belleza original respetando técnicas y materiales de época.",
    rating: 4.9,
    reviewsCount: 52,
    completedJobs: 70,
    location: "Córdoba Capital, Córdoba",
    joinedDate: "Septiembre 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Restauración de Techos Patrimoniales", price: "$300.000-1.000.000", duration: "30-120 días" },
      { name: "Recuperación de Cúpulas", price: "$400.000-1.500.000", duration: "45-180 días" },
      { name: "Reposición de Tejas Históricas", price: "$200.000-600.000", duration: "20-60 días" },
      { name: "Asesoramiento Patrimonial", price: "$80.000-200.000", duration: "5-15 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Cabildo de Córdoba",
        date: "10 de Abril, 2025",
        rating: 5,
        comment:
          "Gustavo restauró el techo histórico de nuestro edificio con un respeto absoluto por las técnicas originales. Trabajo excepcional.",
        project: "Restauración de Techos Patrimoniales",
      },
      {
        id: 2,
        author: "Iglesia San Martín",
        date: "25 de Marzo, 2025",
        rating: 5,
        comment:
          "Recuperó nuestra cúpula dañada por el tiempo. El resultado es impresionante y respeta completamente el estilo original.",
        project: "Recuperación de Cúpulas",
      },
    ],
    certifications: ["Restaurador de Patrimonio", "Especialista en Técnicas Históricas", "Técnico en Conservación"],
  },
  {
    id: "pisos-7",
    name: "Camila Vargas",
    profession: "Especialista en Pisos Ecológicos",
    services: ["pisos"],
    bio: "Profesional especializada en pisos sustentables y ecológicos. Trabajo con materiales reciclados, naturales y de bajo impacto ambiental.",
    rating: 4.7,
    reviewsCount: 56,
    completedJobs: 78,
    location: "Resistencia, Chaco",
    joinedDate: "Octubre 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Pisos de Bambú", price: "$120.000-300.000", duration: "7-20 días" },
      { name: "Pisos de Materiales Reciclados", price: "$100.000-250.000", duration: "5-15 días" },
      { name: "Pisos de Corcho", price: "$110.000-280.000", duration: "6-18 días" },
      { name: "Asesoramiento en Sustentabilidad", price: "$40.000-100.000", duration: "1-5 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Centro Cultural Ecológico",
        date: "15 de Abril, 2025",
        rating: 5,
        comment:
          "Camila instaló pisos de bambú en todo nuestro centro. El resultado es hermoso, duradero y completamente sustentable.",
        project: "Pisos de Bambú",
      },
      {
        id: 2,
        author: "Eco Café",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Realizó un piso increíble con materiales reciclados que se ha convertido en el centro de atención de nuestro local.",
        project: "Pisos de Materiales Reciclados",
      },
    ],
    certifications: [
      "Especialista en Construcción Sustentable",
      "Técnica en Materiales Ecológicos",
      "Certificación en Huella de Carbono",
    ],
  },
  {
    id: "plomeria-8",
    name: "Javier Acosta",
    profession: "Plomero Especialista en Piscinas",
    services: ["plomería"],
    bio: "Especialista en sistemas hidráulicos para piscinas y espacios acuáticos. Diseño, instalación y mantenimiento de circuitos de agua complejos.",
    rating: 4.8,
    reviewsCount: 64,
    completedJobs: 90,
    location: "Mar del Plata, Buenos Aires",
    joinedDate: "Mayo 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Instalación de Sistemas para Piscinas", price: "$150.000-500.000", duration: "10-30 días" },
      { name: "Mantenimiento de Piscinas", price: "$50.000-150.000", duration: "1-5 días" },
      { name: "Sistemas de Filtración", price: "$80.000-250.000", duration: "3-10 días" },
      { name: "Reparaciones Hidráulicas", price: "$40.000-120.000", duration: "1-7 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Club Náutico Mar del Plata",
        date: "10 de Abril, 2025",
        rating: 5,
        comment:
          "Javier diseñó e instaló todo el sistema hidráulico de nuestras piscinas olímpicas. Trabajo excepcional y muy profesional.",
        project: "Instalación de Sistemas para Piscinas",
      },
      {
        id: 2,
        author: "Hotel Playa",
        date: "25 de Marzo, 2025",
        rating: 5,
        comment:
          "Realizó el mantenimiento completo de nuestras piscinas. El agua nunca había estado tan perfecta y el sistema funciona de maravilla.",
        project: "Mantenimiento de Piscinas",
      },
    ],
    certifications: [
      "Técnico en Sistemas Hidráulicos",
      "Especialista en Tratamiento de Agua",
      "Certificación en Seguridad Acuática",
    ],
  },
  {
    id: "electricidad-8",
    name: "Luciano Paz",
    profession: "Electricista de Espectáculos",
    services: ["electricidad"],
    bio: "Especialista en sistemas eléctricos para eventos y espectáculos. Diseño e implemento soluciones de iluminación y energía para shows y conciertos.",
    rating: 4.9,
    reviewsCount: 70,
    completedJobs: 105,
    location: "Rosario, Santa Fe",
    joinedDate: "Abril 2020",
    responseTime: "Menos de 1 hora",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Sistemas para Conciertos", price: "$200.000-800.000", duration: "3-15 días" },
      { name: "Iluminación de Eventos", price: "$150.000-500.000", duration: "2-10 días" },
      { name: "Instalaciones Temporales", price: "$100.000-400.000", duration: "1-7 días" },
      { name: "Asesoramiento Técnico", price: "$50.000-150.000", duration: "1-3 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Festival de Música Rosario",
        date: "15 de Abril, 2025",
        rating: 5,
        comment:
          "Luciano diseñó e implementó todo el sistema eléctrico de nuestro festival. Trabajo impecable incluso con las exigencias de los artistas internacionales.",
        project: "Sistemas para Conciertos",
      },
      {
        id: 2,
        author: "Teatro Municipal",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Realizó la iluminación de nuestro evento anual. El resultado fue espectacular y el público quedó maravillado.",
        project: "Iluminación de Eventos",
      },
    ],
    certifications: [
      "Técnico en Sistemas Eléctricos",
      "Especialista en Iluminación",
      "Certificación en Seguridad de Eventos",
    ],
  },
  {
    id: "carpinteria-8",
    name: "Elena Molina",
    profession: "Carpintera de Juguetes",
    services: ["carpintería"],
    bio: "Artesana especializada en juguetes de madera educativos y seguros. Creo piezas únicas que estimulan la creatividad y el desarrollo infantil.",
    rating: 4.8,
    reviewsCount: 62,
    completedJobs: 88,
    location: "Santa Fe, Argentina",
    joinedDate: "Julio 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Juguetes Educativos", price: "$15.000-50.000", duration: "3-15 días" },
      { name: "Mobiliario Infantil", price: "$50.000-150.000", duration: "7-25 días" },
      { name: "Juegos de Exterior", price: "$80.000-250.000", duration: "10-30 días" },
      { name: "Diseños Personalizados", price: "$30.000-100.000", duration: "5-20 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Jardín de Infantes Arcoiris",
        date: "10 de Abril, 2025",
        rating: 5,
        comment:
          "Elena creó una colección completa de juguetes educativos para nuestro jardín. Los niños los adoran y son extremadamente duraderos.",
        project: "Juguetes Educativos",
      },
      {
        id: 2,
        author: "Familia Torres",
        date: "25 de Marzo, 2025",
        rating: 5,
        comment:
          "Diseñó e instaló un área de juegos exterior para nuestros hijos. El resultado es hermoso, seguro y muy divertido.",
        project: "Juegos de Exterior",
      },
    ],
    certifications: ["Maestra Artesana", "Especialista en Seguridad Infantil", "Diseñadora de Juguetes Educativos"],
  },
  {
    id: "pintura-8",
    name: "Matías Figueroa",
    profession: "Pintor Automotriz",
    services: ["pintura"],
    bio: "Especialista en pintura y personalización de vehículos. Más de 15 años de experiencia en acabados de alta calidad, aerografía y restauración de clásicos.",
    rating: 4.8,
    reviewsCount: 68,
    completedJobs: 95,
    location: "Córdoba, Argentina",
    joinedDate: "Junio 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Pintura Completa", price: "$150.000-400.000", duration: "7-15 días" },
      { name: "Aerografía", price: "$80.000-300.000", duration: "5-20 días" },
      { name: "Restauración de Clásicos", price: "$200.000-600.000", duration: "15-45 días" },
      { name: "Personalización", price: "$100.000-350.000", duration: "10-30 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Club de Autos Clásicos",
        date: "15 de Abril, 2025",
        rating: 5,
        comment:
          "Matías restauró la pintura original de nuestro Ford Falcon 1970. El trabajo es impecable y respeta completamente el acabado de época.",
        project: "Restauración de Clásicos",
      },
      {
        id: 2,
        author: "Juan Pérez",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Realizó un trabajo de aerografía personalizado en mi moto. El resultado es espectacular y todos me preguntan quién lo hizo.",
        project: "Aerografía",
      },
    ],
    certifications: ["Técnico en Pintura Automotriz", "Especialista en Aerografía", "Certificación en Restauración"],
  },
  {
    id: "techado-8",
    name: "Ramiro Soto",
    profession: "Especialista en Techos Antisísmicos",
    services: ["techado"],
    bio: "Ingeniero especializado en techos resistentes a sismos y condiciones extremas. Diseño e implemento soluciones que garantizan seguridad y durabilidad.",
    rating: 4.9,
    reviewsCount: 58,
    completedJobs: 80,
    location: "San Juan, Argentina",
    joinedDate: "Agosto 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Techos Antisísmicos", price: "$300.000-800.000", duration: "15-45 días" },
      { name: "Refuerzos Estructurales", price: "$200.000-500.000", duration: "10-30 días" },
      { name: "Evaluación de Riesgos", price: "$80.000-200.000", duration: "3-10 días" },
      { name: "Reconstrucción Post-Sismo", price: "$250.000-700.000", duration: "15-60 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Escuela Provincial San Juan",
        date: "10 de Abril, 2025",
        rating: 5,
        comment:
          "Ramiro diseñó e instaló un sistema de techado antisísmico para nuestra escuela. Nos sentimos mucho más seguros ahora.",
        project: "Techos Antisísmicos",
      },
      {
        id: 2,
        author: "Comunidad Vecinal",
        date: "25 de Marzo, 2025",
        rating: 5,
        comment:
          "Realizó la evaluación y refuerzo de los techos de todo nuestro barrio. Su trabajo es meticuloso y muy profesional.",
        project: "Refuerzos Estructurales",
      },
    ],
    certifications: [
      "Ingeniero Civil",
      "Especialista en Estructuras Antisísmicas",
      "Certificación en Evaluación de Riesgos",
    ],
  },
  {
    id: "pisos-8",
    name: "Valentina Robles",
    profession: "Especialista en Pisos para Exteriores",
    services: ["pisos"],
    bio: "Profesional especializada en pisos para espacios exteriores. Diseño e instalo soluciones resistentes a la intemperie, seguras y estéticas.",
    rating: 4.7,
    reviewsCount: 60,
    completedJobs: 85,
    location: "Paraná, Entre Ríos",
    joinedDate: "Septiembre 2020",
    responseTime: "1-2 horas",
    image: "/placeholder.svg?height=400&width=400",
    servicesList: [
      { name: "Decks de Exterior", price: "$100.000-300.000", duration: "7-20 días" },
      { name: "Pisos para Piscinas", price: "$120.000-350.000", duration: "10-25 días" },
      { name: "Senderos y Caminos", price: "$80.000-250.000", duration: "5-15 días" },
      { name: "Patios y Terrazas", price: "$90.000-280.000", duration: "7-20 días" },
    ],
    reviews: [
      {
        id: 1,
        author: "Club de Campo Paraná",
        date: "15 de Abril, 2025",
        rating: 5,
        comment:
          "Valentina diseñó e instaló todos los pisos exteriores de nuestro club. El resultado es hermoso, seguro y ha resistido perfectamente las lluvias intensas.",
        project: "Pisos para Piscinas",
      },
      {
        id: 2,
        author: "Familia Rodríguez",
        date: "20 de Marzo, 2025",
        rating: 5,
        comment:
          "Construyó un deck y senderos en nuestro jardín que han transformado completamente el espacio. Excelente trabajo.",
        project: "Decks de Exterior",
      },
    ],
    certifications: [
      "Especialista en Materiales para Exteriores",
      "Técnica en Drenaje y Escorrentía",
      "Diseñadora de Espacios Exteriores",
    ],
  },
]

// Función para obtener todos los profesionales
export function getAllProfessionals(): Professional[] {
  return expandedProfessionalProfiles
}

// Función para obtener profesionales por categoría
export function getProfessionalsByCategory(category: string): Professional[] {
  return expandedProfessionalProfiles.filter((professional) => professional.services.includes(category.toLowerCase()))
}

// Función para obtener un profesional por ID
export function getProfessionalById(id: string): Professional | undefined {
  return expandedProfessionalProfiles.find((professional) => professional.id === id)
}

// Función para buscar profesionales por nombre o ubicación
export function searchProfessionals(query: string): Professional[] {
  const searchTerm = query.toLowerCase()
  return expandedProfessionalProfiles.filter(
    (professional) =>
      professional.name.toLowerCase().includes(searchTerm) ||
      professional.location.toLowerCase().includes(searchTerm) ||
      professional.profession.toLowerCase().includes(searchTerm),
  )
}

// Función para obtener profesionales destacados (con rating alto)
export function getFeaturedProfessionals(limit = 6): Professional[] {
  return [...expandedProfessionalProfiles]
    .sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount)
    .slice(0, limit)
}

// Función para obtener profesionales por ubicación
export function getProfessionalsByLocation(location: string): Professional[] {
  const locationTerm = location.toLowerCase()
  return expandedProfessionalProfiles.filter((professional) =>
    professional.location.toLowerCase().includes(locationTerm),
  )
}

// Exportar tipos
export type { Professional }
