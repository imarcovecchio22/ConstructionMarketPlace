// Categorías de servicios disponibles en la plataforma

export interface Category {
  id: string
  name: string
  description: string
  icon: string
  popularServices: string[]
}

export const serviceCategories: Category[] = [
  {
    id: "plomeria",
    name: "Plomería",
    description: "Servicios de instalación, reparación y mantenimiento de sistemas de agua, gas y desagüe.",
    icon: "droplet",
    popularServices: [
      "Reparación de pérdidas",
      "Instalación de grifería",
      "Destapaciones",
      "Instalación de termotanques",
      "Reparación de cañerías",
    ],
  },
  {
    id: "electricidad",
    name: "Electricidad",
    description:
      "Servicios de instalación, reparación y mantenimiento de sistemas eléctricos residenciales y comerciales.",
    icon: "zap",
    popularServices: [
      "Instalación de luces",
      "Reparación de cortocircuitos",
      "Instalación de tableros",
      "Cableado",
      "Instalación de ventiladores",
    ],
  },
  {
    id: "carpinteria",
    name: "Carpintería",
    description: "Servicios de fabricación, instalación y reparación de estructuras y muebles de madera.",
    icon: "hammer",
    popularServices: [
      "Muebles a medida",
      "Reparación de muebles",
      "Instalación de puertas",
      "Decks de madera",
      "Restauración",
    ],
  },
  {
    id: "pintura",
    name: "Pintura",
    description: "Servicios de pintura interior y exterior, técnicas decorativas y tratamientos de superficies.",
    icon: "paintbrush",
    popularServices: [
      "Pintura interior",
      "Pintura exterior",
      "Técnicas decorativas",
      "Empapelado",
      "Tratamiento antihumedad",
    ],
  },
  {
    id: "techado",
    name: "Techado",
    description: "Servicios de instalación, reparación y mantenimiento de techos y cubiertas.",
    icon: "home",
    popularServices: [
      "Reparación de goteras",
      "Impermeabilización",
      "Instalación de techos",
      "Techos de tejas",
      "Mantenimiento preventivo",
    ],
  },
  {
    id: "pisos",
    name: "Pisos",
    description: "Servicios de instalación, reparación y mantenimiento de todo tipo de pisos y revestimientos.",
    icon: "square",
    popularServices: ["Pisos flotantes", "Pisos de madera", "Cerámicos", "Porcelanatos", "Pulido y plastificado"],
  },
]

// Función para obtener todas las categorías
export function getAllCategories(): Category[] {
  return serviceCategories
}

// Función para obtener una categoría por ID
export function getCategoryById(id: string): Category | undefined {
  return serviceCategories.find((category) => category.id === id)
}

// Función para obtener categorías populares
export function getPopularCategories(limit = 4): Category[] {
  return serviceCategories.slice(0, limit)
}

// Exportar tipos
export type { Category }
