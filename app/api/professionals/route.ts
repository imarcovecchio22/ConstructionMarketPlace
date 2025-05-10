import { NextResponse } from "next/server"
import { expandedProfessionalProfiles } from "@/app/data/professionals-expanded"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const location = searchParams.get("location")
  const query = searchParams.get("query")
  const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")!) : undefined

  let filteredProfessionals = [...expandedProfessionalProfiles]

  // Filtrar por categoría si se proporciona
  if (category) {
    filteredProfessionals = filteredProfessionals.filter((professional) =>
      professional.services.includes(category.toLowerCase()),
    )
  }

  // Filtrar por ubicación si se proporciona
  if (location) {
    const locationTerm = location.toLowerCase()
    filteredProfessionals = filteredProfessionals.filter((professional) =>
      professional.location.toLowerCase().includes(locationTerm),
    )
  }

  // Filtrar por búsqueda si se proporciona
  if (query) {
    const searchTerm = query.toLowerCase()
    filteredProfessionals = filteredProfessionals.filter(
      (professional) =>
        professional.name.toLowerCase().includes(searchTerm) ||
        professional.profession.toLowerCase().includes(searchTerm) ||
        professional.bio.toLowerCase().includes(searchTerm),
    )
  }

  // Limitar resultados si se proporciona un límite
  if (limit && limit > 0) {
    filteredProfessionals = filteredProfessionals.slice(0, limit)
  }

  return NextResponse.json(filteredProfessionals)
}
